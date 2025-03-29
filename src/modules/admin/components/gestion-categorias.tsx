import React from "react";
import "../styles/panel-principal.css";

interface GestionCategoriasProps {
    selectedCategoria: string;
}

const sectionContent: Record<string, React.ReactNode> = {
    categorias: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>📂 Gestión de Categorías</h3>
                <p>120</p>
            </div>
        </section>
    ),
    nuevacategoria: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>➕ Crear nueva categoría</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    editarcategoria: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>✏️ Editar categoría existente</h3>
                <p>$12,000</p>
            </div>
        </div>
    ),
    eliminarcategoria: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>❌ Eliminar categoría</h3>
                <p>Total: 1,500</p>
            </div>
        </div>
    ),
};

// Componente principal del panel
const GestionCategorias: React.FC<GestionCategoriasProps> = ({ selectedCategoria }) => {
    return (
        <div className="gestion-categorias">
            {/* 📌 Cabecera estática */}
            <h2>📂 Gestión de Categorías</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes ver un resumen general del estado de tu tienda.</p>

            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedCategoria] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default GestionCategorias;
