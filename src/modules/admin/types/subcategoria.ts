export interface Subcategoria {
  id_subcategoria: number;
  nombre: string;
  estado: string;
  created_at: string;
  updated_at: string;
  categoria: {
    id_categoria: number; // ID de la categoría
    nombre: string; // Nombre de la categoría
  };
}