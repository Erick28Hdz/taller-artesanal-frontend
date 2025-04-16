import React, { useEffect, useState } from "react";
import { Producto } from "../../types/productos";
import Tabs from "../../../../components/tabs";

import ListaProductos from "./ListaProductos";
import AgregarProducto from "./AgregarProducto";
import EditarProducto from "./EditarProducto";
import EliminarProducto from "./EliminarProducto";
import BuscarProducto from "./BusquedaProducto";

const GestionProductos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");

  const handleAgregarProducto = (nuevoProducto: any) => {
    setProductos([...productos, nuevoProducto]);
    setFormData({});
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los productos");
        return res.json();
      })
      .then((productosData) => {
        setProductos(productosData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="gestion-productos">
      <h2>🛒 Gestión de Productos</h2>
      <p>Administra tus productos desde este panel.</p>

      <Tabs
        opciones={["Lista", "Agregar", "Busqueda", "Editar", "Eliminar"]}
        valorInicial="Lista"
        onChange={(valor) => setTabSeleccionado(valor)}
      />

      {tabSeleccionado === "Lista" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <ListaProductos productos={productos} loading={loading} error={error} />
            <br />
            <p>Total: {productos.length} productos</p>
          </div>
        </section>
      )}

      {tabSeleccionado === "Agregar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <AgregarProducto
              formData={formData}
              setFormData={setFormData}
              handleAgregarProducto={handleAgregarProducto}
              productos={productos}
              setProductos={setProductos}
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
            <BuscarProducto productos={productos} setProductos={setProductos} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Editar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EditarProducto productos={productos} setProductos={setProductos} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Eliminar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EliminarProducto productos={productos} setProductos={setProductos} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}
    </div>
  );
};

export default GestionProductos;
