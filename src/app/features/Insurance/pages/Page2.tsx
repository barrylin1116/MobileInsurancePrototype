// import React, { useState } from 'react';
// import { Select, Button, Table } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { useHistory } from 'react-router-dom';
//
// const { Option } = Select;
// const manual = require('assets/pdf/DM.pdf');

import React, { useEffect, useState } from 'react';
import { Button, Select, Table } from 'antd';
import { useHistory } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const Page2: React.FC = () => {
  // const history = useHistory(); // 使用 useHistory 來獲取 history 對象
  //
  // const handleFinish = () => {
  //   history.goBack(); // 返回上一頁
  // };
  //
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [dataSource, setDataSource] = useState([
  //   {
  //     key: '1',
  //     category: '商品DM',
  //     name: '新享樂活DM',
  //     action: '查看'
  //   },
  //   {
  //     key: '2',
  //     category: '活動快報',
  //     name: '金福氣活動',
  //     action: '查看'
  //   }
  // ]);
  //
  // const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  // const [selectedName, setSelectedName] = useState<string | undefined>(undefined);
  //
  // const columns = [
  //   {
  //     title: '文件類型',
  //     dataIndex: 'category',
  //     key: 'category'
  //   },
  //   {
  //     title: '文件名稱',
  //     dataIndex: 'name',
  //     key: 'name'
  //   },
  //   {
  //     title: '文件操作',
  //     key: 'action',
  //     render: (text: string, record: any) => (
  //       <Button
  //         icon={<SearchOutlined />}
  //         onClick={() => {
  //           // 確保 manual 是一個正確的文件路徑
  //           const fileURL = manual.default || manual;
  //           window.open(fileURL, '_blank', 'noopener,noreferrer');
  //         }}
  //       >
  //         {record.action}
  //       </Button>
  //
  //     )
  //   }
  // ];
  //
  // return (
  //   <div className="page-container">
  //     <div className="header-bar">
  //       <h1>銷售文件管理</h1>
  //       <div className="header-buttons">
  //         <button onClick={handleFinish}>完成</button>
  //       </div>
  //     </div>
  //     <div className="filter-container">
  //       <div className="filter-item">
  //         <label>文件類型</label>
  //         <Select
  //           placeholder="選擇文件類型"
  //           className="select-dropdown"
  //           value={selectedCategory}
  //           onChange={(value) => setSelectedCategory(value)}
  //         >
  //           <Option value="商品DM">商品DM</Option>
  //           <Option value="活動快報">活動快報</Option>
  //         </Select>
  //       </div>
  //       <div className="filter-item">
  //         <label>文件名稱</label>
  //         <Select
  //           placeholder="選擇文件名稱"
  //           className="select-dropdown"
  //           value={selectedName}
  //           onChange={(value) => setSelectedName(value)}
  //         >
  //           <Option value="新想樂活DM">新想樂活DM</Option>
  //           <Option value="金福氣活動">金福氣活動</Option>
  //         </Select>
  //       </div>
  //     </div>
  //
  //     <div className="button-container">
  //       <Button className="button-primary" type="primary">查詢</Button>
  //       <Button className="button-reset">清除</Button>
  //     </div>
  //     <div className="table-container">
  //       <Table
  //         dataSource={dataSource}
  //         columns={columns}
  //         style={{ marginTop: '20px' }}
  //       />
  //     </div>
  //   </div>
  // );

  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedName, setSelectedName] = useState<any>(null);
  const history = useHistory(); // 使用 useHistory 來獲取 history 對象
  const [dataSource, setDataSource] = useState<any>([]);
  const manual = require('assets/pdf/DM.pdf');

  useEffect(() => {
    setDataSource([
      ...dataSource,
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
  }, []);

  const handleFinish = () => {
    history.goBack(); // 返回上一頁
  };

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
          className="btn btn-custom btn-elife-green align-items-center d-flex"
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

  const CustomHeader = (props: any) => (
    <th {...props} className="text-white fs-5" style={{ backgroundColor: 'var(--elife-green-1)' }}>
      {props.children}
    </th>
  );

  const components = {
    header: {
      cell: CustomHeader
    }
  };

  return (
    <>
      <div id="Page2" className="container p-0 m-0 mw-100 w-100">
        <div className="row m-0 header">
          <div
            className="col position-relative d-flex justify-content-center align-items-center text-white p-2"
          >
            <h1 className="fs-2">銷售文件管理</h1>
            <div className="position-absolute end-0 me-3">
              <button className="btn btn-custom btn-elife-outline-green" onClick={handleFinish}>完成</button>
            </div>
          </div>
        </div>
        <div className="row m-0 flex-column p-3 content">
          <div className="col form">
            <div className="p-2 row">
              <div className="col col-md-6 d-flex flex-column">
                <label className="fs-5">文件類型</label>
                <Select
                  style={{ height: '50px' }}
                  placeholder="選擇文件類型"
                  className="select-dropdown"
                  value={selectedCategory}
                  onChange={(value) => setSelectedCategory(value)}
                >
                  <Select.Option value="商品DM">商品DM</Select.Option>
                  <Select.Option value="活動快報">活動快報</Select.Option>
                </Select>
              </div>
              <div className="col col-md-6 d-flex flex-column">
                <label className="fs-5">文件名稱</label>
                <Select
                  style={{ height: '50px' }}
                  placeholder="選擇文件名稱"
                  className="select-dropdown"
                  value={selectedName}
                  onChange={(value) => setSelectedName(value)}
                >
                  <Select.Option value="新想樂活DM">新想樂活DM</Select.Option>
                  <Select.Option value="金福氣活動">金福氣活動</Select.Option>
                </Select>
              </div>
            </div>
            <div className="p-2 row justify-content-center align-items-center">
              <div className="col col-md-auto">
                <button className="btn btn-custom btn-elife-green">查詢</button>
              </div>
              <div className="col col-md-auto">
                <button className="btn btn-custom btn-elife-outline-green">清除</button>
              </div>
            </div>
          </div>
          <div className="col result">
            <div className="p-2 row">
              <Table
                components={components}
                dataSource={dataSource}
                columns={columns}
                style={{ marginTop: '20px' }}
                rowClassName="bg-white text-black fs-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
