import { useRef, useState } from 'react';

/**
 * @description Countdown Timer Hook (倒數計時器)
 * @param initialTime 初始倒數時間 (單位: 毫秒)
 */
const useCountdownTimer = (initialTime: number) => {
  const timerIntervalRef = useRef<ReturnType<typeof setInterval>>();
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [done, setDone] = useState<boolean>(true);

  /**
   * @description 執行倒數計時
   */
  const start = () => {
    let timeRemaining = initialTime;
    // 開始倒數計時，Done 狀態為 false
    setDone(false);
    // 計時器
    timerIntervalRef.current = setInterval(() => {
      if (timeRemaining > 0) {
        // 每秒遞減
        setTimeLeft(timeRemaining -= 1000);
      } else {
        // 倒數計時完成，Done 狀態為 true
        setDone(true);
        // 恢復預設倒數時間
        setTimeLeft(initialTime);
        // 停止計時器
        cleanup();
      }
    }, 1000);
  };

  /**
   * @description 停止計時器
   */
  const cleanup = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };

  /**
   * @description 時間格式化 (mm:ss)
   * @param milisecond 毫秒
   */
  const timeFormater = (milisecond: number) => {
    const secTotal = milisecond / 1000;
    const min = Math.floor(secTotal / 60);
    const sec = String(secTotal % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return {
    timeLeft: timeFormater(timeLeft),
    done,
    start,
    cleanup
  };
};

export default useCountdownTimer;
