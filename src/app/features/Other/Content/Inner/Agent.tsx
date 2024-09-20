// import React from 'react';
// import { Card } from 'antd';
// import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
// import Checkbox from 'app/common/components/Checkbox';
//
// const Agent: React.FC<any> = (props) => {
//   return (
//     <div>
//       <Card title="被保人法定代理人" style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}>
//         <div className="beneficiary mt-3">
//           <div className="form-content w-100">
//             <div className="form-row">
//               <div className="body">
//                 <div className="row form-row relation-row">
//                   <div className="col-5">
//                     <div className="name labelName">姓名</div>
//                     <input type="text" name="name" className="form-control" />
//                   </div>
//                   <div className="col-5">
//                     <div className="name labelName">身份證字號</div>
//                     <input type="labelName" name="rocId" className="form-control" />
//                   </div>
//                 </div>
//                 <div className="row form-row relation-row">
//                   <div className="col-5">
//                     <div className="name labelName">出生日期</div>
//                     <DatePickerTW
//                       name="birthday" className="form-control" onChange={() => {
//                       }}
//                     />
//                   </div>
//                   <div className="col-5">
//                     <div className="name labelName">關係</div>
//                     <input type="labelName" name="relation" className="form-control" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card>
//
//       <Card
//         title={
//           <div className="d-flex flex-row">
//             <div>要保人法定代理人</div>
//             <div className="ml-3 d-flex flex-row">
//               <Checkbox name="sync" className="labelName" />
//               <label style={{ color: '#0f7b7d' }} className="ant-card-head-title">同被保人法定代理人</label>
//             </div>
//           </div>
//         } className="mt-3" style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}
//       >
//         <div className="beneficiary mt-3">
//           <div className="form-content w-100">
//             <div className="form-row">
//               <div className="body">
//                 <div className="row form-row relation-row">
//                   <div className="col-5">
//                     <div className="name labelName">姓名</div>
//                     <input type="text" name="name" className="form-control" />
//                   </div>
//                   <div className="col-5">
//                     <div className="name labelName">身份證字號</div>
//                     <input type="labelName" name="rocId" className="form-control" />
//                   </div>
//                 </div>
//                 <div className="row form-row relation-row">
//                   <div className="col-5">
//                     <div className="name labelName">出生日期</div>
//                     <DatePickerTW
//                       name="birthday" className="form-control" onChange={() => {
//                       }}
//                     />
//                   </div>
//                   <div className="col-5">
//                     <div className="name labelName">關係</div>
//                     <input type="labelName" name="relation" className="form-control" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };
//
// export default Agent;

import React from 'react';
import { Card } from 'antd';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
// import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import Checkbox from 'app/common/components/Checkbox';

const Agent: React.FC<any> = (props) => {
  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col">
          <Card
            title="被保人法定代理人" classNames={{
              header: 'fs-5 mt-3 p-0'
            }} style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}
          >
            <div className="row flex-column">
              <div className="col">
                <div className="row flex-column flex-md-row justify-content-between">
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
              <div className="col">
                <div className="row flex-column flex-md-row justify-content-between">
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
                  <div className="col col-md-5 p-2">
                    <label
                      className="form-label labelName m-0"
                      htmlFor="applicantNationType-0"
                    >關係
                    </label>
                    <input
                      type="text" name="applicantNationType" id="applicantNationType-0"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card
            title={
              <div className="row flex-column flex-md-row align-items-center mt-3">
                <div className="col col-md-auto">
                  <div>要保人法定代理人</div>
                </div>
                <div className="col">
                  <Checkbox name="sync">
                    <span style={{ color: '#0f7b7d' }}>同被保人法定代理人</span>
                  </Checkbox>
                </div>
              </div>
              }
            classNames={{
              header: 'mt-3 p-0 fs-5'
            }}
            style={{ marginLeft: '10px', marginRight: '10px', padding: '1rem' }}
          >
            <div className="row flex-column">
              <div className="col">
                <div className="row flex-column flex-md-row justify-content-md-between">
                  <div className="col col-md-5 py-2">
                    <label
                      className="form-label labelName m-0"
                      htmlFor="applicantNationType-0"
                    >姓名
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col col-md-5 py-2">
                    <label
                      className="form-label labelName m-0"
                      htmlFor="applicantNationType-0"
                    >身份證字號
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row flex-column flex-md-row justify-content-md-between">
                  <div className="col col-md-5 py-2">
                    <label
                      className="form-label labelName m-0"
                      htmlFor="applicantNationType-0"
                    >出生日期
                    </label>
                    <DatePickerTW name="birthday" className="form-control" onChange={() => {}} />
                  </div>
                  <div className="col col-md-5 py-2">
                    <label
                      className="form-label labelName m-0"
                      htmlFor="applicantNationType-0"
                    >關係
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Agent;
