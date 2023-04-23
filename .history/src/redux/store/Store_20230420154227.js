import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
import reducers2 from '../reducers/Reducers2';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  reducers,
  re,
});

const store = createStore(rootReducer);

export default store;
// export default reducers;
