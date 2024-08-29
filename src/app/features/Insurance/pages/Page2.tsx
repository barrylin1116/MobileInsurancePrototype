import React, { useState } from 'react';
import { Select, Button, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Option } = Select;
const manual = require('assets/pdf/DM.pdf');
const Page2: React.FC = () => {
  const history = useHistory(); // 使用 useHistory 來獲取 history 對象

  const handleFinish = () => {
    history.goBack(); // 返回上一頁
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      category: '商品DM',
      name: '新享樂活DM',
      action: '查看'
    },
    {
      key: '2',
      category: '活動快報',
      name: '金福氣活動',
      action: '查看'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedName, setSelectedName] = useState<string | undefined>(undefined);

  const columns = [
    {
      title: '文件類型',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: '文件名稱',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '文件操作',
      key: 'action',
      render: (text: string, record: any) => (
        <Button
          icon={<SearchOutlined />}
          onClick={() => {
            // 確保 manual 是一個正確的文件路徑
            const fileURL = manual.default || manual;
            window.open(fileURL, '_blank', 'noopener,noreferrer');
          }}
        >
          {record.action}
        </Button>

      )
    }
  ];

  return (
    <div className="page-container">
      <div className="header-bar">
        <h1>銷售文件管理</h1>
        <div className="header-buttons">
          <button onClick={handleFinish}>完成</button>
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-item">
          <label>文件類型</label>
          <Select
            placeholder="選擇文件類型"
            className="select-dropdown"
            value={selectedCategory}
            onChange={(value) => setSelectedCategory(value)}
          >
            <Option value="商品DM">商品DM</Option>
            <Option value="活動快報">活動快報</Option>
          </Select>
        </div>
        <div className="filter-item">
          <label>文件名稱</label>
          <Select
            placeholder="選擇文件名稱"
            className="select-dropdown"
            value={selectedName}
            onChange={(value) => setSelectedName(value)}
          >
            <Option value="新想樂活DM">新想樂活DM</Option>
            <Option value="金福氣活動">金福氣活動</Option>
          </Select>
        </div>
      </div>

      <div className="button-container">
        <Button className="button-primary" type="primary">查詢</Button>
        <Button className="button-reset">清除</Button>
      </div>

      {/* 新增的總比數及顯示訊息 */}
      <div className="row custom-box">
        <div className="file-info">
          <span>查詢結果:總筆數：{dataSource.length}筆</span>
        </div>
      </div>
      <div className="table-container">
        <Table
          dataSource={dataSource}
          columns={columns}
          style={{ marginTop: '20px' }}
        />
      </div>
    </div>
  );
};

export default Page2;
