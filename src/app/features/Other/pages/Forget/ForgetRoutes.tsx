import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
import RouterRoute from 'app/common/components/Router/RouterRoute';
import LoadingSpinner from 'app/common/components/Spinner/LoadingSpinner';

const ForgetRoutes: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner visible />}>
    <Switch>
      <RouterRoute
        exact
        path={ROUTES.PAGE_FORGET_AUTH}
        component={React.lazy(() => import('./Auth'))}
      />
      <RouterRoute
        exact
        path={ROUTES.PAGE_FORGET_AUTH_OTP_AUTH}
        component={React.lazy(() => import('./Auth/OTPAuth'))}
      />
      <RouterRoute
        exact
        path={ROUTES.PAGE_FORGET_SETUP}
        component={React.lazy(() => import('./Setup'))}
      />
      <Redirect to={ROUTES.PAGE_LOGIN} />
    </Switch>
  </React.Suspense>
);

export default ForgetRoutes;
