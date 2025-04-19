import React, { useState } from "react";
import { Usuario } from "../../types/usuario"; // Asegúrate que este tipo esté definido
import VendedoresTable from "./tablavendedor-universal"; // Actualiza el path si es necesario
import FormularioUniversal from "../../../../components/formulario";

interface BuscarVendedorProps {
    vendedores: Usuario[];
    setVendedores: React.Dispatch<React.SetStateAction<Usuario[]>>;
    loading: boolean;
    error: string | null;
}

const BuscarVendedor: React.FC<BuscarVendedorProps> = ({ vendedores, setVendedores, loading, error }) => {
    const [valoresFormulario, setValoresFormulario] = useState({
        id_usuario: "",
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
        fecha_creacion: "",
        fecha_actualizacion: ""
    });

    const [vendedoresFiltrados, setVendedoresFiltrados] = useState<Usuario[]>(vendedores);

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

        const filtrados = vendedores.filter((vendedor) => {
            return Object.entries(nuevosValores).every(([clave, valor]) => {
                if (!valor) return true;

                const dato = (vendedor as any)[clave];

                if (clave === "fecha_creacion" || clave === "fecha_actualizacion") {
                    if (!dato) return false;
                    const fecha = typeof dato === "string" ? new Date(dato) : dato;
                    const fechaFormateada = fecha.toISOString().split("T")[0];
                    return fechaFormateada === valor;
                }

                return normalizar(dato || "").includes(normalizar(valor));
            });
        });

        setVendedoresFiltrados(filtrados);
    };
   
    return (
        <div>
            <h3>🔍 Buscar Vendedor</h3>
            {loading && <p>Cargando vendedores...</p>}
            {error && <p>Error: {error}</p>}

            <FormularioUniversal
                titulo="Filtrar Vendedores"
                campos={[
                    { nombre: "id_usuario", tipo: "text", etiqueta: "ID", placeholder: "ID del usuario" },
                    { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre del vendedor" },
                    { nombre: "correo", tipo: "text", etiqueta: "Correo", placeholder: "Correo electrónico" },
                    { nombre: "telefono", tipo: "text", etiqueta: "Teléfono", placeholder: "Número de teléfono" },
                ]}
                valoresIniciales={valoresFormulario}
                onChange={handleChange}
                onSubmit={(data) => {
                    console.log("Datos enviados para búsqueda:", data);
                }}
            />

            <VendedoresTable vendedores={vendedoresFiltrados} loading={loading} error={error} />
        </div>
    );
};

export default BuscarVendedor;
