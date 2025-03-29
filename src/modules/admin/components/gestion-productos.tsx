import React from "react";
import "../styles/panel-principal.css";

interface GestionProductosProps {
    selectedProducto: string;
}

const productSectionContent: Record<string, React.ReactNode> = {
    lista: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>📋 Lista de Productos</h3>
                <p>Total: 500 productos</p>
            </div>
        </section>
    ),
    nuevo: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>➕ Agregar Nuevo Producto</h3>
                <p>Cantidad agregada hoy: 10</p>
            </div>
        </div>
    ),
    editar: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>✏️ Editar Producto Existente</h3>
                <p>Productos modificados este mes: 120</p>
            </div>
        </div>
    ),
    eliminar: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>❌ Eliminar Producto</h3>
                <p>Productos eliminados este mes: 5</p>
            </div>
        </div>
    ),
    buscar: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🔍 Filtrar y Buscar Productos</h3>
                <p>Última búsqueda realizada: "Laptops"</p>
            </div>
        </div>
    ),
};

// Componente principal del panel de productos
const GestionProductos: React.FC<GestionProductosProps> = ({ selectedProducto }) => {
    return (
        <div className="gestion-productos">
            {/* 📌 Cabecera estática */}
            <h2>🛒 Gestión de Productos</h2>
            <p>Administra los productos de tu tienda. Selecciona una opción para ver más detalles.</p>

            {/* 📌 Contenido dinámico basado en la selección */}
            {productSectionContent[selectedProducto] ?? (
                <div className="dashboard-cards">
                    {Object.values(productSectionContent)}
                </div>
            )}
        </div>
    );
};

export default GestionProductos;
