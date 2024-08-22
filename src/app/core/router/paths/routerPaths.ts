/**
 * @description 路由路徑宣告
 */
export enum ROUTES {
    /** 首頁 (module) */
    HOME = '',

    INSURANCE = '/Insurance',

    PAGE_1 = '/Insurance/page1',

    PAGE = '/Page',

    PAGE_EMPTY = '/Page/pageEmpty',

    PAGE_LOGIN = '/Page/Login',

    /** 404頁面 */
    PAGE_ERROR_404 = '/404',
    /** 404頁面 */
    PAGE_ERROR_500 = '/500',

    PAGE_FORGET_AUTH = '/Page/ForgetAuth',

    PAGE_FORGET_AUTH_OTP_AUTH = '/Page/ForgetOtpAuth',

    PAGE_FORGET_SETUP = '/Page/ForgetSetup',

    PAGE_SETTINGS_PASS_PHRASE_AUTH = '/Page/Password/Auth',

    PAGE_SETTINGS_PASS_PHRASE_SETUP = '/Page/Password/Setup',

    PAGE_ONLINE_AUTH_APPLY = '/Page/OnlineAuthApply',
}
