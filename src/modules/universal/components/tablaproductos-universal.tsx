// ProductosTable.tsx
import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "../styles/tablauno-universal.css"

interface Producto {
  id_producto: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  tipo_producto: string;
  referencia: string;
  estado: string;
  popularidad: number;
  fecha_creacion: string;
  categoria: string;
  proveedor: string;
  marca: string;
  descuento: number;
  tags: string[];
}

interface ProductosTableProps {
  productos: Producto[]; // Recibe los productos como prop
  loading: boolean; // Recibe el estado de carga
  error: string | null; // Recibe el estado de error
}

const ProductosTable: React.FC<ProductosTableProps> = ({ productos, loading, error }) => {
  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="tabla-contenedor tienda-virtual">
      <Table bordered hover responsive id="tabla-universal">
        <thead>
          <tr className="titulos-tabla-universal">
            <th>#</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Tipo</th>
            <th>Referencia</th>
            <th>Estado</th>
            <th>Popularidad</th>
            <th>Fecha de Creación</th>
            <th>Categoría</th>
            <th>Proveedor</th>
            <th>Marca</th>
            <th>Descuento</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={producto.id_producto}>
            <td>{index + 1}</td>
            <td>{producto.codigo || "N/A"}</td>
            <td>{producto.nombre || "N/A"}</td>
            <td>{producto.descripcion || "N/A"}</td>
            <td>{producto.precio !== undefined ? `$${Number(producto.precio).toFixed(2)}` : "N/A"}</td>
            <td>{producto.stock !== undefined ? producto.stock : "N/A"}</td>
            <td>{producto.tipo_producto || "N/A"}</td>
            <td>{producto.referencia || "N/A"}</td>
            <td>{producto.estado || "N/A"}</td>
            <td>{producto.popularidad !== undefined ? producto.popularidad : "N/A"}</td>
            <td>{producto.fecha_creacion ? new Date(producto.fecha_creacion).toLocaleDateString() : "N/A"}</td>
            <td>{producto.categoria || "N/A"}</td>
            <td>{producto.proveedor || "N/A"}</td>
            <td>{producto.marca || "N/A"}</td>
            <td>{producto.descuento !== undefined ? `${producto.descuento}%` : "0%"}</td>
            <td>
              {Array.isArray(producto.tags) && producto.tags.length > 0
                ? producto.tags.join(", ")
                : "Sin etiquetas"}
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>

  );
};

export default ProductosTable;
