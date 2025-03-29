import React from "react";
import "../styles/panel-principal.css";

interface GestionOfertasProps {
    selectedOfertas: string;
}

const sectionContent: Record<string, React.ReactNode> = {
    crearCupon: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>➕ Crear cupones de descuento</h3>
                <p>Total: 120</p>
            </div>
        </section>
    ),
    configurarPromocion: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📢 Configurar promociones especiales</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
};

const GestionOfertas: React.FC<GestionOfertasProps> = ({ selectedOfertas }) => {
    return (
        <div className="gestion-estadisticas">
            <h2>🏷️ Gestión de Ofertas y Descuentos</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes gestionar los usuarios de tu sistema.</p>
            
            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedOfertas] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default GestionOfertas;
