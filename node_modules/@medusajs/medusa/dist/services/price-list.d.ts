import { EntityManager } from "typeorm";
import { PriceList, Product, ProductVariant } from "../models";
import { FindConfig, Selector } from "../types/common";
import { CreatePriceListInput, FilterablePriceListProps, PriceListPriceCreateInput, PriceListPriceUpdateInput, UpdatePriceListInput } from "../types/price-list";
import { FlagRouter } from "@medusajs/utils";
import { CustomerGroupService } from ".";
import { TransactionBaseService } from "../interfaces";
import { MoneyAmountRepository } from "../repositories/money-amount";
import { PriceListRepository } from "../repositories/price-list";
import { ProductVariantRepository } from "../repositories/product-variant";
import { FilterableProductProps } from "../types/product";
import { FilterableProductVariantProps } from "../types/product-variant";
import ProductService from "./product";
import ProductVariantService from "./product-variant";
import RegionService from "./region";
type PriceListConstructorProps = {
    manager: EntityManager;
    customerGroupService: CustomerGroupService;
    regionService: RegionService;
    productService: ProductService;
    productVariantService: ProductVariantService;
    priceListRepository: typeof PriceListRepository;
    moneyAmountRepository: typeof MoneyAmountRepository;
    productVariantRepository: typeof ProductVariantRepository;
    featureFlagRouter: FlagRouter;
};
/**
 * Provides layer to manipulate product tags.
 */
declare class PriceListService extends TransactionBaseService {
    protected readonly customerGroupService_: CustomerGroupService;
    protected readonly regionService_: RegionService;
    protected readonly productService_: ProductService;
    protected readonly variantService_: ProductVariantService;
    protected readonly priceListRepo_: typeof PriceListRepository;
    protected readonly moneyAmountRepo_: typeof MoneyAmountRepository;
    protected readonly productVariantRepo_: typeof ProductVariantRepository;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ customerGroupService, regionService, productService, productVariantService, priceListRepository, moneyAmountRepository, productVariantRepository, featureFlagRouter, }: PriceListConstructorProps);
    /**
     * Retrieves a product tag by id.
     * @param {string} priceListId - the id of the product tag to retrieve
     * @param {Object} config - the config to retrieve the tag by
     * @return {Promise<PriceList>} the collection.
     */
    retrieve(priceListId: string, config?: FindConfig<PriceList>): Promise<PriceList>;
    listPriceListsVariantIdsMap(priceListIds: string | string[]): Promise<{
        [priceListId: string]: string[];
    }>;
    /**
     * Creates a Price List
     * @param priceListObject - the Price List to create
     * @return created Price List
     */
    create(priceListObject: CreatePriceListInput): Promise<PriceList | never>;
    /**
     * Updates a Price List
     * @param {string} id - the id of the Product List to update
     * @param {UpdatePriceListInput} update - the update to apply
     * @returns {Promise<PriceList>} updated Price List
     */
    update(id: string, update: UpdatePriceListInput): Promise<PriceList>;
    /**
     * Adds prices to a price list in bulk, optionally replacing all existing prices
     * @param id - id of the price list
     * @param prices - prices to add
     * @param replace - whether to replace existing prices
     * @returns {Promise<PriceList>} updated Price List
     */
    addPrices(id: string, prices: PriceListPriceCreateInput[], replace?: boolean): Promise<PriceList>;
    /**
     * Removes prices from a price list and deletes the removed prices in bulk
     * @param id - id of the price list
     * @param priceIds - ids of the prices to delete
     * @returns {Promise<void>} updated Price List
     */
    deletePrices(id: string, priceIds: string[]): Promise<void>;
    /**
     * Removes all prices from a price list and deletes the removed prices in bulk
     * @param id - id of the price list
     * @returns {Promise<void>} updated Price List
     */
    clearPrices(id: string): Promise<void>;
    /**
     * Deletes a Price List
     * Will never fail due to delete being idempotent.
     * @param id - id of the price list
     * @returns {Promise<void>} empty promise
     */
    delete(id: string): Promise<void>;
    /**
     * Lists Price Lists
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise<PriceList[]>} the result of the find operation
     */
    list(selector?: FilterablePriceListProps, config?: FindConfig<PriceList>): Promise<PriceList[]>;
    /**
     * Lists Price Lists and adds count
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector?: FilterablePriceListProps, config?: FindConfig<PriceList>): Promise<[PriceList[], number]>;
    protected upsertCustomerGroups_(priceListId: string, customerGroups: {
        id: string;
    }[]): Promise<void>;
    listProducts(priceListId: string, selector?: FilterableProductProps | Selector<Product>, config?: FindConfig<Product>, requiresPriceList?: boolean): Promise<[Product[], number]>;
    listVariants(priceListId: string, selector?: FilterableProductVariantProps, config?: FindConfig<ProductVariant>, requiresPriceList?: boolean): Promise<[ProductVariant[], number]>;
    deleteProductPrices(priceListId: string, productIds: string[]): Promise<[string[], number]>;
    deleteVariantPrices(priceListId: string, variantIds: string[]): Promise<[string[], number]>;
    /**
     * Add `currency_code` to an MA record if `region_id`is passed.
     * @param prices - a list of PriceListPrice(Create/Update)Input records
     * @return {Promise} updated `prices` list
     */
    protected addCurrencyFromRegion<T extends PriceListPriceUpdateInput | PriceListPriceCreateInput>(prices: T[]): Promise<T[]>;
}
export default PriceListService;
