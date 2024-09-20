export const COMMON__INIT_FETCH_COMMON_DATA = 'COMMON__INIT_FETCH_COMMON_DATA';
export const COMMON__INIT_FETCH_COMMON_DATA_DONE = 'COMMON__INIT_FETCH_COMMON_DATA_DONE';
export const COMMON__UPDATE_LOGIN_STATUS = 'COMMON__UPDATE_LOGIN_STATUS';

export interface InitFetchCommonDataAction {
    type: typeof COMMON__INIT_FETCH_COMMON_DATA;
}

export interface InitFetchCommonDataDoneAction {
    type: typeof COMMON__INIT_FETCH_COMMON_DATA_DONE;
    payload: {
        response: any;
    };
}

export interface UpdateLoginStatusAction {
    type: typeof COMMON__UPDATE_LOGIN_STATUS;
    payload: {
        response: any;
    }
}

export type CommonActions =
    InitFetchCommonDataAction
    | InitFetchCommonDataDoneAction
    | UpdateLoginStatusAction;
