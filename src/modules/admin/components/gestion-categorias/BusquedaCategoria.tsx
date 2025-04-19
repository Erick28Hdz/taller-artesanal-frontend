import React, { useState } from "react";
import { Categoria } from "../../types/categoria";
import CategoriasTable from "./tablacategorias-universal";
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

        const dato = (categoria as any)[clave];

        // Lógica para fechas
        if (clave === "fecha_creacion" || clave === "fecha_actualizacion") {
          if (!dato || !valor) return false;

          const normalizarFecha = (fechaStr: string) => {
            if (fechaStr.includes("/")) {
              const [dia, mes, anio] = fechaStr.split("/");
              return `${anio}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
            }

            if (fechaStr.includes("-")) {
              const partes = fechaStr.split("-");
              if (partes[0].length === 4) return fechaStr; // formato YYYY-MM-DD
            }

            try {
              const fechaISO = new Date(fechaStr).toISOString().split("T")[0];
              return fechaISO;
            } catch {
              return "";
            }
          };

          const fechaCategoriaNormalizada = normalizarFecha(String(dato));
          const valorFiltro = valor; // tipo YYYY-MM-DD

          return fechaCategoriaNormalizada === valorFiltro;
        }

        // Comparación normal para los demás campos
        return normalizar(dato || "").includes(normalizar(valor));
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
        titulo=""
        campos={[
          { nombre: "id_categoria", tipo: "text", etiqueta: "ID Categoría", placeholder: "ID de categoría" },
          { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre de la categoría" },
          {
            nombre: "estado",
            tipo: "select",
            etiqueta: "Estado",
            opciones: [
              { valor: "", etiqueta: "Todos" },
              { valor: "activo", etiqueta: "Activo" },
              { valor: "inactivo", etiqueta: "Inactivo" },
            ],
          },
          { nombre: "fecha_creacion", tipo: "date", etiqueta: "Fecha de Creación" },
          { nombre: "fecha_actualizacion", tipo: "date", etiqueta: "Fecha de Actualización" },
        ]}
        valoresIniciales={valoresFormulario}
        onChange={handleChange}
        onSubmit={(data) => {
          console.log("Datos enviados:", data);
        }}
      />

      <CategoriasTable categorias={categoriasFiltradas} loading={loading} error={error} />
    </div>
  );
};

export default BuscarCategoria;
