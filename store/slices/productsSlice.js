import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        error: '',
        list: []
    },
    reducers: {
        fetchProducts(state) {
            state.loading = true;
        },
        fetchProductsError(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        updateAllProducts(state, action) {
            /**
             * 1. if we do state= action.payload it will not update store state
             * 2. when we want to update complete state return it, don't do like above
             *      just do return action.payload
             */
            state.loading = false;
            state.error = '';
            state.list = action.payload;
        }
    }
});

// fetch products data
export const fetchProductsData = () => (async (dispatch) => {
    try {
        dispatch(fetchProducts()); // will set loading = true
        const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
        dispatch(updateAllProducts(products));
    } catch (err) {
        dispatch(fetchProductsError("Something went wrong !"))
    }
})

// selectors
export const selectProducts = (state) => state.products.list;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;


export const { updateAllProducts, fetchProducts, fetchProductsError } = slice.actions;
export default slice.reducer;

