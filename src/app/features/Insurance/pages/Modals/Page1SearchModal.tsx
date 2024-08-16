import React from 'react';
import Modal from 'app/common/components/Modals/Modal';
import Input from 'app/common/components/Elements/Input';

const Page1SearchModal: React.FC<any> = (props) => {
  return (
    <Modal
      title="請輸入進階查詢條件" visible={props.modalVisible} onClose={() => {
        props.setModalVisible(false);
      }}
      className="Page1SearchModal"
      confirmBtnText="確認查詢" cancelBtnText="取消查詢"
    >
      <div className="row">
        <div className="col-6">
          <div className="name">被保人姓名</div>
          <Input
            type="text"
            aria-label="被保人姓名"
          />
        </div>
        <div className="col-6">
          <div className="name">被保人身份證字號</div>
          <Input
            type="text"
            aria-label="被保人身份證字號"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="name">要保人姓名</div>
          <Input
            type="text"
            aria-label="要保人姓名"
          />
        </div>
        <div className="col-6">
          <div className="name">要保人身份證字號</div>
          <Input
            type="text"
            aria-label="要保人身份證字號"
          />
        </div>
      </div>
    </Modal>
  );
};

export default Page1SearchModal;
