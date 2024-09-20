import React, { useState } from 'react';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';
import Page1RecordModal2 from '../../../features/Insurance/pages/Modals/Page1RecordModal2';
import { useTimeMillSecond } from '../../../core/hooks/TimeContext';

const Header: React.FC = () => {
  const { timeMillSecond, resetTimeMillSecond } = useTimeMillSecond();
  const [recordModalVisible, setRecordModalVisible] = useState(false);

  return (
    <header id="MainLayoutHeader" className="MainLayoutHeader sticky-top">
      <Page1RecordModal2 modalVisible={recordModalVisible} setModalVisible={setRecordModalVisible} />
      {/* <div style={{ width: '100%', height: '137px', position: 'absolute', background: '#348d8f' }} /> */}
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid py-1">
          <div className="d-flex col-3" />
          <div className="d-flex justify-content-center align-items-center col-6">
            <div className="d-flex">
              <h2 className="section-title" style={{ fontSize: '1.2rem', color: ' white' }}>
                <img
                  style={{ width: '27px', marginRight: '3px' }}
                  src={require('assets/img/icons/ois-logo.svg').default}
                  alt="logo-台銀人壽"
                />
                臺銀人壽行動投保
              </h2>
            </div>
          </div>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbarSupportedContent" className="d-lg-flex col-3 collapse navbar-collapse">
            <div className="row flex-column flex-md-row text-white">
              <div className="col-auto p-0 m-0 d-flex align-items-center nav-item-wrapper" style={{ height: '63px' }}>
                <div className="col-auto d-flex flex-row align-items-center p-2 refreshInfo" onClick={() => resetTimeMillSecond(300)}>
                  <div className="refresh mx-2" />
                  <div className="d-flex flex-row login-text">
                    {timeMillSecond}秒
                  </div>
                </div>
              </div>
              <div className="col-auto p-0 m-0 d-flex align-items-center nav-item-wrapper position-relative" style={{ height: '63px' }}>
                <div className="col-auto d-flex flex-row align-items-center p-2 userInfo">
                  <div className="user mx-2" />
                  <div className="d-flex flex-row login-text">
                    王大明
                  </div>
                  <div className="sub-items position-absolute flex-column">
                    <div
                      className="item text-nowrap p-2 rounded-3" title="重置密碼" role="button"
                      onClick={() => routerHistory.push(ROUTES.PAGE_SETTINGS_PASS_PHRASE_AUTH)}
                    >重置密碼
                    </div>
                    <div
                      className="item text-nowrap p-2 rounded-3" title="登入記錄" role="登入記錄"
                      onClick={() => setRecordModalVisible(true)}
                    >登入記錄
                    </div>
                    <div
                      className="item text-nowrap p-2 rounded-3" title="系統登出" role="button"
                      onClick={() => routerHistory.push(ROUTES.PAGE_LOGIN)}
                    >系統登出
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
