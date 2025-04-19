import React from "react";
import Tabla from "../../../../components/table";
import { Categoria } from "../../types/categoria";

interface CategoriasTableProps {
  categorias: Categoria[];
  loading: boolean;
  error: string | null;
}

const CategoriasTable: React.FC<CategoriasTableProps> = ({ categorias, loading, error }) => {
  const columns = [
    { key: "id_categoria", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "estado", label: "Estado" },
    { key: "subcategorias_count", label: "Subcategorías" }, // Nueva columna de cantidad
    { key: "subcategorias", label: "Subcategorías Detalle" }, // Columna adicional para mostrar los nombres de las subcategorías
    { key: "created_at", label: "Fecha de Creación" },
    { key: "updated_at", label: "Última Actualización" },
  ];

  const formattedData = categorias.map((cat) => ({
    ...cat,
    // Calcula la cantidad de subcategorías
    subcategorias_count: Array.isArray(cat.subcategorias) ? cat.subcategorias.length : 0,
    // Muestra los nombres de las subcategorías, separados por coma
    subcategorias: Array.isArray(cat.subcategorias)
      ? cat.subcategorias.map((sub) => sub.nombre).join(", ") // Mostrar solo el nombre de cada subcategoría
      : "No tiene subcategorías",
    created_at: new Date(cat.created_at).toLocaleString(),
    updated_at: new Date(cat.updated_at).toLocaleString(),
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

export default CategoriasTable;
