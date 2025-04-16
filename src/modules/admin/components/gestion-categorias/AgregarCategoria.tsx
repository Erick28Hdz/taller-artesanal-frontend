import React from "react";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import CategoriasTable from "../../../universal/components/tablacategorias-universal";
import { Categoria } from "../../types/categoria";

interface Props {
  formData: Partial<Categoria>;
  setFormData: (data: Partial<Categoria>) => void;
  handleAgregarCategoria: (data: Partial<Categoria>) => void;
  categorias: Categoria[];
  setCategorias: React.Dispatch<React.SetStateAction<Categoria[]>>;
  loading: boolean;
  error: string | null;
}

const AgregarCategoria: React.FC<Props> = ({
  formData,
  setFormData,
  handleAgregarCategoria,
  categorias,
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

  return (
    <>
      <h3>➕ Agregar Categoría</h3>
      <p>Categorías registradas: {categorias.length}</p>

      <FormularioUniversal
        titulo="Agregar Nueva Categoría"
        campos={[
          { nombre: "nombre", etiqueta: "Nombre de la Categoría", tipo: "text" },
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
            nombre: "categoria_padre_id",
            etiqueta: "ID de Categoría Padre (opcional)",
            tipo: "number",
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
    </>
  );
};

export default AgregarCategoria;
