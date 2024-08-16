import React from 'react';
import Header from 'app/common/layouts/Header';
import Footer from 'app/common/layouts/Footer';

const MainLayout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '63px', background: '#e3e3e3' }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
