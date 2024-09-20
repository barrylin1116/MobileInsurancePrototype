import React from 'react';
import CustomModal2 from './CustomModal2';
import { CloseOutlined } from '@ant-design/icons';
import Input from '../../../../common/components/Elements/Input';

const Page1SearchModal2: React.FC<any> = (props) => {
  return (
    <div id="Page1SearchModal2">
      <CustomModal2
        visible={props.modalVisible}
        header={
          <div className="container">
            <div className="row ">
              <div className="col w-100 d-flex justify-content-end align-items-center p-3">
                <CloseOutlined
                  style={{ height: '16px', width: '16px' }}
                  onClick={() => {
                    props.setModalVisible(false);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center modal-title">
                請輸入進階查詢條件
              </div>
            </div>
          </div>
        }
        confirmBtnText="確認查詢"
        cancelBtnText="取消查詢"
        onOk={() => props.setModalVisible(false)}
        onCancel={() => props.setModalVisible(false)}
      >
        <div className="container">
          <div className="row px-3">
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
          <div className="row px-3">
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
        </div>
      </CustomModal2>
    </div>
  );
};

export default Page1SearchModal2;
