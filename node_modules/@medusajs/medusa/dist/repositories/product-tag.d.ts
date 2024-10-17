import { ProductTag } from "../models/product-tag";
import { ExtendedFindConfig } from "../types/common";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
type UpsertTagsInput = (Partial<ProductTag> & {
    value: string;
})[];
export type DefaultWithoutRelations = Omit<ExtendedFindConfig<ProductTag>, "relations">;
export type FindWithoutRelationsOptions = DefaultWithoutRelations & {
    where: DefaultWithoutRelations["where"] & {
        discount_condition_id?: string;
    };
};
export declare const ProductTagRepository: import("typeorm").Repository<ProductTag> & {
    insertBulk(data: QueryDeepPartialEntity<ProductTag>[]): Promise<ProductTag[]>;
    listTagsByUsage(take?: number): Promise<ProductTag[]>;
    upsertTags(tags: UpsertTagsInput): Promise<ProductTag[]>;
    findAndCountByDiscountConditionId(conditionId: string, query: ExtendedFindConfig<ProductTag>): Promise<[ProductTag[], number]>;
};
export default ProductTagRepository;
