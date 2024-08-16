import React from 'react';

const BeneficiaryAddress: React.FC = () => {
  return (
    <>
      <div id="applicant-address-fields-group" className="col-12 address dependence-address">
        <div className="address-row">
          <div className="d-flex align-items-center name labelName">通訊地址</div>
          <div className="d-flex align-items-center" style={{ marginLeft: 'auto' }}>
            <button
              type="button" className="btn btn-primary btn-sm"
              style={{ height: '50px', marginLeft: '5px', marginRight: '5px', width: '100%', padding: '0px 5px' }}
            >同要保人通訊地址
            </button>
          </div>
        </div>
        <div className="address-row">
          <div className="dropdown bootstrap-select county dropup">
            <select
              id="applicant-cityId" name="applicant.cityId" className="selectpicker county"
              data-field-invalid="true" placeholder="縣市"
            >
              <option className="bs-title-option" value="" />
              <option value="110" title="基隆市" aria-label="基隆市">基隆市</option>
              <option value="100" title="台北市" aria-label="台北市">台北市</option>
              <option value="120" title="新北市" aria-label="新北市">新北市</option>
              <option value="170" title="桃園市" aria-label="桃園市">桃園市</option>
              <option value="160" title="新竹縣" aria-label="新竹縣">新竹縣</option>
              <option value="150" title="新竹市" aria-label="新竹市">新竹市</option>
              <option value="180" title="苗栗縣" aria-label="苗栗縣">苗栗縣</option>
              <option value="190" title="台中市" aria-label="台中市">台中市</option>
              <option value="200" title="彰化縣" aria-label="彰化縣">彰化縣</option>
              <option value="210" title="南投縣" aria-label="南投縣">南投縣</option>
              <option value="240" title="雲林縣" aria-label="雲林縣">雲林縣</option>
              <option value="230" title="嘉義縣" aria-label="嘉義縣">嘉義縣</option>
              <option value="220" title="嘉義市" aria-label="嘉義市">嘉義市</option>
              <option value="250" title="台南市" aria-label="台南市">台南市</option>
              <option value="260" title="高雄市" aria-label="高雄市">高雄市</option>
              <option value="290" title="屏東縣" aria-label="屏東縣">屏東縣</option>
              <option value="300" title="台東縣" aria-label="台東縣">台東縣</option>
              <option value="310" title="花蓮縣" aria-label="花蓮縣">花蓮縣</option>
              <option value="130" title="宜蘭縣" aria-label="宜蘭縣">宜蘭縣</option>
              <option value="280" title="金門縣" aria-label="金門縣">金門縣</option>
              <option value="140" title="連江縣" aria-label="連江縣">連江縣</option>
              <option value="270" title="澎湖縣" aria-label="澎湖縣">澎湖縣</option>
            </select>
            <button
              type="button" className="btn dropdown-toggle bs-placeholder btn-light"
              data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-15" aria-haspopup="listbox"
              aria-expanded="false" title="縣市" data-id="applicant-cityId"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">縣市</div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu " style={{ maxHeight: '523.667px', overflow: 'hidden', minHeight: '112px' }}>
              <div
                className="inner show" role="listbox" id="bs-select-15"
                style={{ maxHeight: '507.667px', overflowY: 'auto', minHeight: '96px' }}
              >
                <ul
                  className="dropdown-menu inner show" role="presentation"
                  style={{ marginTop: '0px', marginBottom: '0px' }}
                >
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-0">
                      <span className="labelName">基隆市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-1">
                      <span className="labelName">台北市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-2">
                      <span className="labelName">新北市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-3">
                      <span className="labelName">桃園市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-4">
                      <span className="labelName">新竹縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-5">
                      <span className="labelName">新竹市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-6">
                      <span className="labelName">苗栗縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-7">
                      <span className="labelName">台中市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-8">
                      <span className="labelName">彰化縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-9">
                      <span className="labelName">南投縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-10">
                      <span className="labelName">雲林縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-11">
                      <span className="labelName">嘉義縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-12">
                      <span className="labelName">嘉義市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-13">
                      <span className="labelName">台南市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-14">
                      <span className="labelName">高雄市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-15">
                      <span className="labelName">屏東縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-16">
                      <span className="labelName">台東縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-17">
                      <span className="labelName">花蓮縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-18">
                      <span className="labelName">宜蘭縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-19">
                      <span className="labelName">金門縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-20">
                      <span className="labelName">連江縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-15-21">
                      <span className="labelName">澎湖縣</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dropdown bootstrap-select district">
            <select
              id="applicant-areaId" name="applicant.areaId" className="selectpicker district"
              data-field-invalid="true" placeholder="區域"
            >
              <option className="bs-title-option" value="" />
            </select>
            <button
              type="button" className="btn dropdown-toggle bs-placeholder btn-light"
              data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-16" aria-haspopup="listbox"
              aria-expanded="false" title="區域" data-id="applicant-areaId"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">區域</div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu " style={{ maxHeight: '158.333px', overflow: 'hidden', minHeight: '0px' }}>
              <div
                className="inner show" role="listbox" id="bs-select-16"
                style={{ maxHeight: '142.333px', overflowY: 'auto', minHeight: '0px' }}
              >
                <ul className="dropdown-menu inner show" role="presentation" />
              </div>
            </div>
          </div>
          <label htmlFor="applicant-postCode" />
          <input
            type="text" name="applicant.postCode" placeholder="郵遞區號" id="applicant-postCode"
            className="form-control zip-code"
          />
          <div className="dropdown bootstrap-select street">
            <select
              id="applicant-addr01" name="applicant.addr01" className="selectpicker street"
              data-field-invalid="true" placeholder="請選擇路名"
            >
              <option className="bs-title-option" value="" />
            </select>
            <button
              type="button" className="btn dropdown-toggle bs-placeholder btn-light"
              data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-17" aria-haspopup="listbox"
              aria-expanded="false" title="請選擇路名" data-id="applicant-addr01"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">請選擇路名</div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu " style={{ maxHeight: '158.333px', overflow: 'hidden', minHeight: '0px' }}>
              <div
                className="inner show" role="listbox" id="bs-select-17"
                style={{ maxHeight: '142.333px', overflowY: 'auto', minHeight: '0px' }}
              >
                <ul className="dropdown-menu inner show" role="presentation" />
              </div>
            </div>
          </div>
          <label htmlFor="applicant-addr01Name" />
          <input type="hidden" name="applicant.addr01Name" id="applicant-addr01Name" className="form-control" />
        </div>
        <div className="address-row align-items-center">
          <div className="d-flex align-items-center">
            <label htmlFor="applicant-addr02" />
            <input
              type="text" name="applicant.addr02" data-field-invalid="false" id="applicant-addr02"
              className="form-control lane"
            />
            <span className="labelName">巷</span>
            <label htmlFor="applicant-addr03" />
            <input
              type="text" name="applicant.addr03" data-field-invalid="false" id="applicant-addr03"
              className="form-control alley"
            />
            <span className="labelName">弄</span>
          </div>
          <div className="d-flex align-items-center">
            <label htmlFor="applicant-addr04" />
            <input
              type="text" name="applicant.addr04" data-field-invalid="true" id="applicant-addr04"
              className="form-control num"
            />
            <span className="labelName">之</span>
            <label htmlFor="applicant-addr05" />
            <input
              type="text" name="applicant.addr05" data-field-invalid="false" id="applicant-addr05"
              className="form-control num-dash"
            />
            <span className="labelName">號</span>
          </div>
          <div className="d-flex align-items-center">
            <label htmlFor="applicant-addr06" />
            <input
              type="text" name="applicant.addr06" data-field-invalid="false" id="applicant-addr06"
              className="form-control floor"
            />
            <span className="labelName">樓之</span>
            <label htmlFor="applicant-addr07" />
            <input
              type="text" name="applicant.addr07" data-field-invalid="false" id="applicant-addr07"
              className="form-control floor-dash"
            />
          </div>
        </div>
        <div className="value dependence-address-display dependence-address-display--visible mt-3 mb-3" />
      </div>
    </>
  );
};

export default BeneficiaryAddress;
