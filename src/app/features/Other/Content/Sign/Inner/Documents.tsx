import React from 'react';

const Documents: React.FC<any> = (props) => {
  return (
    <div id="requiredDocumentsList" className="container mw-100 mx-0 px-0">
      <>
        {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 &&
          <div className="row align-items-center border-bottom mx-0 mt-0">
            <img
              className="p-0 col-1 exclamation-icon"
              src={require('assets/img/icons/exclamation.svg').default}
            />
            <div className="item col">
              要保書
            </div>
            <div className="item col" style={{ textAlign: 'right' }}>
              <button className="btn btn-primary">請簽名</button>
            </div>
          </div>}
        {['1', '3'].indexOf(props.activeKey) !== -1 &&
          <div className="row align-items-center border-bottom mx-0 mt-0">
            <img
              className="p-0 col-1 exclamation-icon"
              src={require('assets/img/icons/exclamation.svg').default}
            />
            <div className="item col">
              健康告知書（被保人）
            </div>
            <div className="item col" style={{ textAlign: 'right' }}>
              <button className="btn btn-primary">請簽名</button>
            </div>
          </div>}
        {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 &&
          <div className="row align-items-center border-bottom mx-0 mt-0">
            <div className="item col">
              投保權益確認書
            </div>
          </div>}
        {['1', '2', '5', '6'].indexOf(props.activeKey) !== -1 &&
          <div className="row align-items-center border-bottom mx-0 mt-0">
            <div className="item col">
              審閱期間確認聲明書
            </div>
          </div>}
        {['1', '2', '3', '5', '6'].indexOf(props.activeKey) !== -1 &&
          <div className="row align-items-center border-bottom mx-0 mt-0">
            <div className="item col">
              財務狀況告知書
            </div>
          </div>}
        {['1', '2', '6'].indexOf(props.activeKey) !== -1 &&
          <div className="row align-items-center border-bottom mx-0 mt-0">
            <div className="item col">
              電子保單申請書
            </div>
          </div>}
        {['1', '6'].indexOf(props.activeKey) !== -1 &&
          <div className="row align-items-center border-bottom mx-0 mt-0">
            <img
              className="p-0 col-1 exclamation-icon"
              src={require('assets/img/icons/exclamation.svg').default}
            />
            <div className="item col">
              業告書
            </div>
            <div className="item col" style={{ textAlign: 'right' }}>
              <button className="btn btn-primary">請簽名</button>
            </div>
          </div>}
      </>
    </div>
  );
};
export default Documents;
