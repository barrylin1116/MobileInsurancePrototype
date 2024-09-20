import React from 'react';
import CustomModal2 from './CustomModal2';
import { LeftOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { updatePage1ImportModalVisibleAction } from '../../../../store/ui/actions';
import { routerHistory } from '../../../../core/router/service';
import { ROUTES } from '../../../../core/router/paths';

const Page1AddModal2: React.FC<any> = (props) => {
  const reduxDispatch = useDispatch();

  const updatePage1ImportModalVisible = (visible: boolean) => {
    reduxDispatch(updatePage1ImportModalVisibleAction(visible));
  };

  return (
    <div id="Page1AddModal2">
      <CustomModal2
        visible={props.modalVisible}
        header={
          <div className="container">
            <div className="row ">
              <div className="col w-100 d-flex justify-content-center align-items-center position-relative modal-title">
                新增要保書
                <div
                  className="position-absolute start-0 d-flex align-items-center p-3 btn-close-text" onClick={() => {
                    props.setModalVisible(false);
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
      >
        <div className="container">
          <div className="row p-5">
            <div className="col">
              <Card
                onClick={() => {
                  routerHistory.push({ pathname: ROUTES.PAGE_EMPTY, state: { noLayout: true } });
                }}
              >
                <div className="row flex-column justify-content-center">
                  <div className="col d-flex justify-content-center">
                    <img
                      style={{ width: '100%', height: '100%' }}
                      src={require('assets/img/pic/file-plus.svg').default} alt="edge"
                    />
                  </div>
                  <div className="col d-flex justify-content-center cardTitle">
                    空白要保書
                  </div>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card
                onClick={() => {
                  props.setModalVisible(false);
                  updatePage1ImportModalVisible(true);
                }}
              >
                <div className="row flex-column justify-content-center">
                  <div className="col d-flex justify-content-center">
                    <img
                      style={{ width: '100%', height: '100%' }}
                      src={require('assets/img/pic/file-edit.svg').default} alt="edge"
                    />
                  </div>
                  <div className="col d-flex justify-content-center cardTitle">
                    匯入既有保戶資料
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

export default Page1AddModal2;
