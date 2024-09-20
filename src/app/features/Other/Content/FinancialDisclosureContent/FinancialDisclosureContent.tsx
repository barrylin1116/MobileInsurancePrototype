import React from 'react';

const FinancialDisclosureContent: React.FC<any> = () => {
  return (

    <>
      <div className="container">
        <div className="row m-0 p-2 border elife-border-color-1" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            被保險人財務/工作狀況 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">個人工作年收入約(萬元)</div>
            <input type="labelName" name="annualEmploymentIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人其他年收入(如利息、投資等)(萬元)</div>
            <input type="labelName" name="otherYearlyIncome" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">家庭年收入(萬元)</div>
            <input type="labelName" name="householdYearlyIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人淨資產(資產扣除負債)(萬元)</div>
            <input type="labelName" name="netWorth" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">服務單位/職稱</div>
            <input type="labelName" name="householdYearlyIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">工作內容</div>
            <input type="labelName" name="jobDescription" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
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

        <div className="row m-0 p-2 border elife-border-color-1" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            要保人財務/工作狀況 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">個人工作年收入約(萬元)</div>
            <input type="labelName" name="policyholderAnnualEmploymentIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人其他年收入(如利息、投資等)(萬元)</div>
            <input type="labelName" name="policyholderOtherYearlyIncome" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">家庭年收入(萬元)</div>
            <input type="labelName" name="policyholderHouseholdYearlyIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人淨資產(資產扣除負債)(萬元)</div>
            <input type="labelName" name="policyholderNetWorth" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">服務單位/職稱</div>
            <input type="labelName" name="policyholderHouseholdYearlyIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">工作內容</div>
            <input type="labelName" name="policyholderJobDescription" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <label className="form-check-label button-spacing me-2 text-nowrap labelName">與服務單位關係</label>
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check me-3">
              <input
                type="radio" className="form-check-input" name="policyholderServiceRelationship"
                value="所有人"
              />
              <label className="form-check-label button-spacing ">所有人</label>
            </div>
            <div className="form-check me-3">
              <input
                type="radio" className="form-check-input" name="policyholderServiceRelationship"
                value="股東"
              />
              <label className="form-check-label button-spacing ">股東</label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="policyholderServiceRelationship"
                value="其他"
              />
              <label className="form-check-label button-spacing  me-2">受雇:服務</label>
              <input
                type="text" className="form-control button-spacing" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <span className="button-spacing">年</span>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            經濟負擔者財務/工作狀況 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">個人工作年收入約(萬元)</div>
            <input type="labelName" name="dependentAnnualEmploymentIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人其他年收入(如利息、投資等)(萬元)</div>
            <input type="labelName" name="dependentOtherYearlyIncome" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">家庭年收入(萬元)</div>
            <input type="labelName" name="dependentHouseholdYearlyIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">個人淨資產(資產扣除負債)(萬元)</div>
            <input type="labelName" name="dependentNetWorth" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-6">
            <div className="name labelName">服務單位/職稱</div>
            <input type="labelName" name="dependentHouseholdYearlyIncome" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">工作內容</div>
            <input type="labelName" name="dependentJobDescription" className="form-control" />
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
          <label className="form-check-label button-spacing me-2 text-nowrap labelName">與服務單位關係</label>
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check me-3">
              <input
                type="radio" className="form-check-input" name="dependentServiceRelationship"
                value="所有人"
              />
              <label className="form-check-label button-spacing ">所有人</label>
            </div>
            <div className="form-check me-3">
              <input
                type="radio" className="form-check-input" name="dependentServiceRelationship"
                value="股東"
              />
              <label className="form-check-label button-spacing ">股東</label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio" className="form-check-input" name="dependentServiceRelationship"
                value="受雇:服務"
              />
              <label className="form-check-label button-spacing  me-2">受雇:服務</label>
              <input
                type="text" className="form-control button-spacing" placeholder="請說明"
                style={{ width: '150px', marginTop: '0px' }}
              />
              <span className="button-spacing">年</span>
            </div>
          </div>
        </div>

        <div className="row m-0 p-2 border elife-border-color-1" style={{ background: '#edf5f4' }}>
          <div className="labelName m-0 label-styling">
            其他財務狀況 :
          </div>
        </div>
        <div className="row m-0 p-2 border elife-border-color-1">
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
        <div className="row m-0 p-2 border elife-border-color-1">
          <div className="col-12">
            <div className="name labelName">其他補充說明</div>
            <input type="labelName" name="dependentAnnualEmploymentIncome" className="form-control" />
          </div>
        </div>
      </div>

    </>
  );
};
export default FinancialDisclosureContent;
