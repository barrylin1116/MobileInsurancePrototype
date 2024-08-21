import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
import Input from 'app/common/components/Elements/Input';
import { routerHistory } from '../../../../../core/router/service';

const Auth: React.FC = () => {
  return (
    <form className="needs-validation">
      <div className="form">
        <div className="title-explanation">為確保您的帳戶安全，請先輸入密碼。</div>
        <div className="form-row w-100">
          <div className="wrapper">
            {/* 密碼 */}
            <div className="passphrase-field col-12 col-lg-5">
              {/* 新密碼 */}
              <div className="name">密碼</div>
              <div className="pwd-input-wrapper eye-close">
                <Input type="password" placeholder="請輸入密碼" />
                <div className="eye-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary next-step" onClick={() => routerHistory.push(ROUTES.PAGE_SETTINGS_PASS_PHRASE_SETUP)}>
        下一步
      </button>
      <Link to={ROUTES.PAGE_LOGIN} className="last-step">回首頁</Link>
    </form>
  );
};

export default Auth;
