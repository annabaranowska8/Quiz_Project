import { useState, useEffect } from "react";

const CounterLocalStorage = (clickCounterInLocalStorage) => {
  const [counter, setCounter] = useState(localStorage.getItem(clickCounterInLocalStorage));
  useEffect(() => {
    localStorage.setItem(clickCounterInLocalStorage, counter);
  }, [counter]);
  return [counter, setCounter];
};

export default CounterLocalStorage;
