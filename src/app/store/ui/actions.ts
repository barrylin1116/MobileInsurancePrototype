import {
  ModalProps,
  UI__PAGE1_IMPORT_MODAL_VISIBLE__UPDATE,
  UI__PREVIEW_TAB_ACTIVEKEY, UI_MODALS__SET_MODAL_VISIBLE,
  UIAction
} from './types';
import { ModalNamesEnum } from '../../core/enums/ui/modals';

/**
 * @description 匯入既有保戶資料 開啟
 * @param response 請求回傳的 Response
 */
export const updatePage1ImportModalVisibleAction = (visible: boolean): UIAction => ({
  type: UI__PAGE1_IMPORT_MODAL_VISIBLE__UPDATE,
  payload: visible
});

/**
 * @description [Modals] 設置 Modal 能見度 (Action)
 * @param name Modal name
 * @param visible 能見度
 */
export const setModalVisibleAction = (name: ModalNamesEnum, visible: boolean, modalProps?: ModalProps): UIAction => ({
  type: UI_MODALS__SET_MODAL_VISIBLE,
  payload: { name, visible, modalProps }
});

export const updatePreviewActiveKeyAction = (key: string): UIAction => ({
  type: UI__PREVIEW_TAB_ACTIVEKEY,
  payload: key
});
