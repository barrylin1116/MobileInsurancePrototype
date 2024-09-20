// import React, { useState } from 'react';
// import { Card } from 'antd';
// import Allocate02 from '../../components/Allocate02';
// import Nation from '../../components/Nation';
// import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
// import BeneficiaryAddress from '../../components/BeneficiaryAddress';
// import Allocate01 from '../../components/Allocate01';
// import Allocate03 from '../../components/Allocate03';
// import AllocPercentage from '../../components/AllocPercentage';
// import Relationship01 from '../../components/Relationship01';
// import Relationship02 from '../../components/Relationship02';
// import Bank from '../../components/Bank';
// import Branch from '../../components/Branch';
//
// const Beneficiary: React.FC<any> = (props) => {
//   const [paymentMethod, setPaymentMethod] = useState('01');
//   return (
//     <div>
//       <Card title="生存保險金受益人" style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}>
//         <div className="check-list3 ">
//           <label htmlFor="" className="col-sm-5 orange labelName">生存保險金領取方式</label>
//           <p className="col-sm-7">
//             <input type="radio" onChange={() => setPaymentMethod('01')} checked={paymentMethod === '01'} name="paymentMethod" value="01" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">電匯</label>
//             <input type="radio" onChange={() => setPaymentMethod('02')} checked={paymentMethod === '02'} name="paymentMethod" value="02" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">支票</label>
//           </p>
//           {paymentMethod === '01'
//             ? (
//               <div>
//                 <article className="tab  tab-show" id="tab_4">
//                   <section className="tab-frame">
//                     <div className="arrow-upleft" />
//                     <div className="grey2 box">
//                       <div className="check-title depo2 labelName">帳戶內容</div>
//                       <div className="row form-row relation-row">
//                         <div className="col-12">
//                           <div className="name labelName">Swift Code</div>
//                           <input
//                             type="text" name="swiftCode" className="form-control"
//                             placeholder="臺幣保單不需輸入"
//                           />
//                         </div>
//                         <div className="col-12">
//                           <div className="name labelName">英文戶名</div>
//                           <input
//                             type="labelName" name="englishName" className="form-control"
//                             placeholder="臺幣保單不需輸入"
//                           />
//                         </div>
//                       </div>
//                       <div className="row form-row relation-row">
//                         <div className="col-12">
//                           <div className="name labelName">中文戶名</div>
//                           <input type="text" name="accountName" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="row form-row relation-row">
//                         <div className="col-12">
//                           <Bank />
//                         </div>
//                         <div className="col-12">
//                           <Branch />
//                         </div>
//                       </div>
//                       <div className="row form-row relation-row">
//                         <div className="col-12">
//                           <div className="name labelName">帳號</div>
//                           <input type="text" name="bankAccount" className="form-control" />
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </article>
//               </div>
//               )
//             : <></>}
//         </div>
//
//         <div className="beneficiary mt-3">
//           <div className="form-content w-100">
//             <div className="form-row">
//               <Allocate01 />
//             </div>
//             <div className="form-row">
//               <div id="applicant-beneficiary-list" className="beneficiary-list col-12 mb-2">
//                 <div className="name labelName">受益人列表</div>
//                 <div className="box mb-2">
//                   <div className="head">
//                     <div className="labelName">生存保險金受益人（一）</div>
//                     <div className="d-flex align-items-center">
//                       <div className="arrow up" />
//                       <div className="arrow down" />
//                       <div className="delete">刪除</div>
//                     </div>
//                   </div>
//                   <div className="body">
//                     <div className="row form-row relation-row">
//                       <Relationship02 />
//                     </div>
//                     <div className="row form-row relation-row">
//                       <div className="col-5">
//                         <div className="name labelName">姓名</div>
//                         <input type="text" name="name" className="form-control" />
//                       </div>
//                       <div className="col-5">
//                         <div className="name labelName">身份證字號</div>
//                         <input type="labelName" name="rocId" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="row form-row relation-row">
//                       <div className="col-5">
//                         <Nation />
//                       </div>
//                       <div className="col-5">
//                         <div className="name labelName">出生日期</div>
//                         <DatePickerTW
//                           name="birthday" className="form-control" onChange={() => {
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row form-row relation-row">
//                       <div className="col-5">
//                         <div className="d-flex justify-between">
//                           <div className="d-flex align-items-center name labelName">住宅電話</div>
//                           <div className="d-flex align-items-center">
//                             <button type="button" className="btn btn-primary btn-sm relationBtn">同要保人住宅電話
//                             </button>
//                           </div>
//                         </div>
//                         <div className="phone-inputs" style={{ margin: '4px 0' }}>
//                           <input type="text" name="address" className="form-control area-code" />
//                           <span className="mx-2"> - </span>
//                           <input type="text" name="address" className="form-control number me-2" />
//                           <input type="text" name="address" className="form-control extend" />
//                         </div>
//                       </div>
//                       <div className="col-5">
//                         <div className="d-flex justify-between">
//                           <div className="d-flex align-items-center name labelName">手機號碼</div>
//                           <div className="d-flex align-items-center">
//                             <button type="button" className="btn btn-primary btn-sm relationBtn">同要保人手機號碼
//                             </button>
//                           </div>
//                         </div>
//                         <div className="phone-inputs" style={{ margin: '4px 0' }}>
//                           <input type="labelName" name="phone" className="form-control" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row form-row relation-row">
//                       <BeneficiaryAddress />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button type="button" className="btn btn-outline-primary button-with-add-icon">
//             增加受益人
//             <div className="add-icon" />
//           </button>
//         </div>
//       </Card>
//
//       <Card title="祝壽保險金受益人" className="mt-3" style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}>
//         <div className="beneficiary mt-3">
//           <div className="form-content w-100">
//             <div className="form-row">
//               <Allocate02 />
//             </div>
//             <div className="form-row">
//               <div id="applicant-beneficiary-list" className="beneficiary-list col-12 mb-2">
//                 <div className="name labelName">受益人列表</div>
//                 <div className="box mb-2">
//                   <div className="head">
//                     <div className="labelName">祝壽金受益人（一）</div>
//                     <div className="d-flex align-items-center">
//                       <div className="arrow up" />
//                       <div className="arrow down" />
//                       <div className="delete">刪除</div>
//                     </div>
//                   </div>
//                   <div className="body">
//                     <div className="row form-row relation-row">
//                       <Relationship01 />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button type="button" className="btn btn-outline-primary button-with-add-icon">
//             增加受益人
//             <div className="add-icon" />
//           </button>
//         </div>
//       </Card>
//
//       <Card title="身故保險金受益人" className="mt-3" style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}>
//         <div className="beneficiary mt-3">
//           <div className="form-content w-100">
//             <div className="form-row">
//               <Allocate03 />
//             </div>
//             <div className="form-row">
//               <div id="applicant-beneficiary-list" className="beneficiary-list col-12 mb-2">
//                 <div className="name labelName">受益人列表</div>
//                 <div className="box mb-2">
//                   <div className="head">
//                     <div className="labelName">身故保險金受益人（一）</div>
//                     <div className="d-flex align-items-center">
//                       <div className="arrow up" />
//                       <div className="arrow down" />
//                       <div className="delete">刪除</div>
//                     </div>
//                   </div>
//                   <div className="body">
//                     <div className="row form-row relation-row">
//                       <AllocPercentage />
//                       <Relationship02 />
//                     </div>
//                     <div className="row form-row relation-row">
//                       <div className="col-5">
//                         <div className="name labelName">姓名</div>
//                         <input type="text" name="name" className="form-control" />
//                       </div>
//                       <div className="col-5">
//                         <div className="name labelName">身份證字號</div>
//                         <input type="labelName" name="rocId" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="row form-row relation-row">
//                       <div className="col-5">
//                         <Nation />
//                       </div>
//                       <div className="col-5">
//                         <div className="name labelName">出生日期</div>
//                         <DatePickerTW
//                           name="birthday" className="form-control" onChange={() => {
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="row form-row relation-row">
//                       <div className="col-5">
//                         <div className="d-flex justify-between">
//                           <div className="d-flex align-items-center name labelName">住宅電話</div>
//                           <div className="d-flex align-items-center">
//                             <button type="button" className="btn btn-primary btn-sm relationBtn">同要保人住宅電話
//                             </button>
//                           </div>
//                         </div>
//                         <div className="phone-inputs" style={{ margin: '4px 0' }}>
//                           <input type="text" name="address" className="form-control area-code" />
//                           <span className="mx-2"> - </span>
//                           <input type="text" name="address" className="form-control number me-2" />
//                           <input type="text" name="address" className="form-control extend" />
//                         </div>
//                       </div>
//                       <div className="col-5">
//                         <div className="d-flex justify-between">
//                           <div className="d-flex align-items-center name labelName">手機號碼</div>
//                           <div className="d-flex align-items-center">
//                             <button type="button" className="btn btn-primary btn-sm relationBtn">同要保人手機號碼
//                             </button>
//                           </div>
//                         </div>
//                         <div className="phone-inputs" style={{ margin: '4px 0' }}>
//                           <input type="labelName" name="phone" className="form-control" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row form-row relation-row">
//                       <BeneficiaryAddress />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button type="button" className="btn btn-outline-primary button-with-add-icon">
//             增加受益人
//             <div className="add-icon" />
//           </button>
//         </div>
//       </Card>
//     </div>
//   );
// };
//
// export default Beneficiary;

import React, { useState } from 'react';
import { Card } from 'antd';
import Branch from '../../components/Branch';
import Bank from '../../components/Bank';
import Allocate01 from '../../components/Allocate01';
import ListGroup from '../../../../common/components/ListGroup';
import { PlusOutlined } from '@ant-design/icons';
import Relationship02 from '../../components/Relationship02';
import Nation from '../../components/Nation';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import BeneficiaryAddress from '../../components/BeneficiaryAddress';
import Allocate02 from '../../components/Allocate02';
import Relationship01 from '../../components/Relationship01';
import Allocate03 from '../../components/Allocate03';
import AllocPercentage from '../../components/AllocPercentage';

const Beneficiary: React.FC<any> = (props) => {
  const [paymentMethod, setPaymentMethod] = useState('01');
  const [lifeInsuranceBeneficiaryGroup, setLifeInsuranceBeneficiaryGroup] = useState<any[]>([{}]);
  const [congratulationsInsuranceBeneficiaryGroup, setCongratulationsInsuranceBeneficiaryGroup] = useState<any[]>([{}]);
  const [deathBenefitBeneficiaryGroup, setDeathBenefitBeneficiaryGroup] = useState<any[]>([{}]);

  const handleLifeInsuranceBeneficiaryGroupAddButtonClick = () => {
    setLifeInsuranceBeneficiaryGroup([...lifeInsuranceBeneficiaryGroup, {}]);
  };

  const handleCongratulationsInsuranceBeneficiaryGroupAddButtonClick = () => {
    setCongratulationsInsuranceBeneficiaryGroup([...congratulationsInsuranceBeneficiaryGroup, {}]);
  };

  const handleDeathBenefitBeneficiaryGroupAddButtonClick = () => {
    setDeathBenefitBeneficiaryGroup([...deathBenefitBeneficiaryGroup, {}]);
  };
  return (
    <div className="row flex-column py-2">
      <div className="col py-2">
        <Card
          title="生存保險金受益人" classNames={{
            header: 'fs-4 mt-3 p-0'
          }} style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}
        >
          <div className="row flex-column">
            <div className="col">
              <div className="form-label labelName">生存保險金領取方式</div>
              <div className="input-group">
                <div className="form-check d-flex align-items-center me-2">
                  <input
                    type="radio" id="paymentMethod"
                    className="form-check-input" name="paymentMethod" value="01"
                    onChange={() => setPaymentMethod('01')} checked={paymentMethod === '01'}
                  />
                  <label
                    className="form-check-label labelName m-0 ms-2"
                    htmlFor="applicantNationType-0"
                  >電匯
                  </label>
                </div>
                <div className="form-check d-flex align-items-center me-2">
                  <input
                    type="radio" id="paymentMethod"
                    className="form-check-input" name="paymentMethod" value="02"
                    onChange={() => setPaymentMethod('02')} checked={paymentMethod === '02'}
                  />
                  <label
                    className="form-check-label labelName m-0 ms-2"
                    htmlFor="applicantNationType-0"
                  >支票
                  </label>
                </div>
              </div>
            </div>
            {paymentMethod === '01'
              ? (
                <div className="col p-3">
                  <Card
                    title="帳戶內容" classNames={{
                      header: 'mt-3 p-0 border-0 labelName fs-5 px-3',
                      body: 'px-3'
                    }}
                  >
                    <div className="container-fluid px-3">
                      <div className="row flex-column">
                        <div className="col p-2">
                          <label
                            className="form-label labelName m-0"
                            htmlFor="applicantNationType-0"
                          >Swift Code
                          </label>
                          <input
                            type="text" name="applicantNationType" id="applicantNationType-0"
                            className="form-control" placeholder="臺幣保單不需輸入"
                          />
                        </div>
                        <div className="col p-2">
                          <label
                            className="form-label labelName m-0"
                            htmlFor="applicantNationType-0"
                          >英文戶名
                          </label>
                          <input
                            type="text" name="applicantNationType" id="applicantNationType-0"
                            className="form-control" placeholder="臺幣保單不需輸入"
                          />
                        </div>
                        <div className="col p-2">
                          <label
                            className="form-label labelName m-0"
                            htmlFor="applicantNationType-0"
                          >中文戶名
                          </label>
                          <input
                            type="text" name="applicantNationType" id="applicantNationType-0"
                            className="form-control"
                          />
                        </div>
                        <div className="col p-2">
                          <Bank />
                        </div>
                        <div className="col p-2">
                          <Branch />
                        </div>
                        <div className="col p-2">
                          <label
                            className="form-label labelName m-0 ms-2"
                            htmlFor="applicantNationType-0"
                          >帳號
                          </label>
                          <input
                            type="text" name="applicantNationType" id="applicantNationType-0"
                            className="form-control"
                          />
                        </div>

                      </div>
                    </div>
                  </Card>
                </div>
                )
              : <></>}
            <div className="col">
              <Allocate01 />
            </div>
            <div className="col p-3">
              <div className="form-label labelName">受益人列表</div>
              {
              lifeInsuranceBeneficiaryGroup.map((group, index) => {
                return (
                  <ListGroup
                    key={`lifeInsuranceBeneficiary.${index}`}
                    name={`lifeInsuranceBeneficiary.${index}`}
                    index={index}
                    title="生存保險金受益人"
                    showAddButton={index === lifeInsuranceBeneficiaryGroup.length - 1}
                    customAddButtonBlock={
                      <button
                        key={`lifeInsuranceBeneficiary.${index}`}
                        name={`lifeInsuranceBeneficiary.${index}`}
                        className="btn btn-custom btn-elife-outline-green"
                        onClick={handleLifeInsuranceBeneficiaryGroupAddButtonClick}
                      >
                        增加受益人
                        <PlusOutlined />
                      </button>
                    }
                  >
                    <div className="container-fluid px-3">
                      <div className="row flex-column">
                        <div className="col col-md-5 p-2">
                          <Relationship02
                            key={index}
                            index={index}
                          />
                        </div>
                        <div className="col p-2">
                          <div className="row flex-column flex-md-row align-items-center justify-content-md-between">
                            <div className="col col-md-5 p-2">
                              <label
                                className="form-label labelName m-0"
                                htmlFor="applicantNationType-0"
                              >姓名
                              </label>
                              <input
                                type="text" name="applicantNationType" id="applicantNationType-0"
                                className="form-control"
                              />
                            </div>
                            <div className="col col-md-5 p-2">
                              <label
                                className="form-label labelName m-0"
                                htmlFor="applicantNationType-0"
                              >身份證字號
                              </label>
                              <input
                                type="text" name="applicantNationType" id="applicantNationType-0"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col p-2">
                          <div className="row flex-column flex-md-row align-items-center justify-content-md-between">
                            <div className="col col-md-5 p-2">
                              <Nation />
                            </div>
                            <div className="col col-md-5 p-2">
                              <div className="form-label labelName">出生日期</div>
                              <DatePickerTW
                                name="birthday" className="form-control" onChange={() => {
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col p-2">
                          <div className="row flex-column flex-md-row align-items-center justify-content-md-between">
                            <div className="col col-md-5 p-2">
                              <div
                                className="row flex-column flex-md-row align-items-center justify-content-md-between"
                              >
                                <div className="col p-2 d-flex justify-content-md-between align-items-center">
                                  <label className="form-label me-2 text-nowrap labelName">住宅電話</label>
                                  <button className="btn btn-custom btn-elife-green">同要保人住宅電話</button>
                                </div>
                              </div>
                              <div className="input-group mb-3">
                                <input
                                  type="text" className="form-control"
                                />
                                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">-</span>
                                <input
                                  type="text" className="form-control me-2"
                                />
                                <input
                                  type="text" className="form-control"
                                />
                              </div>

                            </div>
                            <div className="col col-md-5 p-2">
                              <div
                                className="row flex-column flex-md-row align-items-center justify-content-md-between"
                              >
                                <div className="col p-2 d-flex justify-content-md-between align-items-center">
                                  <label className="form-label me-2 text-nowrap labelName">手機號碼</label>
                                  <button className="btn btn-custom btn-elife-green">同要保人手機號碼</button>
                                </div>
                              </div>
                              <div className="input-group mb-3">
                                <input
                                  type="text" className="form-control"
                                />
                                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">-</span>
                                <input
                                  type="text" className="form-control me-2"
                                />
                                <input
                                  type="text" className="form-control"
                                />
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col p-2">
                          <BeneficiaryAddress />
                        </div>
                      </div>
                    </div>
                  </ListGroup>
                );
              })
            }
            </div>
          </div>
        </Card>
      </div>
      <div className="col py-2">
        <Card
          title="祝壽保險金受益人" classNames={{
            header: 'fs-4 mt-3 p-0'
          }} style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}

        >
          <div className="row flex-column">
            <div className="col">
              <Allocate02 />
            </div>
            <div className="col p-3">
              <div className="form-label labelName">受益人列表</div>
              {
                congratulationsInsuranceBeneficiaryGroup.map((group, index) => {
                  return (
                    <ListGroup
                      key={`congratulationsInsuranceBeneficiary.${index}`}
                      name={`congratulationsInsuranceBeneficiary.${index}`}
                      index={index}
                      title="祝壽金受益人"
                      showAddButton={index === congratulationsInsuranceBeneficiaryGroup.length - 1}
                      customAddButtonBlock={
                        <button
                          key={`congratulationsInsuranceBeneficiary.${index}`}
                          name={`congratulationsInsuranceBeneficiary.${index}`}
                          className="btn btn-custom btn-elife-outline-green"
                          onClick={handleCongratulationsInsuranceBeneficiaryGroupAddButtonClick}
                        >
                          增加受益人
                          <PlusOutlined />
                        </button>
                          }
                    >
                      <div className="container-fluid px-3">
                        <div className="row flex-column">
                          <div className="col col-md-5 p-2">
                            <Relationship01
                              key={index}
                              index={index}
                            />
                          </div>
                        </div>
                      </div>
                    </ListGroup>
                  );
                })
              }
            </div>

          </div>
        </Card>
      </div>
      <div className="col py-2">
        <Card
          title="身故保險金受益人" classNames={{
            header: 'fs-4 mt-3 p-0'
          }} style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}

        >
          <div className="row flex-column">
            <div className="col">
              <Allocate03 />
            </div>
            <div className="col p-3">
              <div className="form-label labelName">受益人列表</div>
              {
                deathBenefitBeneficiaryGroup.map((group, index) => {
                  return (
                    <ListGroup
                      key={`deathBenefitBeneficiary.${index}`}
                      name={`deathBenefitBeneficiary.${index}`}
                      index={index}
                      title="身故保險金受益人"
                      showAddButton={index === deathBenefitBeneficiaryGroup.length - 1}
                      customAddButtonBlock={
                        <button
                          key={`deathBenefitBeneficiary.${index}`}
                          name={`deathBenefitBeneficiary.${index}`}
                          className="btn btn-custom btn-elife-outline-green"
                          onClick={handleDeathBenefitBeneficiaryGroupAddButtonClick}
                        >
                          增加受益人
                          <PlusOutlined />
                        </button>
                          }
                    >
                      <div className="container-fluid px-3">
                        <div className="row flex-column">
                          <div className="col p-2">
                            <div className="row flex-column flex-md-row align-items-center justify-content-md-between">
                              <div className="col col-md-5 p-2"><AllocPercentage /></div>
                              <div className="col col-md-5 p-2"><Relationship02 /></div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div className="row flex-column flex-md-row align-items-center justify-content-md-between">
                              <div className="col col-md-5 p-2">
                                <label
                                  className="form-label labelName m-0"
                                  htmlFor="applicantNationType-0"
                                >姓名
                                </label>
                                <input
                                  type="text" name="applicantNationType" id="applicantNationType-0"
                                  className="form-control"
                                />
                              </div>
                              <div className="col col-md-5 p-2">
                                <label
                                  className="form-label labelName m-0"
                                  htmlFor="applicantNationType-0"
                                >身份證字號
                                </label>
                                <input
                                  type="text" name="applicantNationType" id="applicantNationType-0"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div className="row flex-column flex-md-row align-items-center justify-content-md-between">
                              <div className="col col-md-5 p-2">
                                <Nation />
                              </div>
                              <div className="col col-md-5 p-2">
                                <label
                                  className="form-label labelName m-0"
                                  htmlFor="applicantNationType-0"
                                >出生日期
                                </label>
                                <DatePickerTW
                                  name="birthday" className="form-control" onChange={() => {
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div className="row flex-column flex-md-row align-items-center justify-content-md-between">
                              <div className="col col-md-5 p-2">
                                <div
                                  className="row flex-column flex-md-row align-items-center justify-content-md-between"
                                >
                                  <div className="col p-2">
                                    <label className="form-label me-2 text-nowrap labelName">住宅電話</label>
                                  </div>
                                  <div className="col-auto p-2 text-nowrap">
                                    <button className="btn btn-custom btn-elife-green">同要保人住宅電話</button>
                                  </div>
                                </div>
                                <div className="input-group mb-3">
                                  <input
                                    type="text" className="form-control"
                                  />
                                  <span className="input-group-text border-0 bg-transparent" id="basic-addon1">-</span>
                                  <input
                                    type="text" className="form-control me-2"
                                  />
                                  <input
                                    type="text" className="form-control"
                                  />
                                </div>

                              </div>
                              <div className="col col-md-5 p-2">
                                <div
                                  className="row flex-column flex-md-row align-items-center justify-content-md-between"
                                >
                                  <div className="col p-2">
                                    <label className="form-label me-2 text-nowrap labelName">手機號碼</label>
                                  </div>
                                  <div className="col-auto p-2 text-nowrap">
                                    <button className="btn btn-custom btn-elife-green">同要保人手機號碼</button>
                                  </div>
                                </div>
                                <div className="input-group mb-3">
                                  <input
                                    type="text" className="form-control"
                                  />
                                  <span className="input-group-text border-0 bg-transparent" id="basic-addon1">-</span>
                                  <input
                                    type="text" className="form-control me-2"
                                  />
                                  <input
                                    type="text" className="form-control"
                                  />
                                </div>

                              </div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <BeneficiaryAddress />
                          </div>
                        </div>
                      </div>
                    </ListGroup>
                  );
                })
              }
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Beneficiary;
