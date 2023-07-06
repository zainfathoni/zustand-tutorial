import useCounterStore from "./counterStore";

function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
