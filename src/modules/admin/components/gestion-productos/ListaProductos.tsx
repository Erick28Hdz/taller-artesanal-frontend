import React from "react";
import { Producto } from "../../types/productos";
import ProductosTable from "../../../universal/components/tablaproductos-universal";

// Primero defines el tipo de producto
interface ListaProductosProps {
  productos: Producto[];
  loading: boolean;
  error: string | null;
}

// Ahora sí, defines el componente con esas props
const ListaProductos: React.FC<ListaProductosProps> = ({ productos, loading, error }) => {
  return (
    <div>
      <h3>📋 Lista de productos</h3>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}
      <ProductosTable productos={productos} loading={loading} error={error} />
    </div>
  );
};

export default ListaProductos;
