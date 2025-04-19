import React from "react";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import PedidosTable from "./tablapedidos-universal";
import { Pedido } from "../../types/pedidos";

interface Props {
  formData: Partial<Pedido>;
  setFormData: (data: Partial<Pedido>) => void;
  handleAgregarPedido: (data: Partial<Pedido>) => void;
  pedidos: Pedido[];
  setPedidos: React.Dispatch<React.SetStateAction<Pedido[]>>;
  loading: boolean;
  error: string | null;
}

const AgregarPedido: React.FC<Props> = ({
  formData,
  setFormData,
  handleAgregarPedido,
  pedidos,
  loading,
  error,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Convertimos los campos numéricos a number
    const newValue =
      name === "total" || name === "usuario_id" ? Number(value) : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <>
      <h3>➕ Crear Pedido</h3>
      <p>Pedidos registrados: {pedidos.length}</p>

      <FormularioUniversal
        titulo="Registrar Nuevo Pedido"
        campos={[
          {
            nombre: "usuario_id",
            etiqueta: "ID del Usuario",
            tipo: "number",
          },
          {
            nombre: "estado",
            etiqueta: "Estado del Pedido",
            tipo: "select",
            opciones: [
              { valor: "pendiente", etiqueta: "Pendiente" },
              { valor: "procesando", etiqueta: "Procesando" },
              { valor: "completado", etiqueta: "Completado" },
              { valor: "cancelado", etiqueta: "Cancelado" },
            ],
          },
          {
            nombre: "metodo_pago",
            etiqueta: "Método de Pago",
            tipo: "text",
          },
          {
            nombre: "total",
            etiqueta: "Total del Pedido",
            tipo: "number",
          },
        ]}
        valoresIniciales={formData}
        onChange={handleChange}
        onSubmit={() => handleAgregarPedido(formData)}
      />

      <div className="botones">
        <Boton texto="Guardar" tipo="button" onClick={() => handleAgregarPedido(formData)} />
        <Boton texto="Limpiar" tipo="button" onClick={() => setFormData({})} />
      </div>

      <PedidosTable pedidos={pedidos} loading={loading} error={error} />
    </>
  );
};

export default AgregarPedido;
