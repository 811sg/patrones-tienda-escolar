import type { PedidoContext } from "./PedidoContext";
import type { OrderState } from "./OrderState";
import { PagadoState } from "./PagadoState";

/** PATRÓN: State — Rol: "ConcreteState" */
export class EnRevisionState implements OrderState {

  readonly name = "En revisión";

  avanzar(context: PedidoContext): void {
    context.setState(new PagadoState());
  }

  cancelar(context: PedidoContext): void {
    throw new Error("El pedido en revisión no se puede cancelar.");
  }

}