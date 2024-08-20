import React from 'react';
import { Switch } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
import RouterRoute from 'app/common/components/Router/RouterRoute';
import LoadingSpinner from 'app/common/components/Spinner/LoadingSpinner';

const OtherRoutes: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner visible />}>
    <Switch>
      <RouterRoute
        path={ROUTES.PAGE_EMPTY}
        component={React.lazy(() => import('../Other/pages/PageEmpty'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_LOGIN}
        component={React.lazy(() => import('../Other/pages/Login'))}
      />
    </Switch>
  </React.Suspense>
);

export default OtherRoutes;
