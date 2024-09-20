import React, { useEffect } from 'react';
import Header from 'app/common/layouts/Header';
import Footer from 'app/common/layouts/Footer';
import { useDispatch } from 'react-redux';
import { initFetchCommonDataAction } from '../../../store/common/actions';

const MainLayout: React.FC = (props) => {
  const reduxDispatch = useDispatch();

  /**
     * @description 組件初始化後執行的 Effect
     */
  useEffect(() => {
    // 初始取得系統共用選項資料
    reduxDispatch(initFetchCommonDataAction());
  }, [reduxDispatch]);

  return (
    <>
      <div id="MainLayout" className="d-flex flex-column">
        {/* <Header /> */}
        {/* <main style={{ marginTop: '63px', background: '#e3e3e3' }}> */}
        {/*  {props.children} */}
        {/* </main> */}
        <Header />
        <div className="position-relative">
          <main style={{ background: '#e3e3e3' }}>
            {props.children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
