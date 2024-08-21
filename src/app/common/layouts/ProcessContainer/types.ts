export interface ProcessContainerProps {
  title: string;
  themeText?: string;
  wrapClassName?: string;
  currentStep: string;
  stepsBarVisible: boolean;
  steps: Step[];
}

export interface Step {
  title: string;
  subTitles?: string[];
  visible: boolean;
}
