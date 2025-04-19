// VendedoresTable.tsx
import React from "react";
import Tabla from "../../../../components/table";
import { Vendedor } from "../../types/vendedor";

interface VendedoresTableProps {
  vendedores: Vendedor[];
  loading: boolean;
  error: string | null;
}

const VendedoresTable: React.FC<VendedoresTableProps> = ({
  vendedores,
  loading,
  error,
}) => {
  const columns = [
    { key: "id_usuario", label: "ID" },
    { key: "nombre_completo", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "estado", label: "Estado" },
    { key: "cantidad_pedidos", label: "Pedidos" },
    { key: "cantidad_devoluciones", label: "Devoluciones" },
    { key: "productos_activos", label: "Productos Activos" },
    { key: "total_ventas", label: "Total Ventas" },
    { key: "ingresos_totales", label: "Ingresos" },
    { key: "ultimo_inicio_sesion", label: "Último Inicio de Sesión" },
    { key: "ubicacion", label: "Ubicación" },
    { key: "fecha_creacion", label: "Fecha Registro" },
  ];

  const formattedData = vendedores.map((v) => ({
    id_usuario: v.id_usuario,
    nombre_completo: `${v.nombre} ${v.apellido}`,
    email: v.email,
    estado: v.estado || "N/A",
    cantidad_pedidos: v.cantidad_pedidos ?? 0,
    cantidad_devoluciones: v.cantidad_devoluciones ?? 0,
    productos_activos: v.productos_activos ?? 0,
    total_ventas: v.total_ventas ?? 0,
    ingresos_totales: `$${v.ingresos_totales?.toFixed(2) || "0.00"}`,
    ultimo_inicio_sesion: v.ultimo_inicio_sesion
      ? new Date(v.ultimo_inicio_sesion).toLocaleString()
      : "N/A",
    ubicacion: `${v.ciudad || "N/A"}, ${v.pais || "N/A"}`,
    fecha_creacion: new Date(v.fecha_creacion).toLocaleDateString(),
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

export default VendedoresTable;
