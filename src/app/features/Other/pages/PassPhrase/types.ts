import { ROUTES } from 'app/core/router/paths';

/**
 * @description 流程步驟代碼
 */
export enum ProcessStepCodesEnum {
  /** 輸入原密碼 (Step-1) */
  Auth = '1',
  /** 輸入新密碼 (Step-2) */
  Setup = '2'
}

/**
 * @description 流程步驟文字
 */
export enum ProcessStepTextEnum {
  /** 輸入原密碼 (Step-1) */
  Auth = '輸入原密碼',
  /** 輸入新密碼 (Step-2) */
  Setup = '輸入新密碼'
}

/**
 * @description 流程路由對應步驟代碼
 */
export const ProcessRouteMatchesStep: Readonly<Record<string, ProcessStepCodesEnum>> = {
  /** 輸入原密碼 (Step-1) */
  [ROUTES.PAGE_SETTINGS_PASS_PHRASE_AUTH]: ProcessStepCodesEnum.Auth,
  /** 輸入新密碼 (Step-2) */
  [ROUTES.PAGE_SETTINGS_PASS_PHRASE_SETUP]: ProcessStepCodesEnum.Setup
};

/**
 * @description 流程步驟代碼對應路由
 */
export const ProcessStepMatchesRoute: Readonly<Record<ProcessStepCodesEnum, string>> = {
  /** 計算保費 (Step-1) */
  [ProcessStepCodesEnum.Auth]: ROUTES.PAGE_SETTINGS_PASS_PHRASE_AUTH,
  /** 填寫資料 (Step-2-1) */
  [ProcessStepCodesEnum.Setup]: ROUTES.PAGE_SETTINGS_PASS_PHRASE_SETUP
};
