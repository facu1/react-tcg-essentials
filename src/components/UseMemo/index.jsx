import { useMemo, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const UseMemo = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const incrementA = () => setCountA((prev) => prev + 1);
  const incrementB = () => setCountB((prev) => prev + 1);
  const memoComponentA = useMemo(() => {
    return <ComponentA count={countA} />;
  }, [countA]);

  return (
    <div>
      UseMemo count A: {countA}
      <div>
        <button onClick={incrementA}>Increment A</button>
        <button onClick={incrementB}>Increment B</button>
      </div>
      <div>{memoComponentA}</div>
      <div>
        <ComponentB count={countB} />
      </div>
    </div>
  );
};

export default UseMemo;
