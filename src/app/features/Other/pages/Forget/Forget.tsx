import React from 'react';
import { useLocation } from 'react-router-dom';
import ProcessContainer from 'app/common/layouts/ProcessContainer';
import { ProcessRouteMatchesStep, ProcessStepTextEnum } from './types';
import ForgetRoutes from './ForgetRoutes';

const Forget: React.FC = () => {
  const routerLocation = useLocation();

  return (
    <ProcessContainer
      title="忘記密碼"
      wrapClassName="member-register"
      currentStep={ProcessRouteMatchesStep[routerLocation.pathname]}
      stepsBarVisible
      steps={[
        { title: ProcessStepTextEnum.Auth, subTitles: [ProcessStepTextEnum.Auth, ProcessStepTextEnum.AuthOTPAuth], visible: true },
        { title: ProcessStepTextEnum.Setup, visible: true }
      ]}
    >
      <ForgetRoutes />
    </ProcessContainer>
  );
};

export default Forget;
