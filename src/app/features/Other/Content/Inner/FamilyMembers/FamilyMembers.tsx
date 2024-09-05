import React, { useState } from 'react';
import ListGroup from '../../../../../common/components/ListGroup';
import SelectField from '../../../../../common/components/Elements/SelectField';
import DatePickerTW from '../../../../../common/components/Elements/DatePickerTW';
import Job from '../../../components/Job';

const FamilyMembers: React.FC<any> = (props) => {
  const [listGroup, setListGroup] = useState<any[]>([{}]);

  const handleAddButtonClick = () => {
    setListGroup([{ aaa: '' }, ...listGroup]);
  };

  return (
    <div className="m-2 p-2 d-flex flex-column">
      <div className="labelName">眷屬列表</div>
      {
        listGroup.map((data, index) => (
          <ListGroup
            key={index}
            index={index}
            title="眷屬"
            addButtonText="新增眷屬"
            showAddButton={index === listGroup.length - 1}
            handleAddButtonClick={handleAddButtonClick}
          >
            <div
              className="row mt-2 flex-column"
            >
              <div className="col align-items-center labelName">
                投保眷屬是否領有身心障礙手冊或身心障礙證明?(如勾選是者，請提供前述手冊或證明。)
              </div>
              <div className="col">
                <div className="d-flex flex-column flex-sm-row">
                  <div className="col col-sm-1"><input
                    className="form-check-input m-1" type="radio" name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault-${index}`}
                                                />
                    <label className="form-check-label m-1" htmlFor={`flexRadioDefault-${index}`}>
                      是
                    </label>
                  </div>
                  <div className="col col-sm-1"><input
                    className="form-check-input m-1" type="radio" name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault2-${index}`}
                    checked
                                                />
                    <label className="form-check-label m-1" htmlFor={`flexRadioDefault2-${index}`}>
                      否
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row mt-2 flex-column"
            >
              <div className="col align-items-center labelName">
                目前是否受有監護宣告?(如勾選是者，請提供相關證明文件。)
              </div>
              <div className="col">
                <div className="d-flex flex-column flex-sm-row">
                  <div className="col col-sm-1"><input
                    className="form-check-input m-1" type="radio" name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault1-${index}`}
                                                />
                    <label className="form-check-label m-1" htmlFor={`flexRadioDefault1-${index}`}>
                      是
                    </label>
                  </div>
                  <div className="col col-sm-1"><input
                    className="form-check-input m-1" type="radio" name={`flexRadioDefault-${index}`}
                    id={`flexRadioDefault2-${index}`}
                    checked
                                                />
                    <label className="form-check-label m-1" htmlFor={`flexRadioDefault2-${index}`}>
                      否
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-sm-6 align-items-center">
                <div className="labelName">與主契約被保險人關係</div>
                <SelectField
                  label=""
                  className="w-100"
                  name={`insurance.partTimeJob.${index}.tradeType`}
                  placeholder="請選擇行業類別"
                >
                  <>
                    <SelectField.Option value="00" key="00">
                      配偶
                    </SelectField.Option>
                    <SelectField.Option value="01" key="01">
                      子女
                    </SelectField.Option>
                  </>
                </SelectField>
              </div>
              <div className="col-sm-6 align-items-center">
                <div className="labelName">身份證字號</div>
                <input type="text" name={`id-${index}`} className="form-control" />
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-sm-6 align-items-center">
                <div className="labelName">姓名</div>
                <input type="text" name={`name-${index}`} className="form-control" />
              </div>
              <div className="col-sm-6 align-items-center">
                <div className="labelName">出生日期</div>
                <DatePickerTW
                  name={`birthday-${index}`} className="form-control" onChange={() => {
                  }}
                />
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-sm-6 align-items-center">
                <div className="labelName">身高(公分)</div>
                <input type="text" name={`height-${index}`} className="form-control" />
              </div>
              <div className="col-sm-6 align-items-center">
                <div className="labelName">體重(公斤)</div>
                <input type="text" name={`weight-${index}`} className="form-control" />
              </div>
            </div>
            <Job name={`family-members-${index}`} showPartimeJobsButton={false} />
            <div className="row align-items-center mt-2">
              <div className="col-sm-6 align-items-center">
                <div className="labelName">服務單位/職位</div>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="col-sm-6 align-items-center">
                <div className="labelName">工作内容（含兼職）</div>
                <input type="text" name="name" className="form-control" />
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-sm-6 align-items-center">
                <div className="labelName">身故受益人</div>
                <SelectField
                  label=""
                  className="w-100"
                  name={`beneficiary.${index}`}
                  placeholder="請選擇行業類別"
                >
                  <>
                    <SelectField.Option value="00" key="00">
                      生存保險金受益人（一）
                    </SelectField.Option>
                  </>
                </SelectField>
              </div>
            </div>
          </ListGroup>
        ))
      }

    </div>
  );
};

export default FamilyMembers;
