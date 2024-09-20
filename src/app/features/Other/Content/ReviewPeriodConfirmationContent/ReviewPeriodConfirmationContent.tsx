import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import React from 'react';

const ReviewPeriodConfirmationContent: React.FC<any> = () => {
  return (

    <>
      <div className="container">
        <div className="row m-0 p-2 border elife-border-color-1 flex-column">
          <div className="col">
            <label
              className="form-label labelName"
            >取得保險契約條款樣張方式：
            </label>
          </div>
          <div className="col">
            <div className="row flex-md-row align-items-center">
              <div className="col col-md-auto py-2">
                <div className="input-group">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="checkbox" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label  m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >業務人員親送
                    </label>
                  </div>
                </div>
              </div>
              <div className="col col-md-auto py-2">
                <div className="input-group">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="checkbox" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label  m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >傳真
                    </label>
                  </div>
                </div>
              </div>
              <div className="col col-md-auto py-2">
                <div className="input-group">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="checkbox" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label  m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >郵寄
                    </label>
                  </div>
                </div>
              </div>
              <div className="col col-md-auto py-2">
                <div className="input-group">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="checkbox" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label  m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >網路
                    </label>
                  </div>
                </div>
              </div>
              <div className="col col-md-auto py-2">
                <div className="input-group">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="checkbox" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label  m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >電子郵件
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 flex-column">
          <div className="col">
            <label
              className="form-label labelName"
            >本人就上述保險契約條款樣張之審閱期間聲明如下：
            </label>
          </div>
          <div className="col">
            <div className="row flex-md-row align-items-center">
              <div className="col py-2 d-flex align-items-center">
                <div className="input-group align-items-center d-flex">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="radio" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >我已於
                    </label>
                  </div>
                  <DatePickerTW
                    name="birthday"
                    className="form-control me-2"
                    onChange={() => {
                    }}
                  />
                  <div>
                    完成條款審閱
                  </div>
                </div>
              </div>
              <div className="col py-2">
                <div className="input-group">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="radio" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >本人以了解本契約內容，自願提前簽訂本契約
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewPeriodConfirmationContent;
