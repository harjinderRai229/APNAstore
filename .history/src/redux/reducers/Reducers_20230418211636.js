const { ADD_TO_CART } = require("../ActionTypes");

const reducers = (initialState = [], actions) => {
    switch (actions) {
        case ADD_TO_CART:
            return [...initialState, ...actions.payload];
    }
}