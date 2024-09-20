import React from 'react';

const InsuranceRightsConfirmationContent: React.FC = () => {
  return (

    <>
      <div className="container">
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6 ">
          <div className="labelName m-0 label-styling">
            投保內容確認問項 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">
              (1) 業務員已向您出示登錄證，並向您說明本保險之保障內容，而您也認為投保內容(含保險種類、保障項目、給付條
              件、保險金額及應繳保險費等)皆符合您的需要。<br />
              (2) 業務員已確認您的基本資料(包括姓名、性別、出生年月日、身分證字號、要保人出生地是否為美國等)及聯絡方式
              (若以公司行號投保，則包合格登記證照、代表人之合法證明文件、地址及聯絡電話)，要保人與被保險人及被保險
              人與指定受益人關係，且與要保書填載一致。<br />
              (3) 您已了解對於客戶個人資料的蒐集、利用、處理、傳遞及保密與內部控制等，本公司悉依政府相關法令及作業規
              範辦理。另本公司保有本保險最後承保與否之一切權利，詳細投保規定及保障範圍仍依本保險的作業規定及保單
              條款為準。<br />
              (4)業務員已向您說明本保險之保險單條款與相關文件之各項權利(例如：契約撤銷權可於收到保險單翌日起算十日
              內，得以書面檢同保險單向本公司撤銷本契約…)、義務(例如：告知義務…)及責任(例如：保險費的交付、變更
              住所通知…)，並了解相關權利行使、變更、解除及終止之方式及限制。<br />
              (5) 您已了解本保險各項費用（例如：保費費用計算方式、收取時點、保險成本、解約費用…等）及費用收取方式。<br />
              (6) 您已了解所繳交保險費係用以購買保險商品而非存款商品，不受「存款保險」之保障，但依保險相關法令受「保險安定基金」之保障。<br />
              (7)業務員已向您說明本保險DM、保險單條款與相關文件中有關保障內容、投保規則、注意事項、客戶服務及申訴電
              話(0800-011-966)，您也了解了以上的內容。<br />
              (8) 您已了解本保險繳交之保費或未來分期繳交之保費，是在您經濟能力範圍內所能負擔的。<br />
              (9) 您已了解投保本保險後，若未來發生提前解約時，依商品精算原則計算可領回之解約金有可能小於已繳之
              保險費，甚至可能為零。<br />
              (10) 您已確認要保書所載聯絡資料(如地址、E-mail 等)皆正確無誤，俾利寄發之各項通知文件(例如：保單帳戶價值
              通知書、繳費通知單、催告通知書…)能順利送達給您。<br />
              (11) 您已確認各項要保文件皆為您及被保險人親自簽名(未成年者尚須經其法定代理人/監護人/輔助人簽名)。<br />
              (12) 您已確認業務員並無勸誘您以辦理保險單解約、貸款或保險單借款獲得資金購買本保險。<br />
              (13) 您已確認業務員推介與您風險屬性相符之保險商品。

            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="qa"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="policyRightsQA" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            利率變動型保險商品時，請填寫本問項 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">14:您已了解本保險之保單帳戶價值依「宣告利率」變動，「宣告利率」會隨著保險公司定期宣告而改變，保險公司
              不負最低宣告利率保證的責任。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="policyRightsQA14"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="policyRightsQA14" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            外幣收付之非投資型保險商品時，請填寫本問項 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">15:您已了解保險費收取方式、匯款相關費用之負擔及商品所涉匯率風險及商品幣別所屬國家之政治、經濟變動風險
              並願意承受匯率變動風險。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="policyRightsQA15"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="policyRightsQA15" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            投資型保險商品時，請填寫以下問項 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">16:您您已了解本保險不保證本金及最低收益。<br />
              17:您已了解本保險所連結之標的係符合您的投資屬性與風險承受能力，並也了解投資損益、投資風險及匯率變動風
              險（以外幣計價時），是由您自行承擔。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="policyRightsQA1617"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="policyRightsQA1617" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            分紅保險商品時，請填寫本問項 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">18:您已了解保單紅利為非保證給付項目，可能變動為較高或較低之數字，本公司不保證給付金額。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="policyRightsQA18"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="policyRightsQA18" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            要保人、被保險人或實際繳費人購買本商品時保險年齡為65歲(含)以上者，請填寫以下問項以再次確認 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">19:您已充分理解保險契約內容，符合您的保險需求且未超出負擔能力。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="policyRightsQA19"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="policyRightsQA19" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            要保人、被保險人或實際繳費人購買本商品時年齡為18足歲以上惟未滿20足歲者，請填寫以下問項以再次確認 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">20:您已充分理解保險契約內容，符合您的保險需求且未超出負擔能力。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="policyRightsQA20"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="policyRightsQA20" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            FATCA問項 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <label className="labelName me-2">
            要保人聲明國外稅務居民身分(以下(1)(2)(3)(4)由要保人擇一勾選)：
          </label>
          <div className="d-flex flex-column">
            <div className="col py-2">
              <div className="input-group">
                <div className="form-check d-flex align-items-center pe-2">
                  <input
                    type="radio" name="applicantNationType" id="applicantNationType-0"
                    className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                  />
                  <label
                    className="form-check-label m-0 ms-2"
                    htmlFor="applicantNationType-0"
                  >本人不具有國外稅務居民身分（1.美國公民或稅務居民身分，且沒有美國指標。2.美國以外其他國家公民或稅務居民身分）
                  </label>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="input-group">
                <div className="form-check d-flex align-items-start pe-2">
                  <input
                    type="radio" name="applicantNationType" id="applicantNationType-0"
                    className="form-check-input top-0" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                  />
                  <label
                    className="form-check-label m-0 ms-2"
                    htmlFor="applicantNationType-0"
                  >
                    <div className="row flex-column">
                      <div className="col">
                        本人具有國外公民或稅務居民身分
                      </div>
                      <div className="col">
                        【美國公民或稅務居民係指具有美國國籍者(持有美國護照)、持有綠卡者，或當年度入境美國並停留超過183天，
                        或者當年度入境並在美國待超過31天，同時滿足所謂的『前3年審核期』的計算超過183天。『前3年審核期』
                        係以報稅年度及前二年在美居留天數「加權」計算，當年度在美國實際居留天數 x 1 +
                        前一年度在美國實際居留
                        天數 x 1/2 + 前二年度在美國實際居留天數 x 1/3，若總天數大於（或等於）183天，該客戶即為美國稅務居民。】
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="input-group">
                <div className="form-check d-flex align-items-center pe-2">
                  <input
                    type="radio" name="applicantNationType" id="applicantNationType-0"
                    className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                  />
                  <label
                    className="form-check-label m-0 ms-2"
                    htmlFor="applicantNationType-0"
                  >本人具有美國以外其他國家公民或稅務居民身分
                    <span style={{ color: 'red' }}>
                      (需檢附檢附「自我證明表」)
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="input-group">
                <div className="form-check d-flex align-items-start pe-2">
                  <input
                    type="radio" name="applicantNationType" id="applicantNationType-0"
                    className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
                  />
                  <label
                    className="form-check-label m-0 ms-2"
                    htmlFor="applicantNationType-0"
                  >
                    <div className="row flex-column">
                      <div className="col">本人不具有美國公民或稅務居民身分，但具備以下任一美國指標：(綠卡)</div>
                      <div className="col">1. 曾被註記具美國公民身分或擁有永久居留權(綠卡)</div>
                      <div className="col">2. 出生地為美國</div>
                      <div className="col">3. 擁有美國住址或郵寄地址</div>
                      <div className="col">4. 擁有美國電話號碼</div>
                      <div className="col">5. 經常將資金轉入位於美國的帳戶</div>
                      <div className="col">6. 曾指定住址設於美國的人士為代理人以處理本件要保相關事宜</div>
                      <div className="col">7. 留存於本公司之地址並非要保人之地址，而是以「郵局暫時代替保管郵件」(如郵政信箱)或「交由某人代轉信件」為唯一地址</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default InsuranceRightsConfirmationContent;
