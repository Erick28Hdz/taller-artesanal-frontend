// EditarProducto.tsx
import React, { useState } from "react";
import { Producto } from "../../types/productos";
import ProductosTable from "./tablaproductos-universal";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EditarProductoProps {
  productos: Producto[];
  setProductos: React.Dispatch<React.SetStateAction<Producto[]>>;
  loading: boolean;
  error: string | null;
}

const EditarProducto: React.FC<EditarProductoProps> = ({ productos, setProductos, loading, error }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toISOString().split("T")[0]; // "YYYY-MM-DD"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (!productoSeleccionado) return;

    setProductoSeleccionado({
      ...productoSeleccionado,
      [name]: value,
    });
  };

  const handleGuardar = async () => {
    if (!productoSeleccionado) return;

    try {
      console.log("Producto actualizado:", productoSeleccionado);

      setProductos((prev) =>
        prev.map((p) =>
          p.id_producto === productoSeleccionado.id_producto ? productoSeleccionado : p
        )
      );

    } catch (err) {
      console.error("Error al actualizar producto:", err);
    }
  };

  const productoFormateado = productoSeleccionado
    ? {
        ...productoSeleccionado,
        fecha_creacion: formatearFecha(productoSeleccionado.fecha_creacion),
      }
    : null;

  return (
    <div>
      <h3>✏️ Editar Producto</h3>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}

      <ProductosTable productos={productos} loading={loading} error={error} />

      <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
        <Input
          type="text"
          name="id_producto"
          placeholder="ID de Producto"
          value={productoSeleccionado?.id_producto?.toString() || ""}
          onChange={(e) => {
            const id = parseInt(e.target.value);
            const producto = productos.find((p) => p.id_producto === id) || null;
            setProductoSeleccionado(producto);
          }}
        />
        <Boton texto="Guardar Cambios" tipo="button" onClick={handleGuardar} />
      </div>

      {productoSeleccionado && (
        <>
          <FormularioUniversal
            titulo="Editar Producto"
            campos={[
              { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre del producto" },
              { nombre: "descripcion", tipo: "text", etiqueta: "Descripción", placeholder: "Descripción" },
              { nombre: "precio", tipo: "number", etiqueta: "Precio", placeholder: "Precio" },
              { nombre: "stock", tipo: "number", etiqueta: "Stock", placeholder: "Cantidad en stock" },
              { nombre: "marca", tipo: "text", etiqueta: "Marca", placeholder: "Marca del producto" },
              { nombre: "categoria", tipo: "text", etiqueta: "Categoría", placeholder: "Categoría" },
              { nombre: "imagen", tipo: "text", etiqueta: "URL de Imagen", placeholder: "https://..." },
              { nombre: "fecha_creacion", tipo: "date", etiqueta: "Fecha de Creación" },
              { nombre: "fecha_actualizacion", tipo: "date", etiqueta: "Fecha de Actualización" }
            ]}
            valoresIniciales={productoFormateado}
            onChange={handleChange}
            onSubmit={handleGuardar}
          />
        </>
      )}
    </div>
  );
};

export default EditarProducto;
