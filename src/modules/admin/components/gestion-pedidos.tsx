import React from "react";
import "../styles/panel-principal.css";

interface GestionPedidosProps {
    selectedPedido: string;
}

const sectionContent: Record<string, React.ReactNode> = {
    pedidos: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>📜 Ver pedidos recientes</h3>
                <p>120</p>
            </div>
        </section>
    ),
    estadopedido: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🔄 Actualizar estado del pedido</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    detallepedido: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📑 Ver detalles del pedido</h3>
                <p>$12,000</p>
            </div>
        </div>
    ),
    cancelarpedido: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>❌ Cancelar o reembolsar pedido</h3>
                <p>Total: 1,500</p>
            </div>
        </div>
    ),
};

// Componente principal del panel
const GestionPedidos: React.FC<GestionPedidosProps> = ({ selectedPedido }) => {
    return (
        <div className="gestion-pedidos">
            {/* 📌 Cabecera estática */}
            <h2>📦 Gestión de Pedidos</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes ver un resumen general del estado de tu tienda.</p>

            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedPedido] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default GestionPedidos;
