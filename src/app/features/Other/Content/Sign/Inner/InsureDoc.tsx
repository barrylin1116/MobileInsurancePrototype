import React, { useEffect, useState } from 'react';
// @ts-ignore
import * as pdfjsLib from 'pdfjs-dist/webpack';
import SignModal from 'app/features/Insurance/pages/Modals/SignModal';
import { Card } from 'antd';

const InsureDoc: React.FC<any> = (props) => {
  const [pdf, setPdf] = useState<any>(null);
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
          canvas.style.height = '95%';
          ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
          // 将 PDF 页面渲染到 canvas 上下文中
          const renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          // debugger;
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
    ctx.fillRect(172, 340, 100, 30);
    ctx.fillRect(308, 340, 100, 30);
    ctx.fillRect(450, 320, 100, 30);
    ctx.fillRect(450, 355, 100, 30);
    ctx.fillRect(172, 485, 100, 30);
  };
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
                  <div
                    className="btn btn-outline-primary" onClick={() => {
                      props.setVisible(false);
                    }}
                  >完成
                  </div>
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
                                  console.log(x, y); // (x, y) 就是鼠标在 canvas 单击时的坐标
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
    </>
  );
};
export default InsureDoc;
