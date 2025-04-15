// UsuariosTable.tsx
import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import "../styles/tablauno-universal.css";
import { Usuario } from "../../admin/types/usuario";

interface UsuariosTableProps {
  usuarios: Usuario[];
  loading: boolean;
  error: string | null;
}

const UsuariosTable: React.FC<UsuariosTableProps> = ({ usuarios, loading, error }) => {
  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;


  const roles: { [key: string]: string } = {
    "1": "Admin",
    "2": "Cliente",
    "3": "Moderador",
    "4": "Soporte",
    "5": "Vendedor",
  };

  return (
    <div className="tabla-contenedor tienda-virtual">
      <Table bordered hover responsive id="tabla-universal">
        <thead>
          <tr className="titulos-tabla-universal">
            <th>#</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Género</th>
            <th>Fecha de Nacimiento</th>
            <th>Documento</th>
            <th>Teléfono</th>
            <th>País</th>
            <th>Provincia</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Código Postal</th>
            <th>Verificado</th>
            <th>Imagen de Perfil</th>
            <th>Fecha Creación</th>
            <th>Fecha Actualización</th>

          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.id_usuario}>
              <td>{index + 1}</td>
              <td>{usuario.id_usuario}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{roles[usuario.id_rol] || "N/A"}</td>
              <td>{usuario.email}</td>
              <td>{usuario.genero}</td>
              <td>{usuario.fecha_nacimiento ? new Date(usuario.fecha_nacimiento).toLocaleDateString() : "N/A"}</td>
              <td>{usuario.documento || "N/A"}</td>
              <td>{usuario.telefono || "N/A"}</td>
              <td>{usuario.pais || "N/A"}</td>
              <td>{usuario.provincia || "N/A"}</td>
              <td>{usuario.ciudad || "N/A"}</td>
              <td>{usuario.direccion || "N/A"}</td>
              <td>{usuario.codigo_postal || "N/A"}</td>
              <td>{usuario.token_verificacion ? "Sí" : "No"}</td>
              <td>
                {usuario.imagen_perfil ? (
                  <Image src={usuario.imagen_perfil} roundedCircle width={40} height={40} />
                ) : (
                  "Sin imagen"
                )}
              </td>
              <td>{new Date(usuario.fecha_creacion).toLocaleString()}</td>
              <td>{new Date(usuario.fecha_actualizacion).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsuariosTable;
