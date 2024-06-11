
import { createStore } from "./redux.js";

const initialState = {
    post: 0,
    name: 'Nikhil Patil',
    age: 24
}

const INCREMENT = 'post/increment';
const DECREMENT = 'post/decrement';
const INCREMENT_BY = 'post/incrementBy';
const DECREMENT_BY = 'post/decrementBy';

const store = createStore(reducer);
function reducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT: return { ...state, post: state.post + 1 };
        case DECREMENT: return { ...state, post: state.post - 1 };
        case INCREMENT_BY: return { ...state, post: state.post + action.payload };
        case DECREMENT_BY: return { ...state, post: state.post - action.payload };
        default: return state;
    }
}

const unsubscribe1 = store.subscribe(() => {
    console.log("listener1", store.getState());
})

const unsubscribe2 = store.subscribe(() => {
    console.log('listener2', 'Hello');
})

const unsubscribe3 = store.subscribe(() => {
    console.log('listener3');
})

console.log(store.getState());
store.dispatch({ type: INCREMENT_BY, payload: 10 });
store.dispatch({ type: DECREMENT });
unsubscribe2();
store.dispatch({ type: DECREMENT_BY, payload: 4 });