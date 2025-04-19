import React, { useState } from "react";
import { Producto } from "../../types/productos";
import { Categoria } from "../../types/categoria";
import { Subcategoria } from "../../types/subcategoria";
import ProductosTable from "./tablaproductos-universal";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EditarProductoProps {
  productos: Producto[];
  categorias: Categoria[];
  subcategorias: Subcategoria[];
  setProductos: React.Dispatch<React.SetStateAction<Producto[]>>;
  loading: boolean;
  error: string | null;
}

const EditarProducto: React.FC<EditarProductoProps> = ({
  productos,
  categorias,
  subcategorias,
  setProductos,
  loading,
  error,
}) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto & { id_categoria?: number; id_subcategoria?: number } | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (!productoSeleccionado) return;

    if (name === "categoria") {
      const id_categoria = parseInt(value);
      const categoriaSeleccionada = categorias.find((c) => c.id_categoria === id_categoria);

      if (categoriaSeleccionada) {
        setProductoSeleccionado({
          ...productoSeleccionado,
          categoria: categoriaSeleccionada,
        });
      } else {
        console.log("Categoría no encontrada");
      }

    } else if (name === "subcategoria") {
      const id_subcategoria = parseInt(value);
      const subcategoriaSeleccionada = subcategorias.find((s) => s.id_subcategoria === id_subcategoria);

      if (subcategoriaSeleccionada) {
        setProductoSeleccionado({
          ...productoSeleccionado,
          subcategoria: subcategoriaSeleccionada,
        });
      } else {
        console.log("Subcategoría no encontrada");
      }

    } else {
      setProductoSeleccionado({
        ...productoSeleccionado,
        [name]: value,
      });
    }
  };

  const handleGuardar = async () => {
    if (!productoSeleccionado) return;

    try {
      const { categoria, subcategoria, ...restoProducto } = productoSeleccionado;

      const productoLimpio = {
        ...restoProducto,
        categoria: {
          id_categoria: categoria.id_categoria,
        },
        subcategoria: {
          id_subcategoria: subcategoria.id_subcategoria,
        },
      };

      const response = await fetch(`http://localhost:3000/api/productos/${productoLimpio.id_producto}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productoLimpio),
      });

      if (!response.ok) throw new Error("Error al actualizar el producto");

      const productoActualizado = await response.json();
      setProductos((prev) =>
        prev.map((p) =>
          p.id_producto === productoActualizado.id_producto ? productoActualizado : p
        )
      );

      alert("Producto actualizado con éxito");
    } catch (err) {
      console.error("Error al actualizar producto:", err);
    }
  };

  const productoFormateado = productoSeleccionado
    ? {
        ...productoSeleccionado,
        categoria:  productoSeleccionado.categoria?.id_categoria ?? "",
        subcategoria: productoSeleccionado.subcategoria?.id_subcategoria ?? "",
      }
    : null;

  return (
    <div>
      <h3>🛠️ Editar Producto</h3>
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
        <FormularioUniversal
          titulo="Editar Producto"
          campos={[
            { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre del producto" },
            { nombre: "descripcion", tipo: "text", etiqueta: "Descripción", placeholder: "Descripción del producto" },
            { nombre: "precio", tipo: "number", etiqueta: "Precio", placeholder: "0.00" },
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
              nombre: "categoria",
              tipo: "select",
              etiqueta: "Categoría",
              opciones: categorias.map((categoria) => ({
                valor: categoria.id_categoria,
                etiqueta: categoria.nombre,
              })),
            },
            {
              nombre: "subcategoria",
              tipo: "select",
              etiqueta: "Subcategoría",
              opciones: subcategorias.map((sub) => ({
                valor: sub.id_subcategoria,
                etiqueta: sub.nombre,
              })),
            },
          ]}
          valoresIniciales={productoFormateado}
          onChange={handleChange}
          onSubmit={handleGuardar}
        />
      )}
    </div>
  );
};

export default EditarProducto;
