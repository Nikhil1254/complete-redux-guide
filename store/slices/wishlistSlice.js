import { produce } from "immer";

// action types
export const WISHLIST_ADD_ITEM = 'wishList/addItem';
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// action creators -
export function addToWishList(productData) {
    return {
        type: WISHLIST_ADD_ITEM,
        payload: productData
    }
}

export function removeFromWishList(productId) {
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: { productId }
    }
}

// reducer
export default function wishListReducer(originalState = [], action) {
    // state we get in callback is copy/proxy of actual one
    return produce(originalState, (state) => {
        const itemIndex = state.findIndex(item => item.productId === action.payload.productId);

        switch (action.type) {
            case WISHLIST_ADD_ITEM:
                if (itemIndex == -1)
                    state.push(action.payload);
                else
                    alert('Item already in wishlist!');
                break;
            case WISHLIST_REMOVE_ITEM:
                if (itemIndex !== -1)
                    state.splice(itemIndex, 1);
        }

        // return state --> immer will do it automatically
    })
}