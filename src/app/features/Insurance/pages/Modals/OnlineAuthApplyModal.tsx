import React, { useRef } from 'react';
import TopButton from '../../../Other/components/TopButton';

const OnlineAuthApplyModal: React.FC<any> = ({ isOpen, headerTitle, headerButton, buttonPosition, children, footerContent }) => {
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
      <div
        id="onlineAuthApply" className={`modal-overlay ${isOpen ? 'visible' : ''} `} style={{
          zIndex: `${isOpen ? getMaxZIndex() + 10 : 0}`
        }}
      >
        <div className="modal-container">
          <div className="modal-header">
            {buttonPosition === 'left' && <div className="header-button">{headerButton}</div>}
            <div className="header-title">{headerTitle}</div>
            {buttonPosition === 'right' && <div className="header-button">{headerButton}</div>}
          </div>
          <div ref={divRefs} className="modal-body">
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
    </>
  );
};

export default OnlineAuthApplyModal;
