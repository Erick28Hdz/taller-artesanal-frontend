import React from "react";
import { Pedido } from "../../types/pedidos";
import PedidosTable from "./tablapedidos-universal";

interface ListaPedidosProps {
  pedidos: Pedido[];
  loading: boolean;
  error: string | null;
}

const ListaPedidos: React.FC<ListaPedidosProps> = ({ pedidos, loading, error }) => {
  return (
    <div>
      <h3>📋 Lista de Pedidos</h3>
      {loading && <p>Cargando pedidos...</p>}
      {error && <p>Error: {error}</p>}
      <PedidosTable pedidos={pedidos} loading={loading} error={error} />
    </div>
  );
};

export default ListaPedidos;
