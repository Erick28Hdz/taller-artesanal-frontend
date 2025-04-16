import React, { useState } from "react";
import { Categoria } from "../../types/categoria";
import CategoriasTable from "../../../universal/components/tablacategorias-universal";
import FormularioUniversal from "../../../../components/formulario";

interface BuscarCategoriaProps {
  categorias: Categoria[];
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  loading: boolean;
  error: string | null;
}

const BuscarCategoria: React.FC<BuscarCategoriaProps> = ({
  categorias,
  setCategorias,
  loading,
  error,
}) => {
  const [valoresFormulario, setValoresFormulario] = useState({
    id_categoria: "",
    nombre: "",
    estado: "",
    categoria_padre_id: "",
    fecha_creacion: "",
    fecha_actualizacion: "",
  });

  const [categoriasFiltradas, setCategoriasFiltradas] = useState<Categoria[]>(categorias);

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

    const filtradas = categorias.filter((categoria) => {
      return Object.entries(nuevosValores).every(([clave, valor]) => {
        if (!valor) return true;

        const datoCategoria = (categoria as any)[clave];

        if (clave === "fecha_creacion" || clave === "fecha_actualizacion") {
          if (!datoCategoria) return false;

          const fecha = typeof datoCategoria === "string" ? new Date(datoCategoria) : datoCategoria;
          const fechaFormateada = fecha.toISOString().split("T")[0];

          return fechaFormateada === valor;
        }

        return normalizar(datoCategoria || "").includes(normalizar(valor));
      });
    });

    setCategoriasFiltradas(filtradas);
  };

  return (
    <div>
      <h3>🔍 Buscar Categoría</h3>
      {loading && <p>Cargando categorías...</p>}
      {error && <p>Error: {error}</p>}

      <FormularioUniversal
        titulo="Filtrar Categorías"
        campos={[
          { nombre: "id_categoria", tipo: "text", etiqueta: "ID de Categoría", placeholder: "ID" },
          { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre de la categoría" },
          {
            nombre: "estado",
            tipo: "select",
            etiqueta: "Estado",
            opciones: [
              { valor: "", etiqueta: "Selecciona un estado" },
              { valor: "activo", etiqueta: "Activo" },
              { valor: "inactivo", etiqueta: "Inactivo" },
            ],
          },
          { nombre: "categoria_padre_id", tipo: "number", etiqueta: "ID Categoría Padre", placeholder: "ID padre" },
          { nombre: "fecha_creacion", tipo: "date", etiqueta: "Fecha de Creación" },
          { nombre: "fecha_actualizacion", tipo: "date", etiqueta: "Fecha de Actualización" },
        ]}
        valoresIniciales={valoresFormulario}
        onChange={handleChange}
        onSubmit={(data) => {
          console.log("Datos enviados para búsqueda:", data);
        }}
      />

      <CategoriasTable categorias={categoriasFiltradas} loading={loading} error={error} />
    </div>
  );
};

export default BuscarCategoria;
