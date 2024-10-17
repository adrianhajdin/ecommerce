import { FlagRouter } from "@medusajs/utils";
import { Cart, Order, ShippingMethod, ShippingOption, ShippingOptionPriceType, ShippingOptionRequirement } from "../models";
import { FindConfig, Selector } from "../types/common";
import { CreateShippingMethodDto, CreateShippingOptionInput, ShippingMethodUpdate, UpdateShippingOptionInput, ValidateRequirementTypeInput } from "../types/shipping-options";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { ShippingMethodRepository } from "../repositories/shipping-method";
import { ShippingOptionRepository } from "../repositories/shipping-option";
import { ShippingOptionRequirementRepository } from "../repositories/shipping-option-requirement";
import FulfillmentProviderService from "./fulfillment-provider";
import RegionService from "./region";
type InjectedDependencies = {
    manager: EntityManager;
    fulfillmentProviderService: FulfillmentProviderService;
    regionService: RegionService;
    shippingOptionRequirementRepository: typeof ShippingOptionRequirementRepository;
    shippingOptionRepository: typeof ShippingOptionRepository;
    shippingMethodRepository: typeof ShippingMethodRepository;
    featureFlagRouter: FlagRouter;
};
/**
 * Provides layer to manipulate profiles.
 */
declare class ShippingOptionService extends TransactionBaseService {
    protected readonly providerService_: FulfillmentProviderService;
    protected readonly regionService_: RegionService;
    protected readonly requirementRepository_: typeof ShippingOptionRequirementRepository;
    protected readonly optionRepository_: typeof ShippingOptionRepository;
    protected readonly methodRepository_: typeof ShippingMethodRepository;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ shippingOptionRepository, shippingOptionRequirementRepository, shippingMethodRepository, fulfillmentProviderService, regionService, featureFlagRouter, }: InjectedDependencies);
    /**
     * Validates a requirement
     * @param {ShippingOptionRequirement} requirement - the requirement to validate
     * @param {string} optionId - the id to validate the requirement
     * @return {ShippingOptionRequirement} a validated shipping requirement
     */
    validateRequirement_(requirement: ValidateRequirementTypeInput, optionId?: string | undefined): Promise<ShippingOptionRequirement>;
    /**
     * @param {Object} selector - the query object for find
     * @param {object} config - config object
     * @return {Promise} the result of the find operation
     */
    list(selector?: Selector<ShippingOption> & {
        q?: string;
    }, config?: FindConfig<ShippingOption>): Promise<ShippingOption[]>;
    /**
     * @param selector - the query object for find
     * @param config - config object
     * @return the result of the find operation
     */
    listAndCount(selector?: Selector<ShippingOption> & {
        q?: string;
    }, config?: FindConfig<ShippingOption>): Promise<[ShippingOption[], number]>;
    /**
     * Gets a profile by id.
     * Throws in case of DB Error and if profile was not found.
     * @param {string} optionId - the id of the profile to get.
     * @param {object} options - the options to get a profile
     * @return {Promise<Product>} the profile document.
     */
    retrieve(optionId: any, options?: FindConfig<ShippingOption>): Promise<ShippingOption>;
    /**
     * Updates a shipping method's associations. Useful when a cart is completed
     * and its methods should be copied to an order/swap entity.
     * @param {string} id - the id of the shipping method to update
     * @param {object} update - the values to update the method with
     * @return {Promise<ShippingMethod>} the resulting shipping method
     */
    updateShippingMethod(id: string, update: ShippingMethodUpdate): Promise<ShippingMethod | undefined>;
    /**
     * Removes a given shipping method
     * @param {ShippingMethod | Array<ShippingMethod>} shippingMethods - the shipping method to remove
     * @returns removed shipping methods
     */
    deleteShippingMethods(shippingMethods: ShippingMethod | ShippingMethod[]): Promise<ShippingMethod[]>;
    /**
     * Creates a shipping method for a given cart.
     * @param {string} optionId - the id of the option to use for the method.
     * @param {object} data - the optional provider data to use.
     * @param {object} config - the cart to create the shipping method for.
     * @return {ShippingMethod} the resulting shipping method.
     */
    createShippingMethod(optionId: string, data: Record<string, unknown>, config: CreateShippingMethodDto): Promise<ShippingMethod>;
    /**
     * Checks if a given option id is a valid option for a cart. If it is the
     * option is returned with the correct price. Throws when region_ids do not
     * match, or when the shipping option requirements are not satisfied.
     * @param {object} option - the option object to check
     * @param {Cart} cart - the cart object to check against
     * @return {ShippingOption} the validated shipping option
     */
    validateCartOption(option: ShippingOption, cart: Cart): Promise<ShippingOption | null>;
    private validateAndMutatePrice;
    /**
     * Creates a new shipping option. Used both for outbound and inbound shipping
     * options. The difference is registered by the `is_return` field which
     * defaults to false.
     * @param {ShippingOption} data - the data to create shipping options
     * @return {Promise<ShippingOption>} the result of the create operation
     */
    create(data: CreateShippingOptionInput): Promise<ShippingOption>;
    /**
     * Validates a shipping option price
     * @param {ShippingOptionPriceType} priceType - the price to validate
     * @param {ShippingOption} option - the option to validate against
     * @return {Promise<ShippingOptionPriceType>} the validated price
     */
    validatePriceType_(priceType: ShippingOptionPriceType, option: ShippingOption): Promise<ShippingOptionPriceType>;
    /**
     * Updates a profile. Metadata updates and product updates should use
     * dedicated methods, e.g. `setMetadata`, etc. The function
     * will throw errors if metadata or product updates are attempted.
     * @param {string} optionId - the id of the option. Must be a string that
     *   can be casted to an ObjectId
     * @param {object} update - an object with the update values.
     * @return {Promise} resolves to the update result.
     */
    update(optionId: string, update: UpdateShippingOptionInput): Promise<ShippingOption>;
    /**
     * Deletes a profile with a given profile id.
     * @param {string} optionId - the id of the profile to delete. Must be
     *   castable as an ObjectId
     * @return {Promise} the result of the delete operation.
     */
    delete(optionId: string): Promise<ShippingOption | void>;
    /**
     * Adds a requirement to a shipping option. Only 1 requirement of each type
     * is allowed.
     * @param {string} optionId - the option to add the requirement to.
     * @param {ShippingOptionRequirement} requirement - the requirement for the option.
     * @return {Promise} the result of update
     */
    addRequirement(optionId: string, requirement: ShippingOptionRequirement): Promise<ShippingOption>;
    /**
     * Removes a requirement from a shipping option
     * @param {string} requirementId - the id of the requirement to remove
     * @return {Promise} the result of update
     */
    removeRequirement(requirementId: any): Promise<ShippingOptionRequirement | void>;
    /**
     *
     * @param optionIds ID or IDs of the shipping options to update
     * @param profileId Shipping profile ID to update the shipping options with
     * @returns updated shipping options
     */
    updateShippingProfile(optionIds: string | string[], profileId: string): Promise<ShippingOption[]>;
    /**
     * Returns the amount to be paid for a shipping method. Will ask the
     * fulfillment provider to calculate the price if the shipping option has the
     * price type "calculated".
     * @param {ShippingOption} option - the shipping option to retrieve the price
     *   for.
     * @param {ShippingData} data - the shipping data to retrieve the price.
     * @param {Cart | Order} cart - the context in which the price should be
     *   retrieved.
     * @return {Promise<Number>} the price of the shipping option.
     */
    getPrice_(option: ShippingOption, data: Record<string, unknown>, cart: Cart | Order | undefined): Promise<number>;
}
export default ShippingOptionService;
