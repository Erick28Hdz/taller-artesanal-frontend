import React, { useState } from "react";
import { Usuario } from "../../types/usuario";
import UsuariosTable from "../../../universal/components/tablausuarios-universal";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EliminarUsuarioProps {
    usuarios: Usuario[];
    setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>;
    loading: boolean;
    error: string | null;
}

const EliminarUsuario: React.FC<EliminarUsuarioProps> = ({ usuarios, setUsuarios, loading, error }) => {
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<Usuario | null>(null);

    const handleEliminar = async () => {
        if (!usuarioSeleccionado) {
            alert("Por favor selecciona un usuario para eliminar.");
            return;
        }

        const confirmacion = window.confirm(`¿Estás seguro de eliminar a ${usuarioSeleccionado.nombre} ${usuarioSeleccionado.apellido}?`);
        if (!confirmacion) return;

        try {
            // Aquí puedes hacer una petición DELETE o PATCH a tu backend
            console.log("Eliminando usuario:", usuarioSeleccionado);

            // Simulación de eliminación (filtrando el usuario del estado)
            setUsuarios((prev) =>
                prev.filter((u) => u.id_usuario !== usuarioSeleccionado.id_usuario)
            );

            setUsuarioSeleccionado(null); // Limpiar selección

        } catch (err) {
            console.error("Error al eliminar usuario:", err);
        }
    };

    return (
        <div>
            <h3>🗑️ Eliminar Usuario</h3>
            {loading && <p>Cargando usuarios...</p>}
            {error && <p>Error: {error}</p>}

            <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
                <Input
                    type="text"
                    name="id_usuario"
                    placeholder="ID de Usuario"
                    value={usuarioSeleccionado?.id_usuario?.toString() || ""}
                    onChange={(e) => {
                        const id = parseInt(e.target.value);
                        const usuario = usuarios.find((u) => u.id_usuario === id) || null;
                        setUsuarioSeleccionado(usuario);
                    }}
                />

                <Boton texto="Eliminar" tipo="button" onClick={handleEliminar} />
            </div>

            <UsuariosTable
                usuarios={usuarioSeleccionado ? [usuarioSeleccionado] : usuarios}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default EliminarUsuario;
