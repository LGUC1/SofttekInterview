import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + 1,
        };
    }
    if(action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - 1,
        };
    }
    return state;

    //TERNARIO??
    // return action.type === INCREMENT ? { ...state, value: state.value + 1 }
    //      : action.type === DECREMENT ? { ...state, value: state.value - 1 }
    //      : state;
}

export default counterReducer;