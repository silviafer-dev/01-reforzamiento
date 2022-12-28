export const TiposBasicos = () => {
  const name: string = "Silvia";
  const age: number = 41;
  const isActive: boolean = true;

  const powers: string[] = ["velocidad", "volar", "elastic"];

  return (
    <>
      <h3>Tipos Básicos</h3>
      {name}, {age}, {isActive ? "active" : "no active"}
      <hr />
      {powers.join(", ")}
    </>
  );
};
