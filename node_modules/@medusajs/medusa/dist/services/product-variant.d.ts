import { SelectQueryBuilder } from "typeorm";
import { CreateProductVariantInput, FilterableProductVariantProps, GetRegionPriceContext, ProductVariantPrice, UpdateProductVariantData, UpdateProductVariantInput, UpdateVariantPricesData, UpdateVariantRegionPriceData } from "../types/product-variant";
import { FindConfig, WithRequiredProperty } from "../types/common";
import { FindWithRelationsOptions, ProductVariantRepository } from "../repositories/product-variant";
import { IPriceSelectionStrategy, PriceSelectionContext, TransactionBaseService } from "../interfaces";
import { MoneyAmount, Product, ProductOptionValue, ProductVariant } from "../models";
import { CartRepository } from "../repositories/cart";
import EventBusService from "./event-bus";
import { MoneyAmountRepository } from "../repositories/money-amount";
import { ProductOptionValueRepository } from "../repositories/product-option-value";
import { ProductRepository } from "../repositories/product";
import RegionService from "./region";
declare class ProductVariantService extends TransactionBaseService {
    static Events: {
        UPDATED: string;
        CREATED: string;
        DELETED: string;
    };
    protected readonly productVariantRepository_: typeof ProductVariantRepository;
    protected readonly productRepository_: typeof ProductRepository;
    protected readonly eventBus_: EventBusService;
    protected readonly regionService_: RegionService;
    protected readonly priceSelectionStrategy_: IPriceSelectionStrategy;
    protected readonly moneyAmountRepository_: typeof MoneyAmountRepository;
    protected readonly productOptionValueRepository_: typeof ProductOptionValueRepository;
    protected readonly cartRepository_: typeof CartRepository;
    constructor({ productVariantRepository, productRepository, eventBusService, regionService, moneyAmountRepository, productOptionValueRepository, cartRepository, priceSelectionStrategy, }: {
        productVariantRepository: any;
        productRepository: any;
        eventBusService: any;
        regionService: any;
        moneyAmountRepository: any;
        productOptionValueRepository: any;
        cartRepository: any;
        priceSelectionStrategy: any;
    });
    /**
     * Gets a product variant by id.
     * @param variantId - the id of the product to get.
     * @param config - query config object for variant retrieval.
     * @return the product document.
     */
    retrieve(variantId: string, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<ProductVariant>;
    /**
     * Gets a product variant by id.
     * @param sku - The unique stock keeping unit used to identify the product variant.
     * @param config - query config object for variant retrieval.
     * @return the product document.
     */
    retrieveBySKU(sku: string, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<ProductVariant>;
    /**
     * Creates an unpublished product variant. Will validate against parent product
     * to ensure that the variant can in fact be created.
     * @param productOrProductId - the product the variant will be added to
     * @param variants
     * @return resolves to the creation result.
     */
    create<TVariants extends CreateProductVariantInput | CreateProductVariantInput[], TOutput = TVariants extends CreateProductVariantInput[] ? CreateProductVariantInput[] : CreateProductVariantInput>(productOrProductId: string | Product, variants: CreateProductVariantInput | CreateProductVariantInput[]): Promise<TOutput>;
    /**
     * Updates a collection of variant.
     * @param variantData - a collection of variant and the data to update.
     * @return resolves to the update result.
     */
    update(variantData: {
        variant: ProductVariant;
        updateData: UpdateProductVariantInput;
    }[]): Promise<ProductVariant[]>;
    /**
     * Updates a variant.
     * Price updates should use dedicated methods.
     * The function will throw, if price updates are attempted.
     * @param variantOrVariantId - variant or id of a variant.
     * @param update - an object with the update values.
     * @return resolves to the update result.
     */
    update(variantOrVariantId: string | Partial<ProductVariant>, update: UpdateProductVariantInput): Promise<ProductVariant>;
    update(variantOrVariantId: string | Partial<ProductVariant>, update: UpdateProductVariantInput): Promise<ProductVariant>;
    protected updateBatch(variantData: UpdateProductVariantData[]): Promise<ProductVariant[]>;
    /**
     * Updates variant/prices collection.
     * Deletes any prices that are not in the update object, and is not associated with a price list.
     * @param data
     * @returns empty promise
     */
    updateVariantPrices(data: UpdateVariantPricesData[]): Promise<void>;
    /**
     * Updates a variant's prices.
     * Deletes any prices that are not in the update object, and is not associated with a price list.
     * @param variantId - the id of variant
     * @param prices - the update prices
     * @returns empty promise
     */
    updateVariantPrices(variantId: string, prices: ProductVariantPrice[]): Promise<void>;
    protected updateVariantPricesBatch(data: UpdateVariantPricesData[]): Promise<void>;
    upsertRegionPrices(data: UpdateVariantRegionPriceData[]): Promise<void>;
    upsertCurrencyPrices(data: {
        variantId: string;
        price: WithRequiredProperty<ProductVariantPrice, "currency_code">;
    }[]): Promise<void>;
    /**
     * Gets the price specific to a region. If no region specific money amount
     * exists the function will try to use a currency price. If no default
     * currency price exists the function will throw an error.
     * @param variantId - the id of the variant to get price from
     * @param context - context for getting region price
     * @return the price specific to the region
     */
    getRegionPrice(variantId: string, context: GetRegionPriceContext): Promise<number | null>;
    /**
     * @deprecated use addOrUpdateRegionPrices instead
     * Sets the default price of a specific region
     * @param variantId - the id of the variant to update
     * @param price - the price for the variant.
     * @return the result of the update operation
     */
    setRegionPrice(variantId: string, price: ProductVariantPrice): Promise<MoneyAmount>;
    /**
     * @deprecated use addOrUpdateCurrencyPrices instead
     * Sets the default price for the given currency.
     * @param variantId - the id of the variant to set prices for
     * @param price - the price for the variant
     * @return the result of the update operation
     */
    setCurrencyPrice(variantId: string, price: ProductVariantPrice): Promise<MoneyAmount>;
    /**
     * Updates variant's option value.
     * Option value must be of type string or number.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @param optionValue - option value to add.
     * @return the result of the update operation.
     */
    updateOptionValue(variantId: string, optionId: string, optionValue: string): Promise<ProductOptionValue>;
    /**
     * Adds option value to a variant.
     * Fails when product with variant does not exist or
     * if that product does not have an option with the given
     * option id. Fails if given variant is not found.
     * Option value must be of type string or number.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @param optionValue - option value to add.
     * @return the result of the update operation.
     */
    addOptionValue(variantId: string, optionId: string, optionValue: string): Promise<ProductOptionValue>;
    /**
     * Deletes option value from given variant.
     * Will never fail due to delete being idempotent.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @return empty promise
     */
    deleteOptionValue(variantId: string, optionId: string): Promise<void>;
    /**
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    listAndCount(selector: FilterableProductVariantProps, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<[ProductVariant[], number]>;
    /**
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    list(selector: FilterableProductVariantProps, config?: FindConfig<ProductVariant> & PriceSelectionContext): Promise<ProductVariant[]>;
    /**
     * Deletes variant or variants.
     * Will never fail due to delete being idempotent.
     * @param variantIds - the id of the variant to delete. Must be
     *   castable as an ObjectId
     * @return empty promise
     */
    delete(variantIds: string | string[]): Promise<void>;
    /**
     * Check if the variant is assigned to at least one of the provided sales channels.
     *
     * @param id - product variant id
     * @param salesChannelIds - an array of sales channel ids
     */
    isVariantInSalesChannels(id: string, salesChannelIds: string[]): Promise<boolean>;
    /**
     * Lists variants based on the provided parameters and includes the count of
     * variants that match the query.
     * @param variantRepo - the variant repository
     * @param query - object that defines the scope for what should be returned
     * @param q - free text query
     * @return an array containing the products as the first element and the total
     *   count of products that matches the query as the second element.
     */
    getFreeTextQueryBuilder_(variantRepo: typeof ProductVariantRepository, query: FindWithRelationsOptions, q?: string): SelectQueryBuilder<ProductVariant>;
    protected validateVariantsToCreate_(product: Product, variants: CreateProductVariantInput[]): void;
}
export default ProductVariantService;
