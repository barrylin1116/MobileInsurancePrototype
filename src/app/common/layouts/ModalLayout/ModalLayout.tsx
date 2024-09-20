import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import CustomModal2 from '../../../features/Insurance/pages/Modals/CustomModal2';
import modalService from '../../../core/services/modalService';
import { ModalNamesEnum } from '../../../core/enums/ui/modals';
import CustomTab from '../../../features/Other/components/CustomTab';
import { updatePreviewActiveKeyAction } from '../../../store/ui/actions';
import SubmitAndCancelButtonGroup from '../../../features/Other/components/SubmitAndCancelButtonGroup';
import PreviewHistory from '../../../features/Other/Content/DocumentInner/PreviewHistory';
import Preview from '../../../features/Other/Content/DocumentInner/Preview';

const ModalLayout: React.FC<any> = (props) => {
  const reduxDispatch = useDispatch();
  const dataStorageModalVisibleState = useSelector((state: RootState) => state.UI.modals.dataStorageModalVisible);
  const submissionHintModalVisibleState = useSelector((state: RootState) => state.UI.modals.submissionHintModalVisible);
  const successSubmissionModalVisibleState = useSelector((state: RootState) => state.UI.modals.successSubmissionModalVisible);
  const failSubmissionModalVisibleState = useSelector((state: RootState) => state.UI.modals.failSubmissionModalVisible);
  const previewModalVisibleState = useSelector((state: RootState) => state.UI.modals.previewModalVisible);
  const previewMsgModalVisibleState = useSelector((state: RootState) => state.UI.modals.previewMsgModalVisible);
  const previewMsgModalModalProps = useSelector((state: RootState) => state.UI.modals.previewMsgModalProps);

  const previewTabActiveKey = useSelector((state: RootState) => state.UI.previewTabActiveKey);

  return (
    <>
      {/* 檢視 */}
      <CustomModal2
        visible={previewModalVisibleState}
        header={(
          <div className="row position-relative justify-content-center w-100 align-items-center">
            <div className="col d-flex justify-content-center align-items-center">檢視</div>
            <div className="col-auto d-flex flex-column position-absolute end-0">
              <button
                className="btn btn-custom btn-elife-outline-green"
                onClick={() => modalService.trigger(ModalNamesEnum.PreviewModal, false)}
              >完成
              </button>
            </div>
          </div>
              )}
        headerContainerClassName="modal-custom-color-green"
        contentContainerClassName="p-5"
        showFooter={false}
        fullscreen
      >
        <CustomTab
          tabs={[
            {
              tabElement: (
                <div
                  className="w-100"
                  onClick={() => updatePreviewActiveKeyAction('1')}
                >
                  要保文件預檢
                </div>
              ),
              key: '1'
            },
            {
              tabElement: (
                <div
                  className="w-100"
                  onClick={() => updatePreviewActiveKeyAction('2')}
                >
                  歷史檢視
                </div>
              ),
              key: '2'
            }
          ]}
          tabContents={
                      [
                        { activeKey: '1', body: (<Preview />) },
                        { activeKey: '2', body: (<PreviewHistory />) }
                      ]
                  }
          activeKey={previewTabActiveKey}
          onChange={(e) => {
            reduxDispatch(updatePreviewActiveKeyAction(e));
          }}
        />
      </CustomModal2>

      {/* 資料已儲存 */}
      <CustomModal2
        visible={dataStorageModalVisibleState}
        title="資料已儲存"
        footer={(
          <SubmitAndCancelButtonGroup
            leftButtonText="確認"
            showSingleButton
            leftButtonOnclick={() => modalService.trigger(ModalNamesEnum.DataStorageModal, false)}
          />
              )}
        headerContainerClassName="modal-custom-color-green"
      >
        <div className="d-flex align-items-center">
          <img
            className="col-2 exclamation-icon"
            src={require('assets/img/icons/file-save.svg').default}
          />
          <div className="container text-center fs-4">
            <div className="row py-2">
              <div className="col">
                行動投保編號
              </div>
              <div className="col">
                OA11111111
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                保單號碼
              </div>
              <div className="col">
                OB11111111
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                案件狀態
              </div>
              <div className="col">
                簽署平台簽署中
              </div>
            </div>
          </div>
        </div>
      </CustomModal2>

      <CustomModal2
        visible={submissionHintModalVisibleState}
        header={(
          <div className="row position-relative justify-content-center w-100 align-items-center">
            <div className="col d-flex justify-content-center align-items-center">案件提交</div>
            <div className="col-auto d-flex flex-column position-absolute end-0">
              <button
                className="btn btn-custom btn-elife-outline-green" onClick={() => {
                  modalService.trigger(ModalNamesEnum.SubmissionHintModal, false);
                  modalService.trigger(ModalNamesEnum.SuccessSubmissionModal, true);
                }}
              >成功 Demo
              </button>
              <button
                className="btn btn-custom btn-elife-outline-green" onClick={() => {
                  modalService.trigger(ModalNamesEnum.SubmissionHintModal, false);
                  modalService.trigger(ModalNamesEnum.FailSubmissionModal, true);
                }}
              >失敗 Demo
              </button>
            </div>
          </div>
              )}
        headerContainerClassName="modal-custom-color-green"
        showFooter={false}
      >
        <div className="container">
          <div className="row m-2">
            <div className="col p-2 border">
              <div className="row justify-content-center">
                <div className="col w-auto d-flex flex-row justify-content-center">
                  <img
                                      // className="col-2 exclamation-icon"
                    className="h-100"
                    src={require('assets/img/icons/upload_file.svg').default}
                  />
                  <div className="labelName fs-3">
                    您的要保書正在提交中!<br />
                    資料已完備請稍候....
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomModal2>

      <CustomModal2
        visible={successSubmissionModalVisibleState}
        header={(
          <div className="row position-relative justify-content-center w-100 align-items-center">
            <div className="col d-flex justify-content-center align-items-center">案件已建立</div>
            <div className="col-auto d-flex flex-column position-absolute end-0">
              <button
                className="btn btn-custom btn-elife-outline-green" onClick={() => {
                  modalService.trigger(ModalNamesEnum.SuccessSubmissionModal, false);
                  modalService.trigger(ModalNamesEnum.FailSubmissionModal, true);
                }}
              >失敗 Demo
              </button>
            </div>
          </div>
              )}
        footer={(
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <button className="btn btn-custom btn-elife-green" onClick={() => modalService.trigger(ModalNamesEnum.SuccessSubmissionModal, false)}>確認</button>
              </div>
            </div>
          </div>
              )}
        headerContainerClassName="modal-custom-color-green"
      >
        <div className="container">
          <div className="row m-2">
            <div className="col p-2 border">
              <div className="row justify-content-center">
                <div className="col w-100 d-flex flex-row justify-content-center">
                  <img
                                      // className="col-2 exclamation-icon"
                    className="h-100 p-5"
                    src={require('assets/img/icons/check-green-1.svg').default}
                  />
                  <div className="row flex-column labelName fs-3 pl-2 text-nowrap">
                    <div className="col-12">
                      <div className="row p-2">
                        <div className="col">行動投保編號</div>
                        <div className="col">OA11111111</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row p-2">
                        <div className="col">保單號碼</div>
                        <div className="col">OB11111111</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row p-2">
                        <div className="col">案件狀態</div>
                        <div className="col">簽署平台簽署中</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomModal2>

      <CustomModal2
        visible={failSubmissionModalVisibleState}
        header={(
          <div className="row position-relative justify-content-center w-100 align-items-center">
            <div className="col d-flex justify-content-center align-items-center">線核預檢失敗</div>
            <div className="col-auto d-flex flex-column position-absolute end-0">
              <button
                className="btn btn-custom btn-elife-outline-green"
                onClick={() => {
                  modalService.trigger(ModalNamesEnum.FailSubmissionModal, false);
                  modalService.trigger(ModalNamesEnum.SuccessSubmissionModal, true);
                }}
              >成功 Demo
              </button>
            </div>
          </div>
              )}
        headerContainerClassName="modal-custom-color-green"
        footer={(
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <button className="btn btn-custom btn-elife-green" onClick={() => modalService.trigger(ModalNamesEnum.FailSubmissionModal, false)}>確認</button>
              </div>
            </div>
          </div>
              )}
      >
        <div className="container">
          <div className="row m-2">
            <div className="col p-2 border">
              <div className="row justify-content-center">
                <div className="col w-100 d-flex flex-row justify-content-center">
                  <img
                                      // className="col-2 exclamation-icon"
                    className="h-100 p-5"
                    src={require('assets/img/icons/error-red.svg').default}
                  />
                  <div className="row align-items-center labelName fs-3 pl-2 text-nowrap">
                    <div className="col-12">
                      <div className="row p-2">
                        <div className="col">行動投保編號</div>
                        <div className="col">OA11111111</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomModal2>

      <CustomModal2
        visible={previewMsgModalVisibleState}
        header={(
          <div className="row position-relative justify-content-center w-100 align-items-center">
            <div className="col d-flex justify-content-center align-items-center">{previewMsgModalModalProps.title}</div>
            <div className="col-auto d-flex flex-column position-absolute end-0">
              <button
                className="btn btn-custom btn-elife-outline-green"
                onClick={() => modalService.trigger(ModalNamesEnum.PreviewMsgModal, false)}
              >關閉
              </button>
            </div>
          </div>
            )}
        headerContainerClassName="modal-custom-color-green"
        fullscreen
        showFooter={false}
      >
        {previewMsgModalModalProps.content}
      </CustomModal2>
    </>
  );
};

export default ModalLayout;
