import React from 'react';
import Nation from '../../components/Nation';
import DatePickerTW from '../../../../common/components/Elements/DatePickerTW';
import Job from '../../components/Job';
import InsuredAddress02 from '../../components/InsuredAddress02';
import InsuredAddress01 from '../../components/InsuredAddress01';

const Insured: React.FC<any> = (props) => {
  return (
    <div className="container-fluid m-0 p-4">
      <div className="row">
        <div className="col col-md-7">
          <div className="form-label labelName">與被保人關係</div>
          <div className="input-group">
            <div className="form-check d-flex align-items-center me-2">
              <input
                type="radio" name="applicantNationType" id="applicantNationType-0"
                className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
              />
              <label
                className="form-check-label labelName m-0 ms-2"
                htmlFor="applicantNationType-0"
              >本人
              </label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input
                type="radio" name="applicantNationType" id="applicantNationType-0"
                className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
              />
              <label
                className="form-check-label labelName m-0 ms-2"
                htmlFor="applicantNationType-0"
              >父母
              </label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input
                type="radio" name="applicantNationType" id="applicantNationType-0"
                className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
              />
              <label
                className="form-check-label labelName m-0 ms-2"
                htmlFor="applicantNationType-0"
              >配偶
              </label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input
                type="radio" name="applicantNationType" id="applicantNationType-0"
                className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
              />
              <label
                className="form-check-label labelName m-0 ms-2"
                htmlFor="applicantNationType-0"
              >子女
              </label>
            </div>
            <div className="form-check d-flex align-items-center me-2">
              <input
                type="radio" name="applicantNationType" id="applicantNationType-0"
                className="form-check-input" data-field-invalid="false" aria-label="Domestic" value="Domestic"
              />
              <label
                className="form-check-label labelName m-0 ms-2"
                htmlFor="applicantNationType-0"
              >其他
              </label>
            </div>
            <input
              type="text" id="applicant-postCode" className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col col-md-5">
          <div className="form-label labelName">姓名</div>
          <input
            type="text" id="applicant-postCode" className="form-control"
          />
        </div>
        <div className="col col-md-5">
          <Nation />
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col col-md-5">
          <div className="form-label labelName">身份證字號</div>
          <input
            type="text" id="applicant-postCode" className="form-control"
          />
        </div>
        <div className="col col-md-5">
          <div className="form-label labelName">性別</div>
          <div className="form-label labelName d-flex align-items-center form-field-height">
            男
          </div>
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col col-md-5">
          <div className="form-label labelName">出生日期</div>
          <DatePickerTW
            name="birthday" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col col-md-5">
          <div className="row flex-row">
            <div className="form-label col-auto labelName">法定年齡</div>
            <div className="form-label col-auto labelName">50歲</div>
            {/* <label className="form-check-label me-2 text-nowrap labelName">法定年齡</label> */}
            {/* <span className="form-label labelName d-flex align-items-center form-field-height">50歲</span> */}
          </div>
          <div className="row">
            <div className="form-label col-auto labelName form-field-height">保險年齡</div>
            <div className="form-label col-auto labelName form-field-height">50歲</div>
          </div>
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col col-md-5 m-2 m-md-0">
          <label className="form-label labelName">住宅電話</label>
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
        <div className="col col-md-5 m-2 m-md-0">
          <label className="form-check-label me-2 text-nowrap labelName">公司電話</label>
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
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col col-md-5 m-2 m-md-0">
          <label className="form-label labelName">行動電話</label>
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
        <div className="col col-md-5 m-2 m-md-0">
          <div className="form-label labelName">電子郵件信箱</div>
          <input
            type="text" id="applicant-postCode" className="form-control"
          />
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col">
          <InsuredAddress01 />
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col">
          <InsuredAddress02 />
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col">
          <Job />
        </div>
      </div>
      <div className="row flex-column flex-md-row justify-content-md-between py-2">
        <div className="col col-md-5">
          <div className="form-label labelName">服務單位/職位</div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col col-md-5">
          <div className="form-label labelName">工作内容（含兼職）</div>
          <input type="text" name="name" className="form-control" />
        </div>
      </div>
    </div>
  );
};
// const Insured: React.FC<any> = (props) => {
//   return (
//     <div>
//       <div className="row m-0">
//         <div className="col-7">
//           <div className="name labelName">與被保人關係</div>
//           <div className="d-flex">
//             <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">本人</label>
//             <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">父母</label>
//             <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">配偶</label>
//             <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">子女</label>
//             <input type="radio" name="relationship" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">其他</label>
//             <input type="text" name="otherNRelationship" className="form-control" />
//           </div>
//         </div>
//       </div>
//       <div className="row m-0">
//         <div className="col-5">
//           <div className="name labelName">姓名</div>
//           <input type="text" name="name" className="form-control" />
//         </div>
//         <div className="col-5">
//           <Nation />
//         </div>
//       </div>
//       <div className="row m-0">
//         <div className="col-5">
//           <div className="name labelName">身份證字號</div>
//           <input type="text" name="rocId" className="form-control" />
//         </div>
//         <div className="col-5">
//           <div className="name labelName">性別</div>
//           <div className="d-flex mb-3 mt-1">
//             <span className="form-check-label me-2 text-nowrap labelName">男</span>
//           </div>
//         </div>
//       </div>
//       <div className="row m-0">
//         <div className="col-5">
//           <div className="name labelName">出生日期</div>
//           <DatePickerTW
//             name="birthday" className="form-control" onChange={() => {
//             }}
//           />
//         </div>
//         <div className="col-5" style={{ margin: 'auto 0' }}>
//           <label className="form-check-label me-2 text-nowrap labelName">法定年齡</label>
//           <span className="labelName">50歲</span>
//           <br />
//           <label className="form-check-label me-2 text-nowrap labelName">保險年齡</label>
//           <span className="labelName">50歲</span>
//         </div>
//       </div>
//       <div className="row m-0">
//         <div className="col-5">
//           <label className="form-check-label me-2 text-nowrap labelName">住宅電話</label>
//           <div className="phone-inputs" style={{ margin: '4px 0' }}>
//             <input type="text" name="address" className="form-control area-code" />
//             <span className="mx-2"> - </span>
//             <input type="text" name="address" className="form-control number me-2" />
//             <input type="text" name="address" className="form-control extend" />
//           </div>
//         </div>
//         <div className="col-5">
//           <label className="form-check-label me-2 text-nowrap labelName">公司電話</label>
//           <div className="phone-inputs" style={{ margin: '4px 0' }}>
//             <input type="text" name="address" className="form-control area-code" />
//             <span className="mx-2"> - </span>
//             <input type="text" name="address" className="form-control number me-2" />
//             <input type="text" name="address" className="form-control extend" />
//           </div>
//         </div>
//       </div>
//       <div className="row m-0">
//         <div className="col-5">
//           <label className="form-check-label me-2 text-nowrap labelName">行動電話</label>
//           <div className="phone-inputs" style={{ margin: '4px 0' }}>
//             <input type="text" name="address" className="form-control area-code" />
//             <span className="mx-2"> - </span>
//             <input type="text" name="address" className="form-control number me-2" />
//             <input type="text" name="address" className="form-control extend" />
//           </div>
//         </div>
//         <div className="col-5">
//           <div className="name labelName">電子郵件信箱</div>
//           <div className="d-flex">
//             <input type="text" name="email" className="form-control" />
//           </div>
//         </div>
//       </div>
//       <div className="row m-0  form-row">
//         <InsuredAddress01 />
//       </div>
//       <div className="row m-0  form-row">
//         <InsuredAddress02 />
//       </div>
//       <Job />
//       <div className="row m-0">
//         <div className="col-5">
//           <div className="name labelName">服務單位/職位</div>
//           <input type="text" name="name" className="form-control" />
//         </div>
//         <div className="col-5">
//           <div className="name labelName">工作内容（含兼職）</div>
//           <input type="text" name="name" className="form-control" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Insured;
