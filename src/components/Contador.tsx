import React, { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(10);

  const acumular = (numero: number) => {
    setCount(count + numero);
  };

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
