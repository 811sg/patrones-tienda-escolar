import type { Order } from "@/lib/types";
import type { OrderState } from "./OrderState";
import { PendienteState } from "./PendienteState";
import { OrderSubject } from "../observer/OrderSubject";
import type { OrderObserver } from "../observer/OrderObserver";

/**
 * PATRÓN: State — Rol: "Context"
 * PATRÓN: Observer — Rol: también actúa como punto de enganche del "Subject"
 *
 * Mantiene una referencia al estado actual y le delega todo el
 * comportamiento del ciclo de vida del pedido (State). Cada vez que
 * un ConcreteState mueve al contexto al siguiente estado
 * (setState), el contexto avisa a los observadores suscritos
 * (Observer) — los ConcreteState no saben que esto ocurre.
 */
export class PedidoContext {
  private state: OrderState;
  private historial: string[] = [];
  private readonly subject = new OrderSubject();

  constructor(
    private readonly order: Order,
    estadoInicial: OrderState = new PendienteState()
  ) {
    this.state = estadoInicial;
    this.historial.push(estadoInicial.name);
  }

  subscribe(observer: OrderObserver) {
    this.subject.subscribe(observer);
  }

  unsubscribe(observer: OrderObserver) {
    this.subject.unsubscribe(observer);
  }

  setState(state: OrderState) {
    const estadoAnterior = this.state.name;
    this.state = state;
    this.historial.push(state.name);
    this.subject.notify(this.order, estadoAnterior, state.name);
  }

  getStateName(): string {
    return this.state.name;
  }

  getHistorial(): string[] {
    return this.historial;
  }

  avanzar() {
    this.state.avanzar(this);
  }

  cancelar() {
    this.state.cancelar(this);
  }
}