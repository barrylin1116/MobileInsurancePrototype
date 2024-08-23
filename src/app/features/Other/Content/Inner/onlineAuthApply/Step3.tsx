import React from 'react';
import { Card } from 'antd';

const Step3: React.FC<any> = (props) => {
  return (
    <div className="justify-center d-flex pt-3">
      <Card style={{ width: '95%' }}>
        <div className="content mt-1">
          <div className="row">
            <div className="col-6 d-flex flex-row" style={{ margin: '0 auto' }}>
              <div className="name labelName">保單號碼：</div>
              <div className="name labelName">0A12345678</div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex flex-row" style={{ margin: '0 auto' }}>
              <div className="name labelName">線上申請授權：</div>
              <div className="name labelName">已授權成功！</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Step3;
