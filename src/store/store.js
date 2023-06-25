import { createStore } from "redux";

export const cart = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existingItem = state.find((item) => {
                return item.title === action.title;
            });

            if (existingItem) {
                // console.log(existingItem.title);
                // return [...state, {existingItem.title, existingItem.price}];
                return [...state];
            } else {
                return [
                    ...state,
                    {
                        title: action.title,
                        count: action.count,
                        price: action.price,
                        id: Date.now(),
                    },
                ];
            }
        }
        case "REMOVE_FROM_CART": {
            return state.filter((item) => item.id !== action.id);
        }

        default: {
            return state;
        }
    }
};

// export const rootReducer = combineReducers({
//     works,

// });

export const store = createStore(
    cart,

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const addToCart = (title, count, price) => {
    return {
        type: "ADD_TO_CART",
        title,
        count,
        price,
    };
};
export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        id,
    };
};
