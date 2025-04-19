import React from "react";
import { Usuario } from "../../types/usuario";
import VendedoresTable from "./tablavendedor-universal";

interface ListaVendedoresProps {
  usuarios: Usuario[];
  loading: boolean;
  error: string | null;
}

const ListaVendedores: React.FC<ListaVendedoresProps> = ({ usuarios, loading, error }) => {
  const vendedores = usuarios.filter((usuario) => usuario.id_rol === 5);

  return (
    <div>
      <h3>🛍️ Lista de Vendedores</h3>
      {loading && <p>Cargando vendedores...</p>}
      {error && <p>Error: {error}</p>}
      <VendedoresTable vendedores={vendedores} loading={loading} error={error} />
    </div>
  );
};

export default ListaVendedores;
