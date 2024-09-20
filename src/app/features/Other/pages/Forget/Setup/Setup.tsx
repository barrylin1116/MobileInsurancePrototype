import React from 'react';
import { routerHistory } from '../../../../../core/router/service';
import { ROUTES } from '../../../../../core/router/paths';

const SettingPWD: React.FC = () => {
  return (
    <div id="SettingPWD" className="container d-flex flex-column p-2">
      <form className="row d-flex flex-column p-3 m-3 bg-elife-gray-1 border elife-border-color-2 rounded-4">
        <div
          className="col d-flex justify-content-center align-items-center fs-5 mb-2 form-header"
          style={{ color: '#797470' }}
        >驗證成功，請重新設定密碼。
        </div>
        <div className="col form-body">
          <div className="container">
            <div className="row m-2 p-2">
              <div className="col-12 col-lg-6 reset-password-auth-notes">
                <label htmlFor="inputEmail4" className="form-label fs-5">新密碼</label>
                <div className="d-flex position-relative eye-close">
                  <input type="password" className="form-control" id="newPwd" />
                  <div className="eye-icon" />
                </div>
                <div className="d-flex align-items-start mt-2 note">
                  <div className="dash-icon" />
                  <span>應至少 8 位數。</span>
                </div>
                <div className="d-flex align-items-start mt-2 note">
                  <div className="dash-icon" />
                  <span>採英數字混合使用，且宜包含大小寫英文字母或符號。</span>
                </div>
                <div className="d-flex align-items-start mt-2 note">
                  <div className="dash-icon" />
                  <span>不應訂為相同的英數字、連續英文字或連號數字。</span>
                </div>
                <div className="d-flex align-items-start mt-2 note">
                  <div className="dash-icon" />
                  <span>密碼與帳號不應相同。</span>
                </div>
                <div className="d-flex align-items-start mt-2 note">
                  <div className="dash-icon" />
                  <span>新密碼不可與前一次密碼相同。</span>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <label htmlFor="inputEmail4" className="form-label fs-5">確認新密碼</label>
                <div className="d-flex position-relative eye-close">
                  <input type="password" className="form-control" id="newPwd" />
                  <div className="eye-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-3">
          <button
            type="submit" className="btn btn-custom btn-elife-green next-step"
            onClick={() => routerHistory.push(ROUTES.PAGE_LOGIN)}
          >
            送出
          </button>
        </div>
      </form>
    </div>
  // <form className="needs-validation">
  //   <div className="form">
  //     <div className="title-explanation">
  //       驗證成功，請重新設定密碼。
  //     </div>
  //     <div className="form-content w-100">
  //       <div className="row form-row">
  //         <div className="passphrase-field col-12 col-lg-5">
  //           {/* 新密碼 */}
  //           <div className="name">新密碼</div>
  //           <div className="pwd-input-wrapper eye-close">
  //             <Input type="password" />
  //             <div className="eye-icon" />
  //           </div>
  //           <div className="notes mt-2 grey-notes">
  //             <div className="icon" />
  //             <span>應至少 8 位數。</span>
  //           </div>
  //           <div className="notes mt-2 grey-notes">
  //             <div className="icon" />
  //             <span>採英數字混合使用，且宜包含大小寫英文字母或符號。</span>
  //           </div>
  //           <div className="notes mt-2 grey-notes">
  //             <div className="icon" />
  //             <span>不應訂為相同的英數字、連續英文字或連號數字。</span>
  //           </div>
  //           <div className="notes mt-2 grey-notes">
  //             <div className="icon" />
  //             <span>密碼與帳號不應相同。</span>
  //           </div>
  //           <div className="notes mt-2 grey-notes">
  //             <div className="icon" />
  //             <span>新密碼不可與前一次密碼相同。</span>
  //           </div>
  //         </div>
  //         {/* 確認新密碼 */}
  //         <div className="passphrase-field col-12 col-lg-5">
  //           {/* 新密碼 */}
  //           <div className="name">確認新密碼</div>
  //           <div className="pwd-input-wrapper eye-close">
  //             <Input type="password" />
  //             <div className="eye-icon" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <button
  //       type="submit" className="btn btn-primary next-step"
  //       onClick={() => routerHistory.push(ROUTES.PAGE_LOGIN)}
  //     >
  //       送出
  //     </button>
  //   </div>
  // </form>
  );
};

export default SettingPWD;
