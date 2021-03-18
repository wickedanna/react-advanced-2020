import React, { useState } from 'react';

const UseStateCounter = () => {
  const [ counterVal, setCounterVal ] = useState(0);

  const reset = () => {
    setCounterVal(0);
  };

  return <>
    <section style={{margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{counterVal}</h1>
      <button className="btn" onClick={() => setCounterVal(counterVal - 1)}>decrease</button>
      <button className="btn" onClick={reset}>reset</button>
      <button className="btn" onClick={() => setCounterVal(counterVal + 1)}>increase</button>
    </section>
  </>;
};

export default UseStateCounter;
