import React from 'react';
import { routerHistory } from '../../../../../../core/router/service';
import { ROUTES } from '../../../../../../core/router/paths';

const OTPAuth: React.FC = () => {
  return (
  // <form className="needs-validation">
  //   <div className="form otp-form">
  //     <div className="orange-block">
  //       <div>驗證碼已發送至手機 0987654321 及電子信箱 re110112113@163.com，請於
  //         5 分鐘內輸入驗證碼，逾時驗證碼將失效。
  //       </div>
  //     </div>
  //     <div className="form-row w-100">
  //       <div className="wrapper">
  //         <div className="name">驗證碼</div>
  //         <div className="d-flex align-items-center">
  //           <input
  //             name="otpCode" type="text" placeholder="6 位數字"
  //             className="form-control form-control me-2" value=""
  //             data-gtm-form-interact-field-id="2"
  //           />
  //           <button type="button" className="btn btn-custom btn-elife-outline-green px-2 text-nowrap send-btn">重新發送</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <button type="submit" className="btn btn-custom btn-elife-green next-step" onClick={() => routerHistory.push(ROUTES.PAGE_FORGET_SETUP)}>
  //     送出
  //   </button>
  //   <button type="button" className="last-step border-0 bg-transparent elife-green-1" onClick={() => routerHistory.push(ROUTES.PAGE_FORGET_AUTH)}>上一步</button>
  // </form>
    <>
      <div className="container d-flex flex-column p-2">
        <form className="row d-flex flex-column p-3 m-3 bg-elife-gray-1 border elife-border-color-2 rounded-4">
          <div className="col orange-block">
            驗證碼已發送至手機 0987654321 及電子信箱 re110112113@163.com，請於 5 分鐘內輸入驗證碼，逾時驗證碼將失效。
          </div>
          <div className="col">
            <div className="row">
              <div className="col col-md-6">
                <div className="form-label labelName">驗證碼</div>
                <div className="d-flex align-items-center">
                  <input type="text" name="name" className="form-control me-2" placeholder="6 位數字" />
                  <button
                    type="button"
                    className="btn btn-custom btn-elife-outline-green px-2 text-nowrap send-btn"
                  >重新發送
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
          <button type="submit" className="btn btn-custom btn-elife-green next-step" onClick={() => routerHistory.push(ROUTES.PAGE_FORGET_SETUP)}>
            送出
          </button>
          <button type="button" className="last-step border-0 bg-transparent elife-green-1" onClick={() => routerHistory.push(ROUTES.PAGE_FORGET_AUTH)}>上一步</button>
        </div>
      </div>
    </>
  );
};

export default OTPAuth;
