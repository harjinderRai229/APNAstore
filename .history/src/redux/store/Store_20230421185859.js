import {createStore} from 'redux';
import Reducers from '../reducers/Reducers';
import Reducers2 from '../reducers/Reducers2';
import {combineReducers} from 'redux';
import { add}
const rootReducer = combineReducers({
  Reducers,
  Reducers2,
});

const store = createStore(rootReducer);

export default store;
// export default reducers;
