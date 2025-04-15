import React from "react";
import ProductosTable from "../../universal/components/tablaproductos-universal";

interface Props {
  filtroNombre: string;
  setFiltroNombre: (value: string) => void;
  categoriaSeleccionada: string;
  setCategoriaSeleccionada: (value: string) => void;
  estadoSeleccionado: string;
  setEstadoSeleccionado: (value: string) => void;
  precioMin: number;
  setPrecioMin: (value: number) => void;
  precioMax: number;
  setPrecioMax: (value: number) => void;
  filtroTag: string;
  setFiltroTag: (value: string) => void;
  setFiltroStock: (value: number) => void;
  setFiltroTipoProducto: (value: string) => void;
  setFiltroReferencia: (value: string) => void;
  setFiltroPopularidadMin: (value: number | null) => void;
  setFiltroPopularidadMax: (value: number | null) => void;
  setFiltroFechaDesde: (value: string | null) => void;
  setFiltroFechaHasta: (value: string | null) => void;
  setFiltroProveedor: (value: string) => void;
  setFiltroMarca: (value: string) => void;
  setFiltroDescuentoMin: (value: number | null) => void;
  setFiltroDescuentoMax: (value: number | null) => void;
  productosFiltrados: any[];
  loading: boolean;
  error: string | null;
}

const BuscarProducto: React.FC<Props> = ({
  filtroNombre,
  setFiltroNombre,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  estadoSeleccionado,
  setEstadoSeleccionado,
  precioMin,
  setPrecioMin,
  precioMax,
  setPrecioMax,
  filtroTag,
  setFiltroTag,
  setFiltroStock,
  setFiltroTipoProducto,
  setFiltroReferencia,
  setFiltroPopularidadMin,
  setFiltroPopularidadMax,
  setFiltroFechaDesde,
  setFiltroFechaHasta,
  setFiltroProveedor,
  setFiltroMarca,
  setFiltroDescuentoMin,
  setFiltroDescuentoMax,
  productosFiltrados,
  loading,
  error,
}) => {
  return (
    <div className="dashboard-cards">
      <div className="card">
        <h3>🔍 Filtrar y Buscar Productos</h3>
        <p>Última búsqueda realizada: {filtroNombre || "Ninguna"}</p>
        <input type="text" placeholder="Buscar por nombre..." value={filtroNombre} onChange={(e) => setFiltroNombre(e.target.value)} />
        <select onChange={(e) => setCategoriaSeleccionada(e.target.value)} value={categoriaSeleccionada}>
          <option value="">Filtrar por categoría</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Ropa">Ropa</option>
          <option value="Hogar">Hogar</option>
          <option value="Alimentos">Alimentos</option>
        </select>
        <select onChange={(e) => setEstadoSeleccionado(e.target.value)} value={estadoSeleccionado}>
          <option value="">Filtrar por estado</option>
          <option value="Disponible">Disponible</option>
          <option value="Agotado">Agotado</option>
          <option value="Descontinuado">Descontinuado</option>
        </select>
        <input type="number" placeholder="Precio mínimo" value={precioMin} onChange={(e) => setPrecioMin(Number(e.target.value))} />
        <input type="number" placeholder="Precio máximo" value={precioMax} onChange={(e) => setPrecioMax(Number(e.target.value))} />
        <input type="text" placeholder="Filtrar por tag..." value={filtroTag} onChange={(e) => setFiltroTag(e.target.value)} />
        <input type="number" placeholder="Stock mínimo" onChange={(e) => setFiltroStock(Number(e.target.value))} />
        <input type="text" placeholder="Tipo de producto" onChange={(e) => setFiltroTipoProducto(e.target.value)} />
        <input type="text" placeholder="Referencia" onChange={(e) => setFiltroReferencia(e.target.value)} />
        <input type="number" placeholder="Popularidad mínima" onChange={(e) => setFiltroPopularidadMin(e.target.value ? Number(e.target.value) : null)} />
        <input type="number" placeholder="Popularidad máxima" onChange={(e) => setFiltroPopularidadMax(e.target.value ? Number(e.target.value) : null)} />
        <input type="date" onChange={(e) => setFiltroFechaDesde(e.target.value || null)} />
        <input type="date" onChange={(e) => setFiltroFechaHasta(e.target.value || null)} />
        <input type="text" placeholder="Proveedor" onChange={(e) => setFiltroProveedor(e.target.value)} />
        <input type="text" placeholder="Marca" onChange={(e) => setFiltroMarca(e.target.value)} />
        <input type="number" placeholder="Descuento mínimo" onChange={(e) => setFiltroDescuentoMin(e.target.value ? Number(e.target.value) : null)} />
        <input type="number" placeholder="Descuento máximo" onChange={(e) => setFiltroDescuentoMax(e.target.value ? Number(e.target.value) : null)} />
      </div>
      <ProductosTable productos={productosFiltrados} loading={loading} error={error} />
    </div>
  );
};

export default BuscarProducto;
