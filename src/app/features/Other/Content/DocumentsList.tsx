import { Card, Tabs } from 'antd';
import React, { useState } from 'react';
import RequiredDocuments from './DocumentInner/RequiredDocuments';
import { RequiredDocumentsList } from './DocumentInner/types';
import SupplementaryDocuments from './DocumentInner/SupplementaryDocuments';

const DocumentsList: React.FC<any> = (props) => {
  const [activeKey, setActiveKey] = useState('1');
  const requiredDocumentsList: RequiredDocumentsList[] = [
    { title: '健康告知書（被保人）', key: 'HealthDeclarationForm' },
    { title: '投保權益確認書', key: 'InsuranceRightsConfirmation' },
    { title: '審閱期間確認聲明書', key: 'ReviewPeriodConfirmation' },
    { title: '財務狀況告知書', key: 'FinancialDisclosure' },
    { title: '個人資料蒐集、處理、利用告知事項', key: 'DataUsageNotice' },
    { title: '要保書填寫說明', key: 'ApplicationInstructions' },
    { title: '人壽保險投保人須知', key: 'PolicyholderInfo' },
    { title: '電子保單申請書', key: 'E-PolicyApplication' },
    { title: '疾病問券', key: 'HealthQuestionnaire' },
    { title: 'FATCA暨CRS告知事項', key: 'FatcaCrsNotice' },
    { title: 'CRS自我證明表', key: 'CRSForm' },
    { title: '業告書', key: 'AgentDisclosure' }
  ];
  return (
    <Card id="DocumentsList" style={{ minHeight: '450px', width: '95%' }}>
      <Tabs type="card" onChange={(e) => setActiveKey(e)}>
        <Tabs.TabPane
          tab={
            <>
              <div onClick={() => setActiveKey('1')}>
                必要文件
                <span className="requiredDocumentsCount">
                  {requiredDocumentsList.length}
                </span>
              </div>
            </>
                    } key="1"
        />
        <Tabs.TabPane
          tab={
            <div onClick={() => setActiveKey('2')}>
              <img
                className="help-icon"
                src={require('assets/img/icons/help.svg').default}
              />
              補充文件上傳
            </div>
                    } key="2"
        />
      </Tabs>
      <div className="content">
        {
                    activeKey === '1' ? <RequiredDocuments requiredDocumentsList={requiredDocumentsList} /> : null
                }
        {
                    activeKey === '2' ? <SupplementaryDocuments /> : null

                }
      </div>
    </Card>
  );
};
export default DocumentsList;
