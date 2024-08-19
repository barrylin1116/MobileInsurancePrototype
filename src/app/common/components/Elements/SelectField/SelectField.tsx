import React from 'react';
import Select from 'app/common/components/Elements/Select';
import { SelectFieldProps, SelectFieldChildComponents } from './types';
import Option from './Option';

const SelectField: React.FC<SelectFieldProps> & SelectFieldChildComponents = ({ label, wrapClassName, children, ...props }) => (
  label
    ? (
      <div className={'col-12 w-90-pct ' + (wrapClassName ? ` ${wrapClassName}` : '')}>
        <div className="name labelName">{label}</div>
        <Select
          {...props}
          label={label}
          id={props.id ? props.id : props.name}
          className={(props.className ? ` ${props.className}` : '') + (props.errorMessage ? ' field--invalid' : '')}
          isValid={!props.errorMessage}
          title={props.title}
        >
          {children}
        </Select>
        {props.errorMessage && (
          <div className="notes warn mt-2">{props.errorMessage}</div>
        )}
      </div>
      )
    : (
      <Select {...props} label="" id={props.id ? props.id : props.name}>
        {children}
      </Select>
      )
);

SelectField.Option = Option;

export default SelectField;
