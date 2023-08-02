import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(
    function myEffect() {
      console.log("my effect was called");
    },
    [count] // Only runs the effect on renders when count, with empty [] only runs on mount (first render)
  );
  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>Name: {name}</p>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  );
}
