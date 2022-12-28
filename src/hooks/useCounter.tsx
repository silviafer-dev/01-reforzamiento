import { useState } from "react";

export const useCounter = (initial: number = 10) => {
  const [count, setCount] = useState(initial);

  const acumular = (numero: number) => {
    setCount(count + numero);
  };
  return {
    count,
    acumular,
  };
};
