import { CHANGE_NUMBER, SET_USER_VALUE } from "./actions";

const changeNumber = (dispatch: unknown) => (number: number): void => {
    const action = {
        type: CHANGE_NUMBER,
        payload: number,
    };
    dispatch(action);
};

const setUserValue = (dispatch: unknown) => (userNumber: string): void => {
    const action = {
        type: SET_USER_VALUE,
        payload: userNumber,
    }
    dispatch(action);
}

export { changeNumber, setUserValue };