import React, { useState } from 'react';
import './App.css';

const App = () => {
  // const [state, setstate] = useState(initialState)
  const [counter, setCounter] = useState(0);
  const [counterCondition, setCounterCondition] = useState(0);
  return (
    <main className="App">
      <h1 className="templateHint">Counter App using State and Props</h1>
      <div className="counterContainer">
        <h2><span>Current Counter Value is &nbsp;</span><span className="counter">{counter}</span></h2>
        <div className="btnBlock">
          <button onClick={() => setCounter(0)} className="btn resetBtn">Reset</button>
          <button onClick={() => setCounter(counter + 1)} className="btn plusBtn">+</button>
          <button onClick={() => setCounter(counter - 1)} className="btn minusBtn">-</button>
        </div>
        <h2><span>Current Counter Value with If Condition is &nbsp;</span><span className="counter">{counterCondition}</span></h2>
        <div className="btnBlock">
          <button onClick={() => setCounterCondition(0)} className="btn resetBtn">Reset</button>
          <button
            onClick={
              () => (counterCondition >=10 ? '' : setCounterCondition(counterCondition + 1))
            }
            className="btn plusBtn">+</button>
          <button
            onClick={
              () => (counterCondition <1 ? '' : setCounterCondition(counterCondition - 1))
            }
            className="btn minusBtn">-</button>
        </div>
      </div>
    </main>
  );
}

export default App;
