import { useEffect } from "react";

let renderCount = 1;

const ComponentA = ({ count }) => {
  useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h1>
        ComponentA: render {renderCount} || Counter: {count}
      </h1>
    </div>
  );
};

export default ComponentA;
