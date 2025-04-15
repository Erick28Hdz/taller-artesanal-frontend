// GestionUsuarios.tsx
import React, { useEffect, useState } from "react";
import "../styles/panel-principal.css";
import "../styles/card.admin.css"
import { Usuario } from "../types/usuario";
import Tabs from "../../../components/tabs";

import ListaUsuarios from "./gestion-usuarios/ListaUsuarios";
import AsignarRoles from "./gestion-usuarios/AsignarRoles";
import BuscarUsuario from "./gestion-usuarios/BusquedaUsuario";
import EditarUsuario from "./gestion-usuarios/EditarUsuario";
import EliminarUsuario from "./gestion-usuarios/EliminarUsuario";

const GestionUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [roles, setRoles] = useState<{ id_rol: number; nombre: string; descripcion: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");

  useEffect(() => {
    setLoading(true); // Asegúrate de que el loading esté activado antes de la solicitud
    // Obtienes ambos usuarios y roles en una sola petición, si es posible
    Promise.all([
      fetch("http://localhost:3000/api/usuarios").then((res) => {
        if (!res.ok) throw new Error("Error al obtener los usuarios");
        return res.json();
      }),
      fetch("http://localhost:3000/api/roles").then((res) => {
        if (!res.ok) throw new Error("Error al obtener los roles");
        return res.json();
      }),
    ])
      .then(([usuariosData, rolesData]) => {
        setUsuarios(usuariosData);
        setRoles(rolesData); // Aquí sets both usuarios and roles
        setLoading(false); // No olvides desactivar el loading
      })
      .catch((err) => {
        setError(err.message); // Si ocurre algún error, lo mostramos
        setLoading(false);
      });
  }, []);  // Se ejecuta una sola vez cuando el componente se monta


  return (
    <div className="gestion-usuarios">
      <h2>👥 Gestión de Usuarios y Roles</h2>
      <p>Administra usuarios registrados, roles y permisos desde aquí.</p>

      <Tabs
        opciones={["Lista", "Asignar Roles", "Busqueda", "Editar", "Eliminar"]}
        valorInicial="Lista"
        onChange={(valor) => setTabSeleccionado(valor)}
      />

      {tabSeleccionado === "Lista" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <ListaUsuarios usuarios={usuarios} loading={loading} error={error} />
            <br />
            <p>Total: {usuarios.length} usuarios</p>
          </div>
        </section>
      )}
      {tabSeleccionado === "Asignar Roles" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <AsignarRoles
              loading={loading}
              error={error}
              roles={roles} // Agregas los roles aquí
            />
            <br />
          </div>
        </section>
      )}
      {tabSeleccionado === "Busqueda" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <BuscarUsuario
              usuarios={usuarios}
              setUsuarios={setUsuarios}
              loading={loading}
              error={error}
            />
            <br />
          </div>
        </section>
      )}
      {tabSeleccionado === "Editar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EditarUsuario
              usuarios={usuarios}
              setUsuarios={setUsuarios}
              loading={loading}
              error={error}
            />
            <br />
          </div>
        </section>
      )}
      {tabSeleccionado === "Eliminar" && (
        <section className="dashboard-cards">
          <div className="card-admin">
            <EliminarUsuario
              usuarios={usuarios}
              setUsuarios={setUsuarios}
              loading={loading}
              error={error}
            />
            <br />
          </div>
        </section>
      )}
    </div>
  );
};

export default GestionUsuarios;