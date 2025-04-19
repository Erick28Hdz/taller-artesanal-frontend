import React, { useState } from "react";
import { Usuario } from "../../types/usuario";
import UsuariosTable from "./tablausuarios-universal";
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
                    if (!datoUsuario || !valor) return false;

                    const normalizarFecha = (fechaStr: string) => {
                        // Intenta convertir formatos como "15/08/1995" a "1995-08-15"
                        if (fechaStr.includes("/")) {
                            const [dia, mes, anio] = fechaStr.split("/");
                            return `${anio}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
                        }

                        if (fechaStr.includes("-")) {
                            const partes = fechaStr.split("-");
                            // Si ya es tipo "YYYY-MM-DD"
                            if (partes[0].length === 4) return fechaStr;
                        }

                        return ""; // formato desconocido
                    };

                    const fechaUsuarioNormalizada = normalizarFecha(String(datoUsuario));
                    const valorFiltro = valor; // ya viene como YYYY-MM-DD desde input type="date"

                    console.log("fecha usuario:", fechaUsuarioNormalizada);
                    console.log("filtro:", valorFiltro);

                    return fechaUsuarioNormalizada === valorFiltro;
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
                titulo=""
                campos={[
                    { nombre: "id_usuario", tipo: "text", etiqueta: "ID de Usuario", placeholder: "ID de Usuario" },
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
                    },
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
                    //funcional
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
