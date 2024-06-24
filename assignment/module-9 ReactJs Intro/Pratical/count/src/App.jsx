import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='count'>
      <h1>React Web</h1>
      <p>{count}</p>
      <button className='btn-1' onClick={handleDecrement}>Decrement</button>
      <button className='btn-2' onClick={handleIncrement}>Increment</button><br/>
      <button className='btn-3' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;