import React from 'react';
import bear404 from '../../../assets/img/pic/bear-404.svg';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';

const Page404: React.FC = () => {
  const routerHistory = useHistory();

  return (
    <div id="page_404">
      <div className="body">
        <div className="container no-found">
          <div className="text-wrapper">
            <h1>404 找不到頁面</h1>
            <p>不好意思，您所查詢的頁面可能已經移除、重新命名或暫時無法使用。</p>
          </div>
          <img src={bear404} alt="熊寶" className="bear-404" />
        </div>
        <button onClick={() => routerHistory.push(ROUTES.HOME)} className="btn-wrapper">
          <div className="btn btn-primary w-100">回首頁</div>
        </button>
      </div>
    </div>
  );
};

export default Page404;
