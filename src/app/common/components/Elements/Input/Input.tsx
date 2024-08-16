import React, { useRef } from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ id, className, ...props }) => {
  const inputElemIdRef = useRef<string | undefined>(id ? id.split('.').join('-') : undefined);

  return (
    <>
      <input {...props} id={inputElemIdRef.current} className={'form-control' + (className ? ` ${className}` : '')} aria-label={props.title} />
    </>

  );
};

export default Input;
