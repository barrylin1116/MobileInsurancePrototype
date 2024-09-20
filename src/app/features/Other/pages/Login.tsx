import React, { useEffect, useRef, useState } from 'react';
import { routerHistory } from '../../../core/router/service';
import { ROUTES } from '../../../core/router/paths';
import { Form, FormikProvider, useFormik } from 'formik';
import { updateLoginStatusAction } from '../../../store/common/actions';
import { useDispatch } from 'react-redux';

const Login: React.FC<any> = (props) => {
  const topRef = useRef<any>(null);
  const navRef = useRef<any>(null);
  const [topRefHeight, setTopRefHeight] = useState(0); // 用于存储高度的状态
  const [navRefHeight, setNavRefHeight] = useState(0); // 用于存储高度的状态

  useEffect(() => {
    if (topRef.current) {
      setTopRefHeight(topRef.current.offsetHeight); // 获取元素的高度并更新状态
      setNavRefHeight(navRef.current.offsetHeight); // 获取元素的高度并更新状态
    }
  }, []);

  const reduxDispatch = useDispatch();

  const formik = useFormik<any>({
    initialValues: {},
    onSubmit: () => {
      routerHistory.push(ROUTES.PAGE_1);
      reduxDispatch(updateLoginStatusAction({
        status: true
      }));
    }
  });

  return (
    <div id="login" className="container mw-100 w-100 m-0 p-0 vh-100 d-flex flex-column">
      <div ref={topRef} id="top1" className="row" />
      <div ref={navRef} className="row border-bottom">
        <div className="col">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-auto">
                <div id="my-logo" className="d-flex justify-content-center">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      alt="臺銀人壽" className="logo1 hid1"
                      src={require('assets/img/icons/my-logo.png')}
                    />
                  </a>
                </div>
              </div>
              <div className="col nav-title">行動投保</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="block" className="row flex-grow-1"
        style={{
          height: `calc(100% - ${topRefHeight}px - ${navRefHeight}px )`
        }}
      >
        <div className="col h-100">
          <div className="container h-100">
            <div className="row h-100 justify-content-center px-5">
              <div className="d-none d-xl-flex col-auto h-100 p-0">
                <img
                  className="h-100" alt="臺銀人壽"
                  src={require('assets/img/pic/Home.jpg')}
                />
              </div>
              <div className="col h-100 p-0">
                <FormikProvider value={formik}>
                  <Form className="h-100 loginForm p-3">
                    <div className="container h-100 overflow-y-auto">
                      <div className="row flex-column justify-content-center my-3">
                        <div
                          className="col d-flex justify-content-center align-items-center m-1 title-text"
                        >使用者登入
                        </div>
                        <div
                          className="col d-flex justify-content-center align-items-center m-1"
                        >
                          <img
                            className="title-icon"
                            src={require('assets/img/pic/icon_friends-green.png')}
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <label className="control-label" htmlFor="userId">帳號</label>
                        <input
                          autoComplete="off" className="form-control" id="userId"
                          name="userId"
                          placeholder="忘記帳號，請聯絡通路管理人員" type="text"
                        />
                      </div>
                      <div className="row my-3">
                        <label className="control-label" htmlFor="inputPassword3">密碼</label>
                        <div className="position-relative p-0">
                          <input
                            autoComplete="off" className="form-control" id="password"
                            name="password"
                            placeholder="輸入英文字母須區分大小寫" type="password"
                          />
                          <svg
                            className="position-absolute h-100 end-0 top-0 p-3" aria-hidden="true"
                            data-prefix="fa"
                            data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="row my-3 flex-column">
                        <div className="col">
                          <label
                            className="control-label"
                            htmlFor="inputPassword3"
                          >驗證碼
                          </label>
                        </div>
                        <div className="col d-flex flex-row p-0 align-items-center">
                          <input
                            autoComplete="off" className="form-control col me-2"
                            id="validateCode"
                            name="validateCode" placeholder="輸入驗證碼"
                            type="text"
                          />
                          <img
                            className="form-control col ms-2"
                            alt="點擊圖片重新讀取驗証碼" id="validateImage"
                            style={{ cursor: 'pointer' }}
                            src={require('assets/img/pic/getVerify.png')}
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col">
                          <a className="pull-left log1" href="#" onClick={() => routerHistory.push(ROUTES.PAGE_FORGET_AUTH)}>忘記密碼</a>
                        </div>
                        <div className="col">
                          <a className="pull-right log1" href="#">登入問題</a>
                        </div>

                      </div>
                      <div className="row my-3">
                        {/* <button className="btn btn-elife-green" id="loginBtn" type="submit">登 入 */}
                        {/* </button> */}
                        <button className="btn btn-custom btn-elife-green" id="loginBtn" type="submit">登 入
                        </button>
                      </div>
                      <div className="row my-3">
                        <span style={{ color: 'red' }} className="fs-6">請使用Microsoft Edge或Google Chrome或Safari瀏覽器登入。</span>
                      </div>
                    </div>
                  </Form>
                </FormikProvider>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
