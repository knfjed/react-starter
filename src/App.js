import React, { useState, useMemo } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const dubble = (count) => {
    let i = 0;
    while (i < 10000000) i++;
    return count * 2;
  };

  const dubbleCount = useMemo(() => dubble(count1), [count1]);

  return (
    <div>
      <p>count1: {count1}</p>
      <p>dubbleCount: {dubbleCount}</p>
      <button onClick={() => setCount1(count1 + 1)}>increment1</button>

      <p>count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>increment2</button>
    </div>
  );
}

export default App;
