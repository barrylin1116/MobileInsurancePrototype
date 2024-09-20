import React, { useState } from 'react';
import Address from '../../../../common/components/AddressGroup';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import TaxpayerForm from '../../../../common/components/TaxpayerForm';
import ListGroup from '../../../../common/components/ListGroup';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const CRSPage2: React.FC<any> = () => {
  const [listGroup, setListGroup] = useState<any[]>([{}]);

  const handleAddButtonClick = () => {
    setListGroup([...listGroup, {}]);
  };

  return (
    <div id="CRSPage2" className="container">
      <div
        className="row p-0 align-items-center"
        style={{ border: '1px solid #348d8f', background: '#edf5f4' }}
      >
        <div className="col-12">
          <div className="name labelName m-1">個人帳戶持有人身份辨識資料</div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="col p-2">
          <div className="row">
            <div className="name labelName">保單持有人姓名</div>
          </div>
          <div className="row flex-column flex-xl-row">
            <div className="col p-2"><input name="rocId" className="form-control" placeholder="請輸入姓氏" /></div>
            <div className="col p-2"><input name="rocId" className="form-control" placeholder="請輸入名字" /></div>
            <div className="col p-2"><input name="rocId" className="form-control" placeholder="請輸入中間名" /></div>
          </div>
        </div>
        <div className="col p-2">
          <div className="row">
            <Address title="現行居住地址" />
          </div>
        </div>
        <div className="col p-2">
          <div className="row">
            <Address title="通訊地址" />
          </div>
        </div>
        <div className="col p-2">
          <div className="row">
            <div className="name labelName">出生日期</div>
          </div>
          <div className="row">
            <div className="col p-2">
              <DatePickerTW
                name="birthday" className="form-control" onChange={() => {
                }}
              />
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="row">
            <div className="col col-xl-6">
              <div className="name labelName">出生城市</div>
              <input type="text" name="rocId" className="form-control" />
            </div>
            <div className="col col-xl-6">
              <div className="name labelName">出生國家/地區</div>
              <input type="text" name="rocId" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="row p-0 align-items-center"
        style={{ border: '1px solid #348d8f', background: '#edf5f4' }}
      >
        <div className="col-12">
          <div className="name labelName m-1">稅務居住者之國家/地區及其稅籍編號，或是相當功能之辨識碼(“稅籍編號”)</div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        {
          listGroup.map((data, index) => (
            <ListGroup
              key={index}
              index={index}
              title="居住國家/地區"
              addButtonText="新增居住國家/地區"
              showAddButton={index === listGroup.length - 1}
              handleAddButtonClick={handleAddButtonClick}
            >
              <TaxpayerForm index={index} />
            </ListGroup>))
          }
      </div>
      <div
        className="row p-0 align-items-center"
        style={{ border: '1px solid #348d8f', background: '#edf5f4' }}
      >
        <div className="col-12">
          <div className="name labelName m-1">簽署人</div>
        </div>
      </div>
      <div
        className="row flex-column justify-content-start align-items-center p-3"
        style={{ border: '1px solid #348d8f' }}
      >
        <div className="row">
          <div className="col col-xl-6">
            <div className="name labelName">姓名</div>
            <input type="text" name="rocId" className="form-control" />
          </div>
          <div className="col col-xl-6">
            <div className="name labelName d-flex align-items-center">
              <div>
                身份
              </div>
              <Tooltip
                getTooltipContainer={() => document.getElementById('CRSPage2') || document.body}
                title="若您不是帳戶持有人，請敘明您簽署本表之身分。如您是以代理人身分簽署此表，請檢附授權書"
              >
                <QuestionCircleOutlined style={{ color: 'red' }} />
              </Tooltip>
            </div>
            <input type="text" name="rocId" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRSPage2;
