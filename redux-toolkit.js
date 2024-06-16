import { produce } from "immer";
/**
 * 
 * @param config - {name,initialState, reducers : {}} 
 */
export function createSlice(config) {
    const { name, initialState, reducers } = config;
    const actions = {};

    Object.keys(reducers).forEach((key) => {
        actions[key] = function (payload) {
            return { type: `${name}/${key}`, payload }
        }
    })

    /**
     * 1. depending on the action type we are calling corresponding function
     * 2. Instead of switch cases we are calling the corresponding function by passing proxy state and action.
     * 3. That method will mutate this proxy object and produce will return that proxy.
     */
    function reducer(originalState = initialState, action) {
        return produce(originalState, (state) => {
            const caseReducer = reducers[action.type.split('/')[1]]
            if (caseReducer)
                caseReducer(state, action);
        })
    }

    return { actions, reducer }
}