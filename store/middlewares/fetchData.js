export const fetchDataMiddleware = (store) => (next) => (action) => {

    if (typeof action === 'function') {
        action(dispatch);
    } else
        next(action);
}
