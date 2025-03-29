import React from "react";
import "../styles/panel-principal.css";

interface GestionSoporteProps {
    selectedSoporte : string;
}

const sectionContent: Record<string, React.ReactNode> = {
    verConsultas: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>💬 Ver consultas y mensajes de clientes</h3>
                <p>Total: 120</p>
            </div>
        </section>
    ),
    gestionarTickets: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🔧 Gestionar tickets de soporte</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
};

const GestionSoporte: React.FC<GestionSoporteProps> = ({ selectedSoporte }) => {
    return (
        <div className="gestion-estadisticas">
            <h2>📩 Soporte y Atención al Cliente</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes gestionar los usuarios de tu sistema.</p>
            
            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedSoporte] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default GestionSoporte;
