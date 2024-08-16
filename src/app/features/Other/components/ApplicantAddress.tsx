import React from 'react';

const ApplicantAddress: React.FC = () => {
  return (
    <>
      <div className="col-12 address">
        <div className="name">住所地址*</div>
        <div className="address-row">
          <div className="dropdown bootstrap-select county dropup">
            <select
              id="applicant-cityId" name="applicant.cityId" className="selectpicker county"
              data-field-invalid="true" placeholder="縣市"
            >
              <option className="bs-title-option" value="" />
              <option value="110">基隆市</option>
              <option value="100">台北市</option>
              <option value="120">新北市</option>
              <option value="170">桃園市</option>
              <option value="160">新竹縣</option>
              <option value="150">新竹市</option>
              <option value="180">苗栗縣</option>
              <option value="190">台中市</option>
              <option value="200">彰化縣</option>
              <option value="210">南投縣</option>
              <option value="240">雲林縣</option>
              <option value="230">嘉義縣</option>
              <option value="220">嘉義市</option>
              <option value="250">台南市</option>
              <option value="260">高雄市</option>
              <option value="290">屏東縣</option>
              <option value="300">台東縣</option>
              <option value="310">花蓮縣</option>
              <option value="130">宜蘭縣</option>
              <option value="280">金門縣</option>
              <option value="140">連江縣</option>
              <option value="270">澎湖縣</option>
            </select>
            <button
              type="button" className="btn dropdown-toggle bs-placeholder btn-light"
              data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-9" aria-haspopup="listbox"
              aria-expanded="false" title="縣市" data-id="applicant-cityId"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">縣市</div>
                </div>
              </div>
            </button>
            <div
              className="dropdown-menu "
              style={{ maxHeight: '570.722px', overflow: 'hidden', minHeight: '112px' }}
            >
              <div
                className="inner show" role="listbox" id="bs-select-9"
                style={{ maxHeight: '554.722px', overflowY: 'auto', minHeight: '96px' }}
              >
                <ul
                  className="dropdown-menu inner show" role="presentation"
                  style={{ marginTop: '0px', marginBottom: '0px' }}
                >
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-0">
                      <span className="text">基隆市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-1">
                      <span className="text">台北市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-2">
                      <span className="text">新北市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-3">
                      <span className="text">桃園市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-4">
                      <span className="text">新竹縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-5">
                      <span className="text">新竹市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-6">
                      <span className="text">苗栗縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-7">
                      <span className="text">台中市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-8">
                      <span className="text">彰化縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-9">
                      <span className="text">南投縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-10">
                      <span className="text">雲林縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-11">
                      <span className="text">嘉義縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-12">
                      <span className="text">嘉義市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-13">
                      <span className="text">台南市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-14">
                      <span className="text">高雄市</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-15">
                      <span className="text">屏東縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-16">
                      <span className="text">台東縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-17">
                      <span className="text">花蓮縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-18">
                      <span className="text">宜蘭縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-19">
                      <span className="text">金門縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-20">
                      <span className="text">連江縣</span>
                    </a>
                  </li>
                  <li>
                    <a role="option" className="dropdown-item" id="bs-select-9-21">
                      <span className="text">澎湖縣</span>
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
              data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-10" aria-haspopup="listbox"
              aria-expanded="false" title="區域" data-id="applicant-areaId"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">區域</div>
                </div>
              </div>
            </button>
            <div
              className="dropdown-menu "
              style={{ maxHeight: '274.278px', overflow: 'hidden', minHeight: '0px' }}
            >
              <div
                className="inner show" role="listbox" id="bs-select-10"
                style={{ maxHeight: '258.278px', overflowY: 'auto', minHeight: '0px' }}
              >
                <ul className="dropdown-menu inner show" role="presentation" />
              </div>
            </div>
          </div>
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
              data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-11" aria-haspopup="listbox"
              aria-expanded="false" title="請選擇路名" data-id="applicant-addr01"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">請選擇路名</div>
                </div>
              </div>
            </button>
            <div
              className="dropdown-menu "
              style={{ maxHeight: '274.278px', overflow: 'hidden', minHeight: '0px' }}
            >
              <div
                className="inner show" role="listbox" id="bs-select-11"
                style={{ maxHeight: '258.278px', overflowY: 'auto', minHeight: '0px' }}
              >
                <ul className="dropdown-menu inner show" role="presentation" />
              </div>
            </div>
          </div>
          <input type="hidden" name="applicant.addr01Name" id="applicant-addr01Name" className="form-control" />
        </div>
        <div className="address-row align-items-center">
          <div className="d-flex align-items-center">
            <input
              type="text" name="applicant.addr02" data-field-invalid="false" id="applicant-addr02"
              className="form-control lane"
            />
            <span>巷</span>
            <input
              type="text" name="applicant.addr03" data-field-invalid="false" id="applicant-addr03"
              className="form-control alley"
            />
            <span>弄</span>
            <input
              type="text" name="applicant.addr04" data-field-invalid="true" id="applicant-addr04"
              className="form-control num"
            />
            <span>之</span>
            <input
              type="text" name="applicant.addr05" data-field-invalid="false" id="applicant-addr05"
              className="form-control num-dash"
            />
          </div>
          <div className="d-flex align-items-center">
            <span>號</span>
            <input
              type="text" name="applicant.addr06" data-field-invalid="false" id="applicant-addr06"
              className="form-control floor"
            />
            <span>樓之</span>
            <input
              type="text" name="applicant.addr07" data-field-invalid="false" id="applicant-addr07"
              className="form-control floor-dash"
            />
          </div>
        </div>
        <div className="notes">*若選擇紙本保單，將寄送至此聯絡地址。</div>
      </div>
    </>
  );
};

export default ApplicantAddress;
