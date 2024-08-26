import React, { useState } from 'react';
import { Card, Tabs } from 'antd';
import Documents from './Inner/Documents';

const Sign: React.FC<any> = (props) => {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <>
      <Card id="Sign" style={{ minHeight: '450px', width: '95%', paddingBottom: '50px' }}>
        <Tabs type="card" onChange={(e) => setActiveKey(e)}>
          <Tabs.TabPane
            tab={
              <>
                <div onClick={() => setActiveKey('1')}>
                  全部
                  <span className="requiredDocumentsCount">
                    6
                  </span>
                </div>
              </>
                    } key="1"
          />
          <Tabs.TabPane
            tab={
              <div onClick={() => setActiveKey('2')}>
                要保人
                <span className="requiredDocumentsCount">
                  2
                </span>
              </div>
            } key="2"
          />
          <Tabs.TabPane
            tab={
              <div onClick={() => setActiveKey('3')}>
                被保人
                <span className="requiredDocumentsCount">
                  3
                </span>
              </div>
                } key="3"
          />
          <Tabs.TabPane
            tab={
              <div onClick={() => setActiveKey('4')}>
                眷屬
              </div>
                } key="4"
          />
          <Tabs.TabPane
            tab={
              <div onClick={() => setActiveKey('5')}>
                法定代理人/監護人
              </div>
                } key="5"
          />
          <Tabs.TabPane
            tab={
              <div onClick={() => setActiveKey('6')}>
                業務員
                <span className="requiredDocumentsCount">
                  1
                </span>
              </div>
                } key="6"
          />
        </Tabs>
        <div className="content">
          <Documents activeKey={activeKey} />
        </div>
      </Card>
    </>
  );
};

export default Sign;
