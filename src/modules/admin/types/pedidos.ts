import { Usuario } from "./usuario"; // Si tienes una interfaz de Usuario
//import { DetallePedido } from "./detalle-pedido.interface"; // Por crear
//import { Pago } from "./pago.interface"; // Por crear
//import { Factura } from "./factura.interface"; // Por crear
//import { Envio } from "./envio.interface"; // Por crear
//import { Devolucion } from "./devolucion.interface";// // Por crear

export interface Pedido {
  id_pedido: number;
  usuario: Usuario;
  id_direccion?: number;
  fecha_pedido: string;
  estado: "pendiente" | "pagado" | "enviado" | "entregado" | "cancelado" | "reembolsado";
  metodo_pago: "tarjeta" | "PayPal" | "transferencia" | "contra entrega";
  referencia_pago?: string;
  total: number;
  impuesto: number;
  descuento_aplicado: number;
  tracking_envio?: string;
  notas?: string;
  created_at: string;
  updated_at: string;
  //detalles: DetallePedido[];
  //pagos: Pago[];
  //facturas: Factura[];
  //envios: Envio[];
  //devoluciones: Devolucion[];
}
