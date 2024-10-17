import { EntityManager } from "typeorm";
import { EventBusService } from ".";
import { TransactionBaseService } from "../interfaces";
import { ProductCategory } from "../models";
import { ProductCategoryRepository } from "../repositories/product-category";
import { FindConfig, QuerySelector, Selector, TreeQuerySelector } from "../types/common";
import { CreateProductCategoryInput, ReorderConditions, UpdateProductCategoryInput } from "../types/product-category";
type InjectedDependencies = {
    manager: EntityManager;
    eventBusService: EventBusService;
    productCategoryRepository: typeof ProductCategoryRepository;
};
/**
 * Provides layer to manipulate product categories.
 */
declare class ProductCategoryService extends TransactionBaseService {
    protected readonly productCategoryRepo_: typeof ProductCategoryRepository;
    protected readonly eventBusService_: EventBusService;
    static Events: {
        CREATED: string;
        UPDATED: string;
        DELETED: string;
    };
    constructor({ productCategoryRepository, eventBusService, }: InjectedDependencies);
    /**
     * Lists product category based on the provided parameters and includes the count of
     * product category that match the query.
     * @param selector - Filter options for product category.
     * @param config - Configuration for query.
     * @param treeSelector - Filter options for product category tree relations
     * @return an array containing the product category as
     *   the first element and the total count of product category that matches the query
     *   as the second element.
     */
    listAndCount(selector: TreeQuerySelector<ProductCategory>, config?: FindConfig<ProductCategory>, treeSelector?: QuerySelector<ProductCategory>): Promise<[ProductCategory[], number]>;
    /**
     * A generic retrieve for fining product categories by different attributes.
     *
     * @param config - the config of the product category to retrieve.
     * @param selector
     * @param treeSelector
     * @return the product category.
     */
    protected retrieve_(config?: FindConfig<ProductCategory>, selector?: Selector<ProductCategory>, treeSelector?: QuerySelector<ProductCategory>): Promise<ProductCategory>;
    /**
     * Retrieves a product category by id.
     * @param productCategoryId - the id of the product category to retrieve.
     * @param config - the config of the product category to retrieve.
     * @param selector
     * @param treeSelector
     * @return the product category.
     */
    retrieve(productCategoryId: string, config?: FindConfig<ProductCategory>, selector?: Selector<ProductCategory>, treeSelector?: QuerySelector<ProductCategory>): Promise<ProductCategory>;
    /**
     * Retrieves a product category by handle.
     *
     * @param handle - the handle of the category
     * @param config - the config of the product category to retrieve.
     * @param selector
     * @param treeSelector
     * @return the product category.
     */
    retrieveByHandle(handle: string, config?: FindConfig<ProductCategory>, selector?: Selector<ProductCategory>, treeSelector?: QuerySelector<ProductCategory>): Promise<ProductCategory>;
    /**
     * Creates a product category
     * @param productCategoryInput - parameters to create a product category
     * @return created product category
     */
    create(productCategoryInput: CreateProductCategoryInput): Promise<ProductCategory>;
    /**
     * Updates a product category
     * @param productCategoryId - id of product category to update
     * @param productCategoryInput - parameters to update in product category
     * @return updated product category
     */
    update(productCategoryId: string, productCategoryInput: UpdateProductCategoryInput): Promise<ProductCategory>;
    /**
     * Deletes a product category
     *
     * @param productCategoryId is the id of the product category to delete
     * @return a promise
     */
    delete(productCategoryId: string): Promise<void>;
    /**
     * Add a batch of product to a product category
     * @param productCategoryId - The id of the product category on which to add the products
     * @param productIds - The products ids to attach to the product category
     * @return the product category on which the products have been added
     */
    addProducts(productCategoryId: string, productIds: string[]): Promise<void>;
    /**
     * Remove a batch of product from a product category
     * @param productCategoryId - The id of the product category on which to remove the products
     * @param productIds - The products ids to remove from the product category
     * @return the product category on which the products have been removed
     */
    removeProducts(productCategoryId: string, productIds: string[]): Promise<void>;
    protected fetchReorderConditions(productCategory: ProductCategory, input: UpdateProductCategoryInput, shouldDeleteElement?: boolean): ReorderConditions;
    protected performReordering(repository: typeof ProductCategoryRepository, conditions: ReorderConditions): Promise<void>;
    protected shiftSiblings(repository: typeof ProductCategoryRepository, conditions: ReorderConditions): Promise<void>;
    /**
     * Accepts an input object and transforms product_category_id
     * into product_category entity.
     * @param productCategoryInput - params used to create/update
     * @return transformed productCategoryInput
     */
    protected transformParentIdToEntity(productCategoryInput: CreateProductCategoryInput | UpdateProductCategoryInput): Promise<CreateProductCategoryInput | UpdateProductCategoryInput>;
}
export default ProductCategoryService;
