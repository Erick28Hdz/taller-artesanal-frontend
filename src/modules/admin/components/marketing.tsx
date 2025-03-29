import React from "react";
import "../styles/panel-principal.css";

interface MarketingProps {
    selectedMarketing : string;
}

const sectionContent: Record<string, React.ReactNode> = {
    marketingoptimizacion: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>📈 SEO & Optimización</h3>
                <p>Total: 120</p>
            </div>
        </section>
    ),
    marketing: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📬 Marketing y Newsletter</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    marketingredes: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📲 Integración con redes sociales</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    marketingautomatizacion: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🤖 Automatización de procesos</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
};

const Marketing: React.FC<MarketingProps> = ({ selectedMarketing }) => {
    return (
        <div className="gestion-marketing">
            <h2>🔥 Opciones Avanzadas</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes gestionar los usuarios de tu sistema.</p>
            
            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedMarketing] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default Marketing;
