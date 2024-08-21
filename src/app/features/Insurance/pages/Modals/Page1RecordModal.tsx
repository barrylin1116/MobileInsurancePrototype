import React from 'react';
import Modal from 'app/common/components/Modals/Modal';

const Page1RecordModal: React.FC<any> = (props) => {
  return (
    <>
      <Modal
        title="查看您的登入紀錄" visible={props.modalVisible} onClose={() => {
          props.setModalVisible(false);
        }}
        id="recordModal"
      >
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
      </Modal>
    </>
  );
};

export default Page1RecordModal;
