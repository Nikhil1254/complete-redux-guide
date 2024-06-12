// action types
export const WISHLIST_ADD_ITEM = 'wishList/addItem';
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// action creators -
export function addToWishList(productId) {
    return {
        type: WISHLIST_ADD_ITEM,
        payload: { productId }
    }
}

export function removeFromWishList(productId) {
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: { productId }
    }
}

// reducer
export default function wishListReducer(state = [], action) {
    console.log('wishlist reducer');
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            return [...state, action.payload.productId];
        case WISHLIST_REMOVE_ITEM: return state.filter(wishListItem => wishListItem !== action.payload.productId);
        default: return state;
    }
}