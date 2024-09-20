import React from 'react';
import { routerHistory } from '../../../../../core/router/service';
import { ROUTES } from '../../../../../core/router/paths';
import { NavLink } from 'react-router-dom';
// import { routerHistory } from '../../../../../core/router/service';
// import { ROUTES } from '../../../../../core/router/paths';

const Information: React.FC = () => {
  return (
    <>
      <div className="container d-flex flex-column p-2">
        <form className="row d-flex flex-column p-3 m-3 bg-elife-gray-1 border elife-border-color-2 rounded-4">
          <div
            className="col d-flex justify-content-center align-items-center fs-5 mb-2 form-header"
            style={{ color: '#797470' }}
          >為確保您的帳戶安全，請輸入以下資料，系統將發送驗證碼至您的手機及電子信箱。
          </div>
          <div className="col form-body py-3">
            <div className="container">
              <div className="row flex-column flex-xl-row justify-content-xl-between">
                <div className="col col-xl-5">
                  <div className="form-label labelName">帳號</div>
                  <input type="text" name="name" className="form-control" placeholder="請輸入帳號" />
                </div>
                <div className="col col-xl-5">
                  <div className="form-label labelName">圖形驗證碼</div>
                  <div className="input-group d-flex align-items-center">
                    <input type="text" name="name" className="form-control" placeholder="請輸入驗證碼" />
                    <img
                      src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAyCAIAAACyKox2AAAE9ElEQVR4Xu2XP6gdRRTGU6goKCSNIqQyQUhl9fqrnSBYaECbFGm0szFNkDRRURAUsUgRi9fFSosIEU2RLoIIggS0EqwsH0iKBDJe77x38u13Zmbn387O3twfW9w9c863m/xmNnrM7GjCK3f2uTQHx7gwDR8dPMulR48elDfybXbK+6Cy73O3V1za0ROVfZud8r6p73tHXZ44+INLBSzG992z760vrjbhxPGL64urDamofDG+LdZ6G/dW8xSm/3z6FpdasTDfyETuCzVffOszLrmYS/lD39cfewbqC6OK+xLNSKTyJJ568AaXshic7z6Vf/jgFy4FqeK+QwqV/37wg1nK93ytPNW6ZSvFZ7NW3rvvby+9I7/zlFu29dCn0qnv11/9Rn6T8hLrlkfZfae+zVA5UcW6pYH7F06d4dJ89Ot7lFrKhenE96N8wb5N1YOONDj0c7Fs35YplAtb5n4bfJvJDjoR4/7kd79xqSe2xLelgXLB537ne4T9106vL67m0uagEyK+c9mmB98Wa53E37v+E97GM4t1szncdOj3frw2bJmZXnwLJD5buWn7ebfg+RbxXSnvzrcg4ku+9i0PeuBj7vvHfjo+Nee5tKFf34i1fvmvj3khjjbKA76RZu6dypfhW1grzzvxUx/0SNmW507ftz/aiEccvm9e/RkvXu6DvE/9dMqTfBtQbml26B2+CdLf225IFT/RQU/1HWBS9yHfK4DXjtA7ILwbMDMQm0GS+LrW82TH/D1Ud+/1jW8jcNMYegfglR2rgXdcBcQff/wG3o4qx1iBm8D3nXf/Hq64kajLb1+DYEcyMioeoxDscfvmiSO4LwXOWq30DsCL54Nw9AYRj+61cp91jhuCnXi+R5VTDirnVg/OQw+RDqTN65tu9WQqehZj9areAYHdgAnD1MOiFo9o5RSikc6kj7kzhG6TQPcQzEi/27dGT1YBXiktWe8AvRucsWHxlvBbUT3e92gsl+KQTN+5h965fZuj5PN7//BCNPrF9A7QuyEgPukPm+GbF8pwxjrdm0jfzsRaSHi2cklYxb0h6Rfx9paiwsnZsuVWKntnv3jYHQ2F0K0Frbt9yxjBfcVUSYYXLEoj8c6LRjJ8O7E9Gco5CODWDVG+ebkStR6BOQI3xWFnRfww8n/Q/Vp2eDcgHKTgAQ9X3n9RfnOEAuYOifJt4aYypkjGzLxYmhXx6F6a9eEO6NfjWKQ68vmTL1NFlPtmIZWX3L6RwHAeGFgrEylJDszq/77Tvn0EYgNLglZuCcz6lsZ9G/9wKpJTJc1HySMCg7JkrcfLNnGxvBBBYNa3FOXb+OcjkfGSkEhKHuQbhMjDpbVvfeJ90Gzk0ii+Wanrpcl9w6OTZ8P4Akse55vVdTzfMeJ1Qrgeg2/WVzfk29fnq48ig3njYZyx8LScx+G4JOiK72MeEK9DdCUVTJAQXUEGvr++cBW7NdgcA88D3JoIxyl4IBoOAqTH51twiuc4ANuS4CCAWzcMfJugcuqMhFMUPBANBw3h7hQ4a4OsjspGRPy+6//mLTyTCMdt4KYj2LdJnE+CQzdwUyIcVxwo+AKTfCNaPHcUEJnp8N0Ger8rb341XO+XbN+C82vfhtl8axah3Cf75K0vuRRBe/Ed+U7l+0u/cknx/CcfcKkMn2+Tq9wStv7Sv/nJxIJ9m5mUz0It5f8BEruS9Lprd/MAAAAASUVORK5CYII="
                      alt="captcha" width="135" height="50"
                    />
                    <div className="recreate ms-2 d-flex align-items-center elife-green-1" role="button">
                      <span>重新產生</span><img
                        src={require('assets/img/icons/cycle.svg').default} className="cycle-icon"
                        alt="refresh-icon"
                                       />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
          <button
            type="submit" className="btn btn-custom btn-elife-green"
            onClick={() => routerHistory.push(ROUTES.PAGE_FORGET_AUTH_OTP_AUTH)}
          >
            發送驗證碼
          </button>
          <NavLink className="mt-2 elife-green-1" to={ROUTES.PAGE_LOGIN}>回首頁</NavLink>
        </div>
      </div>
    </>
  );
};

export default Information;
