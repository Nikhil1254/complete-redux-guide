import { createSelector, createSlice } from "@reduxjs/toolkit";

function getItemIndex(state, action) {
    return state.findIndex(item => item.productId === action.payload.productId);
}

const mySlice = createSlice({
    name: 'cart',
    initialState: {
        error: '',
        loading: false,
        list: []
    },
    reducers: {
        fetchCartItems(state) {
            state.loading = true
        },
        fetchCartItemsError(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        updateAllCartItems(state, action) {
            state.loading = false;
            state.error = '';
            state.list = action.payload;
        },
        addItem(state, action) {
            const cartItemIndex = getItemIndex(state.list, action);
            if (cartItemIndex !== -1)
                state.list[cartItemIndex].quantity++;
            else
                state.list.push({ ...action.payload, quantity: 1 });
        },
        removeItem(state, action) {
            const cartItemIndex = getItemIndex(state.list, action);
            if (cartItemIndex !== -1)
                state.list.splice(cartItemIndex, 1);
        },
        increaseQuantity(state, action) {
            const cartItemIndex = getItemIndex(state.list, action);
            if (cartItemIndex !== -1)
                state.list[cartItemIndex].quantity++;
        },
        decreaseQuantity(state, action) {
            const cartItemIndex = getItemIndex(state.list, action);
            if (cartItemIndex !== -1) {
                state.list[cartItemIndex].quantity-- == 1 && state.list.splice(cartItemIndex, 1);
            }
        }
    }
});

// fetching cart items
export const fetchCartItemsData = () => (async(dispatch) => {
    try {
        dispatch(fetchCartItems()); // will set loading = true
        const { products } = await fetch("https://fakestoreapi.com/carts/3").then(res => res.json());
        dispatch(updateAllCartItems(products));
    } catch (err) {
        dispatch(fetchCartItemsError('Something went wrong !'));
    }
})

// selectors - 
/**
 * 
 * 1. cartItems method is returning an new array everytime.
 * 2. So it might happen like inner content is same but still we are returning new array
 *    and this may cause to unnecessary rerenders.
 * 3. To avoid that we need to memorize the result from this selector. But we don't need to do it manually. Instead we can use a method createSelector(selector,(state)=>state) from RTK and use
 */
export const selectCartItemsLoading = (state) => state.cartItems.loading;
export const selectCartItemsError = (state) => state.cartItems.error;
const cartItems = (state) => {
    return state.cartItems.list.map((cartItem) => {
        const product = state.products.list.find(product => product.id === cartItem.productId)
        return { ...product, quantity: cartItem.quantity }
    })
}

export const selectCartItems = createSelector(cartItems, (state) => state);

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, fetchCartItems, updateAllCartItems, fetchCartItemsError } = mySlice.actions;
export default mySlice.reducer;