import React, { useEffect, useState } from 'react';
import { round } from 'lodash';

const SignTopButton: React.FC<any> = ({ isModal = false, containerRef, ...props }) => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    if (!isModal) {
      const handleScroll = (e: any) => {
        setShowTop((document.documentElement.scrollHeight - window.innerHeight) <= (window.scrollY + 50));
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      const handleModalScroll = (e: any) => {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const pdfCards = document.getElementsByClassName('pdfCard');
        for (let index = 0; index < pdfCards.length; index++) {
          // const next = pdfCards.item(index + 1);
          const current = pdfCards.item(index);
          // const nextHeight = next ? next.getBoundingClientRect().y : scrollHeight;
          const currentHeight = current ? current.getBoundingClientRect().y : 0;
          const currentClientHeight = current ? current.clientHeight : 0;
          // console.log(`(currentHeight - 128) + currentClientHeight: ${(currentHeight - 128) + currentClientHeight}`);
          // debugger;
          if (round(currentHeight) <= 128 && round(currentHeight) >= (128 - currentClientHeight)) {
            props.setActivePage((index + 1));
          }
        }
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

export default SignTopButton;
