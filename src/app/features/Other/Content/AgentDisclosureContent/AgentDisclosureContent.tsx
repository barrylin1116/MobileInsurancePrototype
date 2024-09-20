import React, { useState } from 'react';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import NationforAg from '../../components/NationforAg';
import maxzIndexService from '../../../../core/services/maxzIndexService';

const AgentDisclosureContent: React.FC<any> = () => {
  const [isMinorOrStudent, setIsMinorOrStudent] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態
  const [isMinorOrStudent2, setIsMinorOrStudent2] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態
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

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour <= 24; hour++) {
      const timeString = hour.toString().padStart(2, '0') + ':00';
      options.push(
        <option key={timeString} value={timeString}>
          {timeString}
        </option>
      );
    }
    return options;
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
  return (

    <>
      <div className="container">
        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            投保案件分析 :
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label className="form-label labelName text-nowrap">投保來源：</label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="主動投保" />
              <label className="form-check-label m-0 ms-2">主動投保</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input
                type="radio" className="form-check-input" name="insuranceSource"
                value="銀行/證券客戶"
              />
              <label className="form-check-label m-0 ms-2">銀行/證券客戶</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="親屬" />
              <label className="form-check-label m-0 ms-2">親屬</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="朋友" />
              <label className="form-check-label m-0 ms-2">朋友</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="陌生拜訪" />
              <label className="form-check-label m-0 ms-2">陌生拜訪</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">其他</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label className="form-label labelName text-nowrap">保險目的：</label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="保障" />
              <label className="form-check-label m-0 ms-2">保障</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="子女教育經費" />
              <label className="form-check-label m-0 ms-2">子女教育經費</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="退休規劃" />
              <label className="form-check-label m-0 ms-2">退休規劃</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="房屋貸款" />
              <label className="form-check-label m-0 ms-2">房屋貸款</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">其他</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label
            className="form-label labelName text-nowrap"
          >本保件家中主要經濟來源者(指個人年收入佔家庭年收入比例最高者)：
          </label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="被保險人" />
              <label className="form-check-label m-0 ms-2">被保險人</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="要保人" />
              <label className="form-check-label m-0 ms-2">要保人</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="要保人之配偶" />
              <label className="form-check-label m-0 ms-2">要保人之配偶</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="要保人之父母" />
              <label className="form-check-label m-0 ms-2">要保人之父母</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">其他</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label className="form-label labelName text-nowrap">本保件之保險費來源(可複選)：</label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="薪資" />
              <label className="form-check-label m-0 ms-2">薪資</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="存款" />
              <label className="form-check-label m-0 ms-2">存款</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="退休金" />
              <label className="form-check-label m-0 ms-2">退休金</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="投資收入" />
              <label className="form-check-label m-0 ms-2">投資收入</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="財產繼承" />
              <label className="form-check-label m-0 ms-2">財產繼承</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="貸款" />
              <label className="form-check-label m-0 ms-2">貸款</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="保單解約" />
              <label className="form-check-label m-0 ms-2">保單解約</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="保單借款" />
              <label className="form-check-label m-0 ms-2">保單借款</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="checkbox" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">其他</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            被保險人姓名/財務狀況/職業/投保經驗 :
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col col-xl-6">
            <div className="form-label labelName">被保險人姓名</div>
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

        <div className="row m-0 p-2 border elife-border-color-1 flex-xl-row flex-column align-items-xl-center">
          <div className="col col-xl-6">
            <div className="form-label labelName">個人工作年收入</div>
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
          <div className="col col-xl-6">
            <div className="form-label labelName">個人其他年收入(如利息、投資等)</div>
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

        <div className="row m-0 p-2 border elife-border-color-1 flex-xl-row flex-column align-items-xl-center">
          <div className="col col-xl-6">
            <div className="form-label labelName">家庭年收入</div>
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
          <div className="col col-xl-6">
            <div className="form-label labelName">個人淨資產(資產扣除負債)</div>
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

        <div className="row m-0 p-2 border elife-border-color-1">
          <label
            className="form-label labelName text-nowrap"
          >是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)
          </label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">是，配偶工作為</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="否" />
              <label className="form-check-label m-0 ms-2">否</label>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label
            className="form-label labelName text-nowrap"
          >是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
            總和。)
          </label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">是，配偶工作為</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="否" />
              <label className="form-check-label m-0 ms-2">否</label>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label
            className="form-label labelName text-nowrap"
          >
            是否已購買其他保險公司之商業保險?
          </label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="是" />
              <label className="form-check-label m-0 ms-2">是</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="否" />
              <label className="form-check-label m-0 ms-2">否</label>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            要保人姓名/財務狀況/職業/投保經驗 :
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col col-xl-6">
            <div className="form-label labelName">要保人姓名</div>
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

        <div className="row m-0 p-2 border elife-border-color-1 flex-xl-row flex-column align-items-xl-center">
          <div className="col col-xl-6">
            <div className="form-label labelName">個人工作年收入</div>
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
          <div className="col col-xl-6">
            <div className="form-label labelName">個人其他年收入(如利息、投資等)</div>
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

        <div className="row m-0 p-2 border elife-border-color-1 flex-xl-row flex-column align-items-xl-center">
          <div className="col col-xl-6">
            <div className="form-label labelName">家庭年收入</div>
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
          <div className="col col-xl-6">
            <div className="form-label labelName">個人淨資產(資產扣除負債)</div>
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

        <div className="row m-0 p-2 border elife-border-color-1">
          <label
            className="form-label labelName text-nowrap"
          >是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)
          </label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">是，配偶工作為</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="否" />
              <label className="form-check-label m-0 ms-2">否</label>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label
            className="form-label labelName text-nowrap"
          >是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
            總和。)
          </label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
              <label className="form-check-label m-0 ms-2">是，配偶工作為</label>
              <input
                type="text" className="form-control ms-2" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="否" />
              <label className="form-check-label m-0 ms-2">否</label>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <label
            className="form-label labelName text-nowrap"
          >
            是否已購買其他保險公司之商業保險?
          </label>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="是" />
              <label className="form-check-label m-0 ms-2">是</label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input type="radio" className="form-check-input" name="insuranceSource" value="否" />
              <label className="form-check-label m-0 ms-2">否</label>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            其他財務狀況/職業/投保經驗 :
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div
              className="name labelName"
            >本件身故受益人是否指定為配偶、直系親屬或法定繼承人，且其順位及應得比本次投保具有解約金之商品(不包括小額終老保險、團體年金保險及保險期間在三年以下之傷害保險)或投資型保險商品時，如要保人或被保險人或實際繳交保費之利害關係人之保險年齡依保險業招攬及核保理賠辦法需進行錄音者，請填寫下列欄位
              :
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">本保單保險費付款人是否為要保人或被保險人？
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input"
                name="IsPolicyPremiumPayerPolicyholderOrInsured"
                value="是"
                onChange={handleRadioChange}
              />
              <label className="form-check-label button-spacing me-2">是</label>
              <input
                type="radio" className="form-check-input ms-3"
                name="IsPolicyPremiumPayerPolicyholderOrInsured"
                value="否，原因"
                onChange={handleRadioChange}
              />
              <label className="form-check-label button-spacing">否</label>
            </div>
            {isMinorOrStudent && (
              <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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
              <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">
              配合相關法令規範，確認要保人瞭解商品內容及投保意願或高齡關懷提問，臺銀人壽將視需要電話訪問本保單之要保人、被保險人或實際繳交保費之利害關係人，請轉知客戶知悉，對於電訪時段另有特殊需求者請註明時間:
            </div>
            <label className="form-check-label button-spacing me-2">電訪區間</label>
            <select id="start-time" name="start-time">
              <option value="">--選擇開始時間--</option>
              {generateTimeOptions()}
            </select>
            <label className="form-check-label button-spacing me-2">~</label>
            <select id="end-time" name="end-time">
              <option value="">--選擇結束時間--</option>
              {generateTimeOptions()}
            </select>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">其他有利於核保之資訊：</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1 bg-elife-green-6">
          <div className="labelName m-0 label-styling">
            本次投保具有解約金之商品(不包括小額終老保險、團體年金保險及保險期間在三年以下之傷害保險)或投資型保險商品時，如要保人或被保險人或實際繳交保費之利害關係人之保險年齡依保險業招攬及核保理賠辦法需進行錄音者，請填寫下列欄位。
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">督導主管姓名</div>
            <input type="labelName" name="SupervisorName" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">督導主管登錄字號</div>
            <input type="labelName" name="SupervisorRegistrationNumber" className="form-control" />
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">送件編號</div>
            <input type="labelName" name="SubmissionID" className="form-control" />
          </div>
        </div>
      </div>

    </>
  );
};

export default AgentDisclosureContent;
