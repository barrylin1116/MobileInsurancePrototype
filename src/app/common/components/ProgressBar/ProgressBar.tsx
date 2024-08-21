import React from 'react';
import { ProgressBarProps, ProgressBarChildComponents } from './types';
import ProgressBarContext from './ProgressBarContext';
import Item from './Item';

const ProgressBar: React.FC<ProgressBarProps> & ProgressBarChildComponents = (props) => (
  <ProgressBarContext.Provider value={{ currentStep: props.currentStep }}>
    <div className="progress-bar">
      {React.Children.map(
        props.children,
        (child, index) => React.isValidElement(child) ? React.cloneElement(child, { step: String(index + 1) }) : child
      )}
    </div>
  </ProgressBarContext.Provider>
);

ProgressBar.Item = Item;

export default ProgressBar;
