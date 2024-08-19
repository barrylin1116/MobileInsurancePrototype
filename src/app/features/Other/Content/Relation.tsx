import React, { useState } from 'react';
import { Tabs } from 'antd';
import Card from 'antd/es/card/Card';
import Insured from './Inner/Insured';
import Applicant from './Inner/Applicant';
import Beneficiary from './Inner/Beneficiary';
import TopButton from '../components/TopButton';

const Relation: React.FC<any> = (props) => {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <Card id="relationalPeople" style={{ minHeight: '450px', width: '95%', paddingBottom: '24px' }}>
      <Tabs type="card" onChange={(e) => setActiveKey(e)}>
        <Tabs.TabPane tab="被保險人" key="1" />
        <Tabs.TabPane tab="要保人" key="2" />
        <Tabs.TabPane tab="受益人" key="3" />
      </Tabs>
      <div className="content">
        {
            activeKey === '1' ? <Applicant /> : null
        }
        {
            activeKey === '2' ? <Insured /> : null

        }
        {
            activeKey === '3' ? <Beneficiary /> : null

        }
      </div>
      <TopButton />
    </Card>
  );
};

export default Relation;
