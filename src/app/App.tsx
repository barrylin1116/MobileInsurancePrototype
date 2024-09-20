import React, { useRef } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { routerHistory } from 'app/core/router/service';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from 'app/store/store';
import TopButton from './features/Other/components/TopButton';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <div ref={containerRef} className="overflow-y-auto vh-100">
          <AppRoutes />
          {
              containerRef && (<TopButton containerRef={containerRef} />)
          }
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
