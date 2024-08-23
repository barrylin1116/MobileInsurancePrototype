import React, { useRef } from 'react';
import TopButton from '../../../Other/components/TopButton';

const CustomModal: React.FC<{
  isOpen: boolean,
  headerTitle: string,
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
            id="CustomModal" className={`modal-overlay ${isOpen ? 'visible' : ''} ${isModalMsg ? 'modal-message' : ''}`} style={{
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
              <div ref={divRefs} className={`modal-body ${bodyClassName ?? ''}`}>
                {children}
              </div>
              {footerContent && (
                <div className="modal-footer justify-content-center">
                  {footerContent}
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
