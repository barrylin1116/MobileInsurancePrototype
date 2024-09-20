import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'app/store/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { routerHistory } from '../core/router/service';
import rootSaga from './rootSaga';

// Create Middleware
const reduxSagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(routerHistory);
const appReduxMiddlewares = applyMiddleware(reduxSagaMiddleware, reduxRouterMiddleware);

const rootMiddleware = appReduxMiddlewares;
// Create store
const store = createStore(rootReducer, rootMiddleware);

reduxSagaMiddleware.run(rootSaga);
export default store;
