import React from "react";
import { Usuario } from "../../types/usuario";
import UsuariosTable from "./tablausuarios-universal";

// Primero defines el tipo de usuario
interface ListaUsuariosProps {
  usuarios: Usuario[];
  loading: boolean;
  error: string | null;
}

// Ahora sí, defines el componente con esas props
const ListaUsuarios: React.FC<ListaUsuariosProps> = ({ usuarios, loading, error }) => {
  return (
    <div>
      <h3>📋 Lista de usuarios</h3>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p>Error: {error}</p>}
      <UsuariosTable usuarios={usuarios} loading={loading} error={error} />
    </div>
  );
};

export default ListaUsuarios;
