import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import ProductChoose from '../Content/ProductChoose';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';
import Relation from '../Content/Relation';

const Page1: React.FC<any> = (props) => {
  const [updateTime, setUpdateTime] = useState('');
  useEffect(() => {
    setUpdateTime('109/8/1 12:00:21');
  }, []);
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div id="emptyPage">
      <header>
        <div style={{ width: '100%', height: '75px', position: 'absolute', background: '#348d8f' }} />
        <nav className="navbar fixed-top navbar-expand" style={{ height: '63px' }}>
          <div className="d-flex col-2">
            <button
              type="button" className="btn-close" data-bs-dismiss="modal"
              aria-label="close" value="回首頁"
              onClick={() => routerHistory.push(ROUTES.PAGE_1)}
            />
            <span onClick={() => routerHistory.push(ROUTES.PAGE_1)} className="btn-close-text">回首頁</span>
          </div>
          <div className="collapse navbar-collapse justify-center col-8">
            <div className="d-flex">
              <h2 className="section-title" style={{ fontSize: '1rem', color: ' white' }}>
                M123456789(OA12345678)
              </h2>
            </div>
          </div>
          <div className="d-flex col-2">
            <span className="updateTime">
              {updateTime ? (<>最近更新時間<br />{updateTime}</>) : <></>}
            </span>
          </div>
        </nav>
      </header>
      <main style={{ marginTop: '63px' }}>
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
                  onClick={() => setActiveKey('0')}
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
                          應付文件
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
                  >
                    資料存儲
                  </button>
                </div>
                <div className="row mt-1" style={{ justifyContent: 'right' }}>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-lg-0 cus-outline-transparent InsuranceEndButton"
                    value="案件提交"
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
        </div>
      </main>
    </div>
  );
};

export default Page1;
