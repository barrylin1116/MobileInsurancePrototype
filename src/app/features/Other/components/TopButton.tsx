import React, { useEffect, useState } from 'react';

const TopButton: React.FC<any> = ({ isModal = false, containerRef, ...props }) => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    if (!isModal) {
      const handleScroll = (e: any) => {
        console.log(`document.documentElement.scrollHeight: ${document.documentElement.scrollHeight}`);
        console.log(`window.innerHeight: ${window.innerHeight}`);
        console.log(`isModal: ${isModal}`);
        setShowTop((document.documentElement.scrollHeight - window.innerHeight) <= (window.scrollY + 50));
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      console.log(containerRef);
      const handleModalScroll = (e: any) => {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        // Check if scrolled to the bottom
        if (scrollTop + clientHeight >= scrollHeight) {
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
      <div
        className="topBtn" onClick={() => {
          isModal
            ? containerRef.current.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            : document.documentElement.scrollTop = 0;
        }}
      >
        Top
      </div>
      )
    : <></>;
};

export default TopButton;
