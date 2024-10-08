import React, { useRef, useState } from 'react';
import SignTopButton from '../../../Other/components/SignTopButton';

const SignModal: React.FC<{
  isOpen: boolean,
  headerTitle: string,
  headerButton?: any,
  buttonPosition?: string,
  children: any,
  footerContent?: any,
  customHeaderButtonOnclick?: () => void
  isModalMsg?: boolean
  bodyClassName?: string,
  numPages: number
}> = ({ bodyClassName, isOpen, headerTitle, headerButton, buttonPosition, children, footerContent, customHeaderButtonOnclick, isModalMsg, ...props }) => {
  const divRefs = useRef<(HTMLDivElement)>(null);
  const [activePage, setActivePage] = useState(1);

  const pageItem = [
    {
      pageNum: 1,
      edit: false
    },
    {
      pageNum: 2,
      edit: false
    },
    {
      pageNum: 3,
      edit: true
    }
  ];

  const getMaxZIndex = (): number => {
    const elements = document.getElementsByTagName('*');
    let maxZ = 0;
    for (let i = 0; i < elements.length; i++) {
      const zIndex = window.getComputedStyle(elements[i]).zIndex;
      if (zIndex !== 'auto') {
        const zIndexNumber = parseInt(zIndex, 10);
        if (!isNaN(zIndexNumber)) {
          maxZ = Math.max(maxZ, zIndexNumber);
        }
      }
    }
    return maxZ;
  };

  return (
    <>
      {
        isOpen && (
          <div
            id="SignModal" className={`modal-overlay ${isOpen ? 'visible' : ''} ${isModalMsg ? 'modal-message' : ''}`} style={{
              zIndex: `${isOpen ? getMaxZIndex() + 10 : 0}`
            }}
          >
            <div className="modal-container">
              <div className="modal-header">
                {
                    headerButton && (
                      <div className={`header-button ${buttonPosition ?? 'right'}`}>
                        {headerButton}
                      </div>
                    )
                }
                <div className="header-title">{headerTitle}</div>

              </div>
              <div className="row header-page justify-center">
                <ul className="d-flex justify-center pdfPage">
                  <li className="pageLabel">頁面快速索引：</li>
                  {
                    pageItem.map((p, index) => {
                      return (
                        <li
                          id={'pageItem-' + (p.pageNum)}
                          onClick={() => {
                            const element = document.getElementById('pdfCard-' + (p.pageNum));
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }} className={'pageItem' + (index === 0 ? ' active' : '') + (p.edit ? ' editItem' : '')} key={index}
                        > <span className={'pageNum ' + (activePage === (p.pageNum) ? 'active' : '')}>{p.pageNum}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div ref={divRefs} className={`modal-body mb-5 ${bodyClassName ?? ''}`}>
                {children}
              </div>
              {footerContent && (
                <div className="modal-footer justify-content-center">
                  {footerContent}
                </div>
              )}
            </div>
            {divRefs && (<SignTopButton isModal setActivePage={setActivePage} containerRef={divRefs} />)}
          </div>

        )
      }
    </>
  );
};

export default SignModal;
