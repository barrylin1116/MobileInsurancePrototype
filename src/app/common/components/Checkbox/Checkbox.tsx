import React from 'react';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({ className, children, classNames, ...props }) => (
  // <div className={'form-check d-flex align-items-center' + (className ? ` ${className}` : '')}>
  //     <input id={props.id} {...props} type="checkbox"
  //            className={`form-check-input ${classNames ? classNames.inputClass : ''}`} aria-label={props.title}/>
  //     <label className={`form-check-label ${classNames ? classNames.labelClass : ''}`} htmlFor={props.id}>
  //         {children}
  //     </label>
  // </div>
  <div className={`form-check ${className || ''}`}>
    <input className={`form-check-input custom-checkbox ${classNames ? classNames.inputClass : ''}`} type="checkbox" value="" id="flexCheckDefault" disabled={props.disabled} />
    <label className={`form-check-label ${classNames ? classNames.labelClass : ''}`} htmlFor="flexCheckDefault">
      {children}
    </label>
  </div>
);

export default Checkbox;
