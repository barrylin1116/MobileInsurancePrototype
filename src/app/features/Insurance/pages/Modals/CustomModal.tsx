import React, { useRef } from 'react';
import TopButton from '../../../Other/components/TopButton';

const CustomModal: React.FC<{
  isOpen: boolean,
  onClose: React.Dispatch<React.SetStateAction<boolean>>,
  headerTitle: string,
  headerButton: any,
  buttonPosition: string,
  children: any,
  footerContent?: any,
  customHeaderButtonOnclick?: () => void
}> = ({ isOpen, onClose, headerTitle, headerButton, buttonPosition, children, footerContent, customHeaderButtonOnclick }) => {
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

  const headerButtonOnclick = () => {
    if (customHeaderButtonOnclick) customHeaderButtonOnclick();
    onClose(false);
  };

  return (
    <>
      <div
        id="CustomModal" className={`modal-overlay ${isOpen ? 'visible' : ''} `} style={{
          zIndex: `${isOpen ? getMaxZIndex() + 10 : 0}`
        }}
      >
        <div className="modal-container">
          <div className="modal-header">
            {buttonPosition === 'left' && <div className="header-button" onClick={headerButtonOnclick}>{headerButton}</div>}
            <div className="header-title">{headerTitle}</div>
            {buttonPosition === 'right' && <div className="header-button" onClick={headerButtonOnclick}>{headerButton}</div>}
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

export default CustomModal;
