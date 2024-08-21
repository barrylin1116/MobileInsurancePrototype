import Item from './Item';

export interface ProgressBarProps {
  currentStep: string;
}

export interface ProgressBarChildComponents {
  Item: typeof Item;
}

export interface ProgressBarContextValues {
  currentStep: string;
}
