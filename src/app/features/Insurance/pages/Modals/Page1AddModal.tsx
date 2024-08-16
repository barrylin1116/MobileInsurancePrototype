import React, { useState } from 'react';
import Modal from 'app/common/components/Modals/ContentModal';
import { Card } from 'antd';
import Page1ImportModal from './Page1ImportModal';
import { ROUTES } from '../../../../core/router/paths';
import { routerHistory } from '../../../../core/router/service';

const Page1AddModal: React.FC<any> = (props) => {
  const [importModalVisible, setImportModalVisible] = useState(false);
  return (
    <>
      <Page1ImportModal modalVisible={importModalVisible} setModalVisible={setImportModalVisible} />
      <Modal
        title="新增要保書" visible={props.modalVisible} onClose={() => {
          props.setModalVisible(false);
        }}
        id="contentModal"
      >
        <div className="row">
          <div className="col-6">
            <Card
              onClick={() => {
                routerHistory.push({ pathname: ROUTES.PAGE_EMPTY, state: { noLayout: true } });
              }}
              className="center"
            >
              <div className="row">
                <img style={{ width: '100%', height: '100%' }} src={require('assets/img/pic/file-plus.svg').default} alt="edge" />
              </div>
              <div className="row cardTitle">
                空白要保書
              </div>
            </Card>
          </div>
          <div className="col-6">
            <Card onClick={() => {
              props.setModalVisible(false);
              setImportModalVisible(true);
            }}
            >
              <div className="row">
                <img src={require('assets/img/pic/file-edit.svg').default} alt="edge" />
              </div>
              <div className="row cardTitle">
                匯入既有保戶資料
              </div>
            </Card>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Page1AddModal;
