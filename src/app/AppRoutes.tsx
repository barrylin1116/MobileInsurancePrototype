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
        path={ROUTES.INSURANCE}
        component={React.lazy(() => import('app/features/Insurance'))}
      />
      <RouterRoute
        path={ROUTES.PAGE}
        component={React.lazy(() => import('app/features/Other'))}
      />
      <RouterRoute
        path={ROUTES.PAGE2} // 新增這一行來處理 Page2 路由
        component={React.lazy(() => import('app/features/Insurance/pages/Page2'))}
      />
      <Redirect to={ROUTES.PAGE_LOGIN} />
    </Switch>
  </React.Suspense>
);

export default AppRoutes;
