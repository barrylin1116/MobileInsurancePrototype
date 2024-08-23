import React from 'react';
import ArticleDisplayer from 'app/features/Other/components/ArticleDisplayer';

const Step2: React.FC<any> = (props) => {
  return (
    <div className="justify-center d-flex pt-3">
      <div className="process">
        <ArticleDisplayer />
      </div>
    </div>
  );
};

export default Step2;
