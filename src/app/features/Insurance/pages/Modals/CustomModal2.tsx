import React, { useEffect, useRef } from 'react';
import { ModalProps } from '../../../../store/ui/types';
import TopButton from '../../../Other/components/TopButton';

const CustomModal2: React.FC<ModalProps> = (props) => {
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

  const handleOk = () => {
    if (props.onOk) props.onOk();
  };

  const handleCancel = () => {
    if (props.onCancel) props.onCancel();
  };

  useEffect(() => {
    const handleModalScroll = (e: any) => {
      if (props.handleModalScroll) props.handleModalScroll();
    };

    if (divRefs.current) {
      divRefs.current.addEventListener('scroll', handleModalScroll);
    }

    return () => {
      if (divRefs.current) {
        divRefs.current.removeEventListener('scroll', handleModalScroll);
      }
    };
  }, [props.handleModalScroll]);

  if (!props.visible) {
    return null; // 返回 null 而不是 false
  }

  return (
    <div
      id="customModal2" className={`bg-white position-fixed justify-content-center align-items-center d-flex flex-column 
        ${props.fullscreen ? 'vw-100 vh-100 top-0 start-0' : 'w-50 h-auto mh-100 top-50 start-50 rounded-2 shadow-lg border border-2'} 
        ${props.visible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transform: props.fullscreen ? 'none' : 'translate(-50%, -50%)',
        transition: 'opacity 0.3s ease-in-out',
        zIndex: `${props.zindex ? props.zindex : getMaxZIndex() + 10}`
      }}
    >
      {
                props.showHeader && (
                  <div
                    className={`header d-flex w-100 flex-shrink-0 justify-content-center align-items-center p-1 mb-2 fs-2
                        ${props.fullscreen ? '' : 'rounded-top-2'} 
                        ${props.headerContainerClassName ? props.headerContainerClassName : ''}`}
                    style={{ flexShrink: 0 }}
                  >
                    {props.header ? props.header : props.title}
                  </div>
                )
            }
      {
        props.contentTopBlock ? props.contentTopBlock : ''
      }
      <div
        ref={divRefs}
        className={`content w-100 flex-sm-grow-1 overflow-y-auto p-1 m-1 position-relative ${props.contentContainerClassName ? props.contentContainerClassName : ''}`}
      >
        {
                    props.children ? props.children : ''
                }
      </div>

      {
                props.showFooter && (
                  <div
                    className={`footer d-flex w-100 flex-shrink-0 justify-content-center align-items-center p-1 m-1 ${props.footerContainerClassName ? props.footerContainerClassName : ''}`}
                    style={{ flexShrink: 0 }}
                  >
                    {props.footer
                      ? props.footer
                      : (

                        <div className="footer container p-0 text-center">
                          <div className="row m-0 p-2 justify-content-center align-items-center">
                            <button
                              className={`col-sm-auto m-2 btn btn-custom btn-elife-green ${props.confirmBtnClass}`}
                              onClick={handleOk}
                            >
                              {props.confirmBtnText}
                            </button>
                            <button
                              className="col-sm-auto m-2 btn btn-custom btn-elife-outline-green"
                              onClick={handleCancel}
                            >
                              {props.cancelBtnText}
                            </button>
                          </div>
                        </div>
                        )}
                  </div>
                )
            }
      {divRefs && (<TopButton isModal containerRef={divRefs} />)}
    </div>
  );
};

CustomModal2.defaultProps = {
  showHeader: true,
  showFooter: true,
  title: '',
  confirmBtnText: '確認',
  cancelBtnText: '取消',
  fullscreen: false,
  visible: false
};

export default CustomModal2;
