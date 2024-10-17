import { EntityManager, UpdateResult } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { DraftOrder } from "../models";
import { DraftOrderRepository } from "../repositories/draft-order";
import { OrderRepository } from "../repositories/order";
import { PaymentRepository } from "../repositories/payment";
import { FindConfig } from "../types/common";
import { DraftOrderCreateProps } from "../types/draft-orders";
import CartService from "./cart";
import CustomShippingOptionService from "./custom-shipping-option";
import EventBusService from "./event-bus";
import LineItemService from "./line-item";
import ProductVariantService from "./product-variant";
import ShippingOptionService from "./shipping-option";
type InjectedDependencies = {
    manager: EntityManager;
    draftOrderRepository: typeof DraftOrderRepository;
    paymentRepository: typeof PaymentRepository;
    orderRepository: typeof OrderRepository;
    eventBusService: EventBusService;
    cartService: CartService;
    lineItemService: LineItemService;
    productVariantService: ProductVariantService;
    shippingOptionService: ShippingOptionService;
    customShippingOptionService: CustomShippingOptionService;
};
/**
 * Handles draft orders
 * @implements {BaseService}
 */
declare class DraftOrderService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
        UPDATED: string;
    };
    protected readonly draftOrderRepository_: typeof DraftOrderRepository;
    protected readonly paymentRepository_: typeof PaymentRepository;
    protected readonly orderRepository_: typeof OrderRepository;
    protected readonly eventBus_: EventBusService;
    protected readonly cartService_: CartService;
    protected readonly lineItemService_: LineItemService;
    protected readonly productVariantService_: ProductVariantService;
    protected readonly shippingOptionService_: ShippingOptionService;
    protected readonly customShippingOptionService_: CustomShippingOptionService;
    constructor({ draftOrderRepository, paymentRepository, orderRepository, eventBusService, cartService, lineItemService, productVariantService, shippingOptionService, customShippingOptionService, }: InjectedDependencies);
    /**
     * Retrieves a draft order with the given id.
     * @param draftOrderId - id of the draft order to retrieve
     * @param config - query object for findOne
     * @return the draft order
     */
    retrieve(draftOrderId: string, config?: FindConfig<DraftOrder>): Promise<DraftOrder | never>;
    /**
     * Retrieves a draft order based on its associated cart id
     * @param cartId - cart id that the draft orders's cart has
     * @param config - query object for findOne
     * @return the draft order
     */
    retrieveByCartId(cartId: string, config?: FindConfig<DraftOrder>): Promise<DraftOrder | never>;
    /**
     * Deletes draft order idempotently.
     * @param {string} draftOrderId - id of draft order to delete
     * @return {Promise<DraftOrder | undefined>} empty promise
     */
    delete(draftOrderId: string): Promise<DraftOrder | undefined>;
    /**
     * Lists draft orders alongside the count
     * @param selector - query selector to filter draft orders
     * @param config - query config
     * @return draft orders
     */
    listAndCount(selector: any, config?: FindConfig<DraftOrder>): Promise<[DraftOrder[], number]>;
    /**
     * Lists draft orders
     * @param selector - query object for find
     * @param config - configurable attributes for find
     * @return list of draft orders
     */
    list(selector: any, config?: FindConfig<DraftOrder>): Promise<DraftOrder[]>;
    /**
     * Creates a draft order.
     * @param data - data to create draft order from
     * @return the created draft order
     */
    create(data: DraftOrderCreateProps): Promise<DraftOrder>;
    /**
     * Registers a draft order as completed, when an order has been completed.
     * @param draftOrderId - id of draft order to complete
     * @param orderId - id of order completed from draft order cart
     * @return the created order
     */
    registerCartCompletion(draftOrderId: string, orderId: string): Promise<UpdateResult>;
    /**
     * Updates a draft order with the given data
     * @param id - id of the draft order
     * @param data - values to update the order with
     * @return the updated draft order
     */
    update(id: string, data: {
        no_notification_order: boolean;
    }): Promise<DraftOrder>;
}
export default DraftOrderService;
