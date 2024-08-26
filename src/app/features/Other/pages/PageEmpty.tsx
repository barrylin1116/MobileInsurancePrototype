import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import ProductChoose from '../Content/ProductChoose';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';
import Relation from '../Content/Relation';
import DocumentsList from '../Content/DocumentsList';
import InsuredContent from '../Content/InsuredContent';
import PaymentMethod from '../Content/PaymentMethod';
import CustomModal from '../../Insurance/pages/Modals/CustomModal';
import CustomTab from '../components/CustomTab';
import Preview from '../Content/DocumentInner/Preview';
import PreviewHistory from '../Content/DocumentInner/PreviewHistory';
import Sign from '../Content/Sign/Sign';

const Page1: React.FC<any> = (props) => {
  const [updateTime, setUpdateTime] = useState('');
  useEffect(() => {
    setUpdateTime('109/8/1 12:00:21');
  }, []);
  const [activeKey, setActiveKey] = useState('1');
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  const [submissionModalVisible, setSubmissionModalVisible] = useState(false);
  const [submissionHintModalVisible, setSubmissionHintModalVisible] = useState(false);
  const [dataStorageModalVisible, setDataStorageModalVisible] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [loadResult, setLoadResult] = useState(false);
  const [previewTabActiveKey, setpreviewTabActiveKey] = useState< string | number>('1');

  const openPreviewModal = () => {
    setPreviewModalVisible(true);
  };

  const openSubmissionModal = () => {
    setSubmissionHintModalVisible(true);
  };

  const openDataStorageModal = () => {
    setDataStorageModalVisible(true);
  };

  const submissionHintList = [
    '各項要保文件已由要/被保人親簽並審閱，且各項資料內容本人均已確認正確無誤',
    '已確認要/被保人親自簽名及未滿7歲由法代簽署且適用於行動投保之不識字或不識字會簽名者，皆不適用行動投保',
    '如有招攬不實者，業務員需返還佣金、業績津貼，並連帶賠償臺銀人壽所有損害及停權'
  ];

  const previewBody = () => {
    return (
      <Preview />
    );
  };

  const previewHistoryBody = () => {
    return (
      <PreviewHistory />
    );
  };

  useEffect(() => {
    const state: any = routerHistory.location.state;
    if (state?.activeTab) {
      setActiveKey(state.activeTab);
    }
  }, [routerHistory.location.pathname]);
  return (
    <>
      <div id="emptyPage">
        <header>
          <div style={{ width: '100%', height: '75px', position: 'absolute', background: '#348d8f' }} />
          <nav className="navbar fixed-top navbar-expand" style={{ height: '40px', paddingBottom: '5px' }}>
            <div className="d-flex col-3 h-100">
              <div className="h-100 d-flex flex-column-reverse">
                <button
                  type="button" className="btn-close p-0" data-bs-dismiss="modal"
                  aria-label="close" value="回首頁"
                  onClick={() => routerHistory.push(ROUTES.PAGE_1)}
                />
              </div>
              <div className="h-100 d-flex flex-column-reverse" style={{ lineHeight: '1.2' }}>
                <span onClick={() => routerHistory.push(ROUTES.PAGE_1)} className="btn-close-text">回首頁</span>
              </div>
            </div>
            <div className="collapse navbar-collapse justify-center col-6 h-100">
              <div className="d-flex d-flex flex-column-reverse h-100">
                <h2 className="section-title" style={{ fontSize: '1rem', color: ' white', marginBottom: '0' }}>
                  M123456789(OA12345678)
                </h2>
              </div>
            </div>
            <div className="d-flex col-3 h-100 justify-end pr-1">
              <span className="updateTime d-flex flex-column-reverse">
                {updateTime ? (<>最近更新時間：{updateTime}</>) : <></>}
              </span>
            </div>
          </nav>
        </header>
        <main style={{ marginTop: '40px' }}>
          <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="row page1Pane">
              <div className="row">
                <div
                  className="col-lg-1 d-flex flex-row"
                  style={{ zIndex: 1, margin: 'auto 0px', width: '15%', paddingLeft: '15px' }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                    onClick={() => openPreviewModal()}
                  >
                    <div className="row">
                      <div className="col-lg-12">檢視</div>
                    </div>
                  </button>
                </div>
                <div className="p-1 col-lg-8 d-flex flex-column-reverse" style={{ width: '70%' }}>
                  <Tabs activeKey={activeKey} centered className="InsuranceActiveTab">
                    <Tabs.TabPane
                      tab={
                        <div onClick={() => setActiveKey('1')}>
                          <div className="tabText">
                            <img
                              style={{ width: '1.2rem', height: '1.2rem', position: 'absolute', top: '0', left: '40%' }}
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
                              style={{ width: '1.2rem', height: '1.2rem', position: 'absolute', top: '0', left: '40%' }}
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
                              style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
                              src={require('assets/img/icons/warn.svg').default}
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
                              style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
                              src={require('assets/img/icons/warn.svg').default}
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
                              style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
                              src={require('assets/img/icons/warn.svg').default}
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
                              style={{ width: '1.2rem', height: '1.2rem', transform: 'rotate(180deg)', position: 'absolute', top: '0', left: '40%' }}
                              src={require('assets/img/icons/warn.svg').default}
                            />
                            簽名
                          </div>
                        </div>
                      } key="6"
                    />
                  </Tabs>
                </div>
                <div className="p-1 col-lg-2 d-flex flex-column" style={{ zIndex: 1, width: '15%' }}>
                  <div className="row" style={{ justifyContent: 'right' }}>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-lg-0 cus-outline-transparent InsuranceEndButton"
                      value="資料存儲"
                      onClick={() => openDataStorageModal()}
                    >
                      資料存儲
                    </button>
                  </div>
                  <div className="row mt-1" style={{ justifyContent: 'right' }}>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-lg-0 cus-outline-transparent InsuranceEndButton"
                      value="案件提交"
                      onClick={() => openSubmissionModal()}
                    >
                      案件提交
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-3 pt-3 m-1 justify-center">
            {activeKey === '1' ? <ProductChoose /> : null}
            {activeKey === '2' ? <Relation /> : null}
            {activeKey === '3' ? <InsuredContent /> : null}
            {activeKey === '4' ? <PaymentMethod /> : null}
            {activeKey === '5' ? <DocumentsList /> : null}
            {activeKey === '6' ? <Sign /> : null}
          </div>
          {
        previewModalVisible && (
          <CustomModal
            headerTitle="檢視"
            isOpen={previewModalVisible}
            buttonPosition="right"
            headerButton={
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                >
                  <div className="row">
                    <div className="col-lg-12" onClick={() => setPreviewModalVisible(false)}>完成</div>
                  </div>
                </button>
              </>
                       }
          >
            <CustomTab
              contentClass="p-0"
              tabs={[
                {
                  tabElement: (<div className="w-100" onClick={() => setpreviewTabActiveKey('1')}>要保文件預檢</div>),
                  key: '1'
                },
                {
                  tabElement: (<div className="w-100" onClick={() => setpreviewTabActiveKey('2')}>歷史檢視</div>),
                  key: '2'
                }
              ]}
              tabContents={
              [
                { activeKey: '1', body: previewBody() },
                { activeKey: '2', body: previewHistoryBody() }
              ]
              }
              activeKey={previewTabActiveKey}
              onChange={(e) => setpreviewTabActiveKey(e)}
            />
          </CustomModal>
        )
      }

          <CustomModal
            headerTitle="案件提交"
            headerButton={
              <>
                <div
                  className="btn btn-outline-primary" onClick={() => {
                    setIsUpload(true);
                    setLoadResult(true);
                  }}
                >成功 Demo
                </div>
                <div
                  className="btn btn-outline-primary" onClick={() => {
                    setIsUpload(true);
                    setLoadResult(false);
                  }}
                >失敗 Demo
                </div>
              </>
          }
            isOpen={submissionModalVisible}
            bodyClassName="d-flex justify-content-center align-items-center"
          >
            <>
              {!isUpload && (
                <div className="d-flex w-100 justify-content-center  align-items-center">
                  <img
                    className="col-2 exclamation-icon"
                    src={require('assets/img/icons/upload_file.svg').default}
                  />
                  <div className="labelName fs-3">
                    您的要保書正在提交中!<br />
                    資料已完備請稍候....
                  </div>
                </div>
              )}
              {isUpload && loadResult && (
                <>
                  <div className="container border m-5 fs-3">
                    <div
                      className="row header-title" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        padding: '20px',
                        background: '#348d8f',
                        color: 'white'
                      }}
                    >案件已建立
                    </div>
                    <div className="row m-5">
                      <div className="row p-2">
                        <div className="col">行動投保編號</div>
                        <div className="col">OA11111111</div>
                      </div>
                      <div className="row p-2">
                        <div className="col">保單號碼</div>
                        <div className="col">OB11111111</div>
                      </div>
                      <div className="row p-2">
                        <div className="col">按鍵狀態</div>
                        <div className="col">簽署平台簽署中</div>
                      </div>
                    </div>
                    <div
                      className="row m-5 btn btn-outline-primary" onClick={() => {
                        setSubmissionModalVisible(false);
                        setIsUpload(false);
                      }}
                    >確認
                    </div>
                  </div>
                </>
              )}
              {isUpload && !loadResult && (
                <>
                  <div className="container border m-5 fs-3">
                    <div
                      className="row header-title" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        padding: '20px',
                        background: '#348d8f',
                        color: 'white'
                      }}
                    >線核預檢失敗
                    </div>
                    <div className="row m-5">請至歷程檢視並點閱錯誤訊息，經錯誤修正後重新提交</div>
                    <div
                      className="row m-5 btn btn-outline-primary" onClick={() => {
                        setSubmissionModalVisible(false);
                        setIsUpload(false);
                      }}
                    >確認
                    </div>
                  </div>
                </>
              )}
            </>

          </CustomModal>
          <CustomModal
            isModalMsg
            headerTitle="要保書及相關文件等詢問事項應注意如下"
            isOpen={submissionHintModalVisible}
            buttonPosition="right"
            footerContent={
              <div className="row w-100">
                <div onClick={() => setSubmissionHintModalVisible(false)} role="button" className="col text-center btn-outline-primary">
                  取消
                </div>
                <div
                  onClick={() => {
                    setSubmissionHintModalVisible(false);
                    setSubmissionModalVisible(true);
                  }} role="button" className="col text-center btn-outline-primary"
                >
                  確認提交
                </div>
              </div>
            }
          >
            <div className="container fs-4">
              {
                submissionHintList.map((hint, index) => (
                  <div className="p-2" key={`hint-${index}`}>{`${index + 1}. ${hint}`}</div>
                ))
              }
            </div>
          </CustomModal>

          <CustomModal
            isModalMsg
            headerTitle="資料已儲存"
            isOpen={dataStorageModalVisible}
            buttonPosition="right"
            footerContent={
              <div className="row w-100 fs-4">
                <div
                  onClick={() => {
                    setDataStorageModalVisible(false);
                  }} role="button" className="col text-center btn-outline-primary"
                >
                  確認
                </div>
              </div>
              }
          >
            <div className="container text-center fs-4">
              <div className="row py-2 border-bottom">
                <div className="col">
                  行動投保編號
                </div>
                <div className="col">
                  OA11111111
                </div>
              </div>
              <div className="row py-2 border-bottom">
                <div className="col">
                  保單號碼
                </div>
                <div className="col">
                  OB11111111
                </div>
              </div>
              <div className="row py-2">
                <div className="col">
                  按鍵狀態
                </div>
                <div className="col">
                  簽署平台簽署中
                </div>
              </div>
            </div>
          </CustomModal>
        </main>
      </div>
    </>
  );
};

export default Page1;
