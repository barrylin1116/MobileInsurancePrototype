import React, { useState } from 'react';
import DatePickerTW from 'app/common/components/Elements/DatePickerTW';
import ApplicantAddress from '../../components/ApplicantAddress';

const Applicant: React.FC<any> = (props) => {
  const [declare, setDeclare] = useState('');
  return (
    <div>
      <div className="row m-0">
        <div className="col-6">
          <div className="name labelName">身份證字號</div>
          <input type="labelName" name="rocId" className="form-control" />
        </div>
        <div className="col-6">
          <div className="name text">性別</div>
          <div className="d-flex mb-3 mt-1">
            <span className="form-check-label me-2 text-nowrap text">男</span>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-6">
          <div className="name text">姓名</div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-6">
          <div className="name text">國籍</div>
          <div className="d-flex">
            <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">中華民國</label>
            <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">其他</label>
            <input type="text" name="otherNation" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-6">
          <div className="name text">出生日期</div>
          <DatePickerTW
            name="birthday" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col-6" style={{ margin: 'auto 0' }}>
          <label className="form-check-label me-2 text-nowrap text">法定年齡</label>
          <span className="labelName">50嵗</span>
          <br />
          <label className="form-check-label me-2 text-nowrap text">保險年齡</label>
          <span className="labelName">50嵗</span>
        </div>
      </div>
      <div className="row m-0  form-row">
        <ApplicantAddress />
      </div>
      <div className="row m-0">
        <div className="col-6">
          <label className="form-check-label me-2 text-nowrap text">住宅電話</label>
          <div className="phone-inputs" style={{ margin: '4px 0' }}>
            <input type="text" name="address" className="form-control area-code" />
            <span className="mx-2"> - </span>
            <input type="text" name="address" className="form-control number me-2" />
            <input type="text" name="address" className="form-control extend" />
          </div>
        </div>
        <div className="col-6">
          <label className="form-check-label me-2 text-nowrap text">公司電話</label>
          <div className="phone-inputs" style={{ margin: '4px 0' }}>
            <input type="text" name="address" className="form-control area-code" />
            <span className="mx-2"> - </span>
            <input type="text" name="address" className="form-control number me-2" />
            <input type="text" name="address" className="form-control extend" />
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-6">
          <label className="form-check-label me-2 text-nowrap text">行動電話</label>
          <div className="phone-inputs" style={{ margin: '4px 0' }}>
            <input type="text" name="address" className="form-control area-code" />
            <span className="mx-2"> - </span>
            <input type="text" name="address" className="form-control number me-2" />
            <input type="text" name="address" className="form-control extend" />
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-6">
          <div className="name text">是否領有身心障礙手冊或身心障礙證明</div>
          <div className="d-flex">
            <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">無</label>
            <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">有</label>
          </div>
        </div>
        <div className="col-6">
          <div className="name text">是否有監護宣告</div>
          <div className="d-flex">
            <input
              type="radio" name="declare" value="N" className="form-check-input mt-1 mb-3" onChange={(e) => {
                setDeclare(e.target.value);
              }}
            />
            <label className="form-check-label me-2 text-nowrap text">否</label>
            <input
              type="radio" name="declare" value="Y" className="form-check-input mt-1 mb-3" onChange={(e) => {
                setDeclare(e.target.value);
              }}
            />
            <label className="form-check-label me-2 text-nowrap text">是</label>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-6">
          <div className="name text">服務單位/職位</div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-6">
          <div className="name text">工作内容（含兼職）</div>
          <input type="text" name="name" className="form-control" />
        </div>
      </div>
      {declare === 'Y'
        ? (
          <div className="row m-0">
            <div className="col-6">
              <div className="name text">被保險人有無投保其他商業實支實付型傷害醫療保險？</div>
              <div className="d-flex">
                <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
                <label className="form-check-label me-2 text-nowrap text">有</label>
                <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
                <label className="form-check-label me-2 text-nowrap text">無</label>
              </div>
            </div>
            <div className="col-6">
              <div className="name text">被保險人有無投保其他商業實支實付型醫療保險？</div>
              <div className="d-flex">
                <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
                <label className="form-check-label me-2 text-nowrap text">有</label>
                <input type="radio" name="nation" className="form-check-input mt-1 mb-3" />
                <label className="form-check-label me-2 text-nowrap text">無</label>
              </div>
            </div>
          </div>
          )
        : null}

    </div>
  );
};

export default Applicant;
