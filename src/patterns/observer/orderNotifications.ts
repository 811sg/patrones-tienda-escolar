import type { Order } from "@/lib/types";
import { EmailNotifierObserver } from "./EmailNotifierObserver";
import { InventoryObserver } from "./InventoryObserver";
import { WhatsAppObserver } from "./WhatsAppObserver";
import { PedidoContext } from "../state/PedidoContext";
/**
 * Fábrica de PedidoContext con los observadores ya suscritos.
 * El checkout solo llama a crearPedidoContext(pedido) y luego usa
 * avanzar()/cancelar() — no conoce a EmailNotifierObserver,
 * InventoryObserver ni WhatsAppObserver directamente.
 */
export function crearPedidoContext(order: Order): PedidoContext {
  const context = new PedidoContext(order);
  context.subscribe(new EmailNotifierObserver());
  context.subscribe(new InventoryObserver());
  context.subscribe(new WhatsAppObserver());
  return context;
}