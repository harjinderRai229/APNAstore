import { ADD_TO_CART } from "../ActionTypes";

export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const remove = data => ({
    type: ADD_TO_CART,
    payload: data,
});