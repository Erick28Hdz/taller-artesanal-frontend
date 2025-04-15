import React, { useState } from "react";
import { Usuario } from "../../types/usuario";
import UsuariosTable from "../../../universal/components/tablausuarios-universal";
import FormularioUniversal from "../../../../components/formulario";

interface BuscarUsuarioProps {
    usuarios: Usuario[];
    setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>;
    loading: boolean;
    error: string | null;
}

const BuscarUsuario: React.FC<BuscarUsuarioProps> = ({ usuarios, setUsuarios, loading, error }) => {
    const [valoresFormulario, setValoresFormulario] = useState({
        id_usuario: "",
        id_rol: "",
        rol: "",
        nombre: "",
        apellido: "",
        genero: "",
        fecha_nacimiento: "",
        documento: "",
        email: "",
        telefono: "",
        token_verificacion: "",
        pais: "",
        provincia: "",
        ciudad: "",
        direccion: "",
        codigo_postal: "",
        fecha_creacion: "",
        fecha_actualizacion: "",
    });
    const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuario[]>(usuarios);

    function normalizar(texto: any): string {
        return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        const nuevosValores = {
            ...valoresFormulario,
            [name]: value
        };

        setValoresFormulario(nuevosValores);

        const filtrados = usuarios.filter((usuario) => {
            return Object.entries(nuevosValores).every(([clave, valor]) => {
                if (!valor) return true;

                const datoUsuario = (usuario as any)[clave];

                if (clave === "rol") {
                    return normalizar(usuario.rol?.nombre || "").includes(normalizar(valor));
                }

                if (clave === "fecha_nacimiento") {
                    if (!datoUsuario) return false;

                    // Asegurar que sea tipo Date, incluso si viene como string
                    const fecha = typeof datoUsuario === "string" ? new Date(datoUsuario) : datoUsuario;
                    const fechaFormateada = fecha.toISOString().split("T")[0]; // "YYYY-MM-DD"

                    return fechaFormateada === valor; // valor también es "YYYY-MM-DD"
                }

                return normalizar(datoUsuario || "").includes(normalizar(valor));
            });
        });

        setUsuariosFiltrados(filtrados);
    };

    return (
        <div>
            <h3>🔍 Buscar Usuario</h3>
            {loading && <p>Cargando usuarios...</p>}
            {error && <p>Error: {error}</p>}

            <FormularioUniversal
                titulo="Filtrar Usuarios"
                campos={[
                    { nombre: "id_usuario", tipo: "text", etiqueta: "ID de Usuario", placeholder: "ID de Usuario" },
                    { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre" }, // funcional
                    { nombre: "apellido", tipo: "text", etiqueta: "Apellido", placeholder: "Apellido" }, //funcional
                    {
                        nombre: "genero",
                        tipo: "select",
                        etiqueta: "Género",
                        opciones: [
                            { valor: "", etiqueta: "Selecciona un género" },
                            { valor: "Masculino", etiqueta: "Masculino" },
                            { valor: "Femenino", etiqueta: "Femenino" },
                            { valor: "Otro", etiqueta: "Otro" }
                        ]
                    }, //funcional
                    { nombre: "fecha_nacimiento", tipo: "date", etiqueta: "Fecha de Nacimiento", placeholder: "Fecha de nacimiento" }, //no funciona con fecha especifica
                    { nombre: "documento", tipo: "text", etiqueta: "Documento", placeholder: "Documento" }, //funcional
                    { nombre: "email", tipo: "email", etiqueta: "Email", placeholder: "Email" }, //funcional
                    { nombre: "telefono", tipo: "text", etiqueta: "Teléfono", placeholder: "Teléfono" }, //funcional
                    { nombre: "pais", tipo: "text", etiqueta: "País", placeholder: "País" }, //funcional
                    { nombre: "provincia", tipo: "text", etiqueta: "Provincia", placeholder: "Provincia" }, //funcional
                    { nombre: "ciudad", tipo: "text", etiqueta: "Ciudad", placeholder: "Ciudad" }, //funcional
                    { nombre: "direccion", tipo: "text", etiqueta: "Dirección", placeholder: "Dirección" }, //funcional
                    { nombre: "codigo_postal", tipo: "text", etiqueta: "Código Postal", placeholder: "Código Postal" }, //funcional
                    { nombre: "fecha_creacion", tipo: "date", etiqueta: "Fecha de Creación", placeholder: "Fecha de creación" }, //funcional
                    { nombre: "fecha_actualizacion", tipo: "date", etiqueta: "Fecha de Actualización", placeholder: "Fecha de actualización" }, //funcional
                    {
                        nombre: "rol",
                        tipo: "select",
                        etiqueta: "Rol",
                        opciones: [
                            { valor: "Admin", etiqueta: "Admin" },
                            { valor: "cliente", etiqueta: "Cliente" },
                            { valor: "Moderador", etiqueta: "Moderador" },
                            { valor: "Soporte", etiqueta: "Soporte" },
                            { valor: "Vendedor", etiqueta: "Vendedor" }
                        ]
                    }, //funcional
                ]}

                valoresIniciales={valoresFormulario}
                onChange={handleChange}
                onSubmit={(data) => {
                    console.log("Datos enviados:", data);
                    // aquí puedes hacer un fetch para buscar usuarios con esos filtros
                }}
            />

            <UsuariosTable usuarios={usuariosFiltrados} loading={loading} error={error} />
        </div>
    );
};

export default BuscarUsuario;
