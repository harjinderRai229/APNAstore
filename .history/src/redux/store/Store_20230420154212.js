import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
import re from '../reducers/Reducers2';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  Reducers,
  Reducers2,
});

const store = createStore(rootReducer);

export default store;
// export default reducers;
