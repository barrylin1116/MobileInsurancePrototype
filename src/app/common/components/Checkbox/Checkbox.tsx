import React from 'react';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({ className, children, ...props }) => (
  <div className={'form-check mt-0' + (className ? ` ${className}` : '')}>
    <label className="form-check-label" htmlFor={props.id}>
      {children}
    </label>
    <input id={props.id} {...props} type="checkbox" className="form-check-input me-1 mb-1 custom-checkbox" aria-label={props.title} />
  </div>
);

export default Checkbox;
