import React from "react";
import Tabla from "../../../../components/table";
import { Subcategoria } from "../../types/subcategoria";
import { Categoria } from "../../types/categoria";

interface SubcategoriasTableProps {
  subcategorias: Subcategoria[];
  categorias: Categoria[]; // Ya no es necesaria si no se usa, pero puedes dejarla si se necesita en otro lado
  loading: boolean;
  error: string | null;
}

const SubcategoriasTable: React.FC<SubcategoriasTableProps> = ({
  subcategorias,
  categorias,
  loading,
  error,
}) => {
  const columns = [
    { key: "id_subcategoria", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "estado", label: "Estado" },
    { key: "categoria", label: "Categoría" },
    { key: "created_at", label: "Fecha de Creación" },
    { key: "updated_at", label: "Última Actualización" },
  ];

  const formattedData = subcategorias.map((subcategoria) => ({
    ...subcategoria,
    categoria: subcategoria.categoria?.nombre || "Sin categoría",
    created_at: new Date(subcategoria.created_at).toLocaleDateString(),
    updated_at: new Date(subcategoria.updated_at).toLocaleDateString(),
  }));

  return (
    <Tabla
      columns={columns}
      data={formattedData}
      loading={loading}
      error={error}
    />
  );
};

export default SubcategoriasTable;
