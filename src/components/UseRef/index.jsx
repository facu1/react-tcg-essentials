import { useRef, useState } from "react";
import Component from "./Component";

const UseRef = () => {
  const [show, setShow] = useState(true);
  const inputRef = useRef();

  return (
    <div>
      <h1>Focus on input field</h1>
      <input ref={inputRef} type="text" />
      <input type="text" />
      <input type="text" />
      <button onClick={() => inputRef.current.focus()}>focus</button>
      <br />
      <button onClick={() => setShow((prev) => !prev)}>
        Toggle Components
      </button>
      <h1>Unmount component</h1>
      {show && <Component />}
    </div>
  );
};

export default UseRef;
