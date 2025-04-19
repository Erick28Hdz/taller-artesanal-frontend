import React, { useState } from "react";
import { Subcategoria } from "../../types/subcategoria";
import SubcategoriasTable from "./tablasubcategoria";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EliminarSubcategoriaProps {
  subcategorias: Subcategoria[];
  setSubcategorias: React.Dispatch<React.SetStateAction<Subcategoria[]>>;
  loading: boolean;
  error: string | null;
}

const EliminarSubcategoria: React.FC<EliminarSubcategoriaProps> = ({
  subcategorias,
  setSubcategorias,
  loading,
  error,
}) => {
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState<Subcategoria | null>(null);

  const handleEliminar = async () => {
    if (!subcategoriaSeleccionada) {
      alert("Por favor selecciona una subcategoría para eliminar.");
      return;
    }

    const confirmacion = window.confirm(
      `¿Estás seguro de eliminar la subcategoría "${subcategoriaSeleccionada.nombre}"?`
    );
    if (!confirmacion) return;

    try {
      // Realizamos la llamada DELETE al servidor
      const response = await fetch(
        `http://localhost:3000/api/subcategorias/${subcategoriaSeleccionada.id_subcategoria}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar la subcategoría");
      }

      // Elimina la subcategoría localmente si todo salió bien
      setSubcategorias((prev) =>
        prev.filter((s) => s.id_subcategoria !== subcategoriaSeleccionada.id_subcategoria)
      );

      setSubcategoriaSeleccionada(null); // Limpiar selección

      alert("✅ Subcategoría eliminada correctamente.");
    } catch (err) {
      console.error("Error al eliminar subcategoría:", err);
      alert("❌ No se pudo eliminar la subcategoría.");
    }
  };

  return (
    <div>
      <h3>🗑️ Eliminar Subcategoría</h3>

      {loading && <p>Cargando subcategorías...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
        <Input
          type="number"
          name="id_subcategoria"
          placeholder="ID de Subcategoría"
          value={subcategoriaSeleccionada?.id_subcategoria?.toString() || ""}
          onChange={(e) => {
            const inputValue = e.target.value;
            const id = parseInt(inputValue);

            if (!isNaN(id)) {
              const encontrada = subcategorias.find((s) => s.id_subcategoria === id) || null;
              setSubcategoriaSeleccionada(encontrada);
            } else {
              setSubcategoriaSeleccionada(null);
            }
          }}
        />

        <Boton texto="Eliminar" tipo="button" onClick={handleEliminar} />
      </div>

      {/* Muestra todas o solo la seleccionada */}
      <SubcategoriasTable
        subcategorias={subcategoriaSeleccionada ? [subcategoriaSeleccionada] : subcategorias}
        categorias={[]}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default EliminarSubcategoria;
