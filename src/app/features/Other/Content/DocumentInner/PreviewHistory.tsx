import React, { useEffect, useState } from 'react';
import { Table, TableColumnsType } from 'antd';

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
                  <div
                    key={`icon-${index}`}
                    style={{ marginInline: '0.5rem', width: '2rem' }}
                    className="p-0 col-1"
                  />
                  )
                : (
                  <img
                    key={`icon-${index}`}
                    className="p-0 col-1 exclamation-icon"
                    src={require('assets/img/icons/exclamation.svg').default}
                  />

                  )
            }
              <div
                key={`title-${index}`} className="item col"
              >
                {r}
              </div>
            </div>
          </>
        ))
      )
    }
  ]
  ;

  const [datasource, setDatasource] = useState<any[]>([]); // Store the selected files

  useEffect(() => {
    setDatasource([
      {
        SubmissionTime: '107/09/05 17:48',
        MainPolicy_CoverageAmount: 'OA/100000',
        Status: '成功',
        SubmissionMessage: [
          '案件建立(案件狀態: 受理中)'
        ]
      },
      {
        SubmissionTime: '107/09/05 17:48',
        MainPolicy_CoverageAmount: 'OA/100000',
        Status: '失敗',
        SubmissionMessage: [
          '要保文件預檢未通過',
          '線核預檢未通過'
        ]
      }
    ]);
  }, []);

  return (
    <Table pagination={false} columns={columns} dataSource={datasource} />
  );
};
export default PreviewHistory;
