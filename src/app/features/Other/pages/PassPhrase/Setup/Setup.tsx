import React from 'react';
import Input from 'app/common/components/Elements/Input';
import { routerHistory } from 'app/core/router/service';
import { ROUTES } from 'app/core/router/paths';

const Setup: React.FC = () => {
  return (
    <form className="needs-validation">
      <div className="form">
        <div className="title-explanation">
          驗證成功，請重新設定密碼。
        </div>
        <div className="form-content w-100">
          <div className="row form-row">
            <div className="passphrase-field col-12 col-lg-5">
              {/* 新密碼 */}
              <div className="name">新密碼</div>
              <div className="pwd-input-wrapper eye-close">
                <Input type="password" />
                <div className="eye-icon" />
              </div>
              <div className="notes mt-2 grey-notes">
                <div className="icon" />
                <span>應至少 8 位數。</span>
              </div>
              <div className="notes mt-2 grey-notes">
                <div className="icon" />
                <span>採英數字混合使用，且宜包含大小寫英文字母或符號。</span>
              </div>
              <div className="notes mt-2 grey-notes">
                <div className="icon" />
                <span>不應訂為相同的英數字、連續英文字或連號數字。</span>
              </div>
              <div className="notes mt-2 grey-notes">
                <div className="icon" />
                <span>密碼與帳號不應相同。</span>
              </div>
              <div className="notes mt-2 grey-notes">
                <div className="icon" />
                <span>新密碼不可與前一次密碼相同。</span>
              </div>
            </div>
            {/* 確認新密碼 */}
            <div className="passphrase-field col-12 col-lg-5">
              {/* 新密碼 */}
              <div className="name">確認新密碼</div>
              <div className="pwd-input-wrapper eye-close">
                <Input type="password" />
                <div className="eye-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary next-step" onClick={() => routerHistory.push(ROUTES.PAGE_LOGIN)}>確認</button>
    </form>
  );
};

export default Setup;
