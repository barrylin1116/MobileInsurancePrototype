import React, { useState } from 'react';
import { Card } from 'antd';
import SelectField from '../../../common/components/Elements/SelectField';
// import Checkbox from 'app/common/components/Checkbox';
import OnlineAuthApplyModal from '../../Insurance/pages/Modals/OnlineAuthApplyModal';
import OnlineAuthApply from './Inner/onlineAuthApply/OnlineAuthApply';
import Checkbox from '../../../common/components/Checkbox';
import modalService from '../../../core/services/modalService';
import { ModalNamesEnum } from '../../../core/enums/ui/modals';
import CustomModal2 from '../../Insurance/pages/Modals/CustomModal2';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';

const PaymentMethod: React.FC<any> = (props) => {
  const [onlineAuthApplyVisible, setOnlineAuthApplyVisible] = useState(false);
  const [activeContent, setActiveContent] = useState(1);
  const [payMode, setPayMode] = useState('');
  const onlineAuthApplyModalVisible = useSelector((state: RootState) => state.UI.modals.onlineAuthApplyModalVisible);

  return (
    <>
      {
        onlineAuthApplyVisible &&
          <OnlineAuthApplyModal
            isOpen={onlineAuthApplyVisible}
            onClose={setOnlineAuthApplyVisible}
            headerTitle="eDDA電子化授權"
            headerButton={
              <>
                {
                  activeContent < 3 &&
                    <>
                      <button
                        type="button"
                        className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                        onClick={() => setActiveContent(activeContent + 1)}
                      >
                        下一步
                      </button>
                      <button
                        type="button"
                        className="btn ml-1 btn-outline-light me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                        onClick={() => setOnlineAuthApplyVisible(false)}
                      >
                        取消
                      </button>
                    </>
              }
                {
                    activeContent >= 3 &&
                      <>
                        <button
                          type="button"
                          className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                          onClick={() => setOnlineAuthApplyVisible(false)}
                        >
                          確認
                        </button>
                      </>
                }
              </>
            }
            buttonPosition="right"
          >
            <OnlineAuthApply activeContent={activeContent} />
          </OnlineAuthApplyModal>
      }
      <CustomModal2
        visible={onlineAuthApplyModalVisible}
        headerContainerClassName="modal-custom-color-green"
        showFooter={false}
        header={(
          <>
            <div className="row position-relative justify-content-center w-100 align-items-center">
              <div className="col d-flex justify-content-center align-items-center">eDDA電子化授權</div>
              <div className="col-auto d-flex flex-column position-absolute end-0">
                <div className="row">
                  {
                            activeContent < 3 && (
                              <>
                                <div className="col p-2">
                                  <button
                                    className="btn btn-custom btn-elife-outline-green"
                                    onClick={() => setActiveContent(activeContent + 1)}
                                  >下一步
                                  </button>
                                  <button
                                    className="btn btn-custom btn-elife-outline-green"
                                    onClick={() => modalService.trigger(ModalNamesEnum.OnlineAuthApplyModal, false)}
                                  >取消
                                  </button>
                                </div>
                              </>
                            )
                        }
                  {
                            activeContent >= 3 && (
                              <>
                                <div className="col p-2">
                                  <button
                                    className="btn btn-custom btn-elife-outline-green"
                                    onClick={() => modalService.trigger(ModalNamesEnum.OnlineAuthApplyModal, false)}
                                  >確認
                                  </button>
                                </div>
                              </>
                            )
                        }
                </div>
              </div>
            </div>
          </>
            )}
        fullscreen
      >
        <OnlineAuthApply activeContent={activeContent} />
      </CustomModal2>
      <Card id="paymentMethod" style={{ minHeight: '450px', width: '95%' }}>
        {/* <div className="content mt-3"> */}
        {/*  <div className="row justify-between"> */}
        {/*    <div className="col-5"> */}
        {/*      <div className="name labelName">首期保費繳費方式</div> */}
        {/*      <SelectField */}
        {/*        label="" */}
        {/*        className="selectpicker w-100 relation" */}
        {/*        name="perYear" */}
        {/*      > */}
        {/*        <> */}
        {/*          <SelectField.Option value="1" key="1"> */}
        {/*            匯款 */}
        {/*          </SelectField.Option> */}
        {/*          <SelectField.Option value="2" key="2"> */}
        {/*            郵局劃撥 */}
        {/*          </SelectField.Option> */}
        {/*          <SelectField.Option value="3" key="3"> */}
        {/*            銀行(郵局)轉帳 */}
        {/*          </SelectField.Option> */}
        {/*          <SelectField.Option value="4" key="4"> */}
        {/*            信用卡 */}
        {/*          </SelectField.Option> */}
        {/*        </> */}
        {/*      </SelectField> */}
        {/*    </div> */}
        {/*    <div className="col-5"> */}
        {/*      <div className="name labelName">續期保費繳費方式</div> */}
        {/*      <div className="d-flex flex-row"> */}
        {/*        <SelectField label="" className="selectpicker w-100 relation" name="payMode" onChange={(e) => setPayMode(e.target.value)}> */}
        {/*          <SelectField.Option value="1" key="1"> */}
        {/*            自行繳費 */}
        {/*          </SelectField.Option> */}
        {/*          <SelectField.Option value="2" key="2"> */}
        {/*            銀行(郵局)轉帳 */}
        {/*          </SelectField.Option> */}
        {/*          <SelectField.Option value="3" key="3"> */}
        {/*            其他 */}
        {/*          </SelectField.Option> */}
        {/*        </SelectField> */}
        {/*        <input style={{ width: '45%', marginLeft: '10px', display: `${payMode === '3' ? 'block' : 'none'} ` }} type="text" name="name" className="form-control" /> */}
        {/*      </div> */}
        {/*    </div> */}
        {/*  </div> */}
        {/*  <div className="row"> */}
        {/*    <div className="name labelName">保險費付款授權</div> */}
        {/*    <div className="d-flex flex-column"> */}
        {/*      <div className="d-flex justify-between"> */}
        {/*        <div className="col-8 d-flex" style={{ paddingRight: '12px' }}> */}
        {/*          <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" /> */}
        {/*          <label className="form-check-label me-2 text-nowrap labelName">紙本付款授權：付款授權編號</label> */}
        {/*          <input type="text" name="name" className="form-control" /> */}
        {/*        </div> */}
        {/*      </div> */}
        {/*      <div className="d-flex mt-3"> */}
        {/*        <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" /> */}
        {/*        <label className="form-check-label me-2 text-nowrap labelName">eDDA電子化授權</label> */}
        {/*        <button */}
        {/*          className="btn btn-elife-green btn-custom authorizationBtn" onClick={() => { */}
        {/*            setActiveContent(1); */}
        {/*            setOnlineAuthApplyVisible(true); */}
        {/*          }} */}
        {/*        > */}
        {/*          執行線上申請授權 */}
        {/*        </button> */}
        {/*      </div> */}
        {/*    </div> */}
        {/*  </div> */}
        {/*  <div className="row"> */}
        {/*    <div className="name labelName">自動墊繳</div> */}
        {/*    <span className="notes mt-2">要保人是否同意保險費逾寬限期間未繳付時，以保單價值準備金自動墊繳保險費？</span> */}
        {/*    <div className="d-flex"> */}
        {/*      <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" /> */}
        {/*      <label className="form-check-label me-2 text-nowrap labelName">是</label> */}
        {/*      <input type="radio" name="autoPayment" className="form-check-input me-2 mb-1" /> */}
        {/*      <label className="form-check-label me-2 text-nowrap labelName">否</label> */}
        {/*    </div> */}
        {/*  </div> */}
        {/*  <div className="row justify-between"> */}
        {/*    <div className="col-5"> */}
        {/*      <div className="name labelName">保單寄送方式</div> */}
        {/*      <SelectField label="" className="selectpicker w-100 relation" name="sendType"> */}
        {/*        <> */}
        {/*          <SelectField.Option value="1" key="1"> */}
        {/*            紙本保單 */}
        {/*          </SelectField.Option> */}
        {/*          <SelectField.Option value="2" key="2"> */}
        {/*            電子保單 */}
        {/*          </SelectField.Option> */}
        {/*        </> */}
        {/*      </SelectField> */}
        {/*    </div> */}
        {/*    <div className="col-5"> */}
        {/*      <div className="name labelName">電子單據</div> */}
        {/*      <Checkbox name="mail" className="labelName">申請，並適用於要保人於臺銀人壽所有個人保單。(未勾選視為不申請、申請時，請務必填寫要保人電子郵件信箱)</Checkbox> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </div> */}

        <div className="row flex-column">
          <div className="col">
            <div className="row flex-column flex-md-row align-items-center justify-content-between">
              <div className="col col-md-5">
                <label
                  className="form-label labelName m-0 py-2"
                  htmlFor="applicantNationType-0"
                >首期保費繳費方式
                </label>
                <SelectField
                  label=""
                  className="selectpicker w-100 relation py-2"
                  name="perYear"
                >
                  <>
                    <SelectField.Option value="1" key="1">
                      匯款
                    </SelectField.Option>
                    <SelectField.Option value="2" key="2">
                      郵局劃撥
                    </SelectField.Option>
                    <SelectField.Option value="3" key="3">
                      銀行(郵局)轉帳
                    </SelectField.Option>
                    <SelectField.Option value="4" key="4">
                      信用卡
                    </SelectField.Option>
                  </>
                </SelectField>
              </div>
              <div className="col col-md-5">
                <label
                  className="form-label labelName m-0 py-2"
                  htmlFor="applicantNationType-0"
                >續期保費繳費方式
                </label>
                <div className="row flex-column flex-md-row align-items-center">
                  <div className="col">
                    <SelectField
                      label="" className="selectpicker w-100 relation py-2" name="payMode"
                      onChange={(e) => setPayMode(e.target.value)}
                    >
                      <SelectField.Option value="1" key="1">
                        自行繳費
                      </SelectField.Option>
                      <SelectField.Option value="2" key="2">
                        銀行(郵局)轉帳
                      </SelectField.Option>
                      <SelectField.Option value="3" key="3">
                        其他
                      </SelectField.Option>
                    </SelectField>
                  </div>
                  <div className="col col-md-auto">
                    <input
                      style={{ display: `${payMode === '3' ? 'block' : 'none'} ` }}
                      type="text" name="name" className="form-control"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="row flex-column">
              <div className="col py-2">
                <label
                  className="form-label labelName m-0"
                  htmlFor="applicantNationType-0"
                >保險費付款授權
                </label>
              </div>
              <div className="col py-2">
                <div className="input-group">
                  <div className="form-check d-flex align-items-center pe-2">
                    <input
                      type="radio" name="applicantNationType" id="applicantNationType-0"
                      className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                    />
                    <label
                      className="form-check-label labelName m-0 ms-2"
                      htmlFor="applicantNationType-0"
                    >紙本付款授權：付款授權編號
                    </label>
                  </div>
                  <input
                    type="text" id="applicant-postCode" className="form-control"
                  />
                </div>
              </div>
              <div className="col py-2">
                <div className="row flex-column flex-md-row align-items-center">
                  <div className="col col-md-auto">
                    <div className="form-check d-flex align-items-center pe-2">
                      <input
                        type="radio" name="applicantNationType" id="applicantNationType-0"
                        className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                      />
                      <label
                        className="form-check-label labelName m-0 ms-2"
                        htmlFor="applicantNationType-0"
                      >eDDA電子化授權
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-elife-green btn-custom authorizationBtn" onClick={() => {
                        setActiveContent(1);
                        // setOnlineAuthApplyVisible(true);
                        modalService.trigger(ModalNamesEnum.OnlineAuthApplyModal, true, {
                          visible: true
                        });
                      }}
                    >
                      執行線上申請授權
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row flex-column">
              <div className="col">
                <label
                  className="form-label labelName m-0 py-2"
                  htmlFor="applicantNationType-0"
                >保險費付款授權
                </label>
              </div>
              <span className="notes mt-2 ">要保人是否同意保險費逾寬限期間未繳付時，以保單價值準備金自動墊繳保險費？</span>
              <div className="col d-flex flex-row pb-2">
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
            </div>
          </div>
          <div className="col">
            <div className="row flex-column flex-md-row align-items-center justify-content-between">
              <div className="col col-md-5">
                <label
                  className="form-label labelName m-0 py-2"
                  htmlFor="applicantNationType-0"
                >保單寄送方式
                </label>
                <SelectField label="" className="selectpicker w-100 relation py-2" name="sendType">
                  <>
                    <SelectField.Option value="1" key="1">
                      紙本保單
                    </SelectField.Option>
                    <SelectField.Option value="2" key="2">
                      電子保單
                    </SelectField.Option>
                  </>
                </SelectField>
              </div>
              <div className="col col-md-5">
                <label
                  className="form-label labelName m-0 py-2"
                  htmlFor="applicantNationType-0"
                >電子單據
                </label>
                <Checkbox name="sync" className="d-flex align-items-center" classNames={{ labelClass: 'ms-2', inputClass: '' }}>
                  申請，並適用於要保人於臺銀人壽所有個人保單。(未勾選視為不申請、申請時，請務必填寫要保人電子郵件信箱)
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PaymentMethod;
