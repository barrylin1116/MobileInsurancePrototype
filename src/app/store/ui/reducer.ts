import { Reducer } from 'react';
import {
  UI__PAGE1_IMPORT_MODAL_VISIBLE__UPDATE,
  UI__PREVIEW_TAB_ACTIVEKEY, UI_MODALS__SET_MODAL_VISIBLE,
  UIAction, UIState
} from './types';

const initialState: UIState = {
  page1ImportModalProps: {
    visible: false
  },
  previewTabActiveKey: '1',
  modals: {
    dataStorageModalVisible: false,
    submissionModalVisible: false,
    submissionHintModalVisible: false,
    successSubmissionModalVisible: false,
    failSubmissionModalVisible: false,
    previewModalVisible: false,
    previewMsgModalVisible: false,
    HealthDeclarationFormVisible: false,
    InsuranceRightsConfirmationVisible: false,
    ReviewPeriodConfirmationVisible: false,
    FinancialDisclosureVisible: false,
    DataUsageNoticeVisible: false,
    ApplicationInstructionsVisible: false,
    PolicyholderInfoVisible: false,
    EPolicyApplicationVisible: false,
    HealthQuestionnaireVisible: false,
    CRSFormVisible: false,
    AgentDisclosureVisible: false,
    GeneralDiseaseQuestionnaireVisible: false,
    ThyroidDiseaseQuestionnaireVisible: false,
    HepatitisOrHepatitisCarrierQuestionnaireVisible: false,
    UrinarySystemDiseaseQuestionnaireVisible: false,
    EsophagusStomachQuestionnaireVisible: false,
    BronchialDiseaseQuestionnaireVisible: false,
    HypertensionQuestionnaireVisible: false,
    HyperuricemiaQuestionnaireVisible: false,
    DiabetesQuestionnaireVisible: false,
    EpilepsyQuestionnaireVisible: false,
    HeartDiseaseQuestionnaireVisible: false,
    TumorAndPolypQuestionnaireVisible: false,
    PoliomyelitisQuestionnaireVisible: false,
    TraumaAndSkeletalInjuryQuestionnaireVisible: false,
    EyeDiseaseQuestionnaireVisible: false,
    onlineAuthApplyModalVisible: false,
    previewMsgModalProps: {},
    onlineAuthApplyModalProps: {}
  }
};

const UIReducer: Reducer<any, UIAction> = (state = initialState, action): UIState => {
  switch (action.type) {
    case UI__PAGE1_IMPORT_MODAL_VISIBLE__UPDATE: {
      return {
        ...state,
        page1ImportModalProps: {
          visible: action.payload
        }
      };
    }
    // [Modals] 設置 Modal 能見度
    case UI_MODALS__SET_MODAL_VISIBLE: {
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.name + 'Visible']: action.payload.visible,
          [action.payload.name + 'Props']: action.payload.visible ? action.payload.modalProps : {}
        }
      };
    }
    case UI__PREVIEW_TAB_ACTIVEKEY: {
      return {
        ...state,
        previewTabActiveKey: action.payload
      };
    }
    // Default
    default:
      return state;
  }
};

export default UIReducer;
