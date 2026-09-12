import { Order } from "@/lib/types";

/**
 * PATRÓN: Observer — Rol: "Observer"
 * Antes solo avisaba de la confirmación del pedido. Ahora es genérico
 * a cualquier transición de estado (PATRÓN: State), para poder
 * engancharse a PedidoContext.setState() sin acoplar los dos patrones.
 */
export interface OrderObserver {
  readonly name: string;
  onOrderStateChanged(
    order: Order,
    previousState: string,
    newState: string
  ): void;
}