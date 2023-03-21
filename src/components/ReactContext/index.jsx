import { createContext } from "react";
import ComponentA from "./ComponentA";

export const NameContext = createContext();
export const ColorContext = createContext();

const ReactContext = () => {
  return (
    <NameContext.Provider value={"Smith"}>
      <ColorContext.Provider value={"red"}>
        <ComponentA />
      </ColorContext.Provider>
    </NameContext.Provider>
  );
};

export default ReactContext;
