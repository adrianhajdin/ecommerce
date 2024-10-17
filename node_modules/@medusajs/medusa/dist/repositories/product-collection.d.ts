import { ProductCollection } from "../models";
import { ExtendedFindConfig } from "../types/common";
export declare const ProductCollectionRepository: import("typeorm").Repository<ProductCollection> & {
    findAndCountByDiscountConditionId(conditionId: string, query: ExtendedFindConfig<ProductCollection>): Promise<[ProductCollection[], number]>;
};
export default ProductCollectionRepository;
