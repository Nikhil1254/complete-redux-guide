import { createSlice } from "@reduxjs/toolkit";

function getItemIndex(state, action) {
    return state.findIndex(item => item.productId === action.payload.productId);
}

const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const cartItemIndex = getItemIndex(state, action);
            if (cartItemIndex !== -1)
                state[cartItemIndex].quantity++;
            else
                state.push({ ...action.payload, quantity: 1 });
        },
        removeItem(state, action) {
            const cartItemIndex = getItemIndex(state, action);
            if (cartItemIndex !== -1)
                state.splice(cartItemIndex, 1);
        },
        increaseQuantity(state, action) {
            const cartItemIndex = getItemIndex(state, action);
            if (cartItemIndex !== -1)
                state[cartItemIndex].quantity++;
        },
        decreaseQuantity(state, action) {
            const cartItemIndex = getItemIndex(state, action);
            if (cartItemIndex !== -1) {
                state[cartItemIndex].quantity-- == 1 && state.splice(cartItemIndex, 1);
            }
        }
    }
})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = slice.actions;
export default slice.reducer;