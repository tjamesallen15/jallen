import { useState } from "react";

function Child({ name }: { name: string }) {
  console.log("Child rendered with name:", name);
  return <div>Hello {name}</div>;
}

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter rendered");
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}

export default function ScenarioOne() {
  const [name] = useState("John");

  console.log("Parent rendered");

  return (
    <div>
      <Counter />
      <Child name={name} />
    </div>
  );
}
