import { createContext, useContext, useEffect, useState } from "react";

const globalContext = createContext();

export function Provider({ store, children }) {
    const [state, setState] = useState(store.getState());

    /**
     * 1. adding subscribe in useEffect, cause in subscribe we are updating state to re-render
     * component. But if we keep subscribe outside of useEffect on every re-render it will register
     * 2. To avoid that added it to useEffect so it will happen only once.
     * 
     */
    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        })
    }, []);

    /**
     * 1. we added dispatch and state both in value
     * 2. useSelector will get the state and return it
     * 3. useDispatch will receive dispatch value from here and return it.
     */
    return <globalContext.Provider value={{ state, dispatch: store.dispatch }}>
        {children}
    </globalContext.Provider>
}

/**
 * 1. we are creating custom hooks here. Hooks are normal functions only but they should start with 'use' word.
 * 2. In normal functions we can use react hooks like useState, useEffect or useContext. That's the main difference between normal functions and custom hooks.
 */
export function useDispatch() {
    const { dispatch } = useContext(globalContext);
    return dispatch;
}

export function useSelector(selector) {
    const { state } = useContext(globalContext);

    return selector(state);
}