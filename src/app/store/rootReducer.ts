import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routerHistory } from 'app/core/router/service';
import commonReducer from './common/reducer';
import UIReducer from './ui/reducer';

const rootReducer = combineReducers({
  router: connectRouter(routerHistory),
  common: commonReducer,
  UI: UIReducer
});

export default rootReducer;
