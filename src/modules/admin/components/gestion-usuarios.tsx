import React from "react";
import "../styles/panel-principal.css";

interface GestionUsuariosProps {
    selectedUsuario: string;
}

const sectionContent: Record<string, React.ReactNode> = {
    listaUsuarios: (
        <section className="dashboard-cards">
            <div className="card">
                <h3>📋 Ver lista de usuarios</h3>
                <p>Total: 120</p>
            </div>
        </section>
    ),
    asignarRoles: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🎭 Asignar roles</h3>
                <p>Total: 8</p>
            </div>
        </div>
    ),
    detallesUsuario: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>📑 Ver detalles del usuario</h3>
                <p>Información detallada</p>
            </div>
        </div>
    ),
    editarUsuario: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>✏️ Editar información del usuario</h3>
                <p>Modificar datos personales</p>
            </div>
        </div>
    ),
    eliminarUsuario: (
        <div className="dashboard-cards">
            <div className="card">
                <h3>🚫 Suspender o eliminar usuario</h3>
                <p>Total suspendidos: 10</p>
            </div>
        </div>
    ),
};

const GestionUsuarios: React.FC<GestionUsuariosProps> = ({ selectedUsuario }) => {
    return (
        <div className="gestion-usuarios">
            <h2>👥 Gestión de Usuarios y Roles</h2>
            <p>Bienvenidx al panel de administración. Aquí puedes gestionar los usuarios de tu sistema.</p>
            
            {/* 📌 Contenido dinámico basado en la selección */}
            {sectionContent[selectedUsuario] ?? (
                <div className="dashboard-cards">
                    {Object.values(sectionContent)}
                </div>
            )}
        </div>
    );
};

export default GestionUsuarios;
