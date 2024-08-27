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
          // canvas.style.width = viewport.width + "px";
          // canvas.style.height = viewport.height + "px";
          canvas.style.width = '100%';
          canvas.style.height = '95%';
          // data.pdfWidth = viewport.width + 'px';
          ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
          // 将 PDF 页面渲染到 canvas 上下文中
          const renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          page.render(renderContext);
        });
      }
    }
  }, [pdf]);

  return (
    props.visible
      ? (
        <SignModal
          headerTitle="要保書"
          isOpen={props.visible}
          buttonPosition="right"
          numPages={pdf ? pdf.numPages : 0}
          headerButton={
            <div
              className="btn btn-outline-primary" onClick={() => {
                props.setVisible(false);
              }}
            >完成
            </div>
          }
        >
          <div className="justify-center d-flex">
            <div>
              {pdf !== null &&
                        [...Array(pdf.numPages ?? 0)].map((_, index) => {
                          return (
                            <Card id={'pdfCard-' + (index + 1)} className="mt-3" key={index}>
                              <canvas id={'pdfCanvas-' + (index + 1)} />
                            </Card>
                          );
                        })}
            </div>
          </div>
        </SignModal>
        )
      : <></>
  );
};
export default InsureDoc;
