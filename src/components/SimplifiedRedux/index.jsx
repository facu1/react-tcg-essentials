import { configureStore } from "@reduxjs/toolkit";

const increment = (value = 1) => {
  return { type: "INCREMENT", payload: value };
};

const decrement = () => {
  return { type: "DECREMENT" };
};

const counterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return state + payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = configureStore({ reducer: counterReducer });

store.subscribe(() => {
  console.info(store.getState());
});

store.dispatch(increment(5));

const SimplifiedRedux = () => {
  return <div></div>;
};

export default SimplifiedRedux;
