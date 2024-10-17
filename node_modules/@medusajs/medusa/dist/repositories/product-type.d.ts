import { ProductType } from "../models";
import { ExtendedFindConfig } from "../types/common";
type UpsertTypeInput = Partial<ProductType> & {
    value: string;
};
export declare const ProductTypeRepository: import("typeorm").Repository<ProductType> & {
    upsertType(type?: UpsertTypeInput): Promise<ProductType | null>;
    findAndCountByDiscountConditionId(conditionId: string, query: ExtendedFindConfig<ProductType>): Promise<[ProductType[], number]>;
};
export default ProductTypeRepository;
