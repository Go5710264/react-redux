import { CHANGE_NUMBER, SET_USER_VALUE } from "./actions";
import { IAction } from "./numberReducer";

const changeNumber = (dispatch: React.Dispatch<IAction>) => (number: string): void => {
    const action = {
        type: CHANGE_NUMBER,
        payload: number,
    };

    console.log(dispatch)
    dispatch(action);
};

const setUserValue = (dispatch: React.Dispatch<IAction>) => (userNumber: string): void => {
    const action = {
        type: SET_USER_VALUE,
        payload: userNumber,
    };
    
    dispatch(action);
}

export { changeNumber, setUserValue };