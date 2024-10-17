import { DeepPartial, EntityManager } from "typeorm";
import { Country, Currency, Region } from "../models";
import { FindConfig, Selector } from "../types/common";
import { CreateRegionInput, UpdateRegionInput } from "../types/region";
import { FlagRouter } from "@medusajs/utils";
import { TransactionBaseService } from "../interfaces";
import { CountryRepository } from "../repositories/country";
import { CurrencyRepository } from "../repositories/currency";
import { FulfillmentProviderRepository } from "../repositories/fulfillment-provider";
import { PaymentProviderRepository } from "../repositories/payment-provider";
import { RegionRepository } from "../repositories/region";
import { TaxProviderRepository } from "../repositories/tax-provider";
import EventBusService from "./event-bus";
import FulfillmentProviderService from "./fulfillment-provider";
import { PaymentProviderService } from "./index";
import StoreService from "./store";
type InjectedDependencies = {
    manager: EntityManager;
    storeService: StoreService;
    eventBusService: EventBusService;
    paymentProviderService: PaymentProviderService;
    fulfillmentProviderService: FulfillmentProviderService;
    featureFlagRouter: FlagRouter;
    regionRepository: typeof RegionRepository;
    countryRepository: typeof CountryRepository;
    currencyRepository: typeof CurrencyRepository;
    taxProviderRepository: typeof TaxProviderRepository;
    paymentProviderRepository: typeof PaymentProviderRepository;
    fulfillmentProviderRepository: typeof FulfillmentProviderRepository;
};
/**
 * Provides layer to manipulate regions.
 */
declare class RegionService extends TransactionBaseService {
    static Events: {
        UPDATED: string;
        CREATED: string;
        DELETED: string;
    };
    protected featureFlagRouter_: FlagRouter;
    protected readonly eventBus_: EventBusService;
    protected readonly storeService_: StoreService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly fulfillmentProviderService_: FulfillmentProviderService;
    protected readonly regionRepository_: typeof RegionRepository;
    protected readonly countryRepository_: typeof CountryRepository;
    protected readonly currencyRepository_: typeof CurrencyRepository;
    protected readonly paymentProviderRepository_: typeof PaymentProviderRepository;
    protected readonly fulfillmentProviderRepository_: typeof FulfillmentProviderRepository;
    protected readonly taxProviderRepository_: typeof TaxProviderRepository;
    constructor({ regionRepository, countryRepository, storeService, eventBusService, currencyRepository, paymentProviderRepository, fulfillmentProviderRepository, taxProviderRepository, paymentProviderService, fulfillmentProviderService, featureFlagRouter, }: InjectedDependencies);
    /**
     * Creates a region.
     *
     * @param data - the unvalidated region
     * @return the newly created region
     */
    create(data: CreateRegionInput): Promise<Region>;
    /**
     * Updates a region
     *
     * @param regionId - the region to update
     * @param update - the data to update the region with
     * @return the result of the update operation
     */
    update(regionId: string, update: UpdateRegionInput): Promise<Region>;
    /**
     * Validates fields for creation and updates. If the region already exists
     * the id can be passed to check that country updates are allowed.
     *
     * @param regionData - the region data to validate
     * @param id - optional id of the region to check against
     * @return the validated region data
     */
    protected validateFields<T extends CreateRegionInput | UpdateRegionInput>(regionData: Omit<T, "metadata" | "currency_code">, id?: T extends UpdateRegionInput ? string : undefined): Promise<DeepPartial<Region>>;
    /**
     * Validates a tax rate. Will throw if the tax rate is not between 0 and 1.
     *
     * @param taxRate - a number representing the tax rate of the region
     * @throws if the tax rate isn't number between 0-100
     * @return void
     */
    protected validateTaxRate(taxRate: number): void | never;
    /**
     * Validates a currency code. Will throw if the currency code doesn't exist.
     *
     * @param currencyCode - an ISO currency code
     * @throws if the provided currency code is invalid
     * @return void
     */
    protected validateCurrency(currencyCode: Currency["code"]): Promise<void | never>;
    /**
     * Validates a country code. Will normalize the code before checking for
     * existence.
     *
     * @param code - a 2 digit alphanumeric ISO country code
     * @param regionId - the id of the current region to check against
     * @return the validated Country
     */
    protected validateCountry(code: Country["iso_2"], regionId: string): Promise<Country | never>;
    /**
     * Retrieve a region by country code.
     *
     * @param code - a 2 digit alphanumeric ISO country code
     * @param config - region find config
     * @return a Region with country code
     */
    retrieveByCountryCode(code: Country["iso_2"], config?: FindConfig<Region>): Promise<Region | never>;
    /**
     * Retrieves a region by name.
     *
     * @param name - the name of the region to retrieve
     * @return region with the matching name
     */
    retrieveByName(name: string): Promise<Region | never>;
    /**
     * Retrieves a region by its id.
     *
     * @param regionId - the id of the region to retrieve
     * @param config - configuration settings
     * @return the region
     */
    retrieve(regionId: string, config?: FindConfig<Region>): Promise<Region | never>;
    /**
     * Lists all regions based on a query
     *
     * @param {object} selector - query object for find
     * @param {object} config - configuration settings
     * @return {Promise} result of the find operation
     */
    list(selector?: Selector<Region>, config?: FindConfig<Region>): Promise<Region[]>;
    /**
     * Lists all regions based on a query and returns them along with count
     *
     * @param {object} selector - query object for find
     * @param {object} config - configuration settings
     * @return {Promise} result of the find operation
     */
    listAndCount(selector?: Selector<Region> & {
        q?: string;
    }, config?: FindConfig<Region>): Promise<[Region[], number]>;
    /**
     * Deletes a region.
     *
     * @param regionId - the region to delete
     * @return the result of the delete operation
     */
    delete(regionId: string): Promise<void>;
    /**
     * Adds a country to the region.
     *
     * @param regionId - the region to add a country to
     * @param code - a 2 digit alphanumeric ISO country code.
     * @return the updated Region
     */
    addCountry(regionId: string, code: Country["iso_2"]): Promise<Region>;
    /**
     * Removes a country from a Region.
     *
     * @param regionId - the region to remove from
     * @param code - a 2 digit alphanumeric ISO country code to remove
     * @return the updated Region
     */
    removeCountry(regionId: string, code: Country["iso_2"]): Promise<Region>;
    /**
     * Adds a payment provider that is available in the region. Fails if the
     * provider doesn't exist.
     *
     * @param regionId - the region to add the provider to
     * @param providerId - the provider to add to the region
     * @return the updated Region
     */
    addPaymentProvider(regionId: string, providerId: string): Promise<Region | never>;
    /**
     * Adds a fulfillment provider that is available in the region. Fails if the
     * provider doesn't exist.
     *
     * @param regionId - the region to add the provider to
     * @param providerId - the provider to add to the region
     * @return the updated Region
     */
    addFulfillmentProvider(regionId: string, providerId: string): Promise<Region | never>;
    /**
     * Removes a payment provider from a region. Is idempotent.
     *
     * @param regionId - the region to remove the provider from
     * @param providerId - the provider to remove from the region
     * @return the updated Region
     */
    removePaymentProvider(regionId: string, providerId: string): Promise<Region | never>;
    /**
     * Removes a fulfillment provider from a region. Is idempotent.
     *
     * @param regionId - the region to remove the provider from
     * @param providerId - the provider to remove from the region
     * @return the updated Region
     */
    removeFulfillmentProvider(regionId: string, providerId: string): Promise<Region | never>;
}
export default RegionService;
