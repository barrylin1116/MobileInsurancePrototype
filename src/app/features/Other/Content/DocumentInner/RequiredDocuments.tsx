import React, { useRef, useState } from 'react';
import { RequiredDocumentsProps } from './types';
// import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
// import maxzIndexService from '../../../../core/services/maxzIndexService';
import HealthDeclarationForm from '../HealthDeclarationForm/HealthDeclarationForm';
// import NationforAg from '../../components/NationforAg';
import SubmitAndCancelButtonGroup from '../../components/SubmitAndCancelButtonGroup';
import CustomModal2 from '../../../Insurance/pages/Modals/CustomModal2';
import Article from '../../../../common/components/Article';
import CRSPage2 from '../CRS/CRSPage2';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/types';
import GeneralDiseaseQuestionnaire from '../GeneralDiseaseQuestionnaire/GeneralDiseaseQuestionnaire';
import Checkbox from '../../../../common/components/Checkbox';
import ThyroidDiseaseQuestionnaire from '../ThyroidDiseaseQuestionnaire';
import HepatitisOrHepatitisCarrierQuestionnaire from '../HepatitisOrHepatitisCarrierQuestionnaire';
import UrinarySystemDiseaseQuestionnaire from '../UrinarySystemDiseaseQuestionnaire';
import { EPolicyApplication } from '../EPolicyApplication';
import modalService from '../../../../core/services/modalService';
import { ModalNamesEnum } from '../../../../core/enums/ui/modals';
import InsuranceRightsConfirmationContent
  from '../InsuranceRightsConfirmationContent/InsuranceRightsConfirmationContent';
import ReviewPeriodConfirmationContent from '../ReviewPeriodConfirmationContent';
import FinancialDisclosureContent from '../FinancialDisclosureContent';
import DataUsageNoticeContent from '../DataUsageNoticeContent/DataUsageNoticeContent';
import ApplicationInstructionsContent from '../ApplicationInstructionsContent';
import PolicyholderInfoContent from '../PolicyholderInfoContent';
import AgentDisclosureContent from '../AgentDisclosureContent';

const RequiredDocuments: React.FC<RequiredDocumentsProps> = (props) => {
  const requiredDocumentsList2 = useSelector((state: RootState) => state.common.requiredDocumentsList);
  const [hintModalVisible, setHintModalVisible] = useState(false);
  const [hintModalProps, setHintModalProps] = useState<any>(null);
  // const [isMinorOrStudent, setIsMinorOrStudent] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態
  // const [isMinorOrStudent2, setIsMinorOrStudent2] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態
  const HealthDeclarationFormRef = useRef<any>(null);

  // const [insuredName, setInsuredName] = useState<string>('');
  // const [insuredAnnualIncome, setInsuredAnnualIncome] = useState<string>('');
  // const [insuredOtherIncome, setInsuredOtherIncome] = useState<string>('');
  // const [insuredHouseholdIncome, setInsuredHouseholdIncome] = useState<string>('');
  // const [insuredNetAssets, setInsuredNetAssets] = useState<string>('');

  // const [nameError, setNameError] = useState<boolean>(false);
  // const [annualIncomeError, setAnnualIncomeError] = useState<boolean>(false);
  // const [otherIncomeError, setOtherIncomeError] = useState<boolean>(false);
  // const [householdIncomeError, setHouseholdIncomeError] = useState<boolean>(false);
  // const [netAssetsError, setNetAssetsError] = useState<boolean>(false);

  const [currentCRSStep, setCurrentCRSStep] = useState(0);
  const CRSContentRef = useRef<HTMLDivElement>(null);
  const [isCRSButtonEnabled, setCRSButtonEnabled] = useState(false);

  const HealthDeclarationFormVisible = useSelector((state: RootState) => state.UI.modals.HealthDeclarationFormVisible);
  const InsuranceRightsConfirmationVisible = useSelector((state: RootState) => state.UI.modals.InsuranceRightsConfirmationVisible);
  const ReviewPeriodConfirmationVisible = useSelector((state: RootState) => state.UI.modals.ReviewPeriodConfirmationVisible);
  const FinancialDisclosureVisible = useSelector((state: RootState) => state.UI.modals.FinancialDisclosureVisible);
  const DataUsageNoticeVisible = useSelector((state: RootState) => state.UI.modals.DataUsageNoticeVisible);
  const ApplicationInstructionsVisible = useSelector((state: RootState) => state.UI.modals.ApplicationInstructionsVisible);
  const PolicyholderInfoVisible = useSelector((state: RootState) => state.UI.modals.PolicyholderInfoVisible);
  const EPolicyApplicationVisible = useSelector((state: RootState) => state.UI.modals.EPolicyApplicationVisible);
  const HealthQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.HealthQuestionnaireVisible);
  const CRSFormVisible = useSelector((state: RootState) => state.UI.modals.CRSFormVisible);
  const AgentDisclosureVisible = useSelector((state: RootState) => state.UI.modals.AgentDisclosureVisible);
  const GeneralDiseaseQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.GeneralDiseaseQuestionnaireVisible);
  const ThyroidDiseaseQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.ThyroidDiseaseQuestionnaireVisible);
  const HepatitisOrHepatitisCarrierQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.HepatitisOrHepatitisCarrierQuestionnaireVisible);
  const UrinarySystemDiseaseQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.UrinarySystemDiseaseQuestionnaireVisible);
  const EsophagusStomachQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.EsophagusStomachQuestionnaireVisible);
  const BronchialDiseaseQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.BronchialDiseaseQuestionnaireVisible);
  const HypertensionQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.HypertensionQuestionnaireVisible);
  const HyperuricemiaQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.HyperuricemiaQuestionnaireVisible);
  const DiabetesQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.DiabetesQuestionnaireVisible);
  const EpilepsyQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.EpilepsyQuestionnaireVisible);
  const HeartDiseaseQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.HeartDiseaseQuestionnaireVisible);
  const TumorAndPolypQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.TumorAndPolypQuestionnaireVisible);
  const PoliomyelitisQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.PoliomyelitisQuestionnaireVisible);
  const TraumaAndSkeletalInjuryQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.TraumaAndSkeletalInjuryQuestionnaireVisible);
  const EyeDiseaseQuestionnaireVisible = useSelector((state: RootState) => state.UI.modals.EyeDiseaseQuestionnaireVisible);
  const [currentModalKey, setCurrentModalKey] = useState<string[]>([]);
  // const generateTimeOptions = () => {
  //   const options = [];
  //   for (let hour = 0; hour <= 24; hour++) {
  //     const timeString = hour.toString().padStart(2, '0') + ':00';
  //     options.push(
  //       <option key={timeString} value={timeString}>
  //         {timeString}
  //       </option>
  //     );
  //   }
  //   return options;
  // };

  const openModal2 = (key: string, index: number) => {
    modalService.trigger(ModalNamesEnum[key as keyof typeof ModalNamesEnum], true);
    setCurrentModalKey([...currentModalKey, key]);
  };

  // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setIsMinorOrStudent(value === '否，原因');
  // };
  //
  // const handleRadioChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setIsMinorOrStudent2(value === '是');
  // };
  //
  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setInsuredName(value);
  //   setNameError(value !== '安安' && value !== '');
  // };
  //
  // const handleAnnualIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setInsuredAnnualIncome(value);
  //   setAnnualIncomeError(value !== '999999999999' && value !== '');
  // };
  //
  // const handleOtherIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setInsuredOtherIncome(value);
  //   setOtherIncomeError(value !== '999999999999' && value !== '');
  // };
  //
  // const handleHouseholdIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setInsuredHouseholdIncome(value);
  //   setHouseholdIncomeError(value !== '999999999999' && value !== '');
  // };
  //
  // const handleNetAssetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setInsuredNetAssets(value);
  //   setNetAssetsError(value !== '999999999999' && value !== '');
  // };

  // const getAgentDisclosureContent = () => {
  //   return (
  //
  //     <>
  //       <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
  //         <div className="labelName m-0 label-styling">
  //           投保案件分析 :
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <label className="form-check-label button-spacing me-2 text-nowrap labelName">投保來源：</label>
  //         <div className="d-flex flex-wrap align-items-center">
  //           <div className="form-check me-3">
  //             <input type="radio" className="form-check-input" name="insuranceSource" value="主動投保" />
  //             <label className="form-check-label button-spacing ">主動投保</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="radio" className="form-check-input" name="insuranceSource"
  //               value="銀行/證券客戶"
  //             />
  //             <label className="form-check-label button-spacing ">銀行/證券客戶</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input type="radio" className="form-check-input" name="insuranceSource" value="親屬" />
  //             <label className="form-check-label button-spacing ">親屬</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input type="radio" className="form-check-input" name="insuranceSource" value="朋友" />
  //             <label className="form-check-label button-spacing ">朋友</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input type="radio" className="form-check-input" name="insuranceSource" value="陌生拜訪" />
  //             <label className="form-check-label button-spacing ">陌生拜訪</label>
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
  //             <label className="form-check-label button-spacing  me-2">其他</label>
  //             <input
  //               type="text" className="form-control" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //           </div>
  //         </div>
  //
  //       </div>
  //
  //       <div className="row custom-box">
  //         <label className="form-check-label button-spacing me-2 text-nowrap labelName">保險目的：</label>
  //         <div className="d-flex flex-wrap align-items-center">
  //           <div className="form-check me-3">
  //             <input type="checkbox" className="form-check-input" name="insurancePurpose" value="保障" />
  //             <label className="form-check-label button-spacing">保障</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="checkbox" className="form-check-input" name="insurancePurpose"
  //               value="子女教育經費"
  //             />
  //             <label className="form-check-label button-spacing">子女教育經費</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="checkbox" className="form-check-input" name="insurancePurpose"
  //               value="退休規劃"
  //             />
  //             <label className="form-check-label button-spacing">退休規劃</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="checkbox" className="form-check-input" name="insurancePurpose"
  //               value="房屋貸款"
  //             />
  //             <label className="form-check-label button-spacing">房屋貸款</label>
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input type="checkbox" className="form-check-input" name="insurancePurpose" value="其他" />
  //             <label className="form-check-label button-spacing me-2">其他</label>
  //             <input
  //               type="text" className="form-control" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="row custom-box">
  //         <label
  //           className="form-check-label button-spacing me-2 text-nowrap labelName"
  //         >本保件家中主要經濟來源者(指個人年收入佔家庭年收入比例最高者)：
  //         </label>
  //         <div className="d-flex flex-wrap align-items-center">
  //           <div className="form-check me-3">
  //             <input
  //               type="radio" className="form-check-input" name="primaryIncomeSource"
  //               value="被保險人"
  //             />
  //             <label className="form-check-label button-spacing">被保險人</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input type="radio" className="form-check-input" name="primaryIncomeSource" value="要保人" />
  //             <label className="form-check-label button-spacing">要保人</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="radio" className="form-check-input" name="primaryIncomeSource"
  //               value="要保人之配偶"
  //             />
  //             <label className="form-check-label button-spacing">要保人之配偶</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="radio" className="form-check-input" name="primaryIncomeSource"
  //               value="要保人之父母"
  //             />
  //             <label className="form-check-label button-spacing">要保人之父母</label>
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input type="radio" className="form-check-input" name="primaryIncomeSource" value="其他" />
  //             <label className="form-check-label button-spacing me-2">其他</label>
  //             <input
  //               type="text" className="form-control" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="row custom-box">
  //         <label
  //           className="form-check-label button-spacing me-2 text-nowrap labelName"
  //         >本保件之保險費來源(可複選)：
  //         </label>
  //         <div className="d-flex flex-wrap align-items-center">
  //           <div className="form-check me-3">
  //             <input type="checkbox" className="form-check-input" name="insurancePurpose" value="薪資" />
  //             <label className="form-check-label button-spacing">薪資</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input type="checkbox" className="form-check-input" name="insurancePurpose" value="存款" />
  //             <label className="form-check-label button-spacing">存款</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input type="checkbox" className="form-check-input" name="insurancePurpose" value="退休金" />
  //             <label className="form-check-label button-spacing">退休金</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="checkbox" className="form-check-input" name="insurancePurpose"
  //               value="投資收入"
  //             />
  //             <label className="form-check-label button-spacing">投資收入</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="checkbox" className="form-check-input" name="insurancePurpose"
  //               value="財產繼承"
  //             />
  //             <label className="form-check-label button-spacing">財產繼承</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input type="checkbox" className="form-check-input" name="insurancePurpose" value="貸款" />
  //             <label className="form-check-label button-spacing">貸款</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="checkbox" className="form-check-input" name="insurancePurpose"
  //               value="保單解約"
  //             />
  //             <label className="form-check-label button-spacing">保單解約</label>
  //           </div>
  //           <div className="form-check me-3">
  //             <input
  //               type="checkbox" className="form-check-input" name="insurancePurpose"
  //               value="保單借款"
  //             />
  //             <label className="form-check-label button-spacing">保單借款</label>
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input type="checkbox" className="form-check-input" name="insurancePurpose" value="其他" />
  //             <label className="form-check-label button-spacing me-2">其他</label>
  //             <input
  //               type="text" className="form-control" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
  //         <div className="labelName m-0 label-styling">
  //           被保險人姓名/財務狀況/職業/投保經驗 :
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">被保險人姓名</div>
  //           <input
  //             type="text"
  //             name="insuredName"
  //             className="form-control"
  //             value={insuredName}
  //             onChange={handleNameChange}
  //           />
  //           {nameError && (
  //             <div style={{ color: 'red', marginTop: '5px' }}>
  //               被保險人姓名不一致！
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">個人工作年收入</div>
  //           <input
  //             type="text"
  //             name="insuredAnnualIncome"
  //             className="form-control"
  //             value={insuredAnnualIncome}
  //             onChange={handleAnnualIncomeChange}
  //           />
  //           {annualIncomeError && (
  //             <div style={{ color: 'red', marginTop: '5px' }}>
  //               個人工作年收入不一致！
  //             </div>
  //           )}
  //         </div>
  //         <div className="col-6">
  //           <div className="name labelName">個人其他年收入(如利息、投資等)</div>
  //           <input
  //             type="text"
  //             name="insuredOtherIncome"
  //             className="form-control"
  //             value={insuredOtherIncome}
  //             onChange={handleOtherIncomeChange}
  //           />
  //           {otherIncomeError && (
  //             <div style={{ color: 'red', marginTop: '5px' }}>
  //               個人其他年收入不一致！
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">家庭年收入</div>
  //           <input
  //             type="text"
  //             name="insuredHouseholdIncome"
  //             className="form-control"
  //             value={insuredHouseholdIncome}
  //             onChange={handleHouseholdIncomeChange}
  //           />
  //           {householdIncomeError && (
  //             <div style={{ color: 'red', marginTop: '5px' }}>
  //               家庭年收入不一致！
  //             </div>
  //           )}
  //         </div>
  //         <div className="col-6">
  //           <div className="name labelName">個人淨資產(資產扣除負債)</div>
  //           <input
  //             type="text"
  //             name="insuredNetAssets"
  //             className="form-control"
  //             value={insuredNetAssets}
  //             onChange={handleNetAssetsChange}
  //           />
  //           {netAssetsError && (
  //             <div style={{ color: 'red', marginTop: '5px' }}>
  //               個人淨資產不一致！
  //             </div>
  //           )}
  //         </div>
  //
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)</div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="maritalStatus"
  //               value="是，配偶工作為"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input type="radio" className="form-check-input ms-3" name="maritalStatus" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
  //             總和。)
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="minorOrStudentStatus"
  //               value="是，父母或法定代理人工作為"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input
  //               type="radio" className="form-check-input ms-3" name="minorOrStudentStatus"
  //               value="否"
  //             />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">是是否已購買其他保險公司之商業保險?
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="otherInsuranceStatus"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input
  //               type="radio" className="form-check-input ms-3" name="otherInsuranceStatus"
  //               value="否"
  //             />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
  //         <div className="labelName m-0 label-styling">
  //           要保人姓名/財務狀況/職業/投保經驗 :
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">要保人姓名</div>
  //           <input type="labelName" name="rocId" className="form-control" />
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">個人工作年收入</div>
  //           <input type="labelName" name="rocId" className="form-control" />
  //         </div>
  //         <div className="col-6">
  //           <div className="name labelName">個人其他年收入(如利息、投資等)</div>
  //           <input type="labelName" name="rocId" className="form-control" />
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">家庭年收入</div>
  //           <input type="labelName" name="rocId" className="form-control" />
  //         </div>
  //         <div className="col-6">
  //           <div className="name labelName">個人淨資產(資產扣除負債)</div>
  //           <input type="labelName" name="rocId" className="form-control" />
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)</div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="maritalStatus2"
  //               value="是，配偶工作為"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input type="radio" className="form-check-input ms-3" name="maritalStatus2" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
  //             總和。)
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="minorOrStudentStatus2"
  //               value="是，父母或法定代理人工作為"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，配偶工作為</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input
  //               type="radio" className="form-check-input ms-3" name="minorOrStudentStatus2"
  //               value="否"
  //             />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">是是否已購買其他保險公司之商業保險?
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="otherInsuranceStatus2"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input
  //               type="radio" className="form-check-input ms-3" name="otherInsuranceStatus2"
  //               value="否"
  //             />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
  //         <div className="labelName m-0 label-styling">
  //           其他財務狀況/職業/投保經驗 :
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div
  //             className="name labelName"
  //           >本件身故受益人是否指定為配偶、直系親屬或法定繼承人，且其順位及應得比本次投保具有解約金之商品(不包括小額終老保險、團體年金保險及保險期間在三年以下之傷害保險)或投資型保險商品時，如要保人或被保險人或實際繳交保費之利害關係人之保險年齡依保險業招攬及核保理賠辦法需進行錄音者，請填寫下列欄位
  //             :
  //             例適用民法繼承編相關規定？
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa6"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input type="radio" className="form-check-input ms-3" name="sa6" value="否，原因" />
  //             <label className="form-check-label button-spacing">否，原因</label>
  //             <input
  //               type="text" className="form-control me-3 button-spacing" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">本件身故受益人是否指定為配偶、直系親屬或法定繼承人，且其順位及應得比
  //             例適用民法繼承編相關規定？
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa6"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input type="radio" className="form-check-input ms-3" name="sa6" value="否，原因" />
  //             <label className="form-check-label button-spacing">否，原因</label>
  //             <input
  //               type="text" className="form-control me-3 button-spacing" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">本保單保險費付款人是否為要保人或被保險人？
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input"
  //               name="IsPolicyPremiumPayerPolicyholderOrInsured"
  //               value="是"
  //               onChange={handleRadioChange}
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input
  //               type="radio" className="form-check-input ms-3"
  //               name="IsPolicyPremiumPayerPolicyholderOrInsured"
  //               value="否，原因"
  //               onChange={handleRadioChange}
  //             />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //           {isMinorOrStudent && (
  //             <div className="row custom-box">
  //               <div className="col-6">
  //                 <div className="name labelName-Ag">付款人姓名</div>
  //                 <input type="labelName" name="rocId" className="form-control" />
  //               </div>
  //               <div className="col-6">
  //                 <div className="name labelName-Ag">與要保人關係</div>
  //                 <select name="relationshipToPolicyholder" className="form-control">
  //                   <option value="">請選擇</option>
  //                   <option value="父母">父母</option>
  //                   <option value="配偶">配偶</option>
  //                   <option value="子女">子女</option>
  //                   <option value="兄弟姐妹">兄弟姐妹</option>
  //                   <option value="祖父母">祖父母</option>
  //                   <option value="孫子女">孫子女</option>
  //                   <option value="其他">其他</option>
  //                 </select>
  //               </div>
  //               <div className="col-6">
  //                 <div className="name labelName-Ag">身分證統一編號</div>
  //                 <input type="labelName" name="rocId" className="form-control" />
  //               </div>
  //               <div className="col-6">
  //                 <div className="name labelName-Ag">出生日期</div>
  //                 <DatePickerTW
  //                   name="birthday" className="form-control" onChange={() => {
  //                   }}
  //                 />
  //               </div>
  //               <div className="col-6">
  //                 <NationforAg />
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">以未成年人為要保人或被保險人，請以正楷填 寫法定代理人之姓名/身分證統一編號/出生日
  //             期/國籍/居住地/連絡電話？(如法定代理人為 本保單之要保人或被保險人，本項免填)
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="MinorInsuredGuardianDetails"
  //               value="是"
  //               onChange={handleRadioChange2}
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input
  //               type="radio" className="form-check-input ms-3" name="MinorInsuredGuardianDetails"
  //               value="否，原因"
  //               onChange={handleRadioChange2}
  //             />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //           {isMinorOrStudent2 && (
  //             <div className="row custom-box">
  //               <div className="col-6">
  //                 <div className="name labelName-Ag">法定代理人姓名</div>
  //                 <input type="labelName" name="rocId" className="form-control" />
  //               </div>
  //               <div className="col-6">
  //                 <div className="name labelName-Ag">身分證統一編號</div>
  //                 <input type="labelName" name="rocId" className="form-control" />
  //               </div>
  //               <div className="col-6">
  //                 <div
  //                   className="name labelName-Ag"
  //                   style={{
  //                     zIndex: maxzIndexService.getMaxZIndex() + 10 // 注意括號
  //                   }}
  //                 >
  //                   出生日期
  //                 </div>
  //                 <DatePickerTW
  //                   name="birthday2" className="form-control" onChange={() => {
  //                   }}
  //                 />
  //               </div>
  //               <div className="col-6">
  //                 <div className="name labelName-Ag">連絡電話</div>
  //                 <input type="labelName" name="rocId" className="form-control" />
  //               </div>
  //               <div className="col-6">
  //                 <NationforAg />
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">
  //             (1) 招攬時，是否已確認要保人及被保險人符合投保之條件?<br />
  //             (2) 本保單規劃是否已考量要保人及被保險人之保險需求，確認保單適合度、投保險種、保險費、保險金額與要保人或被保險人收入、財務狀況及職業之相當性及付費能力？<br />
  //             (3) 招攬時，是否已向要保人及被保險人確認要保人與被保險人，及被保險人與受益人之關係?<br />
  //             (4)
  //             招攬時，是否已確認要保人、被保險人及受益人身分？有關要保人與被保險人所提供之身分證明文件(身分證、護照、駕照，或其他足資證明其身分之文件等；若為法人者，為法人之名稱、代表人、地址、聯絡電話)是否與要保書所填載之內容相符？<br />
  //             (5) 是否確認要保人已瞭解其所繳交保險費係用以購買保險商品？<br />
  //             (6) 招攬時，是否親晤要保人/被保險人/法定代理人並確認要保人/被保險人/法定代理人親簽相關要保文件？<br />
  //             (7)
  //             招攬時，是否已向要保人說明本次購買保險商品內容、繳納保險費方式、繳費年期、領取各種給付項目與解約金內容？<br />
  //             (8) 招攬時，是否未勸誘要保人/被保險人/實際繳交保費之利害關係人以辦理貸款、保單解約、保單借款或定存解約利息免打折等財務槓桿方式繳交保險費？<br />
  //             (9) 招攬投資型保險商品時，是否已考量要保人之投資屬性、風險承受能力，並確定要保人已確實瞭解投資型保險之投資損益係由其自行承擔，且未提供逾越要保人財力狀況或不合適之商品？<br />
  //             (10) 招攬以外幣收付之保險商品時，是否已向要保人確認有外幣需求及承擔匯率風險的能力?<br />
  //             (11) 招攬分紅保單時，本人已確實告知要保人保單紅利為非保證給付項目，可能會變動為較高或較低之數字，本人未向要保人做任何保證。
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="qa"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input type="radio" className="form-check-input ms-3" name="qa" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">投保前三個月內要保人/被保險人/實際繳交保費之利害關係人是否有辦理貸款、保
  //             單解約或保單借款？
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa10"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input type="radio" className="form-check-input ms-3" name="sa10" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">要保書或保險相關文件所載要保人及被保險人之住所或居所(通訊)地址，是否
  //             為招攬業務員本人之住所或居所(通訊)地址或為所屬保險代理人、保險經紀人、 銀行及其分支機構之營業處所？
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa11"
  //               value="是，原因<"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，原因</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input type="radio" className="form-check-input ms-3" name="sa11" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">要保人是否為外籍人士？若是，請說明居留目的。
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa12"
  //               value="是，原因<"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，原因</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input type="radio" className="form-check-input ms-3" name="sa12" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">過去一年內要保人是否居住於中華民國境外超過半年以上？若是，請說明居住
  //             國家(地區) 。
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa13"
  //               value="是，原因<"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，原因</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input type="radio" className="form-check-input ms-3" name="sa13" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">要保人或被保險人是否是現任(或曾任)國內外政府或國際組織之重要政治性職
  //             務人士(如：中央或地方民意代表、公務機關首長)？若是，請說明。
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa14"
  //               value="是，原因<"
  //             />
  //             <label className="form-check-label button-spacing me-2">是，原因</label>
  //             <input
  //               type="text" className="form-control me-3" placeholder="請說明"
  //               style={{ width: '150px', marginTop: '0px' }}
  //             />
  //             <input type="radio" className="form-check-input ms-3" name="sa14" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">要保人購買保險商品時，是否對於保障內容或給付項目完全不關心，抑或對於具
  //             高保單價值準備金或具高現金價值或躉繳保費之保險商品，僅關注保單借款、解約或變更受益人等程序？
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa15"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input type="radio" className="form-check-input ms-3" name="sa15" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">對65歲以上客戶（要保人或被保險人或實際繳交保費之利害關係人）之投保案件，
  //             是否就該客戶具有辨識不利其投保權益情形之能力、保險商品適合該客戶及評估理由，並做成「高齡投保評估量表」評估紀錄？(投保商品非為具潛在影響及各種
  //             不利因素適用之商品，本項免填)
  //           </div>
  //           <div className="form-check d-flex align-items-center">
  //             <input
  //               type="radio" className="form-check-input" name="sa16"
  //               value="是"
  //             />
  //             <label className="form-check-label button-spacing me-2">是</label>
  //             <input type="radio" className="form-check-input ms-3" name="sa16" value="否" />
  //             <label className="form-check-label button-spacing">否</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-12">
  //           <div className="name labelName">
  //             配合相關法令規範，確認要保人瞭解商品內容及投保意願或高齡關懷提問，臺銀人壽將視需要電話訪問本保單之要保人、被保險人或實際繳交保費之利害關係人，請轉知客戶知悉，對於電訪時段另有特殊需求者請註明時間:
  //           </div>
  //           <label className="form-check-label button-spacing me-2">電訪區間</label>
  //           <select id="start-time" name="start-time">
  //             <option value="">--選擇開始時間--</option>
  //             {generateTimeOptions()}
  //           </select>
  //           <label className="form-check-label button-spacing me-2">~</label>
  //           <select id="end-time" name="end-time">
  //             <option value="">--選擇結束時間--</option>
  //             {generateTimeOptions()}
  //           </select>
  //         </div>
  //       </div>
  //
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">其他有利於核保之資訊：</div>
  //           <input type="labelName" name="rocId" className="form-control" />
  //         </div>
  //       </div>
  //       <div className="row m-0 p-2" style={{ background: '#edf5f4' }}>
  //         <div className="labelName m-0 label-styling">
  //           本次投保具有解約金之商品(不包括小額終老保險、團體年金保險及保險期間在三年以下之傷害保險)或投資型保險商品時，如要保人或被保險人或實際繳交保費之利害關係人之保險年齡依保險業招攬及核保理賠辦法需進行錄音者，請填寫下列欄位。
  //         </div>
  //       </div>
  //
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">錄音序號</div>
  //           <input type="labelName" name="RecordingSerialNumber" className="form-control" />
  //         </div>
  //         <div className="col-6">
  //           <div className="name labelName">錄音日期</div>
  //           <DatePickerTW
  //             name="RecordingDate" className="form-control" onChange={() => {
  //             }}
  //           />
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">督導主管姓名</div>
  //           <input type="labelName" name="SupervisorName" className="form-control" />
  //         </div>
  //         <div className="col-6">
  //           <div className="name labelName">督導主管登錄字號</div>
  //           <input type="labelName" name="SupervisorRegistrationNumber" className="form-control" />
  //         </div>
  //       </div>
  //       <div className="row custom-box">
  //         <div className="col-6">
  //           <div className="name labelName">送件編號</div>
  //           <input type="labelName" name="SubmissionID" className="form-control" />
  //         </div>
  //       </div>
  //
  //     </>
  //   )
  //   ;
  // };

  const openHintModal = (param: any) => {
    setHintModalProps({
      action: param.action,
      title: param.title
    });
    setHintModalVisible(true);
  };

  const handleCancel = (key: string) => {
    // setModal2Visible(false);
    modalService.trigger(ModalNamesEnum[key as keyof typeof ModalNamesEnum], false);
  };
  const handleOk = (key: string) => {
    // setModal2Visible(false);
    modalService.trigger(ModalNamesEnum[key as keyof typeof ModalNamesEnum], false);
  };

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getModalHeader = (key: any, index: number) => {
    switch (key) {
      case 'HealthDeclarationForm': // 健康告知書
        return (
          <div className="w-100 position-relative d-flex align-items-center justify-content-center">
            {requiredDocumentsList2
              ? requiredDocumentsList2.find((doc: any) => doc.key === key)?.title || ''
              : ''}
            <div className="position-absolute right">
              <button
                type="button"
                className="btn btn-custom btn-elife-modal-outline-green mx-1 InsuranceButton"
                onClick={() => openHintModal({ title: '文件已儲存。', action: 'complete' })}
              >
                完成
              </button>
              <button
                type="button"
                className="btn btn-custom btn-elife-green border-white mx-1 InsuranceButton"
                onClick={() => openHintModal({
                  title: '文件修改內容將不會儲存，是否確認離開此文件?',
                  action: 'cancel'
                })}
              >
                取消
              </button>
            </div>
          </div>
        );
      case 'CRSForm':
        return (
          <div className="w-100 position-relative d-flex align-items-center justify-content-center">
            {/* {requiredDocumentsList2 ? requiredDocumentsList2[index].title : ''} */}
            {requiredDocumentsList2
              ? requiredDocumentsList2.find((doc: any) => doc.key === key)?.title || ''
              : ''}
            <div className="position-absolute right">
              {
                    currentCRSStep === 0 && (
                      <>
                        <button
                          type="button"
                          className="btn btn-custom btn-elife-modal-outline-green mx-1 InsuranceButton"
                          onClick={() => setCurrentCRSStep(currentCRSStep + 1)}
                          disabled={!isCRSButtonEnabled}
                        >
                          <div className="row">
                            <div
                              className="col-lg-12"
                            >下一步
                            </div>
                          </div>
                        </button>
                        <button
                          type="button"
                          className="btn btn-custom btn-elife-green border-white mx-1 InsuranceButton"
                        >
                          <div className="row">
                            <div
                              className="col-lg-12" onClick={() => openHintModal({
                                title: '文件修改內容將不會儲存，是否確認離開此文件?',
                                action: 'cancel'
                              })}
                            >取消
                            </div>
                          </div>
                        </button>
                      </>
                    )
                }
              {
                    currentCRSStep === 1 && (
                      <>
                        <button
                          type="button"
                          className="btn btn-custom btn-elife-modal-outline-green mx-1 InsuranceButton"
                          onClick={() => {
                            setCurrentCRSStep(0);
                            handleCancel('CRSForm');
                          }}
                        >
                          完成
                        </button>
                        <button
                          type="button"
                          className="btn btn-custom btn-elife-green border-white mx-1 InsuranceButton"
                          onClick={() => {
                            setCurrentCRSStep(0);
                            handleCancel('CRSForm');
                          }}
                        >
                          取消
                        </button>
                      </>
                    )
                }

            </div>
          </div>
        );
      default:
        return (
          <div className="w-100 position-relative d-flex align-items-center justify-content-center">
            {requiredDocumentsList2
              ? requiredDocumentsList2.find((doc: any) => doc.key === key)?.title || ''
              : ''}
            <div className="position-absolute right">
              <button
                type="button"
                className="btn btn-custom btn-elife-modal-outline-green mx-1 InsuranceButton"
                onClick={() => openHintModal({ title: '文件已儲存。', action: 'complete' })}
              >
                完成
              </button>
              <button
                type="button"
                className="btn btn-custom btn-elife-green border-white mx-1 InsuranceButton"
                onClick={() => openHintModal({
                  title: '文件修改內容將不會儲存，是否確認離開此文件?',
                  action: 'cancel'
                })}
              >
                取消
              </button>
            </div>
          </div>
        );
    }
  };

  const getFormContent2 = (key?: string) => {
    switch (key) {
      case 'HealthDeclarationForm':
        return (
          <HealthDeclarationForm
            ref={HealthDeclarationFormRef}
            requiredDocumentsList={requiredDocumentsList2}
          />
        );
      case 'InsuranceRightsConfirmation':
        return <InsuranceRightsConfirmationContent />;
      case 'ReviewPeriodConfirmation':
        return <ReviewPeriodConfirmationContent />;
      case 'FinancialDisclosure':
        return <FinancialDisclosureContent />;
      case 'DataUsageNotice':
        return <DataUsageNoticeContent />;
      case 'ApplicationInstructions':
        return <ApplicationInstructionsContent />;
      case 'PolicyholderInfo':
        return <PolicyholderInfoContent />;
      case 'AgentDisclosure':
        return <AgentDisclosureContent />;
      case 'CRSForm':
        if (currentCRSStep === 0) {
          return (
            <>
              {/* <ArticleDisplayerFieldNotification onScrollToBottom={handleScrollToBottom} /> */}

              <Article
                ref={CRSContentRef}
                onScrollToBottom={
                      () => setCRSButtonEnabled(true)
                    }
                footer={
                      (
                        // <div className="checkbox-container">
                        //   <input
                        //     type="checkbox" className="form-check-input" id="confirmNotification"
                        //     disabled={!isCRSButtonEnabled}
                        //   />
                        //   <label htmlFor="confirm">本人已閱覽相關文件</label>
                        // </div>
                        <div className="row justify-content-center align-items-center py-2">
                          <div className="col-12 d-flex justify-content-center align-items-center">
                            <Checkbox
                              className="d-flex align-items-center labelName"
                              classNames={{ labelClass: 'ms-2', inputClass: '' }}
                              disabled={!isCRSButtonEnabled}
                            >
                              本人已閱覽相關文件
                            </Checkbox>
                          </div>
                        </div>
                      )
                }
              >
                <p> 1.
                  金融機構執行共同申報及盡職審查作業辦法(下稱本辦法)規定，金融機構應蒐集及申報有關帳戶持有人稅務居住者身分之特定資訊。本辦法係依稅捐稽徵法第5條之1第6項訂定，其內容參考經濟合作暨發展組織發布之共同申報及盡職審查準則(下稱共同申報準則)。
                  Under the Regulations Governing the Implementation of the Common Standard on Reporting
                  and
                  Due
                  Diligence for Financial Institutions (“Regulations”), Financial Institutions (“FIs”)
                  are
                  required
                  to
                  collect and report certain information about the Account Holder’s tax residency
                  status.
                  The
                  Regulations are enacted pursuant to Paragraph 6, Article 5-1 of the Tax Collection Act
                  and
                  are
                  drafted in reference to the Common Standard on Reporting and Due Diligence for
                  Financial
                  Account
                  Information (CRS) developed by the Organization for Economic Cooperation and
                  Development
                  (OECD).
                </p>
                <p> 2.
                  金融機構依本辦法規定取得帳戶持有人之自我證明文件，以辨識帳戶持有人為稅務居住者之國家/地區。金融機構依法可能將本表及該帳戶其他資訊提供中華民國稅捐稽徵機關，經由政府間協定進行稅務目的金融帳戶資訊交換，提供他方國家/地區稅捐稽徵機關。
                  Under the Regulations, FIs obtain a self-certification form from the Account Holder to
                  determine
                  the
                  country(ies)/jurisdiction(s) in which the Account Holder is a tax resident. The FIs
                  may be
                  legally
                  obliged to pass on the information in this form and other financial information with
                  respect
                  to
                  the
                  account to the tax authorities of the Republic of China (Taiwan)(“ROC”) and they may
                  exchange
                  this
                  information with tax authorities of another country(ies)/jurisdiction(s) pursuant to
                  intergovernmental agreements to exchange financial account information for tax
                  purposes.
                </p>
                <p> 3. 標有星號（*）欄位或部分為必填資訊。
                  Information in fields or parts marked with an asterisk (*) is mandatory.
                </p>
                <p> 4. 本表將持續有效，倘狀態變動（例如帳戶持有人之稅務居住者身分變動）致所填資訊不正確或不完整，帳戶持有人應通知金融機構，並更新本表。
                  This form will remain valid unless there is a change in circumstances relating to
                  information,
                  such
                  as the Account Holder’s tax residency status, that makes this form incorrect or
                  incomplete.
                  In
                  that
                  case, the Account Holder must notify the FI and provide an updated self-certification
                  form.
                </p>
                <p> 5. 本表相關用詞(如帳戶持有人、稅籍編號、金融帳戶等)，請詳本辦法。
                  The definition of the capitalized terms used in this form, such as Account Holder,
                  TIN,
                  Financial
                  Account, etc. can be found in the Regulations.
                </p>
              </Article>
            </>

          );
        }
        if (currentCRSStep === 1) {
          return (
            <CRSPage2 />
          );
        }
        break;
      case 'GeneralDiseaseQuestionnaire':
        return (<GeneralDiseaseQuestionnaire />);
      case 'ThyroidDiseaseQuestionnaire':
        return (<ThyroidDiseaseQuestionnaire />);
      case 'HepatitisOrHepatitisCarrierQuestionnaire':
        return (<HepatitisOrHepatitisCarrierQuestionnaire />);
      case 'UrinarySystemDiseaseQuestionnaire':
        return (<UrinarySystemDiseaseQuestionnaire />);
      case 'EPolicyApplication':
        return (<EPolicyApplication />);
      default:
        return '';
    }
    ;
  };

  const getShowFooter = (key: any) => {
    switch (key) {
      case 'HealthDeclarationForm': // 健康告知書（被保人）
        return false;
      case 'InsuranceRightsConfirmation': // 投保權益確認書
        return false;
      case 'ReviewPeriodConfirmation': // 審閱期間確認聲明書
        return false;
      case 'FinancialDisclosure': // 財務狀況告知書
        return false;
      case 'DataUsageNotice': // 個人資料蒐集、處理、利用告知事項
        return false;
      case 'ApplicationInstructions': // 要保書填寫說明
        return false;
      case 'PolicyholderInfo': // 人壽保險投保人須知
        return false;
      case 'EPolicyApplication': // 電子保單申請書
        return false;
      case 'HealthQuestionnaire': // 疾病問券
        return false;
      case 'CRSForm': // CRS自我證明表
        return false;
      case 'AgentDisclosure': // 業告書
        return false;
      case 'GeneralDiseaseQuestionnaire': // 一般疾病問卷
        return false;
      case 'ThyroidDiseaseQuestionnaire': // 甲狀腺疾病問卷
        return false;
      case 'HepatitisOrHepatitisCarrierQuestionnaire': // 肝炎或肝炎病毒帶原問卷
        return false;
      case 'UrinarySystemDiseaseQuestionnaire': // 泌尿系統疾病問卷
        return false;
      case 'EsophagusStomachQuestionnaire': // 食道、胃或十二指腸潰瘍問卷
        return false;
      case 'BronchialDiseaseQuestionnaire': // 氣喘/慢性支氣管炎/慢性阻塞性肺疾病問卷
        return false;
      case 'HypertensionQuestionnaire': // 高血壓問卷
        return false;
      case 'HyperuricemiaQuestionnaire': // 高尿酸血症/痛風/關節炎問卷
        return false;
      case 'DiabetesQuestionnaire': // 糖尿病問卷
        return false;
      case 'EpilepsyQuestionnaire': // 癲癇問卷
        return false;
      case 'HeartDiseaseQuestionnaire': // 心臟疾病問卷
        return false;
      case 'TumorAndPolypQuestionnaire': // 腫瘤及息肉問卷
        return false;
      case 'PoliomyelitisQuestionnaire': // 小兒麻痹問卷
        return false;
      case 'TraumaAndSkeletalInjuryQuestionnaire': // 外傷骨骼問卷
        return false;
      case 'EyeDiseaseQuestionnaire': // 眼部疾病問卷
        return false;
      default:
        return true;
    }
  };

  const getShowHeader = (key: any) => {
    switch (key) {
      default:
        return true;
    }
  };

  return (
    <>
      <div id="requiredDocumentsList" className="container mw-100 mx-0 px-0">
        {
          requiredDocumentsList2?.filter((data: any) => data.visible).map((data: any, index: number) => (
            // eslint-disable-next-line react/jsx-key
            <>
              <div
                className={'row align-items-center border-bottom mx-0 ' + `${index === 0 ? 'mt-0' : ''}`}
              >
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
                  // onClick={() => (data.key === 'CRSForm' || data.key === 'GeneralDiseaseQuestionnaire') ? openModal2(data.key, index) : openModal(data.key, index)}
                  onClick={() => openModal2(data.key, index)}
                >
                  {data.title}
                </div>
              </div>
            </>
          ))
          }
      </div>

      <CustomModal2
        fullscreen
        visible={HealthDeclarationFormVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('HealthDeclarationForm')}
        header={getModalHeader('HealthDeclarationForm', 0)}
        onOk={() => handleOk('HealthDeclarationForm')}
        showFooter={getShowFooter('HealthDeclarationForm')}
        onCancel={() => handleCancel('HealthDeclarationForm')}
      >
        {getFormContent2('HealthDeclarationForm')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={InsuranceRightsConfirmationVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('InsuranceRightsConfirmation')}
        header={getModalHeader('InsuranceRightsConfirmation', 0)}
        onOk={() => handleOk('InsuranceRightsConfirmation')}
        showFooter={getShowFooter('InsuranceRightsConfirmation')}
        onCancel={() => handleCancel('InsuranceRightsConfirmation')}
      >
        {getFormContent2('InsuranceRightsConfirmation')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={ReviewPeriodConfirmationVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('ReviewPeriodConfirmation')}
        header={getModalHeader('ReviewPeriodConfirmation', 0)}
        onOk={() => handleOk('ReviewPeriodConfirmation')}
        showFooter={getShowFooter('ReviewPeriodConfirmation')}
        onCancel={() => handleCancel('ReviewPeriodConfirmation')}
      >
        {getFormContent2('ReviewPeriodConfirmation')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={FinancialDisclosureVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('FinancialDisclosure')}
        header={getModalHeader('FinancialDisclosure', 0)}
        onOk={() => handleOk('FinancialDisclosure')}
        showFooter={getShowFooter('FinancialDisclosure')}
        onCancel={() => handleCancel('FinancialDisclosure')}
      >
        {getFormContent2('FinancialDisclosure')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={DataUsageNoticeVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('DataUsageNotice')}
        header={getModalHeader('DataUsageNotice', 0)}
        onOk={() => handleOk('DataUsageNotice')}
        showFooter={getShowFooter('DataUsageNotice')}
        onCancel={() => handleCancel('DataUsageNotice')}
      >
        {getFormContent2('DataUsageNotice')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={ApplicationInstructionsVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('ApplicationInstructions')}
        header={getModalHeader('ApplicationInstructions', 0)}
        onOk={() => handleOk('ApplicationInstructions')}
        showFooter={getShowFooter('ApplicationInstructions')}
        onCancel={() => handleCancel('ApplicationInstructions')}
      >
        {getFormContent2('ApplicationInstructions')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={PolicyholderInfoVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('PolicyholderInfo')}
        header={getModalHeader('PolicyholderInfo', 0)}
        onOk={() => handleOk('PolicyholderInfo')}
        showFooter={getShowFooter('PolicyholderInfo')}
        onCancel={() => handleCancel('PolicyholderInfo')}
      >
        {getFormContent2('PolicyholderInfo')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={EPolicyApplicationVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('EPolicyApplication')}
        header={getModalHeader('EPolicyApplication', 0)}
        onOk={() => handleOk('EPolicyApplication')}
        showFooter={getShowFooter('EPolicyApplication')}
        onCancel={() => handleCancel('EPolicyApplication')}
      >
        {getFormContent2('EPolicyApplication')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={HealthQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('HealthQuestionnaire')}
        header={getModalHeader('HealthQuestionnaire', 0)}
        onOk={() => handleOk('HealthQuestionnaire')}
        showFooter={getShowFooter('HealthQuestionnaire')}
        onCancel={() => handleCancel('HealthQuestionnaire')}
      >
        {getFormContent2('HealthQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={CRSFormVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('CRSForm')}
        header={getModalHeader('CRSForm', 0)}
        onOk={() => handleOk('CRSForm')}
        showFooter={getShowFooter('CRSForm')}
        onCancel={() => handleCancel('CRSForm')}
      >
        {getFormContent2('CRSForm')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={AgentDisclosureVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('AgentDisclosure')}
        header={getModalHeader('AgentDisclosure', 0)}
        onOk={() => handleOk('AgentDisclosure')}
        showFooter={getShowFooter('AgentDisclosure')}
        onCancel={() => handleCancel('AgentDisclosure')}
      >
        {getFormContent2('AgentDisclosure')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={GeneralDiseaseQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('GeneralDiseaseQuestionnaire')}
        header={getModalHeader('GeneralDiseaseQuestionnaire', 0)}
        onOk={() => handleOk('GeneralDiseaseQuestionnaire')}
        showFooter={getShowFooter('GeneralDiseaseQuestionnaire')}
        onCancel={() => handleCancel('GeneralDiseaseQuestionnaire')}
      >
        {getFormContent2('GeneralDiseaseQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={ThyroidDiseaseQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('ThyroidDiseaseQuestionnaire')}
        header={getModalHeader('ThyroidDiseaseQuestionnaire', 0)}
        onOk={() => handleOk('ThyroidDiseaseQuestionnaire')}
        showFooter={getShowFooter('ThyroidDiseaseQuestionnaire')}
        onCancel={() => handleCancel('ThyroidDiseaseQuestionnaire')}
      >
        {getFormContent2('ThyroidDiseaseQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={HepatitisOrHepatitisCarrierQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('HepatitisOrHepatitisCarrierQuestionnaire')}
        header={getModalHeader('HepatitisOrHepatitisCarrierQuestionnaire', 0)}
        onOk={() => handleOk('HepatitisOrHepatitisCarrierQuestionnaire')}
        showFooter={getShowFooter('HepatitisOrHepatitisCarrierQuestionnaire')}
        onCancel={() => handleCancel('HepatitisOrHepatitisCarrierQuestionnaire')}
      >
        {getFormContent2('HepatitisOrHepatitisCarrierQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={UrinarySystemDiseaseQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('UrinarySystemDiseaseQuestionnaire')}
        header={getModalHeader('UrinarySystemDiseaseQuestionnaire', 0)}
        onOk={() => handleOk('UrinarySystemDiseaseQuestionnaire')}
        showFooter={getShowFooter('UrinarySystemDiseaseQuestionnaire')}
        onCancel={() => handleCancel('UrinarySystemDiseaseQuestionnaire')}
      >
        {getFormContent2('UrinarySystemDiseaseQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={EsophagusStomachQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('EsophagusStomachQuestionnaire')}
        header={getModalHeader('EsophagusStomachQuestionnaire', 0)}
        onOk={() => handleOk('EsophagusStomachQuestionnaire')}
        showFooter={getShowFooter('EsophagusStomachQuestionnaire')}
        onCancel={() => handleCancel('EsophagusStomachQuestionnaire')}
      >
        {getFormContent2('EsophagusStomachQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={BronchialDiseaseQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('BronchialDiseaseQuestionnaire')}
        header={getModalHeader('BronchialDiseaseQuestionnaire', 0)}
        onOk={() => handleOk('BronchialDiseaseQuestionnaire')}
        showFooter={getShowFooter('BronchialDiseaseQuestionnaire')}
        onCancel={() => handleCancel('BronchialDiseaseQuestionnaire')}
      >
        {getFormContent2('BronchialDiseaseQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={HypertensionQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('HypertensionQuestionnaire')}
        header={getModalHeader('HypertensionQuestionnaire', 0)}
        onOk={() => handleOk('HypertensionQuestionnaire')}
        showFooter={getShowFooter('HypertensionQuestionnaire')}
        onCancel={() => handleCancel('HypertensionQuestionnaire')}
      >
        {getFormContent2('HypertensionQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={HyperuricemiaQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('HyperuricemiaQuestionnaire')}
        header={getModalHeader('HyperuricemiaQuestionnaire', 0)}
        onOk={() => handleOk('HyperuricemiaQuestionnaire')}
        showFooter={getShowFooter('HyperuricemiaQuestionnaire')}
        onCancel={() => handleCancel('HyperuricemiaQuestionnaire')}
      >
        {getFormContent2('HyperuricemiaQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={DiabetesQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('DiabetesQuestionnaire')}
        header={getModalHeader('DiabetesQuestionnaire', 0)}
        onOk={() => handleOk('DiabetesQuestionnaire')}
        showFooter={getShowFooter('DiabetesQuestionnaire')}
        onCancel={() => handleCancel('DiabetesQuestionnaire')}
      >
        {getFormContent2('DiabetesQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={EpilepsyQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('EpilepsyQuestionnaire')}
        header={getModalHeader('EpilepsyQuestionnaire', 0)}
        onOk={() => handleOk('EpilepsyQuestionnaire')}
        showFooter={getShowFooter('EpilepsyQuestionnaire')}
        onCancel={() => handleCancel('EpilepsyQuestionnaire')}
      >
        {getFormContent2('EpilepsyQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={HeartDiseaseQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('HeartDiseaseQuestionnaire')}
        header={getModalHeader('HeartDiseaseQuestionnaire', 0)}
        onOk={() => handleOk('HeartDiseaseQuestionnaire')}
        showFooter={getShowFooter('HeartDiseaseQuestionnaire')}
        onCancel={() => handleCancel('HeartDiseaseQuestionnaire')}
      >
        {getFormContent2('HeartDiseaseQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={TumorAndPolypQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('TumorAndPolypQuestionnaire')}
        header={getModalHeader('TumorAndPolypQuestionnaire', 0)}
        onOk={() => handleOk('TumorAndPolypQuestionnaire')}
        showFooter={getShowFooter('TumorAndPolypQuestionnaire')}
        onCancel={() => handleCancel('TumorAndPolypQuestionnaire')}
      >
        {getFormContent2('TumorAndPolypQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={PoliomyelitisQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('PoliomyelitisQuestionnaire')}
        header={getModalHeader('PoliomyelitisQuestionnaire', 0)}
        onOk={() => handleOk('PoliomyelitisQuestionnaire')}
        showFooter={getShowFooter('PoliomyelitisQuestionnaire')}
        onCancel={() => handleCancel('PoliomyelitisQuestionnaire')}
      >
        {getFormContent2('PoliomyelitisQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={TraumaAndSkeletalInjuryQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('TraumaAndSkeletalInjuryQuestionnaire')}
        header={getModalHeader('TraumaAndSkeletalInjuryQuestionnaire', 0)}
        onOk={() => handleOk('TraumaAndSkeletalInjuryQuestionnaire')}
        showFooter={getShowFooter('TraumaAndSkeletalInjuryQuestionnaire')}
        onCancel={() => handleCancel('TraumaAndSkeletalInjuryQuestionnaire')}
      >
        {getFormContent2('TraumaAndSkeletalInjuryQuestionnaire')}
      </CustomModal2>
      <CustomModal2
        fullscreen
        visible={EyeDiseaseQuestionnaireVisible}
        headerContainerClassName="modal-custom-color-green"
        showHeader={getShowHeader('EyeDiseaseQuestionnaire')}
        header={getModalHeader('EyeDiseaseQuestionnaire', 0)}
        onOk={() => handleOk('EyeDiseaseQuestionnaire')}
        showFooter={getShowFooter('EyeDiseaseQuestionnaire')}
        onCancel={() => handleCancel('EyeDiseaseQuestionnaire')}
      >
        {getFormContent2('EyeDiseaseQuestionnaire')}
      </CustomModal2>

      {
          hintModalVisible &&
            <CustomModal2
              visible={hintModalVisible}
              showHeader={false}
              footer={
                <SubmitAndCancelButtonGroup
                  showSingleButton={
                        hintModalProps?.action === 'complete'
                    }
                  leftButtonOnclick={() => {
                    setHintModalVisible(false);
                    currentModalKey.map(key =>
                      modalService.trigger(ModalNamesEnum[key as keyof typeof ModalNamesEnum], false)
                    );
                  }}
                  rightButtonOnclick={() => {
                    setHintModalVisible(false);
                    currentModalKey.map(key =>
                      modalService.trigger(ModalNamesEnum[key as keyof typeof ModalNamesEnum], false)
                    );
                  }}
                />
              }
            >
              <div className="container">
                <div className="row m-2">
                  <div className="col p-2 border">
                    <div className="row justify-content-center">
                      <div className="col w-auto d-flex flex-row justify-content-center">
                        <img
                          // className="col-2 exclamation-icon"
                          className="h-100"
                          src={require('assets/img/icons/file-save.svg').default}
                        />
                        <div className="labelName fs-3">
                          {hintModalProps?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomModal2>
      }
    </>
  );
};
export default RequiredDocuments;
