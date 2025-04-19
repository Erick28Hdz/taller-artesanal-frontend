import React, { useState } from "react";
import { Pedido } from "../../types/pedidos";
import PedidosTable from "./tablapedidos-universal";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EliminarPedidoProps {
    pedidos: Pedido[];
    setPedidos: React.Dispatch<React.SetStateAction<Pedido[]>>;
    loading: boolean;
    error: string | null;
}

const EliminarPedido: React.FC<EliminarPedidoProps> = ({ pedidos, setPedidos, loading, error }) => {
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState<Pedido | null>(null);

    const handleEliminar = async () => {
        if (!pedidoSeleccionado) {
            alert("Por favor selecciona un pedido para eliminar.");
            return;
        }

        const confirmacion = window.confirm(`¿Estás seguro de eliminar el pedido con ID ${pedidoSeleccionado.id_pedido}?`);
        if (!confirmacion) return;

        try {
            // Aquí puedes hacer una petición DELETE o PATCH a tu backend
            console.log("Eliminando pedido:", pedidoSeleccionado);

            // Simulación de eliminación (filtrando el pedido del estado)
            setPedidos((prev) =>
                prev.filter((p) => p.id_pedido !== pedidoSeleccionado.id_pedido)
            );

            setPedidoSeleccionado(null); // Limpiar selección

        } catch (err) {
            console.error("Error al eliminar pedido:", err);
        }
    };

    return (
        <div>
            <h3>🗑️ Eliminar Pedido</h3>
            {loading && <p>Cargando pedidos...</p>}
            {error && <p>Error: {error}</p>}

            <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
                <Input
                    type="text"
                    name="id_pedido"
                    placeholder="ID de Pedido"
                    value={pedidoSeleccionado?.id_pedido?.toString() || ""}
                    onChange={(e) => {
                        const id = parseInt(e.target.value);
                        const pedido = pedidos.find((p) => p.id_pedido === id) || null;
                        setPedidoSeleccionado(pedido);
                    }}
                />

                <Boton texto="Eliminar" tipo="button" onClick={handleEliminar} />
            </div>

            <PedidosTable
                pedidos={pedidoSeleccionado ? [pedidoSeleccionado] : pedidos}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default EliminarPedido;
