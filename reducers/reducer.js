const initialState = {
    data : [],
    loading : false
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * with context API, we don't need to initilaize our state with the initialState const 
 * We use createContext () hook from react for that, this is an alternative of redux
 * But i preferd to don't implemente it here
 */

export const reducer = (state = initialState, action) => {
    if (action.type == 'ADD_DATA') {
        return {
            ...state,
            data : action.payload
        }
    }
    if (action.type == 'SET_LOADING') {
        return {
            ...state,
            loading : action.payload
        }
    }
    return state
}