import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "../styles/tablauno-universal.css";
import { Categoria } from "../../admin/types/categoria"; // Asegúrate que la ruta sea correcta

interface CategoriasTableProps {
  categorias: Categoria[];
  loading: boolean;
  error: string | null;
}

const CategoriasTable: React.FC<CategoriasTableProps> = ({ categorias, loading, error }) => {
  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="tabla-contenedor tienda-virtual">
      <Table bordered hover responsive id="tabla-universal">
        <thead>
          <tr className="titulos-tabla-universal">
            <th>#</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Categoría Padre</th>
            <th>Fecha de Creación</th>
            <th>Última Actualización</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria, index) => (
            <tr key={categoria.id_categoria}>
              <td>{index + 1}</td>
              <td>{categoria.nombre}</td>
              <td>{categoria.estado}</td>
              <td>{categoria.categoria_padre_id ?? "N/A"}</td>
              <td>{new Date(categoria.created_at).toLocaleDateString()}</td>
              <td>{new Date(categoria.updated_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoriasTable;
