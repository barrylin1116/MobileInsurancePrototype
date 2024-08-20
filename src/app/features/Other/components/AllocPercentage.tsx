import React from 'react';

const AllocPercentage: React.FC = () => {
  return (
    <div className="col-12 col-lg-5 applicant-alloc-percentage">
      <div className="name labelName">分配比例</div>
      <div className="counter">
        <div className="ratio-btn ratio-minus disabled" title="遞減" />
        <input
          name="applicant.policyBeneficiary.0.allocPercentage" title="分配比例"
          type="text" autoComplete="off" data-field-invalid="false" className="form-control"
          aria-label="分配比例" value="100%"
        />
        <div className="ratio-btn ratio-add enabled" title="遞增" />
      </div>
    </div>
  );
};

export default React.memo(AllocPercentage);
