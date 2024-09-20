import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
import RouterRoute from 'app/common/components/Router/RouterRoute';
import LoadingSpinner from 'app/common/components/Spinner/LoadingSpinner';

const OtherRoutes: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner visible />}>
    <Switch>
      <RouterRoute
        path={ROUTES.PAGE_EMPTY}
        component={React.lazy(() => import('./pages/PageEmpty'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_LOGIN}
        component={React.lazy(() => import('../Other/pages/Login'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_FORGET_AUTH}
        component={React.lazy(() => import('../Other/pages/Forget'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_FORGET_AUTH_OTP_AUTH}
        component={React.lazy(() => import('../Other/pages/Forget'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_FORGET_SETUP}
        component={React.lazy(() => import('../Other/pages/Forget'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_SETTINGS_PASS_PHRASE_AUTH}
        component={React.lazy(() => import('../Other/pages/PassPhrase'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_SETTINGS_PASS_PHRASE_SETUP}
        component={React.lazy(() => import('../Other/pages/PassPhrase'))}
      />
      <RouterRoute
        path="/Page/InsureDoc"
        component={React.lazy(() => import('../Other/Content/Sign/Inner/InsureDoc'))}
      />
      <Redirect to={ROUTES.PAGE_LOGIN} />
    </Switch>
  </React.Suspense>
);

export default OtherRoutes;
