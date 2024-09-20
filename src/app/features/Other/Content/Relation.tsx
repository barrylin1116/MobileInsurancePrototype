import React, { useState } from 'react';
// import { Tabs } from 'antd';
// import Card from 'antd/es/card/Card';
import CustomTab from '../components/CustomTab';
// import { updatePreviewActiveKeyAction } from '../../../store/ui/actions';
// import Preview from './DocumentInner/Preview';
// import PreviewHistory from './DocumentInner/PreviewHistory';
import Insured from './Inner/Insured';
import Applicant from './Inner/Applicant';
import Beneficiary from './Inner/Beneficiary';
import Agent from './Inner/Agent';
import FamilyMembers from './Inner/FamilyMembers';

const Relation: React.FC<any> = (props) => {
  // const [activeKey, setActiveKey] = useState('1');
  // return (
  //   <Card id="relationalPeople" style={{ minHeight: '450px', width: '95%', paddingBottom: '24px' }}>
  //     <Tabs type="card" onChange={(e) => setActiveKey(e)}>
  //       <Tabs.TabPane tab="被保險人" key="1" />
  //       <Tabs.TabPane tab="要保人" key="2" />
  //       <Tabs.TabPane tab="受益人" key="3" />
  //       <Tabs.TabPane tab="眷屬" key="4" />
  //       <Tabs.TabPane tab="法定代理人" key="5" />
  //     </Tabs>
  //     <div className="content">
  //       {
  //           activeKey === '1' ? <Applicant /> : null
  //       }
  //       {
  //           activeKey === '2' ? <Insured /> : null
  //
  //       }
  //       {
  //           activeKey === '3' ? <Beneficiary /> : null
  //
  //       }
  //       {
  //           activeKey === '4' ? <FamilyMembers /> : null
  //
  //       }
  //       {
  //         activeKey === '5' ? <Agent /> : null
  //
  //       }
  //     </div>
  //   </Card>
  // );
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div className="container-fluid p-5 ">
      <CustomTab
        tabs={[
          {
            tabElement: (
              <div
                className="w-100"
              >
                被保險人
              </div>
            ),
            key: '1'
          },
          {
            tabElement: (
              <div
                className="w-100"
              >
                要保人
              </div>
            ),
            key: '2'
          },
          {
            tabElement: (
              <div
                className="w-100"
              >
                受益人
              </div>
            ),
            key: '3'
          },
          {
            tabElement: (
              <div
                className="w-100"
              >
                眷屬
              </div>
            ),
            key: '4'
          },
          {
            tabElement: (
              <div
                className="w-100"
              >
                法定代理人
              </div>
            ),
            key: '5'
          }

        ]}
        tabContents={
          [
            { activeKey: '1', body: (<Applicant />) },
            { activeKey: '2', body: (<Insured />) },
            { activeKey: '3', body: (<Beneficiary />) },
            { activeKey: '4', body: (<FamilyMembers />) },
            { activeKey: '5', body: (<Agent />) }
          ]
      }
        activeKey={activeKey}
        onChange={(e) => setActiveKey(e)}
      />
    </div>
  );
};

export default Relation;
