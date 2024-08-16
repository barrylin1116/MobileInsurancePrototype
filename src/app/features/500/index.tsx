import React from 'react';
import bear500 from '../../../assets/img/pic/bear-500.svg';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';

const Page404: React.FC = () => {
  const routerHistory = useHistory();

  return (
    <div id="page_500">
      <div className="body">
        <div className="container server-error">
          <div className="wrapper">
            <h1>500 內部伺服器錯誤</h1>
            <p>非常抱歉網頁發生錯誤，請稍後再試。</p>
            <button onClick={() => routerHistory.push(ROUTES.HOME)} className="btn-wrapper">
              <div className="btn btn-primary w-100">回首頁</div>
            </button>
          </div>
          <img src={bear500} alt="熊寶" className="bear-500" />
        </div>
      </div>
    </div>
  );
};

export default Page404;
