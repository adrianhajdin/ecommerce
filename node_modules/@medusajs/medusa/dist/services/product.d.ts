import { RemoteQueryFunction } from "@medusajs/types";
import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { ProductVariantService, SearchService } from ".";
import { TransactionBaseService } from "../interfaces";
import { Product, ProductOption, ProductTag, ProductType, ProductVariant } from "../models";
import { ImageRepository } from "../repositories/image";
import { FindWithoutRelationsOptions, ProductRepository } from "../repositories/product";
import { ProductCategoryRepository } from "../repositories/product-category";
import { ProductOptionRepository } from "../repositories/product-option";
import { ProductTagRepository } from "../repositories/product-tag";
import { ProductTypeRepository } from "../repositories/product-type";
import { ProductVariantRepository } from "../repositories/product-variant";
import { Selector } from "../types/common";
import { CreateProductInput, FilterableProductProps, FindProductConfig, ProductOptionInput, ProductSelector, UpdateProductInput } from "../types/product";
import EventBusService from "./event-bus";
import SalesChannelService from "./sales-channel";
type InjectedDependencies = {
    manager: EntityManager;
    productOptionRepository: typeof ProductOptionRepository;
    productRepository: typeof ProductRepository;
    productVariantRepository: typeof ProductVariantRepository;
    productTypeRepository: typeof ProductTypeRepository;
    productTagRepository: typeof ProductTagRepository;
    imageRepository: typeof ImageRepository;
    productCategoryRepository: typeof ProductCategoryRepository;
    productVariantService: ProductVariantService;
    searchService: SearchService;
    salesChannelService: SalesChannelService;
    eventBusService: EventBusService;
    featureFlagRouter: FlagRouter;
    remoteQuery: RemoteQueryFunction;
};
declare class ProductService extends TransactionBaseService {
    protected readonly productOptionRepository_: typeof ProductOptionRepository;
    protected readonly productRepository_: typeof ProductRepository;
    protected readonly productVariantRepository_: typeof ProductVariantRepository;
    protected readonly productTypeRepository_: typeof ProductTypeRepository;
    protected readonly productTagRepository_: typeof ProductTagRepository;
    protected readonly imageRepository_: typeof ImageRepository;
    protected readonly productCategoryRepository_: typeof ProductCategoryRepository;
    protected readonly productVariantService_: ProductVariantService;
    protected readonly searchService_: SearchService;
    protected readonly salesChannelService_: SalesChannelService;
    protected readonly eventBus_: EventBusService;
    protected readonly featureFlagRouter_: FlagRouter;
    protected remoteQuery_: RemoteQueryFunction;
    static readonly IndexName = "products";
    static readonly Events: {
        UPDATED: string;
        CREATED: string;
        DELETED: string;
    };
    constructor({ productOptionRepository, productRepository, productVariantRepository, eventBusService, productVariantService, productTypeRepository, productTagRepository, productCategoryRepository, imageRepository, searchService, remoteQuery, salesChannelService, featureFlagRouter, }: InjectedDependencies);
    /**
     * Lists products based on the provided parameters.
     * @param selector - an object that defines rules to filter products
     *   by
     * @param config - object that defines the scope for what should be
     *   returned
     * @return the result of the find operation
     */
    list(selector: ProductSelector, config?: FindProductConfig): Promise<Product[]>;
    /**
     * Lists products based on the provided parameters and includes the count of
     * products that match the query.
     * @param selector - an object that defines rules to filter products
     *   by
     * @param config - object that defines the scope for what should be
     *   returned
     * @return an array containing the products as
     *   the first element and the total count of products that matches the query
     *   as the second element.
     */
    listAndCount(selector: ProductSelector, config?: FindProductConfig): Promise<[Product[], number]>;
    /**
     * Return the total number of documents in database
     * @param {object} selector - the selector to choose products by
     * @return {Promise} the result of the count operation
     */
    count(selector?: Selector<Product>): Promise<number>;
    /**
     * Gets a product by id.
     * Throws in case of DB Error and if product was not found.
     * @param productId - id of the product to get.
     * @param config - object that defines what should be included in the
     *   query response
     * @return the result of the find one operation.
     */
    retrieve(productId: string, config?: FindProductConfig): Promise<Product>;
    /**
     * Gets a product by handle.
     * Throws in case of DB Error and if product was not found.
     * @param productHandle - handle of the product to get.
     * @param config - details about what to get from the product
     * @return the result of the find one operation.
     */
    retrieveByHandle(productHandle: string, config?: FindProductConfig): Promise<Product>;
    /**
     * Gets a product by external id.
     * Throws in case of DB Error and if product was not found.
     * @param externalId - handle of the product to get.
     * @param config - details about what to get from the product
     * @return the result of the find one operation.
     */
    retrieveByExternalId(externalId: string, config?: FindProductConfig): Promise<Product>;
    /**
     * Gets a product by selector.
     * Throws in case of DB Error and if product was not found.
     * @param selector - selector object
     * @param config - object that defines what should be included in the
     *   query response
     * @return the result of the find one operation.
     */
    retrieve_(selector: Selector<Product>, config?: FindProductConfig): Promise<Product>;
    /**
     * Gets all variants belonging to a product.
     * @param productId - the id of the product to get variants from.
     * @param config - The config to select and configure relations etc...
     * @return an array of variants
     */
    retrieveVariants(productId: string, config?: FindProductConfig): Promise<ProductVariant[]>;
    filterProductsBySalesChannel(productIds: string[], salesChannelId: string, config?: FindProductConfig): Promise<Product[]>;
    listTypes(): Promise<ProductType[]>;
    listTagsByUsage(take?: number): Promise<ProductTag[]>;
    /**
     * Check if the product is assigned to at least one of the provided sales channels.
     *
     * @param id - product id
     * @param salesChannelIds - an array of sales channel ids
     */
    isProductInSalesChannels(id: string, salesChannelIds: string[]): Promise<boolean>;
    /**
     * Creates a product.
     * @param productObject - the product to create
     * @return resolves to the creation result.
     */
    create(productObject: CreateProductInput): Promise<Product>;
    /**
     * Updates a product. Product variant updates should use dedicated methods,
     * e.g. `addVariant`, etc. The function will throw errors if metadata or
     * product variant updates are attempted.
     * @param {string} productId - the id of the product. Must be a string that
     *   can be casted to an ObjectId
     * @param {object} update - an object with the update values.
     * @return {Promise} resolves to the update result.
     */
    update(productId: string, update: UpdateProductInput): Promise<Product>;
    /**
     * Deletes a product from a given product id. The product's associated
     * variants will also be deleted.
     * @param productId - the id of the product to delete. Must be
     *   castable as an ObjectId
     * @return empty promise
     */
    delete(productId: string): Promise<void>;
    /**
     * Adds an option to a product. Options can, for example, be "Size", "Color",
     * etc. Will update all the products variants with a dummy value for the newly
     * created option. The same option cannot be added more than once.
     * @param productId - the product to apply the new option to
     * @param optionTitle - the display title of the option, e.g. "Size"
     * @return the result of the model update operation
     */
    addOption(productId: string, optionTitle: string): Promise<Product>;
    reorderVariants(productId: string, variantOrder: string[]): Promise<Product>;
    /**
     * Updates a product's option. Throws if the call tries to update an option
     * not associated with the product. Throws if the updated title already exists.
     * @param productId - the product whose option we are updating
     * @param optionId - the id of the option we are updating
     * @param data - the data to update the option with
     * @return the updated product
     */
    updateOption(productId: string, optionId: string, data: ProductOptionInput): Promise<Product>;
    /**
     * Retrieve product's option by title.
     *
     * @param title - title of the option
     * @param productId - id of a product
     * @return product option
     */
    retrieveOptionByTitle(title: string, productId: string): Promise<ProductOption | null>;
    /**
     * Delete an option from a product.
     * @param productId - the product to delete an option from
     * @param optionId - the option to delete
     * @return the updated product
     */
    deleteOption(productId: string, optionId: string): Promise<Product | void>;
    /**
     * Assign a product to a profile, if a profile id null is provided then detach the product from the profile
     * @param productIds ID or IDs of the products to update
     * @param profileId Shipping profile ID to update the shipping options with
     * @returns updated products
     */
    updateShippingProfile(productIds: string | string[], profileId: string | null): Promise<Product[]>;
    /**
     * Temporary method to be used in place we need custom query strategy to prevent typeorm bug
     * @param selector
     * @param config
     * @protected
     */
    protected prepareListQuery_(selector: FilterableProductProps | Selector<Product>, config: FindProductConfig): {
        q: string;
        relations: (keyof Product)[];
        query: FindWithoutRelationsOptions;
    };
    /**
     * Temporary method to join sales channels of a product using RemoteQuery while
     * MedusaV2 FF is on.
     *
     * @param products
     * @private
     */
    private decorateProductsWithSalesChannels;
    /**
     * Temporary method to fetch sales channels of a product using RemoteQuery while
     * MedusaV2 FF is on.
     *
     * @param productIds
     * @private
     */
    private getSalesChannelModuleChannels;
}
export default ProductService;
