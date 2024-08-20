import React from 'react';
import { Card } from 'antd';
import SelectField from '../../../common/components/Elements/SelectField';
import TopButton from '../components/TopButton';

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
        </div>
      </Card>
      <TopButton />
    </>
  );
};

export default PaymentMethod;
