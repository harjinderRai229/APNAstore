import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    reducers,Reducers2
});



const store = createStore(reducers);

export default store;
// export default reducers;