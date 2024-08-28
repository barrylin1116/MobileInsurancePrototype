import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Tabs } from 'antd';
import { PlusOutlined, ProductOutlined, SearchOutlined } from '@ant-design/icons';
import Page1SearchModal from './Modals/Page1SearchModal';
import Page1AddModal from './Modals/Page1AddModal';
import _ from 'lodash';
import { ROUTES } from '../../../core/router/paths';

const Page1: React.FC = () => {
  const functionRef = useRef<any>(null);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [functionModalVisible, setFunctionModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const manual = require('assets/pdf/MobileOperationManual.pdf');
  const ex = require('assets/pdf/EX.pdf');
  const [searchTag, setSearchTag] = useState([
    {
      key: 1,
      name: 'Tangx',
      rocId: 'A123456789',
      type: '1'
    },
    {
      key: 2,
      name: 'Jenny',
      rocId: 'A987654321',
      type: '2'
    }
  ]);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (functionRef.current && !functionRef.current.contains(event.target)) {
        setFunctionModalVisible(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Page1SearchModal modalVisible={searchModalVisible} setModalVisible={setSearchModalVisible} />
      <Page1AddModal modalVisible={addModalVisible} setModalVisible={setAddModalVisible} />
      <div id="page1" style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="row page1Pane">
          <div className="mobileHidden p-1 col-lg-2 d-flex flex-row-reverse" style={{ zIndex: 1 }}>
            <button
              type="button"
              className="btn btn-outline-primary me-3 me-lg-0 cus-outline-transparent InsuranceButton"
              onClick={() => {
                setAddModalVisible(true);
              }}
            >
              <div className="row">
                <div className="col-lg-12"><PlusOutlined /></div>
                <div className="col-lg-12">新增要保書</div>
              </div>
            </button>
          </div>
          <div className="p-3 col-lg-8 d-flex flex-column-reverse">
            <Tabs type="card" centered className="InsuranceActiveTab">
              <Tabs.TabPane tab={<div><div className="tabText">未提交 <span className="noticeText">3</span></div></div>} key="1" />
              <Tabs.TabPane tab={<div><div className="tabText">未簽署 <span className="noticeText">1</span></div></div>} key="2" />
              <Tabs.TabPane tab={<div><div className="tabText">已受理 <span className="noticeText">0</span></div></div>} key="3" />
              <Tabs.TabPane tab={<div><div className="tabText">已結案 <span className="noticeText">1</span></div></div>} key="4" />
              <Tabs.TabPane tab={<div><div className="tabText">已取消 <span className="noticeText">2</span></div></div>} key="5" />
            </Tabs>
          </div>
          <div className="mobileHidden p-3 col-lg-2 d-flex flex-column-reverse">
            <div className="row">
              <div className="col">
                <Button
                  onClick={() => {
                    setSearchModalVisible(true);
                  }} className="btn btn-outline-primary me-3 me-lg-0 cus-outline-transparent"
                  style={{ border: 'none', width: '50px', height: '50px', marginLeft: '5px', background: '#348d8f' }}
                  icon={<SearchOutlined style={{ fontSize: '1.5rem', color: 'white' }} />}
                />
                <Button
                  ref={functionRef}
                  className="btn btn-outline-primary me-3 me-lg-0 cus-outline-transparent"
                  style={{ border: 'none', width: '50px', height: '50px', marginLeft: '5px', background: '#348d8f' }}
                  icon={<ProductOutlined style={{ fontSize: '1.5rem', color: 'white' }} />}
                  onClick={() => {
                    setFunctionModalVisible(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8" />
          <div className="col-4 p-0">
            <div className="greeting nav-item-wrapper" style={{ zIndex: 1 }}>
              <div className="sub-items functionItem" style={{ display: (functionModalVisible) ? 'flex' : '' }}>

                <div className="item" title="操作手冊" role="button">
                  <a href={manual} target="_blank" rel="noopener noreferrer">
                    操作手冊
                  </a>
                </div>
                <div className="item" title="銷售文件管理" role="button">
                  <a href={ROUTES.PAGE2} rel="noopener noreferrer">
                    銷售文件管理
                  </a>
                </div>
                <div className="item" title="經代支援系統" role="button">
                  <a href={ex} target="_blank" rel="noopener noreferrer">
                    經代支援系統
                  </a>
                </div>
                <div className="item" title="保單查詢" role="button">
                  <a href="#">保單查詢</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-12 p-0 pb-1">
            {
              searchTag.map(s => {
                return (
                  <span className="searchTag labelName" key={s.key}>
                    <i
                      aria-label="图标: close" className="searchTagClose" onClick={() => {
                        const _clone = _.clone(searchTag);
                        const result = _clone.filter(c => c.key !== s.key);
                        setSearchTag(result);
                      }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        className=""
                        data-icon="close"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                      </svg>
                    </i>
                    {s.type === '1' ? '被保人' : '要保人'}： {s.name} / {s.rocId}
                  </span>
                );
              })
            }
          </div>
        </div>
        <div className="row pb-2 pt-1">
          <Card className="itemCard">
            <div className="row">
              <div className="col-lg-4">
                <span className="cardTitle">行動投保序號</span><span className="cardValue">M123456789</span>
              </div>
              <div className="col-lg-4">
                <span className="cardTitle">保單號碼</span><span className="cardValue">0A12345678</span>
              </div>
              <div className="col-lg-4">
                <span className="cardTitle">建立時間</span><span className="cardValue">117-11-16 12:01:02</span>
              </div>
            </div>
            <div className="row rowItem" style={{ marginTop: '5px', paddingBottom: '6px' }}>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">商品名稱</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="name">金福氧小額終生險</span></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">要保人</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="insureName"> 陳天佑</span><span className="insureId">A123456789</span></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">被保人</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="insureName">陳小左</span><span className="insureId">F123456789</span></div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="itemCard">
            <div className="row">
              <div className="col-lg-4">
                <span className="cardTitle">行動投保序號</span><span className="cardValue">M123456789</span>
              </div>
              <div className="col-lg-4">
                <span className="cardTitle">保單號碼</span><span className="cardValue">0A12345678</span>
              </div>
              <div className="col-lg-4">
                <span className="cardTitle">建立時間</span><span className="cardValue">117-11-16 12:01:02</span>
              </div>
            </div>
            <div className="row rowItem" style={{ marginTop: '5px', paddingBottom: '6px' }}>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">商品名稱</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="name">金福氧小額終生險</span></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">要保人</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="insureName"> 陳天佑</span><span className="insureId">A123456789</span></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">被保人</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="insureName">陳小左</span><span className="insureId">F123456789</span></div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="itemCard">
            <div className="row">
              <div className="col-lg-4" style={{ paddingTop: '0px' }}>
                <span className="cardTitle">行動投保序號</span><span className="cardValue">M123456789</span>
              </div>
              <div className="col-lg-4" style={{ paddingTop: '0px' }}>
                <span className="cardTitle">保單號碼</span><span className="cardValue">0A12345678</span>
              </div>
              <div className="col-lg-4">
                <span className="cardTitle">建立時間</span><span className="cardValue">117-11-16 12:01:02</span>
              </div>
            </div>
            <div className="row rowItem" style={{ marginTop: '5px', paddingBottom: '6px' }}>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">商品名稱</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="name">金福氧小額終生險</span></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">要保人</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="insureName"> 陳天佑</span><span className="insureId">A123456789</span></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <span className="pd-0 title">被保人</span>
                </div>
                <div className="row">
                  <div className="pd-0"><span className="insureName">陳小左</span><span className="insureId">F123456789</span></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page1;
