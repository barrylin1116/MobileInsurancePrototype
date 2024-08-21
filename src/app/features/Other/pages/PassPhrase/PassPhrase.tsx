import React from 'react';
import ProcessContainer from 'app/common/layouts/ProcessContainer';
import { ProcessRouteMatchesStep, ProcessStepTextEnum } from './types';
import PassPhraseRoutes from './PassPhraseRoutes';
import { useLocation } from 'react-router-dom';

const PassPhrase: React.FC = () => {
  const routerLocation = useLocation();
  return (
    <ProcessContainer
      title="變更密碼"
      wrapClassName="member-register"
      currentStep={ProcessRouteMatchesStep[routerLocation.pathname]}
      stepsBarVisible
      steps={[
        { title: ProcessStepTextEnum.Auth, visible: true },
        { title: ProcessStepTextEnum.Setup, visible: true }
      ]}
    >
      <PassPhraseRoutes />
    </ProcessContainer>
  );
};

export default PassPhrase;
