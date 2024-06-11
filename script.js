
import { createStore } from "redux";
import { products } from "./products";

const initialState = {
    products: products,
    cartItems: [],
    wishList: []
}

// actions 
const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantity';
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantity';
const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

function reducer(state = initialState, action) {
    switch (action.type) {
        case CART_ADD_ITEM: return { ...state, cartItems: [...state.cartItems, action.payload] };
        case CART_REMOVE_ITEM: return { ...state, cartItems: state.cartItems.filter(item => item.productId !== action.payload.productId) };
        case CART_ITEM_INCREASE_QUANTITY:
            return {
                ...state, cartItems: state.cartItems.map(item => {
                    if (item.productId == action.payload.productId)
                        return { ...item, quantity: item.quantity + 1 };
                    return item;
                })
            }
        case CART_ITEM_DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId)
                        return { ...cartItem, quantity: cartItem.quantity - 1 };
                    return cartItem;
                }).filter((cartItem) => cartItem.quantity > 0)
            }
        case WISHLIST_ADD_ITEM:
            return { ...state, wishList: [...state.wishList, action.payload.productId] };
        case WISHLIST_REMOVE_ITEM: return { ...state, wishList: state.wishList.filter(wishListItem => wishListItem !== action.payload.productId) };
        default: return state;
    }
}


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
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 6 } })







