import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementButton = () => {
    setCount(count + 1);
  };
  const decrementButton = () => {
    setCount(count - 1);
  };

  const resetButton = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter Application</h1>
      <p>{count}</p>
      <button onClick={incrementButton}>Increase</button>
      <button onClick={decrementButton}>Decrease</button>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
};

export default Counter;
