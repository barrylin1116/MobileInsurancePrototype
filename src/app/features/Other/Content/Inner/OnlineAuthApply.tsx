import React from 'react';
import { Card } from 'antd';
import SelectField from '../../../../common/components/Elements/SelectField';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import { routerHistory } from '../../../../core/router/service';
import { ROUTES } from 'app/core/router/paths';

const OnlineAuthApply: React.FC<any> = (props) => {
  return (
    <div id="onlineAuthApply" className="justify-center d-flex pt-3">
      <Card style={{ minHeight: '450px', width: '95%' }}>
        <div className="row contentHeader justify-between">
          <div className="col-12">
            <span className="cardTitle">eDDA電子化授權</span>
          </div>
        </div>
        <div className="content mt-3">
          <div className="row">
            <div className="col-7">
              <div className="name labelName">憑證類型：</div>
              <div className="d-flex">
                <input type="radio" name="type" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">金融卡</label>
                <input type="radio" name="type" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">網路銀行</label>
                <input type="radio" name="type" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">自然人憑證</label>
              </div>
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">授權扣款銀行</div>
              <SelectField
                label=""
                className="selectpicker w-100 relation"
                placeholder="請選擇授權扣款銀行"
                title="請選擇授權扣款銀行"
                name="bank"
              >
                <>
                  <SelectField.Option value="004" key="004">
                    臺灣銀行
                  </SelectField.Option>
                  <SelectField.Option value="005" key="005">
                    臺灣土地銀行
                  </SelectField.Option>
                  <SelectField.Option value="006" key="006">
                    合作金庫商業銀行
                  </SelectField.Option>
                  <SelectField.Option value="007" key="007">
                    第一商業銀行
                  </SelectField.Option>
                  <SelectField.Option value="008" key="008">
                    華南商業銀行
                  </SelectField.Option>
                  <SelectField.Option value="009" key="009">
                    彰化商業銀行
                  </SelectField.Option>
                </>
              </SelectField>
            </div>
            <div className="col-5">
              <div className="name labelName">授權扣款帳號</div>
              <input type="labelName" name="bankCode" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="name labelName">授權人關係：</div>
              <div className="d-flex">
                <input type="radio" name="relation" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">要保人</label>
                <input type="radio" name="relation" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">被保人</label>
                <input type="radio" name="relation" className="form-check-input me-2 mb-1" />
                <label className="form-check-label me-2 text-nowrap labelName">受益人</label>
              </div>
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">授權人姓名</div>
              <input type="labelName" name="name" className="form-control" />
            </div>
            <div className="col-5">
              <div className="name labelName">授權人身份證號</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <div className="name labelName">授權人出生日期</div>
              <DatePickerTW
                name="birthday" className="form-control" onChange={() => {
                }}
              />
            </div>
            <div className="col-5">
              <div className="name labelName">授權人行動電話</div>
              <input type="labelName" name="tel" className="form-control" />
            </div>
          </div>
          <div className="row d-flex justify-center">
            <div className="col-3" style={{ textAlign: 'center' }}>
              <button type="button" className="btn btn-primary next-step" aria-label="下一步">下一步</button>
            </div>
            <div className="col-3" style={{ textAlign: 'center' }}>
              <button type="button" onClick={() => routerHistory.push({ pathname: ROUTES.PAGE_EMPTY, state: { activeTab: '4' } })} className="btn btn-outline-primary" value="取消" aria-label="取消">取消</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OnlineAuthApply;
