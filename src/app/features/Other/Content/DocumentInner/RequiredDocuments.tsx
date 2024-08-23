import React, { useEffect, useRef, useState } from 'react';
import { RequiredDocumentsProps } from './types';
import CustomModal from '../../../Insurance/pages/Modals/CustomModal';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import maxzIndexService from '../../../../core/services/maxzIndexService';
import HealthDeclarationForm from '../HealthDeclarationForm/HealthDeclarationForm';
import NationforAg from '../../components/NationforAg';
import ArticleDisplayerFieldNotification from '../ArticleDisplayerFieldNotification';
import ArticleDisplayerFieldInsurance from '../ArticleDisplayerFieldInsurance';
import ArticleDisplayerFieldLifeInsurance from '../ArticleDisplayerFieldLifeInsurance';

const RequiredDocuments: React.FC<RequiredDocumentsProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formName, setFormName] = useState('');
  const [modalTitle, setModalTitle] = useState<string>('');
  const [isMinorOrStudent, setIsMinorOrStudent] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態
  const [isMinorOrStudent2, setIsMinorOrStudent2] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態
  const HealthDeclarationFormRef = useRef<any>(null);

  const [insuredName, setInsuredName] = useState<string>('');
  const [insuredAnnualIncome, setInsuredAnnualIncome] = useState<string>('');
  const [insuredOtherIncome, setInsuredOtherIncome] = useState<string>('');
  const [insuredHouseholdIncome, setInsuredHouseholdIncome] = useState<string>('');
  const [insuredNetAssets, setInsuredNetAssets] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [annualIncomeError, setAnnualIncomeError] = useState<boolean>(false);
  const [otherIncomeError, setOtherIncomeError] = useState<boolean>(false);
  const [householdIncomeError, setHouseholdIncomeError] = useState<boolean>(false);
  const [netAssetsError, setNetAssetsError] = useState<boolean>(false);

  useEffect(() => {
  }, [modalVisible]);

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 18; hour++) {
      const timeString = hour.toString().padStart(2, '0') + ':00';
      options.push(
        <option key={timeString} value={timeString}>
          {timeString}
        </option>
      );
    }
    return options;
  };

  const openModal = (key: string, index: number) => {
    setModalTitle(props.requiredDocumentsList ? props.requiredDocumentsList[index].title : '');
    setModalVisible(true);
    setFormName(key);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsMinorOrStudent(value === '否，原因');
  };

  const handleRadioChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsMinorOrStudent2(value === '是');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInsuredName(value);
    setNameError(value !== '安安' && value !== '');
  };

  const handleAnnualIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInsuredAnnualIncome(value);
    setAnnualIncomeError(value !== '999999999999' && value !== '');
  };

  const handleOtherIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInsuredOtherIncome(value);
    setOtherIncomeError(value !== '999999999999' && value !== '');
  };

  const handleHouseholdIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInsuredHouseholdIncome(value);
    setHouseholdIncomeError(value !== '999999999999' && value !== '');
  };

  const handleNetAssetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInsuredNetAssets(value);
    setNetAssetsError(value !== '999999999999' && value !== '');
  };

  const getInsuranceRightsConfirmationContent = () => {
    return (

      <>
        <div className="row custom-box">
          <div className="col-12">
            <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
              <div className="labelName m-0 label-styling">
                投保內容確認問項。
              </div>
            </div>
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
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            利率變動型保險商品時，請填寫本問項。
          </div>
        </div>
        <div className="row custom-box">
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
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            外幣收付之非投資型保險商品時，請填寫本問項。
          </div>
        </div>
        <div className="row custom-box">
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
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            投資型保險商品時，請填寫以下問項。
          </div>
        </div>
        <div className="row custom-box">
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
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            分紅保險商品時，請填寫本問項。
          </div>
        </div>
        <div className="row custom-box">
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
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            要保人、被保險人或實際繳費人購買本商品時保險年齡為65歲(含)以上者，請填寫以下問項以再次確認。
          </div>
        </div>
        <div className="row custom-box">
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
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            要保人、被保險人或實際繳費人購買本商品時年齡為18足歲以上惟未滿20足歲者，請填寫以下問項以再次確認。
          </div>
        </div>
        <div className="row custom-box">
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
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            FATCA問項
          </div>
        </div>
        <div className="row custom-box">
          <label className="labelName me-2">
            要保人聲明國外稅務居民身分(以下(1)(2)(3)由要保人擇一勾選)：
          </label>
          <div className="d-flex flex-column">
            <div className="form-check mb-3">
              <input type="radio" className="form-check-input" name="foreignTaxDeclaration" value="option1" />
              <label className="form-check-label button-spacing">
                本人不具有國外稅務居民身分（1.美國公民或稅務居民身分，且沒有美國指標。2.美國以外其他國家公民或稅務居民身分）
              </label>
            </div>
            <div className="form-check mb-3">
              <input type="radio" className="form-check-input" name="foreignTaxDeclaration" value="option2" />
              <label className="form-check-label button-spacing">
                <div>本人具有國外公民或稅務居民身分</div>
                <div>1. 具有美國公民或稅務居民身分</div>
                <div className="details">
                  【美國公民或稅務居民係指具有美國國籍者(持有美國護照)、持有綠卡者，或當年度入境美國並停留超過183天，
                  或者當年度入境並在美國待超過31天，同時滿足所謂的『前3年審核期』的計算超過183天。『前3年審核期』
                  係以報稅年度及前二年在美居留天數「加權」計算，當年度在美國實際居留天數 x 1 + 前一年度在美國實際居留
                  天數 x 1/2 + 前二年度在美國實際居留天數 x 1/3，若總天數大於（或等於）183天，該客戶即為美國稅務居民。】
                </div>
                <div>2. 具有美國以外其他國家公民或稅務居民身分</div>
              </label>
            </div>

            <div className="form-check mb-3">
              <input type="radio" className="form-check-input" name="foreignTaxDeclaration" value="option3" />
              <label className="form-check-label button-spacing">
                <div>本人不具有美國公民或稅務居民身分，但具備以下任一美國指標：(綠卡)</div>
                <div>1. 曾被註記具美國公民身分或擁有永久居留權(綠卡)</div>
                <div>2. 出生地為美國</div>
                <div>3. 擁有美國住址或郵寄地址</div>
                <div>4. 擁有美國電話號碼</div>
                <div>5. 經常將資金轉入位於美國的帳戶</div>
                <div>6. 曾指定住址設於美國的人士為代理人以處理本件要保相關事宜</div>
                <div>7. 留存於本公司之地址並非要保人之地址，而是以「郵局暫時代替保管郵件」(如郵政信箱)或「交由某人代轉信件」為唯一地址
                </div>
              </label>
            </div>
          </div>
        </div>

      </>
    )
    ;
  };

  const getReviewPeriodConfirmationContent = () => {
    return (

      <>
        <div className="row custom-box">
          <label
            className="form-check-label button-spacing me-2 text-nowrap labelName"
          >取得保險契約條款樣張方式：
          </label>
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="termsDeliveryMethod" value="業務人員親送" />
              <label className="form-check-label button-spacing">業務人員親送</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="termsDeliveryMethod" value="傳真" />
              <label className="form-check-label button-spacing">傳真</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="termsDeliveryMethod" value="郵寄" />
              <label className="form-check-label button-spacing">郵寄</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="termsDeliveryMethod" value="網路" />
              <label className="form-check-label button-spacing">網路</label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input type="checkbox" className="form-check-input" name="termsDeliveryMethod" value="電子郵件" />
              <label className="form-check-label button-spacing me-2">電子郵件</label>
            </div>
          </div>
        </div>

        <div className="row custom-box">
          <label className="form-check-label me-2 text-nowrap labelName">
            本人就上述保險契約條款樣張之審閱期間聲明如下：
          </label>
          <div className="d-flex align-items-center">
            <div className="form-check d-flex align-items-center me-3">
              <input type="radio" className="form-check-input me-2" name="termsReviewed" value="完成條款審閱" />
              <div className="d-flex align-items-center">
                <span className="form-check-label">我已於</span>
                <div className="date-picker-container button-spacing">
                  <DatePickerTW
                    name="birthday"
                    className="form-control me-2"
                    onChange={() => {
                    }}
                  />
                </div>
                <span className="form-check-label button-spacing">完成條款審閱</span>
              </div>
            </div>
            <div className="form-check d-flex align-items-center me-3">
              <input type="radio" className="form-check-input me-2" name="termsReviewed" value="本人以了解本契約內容，自願提前簽訂本契約" />
              <label className="form-check-label">本人以了解本契約內容，自願提前簽訂本契約</label>
            </div>
          </div>
        </div>

      </>
    )
    ;
  };

  const getFinancialDisclosureContent = () => {
    return (

      <>
        <div className="row custom-box">
          <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
            <div className="labelName m-0 label-styling">
              被保險人財務/工作狀況
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">個人工作年收入約(萬元)</div>
              <input type="labelName" name="annualEmploymentIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人其他年收入(如利息、投資等)(萬元)</div>
              <input type="labelName" name="otherYearlyIncome" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">家庭年收入(萬元)</div>
              <input type="labelName" name="householdYearlyIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人淨資產(資產扣除負債)(萬元)</div>
              <input type="labelName" name="netWorth" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">服務單位/職稱</div>
              <input type="labelName" name="householdYearlyIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">工作內容</div>
              <input type="labelName" name="jobDescription" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <label className="form-check-label button-spacing me-2 text-nowrap labelName">與服務單位關係</label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="serviceRelationship" value="所有人" />
                <label className="form-check-label button-spacing ">所有人</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="serviceRelationship" value="股東" />
                <label className="form-check-label button-spacing ">股東</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="serviceRelationship" value="其他" />
                <label className="form-check-label button-spacing  me-2">受雇:服務</label>
                <input
                  type="text" className="form-control button-spacing" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <span className="button-spacing">年</span>
              </div>
            </div>
          </div>

          <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
            <div className="labelName m-0 label-styling">
              要保人財務/工作狀況
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">個人工作年收入約(萬元)</div>
              <input type="labelName" name="policyholderAnnualEmploymentIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人其他年收入(如利息、投資等)(萬元)</div>
              <input type="labelName" name="policyholderOtherYearlyIncome" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">家庭年收入(萬元)</div>
              <input type="labelName" name="policyholderHouseholdYearlyIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人淨資產(資產扣除負債)(萬元)</div>
              <input type="labelName" name="policyholderNetWorth" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">服務單位/職稱</div>
              <input type="labelName" name="policyholderHouseholdYearlyIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">工作內容</div>
              <input type="labelName" name="policyholderJobDescription" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <label className="form-check-label button-spacing me-2 text-nowrap labelName">與服務單位關係</label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="policyholderServiceRelationship" value="所有人" />
                <label className="form-check-label button-spacing ">所有人</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="policyholderServiceRelationship" value="股東" />
                <label className="form-check-label button-spacing ">股東</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="policyholderServiceRelationship" value="其他" />
                <label className="form-check-label button-spacing  me-2">受雇:服務</label>
                <input
                  type="text" className="form-control button-spacing" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <span className="button-spacing">年</span>
              </div>
            </div>
          </div>

          <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
            <div className="labelName m-0 label-styling">
              經濟負擔者財務/工作狀況
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">個人工作年收入約(萬元)</div>
              <input type="labelName" name="dependentAnnualEmploymentIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人其他年收入(如利息、投資等)(萬元)</div>
              <input type="labelName" name="dependentOtherYearlyIncome" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">家庭年收入(萬元)</div>
              <input type="labelName" name="dependentHouseholdYearlyIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人淨資產(資產扣除負債)(萬元)</div>
              <input type="labelName" name="dependentNetWorth" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-6">
              <div className="name labelName">服務單位/職稱</div>
              <input type="labelName" name="dependentHouseholdYearlyIncome" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">工作內容</div>
              <input type="labelName" name="dependentJobDescription" className="form-control" />
            </div>
          </div>
          <div className="row custom-box">
            <label className="form-check-label button-spacing me-2 text-nowrap labelName">與服務單位關係</label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="dependentServiceRelationship" value="所有人" />
                <label className="form-check-label button-spacing ">所有人</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="dependentServiceRelationship" value="股東" />
                <label className="form-check-label button-spacing ">股東</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="dependentServiceRelationship" value="受雇:服務" />
                <label className="form-check-label button-spacing  me-2">受雇:服務</label>
                <input
                  type="text" className="form-control button-spacing" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <span className="button-spacing">年</span>
              </div>
            </div>
          </div>

          <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
            <div className="labelName m-0 label-styling">
              其他財務狀況
            </div>
          </div>
          <div className="row custom-box">
            <label
              className="form-check-label button-spacing me-2 text-nowrap labelName"
            >被保險人目前所居住的房屋為：
            </label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input
                  type="radio" className="form-check-input" name="residenceType"
                  value="自有（含本人、配偶、子女、父母所有）"
                />
                <label className="form-check-label button-spacing ">自有（含本人、配偶、子女、父母所有）</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="residenceType" value="租賃" />
                <label className="form-check-label button-spacing ">租賃</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="residenceType" value="其他" />
                <label className="form-check-label button-spacing  me-2">其他</label>
              </div>
            </div>
          </div>
          <div className="row custom-box">
            <div className="col-12">
              <div className="name labelName">其他補充說明</div>
              <input type="labelName" name="dependentAnnualEmploymentIncome" className="form-control" />
            </div>
          </div>
        </div>

      </>
    )
    ;
  };

  const DataUsageNoticeContent: React.FC = () => {
    const [isButtonEnabled, setButtonEnabled] = useState(false);

    const handleScrollToBottom = () => {
      setButtonEnabled(true); // 當滾動到底部時，啟用按鈕
    };

    return (
      <div className="custom-container">
        <div className="title">
          <h2>臺銀人壽個人資料蒐集、處理、利用告知事項</h2>
          <a className="scroll-hint">請下拉卷軸至內容文末</a>
        </div>
        <ArticleDisplayerFieldNotification onScrollToBottom={handleScrollToBottom} />
        <div className="checkbox-container">
          <input type="checkbox" id="confirmNotification" disabled={!isButtonEnabled} />
          <label htmlFor="confirm">本人已閱覽相關文件</label>
        </div>
      </div>
    );
  };

  const ApplicationInstructionsContent: React.FC = () => {
    const [isButtonEnabled, setButtonEnabled] = useState(false);

    const handleScrollToBottom = () => {
      setButtonEnabled(true); // 當滾動到底部時，啟用按鈕
    };

    return (
      <div className="custom-container">
        <div className="title">
          <h2>要保書填寫說明</h2>
          <a className="scroll-hint">請下拉卷軸至內容文末</a>
        </div>
        <ArticleDisplayerFieldInsurance onScrollToBottom={handleScrollToBottom} />
        <div className="checkbox-container">
          <input type="checkbox" id="confirmInsurance" disabled={!isButtonEnabled} />
          <label htmlFor="confirm">本人已閱覽相關文件</label>
        </div>
      </div>
    );
  };

  const PolicyholderInfoContent: React.FC = () => {
    const [isButtonEnabled, setButtonEnabled] = useState(false);

    const handleScrollToBottom = () => {
      setButtonEnabled(true); // 當滾動到底部時，啟用按鈕
    };

    return (
      <div className="custom-container">
        <div className="title">
          <h2>人壽保險投保人須知</h2>
          <a className="scroll-hint">請下拉卷軸至內容文末</a>
        </div>
        <ArticleDisplayerFieldLifeInsurance onScrollToBottom={handleScrollToBottom} />
        <div className="checkbox-container">
          <input type="checkbox" id="confirmLifeInsurance" disabled={!isButtonEnabled} />
          <label htmlFor="confirm">本人已閱覽相關文件</label>
        </div>
      </div>
    );
  };

  const getAgentDisclosureContent = () => {
    return (

      <>
        <div className="row custom-box">
          <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
            <div className="labelName m-0 label-styling">
              投保案件分析
            </div>
          </div>
          <label className="form-check-label button-spacing me-2 text-nowrap labelName">投保來源：</label>
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="insuranceSource" value="主動投保" />
              <label className="form-check-label button-spacing ">主動投保</label>
            </div>
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="insuranceSource" value="銀行/證券客戶" />
              <label className="form-check-label button-spacing ">銀行/證券客戶</label>
            </div>
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="insuranceSource" value="親屬" />
              <label className="form-check-label button-spacing ">親屬</label>
            </div>
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="insuranceSource" value="朋友" />
              <label className="form-check-label button-spacing ">朋友</label>
            </div>
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="insuranceSource" value="陌生拜訪" />
              <label className="form-check-label button-spacing ">陌生拜訪</label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label button-spacing  me-2">其他</label>
              <input
                type="text" className="form-control" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>

        <div className="row custom-box">
          <label className="form-check-label button-spacing me-2 text-nowrap labelName">保險目的：</label>
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="保障" />
              <label className="form-check-label button-spacing">保障</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="子女教育經費" />
              <label className="form-check-label button-spacing">子女教育經費</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="退休規劃" />
              <label className="form-check-label button-spacing">退休規劃</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="房屋貸款" />
              <label className="form-check-label button-spacing">房屋貸款</label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="其他" />
              <label className="form-check-label button-spacing me-2">其他</label>
              <input
                type="text" className="form-control" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>

        <div className="row custom-box">
          <label
            className="form-check-label button-spacing me-2 text-nowrap labelName"
          >本保件家中主要經濟來源者(指個人年收入佔家庭年收入比例最高者)：
          </label>
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="primaryIncomeSource" value="被保險人" />
              <label className="form-check-label button-spacing">被保險人</label>
            </div>
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="primaryIncomeSource" value="要保人" />
              <label className="form-check-label button-spacing">要保人</label>
            </div>
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="primaryIncomeSource" value="要保人之配偶" />
              <label className="form-check-label button-spacing">要保人之配偶</label>
            </div>
            <div className="form-check me-3">
              <input type="radio" className="form-check-input" name="primaryIncomeSource" value="要保人之父母" />
              <label className="form-check-label button-spacing">要保人之父母</label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input type="radio" className="form-check-input" name="primaryIncomeSource" value="其他" />
              <label className="form-check-label button-spacing me-2">其他</label>
              <input
                type="text" className="form-control" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>

        <div className="row custom-box">
          <label
            className="form-check-label button-spacing me-2 text-nowrap labelName"
          >本保件之保險費來源(可複選)：
          </label>
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="薪資" />
              <label className="form-check-label button-spacing">薪資</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="存款" />
              <label className="form-check-label button-spacing">存款</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="退休金" />
              <label className="form-check-label button-spacing">退休金</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="投資收入" />
              <label className="form-check-label button-spacing">投資收入</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="財產繼承" />
              <label className="form-check-label button-spacing">財產繼承</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="貸款" />
              <label className="form-check-label button-spacing">貸款</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="保單解約" />
              <label className="form-check-label button-spacing">保單解約</label>
            </div>
            <div className="form-check me-3">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="保單借款" />
              <label className="form-check-label button-spacing">保單借款</label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input type="checkbox" className="form-check-input" name="insurancePurpose" value="其他" />
              <label className="form-check-label button-spacing me-2">其他</label>
              <input
                type="text" className="form-control" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            被保險人姓名/財務狀況/職業/投保經驗
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">被保險人姓名</div>
            <input
              type="text"
              name="insuredName"
              className="form-control"
              value={insuredName}
              onChange={handleNameChange}
            />
            {nameError && (
              <div style={{ color: 'red', marginTop: '5px' }}>
                被保險人姓名不一致！
              </div>
            )}
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">個人工作年收入</div>
            <input
              type="text"
              name="insuredAnnualIncome"
              className="form-control"
              value={insuredAnnualIncome}
              onChange={handleAnnualIncomeChange}
            />
            {annualIncomeError && (
              <div style={{ color: 'red', marginTop: '5px' }}>
                個人工作年收入不一致！
              </div>
            )}
          </div>
          <div className="col-6">
            <div className="name labelName">個人其他年收入(如利息、投資等)</div>
            <input
              type="text"
              name="insuredOtherIncome"
              className="form-control"
              value={insuredOtherIncome}
              onChange={handleOtherIncomeChange}
            />
            {otherIncomeError && (
              <div style={{ color: 'red', marginTop: '5px' }}>
                個人其他年收入不一致！
              </div>
            )}
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">家庭年收入</div>
            <input
              type="text"
              name="insuredHouseholdIncome"
              className="form-control"
              value={insuredHouseholdIncome}
              onChange={handleHouseholdIncomeChange}
            />
            {householdIncomeError && (
              <div style={{ color: 'red', marginTop: '5px' }}>
                家庭年收入不一致！
              </div>
            )}
          </div>
          <div className="col-6">
            <div className="name labelName">個人淨資產(資產扣除負債)</div>
            <input
              type="text"
              name="insuredNetAssets"
              className="form-control"
              value={insuredNetAssets}
              onChange={handleNetAssetsChange}
            />
            {netAssetsError && (
              <div style={{ color: 'red', marginTop: '5px' }}>
                個人淨資產不一致！
              </div>
            )}
          </div>

        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)</div>
            <div className="form-check d-flex align-items-center">
              <input type="radio" className="form-check-input" name="maritalStatus" value="是，配偶工作為" />
              <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="maritalStatus" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
              總和。)
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="minorOrStudentStatus"
                value="是，父母或法定代理人工作為"
              />
              <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="minorOrStudentStatus" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">是是否已購買其他保險公司之商業保險?
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="otherInsuranceStatus"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="otherInsuranceStatus" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            要保人姓名/財務狀況/職業/投保經驗
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">要保人姓名</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">個人工作年收入</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人其他年收入(如利息、投資等)</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">家庭年收入</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人淨資產(資產扣除負債)</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)</div>
            <div className="form-check d-flex align-items-center">
              <input type="radio" className="form-check-input" name="maritalStatus2" value="是，配偶工作為" />
              <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="maritalStatus2" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
              總和。)
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="minorOrStudentStatus2"
                value="是，父母或法定代理人工作為"
              />
              <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="minorOrStudentStatus2" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">是是否已購買其他保險公司之商業保險?
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="otherInsuranceStatus2"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="otherInsuranceStatus2" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            其他財務狀況/職業/投保經驗
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">本件身故受益人是否指定為配偶、直系親屬或法定繼承人，且其順位及應得比
              例適用民法繼承編相關規定？
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa6"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="sa6" value="否，原因" />
              <label className="form-check-label button-spacing">否，原因</label>
              <input
                type="text" className="form-control me-3 button-spacing" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">本件身故受益人是否指定為配偶、直系親屬或法定繼承人，且其順位及應得比
              例適用民法繼承編相關規定？
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa6"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="sa6" value="否，原因" />
              <label className="form-check-label button-spacing">否，原因</label>
              <input
                type="text" className="form-control me-3 button-spacing" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">本保單保險費付款人是否為要保人或被保險人？
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="IsPolicyPremiumPayerPolicyholderOrInsured"
                value="是"
                onChange={handleRadioChange}
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input
                type="radio" className="form-check-input ms-3" name="IsPolicyPremiumPayerPolicyholderOrInsured"
                value="否，原因"
                onChange={handleRadioChange}
              />
              <label className="form-check-label button-spacing">否</label>
            </div>
            {isMinorOrStudent && (
              <div className="row custom-box">
                <div className="col-6">
                  <div className="name labelName-Ag">付款人姓名</div>
                  <input type="labelName" name="rocId" className="form-control" />
                </div>
                <div className="col-6">
                  <div className="name labelName-Ag">與要保人關係</div>
                  <select name="relationshipToPolicyholder" className="form-control">
                    <option value="">請選擇</option>
                    <option value="父母">父母</option>
                    <option value="配偶">配偶</option>
                    <option value="子女">子女</option>
                    <option value="兄弟姐妹">兄弟姐妹</option>
                    <option value="祖父母">祖父母</option>
                    <option value="孫子女">孫子女</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
                <div className="col-6">
                  <div className="name labelName-Ag">身分證統一編號</div>
                  <input type="labelName" name="rocId" className="form-control" />
                </div>
                <div className="col-6">
                  <div className="name labelName-Ag">出生日期</div>
                  <DatePickerTW
                    name="birthday" className="form-control" onChange={() => {
                    }}
                  />
                </div>
                <div className="col-6">
                  <NationforAg />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">以未成年人為要保人或被保險人，請以正楷填 寫法定代理人之姓名/身分證統一編號/出生日
              期/國籍/居住地/連絡電話？(如法定代理人為 本保單之要保人或被保險人，本項免填)
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="MinorInsuredGuardianDetails"
                value="是"
                onChange={handleRadioChange2}
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input
                type="radio" className="form-check-input ms-3" name="MinorInsuredGuardianDetails"
                value="否，原因"
                onChange={handleRadioChange2}
              />
              <label className="form-check-label button-spacing">否</label>
            </div>
            {isMinorOrStudent2 && (
              <div className="row custom-box">
                <div className="col-6">
                  <div className="name labelName-Ag">法定代理人姓名</div>
                  <input type="labelName" name="rocId" className="form-control" />
                </div>
                <div className="col-6">
                  <div className="name labelName-Ag">身分證統一編號</div>
                  <input type="labelName" name="rocId" className="form-control" />
                </div>
                <div className="col-6">
                  <div
                    className="name labelName-Ag"
                    style={{
                      zIndex: maxzIndexService.getMaxZIndex() + 10 // 注意括號
                    }}
                  >
                    出生日期
                  </div>
                  <DatePickerTW
                    name="birthday2" className="form-control" onChange={() => {
                    }}
                  />
                </div>
                <div className="col-6">
                  <div className="name labelName-Ag">連絡電話</div>
                  <input type="labelName" name="rocId" className="form-control" />
                </div>
                <div className="col-6">
                  <NationforAg />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">
              (1) 招攬時，是否已確認要保人及被保險人符合投保之條件?<br />
              (2) 本保單規劃是否已考量要保人及被保險人之保險需求，確認保單適合度、投保險種、保險費、保險金額與要保人或被保險人收入、財務狀況及職業之相當性及付費能力？<br />
              (3) 招攬時，是否已向要保人及被保險人確認要保人與被保險人，及被保險人與受益人之關係?<br />
              (4)
              招攬時，是否已確認要保人、被保險人及受益人身分？有關要保人與被保險人所提供之身分證明文件(身分證、護照、駕照，或其他足資證明其身分之文件等；若為法人者，為法人之名稱、代表人、地址、聯絡電話)是否與要保書所填載之內容相符？<br />
              (5) 是否確認要保人已瞭解其所繳交保險費係用以購買保險商品？<br />
              (6) 招攬時，是否親晤要保人/被保險人/法定代理人並確認要保人/被保險人/法定代理人親簽相關要保文件？<br />
              (7)
              招攬時，是否已向要保人說明本次購買保險商品內容、繳納保險費方式、繳費年期、領取各種給付項目與解約金內容？<br />
              (8) 招攬時，是否未勸誘要保人/被保險人/實際繳交保費之利害關係人以辦理貸款、保單解約、保單借款或定存解約利息免打折等財務槓桿方式繳交保險費？<br />
              (9) 招攬投資型保險商品時，是否已考量要保人之投資屬性、風險承受能力，並確定要保人已確實瞭解投資型保險之投資損益係由其自行承擔，且未提供逾越要保人財力狀況或不合適之商品？<br />
              (10) 招攬以外幣收付之保險商品時，是否已向要保人確認有外幣需求及承擔匯率風險的能力?<br />
              (11) 招攬分紅保單時，本人已確實告知要保人保單紅利為非保證給付項目，可能會變動為較高或較低之數字，本人未向要保人做任何保證。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="qa"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="qa" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">投保前三個月內要保人/被保險人/實際繳交保費之利害關係人是否有辦理貸款、保
              單解約或保單借款？
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa10"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="sa10" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">要保書或保險相關文件所載要保人及被保險人之住所或居所(通訊)地址，是否
              為招攬業務員本人之住所或居所(通訊)地址或為所屬保險代理人、保險經紀人、 銀行及其分支機構之營業處所？
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa11"
                value="是，原因<"
              />
              <label className="form-check-label button-spacing me-2">是，原因</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="sa11" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">要保人是否為外籍人士？若是，請說明居留目的。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa12"
                value="是，原因<"
              />
              <label className="form-check-label button-spacing me-2">是，原因</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="sa12" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">過去一年內要保人是否居住於中華民國境外超過半年以上？若是，請說明居住
              國家(地區) 。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa13"
                value="是，原因<"
              />
              <label className="form-check-label button-spacing me-2">是，原因</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="sa13" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">要保人或被保險人是否是現任(或曾任)國內外政府或國際組織之重要政治性職
              務人士(如：中央或地方民意代表、公務機關首長)？若是，請說明。
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa14"
                value="是，原因<"
              />
              <label className="form-check-label button-spacing me-2">是，原因</label>
              <input
                type="text" className="form-control me-3" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <input type="radio" className="form-check-input ms-3" name="sa14" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">要保人購買保險商品時，是否對於保障內容或給付項目完全不關心，抑或對於具
              高保單價值準備金或具高現金價值或躉繳保費之保險商品，僅關注保單借款、解約或變更受益人等程序？
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa15"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="sa15" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">對65歲以上客戶（要保人或被保險人或實際繳交保費之利害關係人）之投保案件，
              是否就該客戶具有辨識不利其投保權益情形之能力、保險商品適合該客戶及評估理由，並做成「高齡投保評估量表」評估紀錄？(投保商品非為具潛在影響及各種
              不利因素適用之商品，本項免填)
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="sa16"
                value="是"
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input type="radio" className="form-check-input ms-3" name="sa16" value="否" />
              <label className="form-check-label button-spacing">否</label>
            </div>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-12">
            <div className="name labelName">配合相關法令規範，確認要保人瞭解商品內容及投保意願或高齡關懷提問，臺銀人壽將視需要電話訪問本保單之要保人、被保險人
              或實際繳交保費之利害關係人，請轉知客戶知悉，對於電訪時段另有特殊需求者請註明時間:
            </div>
            <label className="form-check-label button-spacing me-2">電訪區間</label>
            <select id="start-time" name="start-time">
              {generateTimeOptions()}
            </select>
            <label className="form-check-label button-spacing me-2">~</label>
            <select id="end-time" name="end-time">
              {generateTimeOptions()}
            </select>
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">其他有利於核保之資訊：</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            本次投保具有解約金之商品(不包括小額終老保險、團體年金保險及保險期間在三年以下之傷害保險)或投資型保險商品時，如要保人或被保險人或實際繳交保費之利害關係人之保險年齡依保險業招攬及核保理賠辦法需進行錄音者，請填寫下列欄位。
          </div>
        </div>

        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">錄音序號</div>
            <input type="labelName" name="RecordingSerialNumber" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">錄音日期</div>
            <DatePickerTW
              name="RecordingDate" className="form-control" onChange={() => {
              }}
            />
          </div>
        </div>
        <div className="row custom-box">
          <div className="col-6">
            <div className="name labelName">督導主管姓名</div>
            <input type="labelName" name="SupervisorName" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">督導主管登錄字號</div>
            <input type="labelName" name="SupervisorRegistrationNumber" className="form-control" />
          </div>
        </div>

      </>
    )
    ;
  };

  const getFormContent = () => {
    switch (formName) {
      case 'HealthDeclarationForm':
        return (<HealthDeclarationForm ref={HealthDeclarationFormRef} />);
      case 'InsuranceRightsConfirmation':
        return getInsuranceRightsConfirmationContent();
      case 'ReviewPeriodConfirmation':
        return getReviewPeriodConfirmationContent();
      case 'FinancialDisclosure':
        return getFinancialDisclosureContent();
      case 'DataUsageNotice':
        return <DataUsageNoticeContent />;
      case 'ApplicationInstructions':
        return <ApplicationInstructionsContent />;
      case 'PolicyholderInfo':
        return <PolicyholderInfoContent />;
      case 'AgentDisclosure':
        return getAgentDisclosureContent();
      default:
        return '';
    }
  };

  const getFooterContent = () => {
    switch (formName) {
      case 'InsuranceRightsConfirmation':
      default:
        return '';
    }
  };

  return (
    <>
      <div id="requiredDocumentsList" className="container mw-100 mx-0 px-0">
        {
          props.requiredDocumentsList?.map((data, index) => (
          // eslint-disable-next-line react/jsx-key
            <>
              <div className={'row align-items-center border-bottom mx-0 ' + `${index === 0 ? 'mt-0' : ''}`}>
                {
                index % 3 !== 0
                  ? (
                    <img
                      key={`img-${index}`}
                      className="p-0 col-1 exclamation-icon"
                      src={require('assets/img/icons/exclamation.svg').default}
                    />
                    )
                  : (
                    <div
                      key={`img-${index}`}
                      style={{ marginInline: '0.5rem', width: '2rem' }}
                      className="p-0 col-1"
                    />
                    )
                }
                <div
                  key={`title-${index}`} className="item col"
                  onClick={() => openModal(data.key, index)}
                >
                  {data.title}
                </div>
              </div>
            </>
          ))
        }
        {
          HealthDeclarationFormRef.current?.getCheckedDiseaseQuestionnaire().map((data: any, index: number) => (
            // eslint-disable-next-line react/jsx-key
            <>
              <div className={'row align-items-center border-bottom mx-0 ' + `${index === 0 ? 'mt-0' : ''}`}>
                {
                  index % 3 !== 0
                    ? (
                      <img
                        key={`img-${index}`}
                        className="p-0 col-1 exclamation-icon"
                        src={require('assets/img/icons/exclamation.svg').default}
                      />

                      )
                    : (
                      <div
                        key={`img-${index}`}
                        style={{ marginInline: '0.5rem', width: '2rem' }}
                        className="p-0 col-1"
                      />
                      )
                }
                <div
                  key={`title-${index}`} className="item col"
                  onClick={() => openModal(data.key, index)}
                >
                  {data.title}
                </div>
              </div>
            </>
          ))
        }
      </div>
      {
          modalVisible && (
            <CustomModal
              isOpen={modalVisible}
              onClose={setModalVisible}
              headerTitle={modalTitle}
              headerButton={
                <>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                  >
                    <div className="row">
                      <div className="col-lg-12">完成</div>
                    </div>
                  </button>
                </>
                    }
              buttonPosition="right"
              footerContent={getFooterContent()}
            >
              {getFormContent()}
            </CustomModal>
          )
        }

    </>
  )
  ;
};
export default RequiredDocuments;
