import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Tabs } from 'antd';
import { PlusOutlined, ProductOutlined, SearchOutlined } from '@ant-design/icons';
import Page1SearchModal from './Modals/Page1SearchModal';
import Page1AddModal from './Modals/Page1AddModal';

const Page1: React.FC = () => {
  const functionRef = useRef<any>(null);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [functionModalVisible, setFunctionModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

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
      <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
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
                  <a href="#">操作手冊</a>
                </div>
                <div className="item" title="銷售文件管理" role="button">
                  <a href="#">銷售文件管理</a>
                </div>
                <div className="item" title="案件進度查詢" role="button">
                  <a href="#">案件進度查詢</a>
                </div>
                <div className="item" title="保單查詢" role="button">
                  <a href="#">保單查詢</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-3 pt-3">
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
            <div className="row" style={{ background: '#fafafa', marginTop: '5px', paddingBottom: '6px' }}>
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
            <div className="row" style={{ background: '#fafafa', marginTop: '5px', paddingBottom: '6px' }}>
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
            <div className="row" style={{ background: '#fafafa', marginTop: '5px', paddingBottom: '6px' }}>
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
