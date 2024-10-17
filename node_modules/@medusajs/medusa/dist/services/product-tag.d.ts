import { EntityManager } from "typeorm";
import { ProductTag } from "../models";
import { ProductTagRepository } from "../repositories/product-tag";
import { FindConfig, Selector } from "../types/common";
import { TransactionBaseService } from "../interfaces";
type ProductTagConstructorProps = {
    manager: EntityManager;
    productTagRepository: typeof ProductTagRepository;
};
declare class ProductTagService extends TransactionBaseService {
    protected readonly tagRepo_: typeof ProductTagRepository;
    constructor({ productTagRepository }: ProductTagConstructorProps);
    /**
     * Retrieves a product tag by id.
     * @param tagId - the id of the product tag to retrieve
     * @param config - the config to retrieve the tag by
     * @return the collection.
     */
    retrieve(tagId: string, config?: FindConfig<ProductTag>): Promise<ProductTag>;
    /**
     * Creates a product tag
     * @param tag - the product tag to create
     * @return created product tag
     */
    create(tag: Partial<ProductTag>): Promise<ProductTag>;
    /**
     * Lists product tags
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    list(selector?: Selector<ProductTag> & {
        q?: string;
        discount_condition_id?: string;
    }, config?: FindConfig<ProductTag>): Promise<ProductTag[]>;
    /**
     * Lists product tags and adds count.
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    listAndCount(selector?: Selector<ProductTag> & {
        q?: string;
        discount_condition_id?: string;
    }, config?: FindConfig<ProductTag>): Promise<[ProductTag[], number]>;
}
export default ProductTagService;
