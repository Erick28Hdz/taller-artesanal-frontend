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
  const [subcategorias, setSubcategorias] = useState<any[]>([]); // Cambia el tipo según tu estructura de datos
  const [loading, setLoading] = useState<boolean>(true);
  const [errorCategorias, setErrorCategorias] = useState<string | null>(null);
  const [errorSubcategorias, setErrorSubcategorias] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");

  const handleAgregarCategoria = (nuevaCategoria: any) => {
    setCategorias([...categorias, nuevaCategoria]);
    setFormData({}); // Limpiar el formulario después de agregar la categoría
  };

  useEffect(() => {
    setLoading(true); // Activamos el loading antes de la solicitud
    // Utilizamos Promise.all para hacer ambas peticiones en paralelo
    Promise.all([
      fetch("http://localhost:3000/api/categorias").then((res) => {
        if (!res.ok) throw new Error("Error al obtener las categorías");
        return res.json();
      }),
      fetch("http://localhost:3000/api/subcategorias").then((res) => {
        if (!res.ok) throw new Error("Error al obtener las subcategorías");
        return res.json();
      }),
    ])
      .then(([categoriasData, subcategoriasData]) => {
        setCategorias(categoriasData); // Set de las categorías
        setSubcategorias(subcategoriasData); // Set de las subcategorías
        setLoading(false); // Desactivamos el loading después de obtener los datos
      })
      .catch((err) => {
        if (err.message.includes("categorias")) {
          setErrorCategorias(err.message);
        } else if (err.message.includes("subcategorias")) {
          setErrorSubcategorias(err.message);
        }
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
            <ListaCategorias
              categorias={categorias}
              subcategorias={subcategorias}
              loading={loading}
              error={errorCategorias || errorSubcategorias} // Error combinado si ambas fallan
            />
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
              subcategorias={subcategorias}  // Asegúrate de pasar las subcategorías aquí
              setCategorias={setCategorias}
              loading={loading}
              error={errorCategorias || errorSubcategorias}
            />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Busqueda" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <BuscarCategoria categorias={categorias} setCategorias={setCategorias} loading={loading} error={errorCategorias || errorSubcategorias} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Editar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EditarCategoria categorias={categorias} setCategorias={setCategorias} loading={loading} error={errorCategorias || errorSubcategorias} />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Eliminar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EliminarCategoria categorias={categorias} setCategorias={setCategorias} loading={loading} error={errorCategorias || errorSubcategorias} />
            <br />
          </div>
        </section>
      )}
    </div>
  );
};

export default GestionCategorias;
