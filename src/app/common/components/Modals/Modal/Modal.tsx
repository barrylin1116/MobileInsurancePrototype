import React, { useRef } from 'react';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = (props) => {
  const modalElemRef = useRef<HTMLDivElement>(null);
  /**
   * @description 處理關閉
   */
  const handleClose = () => {
    if (props.onClose) props.onClose();
  };

  /**
   * @description 處理背景點擊執行的事件
   * @param event event object
   */
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalElemRef.current) {
      handleClose();
    }
  };

  /**
   * @description 處理確認
   */
  const handleConfirm = () => {
    if (props.onConfirm) props.onConfirm();
    handleClose();
  };

  return (
    <>
      <div id={props.id} className={'modal fade' + (props.className ? ` ${props.className}` : '') + (props.visible ? ' modal--show show' : '')} ref={modalElemRef} onClick={handleBackdropClick}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              {props.title && (
                <h5 className="modal-title">{props.title}</h5>
              )}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close" onClick={handleClose} value="關閉" />
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            <div className="modal-footer">
              <div className="row mt-3">
                {props.confirmBtnText && (
                  <div className="col-6">
                    <button
                      className="btn btn-primary external-link-button" onClick={handleConfirm} value="確認"
                      aria-label="確認"
                    >
                      {props.confirmBtnText}
                    </button>
                  </div>
                )}
                {props.cancelBtnText && (
                  <div className="col-6">
                    <button
                      className="btn btn-outline-primary" onClick={handleClose} value="取消"
                      aria-label="取消"
                    >
                      {props.cancelBtnText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'modal-backdrop fade' + (props.visible ? ' modal-backdrop--show show' : '')} />
    </>
  );
};

export default Modal;
