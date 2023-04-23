// import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

const { ADD_TO_CART, REMOVE_FROM_CART } = require("../ActionTypes");

// const reducers = (initialState = [], actions) => {
//     switch (actions) {
//         case ADD_TO_CART:
//             return [...initialState, ...actions.payload];
//         case REMOVE_FROM_CART:
//             const deletedArrary = initialState.filter((item, index)
//             return index !== actions.payload;
//     });
//     return deletedArrary;
//     default initialState;

//     } 
// };


const reducers = (initialState = [], actions) => {
    switch (actions) {
        case ADD_TO_CART:
            return[...initialState,...actions.payload];
            case REMOVE_FROM_CART:
                const deletedArrary= initialState.filter((item,index)=>{
                    return index!==actions.payload
                })
                return deletedArrary

    }
};