import React from 'react';
import Modal from 'app/common/components/Modals/ContentModal';
import { Card, Table, TableColumnsType } from 'antd';

const Page1ImportModal: React.FC<any> = (props) => {
  const columns: TableColumnsType = [
    {
      title: '被保險人姓名',
      dataIndex: 'insureName'
    },
    {
      title: '出生日期',
      dataIndex: 'birthday'
    },
    {
      title: '住家電話',
      dataIndex: 'addressTel'
    },
    {
      title: '行動電話',
      dataIndex: 'telephone'
    },
    {
      title: '住所地址',
      dataIndex: 'address'
    }
  ];

  const data = [
    {
      key: '1',
      insureName: '李一新',
      birthday: '170.1.2',
      addressTel: '02-82006162',
      telephone: '0910111888',
      address: 'XXXXXXXX'
    }
  ];
  return (
    <Modal
      title="匯入既有保戶資料" visible={props.modalVisible} onClose={() => {
        props.setModalVisible(false);
      }}
      id="importModal"
    >
      <Card>
        <div className="row">
          <div>
            <label className="text">被保人身份證字號</label>
            <input className="form-control" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6" style={{ textAlign: 'right' }}>
            <button
              className="btn btn-primary external-link-button text" value="查詢"
              aria-label="查詢"
              onClick={() => {}}
            >
              查詢
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn btn-outline-primary text" value="清除"
              aria-label="清除"
              onClick={() => {}}
            >
              清除
            </button>
          </div>
        </div>
      </Card>
      <Card className="mt-1 text">
        查詢結果：總筆數1筆
      </Card>
      <Card className="mt-1">
        <Table pagination={false} rowSelection={{ type: 'checkbox' }} columns={columns} dataSource={data} />
      </Card>
      <Card className="mt-1">
        <div className="row mt-3">
          <div className="col-6" style={{ textAlign: 'right' }}>
            <button
              className="btn btn-primary external-link-button text" value="匯入"
              aria-label="匯入"
            >
              匯入
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn btn-outline-primary text" value="取消"
              aria-label="取消"
              onClick={() => props.setModalVisible(false)}
            >
              取消
            </button>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default Page1ImportModal;
