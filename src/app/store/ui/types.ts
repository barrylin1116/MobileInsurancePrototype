import { ModalNamesEnum } from '../../core/enums/ui/modals';

export interface UIState {
    page1ImportModalProps: any,
    previewTabActiveKey: string,
    modals: ModalsState
}

export const UI__PAGE1_IMPORT_MODAL_VISIBLE__UPDATE = 'UI__PAGE1_IMPORT_MODAL_VISIBLE__UPDATE';
export const UI__MODAL_OPEN = 'UI__MODAL_OPEN';
export const UI__MODAL_CLOSE = 'UI__MODAL_CLOSE';
export const UI__PREVIEW_TAB_ACTIVEKEY = 'UI__PREVIEW_TAB_ACTIVEKEY';
export const UI_MODALS__SET_MODAL_VISIBLE = 'UI_MODALS__SET_MODAL_VISIBLE';

export interface UpdatePage1ImportModalVisibleAction {
    type: typeof UI__PAGE1_IMPORT_MODAL_VISIBLE__UPDATE;
    payload: boolean;
}

export interface UpdatePreviewActiveKeyAction {
    type: typeof UI__PREVIEW_TAB_ACTIVEKEY;
    payload: string;
}

export interface SetModalVisibleAction {
    type: typeof UI_MODALS__SET_MODAL_VISIBLE;
    payload: {
        name: ModalNamesEnum;
        visible: boolean;
        modalProps?: ModalProps
    };
}

/**
 * @Param visible 是否顯示Modal
 * @Param showHeader 是否顯示 Header
 * @Param showFooter 是否顯示 Footer
 * @Param title 當顯示 Header時若沒有自訂header，則顯示 title
 * @Param header 可自訂header，當顯示 Header時若有自訂header，則顯示 header
 * @Param footer 可自訂footer，當顯示 Footer時若有自訂footer，則顯示 footer，否則顯示預設footer樣式
 * @Param confirmBtnText 可自訂預設footer的按鈕文字
 * @Param cancelBtnText 可自訂預設footer的按鈕文字
 * @Param fullscreen 是否全螢幕
 * @Param headerContainerClassName 可自訂class
 * @Param footerContainerClassName 可自訂class
 * @Param contentContainerClassName 可自訂class
 * @Param content Modal內容
 */
export interface ModalProps {
    visible?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    title?: string;
    header?: JSX.Element;
    footer?: JSX.Element;
    contentTopBlock?: JSX.Element;
    confirmBtnText?: string; // 可設定預設
    cancelBtnText?: string; // 可設定預設
    fullscreen?: boolean;
    headerContainerClassName?: string;
    footerContainerClassName?: string;
    contentContainerClassName?: string;
    content?: any;
    onOk?: () => void;
    onCancel?: () => void;
    zindex?: number;
    handleModalScroll?: () => void;
    confirmBtnClass?: string;
}

interface ModalsState {
    // dataStorageModalVisible: boolean;
    // submissionModalVisible: boolean;
    // submissionHintModalVisible: boolean;
    // successSubmissionModalVisible: boolean;
    // failSubmissionModalVisible: boolean;
    // previewModalVisible: boolean;
    // previewMsgModalVisible: boolean;
    // onlineAuthApplyModalVisible
    // previewMsgModalModalProps
    [modalName: string]: boolean | ModalProps ;
}

export type UIAction = UpdatePage1ImportModalVisibleAction
    | SetModalVisibleAction
    | UpdatePreviewActiveKeyAction;
