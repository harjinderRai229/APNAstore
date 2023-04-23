import {createStore} from 'redux';
import Reducers from '../reducers/Reducers';
import reducers2 from '../reducers/Reducers2';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  reducers1,
  reducers2,
});

const store = createStore(rootReducer);

export default store;
// export default reducers;
