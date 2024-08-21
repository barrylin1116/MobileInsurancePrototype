import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
import RouterRoute from 'app/common/components/Router/RouterRoute';
import LoadingSpinner from 'app/common/components/Spinner/LoadingSpinner';

const PassPhraseRoutes: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner visible />}>
    <Switch>
      <RouterRoute
        exact
        path={ROUTES.PAGE_SETTINGS_PASS_PHRASE_AUTH}
        component={React.lazy(() => import('./Auth'))}
      />
      <RouterRoute
        exact
        path={ROUTES.PAGE_SETTINGS_PASS_PHRASE_SETUP}
        component={React.lazy(() => import('./Setup'))}
      />
      <Redirect to={ROUTES.PAGE_LOGIN} />
    </Switch>
  </React.Suspense>
);

export default PassPhraseRoutes;
