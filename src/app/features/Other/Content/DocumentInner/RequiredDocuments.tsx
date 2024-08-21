import React, { useState } from 'react';
import { RequiredDocumentsProps } from './types';
import CustomModal from '../../../Insurance/pages/Modals/CustomModal';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import Nation from '../../components/Nation';
import maxzIndexService from '../../../../core/services/maxzIndexService';

const RequiredDocuments: React.FC<RequiredDocumentsProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formName, setFormName] = useState('');
  const [modalTitle, setModalTitle] = useState<string>('');
  const [isMinorOrStudent, setIsMinorOrStudent] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態
  const [isMinorOrStudent2, setIsMinorOrStudent2] = useState<boolean>(false); // 用來控制 "是" 或 "否" 的狀態

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
    setModalTitle(props.requiredDocumentsList[index].title);
    setModalVisible(true);
    setFormName(key);
    // if (key === 'HealthDeclarationForm') {
    //   setHealthDeclarationForm(true);
    // }
    // if (key === 'MedicalQuestionnaire') {
    //   setMedicalQuestionnaire(true);
    // }
    // if (key === 'ReviewPeriodConfirmationStatement') setReviewPeriodConfirmationStatement(true);
    // if (key === 'ChecklistOfComplianceRequirements') setChecklistOfComplianceRequirements(true);
    // if (key === 'ElectronicInsuranceApplicationConfirmation') setElectronicInsuranceApplicationConfirmation(true);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsMinorOrStudent(value === '否，原因');
  };

  const handleRadioChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsMinorOrStudent2(value === '是');
  };

  const getHealthDeclarationFormQA = ['過去二年內是否曾因接受健康檢查有異常情形而被建議接受其他檢查或治療？(亦可提供檢查報告代替回答)',
    '最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥？',
    '過去五年內，是否曾因患有下列疾病，而接受醫師治療、診療或用藥？(1)高血壓症(指收縮壓140或舒張壓90mmHg以上)、狹心症、心肌梗塞、心肌肥厚、心內膜炎、風濕性心臟病、先天性心臟病、主動脈血管瘤。(2)腦中風(腦出血、腦梗塞)、腦瘤、腦動脈血管瘤、腦動脈硬化症、癲癇、肌肉萎縮症、重症肌無力、智能障礙(外表無法明顯判斷者)、巴金森氏症、精神病。(3)肺氣腫、支氣管擴張症、塵肺症、肺結核。(4)肝炎、肝內結石、肝硬化、肝功能異常（GOT、GPT等肝功能檢驗數值異於檢驗標準的正常值）。(5)腎臟炎、腎病症候群、腎機能不全、尿毒、腎囊胞。(6)視網膜出血或剝離、視神經病變。(7)癌症（惡性腫瘤）。(8)血友病、白血病、貧血（再生不良性貧血、地中海型貧血）、紫斑症。(9)糖尿病、類風溼性關節炎、肢端肥大症、腦下垂體機能亢進或低下、甲狀腺或副甲狀腺功能亢進或低下。(10)紅斑性狼瘡、膠原症。 (11)愛滋病或愛滋病帶原。',
    '過去一年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥？(1)酒精或藥物濫用成癮、眩暈症。(2)食道、胃、十二指腸潰瘍或出血、潰瘍性大腸炎、胰臟炎。(3)肝炎病毒帶原、肝膿瘍、黃疸。(4)慢性支氣管炎、氣喘、肺膿瘍、肺栓塞。(5)痛風、高血脂症。(6)青光眼、白內障。',
    '目前身體機能狀況是否有失明、聾啞及言語、咀嚼、四肢機能障害？',
    '過去五年內是否曾因受傷或生病住院治療七日以上？■被保險人為女性時，請回答以下問題：',
    '過去一年內是否曾患乳腺炎、乳漏症、子宮內膜異位症、陰道異常出血而接受醫師治療、診療或用藥？',
    '是否已確知懷孕？如是，已經 週。■被保險人如投保健康保險請回答以下問題：',
    '目前是否仍患有下列疾病？腦性麻痺、頭部外傷、單純性甲狀腺腫、顏面神經麻痺、坐骨神經痛、三叉神經痛、中耳炎、鼻竇炎、痔瘡、扁桃腺炎、肺炎、淋巴肉腫、膽囊炎、膽結石、胃炎、腸阻塞、早產兒、闌尾炎、急性腸胃炎、精索靜脈曲張、陰囊水腫、泌尿結石、疝氣、脊柱彎曲、椎間盤脫出或分離、骨折、肌骨膜炎、蠶豆症、淋病、子宮肌瘤。■被保險人如投保傷害保險請回答以下問題：',
    '目前身體機能是否有下列障害？(1)失明。(2)曾因眼科疾病或傷害接受眼科專科醫師治療、診療或用藥，且一目視力經矯正後，最佳矯正視力在萬國視力表○．三以下。(3)聾。(4)曾因耳部疾病或傷害接受耳鼻喉科專科醫師治療、診療或用藥，且單耳聽力喪失程度在五十分貝(dB)以上。(5)啞。(6)咀嚼、吞嚥或言語機能障害。(7)四肢（含手指、足趾）缺損或畸形。■投保眷屬附約請回答以下問題：',
    '您的眷屬是否有上述第1~10項所列事項？'];

  const [checkboxesState, setCheckboxesState] = useState<boolean[]>(new Array(getHealthDeclarationFormQA.length).fill(false));

  const diseaseQuestionnaireList = [
    '一般疾病問卷', '甲狀腺疾病問卷', '肝炎或肝炎病毒帶原問卷', '泌尿系統疾病問卷', '食道、胃或十二指腸潰瘍問卷', '氣喘/慢性支氣管炎/慢性阻塞性肺疾病問卷', '高血壓問卷', '高尿酸血症/痛風/關節炎問卷',
    '糖尿病問卷', '癲癇問卷', '心臟疾病問卷', '腫瘤及息肉問卷', '小兒麻痹問卷', '外傷骨骼問卷', '眼部疾病問卷'
  ];

  const getDiseaseQuestionnaireListBody = () => {
    return (
      diseaseQuestionnaireList.map((data, index) => {
        return (
          index % 2 === 0 && (
            <div
              style={{ border: '1px solid #348d8f', borderTop: 'none' }}
              key={`qa-${index}`} className="row form-row m-0 p-2"
            >
              <div className="row m-0">
                <div className="d-flex form-check col-6 align-items-center">
                  <input
                    title="是"
                    type="checkbox"
                    className="form-check-input me-2 mb-1"
                    value="Y"
                    style={{ marginTop: '0px' }}
                  />
                  <label
                    className="form-check-label me-2 text-nowrap labelName"
                  >{data}
                  </label>
                </div>
                {
                            diseaseQuestionnaireList[index + 1] && (
                              <>
                                <div className="d-flex form-check col-6 align-items-center">
                                  <input
                                    title="是"
                                    type="checkbox"
                                    className="form-check-input me-2 mb-1"
                                    value="Y"
                                    style={{ marginTop: '0px' }}
                                  />
                                  <label
                                    className="form-check-label me-2 text-nowrap labelName"
                                  >
                                    {diseaseQuestionnaireList[index + 1]}
                                  </label>
                                </div>
                              </>
                            )
                        }
              </div>
            </div>
          )
        );
      })
    );
  };

  const getHealthDeclarationFormContent = () => {
    return (
      <>
        <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
          <div className="col-6">
            <div className="name labelName">身高</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
          <div className="col-6">
            <div className="name labelName">體重</div>
            <input type="labelName" name="rocId" className="form-control" />
          </div>
        </div>
        {
            getHealthDeclarationFormQA.map((data, index) => {
              return (
                <div
                  style={{ border: '1px solid #348d8f', borderTop: 'none' }}
                  key={`qa-${index}`} className="row form-row m-0 p-2"
                >
                  <div className="col-12">
                    <div className="labelName">{data}</div>
                    <div className="radios-wrapper">
                      <div className="d-flex py-1 align-items-center">
                        <input
                          title="是"
                          type="radio"
                          className="form-check-input me-2 mb-1"
                          value="Y"
                          style={{ marginTop: '0px' }}
                          onChange={() => handleCheckboxChange(index, 'Y')}
                          checked={checkboxesState[index]}
                        />
                        <label
                          className="form-check-label me-2 text-nowrap labelName"
                        >是
                        </label>
                      </div>
                      <div className="d-flex py-1 align-items-center">
                        <input
                          title="否"
                          type="radio"
                          className="form-check-input me-2 mb-1"
                          value="N"
                          style={{ marginTop: '0px' }}
                          onChange={() => handleCheckboxChange(index, 'N')}
                          checked={!checkboxesState[index]}
                        />
                        <label
                          className="form-check-label me-2 text-nowrap labelName"
                        >否
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        {
          checkboxesState.filter(data => data).length > 0 && (
            <>
              <div className="row m-0 p-2" style={{ border: '1px solid #348d8f', background: '#edf5f4', borderTop: 'none' }}>
                <div className="col-12">
                  <div className="name labelName">當健康告知事項有任一題回覆為「是」需加填「疾病問券」</div>
                </div>
              </div>
              <div className="row m-0 p-2" style={{ border: '1px solid #348d8f', background: '#edf5f4', borderTop: 'none' }}>
                <div className="col-12">
                  <div className="name labelName">請勾選(可複選，至少要勾選一個)。</div>
                </div>
              </div>
              {
                  getDiseaseQuestionnaireListBody()
                }
            </>
          )
        }

      </>
    )
    ;
  };

  const getAgentDisclosureContent = () => {
    return (

      <>
        <div className="row m-0">
          <div className="col-12 mb-3">
            <label className="form-check-label me-2 text-nowrap labelName">投保來源：</label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="insuranceSource" value="主動投保" />
                <label className="form-check-label">主動投保</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="insuranceSource" value="銀行/證券客戶" />
                <label className="form-check-label">銀行/證券客戶</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="insuranceSource" value="親屬" />
                <label className="form-check-label">親屬</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="insuranceSource" value="朋友" />
                <label className="form-check-label">朋友</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="insuranceSource" value="陌生拜訪" />
                <label className="form-check-label">陌生拜訪</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="insuranceSource" value="其他" />
                <label className="form-check-label me-2">其他</label>
                <input
                  type="text" className="form-control" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <label className="form-check-label me-2 text-nowrap labelName">保險目的：</label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="保障" />
                <label className="form-check-label">保障</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="子女教育經費" />
                <label className="form-check-label">子女教育經費</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="退休規劃" />
                <label className="form-check-label">退休規劃</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="房屋貸款" />
                <label className="form-check-label">房屋貸款</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="其他" />
                <label className="form-check-label me-2">其他</label>
                <input
                  type="text" className="form-control" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
              </div>
            </div>
          </div>

          <div className="col-12 mb-3">
            <label
              className="form-check-label me-2 text-nowrap labelName"
            >本保件家中主要經濟來源者(指個人年收入佔家庭年收入比例最高者)：
            </label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="primaryIncomeSource" value="被保險人" />
                <label className="form-check-label">被保險人</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="primaryIncomeSource" value="要保人" />
                <label className="form-check-label">要保人</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="primaryIncomeSource" value="要保人之配偶" />
                <label className="form-check-label">要保人之配偶</label>
              </div>
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="primaryIncomeSource" value="要保人之父母" />
                <label className="form-check-label">要保人之父母</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="primaryIncomeSource" value="其他" />
                <label className="form-check-label me-2">其他</label>
                <input
                  type="text" className="form-control" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <label className="form-check-label me-2 text-nowrap labelName">本保件之保險費來源(可複選)：</label>
            <div className="d-flex flex-wrap align-items-center">
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="薪資" />
                <label className="form-check-label">薪資</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="存款" />
                <label className="form-check-label">存款</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="退休金" />
                <label className="form-check-label">退休金</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="投資收入" />
                <label className="form-check-label">投資收入</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="財產繼承" />
                <label className="form-check-label">財產繼承</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="貸款" />
                <label className="form-check-label">貸款</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="保單解約" />
                <label className="form-check-label">保單解約</label>
              </div>
              <div className="form-check me-3">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="保單借款" />
                <label className="form-check-label">保單借款</label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input type="checkbox" className="form-check-input" name="insurancePurpose" value="其他" />
                <label className="form-check-label me-2">其他</label>
                <input
                  type="text" className="form-control" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <h5 className="col-6">被保險人與要保人姓名/財務狀況/職業/投保經驗</h5>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-6">
              <div className="name labelName">被保險人姓名</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-6">
              <div className="name labelName">個人工作年收入</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人其他年收入(如利息、投資等)</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-6">
              <div className="name labelName">家庭年收入</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人淨資產(資產扣除負債)</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)</div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="maritalStatus" value="是，配偶工作為" />
                <label className="form-check-label me-2">是，配偶工作為</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="maritalStatus" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
                總和。)
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="minorOrStudentStatus"
                  value="是，父母或法定代理人工作為"
                />
                <label className="form-check-label me-2">是，配偶工作為</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="minorOrStudentStatus" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">是是否已購買其他保險公司之商業保險?
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="otherInsuranceStatus"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="otherInsuranceStatus" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-6">
              <div className="name labelName">要保人姓名</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-6">
              <div className="name labelName">個人工作年收入</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人其他年收入(如利息、投資等)</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-6">
              <div className="name labelName">家庭年收入</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
            <div className="col-6">
              <div className="name labelName">個人淨資產(資產扣除負債)</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">是否已婚？(如是，「家庭年收入」欄位請填寫夫妻雙方年收入總和。)</div>
              <div className="form-check d-flex align-items-center">
                <input type="radio" className="form-check-input" name="maritalStatus2" value="是，配偶工作為" />
                <label className="form-check-label me-2">是，配偶工作為</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="maritalStatus2" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">是否為未成年人或學生？(如是，「家庭年收 入」欄位請填寫其父母或法定代理人年收入
                總和。)
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="minorOrStudentStatus2"
                  value="是，父母或法定代理人工作為"
                />
                <label className="form-check-label me-2">是，配偶工作為</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="minorOrStudentStatus2" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">是是否已購買其他保險公司之商業保險?
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="otherInsuranceStatus2"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="otherInsuranceStatus2" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <h5 className="col-6">其他財務狀況/職業/投保經驗</h5>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">本件身故受益人是否指定為配偶、直系親屬或法定繼承人，且其順位及應得比
                例適用民法繼承編相關規定？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa6"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="sa6" value="否，原因" />
                <label className="form-check-label">否，原因</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">本件身故受益人是否指定為配偶、直系親屬或法定繼承人，且其順位及應得比
                例適用民法繼承編相關規定？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa6"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="sa6" value="否，原因" />
                <label className="form-check-label">否，原因</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">本保單保險費付款人是否為要保人或被保險人？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="IsPolicyPremiumPayerPolicyholderOrInsured"
                  value="是"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label me-2">是</label>
                <input
                  type="radio" className="form-check-input ms-3" name="IsPolicyPremiumPayerPolicyholderOrInsured"
                  value="否，原因"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label">否</label>
              </div>
              {isMinorOrStudent && (
                <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
                  <div className="col-6">
                    <div className="name labelName">付款人姓名</div>
                    <input type="labelName" name="rocId" className="form-control" />
                  </div>
                  <div className="col-6">
                    <div className="name labelName">與要保人關係</div>
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
                    <div className="name labelName">身分證統一編號</div>
                    <input type="labelName" name="rocId" className="form-control" />
                  </div>
                  <div className="col-6">
                    <div className="name labelName">出生日期</div>
                    <DatePickerTW
                      name="birthday" className="form-control" onChange={() => {
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <Nation />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
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
                <label className="form-check-label me-2">是</label>
                <input
                  type="radio" className="form-check-input ms-3" name="MinorInsuredGuardianDetails"
                  value="否，原因"
                  onChange={handleRadioChange2}
                />
                <label className="form-check-label">否</label>
              </div>
              {isMinorOrStudent2 && (
                <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
                  <div className="col-6">
                    <div className="name labelName">法定代理人姓名</div>
                    <input type="labelName" name="rocId" className="form-control" />
                  </div>
                  <div className="col-6">
                    <div className="name labelName">身分證統一編號</div>
                    <input type="labelName" name="rocId" className="form-control" />
                  </div>
                  <div className="col-6">
                    <div
                      className="name labelName"
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
                    <Nation />
                  </div>
                  <div className="col-6">
                    <div className="name labelName">連絡電話</div>
                    <input type="labelName" name="rocId" className="form-control" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">招攬時，是否已確認要保人及被保險人符合投保之條件?
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa1"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa1" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">本保單規劃是否已考量要保人及被保險人之保險需求，確認保單適合度、投保險種、保險費、保險金額與要
                保人或被保險人收入、財務狀況及職業之相當性及付費能力？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa2"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa2" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬時，是否已向要保人及被保險人確認要保人與被保險人，及被保險人與受益人之關係?
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa3"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa3" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬時，是否已確認要保人、被保險人及受益人身分？有關要保人與被保險人所提供之身分證明文件(身分證、護照、駕照，
                或其他足資證明其身分之文件等；若為法人者，為法人之名稱、代表人、地址、聯絡電話)是否與要保書所填載之內容相符？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa4"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa4" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">是否確認要保人已瞭解其所繳交保險費係用以購買保險商品？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa5"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa5" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬時，是否親晤要保人/被保險人/法定代理人並確認要保人/被保險人/法定代理人親簽相關要保文件？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa6"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa6" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬時，是否已向要保人說明本次購買保險商品內容、繳納保險費方式、繳費年期、領取各種給付項目與解約金內容？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa7"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa7" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬時，是否未勸誘要保人/被保險人/實際繳交保費之利害關係人以辦理貸款、保單解約及保單借款等財務
                槓桿方式繳交保險費？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa8"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa8" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬投資型保險商品時，是否已考量要保人之投資屬性、風險承受能力，並確定要保人已確實瞭解投資型保
                險之投資損益係由其自行承擔，且未提供逾越要保人財力狀況或不合適之商品？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa9"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa9" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬以外幣收付之保險商品時，是否已向要保人確認有外幣需求及承擔匯率風險的能力？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa10"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa10" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
            <div className="col-12">
              <div className="name labelName">招攬分紅保單時，本人已確實告知要保人保單紅利為非保證給付項目，可能會變動為較高或較低之數字，本
                人未向要保人做任何保證。
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="qa11"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="qa11" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">投保前三個月內要保人/被保險人/實際繳交保費之利害關係人是否有辦理貸款、保
                單解約或保單借款？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa10"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="sa10" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">要保書或保險相關文件所載要保人及被保險人之住所或居所(通訊)地址，是否
                為招攬業務員本人之住所或居所(通訊)地址或為所屬保險代理人、保險經紀人、 銀行及其分支機構之營業處所？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa11"
                  value="是，原因<"
                />
                <label className="form-check-label me-2">是，原因</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="sa11" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">要保人是否為外籍人士？若是，請說明居留目的。
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa12"
                  value="是，原因<"
                />
                <label className="form-check-label me-2">是，原因</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="sa12" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">過去一年內要保人是否居住於中華民國境外超過半年以上？若是，請說明居住
                國家(地區) 。
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa13"
                  value="是，原因<"
                />
                <label className="form-check-label me-2">是，原因</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="sa13" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">要保人或被保險人是否是現任(或曾任)國內外政府或國際組織之重要政治性職
                務人士(如：中央或地方民意代表、公務機關首長)？若是，請說明。
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa14"
                  value="是，原因<"
                />
                <label className="form-check-label me-2">是，原因</label>
                <input
                  type="text" className="form-control me-3" placeholder="請說明"
                  style={{ width: '150px', marginTop: '0px' }}
                />
                <input type="radio" className="form-check-input ms-3" name="sa14" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">要保人購買保險商品時，是否對於保障內容或給付項目完全不關心，抑或對於具
                高保單價值準備金或具高現金價值或躉繳保費之保險商品，僅關注保單借款、解約或變更受益人等程序？
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" className="form-check-input" name="sa15"
                  value="是"
                />
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="sa15" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
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
                <label className="form-check-label me-2">是</label>
                <input type="radio" className="form-check-input ms-3" name="sa16" value="否" />
                <label className="form-check-label">否</label>
              </div>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-12">
              <div className="name labelName">配合相關法令規範，確認要保人瞭解商品內容及投保意願或高齡關懷提問，臺銀人壽將視需要電話訪問本保單之要保人、被保險人
                或實際繳交保費之利害關係人，請轉知客戶知悉，對於電訪時段另有特殊需求者請註明時間:
              </div>
              <label htmlFor="start-time">電訪區間:</label>
              <select id="start-time" name="start-time">
                {generateTimeOptions()}
              </select>

              <label htmlFor="end-time">~</label>
              <select id="end-time" name="end-time">
                {generateTimeOptions()}
              </select>
            </div>
          </div>
          <div className="row m-0 p-4" style={{ border: '1px solid #348d8f' }}>
            <div className="col-6">
              <div className="name labelName">其他有利於核保之資訊：</div>
              <input type="labelName" name="rocId" className="form-control" />
            </div>
          </div>

        </div>

        {
            checkboxesState.filter(data => data).length > 0 && (
              <>
                <div
                  className="row m-0 p-2"
                  style={{ border: '1px solid #348d8f', background: '#edf5f4', borderTop: 'none' }}
                >
                  <div className="col-12">
                    <div className="name labelName">當健康告知事項有任一題回覆為「是」需加填「疾病問券」</div>
                  </div>
                </div>
                <div
                  className="row m-0 p-2"
                  style={{ border: '1px solid #348d8f', background: '#edf5f4', borderTop: 'none' }}
                >
                  <div className="col-12">
                    <div className="name labelName">請勾選(可複選，至少要勾選一個)。</div>
                  </div>
                </div>
                {
                    getDiseaseQuestionnaireListBody()
                  }
              </>
            )
        }

      </>
    )
    ;
  };

  const getFormContent = () => {
    switch (formName) {
      case 'HealthDeclarationForm':
        return getHealthDeclarationFormContent();
      case 'AgentDisclosure':
        return getAgentDisclosureContent();
      default:
        return '';
    }
  };

  const handleCheckboxChange = (index: number, value: string) => {
    setCheckboxesState(prevState => {
      const newState = [...prevState];
      if (value === 'Y') newState[index] = true;
      if (value === 'N') newState[index] = false;
      return newState;
    });
  };
  return (
    <>
      <div className="rules-box">
        {props.requiredDocumentsList?.map((data, index) => (
          // eslint-disable-next-line react/jsx-key
          <>
            <img
              key={`img-${index}`}
              className="help-icon"
              src={require('assets/img/icons/exclamation.svg').default}
            />
            <div key={`title-${index}`} className="item" onClick={() => openModal(data.key, index)}>
              {data.title}
            </div>
          </>
        ))}
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
                footerContent={
                  <>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 me-lg-0 cus-outline-transparent InsuranceButton"
                      onClick={() => setModalVisible(false)}
                    >
                      <div className="row">
                        <div className="col-lg-12">完成</div>
                      </div>
                    </button>
                  </>
                    }
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
