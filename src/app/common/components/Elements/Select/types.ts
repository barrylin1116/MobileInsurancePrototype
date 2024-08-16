import Option from './Option';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  ref?: React.Ref<HTMLSelectElement>;
  isValid?: boolean;
}

export interface SelectChildComponents {
  Option: typeof Option;
}
