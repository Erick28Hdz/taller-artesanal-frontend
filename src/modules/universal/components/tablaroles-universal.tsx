import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "../styles/tablauno-universal.css";

interface Rol {
  id_rol: number;
  nombre: string;
  descripcion: string;
}

interface RolesTableProps {
  roles: Rol[];
  loading: boolean;
  error: string | null;
}

const RolesTable: React.FC<RolesTableProps> = ({ roles, loading, error }) => {
  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="tabla-contenedor tienda-virtual">
      <Table bordered hover responsive id="tabla-universal">
        <thead>
          <tr className="titulos-tabla-universal">
            <th>#</th>
            <th>Rol</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((rol, index) => (
            <tr key={rol.id_rol}>
              <td>{index + 1}</td>
              <td>{rol.nombre}</td>
              <td>{rol.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RolesTable;
