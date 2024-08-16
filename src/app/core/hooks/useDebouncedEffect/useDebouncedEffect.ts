import React, { useEffect } from 'react';

/**
 * @description Debounce Hook
 * @param func function
 * @param deps
 * @param wait 延遲時間 (ms)
 */
const useDebouncedEffect = (
  func: () => void,
  deps: React.DependencyList,
  wait: number
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      func();
    }, wait);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDebouncedEffect;
