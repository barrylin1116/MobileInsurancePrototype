import Option from './Option';

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  wrapClassName?: string;
  errorMessage?: string;
}

export interface SelectFieldChildComponents {
  Option: typeof Option;
}
