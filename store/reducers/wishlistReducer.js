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
export default function wishListReducer(state = [], action) {
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            const existingItem = state.find(product => product.productId === action.payload.productId)
            if (existingItem){
                alert("Item already exist in wishlist!");
                return state;
            }
            return [...state, action.payload];
        case WISHLIST_REMOVE_ITEM: return state.filter(product => product.productId !== action.payload.productId);
        default: return state;
    }
}