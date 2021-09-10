import { useState, useEffect } from "react";

const CounterkLocalStorage = (clickLS) => {
  const [counter, setCounter] = useState(localStorage.getItem(clickLS));
  useEffect(() => {
    localStorage.setItem(clickLS, counter);
  }, [counter]);
  return [counter, setCounter];
};

export default CounterkLocalStorage;
