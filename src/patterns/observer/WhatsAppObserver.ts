import { Order } from "@/lib/types";
import { OrderObserver } from "./OrderObserver";

/** PATRÓN: Observer — Rol: "ConcreteObserver" */
export class WhatsAppObserver implements OrderObserver {

    readonly name = "Notificador de WhatsApp";

    onOrderStateChanged(
      order: Order,
      previousState: string,
      newState: string
    ): void {
        console.log(
            `[WhatsApp] Pedido ${order.id}: ${previousState} → ${newState}`
        );
    }
}