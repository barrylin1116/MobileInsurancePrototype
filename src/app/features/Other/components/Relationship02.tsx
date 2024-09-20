import React from 'react';
import SelectField from '../../../common/components/Elements/SelectField';

const Relationship02: React.FC<any> = (props) => {
  return (
    <>
      {/* <div className="col"> */}
      {/* <div className="dropdown bootstrap-select w-100 relation"> */}
      {/*  <select */}
      {/*    id="applicant-policyBeneficiary-0-relationShip" name="applicant.policyBeneficiary.0.relationShip" */}
      {/*    className="selectpicker w-100 relation" placeholder="請選擇受益人關係" data-field-invalid="false" */}
      {/*    title="請選擇受益人關係" aria-label="請選擇受益人關係" */}
      {/*    data-gtm-form-interact-field-id="25" */}
      {/*  > */}
      {/*    <option className="bs-title-option" value="" /> */}
      {/*    <option value="11" title="法定繼承人" aria-label="法定繼承人">法定繼承人</option> */}
      {/*    <option value="02" title="配偶" aria-label="配偶">配偶</option> */}
      {/*    <option value="03" title="父母" aria-label="父母">父母</option> */}
      {/*    <option value="04" title="子女" aria-label="子女">子女</option> */}
      {/*    <option value="05" title="祖父母" aria-label="祖父母">祖父母</option> */}
      {/*    <option value="06" title="孫子女" aria-label="孫子女">孫子女</option> */}
      {/*  </select> */}
      {/*  <button */}
      {/*    type="button" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" */}
      {/*    role="combobox" aria-owns="bs-select-34" aria-haspopup="listbox" aria-expanded="true" */}
      {/*    title="法定繼承人" data-id="applicant-policyBeneficiary-0-relationShip" */}
      {/*  > */}
      {/*    <div className="filter-option"> */}
      {/*      <div className="filter-option-inner"> */}
      {/*        <div className="filter-option-inner-inner">配偶</div> */}
      {/*      </div> */}
      {/*    </div> */}
      {/*  </button> */}
      {/*  <div */}
      {/*    className="dropdown-menu" */}
      {/*    style={{ */}
      {/*      maxHeight: '500.333px', */}
      {/*      overflow: 'hidden', */}
      {/*      minHeight: '112px', */}
      {/*      position: 'absolute', */}
      {/*      inset: '0px auto auto 0px', */}
      {/*      margin: '0px', */}
      {/*      transform: 'translate3d(0px, 52px, 0px)' */}
      {/*    }} */}
      {/*    data-popper-placement="bottom-start" */}
      {/*  > */}
      {/*    <div */}
      {/*      className="inner" role="listbox" id="bs-select-34" */}
      {/*      style={{ maxHeight: '484.333px', overflowY: 'auto', minHeight: '96px' }} */}
      {/*      aria-activedescendant="bs-select-34-0" */}
      {/*    > */}
      {/*      <ul */}
      {/*        className="dropdown-menu inner show" role="presentation" */}
      {/*        style={{ marginTop: '0px', marginBottom: '0px' }} */}
      {/*      > */}
      {/*        <li> */}
      {/*          <a role="option" className="dropdown-item" id="bs-select-34-1"> */}
      {/*            <span className="labelName">法定繼承人</span> */}
      {/*          </a> */}
      {/*        </li> */}
      {/*        <li> */}
      {/*          <a role="option" className="dropdown-item" id="bs-select-34-1"> */}
      {/*            <span className="labelName">配偶</span> */}
      {/*          </a> */}
      {/*        </li> */}
      {/*        <li> */}
      {/*          <a role="option" className="dropdown-item" id="bs-select-34-2"> */}
      {/*            <span className="labelName">父母</span> */}
      {/*          </a> */}
      {/*        </li> */}
      {/*        <li> */}
      {/*          <a role="option" className="dropdown-item" id="bs-select-34-3"> */}
      {/*            <span className="labelName">子女</span> */}
      {/*          </a> */}
      {/*        </li> */}
      {/*        <li> */}
      {/*          <a role="option" className="dropdown-item" id="bs-select-34-4"> */}
      {/*            <span className="labelName">祖父母</span> */}
      {/*          </a> */}
      {/*        </li> */}
      {/*        <li> */}
      {/*          <a role="option" className="dropdown-item" id="bs-select-34-5"> */}
      {/*            <span className="labelName">孫子女</span> */}
      {/*          </a> */}
      {/*        </li> */}
      {/*      </ul> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}
      {/* </div> */}
      <div className="row">
        <div className="col">
          <div className="form-label labelName m-0">關係</div>
          <SelectField
            label=""
            className="selectpicker w-100 relation"
            placeholder="請選擇授權扣款銀行"
            title="請選擇授權扣款銀行"
            name={`Beneficiary.${props.index}.relationShip`}
          >
            <SelectField.Option className="bs-title-option" value="" />
            <SelectField.Option value="11" title="法定繼承人" aria-label="法定繼承人">法定繼承人</SelectField.Option>
            <SelectField.Option value="02" title="配偶" aria-label="配偶">配偶</SelectField.Option>
            <SelectField.Option value="03" title="父母" aria-label="父母">父母</SelectField.Option>
            <SelectField.Option value="04" title="子女" aria-label="子女">子女</SelectField.Option>
            <SelectField.Option value="05" title="祖父母" aria-label="祖父母">祖父母</SelectField.Option>
            <SelectField.Option value="06" title="孫子女" aria-label="孫子女">孫子女</SelectField.Option>
          </SelectField>
        </div>
      </div>
    </>
  );
};

export default React.memo(Relationship02);
