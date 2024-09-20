import React, { useState } from 'react';

const AllocPercentage: React.FC = () => {
  const [value, setValue] = useState(100);
  const increment = () => setValue(prev => Math.min(100, prev + 1));
  const decrement = () => setValue(prev => Math.max(0, prev - 1));

  return (
  // <div className="col-12 col-lg-5 applicant-alloc-percentage">
  //   <div className="name labelName">分配比例</div>
  //   <div className="counter">
  //     <div className="ratio-btn ratio-minus disabled" title="遞減" />
  //     <input
  //       name="applicant.policyBeneficiary.0.allocPercentage" title="分配比例"
  //       type="text" autoComplete="off" data-field-invalid="false" className="form-control"
  //       aria-label="分配比例" value="100%"
  //     />
  //     <div className="ratio-btn ratio-add enabled" title="遞增" />
  //   </div>
  // </div>
    <div id="AllocPercentage" className="row">
      <div className="col">
        <label className="form-label me-2 text-nowrap labelName">分配比例</label>
        <div className="position-relative align-items-center">
          <div className="ratio-btn ratio-minus enabled" onClick={decrement} />
          <input
            id="percentage-input"
            value={`${value}%`}
            type="text"
            className="form-control text-center"
          />
          <div className="ratio-btn ratio-add enabled" onClick={increment} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AllocPercentage);
