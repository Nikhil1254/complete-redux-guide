import { createStore } from 'redux';

const postCountElem = document.querySelector('.post-count');
const incrementBtnElem = document.querySelector('.btn-increment');
const decrementBtnElem = document.querySelector('.btn-decrement');


const initialState = {
    post: 0,
    name: 'Nikhil Patil',
    age: 24
}

// actions -
const INCREMENT = 'post/increment';
const DECREMENT = 'post/decrement';
const INCREASE_BY = 'post/increaseBy';
const DECREASE_BY = 'post/decreaseBy';


// reducer function - 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return { ...state, post: state.post + 1 };
        case DECREMENT: return { ...state, post: state.post - 1 };
        case INCREASE_BY: return { ...state, post: state.post + action.payload };
        case DECREASE_BY: return { ...state, post: state.post - action.payload };
        default: return state;
    }
}

// creating store -
const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());

// subscribe - 
/**
 * 1. we can unsubscribe by calling that method. after that callback of subscribe will not be called.
 */
const unsubscribe = store.subscribe(() => {
    console.log(`state :`, store.getState());
    postCountElem.innerHTML = store.getState().post;
})

incrementBtnElem.addEventListener("click", () => {
    store.dispatch({ type: INCREMENT })
})

decrementBtnElem.addEventListener('click', () => {
    store.dispatch({ type: DECREMENT })
})

// dispatching actions - 
postCountElem.innerHTML = store.getState().post;
console.log(store.getState());
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: DECREASE_BY, payload: 6 });


