import React, { useEffect, useState } from 'react';
import { Table, TableColumnsType } from 'antd';
import CustomModal from '../../../Insurance/pages/Modals/CustomModal';

const PreviewHistory: React.FC<any> = () => {
  const columns: TableColumnsType = [
    { title: '送件時間', dataIndex: 'SubmissionTime' },
    { title: '主約/保額', dataIndex: 'MainPolicy_CoverageAmount' },
    { title: '狀態', dataIndex: 'Status' },
    {
      title: '送件訊息',
      dataIndex: 'SubmissionMessage',
      render: (text, record, i) => (
        text.map((r: any, index: any) => (
          // eslint-disable-next-line react/jsx-key
          <>
            <div key={index} className={'row align-items-center mx-0 ' + `${index !== text.length - 1 ? 'border-bottom' : ''}`}>
              {
              record.Status === '成功'
                ? (
                  <>
                    <div
                      key={`icon-${index}`}
                      style={{ marginInline: '0.5rem', width: '2rem' }}
                      className="p-0 col-1"
                    />
                    <div
                      key={`title-${index}`} className="item col"
                    >
                      {r.title}
                    </div>
                  </>
                  )
                : (
                  <>
                    <img
                      key={`icon-${index}`}
                      className="p-0 col-1 exclamation-icon"
                      src={require('assets/img/icons/exclamation.svg').default}
                    />
                    <div
                      onClick={() => openErrMsgModal(r)}
                      className="col ps-2 border-0 text-start btn-outline-primary"
                    >
                      {
                      r.title
                    }
                    </div>
                  </>

                  )
              }

            </div>
          </>
        ))
      )
    }
  ]
  ;

  const [datasource, setDatasource] = useState<any[]>([]); // Store the selected files

  const [errMsgModalVisible, setErrMsgModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState<any>(null);

  useEffect(() => {
    setDatasource([
      {
        SubmissionTime: '107/09/05 17:48',
        MainPolicy_CoverageAmount: 'OA/100000',
        Status: '成功',
        SubmissionMessage: [
          { title: '案件建立(案件狀態: 受理中)', msg: '' }
        ]
      },
      {
        SubmissionTime: '107/09/05 17:48',
        MainPolicy_CoverageAmount: 'OA/100000',
        Status: '失敗',
        SubmissionMessage: [
          { title: '要保文件預檢未通過', msg: '資料錯誤' },
          { title: '線核預檢未通過', msg: '條件不符' }
        ]
      }
    ]);
  }, []);

  const openErrMsgModal = (data: any) => {
    setErrMsgModalVisible(true);
    setModalProps(data);
  };

  return (
    <>
      <Table id="PreviewHistory" pagination={false} columns={columns} dataSource={datasource} />
      {
          errMsgModalVisible && (
            <>
              <CustomModal
                isModalMsg
                headerTitle={modalProps.title}
                isOpen={errMsgModalVisible}
                buttonPosition="right"
                headerButton={<div onClick={() => setErrMsgModalVisible(false)}>關閉</div>}
              >
                <div className="row">
                  <div className="col">
                    {modalProps.msg}
                  </div>
                </div>
              </CustomModal>
            </>
          )
      }
    </>
  );
};
export default PreviewHistory;
