// EditarUsuario.tsx
import React, { useState } from "react";
import { Usuario } from "../../types/usuario";
import UsuariosTable from "../../../universal/components/tablausuarios-universal";
import FormularioUniversal from "../../../../components/formulario";
import Boton from "../../../../components/boton";
import Input from "../../../../components/input";

interface EditarUsuarioProps {
  usuarios: Usuario[];
  setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>;
  loading: boolean;
  error: string | null;
}

const EditarUsuario: React.FC<EditarUsuarioProps> = ({ usuarios, setUsuarios, loading, error }) => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<Usuario | null>(null);
  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toISOString().split("T")[0]; // "YYYY-MM-DD"
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (!usuarioSeleccionado) return;

    setUsuarioSeleccionado({
      ...usuarioSeleccionado,
      [name]: value,
    });
  };

  const handleGuardar = async () => {
    if (!usuarioSeleccionado) return;
  
    try {
      // ✅ Eliminar "rol" sin usar delete
      const { rol, ...usuarioLimpio } = usuarioSeleccionado;
  
      console.log("Usuario actualizado:", usuarioLimpio);
  
      setUsuarios((prev) =>
        prev.map((u) =>
          u.id_usuario === usuarioLimpio.id_usuario ? usuarioLimpio : u
        )
      );
  
     // si estás usando esto para formulario
    } catch (err) {
      console.error("Error al actualizar usuario:", err);
    }
  };
  
  const usuarioFormateado = usuarioSeleccionado
    ? {
      ...usuarioSeleccionado,
      fecha_nacimiento: formatearFecha(usuarioSeleccionado.fecha_nacimiento),
      fecha_creacion: formatearFecha(usuarioSeleccionado.fecha_creacion),
      fecha_actualizacion: formatearFecha(usuarioSeleccionado.fecha_actualizacion),
    }
    : null;
  return (
    <div>
      <h3>✏️ Editar Usuario</h3>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p>Error: {error}</p>}

      <UsuariosTable usuarios={usuarios} loading={loading} error={error} />
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
        <Boton texto="Guardar Cambios" tipo="button" onClick={handleGuardar} />
      </div>
      {usuarioSeleccionado && (
        <>

          <FormularioUniversal
            titulo="Editar Usuario"
            campos={[
              { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre" },
              { nombre: "apellido", tipo: "text", etiqueta: "Apellido", placeholder: "Apellido" },
              {
                nombre: "genero",
                tipo: "select",
                etiqueta: "Género",
                opciones: [
                  { valor: "", etiqueta: "Selecciona un género" },
                  { valor: "Masculino", etiqueta: "Masculino" },
                  { valor: "Femenino", etiqueta: "Femenino" },
                  { valor: "Otro", etiqueta: "Otro" },
                ]
              },
              { nombre: "fecha_nacimiento", tipo: "date", etiqueta: "Fecha de Nacimiento" },
              { nombre: "documento", tipo: "text", etiqueta: "Documento", placeholder: "Documento" },
              { nombre: "email", tipo: "email", etiqueta: "Email", placeholder: "Email" },
              { nombre: "telefono", tipo: "text", etiqueta: "Teléfono", placeholder: "Teléfono" },
              { nombre: "pais", tipo: "text", etiqueta: "País", placeholder: "País" },
              { nombre: "provincia", tipo: "text", etiqueta: "Provincia", placeholder: "Provincia" },
              { nombre: "ciudad", tipo: "text", etiqueta: "Ciudad", placeholder: "Ciudad" },
              { nombre: "direccion", tipo: "text", etiqueta: "Dirección", placeholder: "Dirección" },
              { nombre: "codigo_postal", tipo: "text", etiqueta: "Código Postal", placeholder: "Código Postal" },
              { nombre: "fecha_creacion", tipo: "date", etiqueta: "Fecha de Creación" },
              { nombre: "fecha_actualizacion", tipo: "date", etiqueta: "Fecha de Actualización" },
              {
                nombre: "id_rol",
                tipo: "select",
                etiqueta: "Rol",
                opciones: [
                  { valor: "", etiqueta: "Selecciona un rol" },
                  { valor: 1, etiqueta: "Admin" },
                  { valor: 2, etiqueta: "Cliente" },
                  { valor: 3, etiqueta: "Moderador" },
                  { valor: 4, etiqueta: "Soporte" },
                  { valor: 5, etiqueta: "Vendedor" }
                ]
              }
            ]}
            valoresIniciales={usuarioFormateado}
            onChange={handleChange}
            onSubmit={handleGuardar}
          />

        </>
      )}


    </div>
  );
};

export default EditarUsuario;
