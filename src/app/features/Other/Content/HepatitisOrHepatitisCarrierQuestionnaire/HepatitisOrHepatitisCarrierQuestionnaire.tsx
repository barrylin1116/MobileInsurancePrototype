import React from 'react';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import Checkbox from '../../../../common/components/Checkbox';

const HepatitisOrHepatitisCarrierQuestionnaire: React.FC<any> = () => {
  return (
    <div className="container">
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col py-2">
          <div className="form-label labelName">
            台端大約何時發現有肝功能異常或肝炎、肝炎病毒帶原、肝病現?
          </div>
          <DatePickerTW
            name="birthday" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col py-2">
          <div className="form-label labelName">
            就診醫院或檢驗醫院名?
          </div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col py-2">
          <div className="row flex-column">
            <div className="col">
              <div className="form-label labelName">
                醫師診斷結果為何?
              </div>
            </div>
            <div className="col">
              <div className="row flex-column flex-lg-row p-3">
                <div className="col col-lg-auto">
                  <Checkbox className="d-flex align-items-center fs-6 p-2" name="sync">
                    Ａ型肝炎
                  </Checkbox>
                </div>
                <div className="col col-lg-auto">
                  <Checkbox className="d-flex align-items-center fs-6 p-2" name="sync">
                    Ｂ型肝炎
                  </Checkbox>
                </div>
                <div className="col col-lg-auto">
                  <Checkbox className="d-flex align-items-center fs-6 p-2" name="sync">
                    Ｃ型肝炎
                  </Checkbox>
                </div>
                <div className="col col-lg-auto">
                  <Checkbox className="d-flex align-items-center fs-6 p-2" name="sync">
                    Ｄ型肝炎
                  </Checkbox>
                </div>
                <div className="col col-lg-auto">
                  <Checkbox className="d-flex align-items-center fs-6 p-2" name="sync">
                    Ｅ型肝炎
                  </Checkbox>
                </div>
                <div className="col col-lg-auto">
                  <Checkbox className="d-flex align-items-center fs-6 p-2" name="sync">
                    藥物誘發及中毒性肝炎
                  </Checkbox>
                </div>
                <div className="col col-lg-auto">
                  <Checkbox className="d-flex align-items-center fs-6 p-2" name="sync">
                    酒精性肝炎
                  </Checkbox>
                </div>
                <div className="col">
                  <div className="row flex-row align-items-center">
                    <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                      其他(請詳述)
                    </Checkbox>
                    <input type="text" name="name" className="form-control col" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col">
          <div className="form-label labelName">
            目前是否患有或曾經患有下列疾病或症狀？
          </div>
        </div>
        <div className="col">
          <div className="row flex-column flex-xl-row">
            <div className="col">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >否
                </label>
              </div>
            </div>
            <div className="col">
              <div className="row flex-column">
                <div className="col d-flex align-items-center">
                  <div className="form-check d-flex align-items-center me-2">
                    <input
                      data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                      aria-controls="collapseExample"
                      type="radio" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label labelName m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >是
                    </label>
                  </div>
                </div>
                <div className="col d-flex align-items-center">
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <div className="row flex-column">
                        <div className="col">請勾選</div>
                        <div className="col">
                          <div className="row flex-column">
                            <div className="col">
                              <div className="row flex-column flex-xl-row">
                                <div className="col">
                                  <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                    黃疸(皮膚變黃)
                                  </Checkbox>
                                </div>
                                <div className="col">
                                  <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                    發熱
                                  </Checkbox>
                                </div>
                                <div className="col">
                                  <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                    疲倦
                                  </Checkbox>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row flex-column flex-xl-row">
                                <div className="col">
                                  <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                    腹脹
                                  </Checkbox>
                                </div>
                                <div className="col">
                                  <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                    噁心
                                  </Checkbox>
                                </div>
                                <div className="col">
                                  <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                    反胃
                                  </Checkbox>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row flex-column flex-xl-row">
                                <div className="col">
                                  <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                    肝腫大
                                  </Checkbox>
                                </div>
                                <div className="col">
                                  <div className="row flex-row align-items-center">
                                    <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" name="sync">
                                      其他(請詳述)
                                    </Checkbox>
                                    <input type="text" name="name" className="form-control col" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col">
          <div className="form-label labelName">
            治療方式係採藥物或手術治療?？
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            <div className="col">
              <Checkbox className="d-flex align-items-center fs-6 p-2 col-auto" classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync">
                藥物治療
              </Checkbox>
            </div>
            <div className="col ms-4">
              <div className="form-label labelName">大約服藥多久時間？</div>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="col ms-4">
              <div className="form-label labelName">目前是否持續服藥？</div>
              <div className="form-check d-flex align-items-center me-2">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >否
                </label>
              </div>
              <div className="form-check d-flex align-items-center me-2">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >是
                </label>
              </div>
              <div className="input-group align-items-center">
                <div className="labelName">藥物名稱</div>
                <input type="text" name="name" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            <div className="col">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                手術
              </Checkbox>
            </div>
            <div className="col ms-4">
              <div className="form-label labelName">大約何時手術？</div>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="col ms-4">
              <div className="form-label labelName">目前狀況如何？</div>
              <input type="text" name="name" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col">
          <div className="form-label labelName">
            是否曾復發？
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >否
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
                  aria-controls="collapseExample2"
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >是
                </label>
              </div>
              <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                  <div className="row">
                    <div className="col">
                      <div className="row flex-column">
                        <div className="col">
                          <div className="form-label labelName">發病次數</div>
                          <input type="text" name="name" className="form-control" />
                        </div>
                        <div className="col">
                          <div className="form-label labelName">最近一次大約於何時</div>
                          <input type="text" name="name" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col">
          <div className="form-label labelName">
            最近一次追蹤檢查大約在何時？
          </div>
          <DatePickerTW
            name="RecordingDate" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col">
          <div className="form-label labelName">
            檢查項目(請勾選：□肝功能檢查 □腹部超音波 □其他 )
          </div>
          <div className="row flex-column flex-xl-row">
            <div className="col d-flex align-items-center">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                肝功能檢查
              </Checkbox>
            </div>
            <div className="col d-flex align-items-center">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                腹部超音波
              </Checkbox>
            </div>
            <div className="col d-flex align-items-center">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                其他
              </Checkbox>
              <input type="text" name="name" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-label labelName">
            結果為何？
          </div>
          <div className="row flex-column flex-xl-row">
            <div className="col col-auto d-flex align-items-center">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >正常
                </label>
              </div>
            </div>
            <div className="col col-auto d-flex align-items-center">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2 text-nowrap"
                  htmlFor="applicantNationType-0"
                >異常，請詳述異常數值或報告結果
                </label>
              </div>
              <input type="text" name="name" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col">
          <div className="form-label labelName">
            是否有飲酒習慣？
          </div>
        </div>
        <div className="col">
          <div className="row flex-column flex-xl-row">
            <div className="col col-xl-auto">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >否
                </label>
              </div>
            </div>
            <div className="col">
              <div className="row flex-column">
                <div className="col">
                  <div className="form-check d-flex align-items-center me-2">
                    <input
                      data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
                      aria-controls="collapseExample2"
                      type="radio" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label labelName m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >是
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="collapse" id="collapseExample2">
                    <div className="card card-body">
                      <div className="row flex-column">
                        <div className="col">
                          <div className="form-label labelName">每日飲酒數量</div>
                          <input type="text" name="name" className="form-control" />

                        </div>
                        <div className="col">
                          <div className="form-label labelName">品牌名稱？</div>
                          <input type="text" name="name" className="form-control" />

                        </div>
                        <div className="col">
                          <div className="form-label labelName">已飲酒約幾年？</div>
                          <input type="text" name="name" className="form-control" />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col">
          <div className="form-label labelName">
            若為藥物誘發及中毒性肝炎，則致病原(藥物或職業接觸)是否持續？
          </div>
        </div>
        <div className="col">
          <div className="row flex-column flex-xl-row">
            <div className="col col-xl-auto">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
                  aria-controls="collapseExample2"
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >是
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check d-flex align-items-center me-2">
                <input
                  data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
                  aria-controls="collapseExample2"
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                />
                <label
                  className="form-check-label labelName m-0 ms-2"
                  htmlFor="applicantNationType-0"
                >否
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-column justify-content-start p-3" style={{ border: '1px solid #348d8f' }}>
        <div className="col">
          <div className="form-label labelName">其他補充事項</div>
          <input type="text" name="name" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default HepatitisOrHepatitisCarrierQuestionnaire;
