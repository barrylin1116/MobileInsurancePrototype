import React, { useRef, useState } from 'react';
import Article from '../../../../common/components/Article';
import Checkbox from '../../../../common/components/Checkbox';

const EPolicyApplication: React.FC<{}> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalButtonEnabled, setModalButtonEnabled] = useState(false);
  return (
    <div className="row">
      <div className="col">
        <Article
          ref={containerRef}
          onScrollToBottom={
                  () => setModalButtonEnabled(true)
              }
          footer={
                  (
                    <div className="row justify-content-center align-items-center py-2">
                      <div className="col-12 d-flex justify-content-center align-items-center">
                        <Checkbox
                          className="d-flex align-items-center labelName"
                          classNames={{ labelClass: 'ms-2', inputClass: '' }}
                          disabled={!modalButtonEnabled}
                        >
                          本人已閱覽相關文件
                        </Checkbox>
                      </div>
                    </div>
                  )
              }
        >
          <div className="row flex-column align-items-center p-3 fs-4 w-100">
            <p>本人(即要保人，下同)向臺銀人壽保險股份有限公司(下稱貴公司)申請核發電子保單，本人已詳細閱讀下述有關申請電子保單程序及權益之說明事項</p>

            <p>
              一、 申請資格及限制： <br />
              要保人已成年且要保人及被保險人於投保時均提供手機號碼即可申請電子保單；惟當電子保單檔案大小超過系統限制時，為電子保單下載順暢且可正常開啟檢視，本人瞭解貴公司無法提供電子保單，將改以印製實體紙本保單提供，有關契約撤銷之時效，依第四(二)點辦理。
            </p>

            <p>
              二、 通知領取方式： <br />
              本人於貴公司所投保之保險商品，申請以電子保單取代實體紙本保單，並同意以新契約投保文件或契約變更文件中所載之最後留存電子郵件信箱及手機號碼收受電子保單領取通知。
            </p>
            <p>
              三、 下載及簽收方式： <br />
              (一)本人瞭解並同意接獲通知領取電子保單之電子郵件或手機簡訊時，點選電子郵件或手機簡訊內之連結，輸入貴公司「保單網路服務」會員資料簽收電子保單(若尚非屬會員者，須先申請加入會員始能簽收電子保單)，並以點選「保單下載暨簽收」之日期為新契約保單簽收日之依據，若投保險種得由要保人行使契約撤銷權者，得行使契約撤銷權之時效為點選「保單下載暨簽收」之翌日起算十日內。<br />
              (二)電子保單簽收後，本人得隨時登入貴公司「保單網路服務」會員專區瀏覽電子保單內容。
            </p>
            <p>
              四、 未簽收電子保單之處理： <br />
              (一)本人瞭解自貴公司寄出新契約電子保單領取通知之電子郵件或手機簡訊後，逾15天仍未簽收電子保單時，貴公司將終止本次電子保單申請，就本件契約不另提供電子保單，改以印製實體紙本保單。 <br />
              (二)上述紙本保單以雙掛號郵寄或物流配送至本人於新契約投保文件填載之要保人通訊地址，並以雙掛號回執聯之妥投日或物流配送完成日作為保單簽收日，若投保險種得由要保人行使契約撤銷權者，得行使契約撤銷權之時效為雙掛號回執聯之妥投日或物流配送完成日之翌日起算十日內。
            </p>
            <p>
              五、 契約變更後之電子保單： <br />
              本人瞭解日後辦理契約變更時，貴公司將提供契約變更後之電子保單/電子批註單，本人須於貴公司「保單網路服務」會員專區瀏覽變更後之電子保單/電子批註單。
            </p>
            <p>
              六、 第三方認證單位： <br />
              本人已瞭解貴公司核發之電子保單，係經由「中華電信股份有限公司」進行數位簽章認證，並同意有關電子保單之真偽，以上述公司之檢驗結果為準。
            </p>
          </div>
        </Article>
      </div>
    </div>
  );
};

export default EPolicyApplication;
