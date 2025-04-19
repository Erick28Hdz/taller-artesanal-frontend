import React, { useState } from "react";
import { Pedido } from "../../types/pedidos";
import PedidosTable from "./tablapedidos-universal";
import FormularioUniversal from "../../../../components/formulario";

interface BuscarPedidoProps {
  pedidos: Pedido[];
  setPedidos: React.Dispatch<React.SetStateAction<Pedido[]>>;
  loading: boolean;
  error: string | null;
}

const BuscarPedido: React.FC<BuscarPedidoProps> = ({
  pedidos,
  setPedidos,
  loading,
  error,
}) => {
  const [valoresFormulario, setValoresFormulario] = useState({
    id_pedido: "",
    cliente: "",
    estado: "",
    fecha_pedido: "",
    fecha_entrega: "",
    total: "",
  });

  const [pedidosFiltrados, setPedidosFiltrados] = useState<Pedido[]>(pedidos);

  function normalizar(texto: any): string {
    return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    const nuevosValores = {
      ...valoresFormulario,
      [name]: value,
    };

    setValoresFormulario(nuevosValores);

    const filtrados = pedidos.filter((pedido) => {
      return Object.entries(nuevosValores).every(([clave, valor]) => {
        if (!valor) return true;

        const dato = (pedido as any)[clave];

        if (clave === "fecha_pedido" || clave === "fecha_entrega") {
          if (!dato) return false;

          const fecha = typeof dato === "string" ? new Date(dato) : dato;
          const fechaFormateada = fecha.toISOString().split("T")[0];

          return fechaFormateada === valor;
        }

        return normalizar(dato || "").includes(normalizar(valor));
      });
    });

    setPedidosFiltrados(filtrados);
  };

  return (
    <div>
      <h3>🔍 Buscar Pedido</h3>
      {loading && <p>Cargando pedidos...</p>}
      {error && <p>Error: {error}</p>}

      <FormularioUniversal
        titulo="Filtrar Pedidos"
        campos={[
          { nombre: "id_pedido", tipo: "text", etiqueta: "ID del Pedido", placeholder: "ID" },
          { nombre: "cliente", tipo: "text", etiqueta: "Cliente", placeholder: "Nombre del cliente" },
          {
            nombre: "estado",
            tipo: "select",
            etiqueta: "Estado",
            opciones: [
              { valor: "", etiqueta: "Selecciona un estado" },
              { valor: "pendiente", etiqueta: "Pendiente" },
              { valor: "procesado", etiqueta: "Procesado" },
              { valor: "entregado", etiqueta: "Entregado" },
              { valor: "cancelado", etiqueta: "Cancelado" },
            ],
          },
          { nombre: "fecha_pedido", tipo: "date", etiqueta: "Fecha del Pedido" },
          { nombre: "fecha_entrega", tipo: "date", etiqueta: "Fecha de Entrega" },
          { nombre: "total", tipo: "number", etiqueta: "Total ($)", placeholder: "Total del pedido" },
        ]}
        valoresIniciales={valoresFormulario}
        onChange={handleChange}
        onSubmit={(data) => {
          console.log("Datos enviados para búsqueda:", data);
        }}
      />

      <PedidosTable pedidos={pedidosFiltrados} loading={loading} error={error} />
    </div>
  );
};

export default BuscarPedido;
