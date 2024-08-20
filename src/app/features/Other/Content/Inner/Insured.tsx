import React from 'react';
import DatePickerTW from 'app/common/components/Elements/DatePickerTW';
import InsuredAddress01 from '../../components/InsuredAddress01';
import Nation from '../../components/Nation';
import InsuredAddress02 from '../../components/InsuredAddress02';

const Insured: React.FC<any> = (props) => {
  return (
    <div>
      <div className="row m-0">
        <div className="col-7">
          <div className="name labelName">與被保人關係</div>
          <div className="d-flex">
            <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">本人</label>
            <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">父母</label>
            <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">配偶</label>
            <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">子女</label>
            <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">其他</label>
            <input type="text" name="otherNRelationship" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5">
          <div className="name labelName">姓名</div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-5">
          <Nation />
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5">
          <div className="name labelName">身份證字號</div>
          <input type="text" name="rocId" className="form-control" />
        </div>
        <div className="col-5">
          <div className="name labelName">性別</div>
          <div className="d-flex mb-3 mt-1">
            <span className="form-check-label me-2 text-nowrap labelName">男</span>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5">
          <div className="name labelName">出生日期</div>
          <DatePickerTW
            name="birthday" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col-5" style={{ margin: 'auto 0' }}>
          <label className="form-check-label me-2 text-nowrap labelName">法定年齡</label>
          <span className="labelName">50歲</span>
          <br />
          <label className="form-check-label me-2 text-nowrap labelName">保險年齡</label>
          <span className="labelName">50歲</span>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5">
          <label className="form-check-label me-2 text-nowrap labelName">住宅電話</label>
          <div className="phone-inputs" style={{ margin: '4px 0' }}>
            <input type="text" name="address" className="form-control area-code" />
            <span className="mx-2"> - </span>
            <input type="text" name="address" className="form-control number me-2" />
            <input type="text" name="address" className="form-control extend" />
          </div>
        </div>
        <div className="col-5">
          <label className="form-check-label me-2 text-nowrap labelName">公司電話</label>
          <div className="phone-inputs" style={{ margin: '4px 0' }}>
            <input type="text" name="address" className="form-control area-code" />
            <span className="mx-2"> - </span>
            <input type="text" name="address" className="form-control number me-2" />
            <input type="text" name="address" className="form-control extend" />
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5">
          <label className="form-check-label me-2 text-nowrap labelName">行動電話</label>
          <div className="phone-inputs" style={{ margin: '4px 0' }}>
            <input type="text" name="address" className="form-control area-code" />
            <span className="mx-2"> - </span>
            <input type="text" name="address" className="form-control number me-2" />
            <input type="text" name="address" className="form-control extend" />
          </div>
        </div>
        <div className="col-5">
          <div className="name labelName">電子郵件信箱</div>
          <div className="d-flex">
            <input type="text" name="email" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row m-0  form-row">
        <InsuredAddress01 />
      </div>
      <div className="row m-0  form-row">
        <InsuredAddress02 />
      </div>
      <div className="row m-0">
        <div className="col-5">
          <div className="name labelName">服務單位/職位</div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-5">
          <div className="name labelName">工作内容（含兼職）</div>
          <input type="text" name="name" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default Insured;
