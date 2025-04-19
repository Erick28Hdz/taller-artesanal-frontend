import React from "react";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import ProductosTable from "./tablaproductos-universal";
import { Producto } from "../../types/productos";
import { Categoria } from "../../types/categoria";
import { Subcategoria } from "../../types/subcategoria";

// Tipo del formulario de productos
export interface ProductoFormData {
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number | string;
  stock: number | string;
  referencia: "unico" | "fotocopia" | "por_mayor" | "personalizado";
  estado: string;
  id_categoria: number | string;
  id_subcategoria: number | string;
  proveedor: string;
  marca: string;
  descuento: number | string;
  popularidad: number | string;
  tags: string;
}

interface Props {
  formData: ProductoFormData;
  handleAgregarProducto: (nuevoProducto: any) => void;
  setFormData: React.Dispatch<React.SetStateAction<ProductoFormData>>;
  productos: Producto[];
  setProductos: React.Dispatch<React.SetStateAction<Producto[]>>;
  categorias: Categoria[];
  subcategorias: Subcategoria[];
  loading: boolean;
  error: string | null;
}

const AgregarProducto: React.FC<Props> = ({
  formData,
  setFormData,
  productos,
  setProductos,
  categorias,
  subcategorias,
  loading,
  error,
}) => {
  const valoresIniciales: ProductoFormData = {
    codigo: "",
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    referencia: "unico",
    estado: "activo",
    id_categoria: "",
    id_subcategoria: "",
    proveedor: "",
    marca: "",
    descuento: "",
    popularidad: "",
    tags: "",
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

  const handleAgregarProducto = async (data: ProductoFormData) => {
    if (!data.codigo || !data.nombre || !data.precio || !data.estado || !data.id_categoria || !data.id_subcategoria) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevoProducto = {
      codigo: data.codigo,
      nombre: data.nombre,
      descripcion: data.descripcion,
      precio: Number(data.precio),
      stock: Number(data.stock),
      referencia: data.referencia,
      estado: data.estado,
      proveedor: data.proveedor,
      marca: data.marca,
      descuento: Number(data.descuento),
      popularidad: Number(data.popularidad),
      tags: data.tags,
      id_categoria: Number(data.id_categoria),
      id_subcategoria: Number(data.id_subcategoria),
      created_at: normalizarFechaHora(),
      updated_at: normalizarFechaHora(),
    };

    try {
      const response = await fetch("http://localhost:3000/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (!response.ok) throw new Error("Error al registrar producto");

      const productoCreado: Producto = await response.json();

      setProductos((prev) => [...prev, productoCreado]);
      setFormData(valoresIniciales);
      alert("✅ Producto agregado correctamente");
    } catch (err) {
      console.error("❌ Error al agregar producto:", err);
      alert("Error al registrar el producto");
    }
  };

  return (
    <>
      <h3>📦 Agregar Producto</h3>
      <FormularioUniversal
        titulo="Agregar Producto"
        campos={[
          { nombre: "codigo", etiqueta: "Código", tipo: "text" },
          { nombre: "nombre", etiqueta: "Nombre del Producto", tipo: "text" },
          { nombre: "descripcion", etiqueta: "Descripción", tipo: "text" },
          { nombre: "precio", etiqueta: "Precio", tipo: "number" },
          { nombre: "stock", etiqueta: "Stock", tipo: "number" },
          {
            nombre: "referencia",
            etiqueta: "Referencia",
            tipo: "select",
            opciones: [
              { valor: "unico", etiqueta: "Único" },
              { valor: "fotocopia", etiqueta: "Fotocopia" },
              { valor: "por_mayor", etiqueta: "Por Mayor" },
              { valor: "personalizado", etiqueta: "Personalizado" },
            ],
          },
          {
            nombre: "estado",
            etiqueta: "Estado",
            tipo: "select",
            opciones: [
              { valor: "disponible", etiqueta: "Disponible" },
              { valor: "agotado", etiqueta: "Agotado" },
              { valor: "descontinuado", etiqueta: "Descontinuado" },
            ],
          },
          {
            nombre: "id_categoria",
            etiqueta: "Categoría",
            tipo: "select",
            opciones: [
              { valor: "", etiqueta: "Selecciona una categoría" },
              ...(Array.isArray(categorias) ? categorias : []).map((cat) => ({
                valor: cat.id_categoria,
                etiqueta: cat.nombre,
              })),
            ],
          },
          {
            nombre: "id_subcategoria",
            etiqueta: "Subcategoría",
            tipo: "select",
            opciones: [
              { valor: "", etiqueta: "Selecciona una subcategoría" },
              ...(Array.isArray(subcategorias) ? subcategorias : []).map((sub) => ({
                valor: sub.id_subcategoria,
                etiqueta: sub.nombre,
              })),
            ],
          },
          { nombre: "proveedor", etiqueta: "Proveedor", tipo: "text" },
          { nombre: "marca", etiqueta: "Marca", tipo: "text" },
          { nombre: "descuento", etiqueta: "Descuento (%)", tipo: "number" },
          { nombre: "popularidad", etiqueta: "Popularidad", tipo: "number" },
          { nombre: "tags", etiqueta: "Tags (separados por coma)", tipo: "text" },
        ]}
        valoresIniciales={formData}
        onChange={handleChange}
        onSubmit={() => handleAgregarProducto(formData)}
      />

      <div className="botones">
        <Boton texto="Guardar" tipo="button" onClick={() => handleAgregarProducto(formData)} />
        <Boton texto="Limpiar" tipo="button" onClick={() => setFormData(valoresIniciales)} />
      </div>
      <ProductosTable productos={productos} loading={loading} error={error} />
      <p>Productos registrados: {productos.length}</p>
    </>
  );
};

export default AgregarProducto;
