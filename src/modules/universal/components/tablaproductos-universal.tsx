// ProductosTable.tsx
import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

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
    <Table striped bordered hover responsive>
      <thead>
        <tr>
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
            <td>{producto.codigo}</td>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>${Number(producto.precio).toFixed(2)}</td>
            <td>{producto.stock}</td> 
            <td>{producto.tipo_producto}</td>
            <td>{producto.referencia}</td>
            <td>{producto.estado}</td>
            <td>{producto.popularidad}</td>
            <td>{new Date(producto.fecha_creacion).toLocaleDateString()}</td>
            <td>{producto.categoria}</td>
            <td>{producto.proveedor}</td>
            <td>{producto.marca}</td>
            <td>{producto.descuento}%</td>
            <td>{Array.isArray(producto.tags) ? producto.tags.join(", ") : producto.tags}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductosTable;
