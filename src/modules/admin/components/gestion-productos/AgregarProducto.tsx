import React from "react";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import ProductosTable from "../../../universal/components/tablaproductos-universal";

interface Props {
  formData: any;
  setFormData: (data: any) => void;
  handleAgregarProducto: (data: any) => void;
  productos: any[];
  setProductos: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
  error: string | null;
}

const AgregarProducto: React.FC<Props> = ({
  formData,
  setFormData,
  handleAgregarProducto,
  productos,
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
      <h3>➕ Agregar Producto</h3>
      <p>Productos registrados este mes: {productos.length}</p>

      <FormularioUniversal
        titulo="Agregar Nuevo Producto"
        campos={[
          { nombre: "codigo", etiqueta: "Código", tipo: "text" },
          { nombre: "nombre", etiqueta: "Nombre del Producto", tipo: "text" },
          { nombre: "descripcion", etiqueta: "Descripción", tipo: "text" },
          { nombre: "precio", etiqueta: "Precio", tipo: "number" },
          { nombre: "stock", etiqueta: "Stock", tipo: "number" },
          { nombre: "tipo_producto", etiqueta: "Tipo de Producto", tipo: "text" },
          { nombre: "referencia", etiqueta: "Referencia", tipo: "text" },
          {
            nombre: "estado",
            etiqueta: "Estado",
            tipo: "select",
            opciones: [
              { valor: "Disponible", etiqueta: "Disponible" },
              { valor: "Agotado", etiqueta: "Agotado" },
              { valor: "Descontinuado", etiqueta: "Descontinuado" }
            ]
          },
          { nombre: "popularidad", etiqueta: "Popularidad", tipo: "number" },
          { nombre: "fecha_creacion", etiqueta: "Fecha de Creación", tipo: "date" },
          {
            nombre: "categoria",
            etiqueta: "Categoría",
            tipo: "select",
            opciones: [
              { valor: "", etiqueta: "Selecciona una categoría" },
              { valor: "Electrónica", etiqueta: "Electrónica" },
              { valor: "Ropa", etiqueta: "Ropa" },
              { valor: "Hogar", etiqueta: "Hogar" },
              { valor: "Alimentos", etiqueta: "Alimentos" }
            ]
          },
          { nombre: "proveedor", etiqueta: "Proveedor", tipo: "text" },
          { nombre: "marca", etiqueta: "Marca", tipo: "text" },
          { nombre: "descuento", etiqueta: "Descuento (%)", tipo: "number" },
          { nombre: "tags", etiqueta: "Tags (separados por comas)", tipo: "text" }
        ]}
        valoresIniciales={formData}
        onChange={handleChange}
        onSubmit={() => handleAgregarProducto(formData)}
      />

      <div className="botones">
        <Boton texto="Guardar" tipo="button" onClick={() => handleAgregarProducto(formData)} />
        <Boton texto="Limpiar" tipo="button" onClick={() => setFormData({})} />
      </div>

      <ProductosTable productos={productos} loading={loading} error={error} />
    </>
  );
};

export default AgregarProducto;
