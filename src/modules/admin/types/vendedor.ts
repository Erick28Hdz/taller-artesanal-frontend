import { Usuario } from "./usuario";
export interface Vendedor extends Usuario {
    cantidad_pedidos?: number;
    cantidad_devoluciones?: number;
    productos_activos?: number;
    ingresos_totales?: number;
    total_ventas?: number;
    estado?: "activo" | "suspendido" | "pendiente";
    ultimo_inicio_sesion?: string;
  }
