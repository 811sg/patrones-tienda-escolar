import { Order } from "@/lib/types";
import { OrderObserver } from "./OrderObserver";

/** PATRÓN: Observer — Rol: "ConcreteObserver" */
export class WhatsAppObserver implements OrderObserver {
    
    readonly name = "Notificador de WhatsApp";

    onOrderConfirmed(order: Order): void {
        console.log(
            `[WhatsApp] Pedido ${order.id} confirmado`
        );
    }
}