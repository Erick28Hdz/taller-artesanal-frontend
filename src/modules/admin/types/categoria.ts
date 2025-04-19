import { Subcategoria } from "./subcategoria"; // Asegúrate de tener este archivo

export interface Categoria {
  id_categoria: number;
  nombre: string;
  estado: "activo" | "inactivo";
  created_at: string;
  updated_at: string;
  subcategorias?: Subcategoria[]; // opcional, si lo traes con relaciones
}