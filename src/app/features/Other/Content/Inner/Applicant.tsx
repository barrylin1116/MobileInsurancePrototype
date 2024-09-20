import React from 'react';
import DatePickerTW from 'app/common/components/Elements/DatePickerTW';
import ApplicantAddress from '../../components/ApplicantAddress';
import Nation from '../../components/Nation';
import Job from '../../components/Job';

const Applicant: React.FC<any> = (props) => {
  return (
    <div className="container-fluid m-0 p-4">
      <div className="row flex-column flex-md-row m-2 m-md-0 justify-content-between">
        <div className="col col-md-5 m-2 m-md-0">
          <div className="form-label labelName">姓名</div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col col-md-5 m-2 m-md-0">
          <Nation />
        </div>
      </div>
      <div className="row flex-column flex-md-row m-2 m-md-0 justify-content-between">
        <div className="col col-md-5 m-2 m-md-0">
          <div className="form-label labelName">身份證字號</div>
          <input type="text" name="rocId" className="form-control" />
        </div>
        <div className="col col-md-5 m-2 m-md-0">
          <div className="form-label labelName">性別</div>
          <div className="form-label labelName d-flex align-items-center form-field-height">
            男
          </div>
        </div>
      </div>
      <div className="row flex-column flex-md-row m-2 m-md-0 justify-content-between">
        <div className="col col-md-5 m-2 m-md-0">
          <div className="form-label labelName">出生日期</div>
          <DatePickerTW
            name="birthday" className="form-control" onChange={() => {
            }}
          />
        </div>
        <div className="col col-md-5 m-2 m-md-0">
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
      <div className="row flex-column flex-md-row m-2 m-md-0 justify-content-between">
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
      <div className="row flex-column flex-md-row m-2 m-md-0 justify-content-between">
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
          <div className="form-label labelName">是否有監護宣告</div>
          <div className="row flex-column flex-md-row">
            <div className="col col-lg-auto d-flex align-items-center elife-col-height">
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" value="Domestic"
                />
                <label className="form-check-label ms-2" htmlFor="applicantNationType-0">否</label>
              </div>
            </div>
            <div className="col col-lg-auto d-flex align-items-center elife-col-height">
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio" name="applicantNationType" id="applicantNationType-0"
                  className="form-check-input" value="Domestic"
                />
                <label className="form-check-label ms-2" htmlFor="applicantNationType-0">是</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0  form-row">
        <div className="col">
          <ApplicantAddress />
        </div>
      </div>
      <div className="row m-0  form-row">
        <div className="col">
          <Job />
        </div>
      </div>
      <div className="row m-0 justify-content-between">
        <div className="col-5">
          <div className="form-label labelName">服務單位/職位</div>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-5">
          <div className="form-label labelName">工作内容（含兼職）</div>
          <input type="text" name="name" className="form-control" />
        </div>
      </div>
    </div>
  );
};

// const Applicant: React.FC<any> = (props) => {
//   return (
//     <div>
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
//           <input type="labelName" name="rocId" className="form-control" />
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
//           <div className="name labelName">是否有監護宣告</div>
//           <div className="d-flex">
//             <input type="radio" name="declare" value="N" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">否</label>
//             <input type="radio" name="declare" value="Y" className="form-check-input me-2 mb-1" />
//             <label className="form-check-label me-2 text-nowrap labelName">是</label>
//           </div>
//         </div>
//       </div>
//
//       <div className="row m-0  form-row">
//         <ApplicantAddress />
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

export default Applicant;
