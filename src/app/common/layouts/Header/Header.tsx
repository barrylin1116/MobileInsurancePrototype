import React, { useState } from 'react';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';
import Page1RecordModal from 'app/features/Insurance/pages/Modals/Page1RecordModal';

const Header: React.FC = () => {
  const [recordModalVisible, setRecordModalVisible] = useState(false);
  return (
    <header>
      <Page1RecordModal modalVisible={recordModalVisible} setModalVisible={setRecordModalVisible} />
      <div style={{ width: '100%', height: '137px', position: 'absolute', background: '#06974F' }} />
      <nav className="navbar fixed-top navbar-expand">
        <div className="d-flex col-2" />
        <div className="collapse navbar-collapse justify-center col-8">
          <div className="d-flex">
            <h2 className="section-title" style={{ fontSize: '1.2rem', color: ' white' }}>
              <img style={{ width: '27px', marginRight: '3px' }} src={require('assets/img/icons/ois-logo.svg').default} alt="logo-台銀人壽" />
              臺銀人壽行動投保
            </h2>
          </div>
        </div>
        <div className="d-flex col-2">
          <div className="greeting nav-item-wrapper">
            <div className="nav-item pe-0">
              <div className="userInfo d-flex flex-row">
                <div className="user mx-2" />
                <div className="login-text">
                  <span>
                    王大明
                  </span>
                </div>
              </div>
            </div>
            <div className="sub-items">
              <div className="item" title="重置密碼" role="button" onClick={() => routerHistory.push(ROUTES.PAGE_SETTINGS_PASS_PHRASE_AUTH)}>重置密碼</div>
              <div className="item" title="登入記錄" role="登入記錄" onClick={() => setRecordModalVisible(true)}>登入記錄</div>
              <div className="item" title="系統登出" role="button" onClick={() => routerHistory.push(ROUTES.PAGE_LOGIN)}>系統登出</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
