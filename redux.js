export function createStore(reducer) {
    let state;
    let listeners = [];
    const store = {
        dispatch(action) {
            state = reducer(state, action)
            listeners.forEach(listener => listener());
        },
        getState() {
            return state;
        },
        subscribe(listener) {
            listeners.push(listener);

            return () => {
                let listenerIdx = listeners.findIndex(registeredListener => registeredListener === listener);
                listeners.splice(listenerIdx, 1);
            }
        }
    };

    store.dispatch({ type: '@@INIT' });
    return store;
}


