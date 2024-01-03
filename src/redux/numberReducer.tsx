import { CHANGE_NUMBER, SET_USER_VALUE } from "./actions";

export type IAction = {
    type: string,
    payload: string
}

const initialState = {
    value: 0,
    userValue: 0,
}

const numberReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CHANGE_NUMBER:
            // action = {type: "CHANGE_NUMBER", payload: state.value + input.value}
            return {
                ...state,
                value: state.value + parseInt(action.payload)
            }
        case SET_USER_VALUE:
            // action = {type: "SET_USER_VALUE", payload: 1}
            return {
                ...state,
                userValue: action.payload
            }
        default:
            return state;
    }
}

export default numberReducer;