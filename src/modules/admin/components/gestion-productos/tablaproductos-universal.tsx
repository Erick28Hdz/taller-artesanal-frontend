import React from "react";
import { Producto } from "../../types/productos"; // Asegúrate de que este tipo esté actualizado
import Tabla from "../../../../components/table"; // Tabla es el componente que usas para mostrar los datos

interface ProductosTableProps {
  productos: Producto[]; // Aquí pasas los productos que recibes del backend
  loading: boolean; // Si los datos están cargando
  error: string | null; // Si hay algún error en la carga de datos
}

const ProductosTable: React.FC<ProductosTableProps> = ({ productos, loading, error }) => {
  const columns = [
    { key: "id_producto", label: "ID" },
    { key: "codigo", label: "Código" },
    { key: "categoria", label: "Categoría" },
    { key: "subcategoria", label: "Subcategoría" },
    { key: "nombre", label: "Nombre" },
    { key: "descripcion", label: "Descripción" },
    { key: "precio", label: "Precio" },
    { key: "descuento", label: "Descuento" }, 
    { key: "stock", label: "Stock" },
    { key: "referencia", label: "Referencia" },
    { key: "estado", label: "Estado" },
    { key: "popularidad", label: "Popularidad" },
    { key: "fecha_creacion", label: "Fecha de Creación" },
    { key: "tags", label: "Etiquetas" },
  ];

  const formattedData = productos.map((producto) => ({
    ...producto,
    precio: producto.precio !== undefined ? `$${Number(producto.precio).toFixed(2)}` : "N/A",
    stock: producto.stock ?? "N/A",
    popularidad: producto.popularidad ?? "N/A",
    fecha_creacion: producto.fecha_creacion ? new Date(producto.fecha_creacion).toLocaleDateString() : "N/A",
    tags:
      Array.isArray(producto.tags) && producto.tags.length > 0
        ? producto.tags.map((tag) => tag.trim()).join(", ")
        : "Sin etiquetas",
    categoria: producto.categoria?.nombre || "Sin categoría", // Mostrar el nombre de la categoría
    subcategoria: producto.subcategoria?.nombre || "Sin subcategoría", // Mostrar el nombre de la subcategoría
    descuento: producto.descuento !== undefined ? `${Number(producto.descuento).toFixed(2)}%` : "0.00%",
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
