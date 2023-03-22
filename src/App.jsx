import { useState } from "react";
import { ThemeProvider } from "styled-components";
import UserSearch from "./components/UserSearch";
import ReactContext from "./components/ReactContext";
import UseReducer from "./components/UseReducer";
import "./App.css";
import UseReducerFetch from "./components/UseReducerFetch";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import UseCallback from "./components/UseCallback";
import CustomHook from "./components/CustomHook";
import CustomHookForm from "./components/CustomHookForm";
import ReactRouter from "./components/ReactRouter";
import SimplifiedRedux from "./components/SimplifiedRedux";
import Redux from "./components/Redux";

const theme = {
  primary: "green",
  mango: "yellow",
};

function App() {
  const [componentSelected, setComponentSelected] = useState("user-search");
  const componentOptions = [
    "user-search",
    "state-provider",
    "use-reducer",
    "use-reducer-fetch",
    "use-memo",
    "use-ref",
    "use-callback",
    "custom-hook",
    "custom-hook-form",
    "react-router",
    "simplified-redux",
    "redux",
  ];

  const handleRadioChange = ({ target: { value } }) =>
    setComponentSelected(value);

  const componentMarkup = {
    "user-search": <UserSearch />,
    "state-provider": <ReactContext />,
    "use-reducer": <UseReducer />,
    "use-reducer-fetch": <UseReducerFetch />,
    "use-memo": <UseMemo />,
    "use-ref": <UseRef />,
    "use-callback": <UseCallback />,
    "custom-hook": <CustomHook />,
    "custom-hook-form": <CustomHookForm />,
    "react-router": <ReactRouter />,
    "simplified-redux": <SimplifiedRedux />,
    redux: <Redux />,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div>
          {componentOptions.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={componentSelected === option}
                onChange={handleRadioChange}
              />
              {option}
            </label>
          ))}
        </div>
        {componentMarkup[componentSelected]}
      </div>
    </ThemeProvider>
  );
}

export default App;
