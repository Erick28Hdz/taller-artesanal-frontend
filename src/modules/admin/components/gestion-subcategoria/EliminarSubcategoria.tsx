// EliminarSubcategoria.tsx
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
      // Aquí puedes conectar tu API para eliminarla de verdad
      console.log("Eliminando subcategoría:", subcategoriaSeleccionada);

      // Simulación de eliminación local
      setSubcategorias((prev) =>
        prev.filter((s) => s.id_subcategoria !== subcategoriaSeleccionada.id_subcategoria)
      );

      setSubcategoriaSeleccionada(null); // Limpiar selección
    } catch (err) {
      console.error("Error al eliminar subcategoría:", err);
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
