import React from 'react';
import DatePickerTW from 'app/common/components/Elements/DatePickerTW';
import AddressFieldsGroup01 from '../../../../common/components/Elements/AddressFieldsGroup01';
import InsuredAddress01 from '../../components/InsuredAddress01';

const Insured: React.FC<any> = (props) => {
  return (
    <div>
      <div className="row m-0">
        <div className="col-6">
          <div className="name text">與被保人關係</div>
          <div className="d-flex">
            <input type="radio" name="relationship" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">本人</label>
            <input type="radio" name="relationship" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">父母</label>
            <input type="radio" name="relationship" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">配偶</label>
            <input type="radio" name="relationship" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">子女</label>
            <input type="radio" name="relationship" className="form-check-input mt-1 mb-3" />
            <label className="form-check-label me-2 text-nowrap text">其他</label>
            <input type="text" name="otherNRelationship" className="form-control" />
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
          <div className="name text">身份證字號</div>
          <input type="text" name="rocId" className="form-control" />
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
          <div className="name text">出生日期</div>
          <DatePickerTW
            name="birthday" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col-6" style={{ margin: 'auto 0' }}>
          <label className="form-check-label me-2 text-nowrap text">法定年齡</label>
          <span className="text">50嵗</span>
          <br />
          <label className="form-check-label me-2 text-nowrap text">保險年齡</label>
          <span className="text">50嵗</span>
        </div>
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
        <div className="col-6">
          <div className="name text">電子郵件信箱</div>
          <div className="d-flex">
            <input type="text" name="email" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row m-0  form-row">
        <InsuredAddress01 />
      </div>
      <div className="row m-0  form-row">
        <div className="flex flex-row">
          <label className="form-check-label me-2 text-nowrap text">通訊地址</label>
          <div className="d-flex align-items-center p-1">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              style={{ height: '50px', marginLeft: '5px', marginRight: '5px', width: '100%', padding: '0 5px 0 5px' }}
            >同被保人住所
            </button>
          </div>
          <div className="d-flex align-items-center p-1">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              style={{ height: '50px', marginLeft: '5px', marginRight: '5px', width: '100%', padding: '0 5px 0 5px' }}
            >同要保人住所
            </button>
          </div>
        </div>
        <AddressFieldsGroup01
          name={['applicant.rCityId', 'applicant.rAreaId', 'applicant.rPostCode', 'applicant.rAddr01', 'applicant.rAddr01Name', 'applicant.rAddr02', 'applicant.rAddr03', 'applicant.rAddr04', 'applicant.rAddr05', 'applicant.rAddr06', 'applicant.rAddr07']}
          groupId="applicant-addressR-fields-group"
          syncLabel="同被保人住所"
        />
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
    </div>
  );
};

export default Insured;
