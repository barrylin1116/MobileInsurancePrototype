import React, { useState } from 'react';
// import InsureDoc from './InsureDoc';
// import ListGroup from "../../../../../common/components/ListGroup";

import ListGroup from '../../../../../common/components/ListGroup';
import InsureDoc from './InsureDoc';

const Documents: React.FC<any> = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div id="" className="container mw-100 mx-0 px-0">
        {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 &&
            (
              <ListGroup showTitle={false} className="elife-hover-green">
                <div className="row flex-row align-items-center">
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <img
                      className="exclamation-icon"
                      src={require('assets/img/icons/exclamation.svg').default}
                    />
                  </div>
                  <div className="col labelName d-flex align-items-center p-0 m-0">
                    要保書
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-custom btn-elife-green" onClick={() => setVisible(true)}>請簽名</button>
                  </div>
                </div>
              </ListGroup>
            )}
        {['1', '3'].indexOf(props.activeKey) !== -1 &&
            (
              <ListGroup showTitle={false} className="elife-hover-green">
                <div className="row flex-row align-items-center">
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <img
                      className="exclamation-icon"
                      src={require('assets/img/icons/exclamation.svg').default}
                    />
                  </div>
                  <div className="col labelName d-flex align-items-center p-0 m-0">
                    健康告知書（被保人）
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-custom btn-elife-green">請簽名</button>
                  </div>
                </div>
              </ListGroup>
            )}
        {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 &&
            (
              <ListGroup showTitle={false} className="elife-hover-green">
                <div className="row flex-row align-items-center">
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <div
                      style={{ marginInline: '0.5rem', width: '2rem' }}
                      className="p-0 col-1"
                    />
                  </div>
                  <div className="col labelName d-flex align-items-center p-0 m-0">
                    投保權益確認書
                  </div>
                </div>
              </ListGroup>
            )}
        {['1', '2', '5', '6'].indexOf(props.activeKey) !== -1 &&
            (
              <ListGroup showTitle={false} className="elife-hover-green">
                <div className="row flex-row align-items-center">
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <div
                      style={{ marginInline: '0.5rem', width: '2rem' }}
                      className="p-0 col-1"
                    />
                  </div>
                  <div className="col labelName d-flex align-items-center p-0 m-0">
                    審閱期間確認聲明書
                  </div>
                </div>
              </ListGroup>
            )}
        {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 &&
            (
              <ListGroup showTitle={false} className="elife-hover-green">
                <div className="row flex-row align-items-center">
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <div
                      style={{ marginInline: '0.5rem', width: '2rem' }}
                      className="p-0 col-1"
                    />
                  </div>
                  <div className="col labelName d-flex align-items-center p-0 m-0">
                    財務狀況告知書
                  </div>
                </div>
              </ListGroup>
            )}
        {['1', '2', '6'].indexOf(props.activeKey) !== -1 &&
            (
              <ListGroup showTitle={false} className="elife-hover-green">
                <div className="row flex-row align-items-center">
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <div
                      style={{ marginInline: '0.5rem', width: '2rem' }}
                      className="p-0 col-1"
                    />
                  </div>
                  <div className="col labelName d-flex align-items-center p-0 m-0">
                    電子保單申請書
                  </div>
                </div>
              </ListGroup>
            )}
        {['1', '6'].indexOf(props.activeKey) !== -1 &&
            (
              <ListGroup showTitle={false} className="elife-hover-green">
                <div className="row flex-row align-items-center">
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <img
                      className="exclamation-icon"
                      src={require('assets/img/icons/exclamation.svg').default}
                    />
                  </div>
                  <div className="col labelName d-flex align-items-center p-0 m-0">
                    業告書
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-custom btn-elife-green">請簽名</button>
                  </div>
                </div>
              </ListGroup>
            )}
      </div>
      {visible && <InsureDoc visible={visible} setVisible={setVisible} />}
      {/* {visible && <InsureDoc visible={visible} setVisible={setVisible} />} */}
      {/* <div id="requiredDocumentsList" className="container mw-100 mx-0 px-0"> */}
      {/*  <> */}
      {/*    {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 && */}
      {/*      <div className="row align-items-center border-bottom mx-0 mt-0"> */}
      {/*        <img */}
      {/*          className="p-0 col-1 exclamation-icon" */}
      {/*          src={require('assets/img/icons/exclamation.svg').default} */}
      {/*        /> */}
      {/*        <div className="item col"> */}
      {/*          要保書 */}
      {/*        </div> */}
      {/*        <div className="item col" style={{ textAlign: 'right' }}> */}
      {/*          <button className="btn btn-custom btn-elife-green" onClick={() => setVisible(true)}>請簽名</button> */}
      {/*        </div> */}
      {/*      </div>} */}
      {/*    {['1', '3'].indexOf(props.activeKey) !== -1 && */}
      {/*      <div className="row align-items-center border-bottom mx-0 mt-0"> */}
      {/*        <img */}
      {/*          className="p-0 col-1 exclamation-icon" */}
      {/*          src={require('assets/img/icons/exclamation.svg').default} */}
      {/*        /> */}
      {/*        <div className="item col"> */}
      {/*          健康告知書（被保人） */}
      {/*        </div> */}
      {/*        <div className="item col" style={{ textAlign: 'right' }}> */}
      {/*          <button className="btn btn-custom btn-elife-green">請簽名</button> */}
      {/*        </div> */}
      {/*      </div>} */}
      {/*    {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 && */}
      {/*      <div className="row align-items-center border-bottom mx-0 mt-0"> */}
      {/*        <div */}
      {/*          style={{ marginInline: '0.5rem', width: '2rem' }} */}
      {/*          className="p-0 col-1" */}
      {/*        /> */}
      {/*        <div className="item col"> */}
      {/*          投保權益確認書 */}
      {/*        </div> */}
      {/*      </div>} */}
      {/*    {['1', '2', '5', '6'].indexOf(props.activeKey) !== -1 && */}
      {/*      <div className="row align-items-center border-bottom mx-0 mt-0"> */}
      {/*        <div */}
      {/*          style={{ marginInline: '0.5rem', width: '2rem' }} */}
      {/*          className="p-0 col-1" */}
      {/*        /> */}
      {/*        <div className="item col"> */}
      {/*          審閱期間確認聲明書 */}
      {/*        </div> */}
      {/*      </div>} */}
      {/*    {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 && */}
      {/*      <div className="row align-items-center border-bottom mx-0 mt-0"> */}
      {/*        <div */}
      {/*          style={{ marginInline: '0.5rem', width: '2rem' }} */}
      {/*          className="p-0 col-1" */}
      {/*        /> */}
      {/*        <div className="item col"> */}
      {/*          財務狀況告知書 */}
      {/*        </div> */}
      {/*      </div>} */}
      {/*    {['1', '2', '6'].indexOf(props.activeKey) !== -1 && */}
      {/*      <div className="row align-items-center border-bottom mx-0 mt-0"> */}
      {/*        <div */}
      {/*          style={{ marginInline: '0.5rem', width: '2rem' }} */}
      {/*          className="p-0 col-1" */}
      {/*        /> */}
      {/*        <div className="item col"> */}
      {/*          電子保單申請書 */}
      {/*        </div> */}
      {/*      </div>} */}
      {/*    {['1', '6'].indexOf(props.activeKey) !== -1 && */}
      {/*      <div className="row align-items-center border-bottom mx-0 mt-0"> */}
      {/*        <img */}
      {/*          className="p-0 col-1 exclamation-icon" */}
      {/*          src={require('assets/img/icons/exclamation.svg').default} */}
      {/*        /> */}
      {/*        <div className="item col"> */}
      {/*          業告書 */}
      {/*        </div> */}
      {/*        <div className="item col" style={{ textAlign: 'right' }}> */}
      {/*          <button className="btn btn-custom btn-elife-green">請簽名</button> */}
      {/*        </div> */}
      {/*      </div>} */}
      {/*  </> */}
      {/* </div> */}
    </>
  );
};
export default Documents;
