import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#9a0036' }}>
      <div className="container d-flex">
        <div className="d-flex groups-wrapper" />
        <div className="right">
          <div>
            <span role="button" className="">
              資料保密措施
            </span>
            <span role="button" className="ml-1">
              隱私保護頁面
            </span>
          </div>
          <div>
            客服電話：0800-011-966
          </div>
          <div>
            地址： 106 中華民國臺北市敦化南路二段 69 號 6 樓
          </div>
          <div>
            臺銀人壽版權所有 BankTaiwan Life Insurance Co., Ltd.All Rights Reserved.
          </div>
          <div>
            建議瀏覽環境：
            <span>
              <img src={require('assets/img/icons/edge.svg').default} alt="edge" />
              Edge 91+、
            </span>
            <span>
              <img src={require('assets/img/icons/chrome.svg').default} alt="chrome" />
              Chrome 86+、
            </span>
            <span>
              <img src={require('assets/img/icons/firefox.svg').default} alt="firefox" />
              Firefox 88+、
            </span>
            <span>
              <img src={require('assets/img/icons/safari.svg').default} alt="safari" />
              Safari 12+
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
