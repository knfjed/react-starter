import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <p id="effectHook">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
