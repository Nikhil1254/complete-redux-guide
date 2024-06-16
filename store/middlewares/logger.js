export const logger = (store) => (next) => (action) => {
    console.log("Store", store);
    console.log("next:", next);
    console.log("action:", action);
    // if we call next then only reducer will get called
    next(action);
}