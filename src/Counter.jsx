import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementButton = () => {
    setCount(c => c + 1);
  };
  const decrementButton = () => {
    setCount(c => c - 1);
  };

  const resetButton = () => {
    setCount(c => c = 0);
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

// If we want to increase the number when we click the button, by adding one more line of the existing function. It won't work
// That is because we use the current state to calculate the next but set functions do not trigger an update
// Next state becomes the current state. In the case that we need multiple state updates, we need to use updater function
// We either do it by using prevCount or simply take the first letter from our variable
// It's a good practice to write it like that even for a simple counter app
// This way it takes the pending state not the current stage into the next stage
