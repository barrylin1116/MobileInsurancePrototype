import {
  COMMON__INIT_FETCH_COMMON_DATA,
  COMMON__INIT_FETCH_COMMON_DATA_DONE,
  COMMON__UPDATE_LOGIN_STATUS,
  CommonActions
} from './types';

/**
 * @description 初始取得系統共用選項資料 (Action)
 */
export const initFetchCommonDataAction = (): CommonActions => ({
  type: COMMON__INIT_FETCH_COMMON_DATA
});

/**
 * @description 初始取得系統共用選項資料 完成 (Action)
 * @param response 請求回傳的 Response
 */
export const initFetchCommonDataDoneAction = (response: any): CommonActions => ({
  type: COMMON__INIT_FETCH_COMMON_DATA_DONE,
  payload: { response }
});

/**
 * @description 初始取得系統共用選項資料 完成 (Action)
 * @param response 請求回傳的 Response
 */
export const updateRequiredDocumentsList = (response: any): CommonActions => ({
  type: COMMON__INIT_FETCH_COMMON_DATA_DONE,
  payload: { response }
});

export const updateLoginStatusAction = (data: any): CommonActions => ({
  type: COMMON__UPDATE_LOGIN_STATUS,
  payload: {
    response: { data }
  }
});
