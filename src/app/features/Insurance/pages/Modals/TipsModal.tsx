import React, { useImperativeHandle, useState } from 'react';
import { Modal } from 'antd';

const TipsModal = React.forwardRef<any, any>(({ headerVisible = true, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    close: () => {
      setIsVisible(false);
    },
    open: () => {
      setIsVisible(true);
    }
  }));

  return (
    <Modal
      visible={isVisible}
      title={headerVisible ? (props.title ?? null) : null}
      footer={null}
    >
      {props.children}
      {isVisible}
    </Modal>
  );
});

TipsModal.displayName = 'TipsModal';

export default TipsModal;
