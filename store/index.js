
import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishlistSlice";
import productsReducer from "./slices/productsSlice";
import { produce } from "immer";

// using redux combine reducer method -
export const store = createStore(combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__?.());


// immer example - 
let user = { name: "Nikhil", age: 24 }

let newUser = produce(user, (userCopy) => {
    userCopy.age = 47;
})

console.log(user);
console.log(newUser)







