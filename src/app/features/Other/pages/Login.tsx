import React from 'react';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';

const Login: React.FC<any> = (props) => {
  return (
    <div id="login">
      <div className="row hid1" id="top1" />
      <header className="headerBorder">
        <div className="loginContainer">
          <div className="row">
            <div className="col-sm-4 col-xs-5 col-md-3 float-left" id="my-logo">
              <a href="#" target="_blank" rel="noreferrer">
                <img alt="臺銀人壽" className="logo1 hid1" src={require('assets/img/icons/my-logo.png')} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img alt="臺銀人壽" className="logo2 hid2" src={require('assets/img/icons/my-logo-s.png')} />
              </a>
            </div>
            <div className="n1 inlineBlock float-left">行動投保</div>
            <div className="clearfix visible-xs-block" />
          </div>
        </div>
      </header>
      <div className="container-fluid c1 fullContent">
        <div className="bg1">
          <div className="index-bg" />
          <div className="">
            <div className="col-sm-5 col-lg-5 hid1 pRelative" id="slogan">
              <h2 className="bg-hero1">
                隨時服務您的客戶
              </h2>
              <h2 className="bg-hero2">
                掌握您的案件進度
              </h2>
            </div>
            <div
              className="col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-3 col-md-4 col-lg-4 col-lg-offset-3 main1 box-shadow float-left"
              id="login_section"
            >
              <form id="loginForm" method="POST" action="#">
                <h2>使用者登入</h2>
                <p style={{ alignItems: 'center', textAlign: 'center' }}>
                  <img className="login1" src={require('assets/img/pic/icon_friends-green.png')} />
                </p>
                <div className="form-group">
                  <label className="control-label" htmlFor="inputName3">帳號</label>
                  <input
                    autoComplete="off" className="form-control" id="userId" name="userId"
                    placeholder="忘記帳號，請聯絡通路管理人員" type="text"
                  />
                </div>
                <div>
                  <label className="control-label" htmlFor="inputPassword3">密碼</label>
                  <div className="passwordContainer">
                    <input
                      autoComplete="off" className="form-control" id="password" name="password"
                      placeholder="輸入英文字母須區分大小寫" type="password"
                    />
                    <svg
                      className="svg-inline--fa fa-eye fa-w-18" aria-hidden="true" data-prefix="fa"
                      data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="form-group" style={{ margin: '16px 4px 0 0' }}>
                  <label className="control-label" htmlFor="inputPassword3">驗證碼</label>
                  <div className="">
                    <input
                      autoComplete="off" className="form-control float-left w70p" id="validateCode"
                      name="validateCode" placeholder="輸入驗證碼" style={{ width: '50%' }} type="text"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <img alt="點擊圖片重新讀取驗証碼" id="validateImage" style={{ height: '33px', cursor: 'pointer' }} src={require('assets/img/pic/getVerify.png')} />
                  </div>
                </div>
                <div className="logActionBtn" style={{ margin: '12px 4px 0 0' }}>
                  <a className="pull-left log1" href="#" onClick={() => routerHistory.push(ROUTES.PAGE_FORGET_AUTH)}>忘記密碼</a>
                  <a className="pull-right log1" href="#">登入問題</a>
                </div>
                <h5><span id="login-status" /></h5>
                <button className="col-xs-12 btn-login" id="loginBtn" onClick={() => routerHistory.push(ROUTES.PAGE_1)}>登 入</button>
                <br />
                <span style={{ color: 'red', fontSize: '5px' }}>請使用Microsoft Edge或Google Chrome瀏覽器登入。</span>
                <input id="fbId" name="fbId" type="hidden" />
                <input id="email" name="email" type="hidden" />
                <input id="fbAccessToken" name="fbAccessToken" type="hidden" />
                <input id="cardSN" name="cardSN" type="hidden" />
                <input id="certb64" name="certb64" type="hidden" />
                <input id="ret" name="ret" type="hidden" />
                <input id="salt" name="salt" type="hidden" />
                <input id="four" name="four" type="hidden" />
                <input id="euNationality" name="euNationality" type="hidden" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
