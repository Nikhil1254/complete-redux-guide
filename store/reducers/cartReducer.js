
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
export default function cartReducer(state = [], action) {
    console.log('cart reducer');
    switch (action.type) {
        case CART_ADD_ITEM:
            const existingProduct = state.find(product => product.productId === action.payload.productId);
            if (existingProduct) {
                return state.map(product => {
                    return product.productId === action.payload.productId ? { ...product, quantity: product.quantity + 1 } : product;
                })
            }
            return [...state, { ...action.payload, quantity: 1 }];
        case CART_REMOVE_ITEM: return state.filter(item => item.productId !== action.payload.productId);
        case CART_ITEM_INCREASE_QUANTITY:
            return state.map(item => {
                return (item.productId == action.payload.productId) ?
                    { ...item, quantity: item.quantity + 1 }
                    : item;
            })

        case CART_ITEM_DECREASE_QUANTITY:
            return state.map((cartItem) => {
                if (cartItem.productId === action.payload.productId)
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                return cartItem;
            }).filter((cartItem) => cartItem.quantity > 0)

        default: return state;
    }
}