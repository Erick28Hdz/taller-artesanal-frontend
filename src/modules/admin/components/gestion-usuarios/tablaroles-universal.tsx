// RolesTable.tsx
import React from "react";
import Tabla from "../../../../components/table"; // Asegúrate de que la ruta sea correcta

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

const descripcionesRol: { [key: number]: string } = {
  1: "Acceso total. Administra usuarios, roles y configuración general.",
  2: "Puede comprar productos, ver historial de pedidos.",
  3: "Publica productos, gestiona su inventario y ve sus ventas.",
  4: "Modera comentarios, publica anuncios y banners (no productos).",
  5: "Brinda soporte a los usuarios a través de tickets.",
};

const RolesTable: React.FC<RolesTableProps> = ({ roles, loading, error }) => {
  const columns = [
    { key: "id_rol", label: "ID" },
    { key: "nombre", label: "Rol" },
    { key: "descripcion", label: "Descripción" },
  ];

  const formattedData = roles.map((rol) => ({
    ...rol,
    descripcion: descripcionesRol[rol.id_rol] || "Sin descripción",
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

export default RolesTable;
