import React from 'react';
import ThemeBanner from 'app/common/components/ThemeBanner';
import ProgressBar from 'app/common/components/ProgressBar';
import { ProcessContainerProps } from './types';

const ProcessContainer: React.FC<ProcessContainerProps> = (props) => (
  <div className={'process' + (props.wrapClassName ? ` ${props.wrapClassName}` : '')}>
    <div className="clouds-group-bg">
      {props.themeText && (
        <ThemeBanner visible>{props.themeText}</ThemeBanner>
      )}
      <div className="main-container container">
        <h1 className={'text-center' + (!props.stepsBarVisible || props.steps.length <= 0 ? ' no-progress-bar' : '')}>
          {props.title}
        </h1>
        {props.stepsBarVisible && props.steps.length > 0 && (
          <ProgressBar currentStep={props.currentStep}>
            {props.steps.map((step, index) => step.visible
              ? (
                <ProgressBar.Item subSteps={step.subTitles} key={index}>
                  {step.title}
                </ProgressBar.Item>
                )
              : null)}
          </ProgressBar>
        )}
        {props.children}
      </div>
    </div>
  </div>
);

export default ProcessContainer;
