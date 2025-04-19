import React from "react";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import SubcategoriasTable from "./tablasubcategoria";
import { Subcategoria } from "../../types/subcategoria";
import { Categoria } from "../../types/categoria";

// Este es el nuevo tipo limpio para el formulario
export interface SubcategoriaFormData {
  nombre: string;
  estado: string;
  id_categoria: number | string;
}

interface Props {
  formData: SubcategoriaFormData;
  setFormData: React.Dispatch<React.SetStateAction<SubcategoriaFormData>>;
  handleAgregarSubcategoria: (nuevaSubcategoria: SubcategoriaFormData) => void;
  categorias: Categoria[];
  subcategorias: Subcategoria[];
  setSubcategorias: React.Dispatch<React.SetStateAction<Subcategoria[]>>;
  loading: boolean;
  error: string | null;
}

const AgregarSubcategoria: React.FC<Props> = ({
  formData,
  setFormData,
  subcategorias,
  setSubcategorias,
  categorias,
  loading,
  error,
}) => {
  const valoresIniciales: SubcategoriaFormData = {
    nombre: "",
    estado: "activo",
    id_categoria: "",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const normalizarFechaHora = (fechaStr?: string): string => {
    const fecha = fechaStr ? new Date(fechaStr) : new Date();
    return fecha.toISOString();
  };

  const handleAgregarSubcategoria = async (data: SubcategoriaFormData) => {
    if (!data.nombre || !data.estado || !data.id_categoria) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevaSubcategoria = {
      nombre: data.nombre,
      estado: data.estado,
      categoria: {
        id_categoria: Number(data.id_categoria),
      },
      
      created_at: normalizarFechaHora(),
      updated_at: normalizarFechaHora(),
    };

    try {
      const response = await fetch("http://localhost:3000/api/subcategorias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaSubcategoria),
      });

      if (!response.ok) throw new Error("Error al registrar subcategoría");

      const subcategoriaCreada: Subcategoria = await response.json();

      setSubcategorias((prev) => [...prev, subcategoriaCreada]);
      setFormData(valoresIniciales);
      alert("✅ Subcategoría agregada correctamente");
    } catch (err) {
      console.error("❌ Error al agregar subcategoría:", err);
      alert("Error al registrar la subcategoría");
    }
  };

  return (
    <>
      <h3>➕ Agregar Subcategoría</h3>
      <FormularioUniversal
        titulo=""
        campos={[
          { nombre: "nombre", etiqueta: "Nombre de Subcategoría", tipo: "text" },
          {
            nombre: "estado",
            etiqueta: "Estado",
            tipo: "select",
            opciones: [
              { valor: "activo", etiqueta: "Activo" },
              { valor: "inactivo", etiqueta: "Inactivo" },
            ],
          },
          {
            nombre: "id_categoria",
            etiqueta: "Categoría",
            tipo: "select",
            opciones: [
              { valor: "", etiqueta: "Selecciona una categoría" },
              ...categorias.map((cat) => ({
                valor: cat.id_categoria,
                etiqueta: cat.nombre,
              })),
            ],
          },
        ]}
        valoresIniciales={formData}
        onChange={handleChange}
        onSubmit={() => handleAgregarSubcategoria(formData)}
      />

      <div className="botones">
        <Boton texto="Guardar" tipo="button" onClick={() => handleAgregarSubcategoria(formData)} />
        <Boton texto="Limpiar" tipo="button" onClick={() => setFormData(valoresIniciales)} />
      </div>

      <SubcategoriasTable subcategorias={subcategorias} categorias={categorias} loading={loading} error={error} />
      <br />
      <p>Subcategorías registradas: {subcategorias.length}</p>
    </>
  );
};

export default AgregarSubcategoria;
