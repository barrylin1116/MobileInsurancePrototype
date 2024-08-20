import React from 'react';

const Allocate02: React.FC = () => {
  return (
    <div className="col-12 col-lg-5">
      <div className="name labelName">受益人保險金分配方式</div>
      <div className="d-flex mb-3 mt-1">
        <div className="form-check col-lg-4">
          <input
            type="radio" className="form-check-input me-2 mb-1"
            name="applicant.allocateBy02" id="applicant-allocateBy-0"
            value="prec"
            checked
          />
          <label className="form-check-label me-2 text-nowrap labelName">順位</label>
        </div>
        <div className="form-check col-lg-4">
          <input
            type="radio" className="form-check-input me-2 mb-1"
            name="applicant.allocateBy" id="applicant-allocateBy-1"
            value="prop"
          />
          <label className="form-check-label me-2 text-nowrap labelName">比例</label>
        </div>
        <div className="form-check col-lg-4">
          <input
            type="radio" className="form-check-input me-2 mb-1"
            name="applicant.allocateBy" id="applicant-allocateBy-1"
            value="average"
          />
          <label className="form-check-label me-2 text-nowrap labelName">均分</label>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Allocate02);
