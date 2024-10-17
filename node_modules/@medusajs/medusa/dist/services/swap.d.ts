import { Cart, LineItem, Order, ReturnItem, Swap } from "../models";
import { CartService, CustomShippingOptionService, EventBusService, FulfillmentService, LineItemAdjustmentService, LineItemService, OrderService, PaymentProviderService, ProductVariantInventoryService, ReturnService, ShippingOptionService, TotalsService } from "./index";
import { EntityManager } from "typeorm";
import { FindConfig, Selector, WithRequiredProperty } from "../types/common";
import { CreateShipmentConfig } from "../types/fulfillment";
import { SwapRepository } from "../repositories/swap";
import { TransactionBaseService } from "../interfaces";
type InjectedProps = {
    manager: EntityManager;
    swapRepository: typeof SwapRepository;
    cartService: CartService;
    orderService: OrderService;
    returnService: ReturnService;
    totalsService: TotalsService;
    eventBusService: EventBusService;
    lineItemService: LineItemService;
    productVariantInventoryService: ProductVariantInventoryService;
    fulfillmentService: FulfillmentService;
    shippingOptionService: ShippingOptionService;
    paymentProviderService: PaymentProviderService;
    lineItemAdjustmentService: LineItemAdjustmentService;
    customShippingOptionService: CustomShippingOptionService;
};
/**
 * Handles swaps
 */
declare class SwapService extends TransactionBaseService {
    static Events: {
        CREATED: string;
        RECEIVED: string;
        SHIPMENT_CREATED: string;
        PAYMENT_COMPLETED: string;
        PAYMENT_CAPTURED: string;
        PAYMENT_CAPTURE_FAILED: string;
        PROCESS_REFUND_FAILED: string;
        REFUND_PROCESSED: string;
        FULFILLMENT_CREATED: string;
    };
    protected readonly swapRepository_: typeof SwapRepository;
    protected readonly cartService_: CartService;
    protected readonly eventBus_: EventBusService;
    protected readonly orderService_: OrderService;
    protected readonly returnService_: ReturnService;
    protected readonly totalsService_: TotalsService;
    protected readonly lineItemService_: LineItemService;
    protected readonly fulfillmentService_: FulfillmentService;
    protected readonly shippingOptionService_: ShippingOptionService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly lineItemAdjustmentService_: LineItemAdjustmentService;
    protected readonly customShippingOptionService_: CustomShippingOptionService;
    protected readonly productVariantInventoryService_: ProductVariantInventoryService;
    constructor({ swapRepository, eventBusService, cartService, totalsService, returnService, lineItemService, paymentProviderService, shippingOptionService, fulfillmentService, orderService, productVariantInventoryService, customShippingOptionService, lineItemAdjustmentService, }: InjectedProps);
    /**
     * Transform find config object for retrieval.
     *
     * @param config parsed swap find config
     * @return transformed find swap config
     */
    protected transformQueryForCart(config: Omit<FindConfig<Swap>, "select"> & {
        select?: string[];
    }): Omit<FindConfig<Swap>, "select"> & {
        select?: string[];
    } & {
        cartSelects: FindConfig<Cart>["select"];
        cartRelations: FindConfig<Cart>["relations"];
    };
    /**
     * Retrieves a swap with the given id.
     *
     * @param swapId - the id of the swap to retrieve
     * @param config - the configuration to retrieve the swap
     * @return the swap
     */
    retrieve(swapId: string, config?: Omit<FindConfig<Swap>, "select"> & {
        select?: string[];
    }): Promise<Swap | never>;
    /**
     * Retrieves a swap based on its associated cart id
     *
     * @param cartId - the cart id that the swap's cart has
     * @param relations - the relations to retrieve swap
     * @return the swap
     */
    retrieveByCartId(cartId: string, relations?: FindConfig<Swap>["relations"]): Promise<Swap | never>;
    /**
     * List swaps.
     *
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    list(selector: Selector<Swap>, config?: FindConfig<Swap>): Promise<Swap[]>;
    /**
     * List swaps.
     *
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    listAndCount(selector: Selector<Swap>, config?: FindConfig<Swap>): Promise<[Swap[], number]>;
    /**
     * Creates a swap from an order, with given return items, additional items
     * and an optional return shipping method.
     *
     * @param order - the order to base the swap off
     * @param returnItems - the items to return in the swap
     * @param additionalItems - the items to send to the customer
     * @param returnShipping - an optional shipping method for returning the returnItems
     * @param custom - contains relevant custom information. This object may
     *  include no_notification which will disable sending notification when creating
     *  swap. If set, it overrules the attribute inherited from the order
     * @return the newly created swap
     */
    create(order: Order, returnItems: WithRequiredProperty<Partial<ReturnItem>, "item_id">[], additionalItems?: Pick<LineItem, "variant_id" | "quantity">[], returnShipping?: {
        option_id: string;
        price?: number;
    }, custom?: {
        no_notification?: boolean;
        idempotency_key?: string;
        allow_backorder?: boolean;
        location_id?: string;
    }): Promise<Swap | never>;
    /**
     * Process difference for the requested swap.
     *
     * @param swapId id of a swap being processed
     * @return processed swap
     */
    processDifference(swapId: string): Promise<Swap | never>;
    /**
     * Update the swap record.
     *
     * @param swapId id of a swap to update
     * @param update new data
     * @return updated swap record
     */
    update(swapId: string, update: Partial<Swap>): Promise<Swap>;
    /**
     * Creates a cart from the given swap. The cart can be used to pay
     * for differences associated with the swap. The swap represented by the
     * swapId must belong to the order. Fails if there is already a cart on the
     * swap.
     *
     * @param swapId - the id of the swap to create the cart from
     * @param customShippingOptions - the shipping options
     * @return the swap with its cart_id prop set to the id of the new cart.
     */
    createCart(swapId: string, customShippingOptions?: {
        option_id: string;
        price: number;
    }[], context?: {
        sales_channel_id?: string;
    }): Promise<Swap | never>;
    /**
     * Register a cart completion
     *
     * @param swapId - The id of the swap
     * @return swap related to the cart
     */
    registerCartCompletion(swapId: string): Promise<Swap | never>;
    /**
     * Cancels a given swap if possible. A swap can only be canceled if all
     * related returns, fulfillments, and payments have been canceled. If a swap
     * is associated with a refund, it cannot be canceled.
     *
     * @param swapId - the id of the swap to cancel.
     * @return the canceled swap.
     */
    cancel(swapId: string): Promise<Swap | never>;
    /**
     * Fulfills the additional items associated with the swap. Will call the
     * fulfillment providers associated with the shipping methods.
     *
     * @param {string} swapId - the id of the swap to fulfill,
     * @param {object} config - optional configurations, includes optional metadata to attach to the shipment, and a no_notification flag.
     * @return {Promise<Swap>} the updated swap with new status and fulfillments.
     */
    createFulfillment(swapId: string, config?: CreateShipmentConfig): Promise<Swap | never>;
    /**
     * Cancels a fulfillment (if related to a swap)
     *
     * @param fulfillmentId - the ID of the fulfillment to cancel
     * @return updated swap
     */
    cancelFulfillment(fulfillmentId: string): Promise<Swap | never>;
    /**
     * Marks a fulfillment as shipped and attaches tracking numbers.
     *
     * @param swapId - the id of the swap that has been shipped.
     * @param fulfillmentId - the id of the specific fulfillment that has been shipped
     * @param trackingLinks - the tracking numbers associated with the shipment
     * @param config - optional configurations, includes optional metadata to attach to the shipment, and a noNotification flag.
     * @return the updated swap with new fulfillments and status.
     */
    createShipment(swapId: string, fulfillmentId: string, trackingLinks?: {
        tracking_number: string;
    }[], config?: CreateShipmentConfig): Promise<Swap | never>;
    /**
     * Dedicated method to delete metadata for a swap.
     *
     * @param swapId - the order to delete metadata from.
     * @param key - key for metadata field
     * @return resolves to the updated result.
     */
    deleteMetadata(swapId: string, key: string): Promise<Swap | never>;
    /**
     * Registers the swap return items as received so that they cannot be used
     * as a part of other swaps/returns.
     *
     * @param id - the id of the order with the swap.
     * @return the resulting order
     */
    registerReceived(id: any): Promise<Swap | never>;
    protected areReturnItemsValid(returnItems: WithRequiredProperty<Partial<ReturnItem>, "item_id">[]): Promise<boolean>;
}
export default SwapService;
