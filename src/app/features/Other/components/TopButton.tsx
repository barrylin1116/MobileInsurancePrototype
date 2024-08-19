import React, { useEffect, useState } from 'react';

const TopButton: React.FC<any> = (props) => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = (e: any) => {
      setShowTop((document.documentElement.scrollHeight - window.innerHeight) <= (window.scrollY + 50));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showTop
    ? (
      <div className="topBtn" onClick={() => { document.documentElement.scrollTop = 0; }}>
        Top
      </div>
      )
    : <></>;
};

export default TopButton;
