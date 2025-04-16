import { Usuario } from './usuario';

export interface Vendedor extends Usuario {
    id_rol: 5;
    rol?: {
      nombre: 'vendedor';
    };
    tipo_usuario?: 'vendedor';
  }