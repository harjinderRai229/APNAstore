import { ADD_ADDRESS, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from '../ActionTypes';
const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deletedArrary1 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArrary1;

    default:
      return state;
  }
};

export default Reducers;
