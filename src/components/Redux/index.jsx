import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import ReduxComp from "./components/Redux";

const store = configureStore({ reducer: allReducers });

const Redux = () => {
  return (
    <Provider store={store}>
      <ReduxComp />
    </Provider>
  );
};

export default Redux;
