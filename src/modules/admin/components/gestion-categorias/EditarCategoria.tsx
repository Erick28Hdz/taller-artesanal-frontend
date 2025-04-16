// EditarCategoria.tsx
import React, { useState } from "react";
import { Categoria } from "../../types/categoria";
import CategoriasTable from "../../../universal/components/tablacategorias-universal";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EditarCategoriaProps {
  categorias: Categoria[];
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  loading: boolean;
  error: string | null;
}

const EditarCategoria: React.FC<EditarCategoriaProps> = ({ categorias, setCategorias, loading, error }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null);

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toISOString().split("T")[0]; // "YYYY-MM-DD"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (!categoriaSeleccionada) return;

    setCategoriaSeleccionada({
      ...categoriaSeleccionada,
      [name]: value,
    });
  };

  const handleGuardar = async () => {
    if (!categoriaSeleccionada) return;

    try {
      console.log("Categoría actualizada:", categoriaSeleccionada);

      setCategorias((prev) =>
        prev.map((c) =>
          c.id_categoria === categoriaSeleccionada.id_categoria ? categoriaSeleccionada : c
        )
      );

    } catch (err) {
      console.error("Error al actualizar categoría:", err);
    }
  };

  const categoriaFormateada = categoriaSeleccionada
    ? {
        ...categoriaSeleccionada,
        fecha_creacion: formatearFecha(categoriaSeleccionada.fecha_creacion),
        fecha_actualizacion: formatearFecha(categoriaSeleccionada.fecha_actualizacion),
      }
    : null;

  return (
    <div>
      <h3>✏️ Editar Categoría</h3>
      {loading && <p>Cargando categorías...</p>}
      {error && <p>Error: {error}</p>}

      <CategoriasTable categorias={categorias} loading={loading} error={error} />

      <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
        <Input
          type="text"
          name="id_categoria"
          placeholder="ID de Categoría"
          value={categoriaSeleccionada?.id_categoria?.toString() || ""}
          onChange={(e) => {
            const id = parseInt(e.target.value);
            const categoria = categorias.find((c) => c.id_categoria === id) || null;
            setCategoriaSeleccionada(categoria);
          }}
        />
        <Boton texto="Guardar Cambios" tipo="button" onClick={handleGuardar} />
      </div>

      {categoriaSeleccionada && (
        <FormularioUniversal
          titulo="Editar Categoría"
          campos={[
            { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre de la categoría" },
            { nombre: "descripcion", tipo: "text", etiqueta: "Descripción", placeholder: "Descripción" },
            { nombre: "fecha_creacion", tipo: "date", etiqueta: "Fecha de Creación" },
            { nombre: "fecha_actualizacion", tipo: "date", etiqueta: "Fecha de Actualización" }
          ]}
          valoresIniciales={categoriaFormateada}
          onChange={handleChange}
          onSubmit={handleGuardar}
        />
      )}
    </div>
  );
};

export default EditarCategoria;
