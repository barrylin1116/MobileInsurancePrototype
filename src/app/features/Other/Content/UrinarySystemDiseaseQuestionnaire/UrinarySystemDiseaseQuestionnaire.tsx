import React from 'react';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Checkbox from '../../../../common/components/Checkbox';

const UrinarySystemDiseaseQuestionnaire: React.FC<any> = () => {
  return (
    <div id="UrinarySystemDiseaseQuestionnaire" className="container">
      <div
        className="row flex-column justify-content-start p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col col-md-6">
          <div className="form-label labelName">台端大約於何時發現該疾</div>
          <DatePickerTW
            name="RecordingDate" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col">
          <div className="row flex-column flex-xl-row align-items-center">
            <div className="col">
              <div className="form-label labelName">當時症狀為何</div>
              <input type="text" name="name" className="form-control" />

            </div>
            <div className="col">
              <div className="row flex-column">
                <div className="col">
                  <div className="row">
                    <div className="col col-xl-auto d-flex align-items-center">
                      <div className="form-label labelName">診斷病名</div>
                    </div>
                    <div className="col d-flex align-items-center">
                      <Tooltip
                        getTooltipContainer={() => document.getElementById('UrinarySystemDiseaseQuestionnaire') || document.body}
                        title="若不確知，請提供診斷證明書"
                      >
                        <QuestionCircleOutlined style={{ color: 'red' }} />
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <input type="text" name="name" className="form-control" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-label labelName">台端大約於何時發現該疾</div>
          <div className="row flex-column flex-xl-row align-items-center">
            <div className="col col-xl-3">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 ms-3 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                腎臟
              </Checkbox>
            </div>
            <div className="col col-xl-3">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                輸尿管
              </Checkbox>
            </div>
            <div className="col col-xl-3">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                膀胱
              </Checkbox>
            </div>
            <div className="col col-xl-3">
              <Checkbox
                className="d-flex align-items-center fs-6 p-2 col-auto"
                classNames={{ labelClass: 'labelName mb-0', inputClass: '' }} name="sync"
              >
                尿道
              </Checkbox>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-label labelName">就診醫院名稱</div>
          <input type="text" name="name" className="form-control" />
        </div>
      </div>
      <div
        className="row p-0 align-items-center"
        style={{ border: '1px solid #348d8f', background: '#edf5f4' }}
      >
        <div className="col-12">
          <div className="name labelName m-1">治療過程之治療方式</div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col p-2">
          <div className="row flex-column flex-xl-row">
            <div className="row flex-nowrap flex-row align-items-center">
              <input
                title="是"
                type="checkbox"
                className="form-check-input p-2 m-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label labelName p-2 m-1"
              >門診
              </label>
            </div>
            <div className="row flex-column flex-xl-row align-items-center fs-6">
              <div className="col col-xl-3 d-flex align-items-center text-nowrap p-2">
                自
                <DatePickerTW
                  name="birthday" className="form-control mx-1" onChange={() => {
                  }}
                />
              </div>
              <div className="col col-xl-3 d-flex align-items-center text-nowrap p-2">
                至
                <DatePickerTW
                  name="birthday" className="form-control mx-1" onChange={() => {
                  }}
                />
              </div>
              <div className="col col-xl-3 d-flex align-items-center text-nowrap p-2">
                ，共 <input type="text" name="rocId" className="form-control mx-1" /> 次
              </div>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="row flex-column flex-xl-row">
            <div className="row flex-nowrap flex-row align-items-center">
              <input
                title="是"
                type="checkbox"
                className="form-check-input p-2 m-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label labelName p-2 m-1"
              >住院
              </label>
            </div>
            <div className="row flex-column flex-xl-row align-items-center fs-6">
              <div className="col col-xl-3 d-flex align-items-center text-nowrap p-2">
                自
                <DatePickerTW
                  name="birthday" className="form-control mx-1" onChange={() => {
                  }}
                />
              </div>
              <div className="col col-xl-3 d-flex align-items-center text-nowrap p-2">
                至
                <DatePickerTW
                  name="birthday" className="form-control mx-1" onChange={() => {
                  }}
                />
              </div>
              <div className="col col-xl-3 d-flex align-items-center text-nowrap p-2">
                ，共 <input type="text" name="rocId" className="form-control mx-1" /> 次
              </div>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="row flex-column flex-xl-row">
            <div className="row flex-nowrap flex-row align-items-center">
              <input
                title="是"
                type="checkbox"
                className="form-check-input p-2 m-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label labelName p-2 m-1"
              >手術名稱及方式
              </label>
            </div>
            <div className="row flex-column flex-xl-row align-items-center fs-6">
              <div className="col d-flex align-items-center text-nowrap">
                請詳述切除部位及器官
                <input type="text" name="rocId" className="form-control mx-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="row flex-column flex-xl-row">
            <div className="row flex-nowrap flex-row align-items-center">
              <input
                title="是"
                type="checkbox"
                className="form-check-input p-2 m-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label labelName p-2 m-1"
              >用藥治療
              </label>
            </div>
            <div className="row flex-column flex-xl-row align-items-center fs-6">
              <div className="col d-flex align-items-center text-nowrap">
                藥物名稱
                <Tooltip
                  className="px-2"
                  getTooltipContainer={() => document.getElementById('GeneralDiseaseQuestionnaire') || document.body}
                  title="可提供藥袋或醫師處方箋"
                >
                  <QuestionCircleOutlined />
                </Tooltip>
                <input type="text" name="rocId" className="form-control mx-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="row flex-column flex-xl-row">
            <div className="row flex-nowrap flex-row align-items-center">
              <input
                title="是"
                type="checkbox"
                className="form-check-input p-2 m-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label labelName p-2 m-1"
              >未接受治療或其他
              </label>
            </div>
            <div className="row flex-column flex-xl-row align-items-center fs-6">
              <div className="col d-flex align-items-center text-nowrap">
                請說明原因
                <input type="text" name="rocId" className="form-control mx-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="row flex-column flex-xl-row">
            <div className="row flex-nowrap flex-row align-items-center">
              <input
                title="是"
                type="checkbox"
                className="form-check-input p-2 m-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label labelName p-2 m-1"
              >其他
              </label>
            </div>
            <div className="row flex-column flex-xl-row align-items-center fs-6">
              <div className="col d-flex align-items-center text-nowrap">
                請補充說明
                <input type="text" name="rocId" className="form-control mx-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col p-3 labelName">
          治療過逞就診期間是否曾接受相關檢查
        </div>
        <div className="col p-3">
          <div className="row flex-column flex-xl-row">
            <div className="col p-2">
              <div className="row flex-column">
                <div className="col">
                  <input
                    data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                    aria-controls="collapseExample"
                    title="是"
                    type="radio"
                    className="form-check-input me-2 mb-1"
                    value="Y"
                    style={{ marginTop: '0px' }}
                  />
                  <label
                    className="form-check-label me-2 text-nowrap labelName"
                  >是
                  </label>
                </div>
                <div className="col">
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <div className="row flex-column">
                        <div className="col">
                          <div className="row flex-column">
                            <div className="col fs-6 p-2">請說明項目</div>
                            <div className="col fs-6 p-2"><input
                              type="text" name="rocId"
                              className="form-control mx-1"
                                                          />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="row flex-column">
                            <div className="col fs-6 p-2">檢查結果</div>
                            <div className="col fs-6 p-2">
                              <div className="row flex-column flex-xl-row">
                                <div className="col">
                                  <input
                                    title="是"
                                    type="radio"
                                    className="form-check-input me-2 mb-1"
                                    value="Y"
                                    style={{ marginTop: '0px' }}
                                  />
                                  <label
                                    className="form-check-label me-2 text-nowrap labelName"
                                  >正常
                                  </label>
                                </div>
                                <div className="col">
                                  <input
                                    title="是"
                                    type="radio"
                                    className="form-check-input me-2 mb-1"
                                    value="Y"
                                    style={{ marginTop: '0px' }}
                                  />
                                  <label
                                    className="form-check-label me-2 text-nowrap labelName"
                                  >異常,請說明
                                  </label>
                                  <input type="text" name="rocId" className="form-control mx-1" />
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
            <div className="col p-2">
              <input
                title="是"
                type="radio"
                className="form-check-input me-2 mb-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label me-2 text-nowrap labelName"
              >否
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row p-0 align-items-center"
        style={{ border: '1px solid #348d8f', background: '#edf5f4' }}
      >
        <div className="col-12">
          <div className="name labelName m-1">該疾病之治療結果及狀況</div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col p-3 labelName">
          是否有復發或不適
        </div>
        <div className="col p-3">
          <div className="row flex-column flex-xl-row">
            <div className="col p-2">
              <div className="row flex-column">
                <div className="col">
                  <input
                    data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false"
                    aria-controls="collapseExample2"
                    title="是"
                    type="radio"
                    className="form-check-input me-2 mb-1"
                    value="Y"
                    style={{ marginTop: '0px' }}
                  />
                  <label
                    className="form-check-label me-2 text-nowrap labelName"
                  >是
                  </label>
                </div>
                <div className="col">
                  <div className="collapse" id="collapseExample2">
                    <div className="card card-body">
                      <div className="row flex-column">
                        <div className="col">
                          <div className="row flex-column flex-xl-row align-items-center">
                            <div className="col col-xl-auto fs-6 p-2">復發次數</div>
                            <div className="col fs-6 p-2 d-flex align-items-center text-nowrap">
                              <input
                                type="text" name="rocId"
                                className="form-control mx-1"
                              />
                              次
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="row flex-column">
                            <div className="col fs-6 p-2">復發情形請詳述並填列大約發病時間</div>
                            <div className="col fs-6 p-2">
                              <input
                                type="text" name="rocId"
                                className="form-control mx-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-2">
              <input
                title="是"
                type="radio"
                className="form-check-input me-2 mb-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label me-2 text-nowrap labelName"
              >否
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col p-3 labelName">
          是否造成後遺症或併發症
        </div>
        <div className="col p-3">
          <div className="row flex-column flex-xl-row">
            <div className="col p-2">
              <div className="row flex-column">
                <div className="col d-flex align-items-center text-nowrap">
                  <input
                    title="是"
                    type="radio"
                    className="form-check-input me-2 mb-1"
                    value="Y"
                    style={{ marginTop: '0px' }}
                  />
                  <label
                    className="form-check-label me-2 text-nowrap labelName"
                  >是，請詳述
                  </label>
                  <input
                    type="text" name="rocId"
                    className="form-control mx-1"
                  />
                </div>
              </div>
            </div>
            <div className="col p-2 d-flex align-items-center">
              <input
                title="是"
                type="radio"
                className="form-check-input me-2 mb-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label me-2 text-nowrap labelName"
              >否
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col p-3 labelName">
          目前是否已痊癒
        </div>
        <div className="col p-3">
          <div className="row flex-column flex-xl-row">
            <div className="col p-2">
              <div className="row flex-column">
                <div className="col d-flex align-items-center text-nowrap">
                  <input
                    title="是"
                    type="radio"
                    className="form-check-input me-2 mb-1"
                    value="Y"
                    style={{ marginTop: '0px' }}
                  />
                  <label
                    className="form-check-label me-2 text-nowrap labelName"
                  >是，請詳述
                  </label>
                  <input
                    type="text" name="rocId"
                    className="form-control mx-1"
                  />
                </div>
              </div>
            </div>
            <div className="col p-2 d-flex align-items-center">
              <input
                title="是"
                type="radio"
                className="form-check-input me-2 mb-1"
                value="Y"
                style={{ marginTop: '0px' }}
              />
              <label
                className="form-check-label me-2 text-nowrap labelName"
              >否
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col p-3 labelName">
          其他補充事項
        </div>
        <div className="col">
          <input
            type="text" name="rocId"
            className="form-control mx-1"
          />
        </div>
      </div>
    </div>
  );
};

export default UrinarySystemDiseaseQuestionnaire;
