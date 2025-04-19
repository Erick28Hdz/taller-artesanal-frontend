import React, { useState } from "react";
import { Pedido } from "../../types/pedidos";
import PedidosTable from "./tablapedidos-universal";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EditarPedidoProps {
  pedidos: Pedido[];
  setPedidos: React.Dispatch<React.SetStateAction<Pedido[]>>;
  loading: boolean;
  error: string | null;
}

const EditarPedido: React.FC<EditarPedidoProps> = ({ pedidos, setPedidos, loading, error }) => {
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState<Pedido | null>(null);

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toISOString().split("T")[0];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (!pedidoSeleccionado) return;

    setPedidoSeleccionado({
      ...pedidoSeleccionado,
      [name]: value,
    });
  };

  const handleGuardar = async () => {
    if (!pedidoSeleccionado) return;

    try {
      console.log("Pedido actualizado:", pedidoSeleccionado);

      setPedidos((prev) =>
        prev.map((p) =>
          p.id_pedido === pedidoSeleccionado.id_pedido ? pedidoSeleccionado : p
        )
      );
    } catch (err) {
      console.error("Error al actualizar pedido:", err);
    }
  };

  const pedidoFormateado = pedidoSeleccionado
    ? {
        ...pedidoSeleccionado,
        fecha_pedido: formatearFecha(pedidoSeleccionado.fecha_pedido),
      }
    : null;

  return (
    <div>
      <h3>✏️ Editar Pedido</h3>
      {loading && <p>Cargando pedidos...</p>}
      {error && <p>Error: {error}</p>}

      <PedidosTable pedidos={pedidos} loading={loading} error={error} />

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
        <Boton texto="Guardar Cambios" tipo="button" onClick={handleGuardar} />
      </div>

      {pedidoSeleccionado && (
        <FormularioUniversal
          titulo="Editar Pedido"
          campos={[
            { nombre: "cliente", tipo: "text", etiqueta: "Cliente", placeholder: "Nombre del cliente" },
            { nombre: "producto", tipo: "text", etiqueta: "Producto", placeholder: "Producto solicitado" },
            { nombre: "cantidad", tipo: "number", etiqueta: "Cantidad" },
            { nombre: "estado", tipo: "text", etiqueta: "Estado del Pedido", placeholder: "Estado actual" },
            { nombre: "fecha_pedido", tipo: "date", etiqueta: "Fecha del Pedido" },
            { nombre: "fecha_entrega", tipo: "date", etiqueta: "Fecha de Entrega" }
          ]}
          valoresIniciales={pedidoFormateado}
          onChange={handleChange}
          onSubmit={handleGuardar}
        />
      )}
    </div>
  );
};

export default EditarPedido;
