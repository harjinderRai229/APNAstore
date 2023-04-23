import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
const import { combineReducers } from 'redux';

const reducers = combineReducers({
  example: () => [],
});

export default reducers;

const store = createStore(reducers);

export default store;
