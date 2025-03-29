import React from "react";
import "../styles/panel-principal.css";

interface ConfiguracionProps {
    selectedConfiguracion : string;
}

const sectionContent: Record<string, React.ReactNode> = {
    configuracionpagos: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>💳 Configurar métodos de pago</h3>
                <p>Total: 120</p>
            </div>
        </section>
    ),
    configuracionenvios: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🚚 Configurar envíos y costos</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    configuracionidiomas: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🌍 Configurar moneda e idioma</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    configuracionseguridad: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🔐 Seguridad y accesos</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
};

const Configuracion: React.FC<ConfiguracionProps> = ({ selectedConfiguracion }) => {
    return (
        <div className="gestion-estadisticas">
            <h2>⚙️ Configuración de la Tienda</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes gestionar los usuarios de tu sistema.</p>
            
            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedConfiguracion] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default Configuracion;
