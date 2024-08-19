import React from 'react';
import { Card } from 'antd';
import SelectField from '../../../common/components/Elements/SelectField';
import TopButton from '../components/TopButton';

const InsuredContent: React.FC<any> = (props) => {
  return (
    <>
      <Card id="insuredContent" style={{ minHeight: '450px', width: '95%' }}>
        <div className="row contentHeader justify-between">
          <div className="col-5">
            <span className="labelName">被保險人： TangX（30嵗）</span>
          </div>
          <div className="col-5">
            <span className="labelName">主約商品： 定期壽險（5年期）</span>
          </div>
        </div>
        <div className="content mt-3">
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">繳費年期</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                name="perYear"
              >
                <>
                  <SelectField.Option value="1" key="1">
                    5年期
                  </SelectField.Option>
                  <SelectField.Option value="2" key="2">
                    20年期
                  </SelectField.Option>
                  <SelectField.Option value="3" key="3">
                    70嵗滿期
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
            <div className="col-5">
              <div className="name labelName">繳別</div>
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
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">主約商品保險金額</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                name="premium"
              >
                <>
                  <SelectField.Option value="1" key="1">
                    10萬元
                  </SelectField.Option>
                  <SelectField.Option value="2" key="2">
                    20萬元
                  </SelectField.Option>
                  <SelectField.Option value="3" key="3">
                    30萬元
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
            <div className="col-5">
              <div className="name labelName"><br />保險費：500元</div>
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">附約商品（一）完全失能保險金額</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                name="addtional1Premium"
              >
                <>
                  <SelectField.Option value="1" key="1">
                    1萬元
                  </SelectField.Option>
                  <SelectField.Option value="2" key="2">
                    2萬元
                  </SelectField.Option>
                  <SelectField.Option value="3" key="3">
                    5萬元
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
            <div className="col-5">
              <div className="name labelName"><br />保險費：50元</div>
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">附約商品（二）祝壽保保險金額</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                name="addtional2Premium"
              >
                <>
                  <SelectField.Option value="1" key="1">
                    1萬元
                  </SelectField.Option>
                  <SelectField.Option value="2" key="2">
                    2萬元
                  </SelectField.Option>
                  <SelectField.Option value="3" key="3">
                    5萬元
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
            <div className="col-5">
              <div className="name labelName"><br />保險費：30元</div>
            </div>
          </div>
          <div className="row justify-center d-flex">
            <div className="col-4">
              <button className="btn btn-outline-danger button-with-add-icon mt-3 mb-3">
                總保費 共 580 元
              </button>
            </div>
          </div>
          <div className="row justify-between d-flex">
            <div className="col-5">
              <div className="name labelName">集窠件</div>
              <div className="d-flex">
                <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">否</label>
                <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">是</label>
              </div>
            </div>
            <div className="col-5">
              <div className="name labelName">繳費單位</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                name="payUnit"
              >
                <>
                  <SelectField.Option value="1" key="1">
                    台銀人壽
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

export default InsuredContent;
