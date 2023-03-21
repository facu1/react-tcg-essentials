import { useCallback, useState } from "react";

const functionCounter = new Set();

const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    console.info("increment1");
    setCount1((prev) => prev + 1);
  };
  const increment2 = useCallback(() => {
    console.info("increment2");
    setCount2((prev) => prev + 1);
  }, count2);

  functionCounter.add(increment1);
  functionCounter.add(increment2);
  console.info({ functionCounter });

  return (
    <div>
      <p>
        counter 1: {count1} counter 2: {count2}
      </p>
      <button onClick={increment1}>increase counter 1</button>
      <button onClick={increment2}>increase counter 2</button>
    </div>
  );
};

export default UseCallback;
