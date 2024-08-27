import React, { useRef } from 'react';
import TopButton from '../../../Other/components/TopButton';

const CustomModal: React.FC<{
  isOpen: boolean,
  headerTitle?: string,
  headerButton?: any,
  buttonPosition?: string,
  children: any,
  footerContent?: any,
  customHeaderButtonOnclick?: () => void
  isModalMsg?: boolean
  bodyClassName?: string
}> = ({ bodyClassName, isOpen, headerTitle, headerButton, buttonPosition, children, footerContent, customHeaderButtonOnclick, isModalMsg, ...props }) => {
  const divRefs = useRef<(HTMLDivElement)>(null);

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
            id="CustomModal" className={`modal-overlay start-0 top-0 position-fixed justify-content-center align-items-center d-flex w-100 h-100 ${isOpen ? 'visible' : ''} ${isModalMsg ? 'modal-message' : ''}`} style={{
              zIndex: `${isOpen ? getMaxZIndex() + 10 : 0}`
            }}
          >
            <div className={`modal-container container bg-white p-0 position-relative mh-100 mw-100 d-flex flex-column ${isModalMsg ? 'w-50 h-50 rounded' : 'vw-100 vh-100'}`}>
              {
                (headerTitle || headerButton) && (
                  <div className="m-0 row justify-content-center align-items-center">
                    <div
                      className="col justify-content-center align-items-center modal-header position-relative d-flex p-3"
                    >
                      {headerTitle && (<div className="header-title">{headerTitle}</div>)}
                      {
                              headerButton && (
                                <div className={`position-absolute header-button ${buttonPosition ?? 'right'}`}>
                                  {headerButton}
                                </div>
                              )
                          }
                    </div>
                  </div>
                )
              }

              <div ref={divRefs} className="row justify-content-center align-items-center modal-body mh-100 m-0">
                <div className="container mh-100">
                  {children}
                </div>
              </div>
              {footerContent && (
                <div className="row justify-content-center align-items-center m-0">
                  <div className="container m-1 p-1">
                    {footerContent}
                  </div>
                </div>
              )}
            </div>
            {divRefs && (<TopButton isModal containerRef={divRefs} />)}
          </div>

        )
      }
    </>
  );
};

export default CustomModal;
