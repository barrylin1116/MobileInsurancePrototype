import React from 'react';
import DatePickerTW from 'app/common/components/Elements/DatePickerTW';
import ApplicantAddress from '../../components/ApplicantAddress';
import Nation from '../../components/Nation';
import Job from '../../components/Job';

const Applicant: React.FC<any> = (props) => {
  return (
    <div>
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
          <input type="labelName" name="rocId" className="form-control" />
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
      </div>
      <div className="row m-0  form-row">
        <ApplicantAddress />
      </div>
      <Job />
      <div className="row m-0">
        <div className="col-5">
          <div className="name labelName">是否領有身心障礙手冊或身心障礙證明</div>
          <div className="d-flex">
            <input type="radio" name="nation" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">無</label>
            <input type="radio" name="nation" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">有</label>
          </div>
        </div>
        <div className="col-5">
          <div className="name labelName">是否有監護宣告</div>
          <div className="d-flex">
            <input type="radio" name="declare" value="N" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">否</label>
            <input type="radio" name="declare" value="Y" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">是</label>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-12">
          <div className="name labelName">被保險人有無投保其他商業實支實付型傷害醫療保險？</div>
          <div className="d-flex">
            <input type="radio" name="nation" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">有</label>
            <input type="radio" name="nation" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">無</label>
          </div>
        </div>
        <div className="col-12">
          <div className="name labelName">被保險人有無投保其他商業實支實付型醫療保險？</div>
          <div className="d-flex">
            <input type="radio" name="nation" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">有</label>
            <input type="radio" name="nation" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">無</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
