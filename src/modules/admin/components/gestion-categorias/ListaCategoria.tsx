// ListaCategorias.tsx
import React from "react";
import { Categoria } from "../../types/categoria";
import { Subcategoria } from "../../types/subcategoria";
import CategoriasTable from "./tablacategorias-universal";

interface ListaCategoriasProps {
  categorias: Categoria[];
  subcategorias: Subcategoria[];
  loading: boolean;
  error: string | null;
}

const ListaCategorias: React.FC<ListaCategoriasProps> = ({ categorias, subcategorias, loading, error }) => {
  return (
    <div>
      <h3>📋 Lista de Categorías</h3>
      {loading && <p>Cargando categorías...</p>}
      {error && <p>Error: {error}</p>}
      <CategoriasTable categorias={categorias} loading={loading} error={error} />
      <br />
      <p>Categorías registradas: {categorias.length}</p>
    </div>
  );
};

export default ListaCategorias;
