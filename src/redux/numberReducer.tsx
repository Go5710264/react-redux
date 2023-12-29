import { CHANGE_NUMBER, SET_USER_VALUE } from "./actions";

const initialState = {
    value: 0,
    userValue: 0,
}

const numberReducer = (state = initialState, action: unknown) => {
    switch (action.type) {
        case CHANGE_NUMBER:
            return {
                ...state,
                value: state.value + parseInt(action.payload)
            }
        case SET_USER_VALUE:
            return {
                ...state,
                userValue: action.payload
            }
        default:
            return state;
    }
}

export default numberReducer;