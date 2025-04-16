export interface Producto {
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