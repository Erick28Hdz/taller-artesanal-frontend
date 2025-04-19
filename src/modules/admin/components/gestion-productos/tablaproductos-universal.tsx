// ProductosTable.tsx
import React from "react";
import Tabla from "../../../../components/table"; // Asegúrate de que esta ruta sea correcta
import { Producto } from "../../types/productos";

interface ProductosTableProps {
  productos: Producto[];
  loading: boolean;
  error: string | null;
}

const ProductosTable: React.FC<ProductosTableProps> = ({ productos, loading, error }) => {
  const columns = [
    { key: "id_producto", label: "ID" },
    { key: "codigo", label: "Código" },
    { key: "nombre", label: "Nombre" },
    { key: "descripcion", label: "Descripción" },
    { key: "precio", label: "Precio" },
    { key: "stock", label: "Stock" },
    { key: "tipo_producto", label: "Tipo" },
    { key: "referencia", label: "Referencia" },
    { key: "estado", label: "Estado" },
    { key: "popularidad", label: "Popularidad" },
    { key: "fecha_creacion", label: "Fecha de Creación" },
    { key: "categoria", label: "Categoría" },
    { key: "proveedor", label: "Proveedor" },
    { key: "marca", label: "Marca" },
    { key: "descuento", label: "Descuento" },
    { key: "tags", label: "Tags" },
  ];

  const formattedData = productos.map((producto) => ({
    ...producto,
    precio: producto.precio !== undefined ? `$${Number(producto.precio).toFixed(2)}` : "N/A",
    stock: producto.stock ?? "N/A",
    popularidad: producto.popularidad ?? "N/A",
    fecha_creacion: producto.fecha_creacion ? new Date(producto.fecha_creacion).toLocaleDateString() : "N/A",
    descuento: producto.descuento !== undefined ? `${producto.descuento}%` : "0%",
    tags: Array.isArray(producto.tags) && producto.tags.length > 0 ? producto.tags.join(", ") : "Sin etiquetas",
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

export default ProductosTable;
