import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';

interface CountdownContextProps {
  timeMillSecond: number;
  resetTimeMillSecond: (second?: number) => void;
}

// Create a Context for the timeMillSecond variable
const TimeContext = React.createContext<CountdownContextProps | undefined>(undefined);

// Create a provider component
export const TimeProvider: React.FC<any> = ({ children }) => {
  const status = useSelector((state: RootState) => state.common.loginInfo.status);
  const [timeMillSecond, setTimeMillSecond] = useState(300);

  useEffect(() => {
    if (status) {
      const interval = setInterval(() => {
        setTimeMillSecond((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval); // 清除計時器
    }
  }, [status]);

  const resetTimeMillSecond = (second?: number) => {
    setTimeMillSecond(second ?? 300); // 重置倒數計時
  };

  useEffect(() => {
    if (timeMillSecond === 0) {
      alert('您已被登出！');
      // 執行登出操作，例如重定向到登入頁面
    }
  }, [timeMillSecond]);

  return (
    <TimeContext.Provider value={{ timeMillSecond, resetTimeMillSecond }}>
      {children}
    </TimeContext.Provider>
  );
};

// 使用倒數計時的 hook
export const useTimeMillSecond = () => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error('useCountdown 必須在 CountdownProvider 中使用');
  }
  return context;
};
