import React, { useState } from 'react';
import RequiredDocuments from './DocumentInner/RequiredDocuments';
import SupplementaryDocuments from './DocumentInner/SupplementaryDocuments';
import CustomTab from '../components/CustomTab';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';

const DocumentsList: React.FC<any> = (props) => {
  const [activeKey, setActiveKey] = useState('1');
  const requiredDocumentsList = useSelector((state: RootState) => state.common.requiredDocumentsList);
  return (
  // <Card id="DocumentsList" style={{minHeight: '450px', width: '95%'}}>
  //   <Tabs type="card" onChange={(e) => setActiveKey(e)}>
  //     <Tabs.TabPane
  //         tab={
  //           <>
  //             <div onClick={() => setActiveKey('1')}>
  //               必要文件
  //               <span className="requiredDocumentsCount">
  //             {requiredDocumentsList.length}
  //           </span>
  //             </div>
  //           </>
  //         } key="1"
  //     />
  //     <Tabs.TabPane
  //         tab={
  //           <div onClick={() => setActiveKey('2')}>
  //             <img
  //                 className="help-icon"
  //                 src={require('assets/img/icons/help.svg').default}
  //             />
  //             補充文件上傳
  //           </div>
  //         } key="2"
  //     />
  //   </Tabs>
  //   <div className="content">
  //     {
  //       activeKey === '1' ? <RequiredDocuments requiredDocumentsList={requiredDocumentsList}/> : null
  //     }
  //     {
  //       activeKey === '2' ? <SupplementaryDocuments/> : null
  //
  //     }
  //   </div>
  // </Card>

    <div id="DocumentsList" className="container-fluid p-5 ">
      <CustomTab
        tabs={[
          {
            tabElement: (
              <>
                <div
                  onClick={() => setActiveKey('1')}
                  className="w-100"
                >
                  必要文件
                  <span className="requiredDocumentsCount">
                    {requiredDocumentsList.length}
                  </span>
                </div>
              </>
            ),
            key: '1'
          },
          {
            tabElement: (
              <div
                onClick={() => setActiveKey('2')}
                className="w-100"
              >
                <img
                  className="help-icon"
                  src={require('assets/img/icons/help.svg').default}
                />
                補充文件上傳
              </div>
            ),
            key: '2'
          }
        ]}
        tabContents={
          [
            { activeKey: '1', body: (<RequiredDocuments />) },
            { activeKey: '2', body: (<SupplementaryDocuments />) }
          ]
        }
        activeKey={activeKey}
        onChange={(e) => setActiveKey(e)}
      />
    </div>
  );
};
export default DocumentsList;
