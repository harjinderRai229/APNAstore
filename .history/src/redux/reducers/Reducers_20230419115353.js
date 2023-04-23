import {ADD_TO_CART, REMOVE_FROM_CART} from '../ActionTypes';
const reducers = (st = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...st, ...action.payload];
    case REMOVE_FROM_CART:
      const deletedArrary = st.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArrary;

    default:
      return st;
  }
};

export default reducers;
