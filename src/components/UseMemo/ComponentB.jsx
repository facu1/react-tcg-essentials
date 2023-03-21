import { useEffect } from "react";

let renderCount = 1;

const ComponentB = ({ count }) => {
  useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h1>
        ComponentB: render {renderCount} || Counter: {count}
      </h1>
    </div>
  );
};

export default ComponentB;
