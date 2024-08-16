import React from 'react';
import { Card } from 'antd';

const Beneficiary: React.FC<any> = (props) => {
  return (
    <div>
      <Card title="生存保險金受益人" style={{ marginLeft: '10px', marginRight: '10px' }}>
        <div className="check-list3 ">
          <label htmlFor="" className="col-sm-5 orange labelName">生存保險金領取方式：</label>
          <p className="col-sm-7">
            <input type="radio" name="paymentMethod" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">電匯</label>
            <input type="radio" name="paymentMethod" className="form-check-input me-2 mb-1" />
            <label className="form-check-label me-2 text-nowrap labelName">郵寄支票</label>
          </p>
        </div>
        <div>
          <article className="tab  tab-show" id="tab_4">
            <section className="tab-frame">
              <div className="arrow-upleft" />
              <div className="grey2">
                <div className="check-title depo2">帳戶內容</div>
                <div className="check-list2 grey2">
                  <label htmlFor="" className="col-sm-3">Swift Code</label>
                  <div className="col-sm-9"><input
                    placeholder="臺幣保單不需輸入" id="swiftCode" type="text"
                    className="col-sm-6"
                                            />
                  </div>
                </div>
                <div className="check-list2 grey2">
                  <label htmlFor="" className="col-sm-3">英文戶名</label>
                  <div className="col-sm-9"><input placeholder="臺幣保單不需輸入" id="englishName" type="text" className="col-sm-6" /></div>
                </div>
                <div className="check-list2 grey2">
                  <label htmlFor="" className="col-sm-3">中文戶名</label>
                  <div id="accountName" className="col-sm-8 gray">
                    TangX
                  </div>
                </div>
                <div className="check-list2 grey2">
                  <label htmlFor="" className="col-sm-3">銀行名稱</label>
                  <div className="col-sm-3">
                    <div className="selector-box">
                      <select className="selector" id="bankOpt" />
                    </div>
                  </div>
                  <label htmlFor="" className="col-sm-2">分行名稱</label>
                  <div className="col-sm-3">
                    <div className="selector-box">
                      <select className="selector" id="brancheOpt" />
                    </div>
                  </div>
                </div>
                <div className="check-list2 grey2">
                  <label htmlFor="" className="col-sm-3">帳號</label>
                  <div className="col-sm-9"><input type="text" id="bankAccount" className="col-sm-11" /></div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </Card>
    </div>
  );
};

export default Beneficiary;
