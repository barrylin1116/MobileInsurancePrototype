import React from 'react';
import { Card } from 'antd';
import SelectField from '../../../common/components/Elements/SelectField';
import TopButton from '../components/TopButton';
import Checkbox from 'app/common/components/Checkbox';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from 'app/core/router/paths';

const PaymentMethod: React.FC<any> = (props) => {
  return (
    <>
      <Card id="paymentMethod" style={{ minHeight: '450px', width: '95%' }}>
        <div className="content mt-3">
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">首期保費繳費方式</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                name="perYear"
              >
                <>
                  <SelectField.Option value="1" key="1">
                    年繳
                  </SelectField.Option>
                  <SelectField.Option value="2" key="2">
                    半年繳
                  </SelectField.Option>
                  <SelectField.Option value="3" key="3">
                    季繳
                  </SelectField.Option>
                  <SelectField.Option value="4" key="4">
                    月繳
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
            <div className="col-5">
              <div className="name labelName">續期保費繳費方式</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                name="payMode"
              >
                <>
                  <SelectField.Option value="1" key="1">
                    年繳
                  </SelectField.Option>
                  <SelectField.Option value="2" key="2">
                    半年繳
                  </SelectField.Option>
                  <SelectField.Option value="3" key="3">
                    季繳
                  </SelectField.Option>
                  <SelectField.Option value="4" key="4">
                    月繳
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
          </div>
          <div className="row">
            <div className="name labelName">保險費付款授權</div>
            <div className="d-flex flex-column">
              <div className="d-flex justify-between">
                <div className="col-10 d-flex" style={{ paddingRight: '12px' }}>
                  <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" />
                  <label className="form-check-label me-2 text-nowrap labelName">紙本付款授權：付款授權編號</label>
                  <input type="text" name="name" className="form-control" />
                </div>
              </div>
              <div className="d-flex mt-3">
                <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">eDDA電子化授權</label>
                <button className="btn btn-outline-primary btn-sm authorizationBtn" onClick={() => routerHistory.push(ROUTES.PAGE_ONLINE_AUTH_APPLY)}>
                  執行綫上授權申請
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="name labelName">自動墊繳</div>
            <span className="notes mt-2">要保人是否同意保險費逾寬限期間未繳付時，以保單價值準備金自動墊繳保險費？</span>
            <div className="d-flex">
              <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" />
              <label className="form-check-label me-2 text-nowrap labelName">是</label>
              <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" />
              <label className="form-check-label me-2 text-nowrap labelName">否</label>
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">保單寄送方式</div>
              <SelectField label="" className="selectpicker w-100 relation" name="sendType">
                <>
                  <SelectField.Option value="1" key="1">
                    紙本保單
                  </SelectField.Option>
                  <SelectField.Option value="2" key="2">
                    電子保單
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
            <div className="col-5">
              <div className="name labelName">電子單據</div>
              <Checkbox name="mail" className="labelName">申請，並適用於要保人於臺銀人壽所有個人保單。(未勾選視為不申請、申請時，請務必填寫要保人電子郵件信箱)</Checkbox>
            </div>
          </div>
        </div>
      </Card>
      <TopButton />
    </>
  );
};

export default PaymentMethod;
