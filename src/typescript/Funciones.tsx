export const Funciones = () => {

  const sum = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es: {sum(1, 2)}</span>
    </>
  );
};
