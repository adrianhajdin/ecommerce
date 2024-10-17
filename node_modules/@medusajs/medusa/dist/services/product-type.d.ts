import { ProductType } from "../models";
import { ProductTypeRepository } from "../repositories/product-type";
import { FindConfig, Selector } from "../types/common";
import { TransactionBaseService } from "../interfaces";
declare class ProductTypeService extends TransactionBaseService {
    protected readonly typeRepository_: typeof ProductTypeRepository;
    constructor({ productTypeRepository }: {
        productTypeRepository: any;
    });
    /**
     * Gets a product type by id.
     * Throws in case of DB Error and if product was not found.
     * @param id - id of the product to get.
     * @param config - object that defines what should be included in the
     *   query response
     * @return the result of the find one operation.
     */
    retrieve(id: string, config?: FindConfig<ProductType>): Promise<ProductType>;
    /**
     * Lists product types
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    list(selector?: Selector<ProductType> & {
        q?: string;
        discount_condition_id?: string;
    }, config?: FindConfig<ProductType>): Promise<ProductType[]>;
    /**
     * Lists product types and adds count.
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    listAndCount(selector?: Selector<ProductType> & {
        q?: string;
        discount_condition_id?: string;
    }, config?: FindConfig<ProductType>): Promise<[ProductType[], number]>;
}
export default ProductTypeService;
