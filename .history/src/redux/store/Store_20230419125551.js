import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    reducers,red 
});



const store = createStore(reducers);

export default store;
export default reducers;