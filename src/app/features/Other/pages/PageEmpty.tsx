// import React, { useEffect, useState } from 'react';
// import { Tabs } from 'antd';
// import ProductChoose from '../Content/ProductChoose';
// import { routerHistory } from '../../../core/router/service';
// import { ROUTES } from '../../../core/router/paths';
// import Relation from '../Content/Relation';
// import DocumentsList from '../Content/DocumentsList';
// import InsuredContent from '../Content/InsuredContent';
// import PaymentMethod from '../Content/PaymentMethod';
// import CustomModal from '../../Insurance/pages/Modals/CustomModal';
// import CustomTab from '../components/CustomTab';
// import Preview from '../Content/DocumentInner/Preview';
// import PreviewHistory from '../Content/DocumentInner/PreviewHistory';
// import Sign from '../Content/Sign/Sign';
// import SubmitAndCancelButtonGroup from '../components/SubmitAndCancelButtonGroup';
//
// const Page1: React.FC<any> = (props) => {
//   const [updateTime, setUpdateTime] = useState('');
//   useEffect(() => {
//     setUpdateTime('109/8/1 12:00:21');
//   }, []);
//   const [activeKey, setActiveKey] = useState('1');
//   const [previewModalVisible, setPreviewModalVisible] = useState(false);
//   const [submissionModalVisible, setSubmissionModalVisible] = useState(false);
//   const [submissionHintModalVisible, setSubmissionHintModalVisible] = useState(false);
//   const [dataStorageModalVisible, setDataStorageModalVisible] = useState(false);
//   const [isUpload, setIsUpload] = useState(false);
//   const [loadResult, setLoadResult] = useState(false);
//   const [previewTabActiveKey, setpreviewTabActiveKey] = useState< string | number>('1');
//
//   const openPreviewModal = () => {
//     setPreviewModalVisible(true);
//   };
//
//   const openSubmissionModal = () => {
//     setSubmissionHintModalVisible(true);
//   };
//
//   const openDataStorageModal = () => {
//     setDataStorageModalVisible(true);
//   };
//
//   const submissionHintList = [
//     '各項要保文件已由要/被保人親簽並審閱，且各項資料內容本人均已確認正確無誤',
//     '已確認要/被保人親自簽名及未滿7歲由法代簽署且適用於行動投保之不識字或不識字會簽名者，皆不適用行動投保',
//     '如有招攬不實者，業務員需返還佣金、業績津貼，並連帶賠償臺銀人壽所有損害及停權'
//   ];
//
//   const previewBody = () => {
//     return (
//       <Preview />
//     );
//   };
//
//   const previewHistoryBody = () => {
//     return (
//       <PreviewHistory />
//     );
//   };
//
//   useEffect(() => {
//     const state: any = routerHistory.location.state;
//     if (state?.activeTab) {
//       setActiveKey(state.activeTab);
//     }
//   }, [routerHistory.location.pathname]);
//   return (
//     <>
//       <div id="emptyPage">
//         <header>
//           <div style={{ width: '100%', height: '75px', position: 'absolute', background: '#348d8f' }} />
//           <nav className="navbar fixed-top navbar-expand" style={{ height: '40px', paddingBottom: '5px' }}>
//             <div className="d-flex col-3 h-100">
//               <div className="h-100 d-flex flex-column-reverse">
//                 <button
//                   type="button" className="btn-close p-0" data-bs-dismiss="modal"
//                   aria-label="close" value="回首頁"
//                   onClick={() => routerHistory.push(ROUTES.PAGE_1)}
//                 />
//               </div>
//               <div className="h-100 d-flex flex-column-reverse" style={{ lineHeight: '1.2' }}>
//                 <span onClick={() => routerHistory.push(ROUTES.PAGE_1)} className="btn-close-text">回首頁</span>
//               </div>
//             </div>
//             <div className="collapse navbar-collapse justify-center col-6 h-100">
//               <div className="d-flex d-flex flex-column-reverse h-100">
//                 <h2 className="section-title" style={{ fontSize: '1rem', color: ' white', marginBottom: '0' }}>
//                   M123456789(OA12345678)
//                 </h2>
//               </div>
//             </div>
//             <div className="d-flex col-3 h-100 justify-end pr-1">
//               <span className="updateTime d-flex flex-column-reverse">
//                 {updateTime ? (<>最近更新時間：{updateTime}</>) : <></>}
//               </span>
//             </div>
//           </nav>
//         </header>
//         <main style={{ marginTop: '40px' }}>
//           <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
//             <div className="row page1Pane">
//               <div className="row">
//                 <div
//                   className="col-lg-1 d-flex flex-row"
//                   style={{ zIndex: 1, margin: 'auto 0px', width: '15%', paddingLeft: '15px' }}
//                 >
//                   <button
//                     type="button"
//                     className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
//                     onClick={() => openPreviewModal()}
//                   >
//                     <div className="row">
//                       <div className="col-lg-12">檢視</div>
//                     </div>
//                   </button>
//                 </div>
//                 <div className="p-1 col-lg-8 d-flex flex-column-reverse" style={{ width: '70%' }}>
//                   <Tabs activeKey={activeKey} centered className="InsuranceActiveTab">
//                     <Tabs.TabPane
//                       tab={
//                         <div onClick={() => setActiveKey('1')}>
//                           <div className="tabText">
//                             <img
//                               style={{ width: '1.2rem', height: '1.2rem', position: 'absolute', top: '0', left: '40%' }}
//                               src={require('assets/img/icons/check.svg').default}
//                             />
//                             商品選擇
//                           </div>
//                         </div>
//                       } key="1"
//                     />
//                     <Tabs.TabPane
//                       tab={
//                         <div onClick={() => setActiveKey('2')}>
//                           <div className="tabText">
//                             <img
//                               style={{ width: '1.2rem', height: '1.2rem', position: 'absolute', top: '0', left: '40%' }}
//                               src={require('assets/img/icons/check.svg').default}
//                             />
//                             關係人
//                           </div>
//                         </div>
//                       } key="2"
//                     />
//                     <Tabs.TabPane
//                       tab={
//                         <div onClick={() => setActiveKey('3')}>
//                           <div className="tabText">
//                             <img
//                               style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
//                               src={require('assets/img/icons/warn.svg').default}
//                             />
//                             投保内容
//                           </div>
//                         </div>
//                       } key="3"
//                     />
//                     <Tabs.TabPane
//                       tab={
//                         <div onClick={() => setActiveKey('4')}>
//                           <div className="tabText">
//                             <img
//                               style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
//                               src={require('assets/img/icons/warn.svg').default}
//                             />
//                             繳費方式
//                           </div>
//                         </div>
//                       } key="4"
//                     />
//                     <Tabs.TabPane
//                       tab={
//                         <div onClick={() => setActiveKey('5')}>
//                           <div className="tabText">
//                             <img
//                               style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
//                               src={require('assets/img/icons/warn.svg').default}
//                             />
//                             應附文件
//                           </div>
//                         </div>
//                       } key="5"
//                     />
//                     <Tabs.TabPane
//                       tab={
//                         <div onClick={() => setActiveKey('6')}>
//                           <div className="tabText">
//                             <img
//                               style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
//                               src={require('assets/img/icons/warn.svg').default}
//                             />
//                             簽名
//                           </div>
//                         </div>
//                       } key="6"
//                     />
//                   </Tabs>
//                 </div>
//                 <div className="p-1 col-lg-2 d-flex flex-column" style={{ zIndex: 1, width: '15%' }}>
//                   <div className="row" style={{ justifyContent: 'right' }}>
//                     <button
//                       type="button"
//                       className="btn btn-outline-primary me-lg-0 cus-outline-transparent InsuranceEndButton"
//                       value="資料存儲"
//                       onClick={() => openDataStorageModal()}
//                     >
//                       資料存儲
//                     </button>
//                   </div>
//                   <div className="row mt-1" style={{ justifyContent: 'right' }}>
//                     <button
//                       type="button"
//                       className="btn btn-outline-primary me-lg-0 cus-outline-transparent InsuranceEndButton"
//                       value="案件提交"
//                       onClick={() => openSubmissionModal()}
//                     >
//                       案件提交
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row pb-3 pt-3 m-1 justify-center">
//             {activeKey === '1' ? <ProductChoose /> : null}
//             {activeKey === '2' ? <Relation /> : null}
//             {activeKey === '3' ? <InsuredContent /> : null}
//             {activeKey === '4' ? <PaymentMethod /> : null}
//             {activeKey === '5' ? <DocumentsList /> : null}
//             {activeKey === '6' ? <Sign /> : null}
//           </div>
//           {
//         previewModalVisible && (
//           <CustomModal
//             headerTitle="檢視"
//             isOpen={previewModalVisible}
//             buttonPosition="right"
//             headerButton={
//               <>
//                 <button
//                   type="button"
//                   className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
//                 >
//                   <div className="row">
//                     <div className="col-lg-12" onClick={() => setPreviewModalVisible(false)}>完成</div>
//                   </div>
//                 </button>
//               </>
//                        }
//           >
//             <CustomTab
//               contentClass="p-0"
//               tabs={[
//                 {
//                   tabElement: (<div className="w-100" onClick={() => setpreviewTabActiveKey('1')}>要保文件預檢</div>),
//                   key: '1'
//                 },
//                 {
//                   tabElement: (<div className="w-100" onClick={() => setpreviewTabActiveKey('2')}>歷史檢視</div>),
//                   key: '2'
//                 }
//               ]}
//               tabContents={
//               [
//                 { activeKey: '1', body: previewBody() },
//                 { activeKey: '2', body: previewHistoryBody() }
//               ]
//               }
//               activeKey={previewTabActiveKey}
//               onChange={(e) => setpreviewTabActiveKey(e)}
//             />
//           </CustomModal>
//         )
//       }
//
//           <CustomModal
//             isModalMsg
//             headerTitle={isUpload ? (loadResult ? '案件已建立' : '線核預檢失敗') : '案件提交'}
//             headerButton={
//               <>
//                 <div className="container justify-content-center align-items-center">
//                   <div className="row justify-content-center align-items-center">
//                     <div className="col">
//                       <div
//                         className="btn btn-outline-primary" onClick={() => {
//                           setIsUpload(true);
//                           setLoadResult(true);
//                         }}
//                       >成功 Demo
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row justify-content-center align-items-center">
//                     <div className="col">
//                       <div
//                         className="btn btn-outline-primary" onClick={() => {
//                           setIsUpload(true);
//                           setLoadResult(false);
//                         }}
//                       >失敗 Demo
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//
//               </>
//             }
//             isOpen={submissionModalVisible}
//             footerContent={
//               <>
//                 {isUpload && loadResult &&
//                   <SubmitAndCancelButtonGroup
//                     showSingleButton
//                     leftButtonOnclick={() => {
//                       setSubmissionModalVisible(false);
//                       setIsUpload(false);
//                     }}
//                   />}
//                 {isUpload && !loadResult &&
//                   <SubmitAndCancelButtonGroup
//                     showSingleButton
//                     leftButtonOnclick={() => {
//                       setSubmissionModalVisible(false);
//                       setIsUpload(false);
//                     }}
//                   />}
//               </>
//             }
//           >
//             <>
//               {!isUpload && (
//                 <div className="d-flex w-100 justify-content-center  align-items-center">
//                   <img
//                     className="col-2 exclamation-icon"
//                     src={require('assets/img/icons/upload_file.svg').default}
//                   />
//                   <div className="labelName fs-3">
//                     您的要保書正在提交中!<br />
//                     資料已完備請稍候....
//                   </div>
//                 </div>
//               )}
//               {isUpload && loadResult && (
//                 <>
//                   <div className="d-flex align-items-center">
//                     <img
//                       className="col-2 exclamation-icon"
//                       src={require('assets/img/icons/check-green-1.svg').default}
//                     />
//                     <div className="container text-center fs-4">
//                       <div className="row py-2">
//                         <div className="col">
//                           行動投保編號
//                         </div>
//                         <div className="col">
//                           OA11111111
//                         </div>
//                       </div>
//                       <div className="row py-2">
//                         <div className="col">
//                           保單號碼
//                         </div>
//                         <div className="col">
//                           OB11111111
//                         </div>
//                       </div>
//                       <div className="row py-2">
//                         <div className="col">
//                           案件狀態
//                         </div>
//                         <div className="col">
//                           簽署平台簽署中
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//
//                 </>
//               )}
//               {isUpload && !loadResult && (
//                 <>
//                   <div className="container d-flex align-items-center">
//                     <img
//                       className="exclamation-icon"
//                       src={require('assets/img/icons/error-red.svg').default}
//                       style={{ marginRight: '10px', width: '80px', height: '80px' }}
//                     />
//                     <div className="fs-4">
//                       請至歷程檢視並點閱錯誤訊息，經錯誤修正後重新提交
//                     </div>
//                   </div>
//
//                 </>
//               )}
//             </>
//
//           </CustomModal>
//           <CustomModal
//             isModalMsg
//             headerTitle="要保書及相關文件等詢問事項應注意如下"
//             isOpen={submissionHintModalVisible}
//             buttonPosition="right"
//             footerContent={
//               <SubmitAndCancelButtonGroup
//                 showSingleButton={false}
//                 leftButtonText="確認提交"
//                 leftButtonOnclick={() => {
//                   setSubmissionHintModalVisible(false);
//                   setSubmissionModalVisible(true);
//                 }}
//                 rightButtonOnclick={() => {
//                   setSubmissionHintModalVisible(false);
//                 }}
//               />
//               }
//           >
//             <div className="container fs-4">
//               {
//                 submissionHintList.map((hint, index) => (
//                   <div className="p-2" key={`hint-${index}`}>{`${index + 1}. ${hint}`}</div>
//                 ))
//               }
//             </div>
//           </CustomModal>
//
//           <CustomModal
//             isModalMsg
//             headerTitle="資料已儲存"
//             isOpen={dataStorageModalVisible}
//             footerContent={
//               <SubmitAndCancelButtonGroup
//                 showSingleButton
//                 leftButtonOnclick={() => {
//                   setDataStorageModalVisible(false);
//                 }}
//               />
//               }
//           >
//             <div className="d-flex align-items-center">
//               <img
//                 className="col-2 exclamation-icon"
//                 src={require('assets/img/icons/file-save.svg').default}
//               />
//               <div className="container text-center fs-4">
//                 <div className="row py-2">
//                   <div className="col">
//                     行動投保編號
//                   </div>
//                   <div className="col">
//                     OA11111111
//                   </div>
//                 </div>
//                 <div className="row py-2">
//                   <div className="col">
//                     保單號碼
//                   </div>
//                   <div className="col">
//                     OB11111111
//                   </div>
//                 </div>
//                 <div className="row py-2">
//                   <div className="col">
//                     案件狀態
//                   </div>
//                   <div className="col">
//                     簽署平台簽署中
//                   </div>
//                 </div>
//               </div>
//             </div>
//
//           </CustomModal>
//         </main>
//       </div>
//     </>
//   );
// };
//
// export default Page1;

import React, { useEffect, useRef, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import modalService from '../../../core/services/modalService';
import { ModalNamesEnum } from '../../../core/enums/ui/modals';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';
import ProductChoose from '../Content/ProductChoose';
import Relation from '../Content/Relation';
import InsuredContent from '../Content/InsuredContent';
import PaymentMethod from '../Content/PaymentMethod';
import DocumentsList from '../Content/DocumentsList';
import Sign from '../Content/Sign/Sign';
import CustomModal2 from '../../Insurance/pages/Modals/CustomModal2';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import Checkbox from '../../../common/components/Checkbox';
import Article from '../../../common/components/Article';

const EmptyPage: React.FC<any> = (props) => {
  const submissionModalVisibleState = useSelector((state: RootState) => state.UI.modals.submissionModalVisible);

  /** ******** submissionModal **********/
  const submissionHintList = [
    '各項要保文件已由要/被保人親簽並審閱，且各項資料內容本人均已確認正確無誤',
    '已確認要/被保人親自簽名及未滿7歲由法代簽署且適用於行動投保之不識字或不識字會簽名者，皆不適用行動投保',
    '如有招攬不實者，業務員需返還佣金、業績津貼，並連帶賠償臺銀人壽所有損害及停權'
  ];

  const submissionModalRef = useRef<HTMLDivElement>(null);
  const [submissionModalButtonEnabled, setSubmissionModalButtonEnabled] = useState(false);

  const [updateTime, setUpdateTime] = useState<string>('');
  useEffect(() => {
    setUpdateTime('109/8/1 12:00:21');
  }, []);

  useEffect(() => {
    const state: any = routerHistory.location.state;
    if (state?.activeTab) {
      setActiveKey(state.activeTab);
    }
  }, [routerHistory.location.pathname]);

  const [activeKey, setActiveKey] = useState('1');

  const openPreviewModal = () => {
    modalService.trigger(ModalNamesEnum.PreviewModal, true);
  };

  return (
    <>
      <div id="emptyPage" className="container-fluid p-0">
        <header className="sticky-top">
          <nav className="navbar navbar-expand-lg p-0">
            <div className="container-fluid py-1">
              <div className="row w-100 p-0 m-0 justify-content-around text-white">
                <div
                  role="button"
                  className="align-items-center d-flex col-3 fw-medium fs-5"
                  onClick={() => routerHistory.push(ROUTES.PAGE_1)}
                >
                  <LeftOutlined />
                  回首頁
                </div>
                <div className="d-flex justify-content-center align-items-center col-6">
                  <h2
                    className="section-title fs-6 text-white mb-0"
                  >
                    M123456789(OA12345678)
                  </h2>
                </div>
                <div className="align-items-center d-flex col-3 justify-content-end">
                  <span className="updateTime d-flex flex-column-reverse">
                    {updateTime ? (<>最近更新時間：{updateTime}</>) : <></>}
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="container-fluid tabnav-container">
            <div className="row align-items-center py-2">
              <div className="col-2 d-flex align-items-center" style={{ zIndex: 1 }}>
                <button
                  type="button"
                  className="btn btn-elife-outline-green me-3 me-lg-0 cus-outline-transparent InsuranceButton"
                  onClick={openPreviewModal}
                >
                  檢視
                </button>
              </div>
              <div className="col-8 ">
                <Tabs activeKey={activeKey} className="" centered>
                  <Tabs.TabPane
                    tab={
                      <div onClick={() => setActiveKey('1')}>
                        <div className="tabText">
                          <img
                            style={{
                              width: '1.2rem',
                              height: '1.2rem',
                              position: 'absolute',
                              top: '0',
                              left: '40%'
                            }}
                            src={require('assets/img/icons/check.svg').default}
                          />
                          商品選擇
                        </div>
                      </div>
                                        } key="1"
                  />
                  <Tabs.TabPane
                    tab={
                      <div onClick={() => setActiveKey('2')}>
                        <div className="tabText">
                          <img
                            style={{
                              width: '1.2rem',
                              height: '1.2rem',
                              position: 'absolute',
                              top: '0',
                              left: '40%'
                            }}
                            src={require('assets/img/icons/check.svg').default}
                          />
                          關係人
                        </div>
                      </div>
                                        } key="2"
                  />
                  <Tabs.TabPane
                    tab={
                      <div onClick={() => setActiveKey('3')}>
                        <div className="tabText">
                          <img
                            style={{
                              width: '1.2rem',
                              height: '1.2rem',
                              position: 'absolute',
                              top: '0',
                              left: '40%'
                            }}
                            src={require('assets/img/icons/check.svg').default}
                          />
                          投保内容
                        </div>
                      </div>
                                        } key="3"
                  />
                  <Tabs.TabPane
                    tab={
                      <div onClick={() => setActiveKey('4')}>
                        <div className="tabText">
                          <img
                            style={{
                              width: '1.2rem',
                              height: '1.2rem',
                              position: 'absolute',
                              top: '0',
                              left: '40%'
                            }}
                            src={require('assets/img/icons/check.svg').default}
                          />
                          繳費方式
                        </div>
                      </div>
                                        } key="4"
                  />
                  <Tabs.TabPane
                    tab={
                      <div onClick={() => setActiveKey('5')}>
                        <div className="tabText">
                          <img
                            style={{
                              width: '1.2rem',
                              height: '1.2rem',
                              position: 'absolute',
                              top: '0',
                              left: '40%'
                            }}
                            src={require('assets/img/icons/check.svg').default}
                          />
                          應附文件
                        </div>
                      </div>
                                        } key="5"
                  />
                  <Tabs.TabPane
                    tab={
                      <div onClick={() => setActiveKey('6')}>
                        <div className="tabText">
                          <img
                            style={{
                              width: '1.2rem',
                              height: '1.2rem',
                              position: 'absolute',
                              top: '0',
                              left: '40%'
                            }}
                            src={require('assets/img/icons/check.svg').default}
                          />
                          簽名
                        </div>
                      </div>
                                        } key="6"
                  />
                </Tabs>
              </div>
              <div className="col-2 d-flex align-items-center">
                <div className="row flex-column w-100">
                  <div className="col d-flex justify-content-end align-items-center">
                    <button
                      className="btn btn-elife-outline-green align-items-center fw-medium p-0 my-1 InsuranceEndButton"
                      onClick={() => modalService.trigger(ModalNamesEnum.DataStorageModal, true)}
                    >
                      資料存儲
                    </button>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <button
                      className="btn btn-elife-outline-green align-items-center fw-medium p-0 my-1 InsuranceEndButton"
                      onClick={() => modalService.trigger(ModalNamesEnum.SubmissionModal, true)}
                    >
                      案件提交
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0 m-0 ">
            <div className="row w-100 p-0 m-0">
              <div className="col d-flex justify-content-center align-items-center p-3">
                {activeKey === '1' ? <ProductChoose /> : null}
                {activeKey === '2' ? <Relation /> : null}
                {activeKey === '3' ? <InsuredContent /> : null}
                {activeKey === '4' ? <PaymentMethod /> : null}
                {activeKey === '5' ? <DocumentsList /> : null}
                {activeKey === '6' ? <Sign /> : null}
              </div>
            </div>
          </div>
        </main>
        {/* 案件提交 */}
        <CustomModal2
          visible={submissionModalVisibleState}
          title="要保書及相關文件等詢問事項應注意如下"
          headerContainerClassName="modal-custom-color-green"
          confirmBtnText="確認提交"
          cancelBtnText="取消"
          confirmBtnClass={submissionModalButtonEnabled ? '' : 'disabled'}
          onOk={() => {
            modalService.trigger(ModalNamesEnum.SubmissionModal, false);
            modalService.trigger(ModalNamesEnum.SubmissionHintModal, true);
          }}
          onCancel={() => modalService.trigger(ModalNamesEnum.SubmissionModal, false)}
        >
          <Article
            ref={submissionModalRef}
            onScrollToBottom={
                () => setSubmissionModalButtonEnabled(true)
            }
            footer={
                    (
                      <div className="row justify-content-center align-items-center py-2">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                          <Checkbox
                            className="d-flex align-items-center labelName"
                            classNames={{ labelClass: 'ms-2', inputClass: '' }}
                            disabled={!submissionModalButtonEnabled}
                          >
                            本人已閱覽相關文件
                          </Checkbox>
                        </div>
                      </div>
                    )
                }
          >
            <div className="row flex-column align-items-center p-3 fs-4 w-100">
              {
                        submissionHintList.map((hint, index) => (
                          <div className="col p-2" key={`hint-${index}`}>{`${index + 1}. ${hint}`}</div>
                        ))
                    }
            </div>
          </Article>
        </CustomModal2>

      </div>
    </>
  );
};

export default EmptyPage;
