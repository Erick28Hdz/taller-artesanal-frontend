export interface Categoria {
  id_categoria: number;
  nombre: string;
  estado: "activo" | "inactivo";
  created_at: string;
  updated_at: string;
  categoria_padre_id?: number | null;
  fecha_creacion: string;
  fecha_actualizacion: string;
}
