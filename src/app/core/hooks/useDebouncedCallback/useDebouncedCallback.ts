import { useRef, useEffect, useCallback } from 'react';

/**
 * @description Debounce Hook
 * @param callbackFunc Callback function
 * @param wait 延遲時間 (ms)
 */
const useDebouncedCallback = <T extends any[]>(
  callbackFunc: (...args: T) => void,
  wait: number
) => {
  const argsRef = useRef<T>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // make sure our timeout gets cleared if our consuming component gets unmounted
  useEffect(() => cleanup, []);

  // clear debounce timer method
  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return useCallback((...args: T) => {
    // capture latest args
    argsRef.current = args;
    // clear debounce timer
    cleanup();
    // start waiting again
    timeoutRef.current = setTimeout(() => {
      if (argsRef.current) {
        callbackFunc(...argsRef.current);
      }
    }, wait);
  }, [callbackFunc, wait]);
};

export default useDebouncedCallback;
