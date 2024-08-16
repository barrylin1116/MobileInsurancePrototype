import { StorageKeysEnum, StorageTypesEnum } from 'app/core/enums/storage';

/**
 * @description Storage defines
 */
export const StorageDefines: Readonly<Record<StorageKeysEnum, StorageTypesEnum>> = {
  /** Session Id */
  [StorageKeysEnum.SessionId]: StorageTypesEnum.Local,
  /** 登入授權 (會員主檔 & Access Token) */
  [StorageKeysEnum.Authorization]: StorageTypesEnum.Session,
  /** 應用熊寶悄悄話 (繳費提示區塊) */
  [StorageKeysEnum.ApplyReminder]: StorageTypesEnum.Session
};
