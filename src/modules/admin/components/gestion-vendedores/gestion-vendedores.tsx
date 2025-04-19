import React, { useEffect, useState } from "react";
import { Usuario } from "../../types/usuario";
import Tabs from "../../../../components/tabs";

import ListaVendedores from "./ListaVendedor";
import BuscarVendedor from "./BuscarVendedor";


const GestionVendedores: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3000/api/usuarios")
            .then((res) => {
                if (!res.ok) throw new Error("Error al obtener los usuarios");
                return res.json();
            })
            .then((usuariosData: Usuario[]) => {
                setUsuarios(usuariosData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Filtrar solo vendedores (rol ID 5)
    const vendedores = usuarios.filter((usuario) => usuario.id_rol === 5);

    return (
        <div className="gestion-vendedores">
            <h2>🛍️ Gestión de Vendedores</h2>
            <p>Administra tus vendedores desde este panel.</p>

            <Tabs
                opciones={["Lista", "Busqueda"]}
                valorInicial="Lista"
                onChange={(valor) => setTabSeleccionado(valor)}
            />

            {tabSeleccionado === "Lista" && (
                <section className="dashboard-cards">
                    <div className="card-admin">
                        <ListaVendedores usuarios={usuarios} loading={loading} error={error} />
                        <br />
                        <p>Total: {vendedores.length} vendedores</p>
                    </div>
                </section>
            )}

            {tabSeleccionado === "Busqueda" && (
                <section className="dashboard-cards">
                    <div className="card-admin">
                        <BuscarVendedor
                            vendedores={usuarios.filter(u => u.id_rol === 5)}
                            setVendedores={setUsuarios}
                            loading={loading}
                            error={error}
                        />
                        <br />
                        <p>Total: {vendedores.length} vendedores</p> {/* ← puedes cambiar esto si quieres mostrar los filtrados */}
                    </div>
                </section>
            )}

        </div>
    );
};

export default GestionVendedores;
