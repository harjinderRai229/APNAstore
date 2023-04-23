import {ADD_TO_CART, REMOVE_FROM_CART} from '../ActionTypes';
const reducers = (initialState = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...initialState, ...action.payload];
    case REMOVE_FROM_CART:
      const deletedArrary = initialState.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArrary;

    default:
      return initialState;
  }
};

export default reducers;
