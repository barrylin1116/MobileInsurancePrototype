import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
import RouterRoute from 'app/common/components/Router/RouterRoute';
import LoadingSpinner from 'app/common/components/Spinner/LoadingSpinner';

const OnlineInsureRoutes: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner visible />}>
    <Switch>
      <RouterRoute
        path={ROUTES.PAGE_1}
        component={React.lazy(() => import('./pages/Page1'))}
      />
      <Redirect to={ROUTES.PAGE_LOGIN} />
    </Switch>
  </React.Suspense>
);

export default OnlineInsureRoutes;
