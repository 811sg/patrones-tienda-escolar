import { Order } from "@/lib/types";
import { OrderObserver } from "./OrderObserver";

/** PATRÓN: Observer — Rol: "ConcreteObserver" */
export class EmailNotifierObserver implements OrderObserver {
  readonly name = "Notificador de correo";

  onOrderStateChanged(
    order: Order,
    previousState: string,
    newState: string
  ): void {
    switch (newState) {
      case "Pagado":
        console.log(
          `[email] Enviando confirmación de pago del pedido ${order.id} a ${order.customer.email}`
        );
        break;
      case "Enviado":
        console.log(
          `[email] Enviando aviso de envío del pedido ${order.id} a ${order.customer.email}`
        );
        break;
      case "Entregado":
        console.log(
          `[email] Enviando confirmación de entrega del pedido ${order.id} a ${order.customer.email}`
        );
        break;
      case "Cancelado":
        console.log(
          `[email] Enviando aviso de cancelación del pedido ${order.id} a ${order.customer.email}`
        );
        break;
    }
  }
}