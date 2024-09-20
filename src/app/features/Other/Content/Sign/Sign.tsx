import React, { useState } from 'react';
import { Card } from 'antd';
import Documents from './Inner/Documents';
import CustomTab from '../../components/CustomTab';

const Sign: React.FC<any> = (props) => {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <>
      <Card id="Sign" style={{ minHeight: '450px', width: '95%', paddingBottom: '50px' }}>
        <CustomTab
          tabs={[
            {
              tabElement: (
                <>
                  <div className="row" onClick={() => setActiveKey('1')}>
                    <div className="col-auto">
                      全部
                      <span className="requiredDocumentsCount">
                        6
                      </span>
                    </div>
                  </div>
                </>
              ),
              key: '1'
            },
            {
              tabElement: (
                <>
                  <div className="row" onClick={() => setActiveKey('2')}>
                    <div className="col-auto">
                      要保人
                      <span className="requiredDocumentsCount">
                        2
                      </span>
                    </div>
                  </div>
                </>
              ),
              key: '2'
            },
            {
              tabElement: (
                <>
                  <div className="row" onClick={() => setActiveKey('3')}>
                    <div className="col-auto">
                      被保人
                      <span className="requiredDocumentsCount">
                        3
                      </span>
                    </div>
                  </div>
                </>
              ),
              key: '3'
            },
            {
              tabElement: (
                <>
                  <div className="row" onClick={() => setActiveKey('4')}>
                    <div className="col-auto">
                      眷屬
                    </div>
                  </div>
                </>
              ),
              key: '4'
            },
            {
              tabElement: (
                <>
                  <div onClick={() => setActiveKey('5')} />
                  <div className="row" onClick={() => setActiveKey('5')}>
                    <div className="col-auto">
                      法定代理人/監護人
                    </div>
                  </div>
                </>
              ),
              key: '5'
            },
            {
              tabElement: (
                <>
                  <div className="row" onClick={() => setActiveKey('6')}>
                    <div className="col-auto">
                      業務員
                      <span className="requiredDocumentsCount">
                        1
                      </span>
                    </div>
                  </div>
                </>
              ),
              key: '6'
            }
          ]}
          activeKey={activeKey} onChange={(e) => setActiveKey(e)}
        />
        <div className="content">
          <Documents activeKey={activeKey} />
        </div>
      </Card>
    </>
  );
};

export default Sign;
