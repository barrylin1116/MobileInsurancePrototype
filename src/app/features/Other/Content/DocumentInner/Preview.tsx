import React, { useEffect, useState } from 'react';
import { Table, TableColumnsType } from 'antd';

const Preview: React.FC<any> = () => {
  const [datasource, setDatasource] = useState<any[]>([]); // Store the selected files
  const columns: TableColumnsType = [
    {
      title: '文件類型',
      dataIndex: 'documentType'
    },
    {
      title: '注意事項',
      dataIndex: 'note',
      render: (text, record, index) => {
        return (
          text.map((r: any, index: any) => (
            <div key={index}>{r}</div>
          )));
      }
    }
  ];

  useEffect(() => {
    setDatasource([
      {
        documentType: '關係人',
        note: [
          '被保險人身分證字號未填寫',
          '要保人姓名未填寫'
        ]
      },
      {
        documentType: '投保內容',
        note: [
          '繳費年期未填寫',
          '主約商品保險金額未填寫'
        ]
      },
      {
        documentType: '健康告知書',
        note: [
          '身高(公分)未填寫'
        ]
      },
      {
        documentType: '審閱期間確認聲明書',
        note: [
          '審閱日期未填寫'
        ]
      }
    ]);
  }, []);

  return (
    <Table id="Preview" pagination={false} columns={columns} dataSource={datasource} />
  );
};

export default Preview;
