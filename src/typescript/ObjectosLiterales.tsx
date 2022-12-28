interface Person {
  fullName: string;
  age: number;
  direction: Direction;
}

interface Direction {
  city: string;
  code: number;
}

export const ObjectosLiterales = () => {
  const persons: Person = {
    fullName: "Silvia",
    age: 41,
    direction: {
      city: "Madrid",
      code: 28012,
    },
  };

  return (
    <>
      <h3>Objectos Literales</h3>
      <code>
        <pre>{JSON.stringify(persons, null, 2)}</pre>
      </code>
    </>
  );
};
