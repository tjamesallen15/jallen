import { useState, useEffect, useLayoutEffect } from 'react';

export default function ConsoleLogOrder() {
  console.log('1. Component render');
  
  const [count, setCount] = useState(() => {
    console.log('2. useState initializer');
    return 0;
  });

  useLayoutEffect(() => {
    console.log('3. useLayoutEffect - DOM mounted');
  }, []);

  useEffect(() => {
    console.log('4. useEffect mount');
    return () => console.log('5. useEffect cleanup');
  }, []);

  useEffect(() => {
    console.log('6. useEffect count change:', count);
  }, [count]);

  console.log('7. Before return');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}