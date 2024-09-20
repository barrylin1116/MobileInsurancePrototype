import React, { useState } from 'react';

const TaxpayerForm: React.FC<any> = (props) => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('00');

  const handleRadioChange = (value: string) => {
    setCheckboxState(value === 'Y');
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value); // Capture the selected value
  };

  return (
    <div className="container">
      <div className="row flex-column flex-xl-row">
        <div className="col col-xl-6">
          <div className="name labelName">稅務居住者之國家/地區</div>
          <input type="text" name={props.index ? `country.${props.index}` : 'country'} className="form-control" />
        </div>
        <div className="col col-xl-6">
          <div className="name labelName">是否提供稅務識別碼</div>
          <div className="d-flex flex-column flex-xl-row">
            <div className="d-flex py-1 align-items-center">
              <input
                title="是"
                type="radio"
                className="form-check-input me-2 mb-1"
                value="Y"
                style={{ marginTop: '0px' }}
                checked={checkboxState}
                onChange={(event) => handleRadioChange('Y')}
              />
              <label
                className="form-check-label me-2 text-nowrap labelName"
              >是
              </label>
            </div>
            <div className="d-flex py-1 align-items-center">
              <input
                title="否"
                type="radio"
                className="form-check-input me-2 mb-1"
                value="N"
                style={{ marginTop: '0px' }}
                checked={!checkboxState}
                onChange={(event) => handleRadioChange('N')}
              />
              <label
                className="form-check-label me-2 text-nowrap labelName"
              >否
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-column flex-xl-row">
        <div className="col col-xl-6">
          {checkboxState
            ? (
              <>
                <div className="name labelName">稅務識別碼</div>
                <input
                  type="text"
                  name={props.index ? `taxpayerNumber.${props.index}` : 'taxpayerNumber'}
                  className="form-control"
                />
              </>
              )
            : (
              <>
                <div className="name labelName">若無法提供稅務識別碼之理由</div>
                <select
                  name="relationshipToPolicyholder"
                  className="form-control"
                  value={selectedValue} // Bind the selected value to state
                  onChange={handleSelectChange} // Handle select change
                >
                  <option value="00">A-帳戶持有人為稅務居住者之國家/地區未核發稅籍編號</option>
                  <option value="01">B-帳戶持有人無法取得稅籍編號(請說明帳戶持有人無法取得稅籍編號原因)</option>
                  <option value="02">C-帳戶持有人毋須提供稅籍編號(限於該帳戶持有人為稅務居住者之國家/地區國內法未要
                    求蒐集稅籍編號)
                  </option>
                </select>
              </>
              )}

        </div>
        {
          selectedValue === '01' && !checkboxState && (
            <div className="col col-xl-6">
              <div className="name labelName">若無法取得稅籍編號之原因</div>
              <input type="text" name="rocId" className="form-control" />
            </div>
          )
        }
      </div>
    </div>
  );
};

TaxpayerForm.defaultProps = {
  index: 0
};

export default TaxpayerForm;
