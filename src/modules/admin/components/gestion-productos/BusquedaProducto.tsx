import React, { useState } from "react";
import { Producto } from "../../types/productos";
import { Categoria } from "../../types/categoria";
import { Subcategoria } from "../../types/subcategoria";
import ProductosTable from "./tablaproductos-universal";
import FormularioUniversal from "../../../../components/formulario";

interface BuscarProductoProps {
    productos: Producto[];
    setProductos: React.Dispatch<React.SetStateAction<Producto[]>>;
    categorias: Categoria[];
    subcategorias: Subcategoria[];
    loading: boolean;
    error: string | null;
}

const BuscarProducto: React.FC<BuscarProductoProps> = ({ productos, setProductos, categorias, subcategorias, loading, error }) => {
    const [valoresFormulario, setValoresFormulario] = useState({
        id_producto: "",
        nombre: "",
        descripcion: "",
        categoria: "",
        subcategoria: "",
        precio: "",
        stock: "",
        descuento: "",
        estado: "",
        tags: "",
        fecha_creacion: "",
        fecha_actualizacion: "",
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

                // 🔁 Manejo especial para fecha
                if (clave === "fecha_creacion" || clave === "fecha_actualizacion") {
                    const fecha = new Date((producto as any)[clave]);
                    const fechaFormateada = fecha.toISOString().split("T")[0];
                    return fechaFormateada === valor;
                }

                // 🔁 Manejo especial para categoría y subcategoría
                if (clave === "categoria") {
                    return String(producto.categoria?.id_categoria) === valor;
                }

                if (clave === "subcategoria") {
                    return String(producto.subcategoria?.id_subcategoria) === valor;
                }
                const datoProducto = (producto as any)[clave];

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
                        nombre: "subcategoria",
                        tipo: "select",
                        etiqueta: "Subcategoría",
                        opciones: subcategorias.map((sub) => ({
                            valor: String(sub.id_subcategoria),
                            etiqueta: sub.nombre,
                        })),
                    },
                    { nombre: "precio", tipo: "number", etiqueta: "Precio", placeholder: "Precio del producto" },
                    { nombre: "stock", tipo: "number", etiqueta: "Stock", placeholder: "Cantidad en stock" },
                    { nombre: "descuento", tipo: "number", etiqueta: "Descuento", placeholder: "Descuento en porcentaje" },
                    {
                        nombre: "estado", tipo: "select", etiqueta: "Estado", opciones: [
                            { valor: "disponible", etiqueta: "Disponible" },
                            { valor: "agotado", etiqueta: "Agotado" },
                            { valor: "descontinuado", etiqueta: "Descontinuado" }
                        ]
                    },
                    { nombre: "tags", tipo: "text", etiqueta: "Etiquetas", placeholder: "Etiquetas separadas por coma" },
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
