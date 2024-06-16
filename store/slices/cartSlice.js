import { createSlice } from "@reduxjs/toolkit";

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

console.log(mySlice);

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, fetchCartItems, updateAllCartItems, fetchCartItemsError } = mySlice.actions;
export default mySlice.reducer;