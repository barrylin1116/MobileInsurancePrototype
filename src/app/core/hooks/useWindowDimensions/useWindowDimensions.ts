import { useState, useLayoutEffect } from 'react';

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState<number[]>([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const updateWindowDimensions = () => {
    setDimensions([window.innerWidth, window.innerHeight]);
  };

  return dimensions;
};

export default useWindowDimensions;
