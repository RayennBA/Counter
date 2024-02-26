import React, { useState } from "react";
import './App.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = (action) => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement") {
      setCount(count - 1);
    } else if (action === "reset") {
      setCount(0);
    }
  };
  return (
    <div className="App">
      <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={() => handleButtonClick("decrement")}>-</button>
        <button onClick={() => handleButtonClick("increment")}>+</button>
        <button onClick={() => handleButtonClick("reset")}>Reset</button>
      </div>
    </div>

  );
}

export default CounterApp;
