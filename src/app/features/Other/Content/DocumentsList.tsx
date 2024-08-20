import { Card, Tabs } from 'antd';
import React, { useState } from 'react';
import RecommendedDocuments from './DocumentInner/RecommendedDocuments';
import RequiredDocuments from './DocumentInner/RequiredDocuments';
import { RequiredDocumentsList } from './DocumentInner/types';

const DocumentsList: React.FC<any> = (props) => {
  const [activeKey, setActiveKey] = useState('1');
  const requiredDocumentsList: RequiredDocumentsList[] = [
    { title: '健康告知書（被保人）', key: 'HealthDeclarationForm' },
    { title: '生調表', key: 'MedicalQuestionnaire' },
    { title: '審閱期確認聲明書', key: 'ReviewPeriodConfirmationStatement' },
    { title: '應遵循事項檢核表', key: 'ChecklistOfComplianceRequirements' },
    { title: '電子投保確認', key: 'ElectronicInsuranceApplicationConfirmation' }
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
              建議文件
            </div>
                    } key="2"
        />
      </Tabs>
      <div className="content">
        {
                    activeKey === '1' ? <RequiredDocuments requiredDocumentsList={requiredDocumentsList} /> : null
                }
        {
                    activeKey === '2' ? <RecommendedDocuments /> : null

                }
      </div>
    </Card>
  );
};
export default DocumentsList;
