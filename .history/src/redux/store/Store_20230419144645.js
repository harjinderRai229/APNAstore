import {createStore} from 'redux';
import Re from '../reducers/Reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Reducers1,Reducers2
});



const store = createStore(reducers);

export default store;
// export default reducers;