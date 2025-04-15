import React, { useEffect, useState } from "react";
import "../styles/panel-principal.css";
import ProductosTable from "../../universal/components/tablaproductos-universal";
import Tabs from "../../../components/tabs";
import AgregarProducto from "./agregarProducto";

interface Producto {
  id_producto: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  tipo_producto: string;
  referencia: string;
  estado: string;
  popularidad: number;
  fecha_creacion: string;
  categoria: string;
  proveedor: string;
  marca: string;
  descuento: number;
  tags: string[];
}

const GestionProductos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tabSeleccionado, setTabSeleccionado] = useState<string>("Lista");
  const [formData, setFormData] = useState<Partial<Producto>>({});

  // ✅ useEffect correctamente ubicado
  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los productos");
        }
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ✅ handleAgregarProducto también afuera
  const handleAgregarProducto = async (nuevoProducto: Partial<Producto>) => {
    try {
      console.log("📦 Producto a enviar:", nuevoProducto); // 👈 Agrega esto
  
      const res = await fetch("http://localhost:3000/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });
  
      if (!res.ok) {
        const errorText = await res.text(); // 👈 Captura error en texto
        console.error("❌ Respuesta con error:", errorText); // 👈 Muestra el detalle
        throw new Error("Error al agregar el producto");
      }
  
      const productoAgregado = await res.json();
      setProductos([...productos, productoAgregado]);
      setFormData({});
      alert("Producto agregado correctamente ✅");
    } catch (err: any) {
      console.error("Error al guardar producto:", err.message);
      alert("❌ No se pudo guardar el producto");
    }
  };
  

  return (
    <div className="gestion-productos">
      <h2>🛒 Gestión de Productos</h2>
      <p>Visualiza todos los productos registrados en tu sistema.</p>

      <Tabs
        opciones={["Lista", "Agregar", "Editar", "Eliminar", "Buscar"]}
        valorInicial="Lista"
        onChange={(valor) => setTabSeleccionado(valor)}
      />

      {tabSeleccionado === "Lista" && (
        <section className="dashboard-cards">
          <div className="card">
            <h3>📋 Lista de Productos</h3>
            <ProductosTable productos={productos} loading={loading} error={error} />
            <br />
            <p>Total: {productos.length} productos</p>
          </div>
        </section>
      )}

      {tabSeleccionado === "Agregar" && (
        <section className="dashboard-cards">
          <div className="card">           
            <AgregarProducto
              formData={formData}
              setFormData={setFormData}
              handleAgregarProducto={handleAgregarProducto}
              productos={productos}
              setProductos={setProductos}
              loading={loading}
              error={error} 
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default GestionProductos;
