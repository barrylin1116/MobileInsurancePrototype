import React from 'react';
import SelectField from '../../../common/components/Elements/SelectField';

const Branch: React.FC = () => {
  return (
    <SelectField
      label="分行名稱"
      className="selectpicker w-100 relation"
      placeholder="請選擇分行名稱"
      title="請選擇分行名稱"
      name="branch"
    >
      <>
        <SelectField.Option value="0037" key="0037">
          營業部
        </SelectField.Option>
        <SelectField.Option value="0059" key="0059">
          公庫部
        </SelectField.Option>
        <SelectField.Option value="0071" key="0071">
          館前分行
        </SelectField.Option>
        <SelectField.Option value="0093" key="0093">
          臺南分行
        </SelectField.Option>
        <SelectField.Option value="0107" key="0107">
          臺中分行
        </SelectField.Option>
        <SelectField.Option value="0118" key="0118">
          高雄分行
        </SelectField.Option>
        <SelectField.Option value="0129" key="0129">
          基隆分行
        </SelectField.Option>
        <SelectField.Option value="0130" key="0130">
          中興新村分行
        </SelectField.Option>
        <SelectField.Option value="0141" key="0141">
          嘉義分行
        </SelectField.Option>
      </>
    </SelectField>
  );
};

export default React.memo(Branch);
