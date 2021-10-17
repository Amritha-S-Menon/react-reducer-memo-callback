import { useState, useEffect, useRef, useCallback } from "react";



const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = savedCallback.current;
    if (delay !== undefined) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

function TimerRefHookOne() {
  const [value, setValue] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isPaused, setIsPaused] = useState(false);

  const incrementCounter = () => {
    setValue((value) => value + 1);
  };

  useInterval(incrementCounter, isPaused ? undefined : delay);

  return (
    <>
      <h1>Count: {value}</h1>
      <span>Delay (in ms: )</span>
      <input value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
      <br />
      <br />
      <button onClick={() => setIsPaused((isPaused) => !isPaused)}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </>
  );
}

export default TimerRefHookOne