import React, { useState } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [bigArray] = useState(() =>
    Array.from({ length: 10000 }, (_, i) => i + 1)
  );

  const [toggle, setToggle] = useState(true);

  const sum = () => {
    return bigArray.reduce((acc, curr) => acc + curr);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count +</button>
      <button onClick={() => setToggle((prev) => !prev)}></button>
      <p>bigArray 총합: {sum}</p>
    </div>
  );
}

export default UseMemoExample;
