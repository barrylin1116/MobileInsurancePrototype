import { ROUTES } from 'app/core/router/paths';

/**
 * @description 流程步驟代碼
 */
export enum ProcessStepCodesEnum {
  /** 輸入基本資料 (Step-1-1) */
  Auth = '1-1',
  /** 輸入基本資料 (Step-1-2) */
  AuthOTPAuth = '1-2',
  /** 設定新密碼 (Step-2) */
  Setup = '2',
}

/**
 * @description 流程步驟文字
 */
export enum ProcessStepTextEnum {
  /** 輸入基本資料 (Step-1-1) */
  Auth = '輸入基本資料',
  /** 輸入基本資料 (Step-1-2) */
  AuthOTPAuth = '輸入基本資料',
  /** 設定新密碼 (Step-2) */
  Setup = '設定新密碼',
}

/**
 * @description 流程路由對應步驟代碼
 */
export const ProcessRouteMatchesStep: Readonly<Record<string, ProcessStepCodesEnum>> = {
  /** 輸入基本資料 (Step-1-1) */
  [ROUTES.PAGE_FORGET_AUTH]: ProcessStepCodesEnum.Auth,
  /** 輸入基本資料 (Step-1-2) */
  [ROUTES.PAGE_FORGET_AUTH_OTP_AUTH]: ProcessStepCodesEnum.AuthOTPAuth,
  /** 設定新密碼 (Step-2) */
  [ROUTES.PAGE_FORGET_SETUP]: ProcessStepCodesEnum.Setup
};

/**
 * @description 流程步驟代碼對應路由
 */
export const ProcessStepMatchesRoute: Readonly<Record<ProcessStepCodesEnum, string>> = {
  /** 輸入基本資料 (Step-1-1) */
  [ProcessStepCodesEnum.Auth]: ROUTES.PAGE_FORGET_AUTH,
  /** 輸入基本資料 (Step-1-2) */
  [ProcessStepCodesEnum.AuthOTPAuth]: ROUTES.PAGE_FORGET_AUTH_OTP_AUTH,
  /** 設定新密碼 (Step-2) */
  [ProcessStepCodesEnum.Setup]: ROUTES.PAGE_FORGET_SETUP
};
