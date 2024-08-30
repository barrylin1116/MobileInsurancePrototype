import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import * as pdfjsLib from 'pdfjs-dist/webpack';
import SignModal from 'app/features/Insurance/pages/Modals/SignModal';
import { Card } from 'antd';
import Signature from 'react-signature-canvas';
import SignatureModal from 'app/features/Insurance/pages/Modals/SignatureModal';
import { Point } from './types';
import _ from 'lodash';

const InsureDoc: React.FC<any> = (props) => {
  const [pdf, setPdf] = useState<any>(null);
  const initSignList = [
    {
      name: 'insure',
      backRect: [172, 340, 100, 30],
      signImg: null,
      clickRect: [new Point(172, 340), new Point(172, 370), new Point(272, 340), new Point(272, 370)]
    },
    {
      name: 'applicant',
      backRect: [308, 340, 100, 30],
      signImg: null,
      clickRect: [new Point(308, 340), new Point(308, 370), new Point(408, 340), new Point(408, 370)]
    },
    {
      name: 'agentInsure',
      backRect: [450, 320, 100, 30],
      signImg: null,
      clickRect: [new Point(450, 320), new Point(450, 350), new Point(550, 320), new Point(550, 350)]
    },
    {
      name: 'agentApplicant',
      backRect: [450, 355, 100, 30],
      signImg: null,
      clickRect: [new Point(450, 355), new Point(450, 385), new Point(550, 355), new Point(550, 385)]
    },
    {
      name: 'saleMan',
      backRect: [172, 485, 100, 30],
      signImg: null,
      clickRect: [new Point(172, 485), new Point(172, 515), new Point(272, 485), new Point(272, 515)]
    }
  ];
  const [signList, setSignList] = useState<any[]>(initSignList);
  const [currentSign, setCurrentSign] = useState<any>();
  const [bindRelationSet, setBindRelationSet] = useState<Set<string>>(new Set<string>([]));

  const loadFile = (url: string) => {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then((pdf: any) => {
      setPdf(pdf);
    });
  };

  useEffect(() => {
    loadFile(require('assets/pdf/insure.pdf'));
  }, []);

  useEffect(() => {
    if (pdf != null) {
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        pdf.getPage(pageNum).then((page: any) => {
          const canvas: any = document.getElementById('pdfCanvas-' + pageNum);
          const ctx = canvas.getContext('2d');
          const ratio = 2;
          const viewport = page.getViewport({ scale: 1.0 });
          canvas.width = viewport.width * ratio;
          canvas.height = viewport.height * ratio;
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
          // 将 PDF 页面渲染到 canvas 上下文中
          const renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          page.render(renderContext).promise.then(() => {
            if (pageNum === 3) {
              draw();
            }
          });
        });
      }
    }
  }, [pdf]);

  const draw = () => {
    const canvas: any = document.getElementById('pdfCanvas-3');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e0e0e0';
    signList.forEach(sign => {
      ctx.fillRect(sign.backRect[0], sign.backRect[1], sign.backRect[2], sign.backRect[3]);
    });
  };

  const drawRelation = (relation: string) => {
    const canvas: any = document.getElementById('pdfCanvas-3');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'black';
      ctx.clearRect(530, 385, 35, 15);
      switch (relation) {
        case 'agentInsure':
          ctx.fillText('要保人', 530, 395);
          break;
        case 'agentApplicant':
          ctx.fillText('被保人', 530, 395);
          break;
      }
    }
  };

  const [signatureVisible, setSignatureVisible] = useState(false);
  const $svg = useRef<any>(null);

  const isPointInRect = (point: Point, clickRect: Point[]): boolean => {
    const A = clickRect[1];// 左下顶点
    const B = clickRect[0];// 左上顶点
    const C = clickRect[2];// 右上顶点
    const D = clickRect[3];// 右下顶点
    const a = (B.x - A.x) * (point.y - A.y) - (B.y - A.y) * (point.x - A.x);
    const b = (C.x - B.x) * (point.y - B.y) - (C.y - B.y) * (point.x - B.x);
    const c = (D.x - C.x) * (point.y - C.y) - (D.y - C.y) * (point.x - C.x);
    const d = (A.x - D.x) * (point.y - D.y) - (A.y - D.y) * (point.x - D.x);
    if ((a > 0 && b > 0 && c > 0 && d > 0) || (a < 0 && b < 0 && c < 0 && d < 0)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (signatureVisible && currentSign.signImg) {
      const signArea = document.getElementsByClassName('signature');
      const canvas: any = signArea.item(0)?.getElementsByTagName('canvas');
      const img = new Image();
      img.src = currentSign.signImg;
      const ctx = canvas[0].getContext('2d');
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas[0].clientWidth, canvas[0].clientHeight);
      };
    }
  }, [signatureVisible]);

  useEffect(() => {
    const checkEditSuccess = () => {
      const editSuccess = signList.filter(s => s.signImg === null).length <= 0;
      if (editSuccess) {
        document.getElementById('pageItem-3')?.classList.add('active');
      } else {
        document.getElementById('pageItem-3')?.classList.remove('active');
      }
    };
    checkEditSuccess();
  }, [signList]);

  useEffect(() => {
    drawRelation(bindRelationSet.values().next().value);
  }, [bindRelationSet]);

  return (
    <>
      {props.visible &&
          (
            <SignModal
              headerTitle="要保書"
              isOpen={props.visible}
              buttonPosition="right"
              numPages={pdf ? pdf.numPages : 0}
              headerButton={
                <>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                    onClick={() => props.setVisible(false)}
                  >
                    完成
                  </button>
                  <button
                    type="button"
                    className="btn ml-1 btn-outline-light me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                    onClick={() => props.setVisible(false)}
                  >
                    取消
                  </button>
                </>
              }
            >
              <div className="justify-center d-flex">
                <div>
                  {pdf !== null &&
                      [...Array(pdf.numPages ?? 0)].map((_, index) => {
                        return (
                          <div key={index} className="pdfCard pb-3">
                            <Card id={'pdfCard-' + (index + 1)}>
                              <canvas
                                onClick={(e) => {
                                  let x = e.clientX;
                                  let y = e.clientY;
                                  const rect = e.currentTarget.getBoundingClientRect();
                                  x -= rect.left;
                                  y -= rect.top;
                                  x = x / e.currentTarget.clientWidth * e.currentTarget.width / 2;
                                  y = y / e.currentTarget.clientHeight * e.currentTarget.height / 2;
                                  // console.log(`x: ${x} y: ${y}`);
                                  signList.forEach(sign => {
                                    if (isPointInRect(new Point(x, y), sign.clickRect)) {
                                      setSignatureVisible(true);
                                      setCurrentSign(sign);
                                    }
                                  });
                                }} id={'pdfCanvas-' + (index + 1)}
                              />
                            </Card>
                          </div>
                        );
                      })}
                </div>
              </div>
            </SignModal>
          )}
      {signatureVisible &&
        <SignatureModal
          isModalMsg
          headerButton={
            <>
              <button
                type="button"
                className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                onClick={() => {
                  setSignatureVisible(false);
                  if ($svg.current) {
                    const trimedCanvas: HTMLCanvasElement = $svg.current.getTrimmedCanvas();
                    if (trimedCanvas) {
                      const resizedCanvas: any = document.getElementById('pdfCanvas-3');
                      const ctx = resizedCanvas?.getContext('2d');
                      // 重置
                      ctx.clearRect(currentSign.backRect[0],
                        currentSign.backRect[1],
                        100,
                        30);
                      // 添加背景
                      ctx.fillStyle = '#e0e0e0';
                      ctx.fillRect(currentSign.backRect[0],
                        currentSign.backRect[1],
                        100,
                        30);
                      // 添加签名
                      ctx.drawImage(
                        trimedCanvas,
                        currentSign.backRect[0],
                        currentSign.backRect[1],
                        100,
                        30
                      );
                      const myResizedData = trimedCanvas.toDataURL();
                      let clone = _.cloneDeep(signList);
                      clone = clone.map(m => {
                        if (m.name === currentSign.name) {
                          if (trimedCanvas.width > 1 && trimedCanvas.height > 1) {
                            currentSign.signImg = myResizedData;
                            if (m.name === 'agentInsure' || m.name === 'agentApplicant') {
                              const clone = _.clone(bindRelationSet);
                              clone.add(m.name);
                              setBindRelationSet(clone);
                            }
                          } else {
                            if (m.name === 'agentInsure' || m.name === 'agentApplicant') {
                              const clone = _.clone(bindRelationSet);
                              clone.delete(m.name);
                              setBindRelationSet(clone);
                            }
                            currentSign.signImg = null;
                          }
                          return currentSign;
                        }
                        return m;
                      });
                      setSignList(clone);
                    }
                  }
                }}
              >
                完成
              </button>
              <button
                type="button"
                className="btn ml-1 btn-outline-light me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                onClick={() => {
                  if ($svg.current) {
                    const current: SignaturePad = $svg.current;
                    current.clear();
                  }
                }}
              >
                撤銷
              </button>
            </>
          } buttonPosition="right" isOpen={signatureVisible}
        >
          <div className="signature">
            <Signature
              ref={$svg}
            />
          </div>
        </SignatureModal>}
    </>
  );
};
export default InsureDoc;
