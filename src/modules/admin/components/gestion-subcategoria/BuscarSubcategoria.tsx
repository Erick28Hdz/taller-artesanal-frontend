import React, { useState } from "react";
import { Categoria } from "../../types/categoria";
import { Subcategoria } from "../../types/subcategoria";
import SubcategoriasTable from "./tablasubcategoria";
import FormularioUniversal from "../../../../components/formulario";

interface BuscarSubcategoriaProps {
    subcategorias: Subcategoria[];
    setSubcategorias: React.Dispatch<React.SetStateAction<Subcategoria[]>>;
    categorias: Categoria[];
    loading: boolean;
    error: string | null;
}

const BuscarSubcategoria: React.FC<BuscarSubcategoriaProps> = ({
    subcategorias,
    setSubcategorias,
    categorias,
    loading,
    error
}) => {
    const [valoresFormulario, setValoresFormulario] = useState({
        id_subcategoria: "",
        categoria: "", // usamos "categoria" para el id_categoria en el select
        nombre: "",
        descripcion: "",
        fecha_creacion: "",
        fecha_actualizacion: "",
    });

    const [subcategoriasFiltradas, setSubcategoriasFiltradas] = useState<Subcategoria[]>(subcategorias);

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

        const filtradas = subcategorias.filter((sub) => {
            return Object.entries(nuevosValores).every(([clave, valor]) => {
                if (!valor) return true;
        
                let dato: string | number | undefined;
        
                // 👇 Filtrar por categoría (usando el id)
                if (clave === "categoria") {
                    dato = String(sub.categoria.id_categoria);
                } else if (clave.includes("fecha")) {
                    // 👇 Para fechas
                    dato = (sub as any)[clave];
                    const normalizarFecha = (fechaStr: string) => {
                        if (!fechaStr) return "";
                        if (fechaStr.includes("/")) {
                            const [dia, mes, anio] = fechaStr.split("/");
                            return `${anio}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
                        }
                        if (fechaStr.includes("-")) {
                            const partes = fechaStr.split("-");
                            if (partes[0].length === 4) return fechaStr;
                        }
                        return "";
                    };
        
                    const fechaNormalizada = normalizarFecha(String(dato));
                    return fechaNormalizada === valor;
                } else {
                    // 👇 Para los demás campos normales
                    dato = (sub as any)[clave];
                }
        
                return normalizar(dato || "").includes(normalizar(valor));
            });
        });
        

        setSubcategoriasFiltradas(filtradas);
    };

    return (
        <div>
            <h3>🔍 Buscar Subcategoría</h3>
            {loading && <p>Cargando subcategorías...</p>}
            {error && <p>Error: {error}</p>}

            <FormularioUniversal
                titulo=""
                campos={[
                    {
                        nombre: "id_subcategoria",
                        tipo: "text",
                        etiqueta: "ID Subcategoría",
                        placeholder: "ID Subcategoría",
                    },
                    {
                        nombre: "categoria",
                        tipo: "select",
                        etiqueta: "Categoría",
                        opciones: categorias.map((categoria) => ({
                            valor: String(categoria.id_categoria), // Importante que sea string
                            etiqueta: categoria.nombre,
                        })),
                    },
                    {
                        nombre: "nombre",
                        tipo: "text",
                        etiqueta: "Nombre",
                        placeholder: "Nombre de la subcategoría",
                    },
                ]}
                valoresIniciales={valoresFormulario}
                onChange={handleChange}
                onSubmit={(data) => {
                    console.log("Datos enviados:", data);
                    // Aquí podrías hacer una búsqueda por backend si tienes un endpoint
                }}
            />

            <SubcategoriasTable
                subcategorias={subcategoriasFiltradas}
                categorias={categorias}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default BuscarSubcategoria;
