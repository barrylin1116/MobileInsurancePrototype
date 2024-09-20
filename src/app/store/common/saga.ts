import { takeEvery, all, put } from 'redux-saga/effects';
import { sagaBoundary } from 'app/store/service';
import { COMMON__INIT_FETCH_COMMON_DATA } from './types';
import { initFetchCommonDataDoneAction } from './actions';

/**
 * @description 初始取得系統共用選項資料
 */
function * initFetchCommonData () {
  const response = {
    requiredDocumentsList: [
      { title: '健康告知書（被保人）', key: 'HealthDeclarationForm', visible: true },
      { title: '投保權益確認書', key: 'InsuranceRightsConfirmation', visible: true },
      { title: '審閱期間確認聲明書', key: 'ReviewPeriodConfirmation', visible: true },
      { title: '財務狀況告知書', key: 'FinancialDisclosure', visible: true },
      { title: '個人資料蒐集、處理、利用告知事項', key: 'DataUsageNotice', visible: true },
      { title: '要保書填寫說明', key: 'ApplicationInstructions', visible: true },
      { title: '人壽保險投保人須知', key: 'PolicyholderInfo', visible: true },
      { title: '電子保單申請書', key: 'EPolicyApplication', visible: true },
      { title: '疾病問券', key: 'HealthQuestionnaire', visible: true },
      { title: 'CRS自我證明表', key: 'CRSForm', visible: true },
      { title: '業告書', key: 'AgentDisclosure', visible: true },
      { title: '一般疾病問卷', key: 'GeneralDiseaseQuestionnaire', visible: false },
      { title: '甲狀腺疾病問卷', key: 'ThyroidDiseaseQuestionnaire', visible: false },
      { title: '肝炎或肝炎病毒帶原問卷', key: 'HepatitisOrHepatitisCarrierQuestionnaire', visible: false },
      { title: '泌尿系統疾病問卷', key: 'UrinarySystemDiseaseQuestionnaire', visible: false },
      { title: '食道、胃或十二指腸潰瘍問卷', key: 'EsophagusStomachQuestionnaire', visible: false },
      { title: '氣喘/慢性支氣管炎/慢性阻塞性肺疾病問卷', key: 'BronchialDiseaseQuestionnaire', visible: false },
      { title: '高血壓問卷', key: 'HypertensionQuestionnaire', visible: false },
      { title: '高尿酸血症/痛風/關節炎問卷', key: 'HyperuricemiaQuestionnaire', visible: false },
      { title: '糖尿病問卷', key: 'DiabetesQuestionnaire', visible: false },
      { title: '癲癇問卷', key: 'EpilepsyQuestionnaire', visible: false },
      { title: '心臟疾病問卷', key: 'HeartDiseaseQuestionnaire', visible: false },
      { title: '腫瘤及息肉問卷', key: 'TumorAndPolypQuestionnaire', visible: false },
      { title: '小兒麻痹問卷', key: 'PoliomyelitisQuestionnaire', visible: false },
      { title: '外傷骨骼問卷', key: 'TraumaAndSkeletalInjuryQuestionnaire', visible: false },
      { title: '眼部疾病問卷', key: 'EyeDiseaseQuestionnaire', visible: false }
    ]
  };
  yield put(initFetchCommonDataDoneAction(response));
}

export default function * watchCommonSaga () {
  yield all([
    takeEvery(COMMON__INIT_FETCH_COMMON_DATA, sagaBoundary(initFetchCommonData))
  ]);
}
