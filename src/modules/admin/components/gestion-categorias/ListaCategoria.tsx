// ListaCategorias.tsx
import React from "react";
import { Categoria } from "../../types/categoria";
import CategoriasTable from "../../../universal/components/tablacategorias-universal";

// Primero defines el tipo de categoría
interface ListaCategoriasProps {
  categorias: Categoria[];
  loading: boolean;
  error: string | null;
}

// Ahora sí, defines el componente con esas props
const ListaCategorias: React.FC<ListaCategoriasProps> = ({ categorias, loading, error }) => {
  return (
    <div>
      <h3>📋 Lista de Categorías</h3>
      {loading && <p>Cargando categorías...</p>}
      {error && <p>Error: {error}</p>}
      <CategoriasTable categorias={categorias} loading={loading} error={error} />
    </div>
  );
};

export default ListaCategorias;
