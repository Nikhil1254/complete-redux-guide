
import { combineReducers, createStore } from "redux";
import cartReducer, { addItemToCart, decreaseCartItemQuantity, increaseCartItemQuantity, removeItemFromCart } from "./reducers/cartReducer";
import wishListReducer, { addToWishList, removeFromWishList } from "./reducers/wishlistReducer";
import productsReducer from "./reducers/productsReducer";

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


// improved code by using action creators -
store.dispatch(addItemToCart(12));
store.dispatch(addItemToCart(7));
store.dispatch(addItemToCart(15));
store.dispatch(addItemToCart(6));
store.dispatch(removeItemFromCart(12));
store.dispatch(increaseCartItemQuantity(15));
store.dispatch(increaseCartItemQuantity(15));
store.dispatch(increaseCartItemQuantity(7));
store.dispatch(decreaseCartItemQuantity(15));
store.dispatch(addToWishList(3));
store.dispatch(addToWishList(4));
store.dispatch(addToWishList(5));
store.dispatch(removeFromWishList(4));
store.dispatch(decreaseCartItemQuantity(15));
store.dispatch(decreaseCartItemQuantity(15));









