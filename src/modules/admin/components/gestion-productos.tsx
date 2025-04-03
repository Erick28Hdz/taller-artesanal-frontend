import React, { useEffect, useState } from "react";
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

    const handleAgregarProducto = (nuevoProducto: any) => {
        setProductos([...productos, nuevoProducto]); // Agrega el nuevo producto a la lista
        console.log("Producto agregado:", nuevoProducto); // Ver en la consola
    };

    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

    const handleEditarProducto = (productoEditado: any) => {
        // Convertir los tags en un array de strings
        if (productoEditado.tags) {
            productoEditado.tags = productoEditado.tags.split(",").map((tag: string) => tag.trim());
        }

        // Buscar y actualizar el producto en el estado
        setProductos(productos.map(prod =>
            prod.id_producto === productoEditado.id_producto ? productoEditado : prod
        ));

        console.log("Producto actualizado:", productoEditado);
    };

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
                    </div>
                </div>
            ) : selectedProducto === "buscar" ? (
                <div className="dashboard-cards">
                    <div className="card">
                        <h3>🔍 Filtrar y Buscar Productos</h3>
                        <p>Última búsqueda realizada: "Laptops"</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default GestionProductos;
