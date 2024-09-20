import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { ROUTES } from 'app/core/router/paths';
import RouterScrollToTop from 'app/common/components/Router/RouterScrollToTop';
import RouterRoute from 'app/common/components/Router/RouterRoute';
import LoadingSpinner from 'app/common/components/Spinner/LoadingSpinner';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner visible />}>
    <RouterScrollToTop />
    <Switch>
      <RouterRoute
        path={ROUTES.PAGE_ERROR_404}
        component={React.lazy(() => import('app/features/404'))}
      />
      <RouterRoute
        path={ROUTES.PAGE_ERROR_500}
        component={React.lazy(() => import('app/features/500'))}
      />
      <RouterRoute
        path={ROUTES.HOME} // 新增這一行來處理 Page2 路由
        component={React.lazy(() => import('app/features/Home'))}
      />
      <Redirect to={ROUTES.HOME} />
    </Switch>
  </React.Suspense>
);

export default AppRoutes;
