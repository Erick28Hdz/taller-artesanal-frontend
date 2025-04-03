import React, { useEffect, useState, useMemo } from "react";
import "../styles/panel-principal.css";
import ProductosTable from "../../universal/components/tablaproductos-universal";
import FormularioUniversal from "../../../components/formulario";

interface GestionProductosProps {
    selectedProducto: string;
}
interface Producto {
    id_producto: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    tipo_producto: string;
    referencia: string;
    estado: string;
    popularidad: number;
    fecha_creacion: string;
    categoria: string;
    proveedor: string;
    marca: string;
    descuento: number;
    tags: string[];
}

const GestionProductos: React.FC<GestionProductosProps> = ({ selectedProducto }) => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // Manejar filtración del producto
    const [filtroNombre, setFiltroNombre] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
    const [precioMin, setPrecioMin] = useState(0);
    const [precioMax, setPrecioMax] = useState(1000);
    const [filtroTag, setFiltroTag] = useState("");
    const [filtroStock, setFiltroStock] = useState<number | null>(null);
    const [filtroTipoProducto, setFiltroTipoProducto] = useState("");
    const [filtroReferencia, setFiltroReferencia] = useState("");
    const [filtroPopularidadMin, setFiltroPopularidadMin] = useState<number | null>(null);
    const [filtroPopularidadMax, setFiltroPopularidadMax] = useState<number | null>(null);
    const [filtroFechaDesde, setFiltroFechaDesde] = useState<string | null>(null);
    const [filtroFechaHasta, setFiltroFechaHasta] = useState<string | null>(null);
    const [filtroProveedor, setFiltroProveedor] = useState("");
    const [filtroMarca, setFiltroMarca] = useState("");
    const [filtroDescuentoMin, setFiltroDescuentoMin] = useState<number | null>(null);
    const [filtroDescuentoMax, setFiltroDescuentoMax] = useState<number | null>(null);

    // Manejar adición del producto
    const handleAgregarProducto = (nuevoProducto: any) => {
        setProductos([...productos, nuevoProducto]); // Agrega el nuevo producto a la lista
        console.log("Producto agregado:", nuevoProducto); // Ver en la consola
    };

    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

    // Manejar edición del producto
    const handleEditarProducto = (productoEditado: any) => {
        if (productoEditado.tags) {
            productoEditado.tags = productoEditado.tags.split(",").map((tag: string) => tag.trim());
        }

        // Buscar y actualizar el producto en el estado
        setProductos(productos.map(prod =>
            prod.id_producto === productoEditado.id_producto ? productoEditado : prod
        ));

        console.log("Producto actualizado:", productoEditado);
    };

    // Manejar eliminación del producto
    const handleEliminarProducto = () => {
        if (!productoSeleccionado) return;

        const nuevaLista = productos.filter(prod => prod.id_producto !== productoSeleccionado.id_producto);
        setProductos(nuevaLista);
        setProductoSeleccionado(null);

        console.log("Producto eliminado:", productoSeleccionado);
    };



    // Aplicar filtros a los productos
    const productosFiltrados = useMemo(() => {
        return productos.filter(prod => {
            console.log("Producto en evaluación:", prod); // Verificar qué productos están siendo evaluados

            const coincideNombre = filtroNombre.trim() !== ""
                ? prod.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
                : true;

            const coincideCategoria = categoriaSeleccionada
                ? (prod.categoria?.toLowerCase() || "").includes(categoriaSeleccionada.toLowerCase())
                : true;

            const coincideEstado = estadoSeleccionado
                ? prod.estado.toLowerCase() === estadoSeleccionado.toLowerCase()
                : true;

            const coincidePrecio =
                (precioMin === 0 || prod.precio >= precioMin) &&
                (precioMax === 0 || prod.precio <= precioMax);

            const coincideTag = filtroTag.trim() !== ""
                ? (Array.isArray(prod.tags) ? prod.tags : typeof prod.tags === "string" ? [prod.tags] : [])
                    .some(tag => tag.toLowerCase().includes(filtroTag.toLowerCase()))
                : true;

            const coincideStock = filtroStock !== null
                ? prod.stock >= filtroStock
                : true;

            const coincideTipoProducto = filtroTipoProducto.trim() !== ""
                ? prod.tipo_producto.toLowerCase().includes(filtroTipoProducto.toLowerCase())
                : true;

            const coincideReferencia = filtroReferencia.trim() !== ""
                ? prod.referencia.toLowerCase().includes(filtroReferencia.toLowerCase())
                : true;

            const coincidePopularidad =
                (filtroPopularidadMin === null || prod.popularidad >= filtroPopularidadMin) &&
                (filtroPopularidadMax === null || prod.popularidad <= filtroPopularidadMax);

            const coincideFechaCreacion =
                (filtroFechaDesde === null || new Date(prod.fecha_creacion) >= new Date(filtroFechaDesde)) &&
                (filtroFechaHasta === null || new Date(prod.fecha_creacion) <= new Date(filtroFechaHasta));

            const coincideProveedor = filtroProveedor.trim() !== ""
                ? prod.proveedor?.toLowerCase().includes(filtroProveedor.toLowerCase()) // Usa "?" para evitar errores si es undefined
                : true;

            const coincideMarca = filtroMarca.trim() !== ""
                ? prod.marca.toLowerCase().includes(filtroMarca.toLowerCase())
                : true;

            const coincideDescuento =
                (filtroDescuentoMin === null || prod.descuento >= filtroDescuentoMin) &&
                (filtroDescuentoMax === null || prod.descuento <= filtroDescuentoMax);

            console.log(`Resultado filtros -> Nombre: ${coincideNombre}, Categoría: ${coincideCategoria}, Estado: ${coincideEstado}, Precio: ${coincidePrecio}, Tag: ${coincideTag}, Stock: ${coincideStock}, Tipo Producto: ${coincideTipoProducto}, Referencia: ${coincideReferencia}, Popularidad: ${coincidePopularidad}, Fecha Creación: ${coincideFechaCreacion}, Proveedor: ${coincideProveedor}, Marca: ${coincideMarca}, Descuento: ${coincideDescuento}`);

            return coincideNombre && coincideCategoria && coincideEstado && coincidePrecio && coincideTag &&
                coincideStock && coincideTipoProducto && coincideReferencia && coincidePopularidad &&
                coincideFechaCreacion && coincideProveedor && coincideMarca && coincideDescuento;
        });
    }, [productos, filtroNombre, categoriaSeleccionada, estadoSeleccionado, precioMin, precioMax, filtroTag,
        filtroStock, filtroTipoProducto, filtroReferencia, filtroPopularidadMin, filtroPopularidadMax,
        filtroFechaDesde, filtroFechaHasta, filtroProveedor, filtroMarca, filtroDescuentoMin, filtroDescuentoMax]);
    console.log("Productos Filtrados:", productosFiltrados);

    useEffect(() => {
        if (selectedProducto === "lista") {
            setLoading(true);
            fetch("http://localhost:3000/api/productos")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Error al obtener los productos");
                    }
                    return res.json();
                })
                .then((data) => {
                    setProductos(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [selectedProducto]);

    return (
        <div className="gestion-productos">
            {/* 📌 Cabecera estática */}
            <h2>🛒 Gestión de Productos</h2>
            <p>Administra los productos de tu tienda. Selecciona una opción para ver más detalles.</p>

            {/* 📌 Contenido dinámico basado en la selección */}
            {selectedProducto === "lista" ? (
                <section className="dashboard-cards">
                    <div className="card">
                        <h3>📋 Lista de Productos</h3>
                        <p>Total: {productos.length} productos</p>
                        {/* Pasamos productos, loading y error a ProductosTable */}
                        <ProductosTable productos={productos} loading={loading} error={error} />
                    </div>
                </section>
            ) : selectedProducto === "nuevo" ? (
                <div className="dashboard-cards">
                    <div className="card">
                        <h3>➕ Agregar Nuevo Producto</h3>
                        <p>Cantidad agregada hoy: {productos.length}</p>

                        {/* Formulario para agregar productos */}
                        <FormularioUniversal
                            titulo="Agregar Producto"
                            campos={[
                                { nombre: "codigo", etiqueta: "Código", tipo: "text" },
                                { nombre: "nombre", etiqueta: "Nombre del Producto", tipo: "text" },
                                { nombre: "descripcion", etiqueta: "Descripción", tipo: "text" },
                                { nombre: "precio", etiqueta: "Precio", tipo: "number" },
                                { nombre: "stock", etiqueta: "Stock", tipo: "number" },
                                { nombre: "tipo_producto", etiqueta: "Tipo de Producto", tipo: "text" },
                                { nombre: "referencia", etiqueta: "Referencia", tipo: "text" },
                                { nombre: "estado", etiqueta: "Estado", tipo: "select", opciones: ["Disponible", "Agotado", "Descontinuado"] },
                                { nombre: "popularidad", etiqueta: "Popularidad", tipo: "number" },
                                { nombre: "fecha_creacion", etiqueta: "Fecha de Creación", tipo: "date" },
                                { nombre: "categoria", etiqueta: "Categoría", tipo: "select", opciones: ["Electrónica", "Ropa", "Hogar", "Alimentos"] },
                                { nombre: "proveedor", etiqueta: "Proveedor", tipo: "text" },
                                { nombre: "marca", etiqueta: "Marca", tipo: "text" },
                                { nombre: "descuento", etiqueta: "Descuento (%)", tipo: "number" },
                                { nombre: "tags", etiqueta: "Tags (separados por comas)", tipo: "text" }
                            ]}
                            onSubmit={handleAgregarProducto}
                        />

                        {/* Tabla de productos */}
                        <ProductosTable productos={productos} loading={loading} error={error} />
                    </div>
                </div>
            ) : selectedProducto === "editar" ? (
                <div className="dashboard-cards">
                    <div className="card">
                        <h3>✏️ Editar Producto Existente</h3>
                        <p>Productos modificados este mes: 120</p>
                        {/* Formulario para agregar productos */}


                        <select onChange={(e) => {
                            console.log("ID seleccionado:", e.target.value); // 🔹 Verifica qué valor se selecciona
                            const producto = productos.find(prod => prod.id_producto === Number(e.target.value));
                            if (producto) setProductoSeleccionado(producto);
                        }}>
                            <option value="">Selecciona un producto</option>
                            {productos.map((prod) => (
                                <option key={prod.id_producto} value={prod.id_producto}>
                                    {prod.nombre}
                                </option>
                            ))}
                        </select>

                        {productoSeleccionado && (
                            <FormularioUniversal
                                titulo="Editar Producto"
                                campos={[
                                    { nombre: "codigo", etiqueta: "Código", tipo: "text" },
                                    { nombre: "nombre", etiqueta: "Nombre del Producto", tipo: "text" },
                                    { nombre: "descripcion", etiqueta: "Descripción", tipo: "text" },
                                    { nombre: "precio", etiqueta: "Precio", tipo: "number" },
                                    { nombre: "stock", etiqueta: "Stock", tipo: "number" },
                                    { nombre: "tipo_producto", etiqueta: "Tipo de Producto", tipo: "text" },
                                    { nombre: "referencia", etiqueta: "Referencia", tipo: "text" },
                                    { nombre: "estado", etiqueta: "Estado", tipo: "select", opciones: ["Disponible", "Agotado", "Descontinuado"] },
                                    { nombre: "popularidad", etiqueta: "Popularidad", tipo: "number" },
                                    { nombre: "fecha_creacion", etiqueta: "Fecha de Creación", tipo: "date" },
                                    { nombre: "categoria", etiqueta: "Categoría", tipo: "select", opciones: ["Electrónica", "Ropa", "Hogar", "Alimentos"] },
                                    { nombre: "proveedor", etiqueta: "Proveedor", tipo: "text" },
                                    { nombre: "marca", etiqueta: "Marca", tipo: "text" },
                                    { nombre: "descuento", etiqueta: "Descuento (%)", tipo: "number" },
                                    { nombre: "tags", etiqueta: "Tags (separados por comas)", tipo: "text" }
                                ]}
                                valoresIniciales={productoSeleccionado}
                                onSubmit={handleEditarProducto}
                            />
                        )}
                    </div>
                </div>
            ) : selectedProducto === "eliminar" ? (
                <div className="dashboard-cards">
                    <div className="card">
                        <h3>❌ Eliminar Producto</h3>
                        <p>Productos eliminados este mes: 5</p>

                        <select onChange={(e) => {
                            console.log("ID seleccionado:", e.target.value); // 🔹 Verifica qué valor se selecciona
                            const producto = productos.find(prod => prod.id_producto === Number(e.target.value));
                            if (producto) setProductoSeleccionado(producto);
                        }}>
                            <option value="">Selecciona un producto</option>
                            {productos.map((prod) => (
                                <option key={prod.id_producto} value={prod.id_producto}>
                                    {prod.nombre}
                                </option>
                            ))}
                        </select>

                        {productoSeleccionado && (
                            <>
                                <FormularioUniversal
                                    titulo="Editar Producto"
                                    campos={[
                                        { nombre: "codigo", etiqueta: "Código", tipo: "text" },
                                        { nombre: "nombre", etiqueta: "Nombre del Producto", tipo: "text" },
                                        { nombre: "descripcion", etiqueta: "Descripción", tipo: "text" },
                                        { nombre: "precio", etiqueta: "Precio", tipo: "number" },
                                        { nombre: "stock", etiqueta: "Stock", tipo: "number" },
                                        { nombre: "tipo_producto", etiqueta: "Tipo de Producto", tipo: "text" },
                                        { nombre: "referencia", etiqueta: "Referencia", tipo: "text" },
                                        { nombre: "estado", etiqueta: "Estado", tipo: "select", opciones: ["Disponible", "Agotado", "Descontinuado"] },
                                        { nombre: "popularidad", etiqueta: "Popularidad", tipo: "number" },
                                        { nombre: "fecha_creacion", etiqueta: "Fecha de Creación", tipo: "date" },
                                        { nombre: "categoria", etiqueta: "Categoría", tipo: "select", opciones: ["Electrónica", "Ropa", "Hogar", "Alimentos"] },
                                        { nombre: "proveedor", etiqueta: "Proveedor", tipo: "text" },
                                        { nombre: "marca", etiqueta: "Marca", tipo: "text" },
                                        { nombre: "descuento", etiqueta: "Descuento (%)", tipo: "number" },
                                        { nombre: "tags", etiqueta: "Tags (separados por comas)", tipo: "text" }
                                    ]}
                                    valoresIniciales={productoSeleccionado}
                                    onSubmit={handleEditarProducto}
                                />
                                <button onClick={handleEliminarProducto} style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}>
                                    ❌ Eliminar Producto
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ) : selectedProducto === "buscar" ? (
                <div className="dashboard-cards">
                    <div className="card">
                        <h3>🔍 Filtrar y Buscar Productos</h3>
                        <p>Última búsqueda realizada: {filtroNombre || "Ninguna"}</p>

                        {/* Filtros */}
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            value={filtroNombre}
                            onChange={(e) => setFiltroNombre(e.target.value)}
                        />

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

                        <input
                            type="number"
                            placeholder="Precio mínimo"
                            value={precioMin}
                            onChange={(e) => setPrecioMin(Number(e.target.value))}
                        />

                        <input
                            type="number"
                            placeholder="Precio máximo"
                            value={precioMax}
                            onChange={(e) => setPrecioMax(Number(e.target.value))}
                        />

                        <input
                            type="text"
                            placeholder="Filtrar por tag..."
                            value={filtroTag}
                            onChange={(e) => setFiltroTag(e.target.value)}
                        />
                        <input type="number" placeholder="Stock mínimo" onChange={(e) => setFiltroStock(Number(e.target.value))} />
                        <input type="text" placeholder="Tipo de producto" onChange={(e) => setFiltroTipoProducto(e.target.value)} />
                        <input type="text" placeholder="Referencia" onChange={(e) => setFiltroReferencia(e.target.value)} />
                        <input type="number" placeholder="Popularidad mínima"
                            onChange={(e) => setFiltroPopularidadMin(e.target.value ? Number(e.target.value) : null)} />
                        <input type="number" placeholder="Popularidad máxima"
                            onChange={(e) => setFiltroPopularidadMax(e.target.value ? Number(e.target.value) : null)} />
                        <input type="date" onChange={(e) => setFiltroFechaDesde(e.target.value || null)} />
                        <input type="date" onChange={(e) => setFiltroFechaHasta(e.target.value || null)} />
                        <input type="text" placeholder="Proveedor" onChange={(e) => setFiltroProveedor(e.target.value)} />
                        <input type="text" placeholder="Marca" onChange={(e) => setFiltroMarca(e.target.value)} />
                        <input
                            type="number"
                            placeholder="Descuento mínimo"
                            onChange={(e) => setFiltroDescuentoMin(e.target.value ? Number(e.target.value) : null)}
                        />
                        <input
                            type="number"
                            placeholder="Descuento máximo"
                            onChange={(e) => setFiltroDescuentoMax(e.target.value ? Number(e.target.value) : null)}
                        />
                    </div>

                    {/* Tabla de productos filtrados */}
                    <ProductosTable productos={productosFiltrados} loading={loading} error={error} />
                </div>
            ) : null}
        </div>
    );
};

export default GestionProductos;
