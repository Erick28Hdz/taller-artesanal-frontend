import React from "react";
import Tabla from "../../../../components/table"; // Asegúrate que esta ruta sea correcta
import { Pedido } from "../../types/pedidos";

interface PedidosTableProps {
  pedidos: Pedido[];
  loading: boolean;
  error: string | null;
}

const PedidosTable: React.FC<PedidosTableProps> = ({ pedidos, loading, error }) => {
  const columns = [
    { key: "usuario", label: "Usuario" },
    { key: "estado", label: "Estado" },
    { key: "metodo_pago", label: "Método de Pago" },
    { key: "total", label: "Total" },
    { key: "fecha_pedido", label: "Fecha de Pedido" },
    { key: "updated_at", label: "Última Actualización" },
  ];

  const formattedData = pedidos.map((pedido) => ({
    ...pedido,
    usuario: pedido.usuario?.nombre ?? "No asignado",
    total: Number(pedido.total).toFixed(2),
    fecha_pedido: new Date(pedido.fecha_pedido).toLocaleDateString(),
    updated_at: new Date(pedido.updated_at).toLocaleDateString(),
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

export default PedidosTable;
