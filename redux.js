// creating own redux library - 

export function myCreateStore(reducer) {
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

/**
 * 1. so basically or createStore expects a reducer function which can accept state and action
 * 2. in combine reducer it will also return same kind of function and internally it will call all reducers and
 *  create new state from their values and return it.
 */
export function myCombineReducers(reducers) {
    let reducerKeys = Object.keys(reducers);


    return function (state = {}, action) {
        let nextState = {};
        reducerKeys.forEach((key) => {
            nextState[key] = reducers[key](state[key], action) // calling corresponding reducer
        })

        return nextState;
    }
}

