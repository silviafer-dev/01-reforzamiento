import { useUsuario } from "../hooks/useUsuario";
import { Usuario } from "../interfaces/reqRes";

export function Usuarios() {
  const { usuarios, paginaSiguiente, paginaAnterior } = useUsuario();

  // const renderItem = (usuario: Usuario) => {
  //       return (
  //       <tr key={usuario.id.toString()}>
  //         <td>Avatar</td>
  //         <td>{usuario.first_name} {usuario.last_name}</td>
  //         <td>Email</td>
  //       </tr>
  //     );
  //   };

  // > DESTRUCTURIZADO   :
  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 45, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguientes
      </button>
    </>
  );
}
