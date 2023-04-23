import { createStore } from 'redux';
import Reducers1 from '../reducers/Reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Reducers1, Reducers2
});



const store = createStore(rootReducer);

export default store;
// export default reducers;