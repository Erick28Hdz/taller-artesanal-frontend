export interface Usuario {
  id_usuario: number;
  id_rol: number;
  rol?: {
    nombre: string;
  };
  nombre: string;
  apellido: string;
  genero: string;
  fecha_nacimiento: string;
  documento: string;
  email: string;
  contrasena: string;
  telefono?: string;
  token_verificacion?: string;
  pais: string;
  provincia: string;
  ciudad: string;
  direccion: string;
  codigo_postal: string;
  imagen_perfil: string | null;
  fecha_creacion: string;
  fecha_actualizacion: string;
}
