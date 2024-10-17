import { EntityManager } from "typeorm";
import { CartService, EventBusService } from "../services";
type InjectedDependencies = {
    eventBusService: EventBusService;
    cartService: CartService;
    manager: EntityManager;
};
declare class CartSubscriber {
    protected readonly manager_: EntityManager;
    protected readonly cartService_: CartService;
    protected readonly eventBus_: EventBusService;
    constructor({ manager, cartService, eventBusService }: InjectedDependencies);
    onCustomerUpdated(cartId: any): Promise<void>;
}
export default CartSubscriber;
