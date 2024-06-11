
import { combineReducers, createStore } from "redux";
import cartReducer, { CART_ADD_ITEM, CART_ITEM_DECREASE_QUANTITY, CART_ITEM_INCREASE_QUANTITY, CART_REMOVE_ITEM } from "./reducers/cartReducer";
import wishListReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./reducers/wishlistReducer";
import productsReducer from "./reducers/productsReducer";
import { myCombineReducers } from "./redux";

// using redux combine reducer method -
const store = createStore(combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__?.());

// using our own combine reducer method
// const store = createStore(myCombineReducers({
//     products: productsReducer,
//     cartItems: cartReducer,
//     wishList: wishListReducer
// }), window.__REDUX_DEVTOOLS_EXTENSION__?.());

myCombineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
})

console.log(store.getState());

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 7, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 15, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 6, quantity: 1 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 12 } })
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 15 } })
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 15 } })
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 7 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productId: 15 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 3 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 4 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 5 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 4 } });
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productId: 15 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productId: 15 } })








