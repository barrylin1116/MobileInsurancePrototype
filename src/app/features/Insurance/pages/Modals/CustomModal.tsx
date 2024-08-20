import React from 'react';

const CustomModal: React.FC<any> = ({ isOpen, onClose, headerTitle, headerButton, buttonPosition, children, footerContent }) => {
  // if (!isOpen) return null;

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

  const handleClose = () => {
    onClose(false);
  };

  return (
    <div
      id="CustomModal" className={`modal-overlay ${isOpen ? 'visible' : ''} `} style={{
        zIndex: `${isOpen ? getMaxZIndex() + 10 : 0}`
      }}
    >
      <div className="modal-container">
        <div className="modal-header">
          {buttonPosition === 'left' && <div className="header-button" onClick={handleClose}>{headerButton}</div>}
          <div className="header-title">{headerTitle}</div>
          {buttonPosition === 'right' && <div className="header-button" onClick={handleClose}>{headerButton}</div>}
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          {footerContent}
        </div>
        {/* <button className="close-button" onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default CustomModal;
