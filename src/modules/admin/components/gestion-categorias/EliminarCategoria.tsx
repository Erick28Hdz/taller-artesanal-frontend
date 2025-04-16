// EliminarCategoria.tsx
import React, { useState } from "react";
import { Categoria } from "../../types/categoria";
import CategoriasTable from "../../../universal/components/tablacategorias-universal";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EliminarCategoriaProps {
  categorias: Categoria[];
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  loading: boolean;
  error: string | null;
}

const EliminarCategoria: React.FC<EliminarCategoriaProps> = ({ categorias, setCategorias, loading, error }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null);

  const handleEliminar = async () => {
    if (!categoriaSeleccionada) {
      alert("Por favor selecciona una categoría para eliminar.");
      return;
    }

    const confirmacion = window.confirm(`¿Estás seguro de eliminar la categoría "${categoriaSeleccionada.nombre}" con ID ${categoriaSeleccionada.id_categoria}?`);
    if (!confirmacion) return;

    try {
      // Aquí podrías hacer una petición DELETE o PATCH a tu backend
      console.log("Eliminando categoría:", categoriaSeleccionada);

      // Simulación de eliminación
      setCategorias((prev) =>
        prev.filter((c) => c.id_categoria !== categoriaSeleccionada.id_categoria)
      );

      setCategoriaSeleccionada(null); // Limpiar selección

    } catch (err) {
      console.error("Error al eliminar categoría:", err);
    }
  };

  return (
    <div>
      <h3>🗑️ Eliminar Categoría</h3>
      {loading && <p>Cargando categorías...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
        <Input
          type="text"
          name="id_categoria"
          placeholder="ID de la Categoría"
          value={categoriaSeleccionada?.id_categoria?.toString() || ""}
          onChange={(e) => {
            const id = parseInt(e.target.value);
            const categoria = categorias.find((c) => c.id_categoria === id) || null;
            setCategoriaSeleccionada(categoria);
          }}
        />

        <Boton texto="Eliminar" tipo="button" onClick={handleEliminar} />
      </div>

      <CategoriasTable
        categorias={categoriaSeleccionada ? [categoriaSeleccionada] : categorias}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default EliminarCategoria;
