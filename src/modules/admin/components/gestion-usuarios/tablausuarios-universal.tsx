// UsuariosTable.tsx
import React from "react";
import Tabla from "../../../../components/table";
import Image from "react-bootstrap/Image";
import { Usuario } from "../../types/usuario";

interface UsuariosTableProps {
  usuarios: Usuario[];
  loading: boolean;
  error: string | null;
}

const UsuariosTable: React.FC<UsuariosTableProps> = ({
  usuarios,
  loading,
  error,
}) => {
  const roles: { [key: string]: string } = {
    "1": "Admin",
    "2": "Cliente",
    "3": "Vendedor",
    "4": "Moderador",
    "5": "Soporte",
  };

  const columns = [
    { key: "id_usuario", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "apellido", label: "Apellido" },
    { key: "rol", label: "Rol" },
    { key: "email", label: "Email" },
    { key: "genero", label: "Género" },
    { key: "fecha_nacimiento", label: "Fecha de Nacimiento" },
    { key: "documento", label: "Documento" },
    { key: "telefono", label: "Teléfono" },
    { key: "pais", label: "País" },
    { key: "provincia", label: "Provincia" },
    { key: "ciudad", label: "Ciudad" },
    { key: "direccion", label: "Dirección" },
    { key: "codigo_postal", label: "Código Postal" },
    { key: "verificado", label: "Verificado" },
    { key: "imagen_perfil", label: "Imagen de Perfil" },
    { key: "fecha_creacion", label: "Fecha Creación" },
    { key: "fecha_actualizacion", label: "Fecha Actualización" },
  ];

  const formattedData = usuarios.map((usuario) => ({
    ...usuario,
    rol: roles[usuario.id_rol] || "N/A",
    fecha_nacimiento: new Date(usuario.fecha_nacimiento).toLocaleDateString(),
    documento: usuario.documento || "N/A",
    telefono: usuario.telefono || "N/A",
    pais: usuario.pais || "N/A",
    provincia: usuario.provincia || "N/A",
    ciudad: usuario.ciudad || "N/A",
    direccion: usuario.direccion || "N/A",
    codigo_postal: usuario.codigo_postal || "N/A",
    verificado: usuario.token_verificacion ? "Sí" : "No",
    imagen_perfil: usuario.imagen_perfil ? (
      <Image
        src={usuario.imagen_perfil}
        roundedCircle
        width={40}
        height={40}
      />
    ) : (
      "Sin imagen"
    ),
    fecha_creacion: new Date(usuario.fecha_creacion).toLocaleString(),
    fecha_actualizacion: new Date(usuario.fecha_actualizacion).toLocaleString(),
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

export default UsuariosTable;
