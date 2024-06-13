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

    function reducer(originalState = initialState, action) {
        return produce(originalState, (state) => {
            const caseReducer = reducers[action.type.split('/')[1]]
            if (caseReducer)
                caseReducer(state, action);
        })
    }

    return { actions, reducer }
}