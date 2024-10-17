import { IInventoryService } from "@medusajs/types";
import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { CartService, CustomerService, DiscountService, DraftOrderService, FulfillmentProviderService, FulfillmentService, GiftCardService, LineItemService, NewTotalsService, PaymentProviderService, ProductVariantInventoryService, RegionService, ShippingOptionService, ShippingProfileService, TaxProviderService, TotalsService } from ".";
import { TransactionBaseService } from "../interfaces";
import { Address, Cart, GiftCard, LineItem, Order, Return, TrackingLink } from "../models";
import { AddressRepository } from "../repositories/address";
import { OrderRepository } from "../repositories/order";
import { FindConfig, QuerySelector, Selector } from "../types/common";
import { FulFillmentItemType } from "../types/fulfillment";
import { TotalsContext, UpdateOrderInput } from "../types/orders";
import { CreateShippingMethodDto } from "../types/shipping-options";
import EventBusService from "./event-bus";
import { RemoteLink } from "@medusajs/modules-sdk";
export declare const ORDER_CART_ALREADY_EXISTS_ERROR = "Order from cart already exists";
type InjectedDependencies = {
    manager: EntityManager;
    orderRepository: typeof OrderRepository;
    customerService: CustomerService;
    paymentProviderService: PaymentProviderService;
    shippingOptionService: ShippingOptionService;
    shippingProfileService: ShippingProfileService;
    discountService: DiscountService;
    fulfillmentProviderService: FulfillmentProviderService;
    fulfillmentService: FulfillmentService;
    lineItemService: LineItemService;
    totalsService: TotalsService;
    newTotalsService: NewTotalsService;
    taxProviderService: TaxProviderService;
    regionService: RegionService;
    cartService: CartService;
    addressRepository: typeof AddressRepository;
    giftCardService: GiftCardService;
    draftOrderService: DraftOrderService;
    inventoryService: IInventoryService;
    eventBusService: EventBusService;
    featureFlagRouter: FlagRouter;
    productVariantInventoryService: ProductVariantInventoryService;
    remoteLink: RemoteLink;
};
declare class OrderService extends TransactionBaseService {
    static readonly Events: {
        GIFT_CARD_CREATED: string;
        PAYMENT_CAPTURED: string;
        PAYMENT_CAPTURE_FAILED: string;
        SHIPMENT_CREATED: string;
        FULFILLMENT_CREATED: string;
        FULFILLMENT_CANCELED: string;
        RETURN_REQUESTED: string;
        ITEMS_RETURNED: string;
        RETURN_ACTION_REQUIRED: string;
        REFUND_CREATED: string;
        REFUND_FAILED: string;
        SWAP_CREATED: string;
        PLACED: string;
        UPDATED: string;
        CANCELED: string;
        COMPLETED: string;
    };
    protected readonly orderRepository_: typeof OrderRepository;
    protected readonly customerService_: CustomerService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly shippingOptionService_: ShippingOptionService;
    protected readonly shippingProfileService_: ShippingProfileService;
    protected readonly discountService_: DiscountService;
    protected readonly fulfillmentProviderService_: FulfillmentProviderService;
    protected readonly fulfillmentService_: FulfillmentService;
    protected readonly lineItemService_: LineItemService;
    protected readonly totalsService_: TotalsService;
    protected readonly newTotalsService_: NewTotalsService;
    protected readonly taxProviderService_: TaxProviderService;
    protected readonly regionService_: RegionService;
    protected readonly cartService_: CartService;
    protected readonly addressRepository_: typeof AddressRepository;
    protected readonly giftCardService_: GiftCardService;
    protected readonly draftOrderService_: DraftOrderService;
    protected readonly inventoryService_: IInventoryService;
    protected readonly eventBus_: EventBusService;
    protected readonly featureFlagRouter_: FlagRouter;
    protected remoteLink_: RemoteLink;
    protected readonly productVariantInventoryService_: ProductVariantInventoryService;
    constructor({ orderRepository, customerService, paymentProviderService, shippingOptionService, shippingProfileService, discountService, fulfillmentProviderService, fulfillmentService, lineItemService, totalsService, newTotalsService, taxProviderService, regionService, cartService, remoteLink, addressRepository, giftCardService, draftOrderService, eventBusService, featureFlagRouter, productVariantInventoryService, }: InjectedDependencies);
    /**
     * @param selector the query object for find
     * @param config the config to be used for find
     * @return the result of the find operation
     */
    list(selector: Selector<Order>, config?: FindConfig<Order>): Promise<Order[]>;
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector: QuerySelector<Order>, config?: FindConfig<Order>): Promise<[Order[], number]>;
    protected transformQueryForTotals(config: FindConfig<Order>): {
        relations: string[] | undefined;
        select: FindConfig<Order>["select"];
        totalsToSelect: FindConfig<Order>["select"];
    };
    /**
     * Gets an order by id.
     * @param orderId - id or selector of order to retrieve
     * @param config - config of order to retrieve
     * @return the order document
     */
    retrieve(orderId: string, config?: FindConfig<Order>): Promise<Order>;
    protected retrieveLegacy(orderIdOrSelector: string | Selector<Order>, config?: FindConfig<Order>): Promise<Order>;
    retrieveWithTotals(orderId: string, options?: FindConfig<Order>, context?: TotalsContext): Promise<Order>;
    /**
     * Gets an order by cart id.
     * @param cartId - cart id to find order
     * @param config - the config to be used to find order
     * @return the order document
     */
    retrieveByCartId(cartId: string, config?: FindConfig<Order>): Promise<Order>;
    retrieveByCartIdWithTotals(cartId: string, options?: FindConfig<Order>): Promise<Order>;
    /**
     * Gets an order by id.
     * @param externalId - id of order to retrieve
     * @param config - query config to get order by
     * @return the order document
     */
    retrieveByExternalId(externalId: string, config?: FindConfig<Order>): Promise<Order>;
    /**
     * @param orderId - id of the order to complete
     * @return the result of the find operation
     */
    completeOrder(orderId: string): Promise<Order>;
    /**
     * Creates an order from a cart
     * @return resolves to the creation result.
     * @param cartOrId
     */
    createFromCart(cartOrId: string | Cart): Promise<Order | never>;
    protected createGiftCardsFromLineItem_(order: Order, lineItem: LineItem, manager: EntityManager): Promise<GiftCard>[];
    /**
     * Adds a shipment to the order to indicate that an order has left the
     * warehouse. Will ask the fulfillment provider for any documents that may
     * have been created in regards to the shipment.
     * @param orderId - the id of the order that has been shipped
     * @param fulfillmentId - the fulfillment that has now been shipped
     * @param trackingLinks - array of tracking numbers associated with the shipment
     * @param config - the config of the order that has been shipped
     * @return the resulting order following the update.
     */
    createShipment(orderId: string, fulfillmentId: string, trackingLinks?: TrackingLink[], config?: {
        no_notification?: boolean;
        metadata: Record<string, unknown>;
    }): Promise<Order>;
    /**
     * Updates the order's billing address.
     * @param order - the order to update
     * @param address - the value to set the billing address to
     * @return the result of the update operation
     */
    protected updateBillingAddress(order: Order, address: Address): Promise<void>;
    /**
     * Updates the order's shipping address.
     * @param order - the order to update
     * @param address - the value to set the shipping address to
     * @return the result of the update operation
     */
    protected updateShippingAddress(order: Order, address: Address): Promise<void>;
    addShippingMethod(orderId: string, optionId: string, data?: Record<string, unknown>, config?: CreateShippingMethodDto): Promise<Order>;
    /**
     * Updates an order. Metadata updates should
     * use dedicated method, e.g. `setMetadata` etc. The function
     * will throw errors if metadata updates are attempted.
     * @param orderId - the id of the order. Must be a string that
     *   can be casted to an ObjectId
     * @param update - an object with the update values.
     * @return resolves to the update result.
     */
    update(orderId: string, update: UpdateOrderInput): Promise<Order>;
    /**
     * Cancels an order.
     * Throws if fulfillment process has been initiated.
     * Throws if payment process has been initiated.
     * @param orderId - id of order to cancel.
     * @return result of the update operation.
     */
    cancel(orderId: string): Promise<Order>;
    /**
     * Captures payment for an order.
     * @param orderId - id of order to capture payment for.
     * @return result of the update operation.
     */
    capturePayment(orderId: string): Promise<Order>;
    /**
     * Checks that a given quantity of a line item can be fulfilled. Fails if the
     * fulfillable quantity is lower than the requested fulfillment quantity.
     * Fulfillable quantity is calculated by subtracting the already fulfilled
     * quantity from the quantity that was originally purchased.
     * @param item - the line item to check has sufficient fulfillable
     *   quantity.
     * @param quantity - the quantity that is requested to be fulfilled.
     * @return a line item that has the requested fulfillment quantity
     *   set.
     */
    protected validateFulfillmentLineItem(item: LineItem, quantity: number): LineItem | null;
    /**
     * Creates fulfillments for an order.
     * In a situation where the order has more than one shipping method,
     * we need to partition the order items, such that they can be sent
     * to their respective fulfillment provider.
     * @param orderId - id of order to fulfil.
     * @param itemsToFulfill - items to fulfil.
     * @param config - the config to fulfil.
     * @return result of the update operation.
     */
    createFulfillment(orderId: string, itemsToFulfill: FulFillmentItemType[], config?: {
        no_notification?: boolean;
        location_id?: string;
        metadata?: Record<string, unknown>;
    }): Promise<Order>;
    /**
     * Cancels a fulfillment (if related to an order)
     * @param fulfillmentId - the ID of the fulfillment to cancel
     * @return updated order
     */
    cancelFulfillment(fulfillmentId: string): Promise<Order>;
    /**
     * Retrieves the order line items, given an array of items.
     * @param order - the order to get line items from
     * @param items - the items to get
     * @param transformer - a function to apply to each of the items
     *    retrieved from the order, should return a line item. If the transformer
     *    returns an undefined value the line item will be filtered from the
     *    returned array.
     * @return the line items generated by the transformer.
     */
    protected getFulfillmentItems(order: Order, items: FulFillmentItemType[], transformer: (item: LineItem | undefined, quantity: number) => unknown): Promise<LineItem[]>;
    /**
     * Archives an order. It only alloved, if the order has been fulfilled
     * and payment has been captured.
     * @param orderId - the order to archive
     * @return the result of the update operation
     */
    archive(orderId: string): Promise<Order>;
    /**
     * Refunds a given amount back to the customer.
     * @param orderId - id of the order to refund.
     * @param refundAmount - the amount to refund.
     * @param reason - the reason to refund.
     * @param note - note for refund.
     * @param config - the config for refund.
     * @return the result of the refund operation.
     */
    createRefund(orderId: string, refundAmount: number, reason: string, note?: string, config?: {
        no_notification?: boolean;
    }): Promise<Order>;
    protected decorateTotalsLegacy(order: Order, totalsFields?: string[]): Promise<Order>;
    decorateTotals(order: Order, totalsFields?: string[]): Promise<Order>;
    decorateTotals(order: Order, context?: TotalsContext): Promise<Order>;
    /**
     * Handles receiving a return. This will create a
     * refund to the customer. If the returned items don't match the requested
     * items the return status will be updated to requires_action. This behaviour
     * is useful in situations where a custom refund amount is requested, but the
     * returned items are not matching the requested items. Setting the
     * allowMismatch argument to true, will process the return, ignoring any
     * mismatches.
     * @param orderId - the order to return.
     * @param receivedReturn - the received return
     * @param customRefundAmount - the custom refund amount return
     * @return the result of the update operation
     */
    registerReturnReceived(orderId: string, receivedReturn: Return, customRefundAmount?: number): Promise<Order>;
    private getTotalsRelations;
}
export default OrderService;
