import {createStore} from 'redux';
import R from '../reducers/Reducers';
import reducers2 from '../reducers/Reducers2';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  R,
  reducers2,
});

const store = createStore(rootReducer);

export default store;
// export default reducers;
