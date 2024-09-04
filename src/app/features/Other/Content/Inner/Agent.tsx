import React from 'react';
import { Card } from 'antd';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import Checkbox from 'app/common/components/Checkbox';

const Agent: React.FC<any> = (props) => {
  return (
    <div>
      <Card title="被保人法定代理人" style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}>
        <div className="beneficiary mt-3">
          <div className="form-content w-100">
            <div className="form-row">
              <div className="body">
                <div className="row form-row relation-row">
                  <div className="col-5">
                    <div className="name labelName">姓名</div>
                    <input type="text" name="name" className="form-control" />
                  </div>
                  <div className="col-5">
                    <div className="name labelName">身份證字號</div>
                    <input type="labelName" name="rocId" className="form-control" />
                  </div>
                </div>
                <div className="row form-row relation-row">
                  <div className="col-5">
                    <div className="name labelName">出生日期</div>
                    <DatePickerTW
                      name="birthday" className="form-control" onChange={() => {
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <div className="name labelName">關係</div>
                    <input type="labelName" name="relation" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card
        title={
          <div className="d-flex flex-row">
            <div>要保人法定代理人</div>
            <div className="ml-3 d-flex flex-row">
              <Checkbox name="sync" className="labelName" />
              <label style={{ color: '#0f7b7d' }} className="ant-card-head-title">同被保人法定代理人</label>
            </div>
          </div>
        } className="mt-3" style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}
      >
        <div className="beneficiary mt-3">
          <div className="form-content w-100">
            <div className="form-row">
              <div className="body">
                <div className="row form-row relation-row">
                  <div className="col-5">
                    <div className="name labelName">姓名</div>
                    <input type="text" name="name" className="form-control" />
                  </div>
                  <div className="col-5">
                    <div className="name labelName">身份證字號</div>
                    <input type="labelName" name="rocId" className="form-control" />
                  </div>
                </div>
                <div className="row form-row relation-row">
                  <div className="col-5">
                    <div className="name labelName">出生日期</div>
                    <DatePickerTW
                      name="birthday" className="form-control" onChange={() => {
                      }}
                    />
                  </div>
                  <div className="col-5">
                    <div className="name labelName">關係</div>
                    <input type="labelName" name="relation" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Agent;
