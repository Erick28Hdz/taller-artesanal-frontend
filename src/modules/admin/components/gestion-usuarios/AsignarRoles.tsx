import React from "react";
import RolesTable from "./tablaroles-universal";

interface AsignarRolesProps {
  roles: { id_rol: number; nombre: string; descripcion: string }[]; // Asegúrate de que los roles estén disponibles aquí
  loading: boolean;
  error: string | null;
}

const AsignarRoles: React.FC<AsignarRolesProps> = ({
  roles,
  loading,
  error,
}) => {

  return (
    <div>
      <h3>📋 Lista de Roles</h3>
      {/* Mostrar tabla de roles */}
      <RolesTable roles={roles} loading={loading} error={error} />
    </div>
  );
};

export default AsignarRoles;
