import React, { useEffect, useState } from "react";
import { Categoria } from "../../types/categoria";
import Tabs from "../../../../components/tabs";

import ListaCategorias from "./ListaCategoria";
import AgregarCategoria from "./AgregarCategoria";
import EditarCategoria from "./EditarCategoria";
import EliminarCategoria from "./EliminarCategoria";
import BuscarCategoria from "./BusquedaCategoria";

const GestionCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");

  const handleAgregarCategoria = (nuevaCategoria: any) => {
    setCategorias([...categorias, nuevaCategoria]);
    setFormData({});
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/categorias")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener las categorías");
        return res.json();
      })
      .then((categoriasData) => {
        setCategorias(categoriasData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="gestion-categorias">
      <h2>📚 Gestión de Categorías</h2>
      <p>Administra tus categorías desde este panel.</p>

      <Tabs
        opciones={["Lista", "Agregar", "Busqueda", "Editar", "Eliminar"]}
        valorInicial="Lista"
        onChange={(valor) => setTabSeleccionado(valor)}
      />

      {tabSeleccionado === "Lista" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <ListaCategorias categorias={categorias} loading={loading} error={error} />
            <br />
            <p>Total: {categorias.length} categorías</p>
          </div>
        </section>
      )}

      {tabSeleccionado === "Agregar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <AgregarCategoria
              formData={formData}
              setFormData={setFormData}
              handleAgregarCategoria={handleAgregarCategoria}
              categorias={categorias}
              setCategorias={setCategorias}
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
            <BuscarCategoria categorias={categorias} setCategorias={setCategorias} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Editar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EditarCategoria categorias={categorias} setCategorias={setCategorias} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Eliminar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EliminarCategoria categorias={categorias} setCategorias={setCategorias} loading={loading} error={error} />
            <br />
          </div>
        </section>
      )}
    </div>
  );
};

export default GestionCategorias;
