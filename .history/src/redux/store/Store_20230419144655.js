import {createStore} from 'redux';
import Reducers1 from '../reducers/Reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Reducers1,Reducers});



const store = createStore(reducers);

export default store;
// export default reducers;