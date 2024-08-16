import React from 'react';
import { OptionProps } from './types';

const Option: React.FC<OptionProps> = ({ children, ...props }) => (
  <option {...props} title={children?.toString()} aria-label={children?.toString()}>{children}</option>
);

export default Option;
