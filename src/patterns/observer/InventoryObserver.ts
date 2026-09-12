import { Order } from "@/lib/types";
import { OrderObserver } from "./OrderObserver";

/** PATRÓN: Observer — Rol: "ConcreteObserver" */
export class InventoryObserver implements OrderObserver {
  readonly name = "Actualizador de inventario";

  onOrderStateChanged(
    order: Order,
    previousState: string,
    newState: string
  ): void {
    if (newState === "Pagado") {
      console.log(
        `[inventario] Descontando stock de ${order.items.length} producto(s) del pedido ${order.id}`
      );
    } else if (newState === "Cancelado" && previousState !== "Pendiente") {
      console.log(
        `[inventario] Restituyendo stock de ${order.items.length} producto(s) del pedido ${order.id}`
      );
    }
  }
}