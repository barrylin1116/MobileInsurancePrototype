import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div style={{ width: '100%', height: '137px', position: 'absolute', background: '#348d8f' }} />
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
              <div className="item" title="重置密碼" role="button">重置密碼</div>
              <div className="item" title="登入記錄" role="登入記錄">登入記錄</div>
              <div className="item" title="系統登出" role="button">系統登出</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
