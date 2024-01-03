import { useDispatch, useSelector } from "react-redux";
import { setUserValue, changeNumber } from "../redux/changeNumber";

type StateStore = {
  [key: string]: StateItem;
}

export type StateItem = {
  value: number;
  userValue: string;
}

export default function MainApp() {
  const dispatch = useDispatch();
  const {value: numberValue, userValue} = useSelector((state: StateStore) => state.number);
  
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    changeNumber(dispatch)(userValue);
  };

  return (
      <form
        className="form__container"
        onSubmit={submitHandler}>
        <div
          className="form__input-wrapper">
            <input
              className="form__input"
              type="number"
              required
              value={userValue}
              onChange={e => setUserValue(dispatch)(e.target.value)}
            />
        </div>
        <div
          className="form__button-wrapper">
            <button 
              className="form__button"
            >change number</button>
        </div>
        <span className="form__signature">Result: {numberValue}</span>
    </form>
  );
}
