import React, { useState } from "react";
import { Usuario } from "../../types/usuario";
import UsuariosTable from "./tablausuarios-universal";
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
    const [mensaje, setMensaje] = useState<string | null>(null);

    const handleEliminar = async () => {
        if (!usuarioSeleccionado) {
            alert("Por favor selecciona un usuario para eliminar.");
            return;
        }

        const confirmacion = window.confirm(`¿Estás seguro de eliminar a ${usuarioSeleccionado.nombre} ${usuarioSeleccionado.apellido}?`);
        if (!confirmacion) return;

        try {
            // Realizar la solicitud DELETE al backend
            const response = await fetch(`http://localhost:3000/api/usuarios/${usuarioSeleccionado.id_usuario}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Error al eliminar el usuario");
            }

            // Actualizamos el estado para reflejar la eliminación
            setUsuarios((prev) =>
                prev.filter((u) => u.id_usuario !== usuarioSeleccionado.id_usuario)
            );

            // Limpiar selección y mostrar mensaje de éxito
            setUsuarioSeleccionado(null);
            setMensaje("Usuario eliminado con éxito");

        } catch (err) {
            console.error("Error al eliminar usuario:", err);
            setMensaje("Hubo un error al eliminar el usuario");
        }
    };

    return (
        <div>
            <h3>🗑️ Eliminar Usuario</h3>
            {loading && <p>Cargando usuarios...</p>}
            {error && <p>Error: {error}</p>}
            {mensaje && <p>{mensaje}</p>}  {/* Mostrar mensaje de éxito o error */}

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
