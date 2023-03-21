import { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";

export const CounterContext = createContext();

const initialState = {
  counter: 0,
};
const reducer = (state, { type, payload = 1 }) => {
  switch (type) {
    case "increment":
      return { ...state, counter: state.counter + payload };
    case "decrement":
      return { ...state, counter: state.counter - payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CounterContext.Provider value={{ counter: state.counter, dispatch }}>
        Use Reducer index counter {state.counter}
        <ComponentA />
      </CounterContext.Provider>
    </div>
  );
};
export default UseReducer;
