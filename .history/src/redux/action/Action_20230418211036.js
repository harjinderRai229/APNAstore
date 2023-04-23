import { ADD_TO_CART } from "../ActionTypes";

export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFrom = data => ({
    type: ADD_TO_CART,
    payload: data,
});