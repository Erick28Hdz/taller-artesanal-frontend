import React, { useState } from "react";
import { Producto } from "../../types/productos";
import ProductosTable from "../../../universal/components/tablaproductos-universal";
import FormularioUniversal from "../../../../components/formulario";

interface BuscarProductoProps {
    productos: Producto[];
    setProductos: React.Dispatch<React.SetStateAction<Producto[]>>;
    loading: boolean;
    error: string | null;
}

const BuscarProducto: React.FC<BuscarProductoProps> = ({ productos, setProductos, loading, error }) => {
    const [valoresFormulario, setValoresFormulario] = useState({
        id_producto: "",
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: "",
        stock: "",
        fecha_creacion: "",
        fecha_actualizacion: ""
    });

    const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(productos);

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

        const filtrados = productos.filter((producto) => {
            return Object.entries(nuevosValores).every(([clave, valor]) => {
                if (!valor) return true;

                const datoProducto = (producto as any)[clave];

                if (clave === "fecha_creacion" || clave === "fecha_actualizacion") {
                    if (!datoProducto) return false;

                    const fecha = typeof datoProducto === "string" ? new Date(datoProducto) : datoProducto;
                    const fechaFormateada = fecha.toISOString().split("T")[0];

                    return fechaFormateada === valor;
                }

                return normalizar(datoProducto || "").includes(normalizar(valor));
            });
        });

        setProductosFiltrados(filtrados);
    };

    return (
        <div>
            <h3>🔍 Buscar Producto</h3>
            {loading && <p>Cargando productos...</p>}
            {error && <p>Error: {error}</p>}

            <FormularioUniversal
                titulo="Filtrar Productos"
                campos={[
                    { nombre: "id_producto", tipo: "text", etiqueta: "ID del Producto", placeholder: "ID del producto" },
                    { nombre: "nombre", tipo: "text", etiqueta: "Nombre", placeholder: "Nombre del producto" },
                    { nombre: "descripcion", tipo: "text", etiqueta: "Descripción", placeholder: "Descripción del producto" },
                    { nombre: "categoria", tipo: "text", etiqueta: "Categoría", placeholder: "Categoría" },
                    { nombre: "precio", tipo: "number", etiqueta: "Precio", placeholder: "Precio del producto" },
                    { nombre: "stock", tipo: "number", etiqueta: "Stock", placeholder: "Cantidad en stock" },
                    { nombre: "fecha_creacion", tipo: "date", etiqueta: "Fecha de Creación", placeholder: "Fecha de creación" },
                    { nombre: "fecha_actualizacion", tipo: "date", etiqueta: "Fecha de Actualización", placeholder: "Fecha de actualización" },
                ]}
                valoresIniciales={valoresFormulario}
                onChange={handleChange}
                onSubmit={(data) => {
                    console.log("Datos enviados para búsqueda:", data);
                }}
            />

            <ProductosTable productos={productosFiltrados} loading={loading} error={error} />
        </div>
    );
};

export default BuscarProducto;
