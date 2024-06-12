import { produce } from "immer";

// action types
export const CART_ADD_ITEM = 'cart/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem';
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantity';
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantity';

// action creators -
export function decreaseCartItemQuantity(productId) {
    return {
        type: CART_ITEM_DECREASE_QUANTITY,
        payload: { productId }
    }
}

export function increaseCartItemQuantity(productId) {
    return {
        type: CART_ITEM_INCREASE_QUANTITY,
        payload: { productId }
    }
}

export function addItemToCart(productData) {
    return {
        type: CART_ADD_ITEM,
        payload: productData
    }
}

export function removeItemFromCart(productId) {
    return {
        type: CART_REMOVE_ITEM,
        payload: { productId }
    }
}

// reducer 
export default function cartReducer(originalState = [], action) {
    return produce(originalState, (state) => {
        const cartItemIndex = state.findIndex(item => item.productId === action.payload.productId);

        switch (action.type) {
            case CART_ADD_ITEM:
                if (cartItemIndex !== -1) {
                    state[cartItemIndex].quantity++;
                    break;
                }
                state.push({ ...action.payload, quantity: 1 });
                break;
            case CART_REMOVE_ITEM:
                if (cartItemIndex !== -1)
                    state.splice(cartItemIndex, 1);
                break;
            case CART_ITEM_INCREASE_QUANTITY:
                if(cartItemIndex!==-1)
                    state[cartItemIndex].quantity++;
                break;

            case CART_ITEM_DECREASE_QUANTITY:
                if(cartItemIndex !== -1){
                    (state[cartItemIndex].quantity-- == 1) && state.splice(cartItemIndex,1);
                }
        }
    })
}