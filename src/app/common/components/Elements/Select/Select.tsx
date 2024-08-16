import React, { useRef, useEffect } from 'react';
import { SelectProps, SelectChildComponents } from './types';
import Option from './Option';

// declare const $: any;

const Select: React.FC<SelectProps> & SelectChildComponents = ({ label, id, isValid, ...props }) => {
  const inputElemRef = useRef<HTMLSelectElement>(null);
  const inputElemIdRef = useRef<string>(id.split('.').join('-'));

  /**
   * @description bootstrap-select 套件初始化
   */
  useEffect(() => {
    // $(`#${inputElemIdRef.current}`).selectpicker();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * @description 針對非同步資料進行同步
   */
  useEffect(() => {
    // $(`#${inputElemIdRef.current}`).selectpicker('refresh');
  }, [inputElemIdRef, props.children]);

  /**
   * @description 處理若已驗證，則刪除驗證錯誤的 Class Name
   */
  useEffect(() => {
    if (isValid && inputElemRef.current) {
      const parentElem = inputElemRef.current.parentElement;
      const parentElemClassList = parentElem ? Array.prototype.slice.call(parentElem.classList) : [];
      if (parentElemClassList.includes('field--invalid') && parentElem) {
        parentElem.classList.remove('field--invalid');
      }
    }
  }, [isValid]);

  return (
    <>
      {label && (
        <label htmlFor={inputElemIdRef.current} hidden>{label}</label>
      )}

      <select
        ref={inputElemRef}
        id={inputElemIdRef.current}
        className="from-select"
        {...props}
        aria-label={props.title}
      >
        {props.children}
      </select>

    </>
  );
};

Select.defaultProps = {
  isValid: true
};

Select.Option = Option;

export default Select;
