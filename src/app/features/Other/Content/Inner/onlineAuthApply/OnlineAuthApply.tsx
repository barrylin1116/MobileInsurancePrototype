import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const OnlineAuthApply: React.FC<any> = (props) => {
  return (
    <>
      {
        props.activeContent === 1 && <Step1 />
      }
      {
          props.activeContent === 2 && <Step2 />
      }
      {
          props.activeContent === 3 && <Step3 />
      }
    </>
  );
};

export default OnlineAuthApply;
