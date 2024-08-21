import React, { useEffect, useRef, useState } from 'react';
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { range } from 'lodash';
import moment from 'moment';
import zhTW from 'date-fns/locale/zh-TW';
import classNames from 'classnames';

registerLocale('zhTW', zhTW);
const DatePickerTW: React.FC<ReactDatePickerProps> = ({
  onChange,
  className,
  selected,
  ...props
}) => {
  const years = range(1, moment(new Date()).get('years') - 1911 + 100, 1);
  const months = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ];
  const [yearOption, setYearOption] = useState<number[]>(years);
  const [monthsOption, setMonthOption] = useState(months);
  const changeMotherRef = useRef<(month: number) => void>();

  useEffect(() => {
    handleChangeYear(moment(selected).toDate());
    if (props.minDate && props.maxDate) {
      setYearOption(years.filter(year => (
        year >= moment(props.minDate).get('year') - 1911) &&
          year <= moment(props.maxDate).get('year') - 1911
      ));
      return;
    }
    if (props.minDate) {
      setYearOption(years.filter(year => (
        year >= moment(props.minDate).get('year') - 1911)
      ));

      return;
    }
    if (props.maxDate) {
      setYearOption(years.filter(year => (
        year <= moment(props.maxDate).get('year') - 1911
      )));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.minDate, props.maxDate]);

  const handleChangeYear = (data: Date | null) => {
    if (!props.minDate && !props.maxDate) {
      setMonthOption(months);
      return;
    }

    const selectYear = moment(data).get('year');
    const selectMonth = moment(data).get('month');
    const minYear = moment(props.minDate).get('year');
    const minMonth = moment(props.minDate).get('month');
    const maxYear = moment(props.maxDate).get('year');
    const maxMonth = moment(props.maxDate).get('month');

    if (props.maxDate && props.minDate && selectYear === maxYear && selectYear === minYear) {
      const newMonth = months.filter((month, index) => index <= maxMonth && index >= minMonth);
      setMonthOption(newMonth);
      if (selectMonth > maxMonth) {
        if (changeMotherRef.current) {
          changeMotherRef.current(maxMonth);
        }
      }
      if (selectMonth < minMonth) {
        if (changeMotherRef.current) {
          changeMotherRef.current(minMonth);
        }
      }
      return;
    }
    if (props.maxDate && selectYear === maxYear) {
      setMonthOption(months.filter((month, index) => index <= maxMonth));
      if (selectMonth > maxMonth) {
        if (changeMotherRef.current) {
          changeMotherRef.current(maxMonth);
        }
      }
      return;
    }
    if (props.minDate && selectYear === minYear) {
      setMonthOption(months.filter((month, index) => index >= minMonth));
      if (selectMonth < minMonth) {
        if (changeMotherRef.current) {
          changeMotherRef.current(minMonth);
        }
      }
      return;
    }
    setMonthOption(months);
  };

  const handleSelect = () => {
    if (!selected) {
      return null;
    }
    const selectDate = selected ? moment(selected, 'yyy/MM/DD').add(1911, 'years').toDate() : moment().toDate();
    const hasMax = !!props.maxDate;
    const hasMin = !!props.minDate;

    if (hasMax && moment(props.maxDate).unix() < moment(selectDate).unix()) {
      return moment(props.maxDate).toDate();
    }

    if (hasMin && moment(props.minDate).unix() > moment(selectDate).unix()) {
      return moment(props.minDate).toDate();
    }
    return selectDate;
  };

  return (
    <DatePicker
      portalId="ois"
      autoComplete="off"
      {...props}
      placeholderText={props.placeholderText}
      className={classNames(
        'datepicker',
        className
      )}
      locale="zhTW"
      showPopperArrow={false}
      calendarStartDay={0}
      readOnly={false}
      disabled={props.disabled}
      selected={handleSelect()}
      onChange={(date, event) => {
        onChange(moment(date).add(-1911, 'years').toDate(), event);
      }}
      onYearChange={handleChangeYear}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth
      }) => {
        changeMotherRef.current = changeMonth;

        return (
          <div className="ui-datepicker-title  bg-[#f5f5f5] mx-2 py-3">

            <select
              className="ui-datepicker-month mr-3 focus:border-[#9ac6c7]
              focus:shadow-[0_0_0_0.25rem_rgba(52,141,143,0.25)]"
              value={months[moment(date).get('month')]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))}
            >
              {monthsOption.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="ui-datepicker-year focus:border-[#9ac6c7]
              focus:shadow-[0_0_0_0.25rem_rgba(52,141,143,0.25)]"
              value={moment(date).get('year')}
              onChange={({ target: { value } }) => {
                changeYear(Number(value));
              }}
            >
              {yearOption.map((option) => (
                <option key={option} value={option + 1911}>
                  {option}
                </option>
              ))}
            </select>

          </div>
        );
      }}
    />
  );
};

export default DatePickerTW;
