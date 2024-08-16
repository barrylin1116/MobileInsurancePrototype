import React from 'react';
import Input from 'app/common/components/Elements/Input';
import { AddressFieldsGroupProps } from './types';
import { Select } from 'antd';

const AddressFieldsGroup01: React.FC<AddressFieldsGroupProps> = (props) => {
  const cityFieldOptions = [
    {
      cityId: '100',
      cityName: '台北市'
    }
  ];
  const areaFieldOptions = [{
    areaId: '101',
    areaName: '大同區'
  }];
  const streetFieldOptions = [{
    roadId: '100101001',
    roadName: '五原路'
  }];
  return (
    <div id={props.groupId} className={'col-11 address' + ((props.syncLabel) ? ' dependence-address' : '')}>
      <div className="address-row flex">
        {/* 縣市 */}
        <div className="col-3">
          <Select
            id={props.id ? props.id[0] : props.name[0]}
            className="selectpicker county"
            placeholder="縣市"
            style={{ display: 'flex', width: '120px' }}
          >
            {cityFieldOptions.map((option, optionIndex) => (
              <Select.Option value={option.cityId} key={optionIndex}>
                {option.cityName}
              </Select.Option>
            ))}
          </Select>
        </div>
        {/* 區域 */}
        <div className="col-3 ml-3">
          <Select
            style={{ display: 'flex' }}
            id={props.id ? props.id[1] : props.name[1]}
            className="selectpicker district"
            placeholder="區域"
          >
            {areaFieldOptions.map((option, optionIndex) => (
              <Select.Option value={option.areaId} key={optionIndex}>
                {option.areaName}
              </Select.Option>
            ))}
          </Select>
        </div>
        {/* 郵遞區號 */}
        <div className="col-3 ml-3">
          <Input
            type="text"
            style={{ fontSize: '1.4rem' }}
            name={props.name[2]}
            id={props.id ? props.id[2] : props.name[2]}
            className="zip-code"
            placeholder="郵遞區號"
          />
        </div>
        {/* 街/路名稱 */}
        <div className="col-3 ml-3">
          <Select
            id={props.id ? props.id[3] : props.name[3]}
            className="selectpicker street"
            placeholder="請選擇路名"
          >
            {streetFieldOptions.map((option, optionIndex) => (
              <Select.Option value={option.roadId} key={optionIndex}>
                {option.roadName}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="address-row align-items-center flex">
        <div className="d-flex align-items-center">
          {/* 巷 */}
          <Input
            type="text"
            name={props.name[5]}
            id={props.id ? props.id[5] : props.name[5]}
            className="lane"
          />
          <span className="text">巷</span>
          {/* 弄 */}
          <Input
            type="text"
            name={props.name[6]}
            id={props.id ? props.id[6] : props.name[6]}
            className="alley"
          />
          <span className="text">弄</span>

        </div>
        <div className="d-flex align-items-center">
          {/* 號 */}
          <Input
            type="text"
            name={props.name[7]}
            id={props.id ? props.id[7] : props.name[7]}
            className="num"
          />
          <span className="text">之</span>
          {/* 號之 */}
          <Input
            type="text"
            name={props.name[8]}
            id={props.id ? props.id[8] : props.name[8]}
            className="num-dash"
          />
          <span className="text">號</span>
        </div>
        <div className="d-flex align-items-center">
          {/* 樓 */}
          <Input
            type="text"
            name={props.name[9]}
            id={props.id ? props.id[9] : props.name[9]}
            className="floor"
          />
          <span className="text">樓之</span>
          {/* 樓之 */}
          <Input
            type="text"
            name={props.name[10]}
            id={props.id ? props.id[10] : props.name[10]}
            className="floor-dash"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddressFieldsGroup01);
