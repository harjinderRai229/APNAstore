import { ADD_TO_CART, REMOVE_FROM_CART } from '../ActionTypes';
const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deletedArrary = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArrary;
    case ADD_TO_W:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deletedArrary = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArrary;

    default:
      return state;
  }
};

export default reducers;