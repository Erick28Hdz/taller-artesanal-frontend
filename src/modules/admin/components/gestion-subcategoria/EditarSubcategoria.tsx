import React, { useState } from "react";
import { Subcategoria } from "../../types/subcategoria";
import { Categoria } from "../../types/categoria";
import SubcategoriasTable from "./tablasubcategoria"; // Asumo que la tabla de subcategorías se llama SubcategoriasTable
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EditarSubcategoriaProps {
  subcategorias: Subcategoria[];
  categorias: Categoria[]; // Añadimos las categorías aquí
  setSubcategorias: React.Dispatch<React.SetStateAction<Subcategoria[]>>;
  loading: boolean;
  error: string | null;
}

const EditarSubcategoria: React.FC<EditarSubcategoriaProps> = ({
  subcategorias,
  categorias,
  setSubcategorias,
  loading,
  error,
}) => {
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState<Subcategoria & { id_categoria?: number } | null>(null);
  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toISOString().split("T")[0]; // "YYYY-MM-DD"
  };

  // Maneja el cambio de los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (!subcategoriaSeleccionada) return;
  
    if (name === "categoria") {
      const id_categoria = parseInt(value);
      const categoriaSeleccionada = categorias.find((c) => c.id_categoria === id_categoria);
  
      if (categoriaSeleccionada) {  // Aseguramos que no sea null
        setSubcategoriaSeleccionada({
          ...subcategoriaSeleccionada,
          categoria: categoriaSeleccionada,  // Asignamos solo si la categoría existe
        });
      } else {
        // Si no encontramos la categoría, podrías manejarlo con un mensaje de error o algo similar.
        console.log("Categoría no encontrada");
      }
    } else {
      setSubcategoriaSeleccionada({
        ...subcategoriaSeleccionada,
        [name]: value,
      });
    }
  };
  

  // Maneja el guardar los cambios
  const handleGuardar = async () => {
    if (!subcategoriaSeleccionada) return;
  
    try {
      // Extraemos el nombre de la categoría y dejamos solo el id_categoria
      const { categoria, ...restoSubcategoria } = subcategoriaSeleccionada;
  
      const subcategoriaLimpia = {
        ...restoSubcategoria,
        categoria: {
          id_categoria: categoria.id_categoria, // Nos aseguramos de enviar solo el id_categoria
        },
      };
  
      const response = await fetch(`http://localhost:3000/api/subcategorias/${subcategoriaLimpia.id_subcategoria}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subcategoriaLimpia),
      });
  
      if (!response.ok) throw new Error("Error al actualizar la subcategoría");
  
      const subcategoriaActualizada = await response.json();
      setSubcategorias((prev) =>
        prev.map((s) =>
          s.id_subcategoria === subcategoriaActualizada.id_subcategoria ? subcategoriaActualizada : s
        )
      );
  
      alert("Subcategoría actualizada con éxito");
    } catch (err) {
      console.error("Error al actualizar subcategoría:", err);
    }
  };
  
  const subcategoriaFormateada = subcategoriaSeleccionada
    ? {
        ...subcategoriaSeleccionada,
        created_at: formatearFecha(subcategoriaSeleccionada.created_at),
        updated_at: formatearFecha(subcategoriaSeleccionada.updated_at),
        categoria: subcategoriaSeleccionada.categoria.id_categoria,
      }
    : null;

  return (
    <div>
      <h3>✏️ Editar Subcategoría</h3>
      {loading && <p>Cargando subcategorías...</p>}
      {error && <p>Error: {error}</p>}

      <SubcategoriasTable subcategorias={subcategorias} categorias={categorias} loading={loading} error={error} />
      <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
        <Input
          type="text"
          name="id_subcategoria"
          placeholder="ID de Subcategoría"
          value={subcategoriaSeleccionada?.id_subcategoria?.toString() || ""}
          onChange={(e) => {
            const id = parseInt(e.target.value);
            const subcategoria = subcategorias.find((s) => s.id_subcategoria === id) || null;
            setSubcategoriaSeleccionada(subcategoria);
          }}
        />
        <Boton texto="Guardar Cambios" tipo="button" onClick={handleGuardar} />
      </div>
      {subcategoriaSeleccionada && (
        <FormularioUniversal
        titulo="Editar Subcategoría"
        campos={[
          { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre" },
          {
            nombre: "estado",
            tipo: "select",
            etiqueta: "Estado",
            opciones: [
              { valor: "activo", etiqueta: "Activo" },
              { valor: "inactivo", etiqueta: "Inactivo" },
            ],
          },
          {
            nombre: "categoria",  // Ahora trabajamos con la categoría completa
            tipo: "select",
            etiqueta: "Categoría",
            opciones: categorias.map((categoria) => ({
              valor: categoria.id_categoria,
              etiqueta: categoria.nombre,
            })),
          },
        ]}
        valoresIniciales={subcategoriaFormateada}
        onChange={handleChange}
        onSubmit={handleGuardar}
      />
      )}
    </div>
  );
};

export default EditarSubcategoria;
