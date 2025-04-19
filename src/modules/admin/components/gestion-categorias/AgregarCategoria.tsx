import React from "react";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import CategoriasTable from "./tablacategorias-universal";
import { Categoria } from "../../types/categoria";

interface Props {
  formData: Partial<Categoria>;
  setFormData: (data: Partial<Categoria>) => void;
  handleAgregarCategoria: (data: Partial<Categoria>) => void; // ya no se usa, pero se mantiene por compatibilidad
  categorias: Categoria[];
  subcategorias: any[]; // Puedes definir este tipo mejor más adelante
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  loading: boolean;
  error: string | null;
}

const AgregarCategoria: React.FC<Props> = ({
  formData,
  setFormData,
  categorias,
  subcategorias,
  setCategorias,
  loading,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Simular guardar categoría con ID y fechas
  const handleAgregarCategoria = async (data: Partial<Categoria>) => {
    try {
      const response = await fetch("http://localhost:3000/api/categorias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Error al agregar la categoría");
      }
  
      const nuevaCategoria = await response.json();
  
      // Actualiza el estado con la nueva categoría
      setCategorias((prev) => [...prev, nuevaCategoria]);
      setFormData({});
      alert("✅ Categoría agregada con éxito");
    } catch (error) {
      console.error(error);
      alert("❌ No se pudo agregar la categoría");
    }
  };
  return (
    <>
      <h3>➕ Agregar Categoría</h3>
      <FormularioUniversal
        titulo=""
        campos={[
          { nombre: "nombre", etiqueta: "Nombre categoría", tipo: "text" },
          {
            nombre: "estado",
            etiqueta: "Estado",
            tipo: "select",
            opciones: [
              { valor: "activo", etiqueta: "Activo" },
              { valor: "inactivo", etiqueta: "Inactivo" },
            ],
          },
        ]}
        valoresIniciales={formData}
        onChange={handleChange}
        onSubmit={() => handleAgregarCategoria(formData)}
      />

      <div className="botones">
        <Boton texto="Guardar" tipo="button" onClick={() => handleAgregarCategoria(formData)} />
        <Boton texto="Limpiar" tipo="button" onClick={() => setFormData({})} />
      </div>

      <CategoriasTable categorias={categorias} loading={loading} error={error} />
      <br />
      <p>Categorías registradas: {categorias.length}</p>
    </>
  );
};

export default AgregarCategoria;
