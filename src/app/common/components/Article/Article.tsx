import React, { useRef } from 'react';

const Article: React.FC<any> = (props) => {
  const divRef = useRef<HTMLDivElement>(null);

  const checkScrollToBottom = () => {
    if (divRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = divRef.current;
      console.log(`scrollTop: ${scrollTop}`);
      console.log(`scrollHeight: ${scrollHeight}`);
      console.log(`clientHeight: ${clientHeight}`);

      if (scrollTop + clientHeight >= (scrollHeight - scrollHeight * 0.2)) {
        if (props.onScrollToBottom) props.onScrollToBottom();
      }
    }
  };

  return (
    <div className="container mh-100">
      <div className="article-container">
        <div className="article-title">
          <a className="article-scroll-hint">請下拉卷軸至內容文末 </a>
        </div>
        <div
          ref={divRef}
          onScroll={checkScrollToBottom}
          className="article-content-container"
        >
          <div className="container">
            <div className="row flex-column justify-content-center align-items-center">
              <div className="col h-50 overflow-y-auto">
                {props.children}
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row flex-column justify-content-center align-items-center">
            <div className="col">
              {props.footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
