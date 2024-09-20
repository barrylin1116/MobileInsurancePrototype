import { Reducer } from 'react';
import {
  COMMON__INIT_FETCH_COMMON_DATA_DONE,
  COMMON__UPDATE_LOGIN_STATUS
} from './types';

const initialState: any = {
  requiredDocumentsList: [],
  loginInfo: {}
};

const commonReducer: Reducer<any, any> = (state = initialState, action): any => {
  switch (action.type) {
    case COMMON__INIT_FETCH_COMMON_DATA_DONE: {
      return {
        ...state,
        ...action.payload.response
      };
    }
    case COMMON__UPDATE_LOGIN_STATUS: {
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          status: action.payload.response.data.status
        }
      };
    }
    // Default
    default:
      return state;
  }
};

export default commonReducer;
