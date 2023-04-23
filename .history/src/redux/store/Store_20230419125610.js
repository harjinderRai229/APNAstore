import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    reducers,Reducers2
});



const store = createStore();

export default store;
export default reducers;