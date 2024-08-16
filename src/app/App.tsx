import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { routerHistory } from 'app/core/router/service';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from 'app/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <AppRoutes />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
