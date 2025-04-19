// ListaSubcategorias.tsx
import React from "react";
import { Categoria } from "../../types/categoria";
import { Subcategoria } from "../../types/subcategoria";
import SubcategoriasTable from "./tablasubcategoria";

interface ListaSubcategoriasProps {
  categorias: Categoria[]; // 👈 Arreglado: debe ser un array
  subcategorias: Subcategoria[];
  loading: boolean;
  error: string | null;
}

const ListaSubcategorias: React.FC<ListaSubcategoriasProps> = ({
  subcategorias,
  categorias,
  loading,
  error,
}) => {
  return (
    <div>
      <h3>📋 Lista de Subcategorías</h3>
      {loading && <p>Cargando subcategorías...</p>}
      {error && <p>Error: {error}</p>}
      {/* 👇 Asegúrate de pasar categorias también a la tabla */}
      <SubcategoriasTable
        subcategorias={subcategorias}
        categorias={categorias}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default ListaSubcategorias;
