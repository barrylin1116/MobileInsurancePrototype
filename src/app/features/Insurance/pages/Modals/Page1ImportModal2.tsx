import CustomModal2 from './CustomModal2';
import { LeftOutlined } from '@ant-design/icons';
import React from 'react';
import { updatePage1ImportModalVisibleAction } from '../../../../store/ui/actions';
import { useDispatch } from 'react-redux';
import { Card, Table, TableColumnsType } from 'antd';

const Page1ImportModal2: React.FC<any> = (props) => {
  const reduxDispatch = useDispatch();
  const updatePage1ImportModalVisible = (visible: boolean) => {
    reduxDispatch(updatePage1ImportModalVisibleAction(visible));
  };

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
    <div id="Page1ImportModal2">
      <CustomModal2
        visible={props.modalVisible}
        header={
          <div className="container">
            <div className="row ">
              <div className="col w-100 d-flex justify-content-center align-items-center position-relative modal-title">
                匯入既有保戶資料
                <div
                  className="position-absolute start-0 d-flex align-items-center p-3 btn-close-text" onClick={() => {
                    updatePage1ImportModalVisible(false);
                  }}
                >
                  <LeftOutlined />
                  取消
                </div>
              </div>
            </div>
          </div>
                }
        headerContainerClassName="modal-custom-color-green"
        showFooter={false}
        fullscreen
      >
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column">
              <Card>
                <div className="row">
                  <div className="col col-md-6 d-flex flex-column">
                    <label className="p-2 fs-5 fw-medium">被保人身份證字號</label>
                    <input className="p-2 form-control" />
                  </div>
                </div>
                <div className="row m-0 p-2 justify-content-center align-items-center">
                  <button
                    className="col-sm-auto m-2 btn btn-custom btn-elife-green"
                  >
                    查詢
                  </button>
                  <button
                    className="col-sm-auto m-2 btn btn-custom btn-elife-outline-green"
                  >
                    清除
                  </button>
                </div>
              </Card>
              <Card className="mt-1 fw-semibold fs-5">
                查詢結果：總筆數1筆
              </Card>
              <Card className="mt-1">
                <Table
                  components={components}
                  rowClassName="bg-white text-black fs-5"
                  pagination={false} rowSelection={{ type: 'checkbox' }} columns={columns} dataSource={data}
                />
              </Card>
              <Card className="mt-1">
                <div className="row mt-3">
                  <div className="col-6" style={{ textAlign: 'right' }}>
                    <button
                      className="btn btn-custom btn-elife-green external-link-button text" value="匯入"
                      aria-label="匯入"
                    >
                      匯入
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-custom btn-elife-outline-green text" value="取消"
                      aria-label="取消"
                      onClick={() => props.setModalVisible(false)}
                    >
                      取消
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </CustomModal2>
    </div>
  );
};

export default Page1ImportModal2;
