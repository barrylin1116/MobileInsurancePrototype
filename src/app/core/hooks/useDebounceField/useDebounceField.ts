import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { UseDebounceFieldProps } from './types';

const useDebounceField = ({ value, onChange, wait = 0 }: UseDebounceFieldProps) => {
  const [localValue, setLocalValue] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const triggerOnChange = useCallback(
    _.debounce((event) => {
      onChange(event);
    }, wait),
    [wait, onChange]
  );

  const handleChange = useCallback(
    (event) => {
      const val = event.target.value;
      setLocalValue(val);
      if (wait) {
        event.persist();
        triggerOnChange(event);
      } else {
        onChange(event);
      }
    },
    [onChange, wait, setLocalValue, triggerOnChange]
  );

  useEffect(
    () => {
      setLocalValue(value);
    },
    [value]
  );

  return {
    value: localValue,
    handleChange
  };
};

export default useDebounceField;
