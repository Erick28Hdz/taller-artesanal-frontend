import React, { useEffect, useState } from "react";
import { Subcategoria } from "../../types/subcategoria";
import Tabs from "../../../../components/tabs";

import ListaSubcategorias from "./ListaSubcategoria";
import AgregarSubcategoria from "./AgregarSubcategoria";
import EditarSubcategoria from "./EditarSubcategoria";
import EliminarSubcategoria from "./EliminarSubcategoria";
import BuscarSubcategoria from "./BuscarSubcategoria";

const GestionSubcategorias: React.FC = () => {
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]); // Cambiar a un tipo de dato adecuado para tu estructura
  const [loading, setLoading] = useState<boolean>(true);
  const [errorSubcategorias, setErrorSubcategorias] = useState<string | null>(null);
  const [errorCategorias, setErrorCategorias] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");

  const handleAgregarSubcategoria = (nuevaSubcategoria: any) => {
    setSubcategorias([...subcategorias, nuevaSubcategoria]);
    setFormData({}); // Limpiar el formulario después de agregar la subcategoría
  };

  useEffect(() => {
    setLoading(true); // Activamos el loading antes de la solicitud
    // Utilizamos Promise.all para hacer ambas peticiones en paralelo
    Promise.all([
      fetch("http://localhost:3000/api/subcategorias").then((res) => {
        if (!res.ok) throw new Error("Error al obtener las subcategorías");
        return res.json();
      }),
      fetch("http://localhost:3000/api/categorias").then((res) => {
        if (!res.ok) throw new Error("Error al obtener las categorías");
        return res.json();
      }),
    ])
      .then(([subcategoriasData, categoriasData]) => {
        setSubcategorias(subcategoriasData); // Set de las subcategorías
        setCategorias(categoriasData); // Set de las categorías
        setLoading(false); // Desactivamos el loading después de obtener los datos
      })
      .catch((err) => {
        if (err.message.includes("subcategorias")) {
          setErrorSubcategorias(err.message);
        } else if (err.message.includes("categorias")) {
          setErrorCategorias(err.message);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div className="gestion-subcategorias">
      <h2>📁 Gestión de Subcategorías</h2>
      <p>Administra tus subcategorías desde este panel.</p>

      <Tabs
        opciones={["Lista", "Agregar", "Busqueda", "Editar", "Eliminar"]}
        valorInicial="Lista"
        onChange={(valor) => setTabSeleccionado(valor)}
      />

      {tabSeleccionado === "Lista" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <ListaSubcategorias
              subcategorias={subcategorias}
              categorias={categorias}
              loading={loading}
              error={errorSubcategorias || errorCategorias} // Error combinado si ambas fallan
            />
          </div>
        </section>
      )}

      {tabSeleccionado === "Agregar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <AgregarSubcategoria
              formData={formData}
              setFormData={setFormData}
              categorias={categorias}
              subcategorias={subcategorias}  // Asegúrate de pasar las subcategorías aquí
              setSubcategorias={setSubcategorias}
              loading={loading}
              error={errorSubcategorias || errorCategorias}
              handleAgregarSubcategoria={handleAgregarSubcategoria}
            />
            <br />
          </div>
        </section>
      )}


      {tabSeleccionado === "Busqueda" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <BuscarSubcategoria
              subcategorias={subcategorias}
              categorias={categorias}
              setSubcategorias={setSubcategorias}
              loading={loading}
              error={errorSubcategorias || errorCategorias}
            />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Editar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EditarSubcategoria
              subcategorias={subcategorias}
              setSubcategorias={setSubcategorias}
              categorias={categorias}
              loading={loading}
              error={errorSubcategorias || errorCategorias}
            />
            <br />
          </div>
        </section>
      )}

      {tabSeleccionado === "Eliminar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EliminarSubcategoria
              subcategorias={subcategorias}
              setSubcategorias={setSubcategorias}
              loading={loading}
              error={errorSubcategorias || errorCategorias}
            />
            <br />
          </div>
        </section>
      )}
    </div>
  );
};

export default GestionSubcategorias;
