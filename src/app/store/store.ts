import { createStore } from 'redux';
import rootReducer from 'app/store/rootReducer';

// Create store
const store = createStore(rootReducer);
export default store;
