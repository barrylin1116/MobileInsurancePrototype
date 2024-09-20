import React, { useEffect, useState } from 'react';

const TopButton: React.FC<any> = ({ isModal = false, containerRef, ...props }) => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    if (containerRef) {
      const handleModalScroll = (e: any) => {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        console.log(`第一個: ${containerRef.current}`);
        console.log(`scrollTop: ${scrollTop}`);
        console.log(`scrollHeight: ${scrollHeight}`);
        console.log(`clientHeight: ${clientHeight}`);

        // Check if scrolled to the bottom
        if (scrollTop + clientHeight >= (scrollHeight - scrollHeight * 0.2)) {
          setShowTop(true);
        } else {
          setShowTop(false);
        }
      };

      containerRef.current.addEventListener('scroll', handleModalScroll);
      return () => {
        containerRef.current.removeEventListener('scroll', handleModalScroll);
      };
    }

    if (!isModal) {
      const handleScroll = (e: any) => {
        console.log(`第二個: ${containerRef.current}`);
        setShowTop((document.documentElement.scrollHeight - window.innerHeight) <= (window.scrollY + 50));
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      const handleModalScroll = (e: any) => {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        console.log(`第三個: ${containerRef.current}`);
        console.log(`scrollTop: ${scrollTop}`);
        console.log(`scrollHeight: ${scrollHeight}`);
        console.log(`clientHeight: ${clientHeight}`);
        // Check if scrolled to the bottom
        if (scrollTop + clientHeight >= (scrollHeight - scrollHeight * 0.2)) {
          setShowTop(true);
        } else {
          setShowTop(false);
        }
      };

      containerRef.current.addEventListener('scroll', handleModalScroll);
      return () => {
        containerRef.current.removeEventListener('scroll', handleModalScroll);
      };
    }
  }, []);

  return showTop
    ? (
      <img
        src={require('assets/img/pic/TOP.png')}
        className="topBtn" onClick={() => {
          isModal
            ? containerRef.current.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            : document.documentElement.scrollTop = 0;
        }}
      />
      )
    : <></>;
};

export default TopButton;
