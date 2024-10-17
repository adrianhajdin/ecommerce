import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { ClaimOrder, Order } from "../models";
import { AddressRepository } from "../repositories/address";
import { ClaimRepository } from "../repositories/claim";
import { LineItemRepository } from "../repositories/line-item";
import { ShippingMethodRepository } from "../repositories/shipping-method";
import { CreateClaimInput, CreateClaimItemInput, UpdateClaimInput } from "../types/claim";
import { FindConfig } from "../types/common";
import ClaimItemService from "./claim-item";
import EventBusService from "./event-bus";
import FulfillmentService from "./fulfillment";
import FulfillmentProviderService from "./fulfillment-provider";
import LineItemService from "./line-item";
import PaymentProviderService from "./payment-provider";
import ProductVariantInventoryService from "./product-variant-inventory";
import RegionService from "./region";
import ReturnService from "./return";
import ShippingOptionService from "./shipping-option";
import TaxProviderService from "./tax-provider";
import TotalsService from "./totals";
type InjectedDependencies = {
    manager: EntityManager;
    addressRepository: typeof AddressRepository;
    shippingMethodRepository: typeof ShippingMethodRepository;
    lineItemRepository: typeof LineItemRepository;
    claimRepository: typeof ClaimRepository;
    claimItemService: ClaimItemService;
    eventBusService: EventBusService;
    fulfillmentProviderService: FulfillmentProviderService;
    fulfillmentService: FulfillmentService;
    productVariantInventoryService: ProductVariantInventoryService;
    lineItemService: LineItemService;
    paymentProviderService: PaymentProviderService;
    regionService: RegionService;
    returnService: ReturnService;
    shippingOptionService: ShippingOptionService;
    taxProviderService: TaxProviderService;
    totalsService: TotalsService;
};
export default class ClaimService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
        UPDATED: string;
        CANCELED: string;
        FULFILLMENT_CREATED: string;
        SHIPMENT_CREATED: string;
        REFUND_PROCESSED: string;
    };
    protected readonly addressRepository_: typeof AddressRepository;
    protected readonly claimRepository_: typeof ClaimRepository;
    protected readonly shippingMethodRepository_: typeof ShippingMethodRepository;
    protected readonly lineItemRepository_: typeof LineItemRepository;
    protected readonly claimItemService_: ClaimItemService;
    protected readonly eventBus_: EventBusService;
    protected readonly fulfillmentProviderService_: FulfillmentProviderService;
    protected readonly fulfillmentService_: FulfillmentService;
    protected readonly lineItemService_: LineItemService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly regionService_: RegionService;
    protected readonly returnService_: ReturnService;
    protected readonly shippingOptionService_: ShippingOptionService;
    protected readonly taxProviderService_: TaxProviderService;
    protected readonly totalsService_: TotalsService;
    protected readonly productVariantInventoryService_: ProductVariantInventoryService;
    constructor({ addressRepository, claimRepository, shippingMethodRepository, lineItemRepository, claimItemService, eventBusService, fulfillmentProviderService, fulfillmentService, productVariantInventoryService, lineItemService, paymentProviderService, regionService, returnService, shippingOptionService, taxProviderService, totalsService, }: InjectedDependencies);
    update(id: string, data: UpdateClaimInput): Promise<ClaimOrder>;
    protected validateCreateClaimInput(data: CreateClaimInput): Promise<void>;
    /**
     * Finds claim line items on an order and calculates the refund amount.
     * There are three places too look:
     * - Order items
     * - Swap items
     * - Claim items (from previous claims)
     * Note, it will attempt to return early from each of these places to avoid having to iterate over all items every time.
     * @param order - the order to find claim lines on
     * @param claimItems - the claim items to match against
     * @return the refund amount
     */
    protected getRefundTotalForClaimLinesOnOrder(order: Order, claimItems: CreateClaimItemInput[]): Promise<number>;
    /**
     * Creates a Claim on an Order. Claims consists of items that are claimed and
     * optionally items to be sent as replacement for the claimed items. The
     * shipping address that the new items will be shipped to
     * @param data - the object containing all data required to create a claim
     * @return created claim
     */
    create(data: CreateClaimInput): Promise<ClaimOrder>;
    /**
     * @param id - the object containing all data required to create a claim
     * @param config - config object
     * @param config.metadata - config metadata
     * @param config.no_notification - config no notification
     * @return created claim
     */
    createFulfillment(id: string, config?: {
        metadata?: Record<string, unknown>;
        no_notification?: boolean;
        location_id?: string;
    }): Promise<ClaimOrder>;
    cancelFulfillment(fulfillmentId: string): Promise<ClaimOrder>;
    processRefund(id: string): Promise<ClaimOrder>;
    createShipment(id: string, fulfillmentId: string, trackingLinks?: {
        tracking_number: string;
    }[], config?: {
        metadata: {};
        no_notification: undefined;
    }): Promise<ClaimOrder>;
    cancel(id: string): Promise<ClaimOrder>;
    /**
     * @param selector - the query object for find
     * @param config - the config object containing query settings
     * @return the result of the find operation
     */
    list(selector: any, config?: FindConfig<ClaimOrder>): Promise<ClaimOrder[]>;
    /**
     * Gets an order by id.
     * @param claimId - id of the claim order to retrieve
     * @param config - the config object containing query settings
     * @return the order document
     */
    retrieve(claimId: string, config?: FindConfig<ClaimOrder>): Promise<ClaimOrder>;
}
export {};
