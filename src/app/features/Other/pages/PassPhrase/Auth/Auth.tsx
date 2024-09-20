import React from 'react';
// import { Link } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
// import Input from 'app/common/components/Elements/Input';
import { routerHistory } from '../../../../../core/router/service';
import { NavLink } from 'react-router-dom';

const Auth: React.FC = () => {
  return (
    <>
      <div className="container d-flex flex-column p-2">
        <form className="row d-flex flex-column p-3 m-3 bg-elife-gray-1 border elife-border-color-2 rounded-4">
          <div
            className="col d-flex justify-content-center align-items-center fs-5 mb-2 form-header"
            style={{ color: '#797470' }}
          >為確保您的帳戶安全，請先輸入密碼。
          </div>
          <div className="col form-body">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <label htmlFor="inputEmail4" className="form-label fs-5">密碼</label>
                  <div className="d-flex position-relative eye-close">
                    <input type="password" className="form-control" id="pwd" placeholder="請輸入密碼" />
                    <div className="eye-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
          <button
            type="submit" className="btn btn-custom btn-elife-green"
            onClick={() => routerHistory.push(ROUTES.PAGE_SETTINGS_PASS_PHRASE_SETUP)}
          >
            下一步
          </button>
          <NavLink className="mt-2 elife-green-1" to={ROUTES.PAGE_LOGIN}>回首頁</NavLink>
        </div>
      </div>
      {/* <form className="needs-validation"> */}
      {/*  <div className="form"> */}
      {/*    <div className="title-explanation">為確保您的帳戶安全，請先輸入密碼。</div> */}
      {/*    <div className="form-row w-100"> */}
      {/*      <div className="wrapper"> */}
      {/*        /!* 密碼 *!/ */}
      {/*        <div className="passphrase-field col-12 col-lg-5"> */}
      {/*          /!* 新密碼 *!/ */}
      {/*          <div className="name">密碼</div> */}
      {/*          <div className="pwd-input-wrapper eye-close"> */}
      {/*            <Input type="password" placeholder="請輸入密碼" /> */}
      {/*            <div className="eye-icon" /> */}
      {/*          </div> */}
      {/*        </div> */}
      {/*      </div> */}
      {/*    </div> */}
      {/*  </div> */}
      {/*  <button */}
      {/*    type="submit" className="btn btn-custom btn-elife-green next-step" */}
      {/*    onClick={() => routerHistory.push(ROUTES.PAGE_SETTINGS_PASS_PHRASE_SETUP)} */}
      {/*  > */}
      {/*    下一步 */}
      {/*  </button> */}
      {/*  <Link to={ROUTES.PAGE_LOGIN} className="elife-green-1 last-step">回首頁</Link> */}
      {/* </form> */}
    </>
  );
};

export default Auth;
