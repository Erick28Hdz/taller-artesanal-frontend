import React from "react";
import "../styles/panel-principal.css";

interface GestionVendedoresProps {
    selectedVendedor: string;
}

const sectionContent: Record<string, React.ReactNode> = {
    listaVendedores: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>✔️ Aprobar o rechazar vendedor</h3>
                <p>Total: 120</p>
            </div>
        </section>
    ),
    rendimiendoVendedor: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📊 Ver rendimiento del vendedor</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    detallesVendedores: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📑 Ver detalles del usuario</h3>
                <p>Información detallada</p>
            </div>
        </div>
    ),
    productosVendedores: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📦 Ver productos del vendedor</h3>
                <p>Modificar datos personales</p>
            </div>
        </div>
    ),
    pagosVendedores: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>💰 Modificar comisiones y pagos</h3>
                <p>Total suspendidos: 10</p>
            </div>
        </div>
    ),
};

const Gestionvendedor: React.FC<GestionVendedoresProps> = ({ selectedVendedor }) => {
    return (
        <div className="gestion-vendedores">
            <h2>🛍️ Gestión de Vendedores</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes gestionar los usuarios de tu sistema.</p>
            
            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedVendedor] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default Gestionvendedor;
