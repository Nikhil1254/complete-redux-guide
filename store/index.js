
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishlistSlice";
import productsReducer from "./slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from './middlewares/api';


// using configureStore method -
/**
 * 1. This is how we can pass middleware to configure store
 */
export const store = configureStore({
    reducer: {
        products: productsReducer,
        cartItems: cartReducer,
        wishList: wishListReducer
    },
    middleware: (defaultMiddleware) => [...defaultMiddleware(), apiMiddleware],
});









