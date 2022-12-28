import { useState, useEffect, useRef } from "react";
import { reqResApi } from "../api/resRes";
import { ReqResList, Usuario } from "../interfaces/reqRes";

export function useUsuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(0);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResList>("/users", {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      alert("No hay mas registros");
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };
  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente,
  };
}
