import React from 'react';
import CustomModal2 from './CustomModal2';
import { CloseOutlined } from '@ant-design/icons';

const Page1RecordModal2: React.FC<any> = (props) => {
  return (
    <div id="Page1RecordModal2">
      <CustomModal2
        visible={props.modalVisible}
        header={
          <div className="container">
            <div className="row ">
              <div className="col w-100 d-flex justify-content-end align-items-center p-3">
                <CloseOutlined
                  style={{ height: '16px', width: '16px' }}
                  onClick={() => {
                    props.setModalVisible(false);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center modal-title">
                查看您的登入紀錄
              </div>
            </div>
          </div>
                }
        onOk={() => props.setModalVisible(false)}
        onCancel={() => props.setModalVisible(false)}
        showFooter={false}
      >
        <div className="container p-5">
          <table className="w-100 table-pc mb-4">
            <thead>
              <tr>
                <th>登入時間</th>
                <th>登入IP</th>
                <th>登入狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="time">2024-08-21 10:32:26</td>
                <td className="ip">192.168.0.101</td>
                <td className="status success">成功</td>
              </tr>
              <tr>
                <td className="time">2024-08-16 09:21:10</td>
                <td className="ip">192.168.0.101</td>
                <td className="status success">成功</td>
              </tr>
              <tr>
                <td className="time">2024-08-06 14:14:05</td>
                <td className="ip">192.168.0.101</td>
                <td className="status success">成功</td>
              </tr>
            </tbody>
          </table>
          <div className="notes">*僅顯示近 3 次的登入狀態</div>
        </div>
      </CustomModal2>
    </div>
  );
};

export default Page1RecordModal2;
