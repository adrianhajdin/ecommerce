import { FlagRouter } from "@medusajs/utils";
import { NewTotalsService, ProductService, RegionService, TotalsService } from ".";
import { TransactionBaseService } from "../interfaces";
import { Cart, Discount, LineItem } from "../models";
import { DiscountRuleType } from "../models/discount-rule";
import { DiscountRepository } from "../repositories/discount";
import { DiscountConditionRepository } from "../repositories/discount-condition";
import { DiscountRuleRepository } from "../repositories/discount-rule";
import { GiftCardRepository } from "../repositories/gift-card";
import { FindConfig } from "../types/common";
import { CreateDiscountInput, CreateDynamicDiscountInput, FilterableDiscountProps, UpdateDiscountInput } from "../types/discount";
import { CalculationContextData } from "../types/totals";
import CustomerService from "./customer";
import DiscountConditionService from "./discount-condition";
import EventBusService from "./event-bus";
/**
 * Provides layer to manipulate discounts.
 * @implements {BaseService}
 */
declare class DiscountService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
    };
    protected readonly discountRepository_: typeof DiscountRepository;
    protected readonly customerService_: CustomerService;
    protected readonly discountRuleRepository_: typeof DiscountRuleRepository;
    protected readonly giftCardRepository_: typeof GiftCardRepository;
    protected readonly discountConditionRepository_: typeof DiscountConditionRepository;
    protected readonly discountConditionService_: DiscountConditionService;
    protected readonly totalsService_: TotalsService;
    protected readonly newTotalsService_: NewTotalsService;
    protected readonly productService_: ProductService;
    protected readonly regionService_: RegionService;
    protected readonly eventBus_: EventBusService;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ discountRepository, discountRuleRepository, giftCardRepository, discountConditionRepository, discountConditionService, totalsService, newTotalsService, productService, regionService, customerService, eventBusService, featureFlagRouter, }: {
        discountRepository: any;
        discountRuleRepository: any;
        giftCardRepository: any;
        discountConditionRepository: any;
        discountConditionService: any;
        totalsService: any;
        newTotalsService: any;
        productService: any;
        regionService: any;
        customerService: any;
        eventBusService: any;
        featureFlagRouter: any;
    });
    /**
     * Creates a discount rule with provided data given that the data is validated.
     * @param {DiscountRule} discountRule - the discount rule to create
     * @return {Promise} the result of the create operation
     */
    validateDiscountRule_<T extends {
        type: DiscountRuleType;
        value: number;
    }>(discountRule: T): T;
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    list(selector?: FilterableDiscountProps, config?: FindConfig<Discount>): Promise<Discount[]>;
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector?: FilterableDiscountProps, config?: FindConfig<Discount>): Promise<[Discount[], number]>;
    /**
     * Creates a discount with provided data given that the data is validated.
     * Normalizes discount code to uppercase.
     * @param {Discount} discount - the discount data to create
     * @return {Promise} the result of the create operation
     */
    create(discount: CreateDiscountInput): Promise<Discount>;
    /**
     * Gets a discount by id.
     * @param {string} discountId - id of discount to retrieve
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Discount>} the discount
     */
    retrieve(discountId: string, config?: FindConfig<Discount>): Promise<Discount>;
    /**
     * Gets the discount by discount code.
     * @param discountCode - discount code of discount to retrieve
     * @param config - the config object containing query settings
     * @return the discount
     */
    retrieveByCode(discountCode: string, config?: FindConfig<Discount>): Promise<Discount>;
    /**
     * List all the discounts corresponding to the given codes
     * @param discountCodes - discount codes of discounts to retrieve
     * @param config - the config object containing query settings
     * @return the discounts
     */
    listByCodes(discountCodes: string[], config?: FindConfig<Discount>): Promise<Discount[]>;
    /**
     * Updates a discount.
     * @param {string} discountId - discount id of discount to update
     * @param {Discount} update - the data to update the discount with
     * @return {Promise} the result of the update operation
     */
    update(discountId: string, update: UpdateDiscountInput): Promise<Discount>;
    /**
     * Creates a dynamic code for a discount id.
     * @param {string} discountId - the id of the discount to create a code for
     * @param {Object} data - the object containing a code to identify the discount by
     * @return {Promise} the newly created dynamic code
     */
    createDynamicCode(discountId: string, data: CreateDynamicDiscountInput): Promise<Discount>;
    /**
     * Deletes a dynamic code for a discount id.
     * @param {string} discountId - the id of the discount to create a code for
     * @param {string} code - the code to identify the discount by
     * @return {Promise} the newly created dynamic code
     */
    deleteDynamicCode(discountId: string, code: string): Promise<void>;
    /**
     * Adds a region to the discount regions array.
     * @param {string} discountId - id of discount
     * @param {string} regionId - id of region to add
     * @return {Promise} the result of the update operation
     */
    addRegion(discountId: string, regionId: string): Promise<Discount>;
    /**
     * Removes a region from the discount regions array.
     * @param {string} discountId - id of discount
     * @param {string} regionId - id of region to remove
     * @return {Promise} the result of the update operation
     */
    removeRegion(discountId: string, regionId: string): Promise<Discount>;
    /**
     * Deletes a discount idempotently
     * @param {string} discountId - id of discount to delete
     * @return {Promise} the result of the delete operation
     */
    delete(discountId: string): Promise<void>;
    validateDiscountForProduct(discountRuleId: string, productId?: string): Promise<boolean>;
    calculateDiscountForLineItem(discountId: string, lineItem: LineItem, calculationContextData: CalculationContextData): Promise<number>;
    validateDiscountForCartOrThrow(cart: Cart, discount: Discount | Discount[]): Promise<void>;
    hasCustomersGroupCondition(discount: Discount): boolean;
    hasReachedLimit(discount: Discount): boolean;
    hasNotStarted(discount: Discount): boolean;
    hasExpired(discount: Discount): boolean;
    isDisabled(discount: Discount): boolean;
    isValidForRegion(discount: Discount, region_id: string): Promise<boolean>;
    canApplyForCustomer(discountRuleId: string, customerId: string | undefined): Promise<boolean>;
}
export default DiscountService;
