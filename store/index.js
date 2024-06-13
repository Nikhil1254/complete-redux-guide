
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishlistSlice";
import productsReducer from "./slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";



// using redux combine reducer method -
// export const store = createStore(combineReducers({
//     products: productsReducer,
//     cartItems: cartReducer,
//     wishList: wishListReducer
// }), window.__REDUX_DEVTOOLS_EXTENSION__?.());

// using configureStore method -
export const store = configureStore({reducer : {
    products : productsReducer,
    cartItems : cartReducer,
    wishList : wishListReducer
}})









