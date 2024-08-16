import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routerHistory } from 'app/core/router/service';

const rootReducer = combineReducers({
  router: connectRouter(routerHistory)
});

export default rootReducer;
