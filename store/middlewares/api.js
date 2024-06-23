export default apiMiddleware = ({ dispatch }) => (next) => (action) => {
    const BASE_URL = "https://fakestoreapi.com"
    if (action.type === 'api/fetchProducts') {
        next(action) // our action will be visible in redux devtools
        // fetching products
        const { url, onStart, onSuccess, onFailure } = action.payload;
        dispatch({
            type: onStart
        })
        fetch(`${BASE_URL}/${url}`)
            .then(res => res.json())
            .then(products => {
                dispatch({ type: onSuccess, payload: products });
            }).catch(err => {
                dispatch({ type: onFailure, payload: 'Something went wrong!' });
            })
    }
    else if (action.type === 'api/fetchCartItems') {
        next(action)
        // fetching cart items
        const { url, onStart, onFailure, onSuccess } = action.payload;
        dispatch({
            type: onStart
        })
        fetch(`${BASE_URL}/${url}`).then(res => res.json())
            .then(({ products }) => dispatch({ type: onSuccess, payload: products }))
            .catch(() =>
                dispatch({ type: onFailure, payload: "Something went wrong!" }));

    }
    else {
        next(action);
    }
}