import React from 'react';
import SelectField from 'app/common/components/Elements/SelectField';

const Bank: React.FC = () => {
  return (
    <SelectField
      label="銀行名稱"
      className="selectpicker w-100 relation"
      placeholder="請選擇銀行名稱"
      title="請選擇銀行名稱"
      name="bank"
    >
      <>
        <SelectField.Option value="004" key="004">
          臺灣銀行
        </SelectField.Option>
        <SelectField.Option value="005" key="005">
          臺灣土地銀行
        </SelectField.Option>
        <SelectField.Option value="006" key="006">
          合作金庫商業銀行
        </SelectField.Option>
        <SelectField.Option value="007" key="007">
          第一商業銀行
        </SelectField.Option>
        <SelectField.Option value="008" key="008">
          華南商業銀行
        </SelectField.Option>
        <SelectField.Option value="009" key="009">
          彰化商業銀行
        </SelectField.Option>
      </>
    </SelectField>
  );
};

export default React.memo(Bank);
