// EditarCategoria.tsx
import React, { useState } from "react";
import { Categoria } from "../../types/categoria";
import CategoriasTable from "./tablacategorias-universal";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EditarCategoriaProps {
  categorias: Categoria[];
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  loading: boolean;
  error: string | null;
}

const EditarCategoria: React.FC<EditarCategoriaProps> = ({
  categorias,
  setCategorias,
  loading,
  error
}) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null);

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toISOString().split("T")[0];
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
      const response = await fetch(`http://localhost:3000/api/categorias/${categoriaSeleccionada.id_categoria}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoriaSeleccionada),
      });
  
      if (!response.ok) {
        throw new Error("Error al actualizar la categoría");
      }
  
      const categoriaActualizada = await response.json();
  
      // Actualiza el estado local
      setCategorias((prev) =>
        prev.map((c) =>
          c.id_categoria === categoriaActualizada.id_categoria ? categoriaActualizada : c
        )
      );
  
      alert("✅ Categoría actualizada correctamente");
    } catch (err) {
      console.error("❌ Error al actualizar categoría:", err);
      alert("❌ No se pudo actualizar la categoría");
    }
  };

  const categoriaFormateada = categoriaSeleccionada
    ? {
        ...categoriaSeleccionada,
        created_at: formatearFecha(categoriaSeleccionada.created_at),
        updated_at: formatearFecha(categoriaSeleccionada.updated_at),
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
          type="number"
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
          titulo=""
          campos={[
            { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre" },
            {
              nombre: "estado",
              etiqueta: "Estado",
              tipo: "select",
              opciones: [
                { valor: "activo", etiqueta: "Activo" },
                { valor: "inactivo", etiqueta: "Inactivo" },
              ],
            },
            { nombre: "created_at", tipo: "date", etiqueta: "Fecha de Creación" },
            { nombre: "updated_at", tipo: "date", etiqueta: "Fecha de Actualización" },
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
