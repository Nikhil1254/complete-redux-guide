import { createSlice } from "@reduxjs/toolkit";

const getItemIndex = (state, action) => (state.findIndex(item => item.productId === action.payload.productId))


const slice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishList(state, action) {
            const itemIndex = getItemIndex(state, action);
            if (itemIndex == -1)
                state.push(action.payload);
            else
                alert("Item already exists in wishlist!");
        },
        removeFromWishList(state, action) {
            const itemIndex = getItemIndex(state, action);
            if (itemIndex !== -1)
                state.splice(itemIndex, 1);
        }
    }
})


export const { addToWishList, removeFromWishList } = slice.actions;
export default slice.reducer;