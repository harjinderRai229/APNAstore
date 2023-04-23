import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
});
export const addToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
});