import React from "react";
import "../styles/panel-principal.css";

interface GestionEstadisticasProps {
    selectedEstadisticas: string;
}

const sectionContent: Record<string, React.ReactNode> = {
    ventasProductos: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>📅 Ventas por día/mes/año</h3>
                <p>Total: 120</p>
            </div>
        </section>
    ),
    productosVendidos: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🏆 Productos más vendidos</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    usuariosActivos: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🔥 Usuarios más activos</h3>
                <p>Información detallada</p>
            </div>
        </div>
    ),
    traficoTienda: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🌍 Tráfico de la tienda</h3>
                <p>Modificar datos personales</p>
            </div>
        </div>
    ),
};

const GestionEstadisticas: React.FC<GestionEstadisticasProps> = ({ selectedEstadisticas }) => {
    return (
        <div className="gestion-estadisticas">
            <h2>📈 Estadísticas y Reportes</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes gestionar los usuarios de tu sistema.</p>
            
            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedEstadisticas] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default GestionEstadisticas;
