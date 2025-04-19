import React, { useState } from "react";
import { Producto } from "../../types/productos";
import ProductosTable from "./tablaproductos-universal";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EliminarProductoProps {
  productos: Producto[];
  setProductos: React.Dispatch<React.SetStateAction<Producto[]>>;
  loading: boolean;
  error: string | null;
}

const EliminarProducto: React.FC<EliminarProductoProps> = ({ productos, setProductos, loading, error }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const handleEliminar = async () => {
    if (!productoSeleccionado) {
      alert("Por favor selecciona un producto para eliminar.");
      return;
    }

    const confirmacion = window.confirm(`¿Estás seguro de eliminar el producto "${productoSeleccionado.nombre}" con código ${productoSeleccionado.codigo}?`);
    if (!confirmacion) return;

    try {
      // Aquí puedes hacer una petición DELETE o PATCH a tu backend
      console.log("Eliminando producto:", productoSeleccionado);

      // Simulación de eliminación (filtrando el producto del estado)
      setProductos((prev) =>
        prev.filter((p) => p.id_producto !== productoSeleccionado.id_producto)
      );

      setProductoSeleccionado(null); // Limpiar selección

    } catch (err) {
      console.error("Error al eliminar producto:", err);
    }
  };

  return (
    <div>
      <h3>🗑️ Eliminar Producto</h3>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
        <Input
          type="text"
          name="id_producto"
          placeholder="ID del Producto"
          value={productoSeleccionado?.id_producto?.toString() || ""}
          onChange={(e) => {
            const id = parseInt(e.target.value);
            const producto = productos.find((p) => p.id_producto === id) || null;
            setProductoSeleccionado(producto);
          }}
        />

        <Boton texto="Eliminar" tipo="button" onClick={handleEliminar} />
      </div>

      <ProductosTable
        productos={productoSeleccionado ? [productoSeleccionado] : productos}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default EliminarProducto;
