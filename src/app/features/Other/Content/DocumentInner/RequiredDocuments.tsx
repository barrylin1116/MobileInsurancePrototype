import React, { useState } from 'react';
import { RequiredDocumentsProps } from './types';
import CustomModal from '../../../Insurance/pages/Modals/CustomModal';

const RequiredDocuments: React.FC<RequiredDocumentsProps> = (props) => {
  const [HealthDeclarationFormVisible, setHealthDeclarationForm] = useState(false);
  const [MedicalQuestionnaireVisible, setMedicalQuestionnaire] = useState(false);
  // const [ReviewPeriodConfirmationStatementVisible, setReviewPeriodConfirmationStatement] = useState(false);
  // const [ChecklistOfComplianceRequirementsVisible, setChecklistOfComplianceRequirements] = useState(false);
  // const [ElectronicInsuranceApplicationConfirmationVisible, setElectronicInsuranceApplicationConfirmation] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const openModal = (key: string, index: number) => {
    setModalTitle(props.requiredDocumentsList[index].title);
    if (key === 'HealthDeclarationForm') {
      setHealthDeclarationForm(true);
    }
    if (key === 'MedicalQuestionnaire') {
      setMedicalQuestionnaire(true);
    }
    // if (key === 'ReviewPeriodConfirmationStatement') setReviewPeriodConfirmationStatement(true);
    // if (key === 'ChecklistOfComplianceRequirements') setChecklistOfComplianceRequirements(true);
    // if (key === 'ElectronicInsuranceApplicationConfirmation') setElectronicInsuranceApplicationConfirmation(true);
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
      <CustomModal
        isOpen={HealthDeclarationFormVisible}
        onClose={setHealthDeclarationForm}
        headerTitle={modalTitle}
        headerButton={<div className="p-4">完成</div>}
        buttonPosition="right"
        footerContent={<div>完成</div>}
      >
        {getHealthDeclarationFormContent()}
      </CustomModal>
      <CustomModal
        isOpen={MedicalQuestionnaireVisible}
        onClose={setMedicalQuestionnaire}
        headerTitle={modalTitle}
        headerButton={<div className="p-4">完成</div>}
        buttonPosition="right"
        footerContent={<div>完成</div>}
      >
        {getHealthDeclarationFormContent()}
      </CustomModal>

    </>
  )
  ;
};
export default RequiredDocuments;
