import { FindManyOptions } from "typeorm";
import { ProductVariant } from "../models/product-variant";
import { FindOptionsOrder } from "typeorm/find-options/FindOptionsOrder";
export type FindWithRelationsOptions = FindManyOptions<ProductVariant> & {
    order?: FindOptionsOrder<ProductVariant>;
    withDeleted?: boolean;
};
export declare const ProductVariantRepository: import("typeorm").Repository<ProductVariant>;
export default ProductVariantRepository;
