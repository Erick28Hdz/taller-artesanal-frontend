import React, { useEffect, useState } from "react";
import { Pedido } from "../../types/pedidos";
import Tabs from "../../../../components/tabs";
import "../../styles/card.admin.css"

import ListaPedidos from "./ListaPedido";
import AgregarPedido from "./AgregarPedido";
import EditarPedido from "./EditarPedido";
import EliminarPedido from "./EliminarPedido";
import BuscarPedido from "./BusquedaPedido";

const GestionPedidos: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Pedido>>({});
  const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");

  const handleAgregarPedido = (nuevoPedido: Partial<Pedido>) => {
    setPedidos([...pedidos, nuevoPedido as Pedido]);
    setFormData({});
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/pedidos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los pedidos");
        return res.json();
      })
      .then((pedidosData) => {
        setPedidos(pedidosData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="gestion-pedidos">
      <h2>📦 Gestión de Pedidos</h2>
      <p>Administra los pedidos realizados desde este panel.</p>

      <Tabs
        opciones={["Lista", "Agregar", "Busqueda", "Editar", "Eliminar"]}
        valorInicial="Lista"
        onChange={(valor) => setTabSeleccionado(valor)}
      />

      {tabSeleccionado === "Lista" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <ListaPedidos pedidos={pedidos} loading={loading} error={error} />
            <br />
            <p>Total: {pedidos.length} pedidos</p>
          </div>
        </section>
      )}

      {tabSeleccionado === "Agregar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <AgregarPedido
              formData={formData}
              setFormData={setFormData}
              handleAgregarPedido={handleAgregarPedido}
              pedidos={pedidos}
              setPedidos={setPedidos}
              loading={loading}
              error={error}
            />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Busqueda" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <BuscarPedido pedidos={pedidos} setPedidos={setPedidos} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Editar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EditarPedido pedidos={pedidos} setPedidos={setPedidos} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Eliminar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EliminarPedido
              pedidos={pedidos}
              setPedidos={setPedidos}
              loading={loading}
              error={error}
            />
            <br />
          </div>
        </section>
      )}
    </div>
  );
};

export default GestionPedidos;
