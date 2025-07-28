import { useReducer, useState, type ChangeEvent } from "react";
import { useDebounce } from "../hooks/useDebounce";

type State = {
  value: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

function hintReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    default:
      return state;
  }
}

const initialState: State = { value: 0 };

function Hookers() {
  const [message, setMessage] = useState("");
  const { debounceMessage } = useDebounce(message, 500);

  const [hint, dispatch] = useReducer(hintReducer, initialState);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    dispatch({ type: "increment" });
  };

  console.log("will render");

  return (
    <>
      <input type="text" onChange={onInputChange}></input>
      <p>{hint.value}</p>
      <p>Message: {message} </p>
      <p>Debounce Message: {debounceMessage}</p>
    </>
  );
}

export default Hookers;
