export interface Producto {
  id_producto: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  referencia: "unico" | "fotocopia" | "por_mayor" | "personalizado";
  estado: "disponible" | "agotado" | "descontinuado";
  popularidad: number;
  fecha_creacion: string;
  categoria: { 
    id_categoria: number;  // ID de la categoría
    nombre: string;  // Nombre de la categoría
  };
  subcategoria: { 
    id_subcategoria: number;  // ID de la subcategoría
    nombre: string;  // Nombre de la subcategoría
  };
  proveedor: string;
  marca: string;
  descuento: number;
  tags: string;
}