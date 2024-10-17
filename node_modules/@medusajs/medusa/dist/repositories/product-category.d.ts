import { DeleteResult, FindOneOptions } from "typeorm";
import { ProductCategory } from "../models/product-category";
import { ExtendedFindConfig, QuerySelector } from "../types/common";
export declare const ProductCategoryRepository: import("typeorm").TreeRepository<ProductCategory> & {
    findOneWithDescendants(query: FindOneOptions<ProductCategory>, treeScope?: QuerySelector<ProductCategory>): Promise<ProductCategory | null>;
    getFreeTextSearchResultsAndCount(options?: ExtendedFindConfig<ProductCategory>, q?: string, treeScope?: QuerySelector<ProductCategory>, includeTree?: boolean): Promise<[ProductCategory[], number]>;
    addProducts(productCategoryId: string, productIds: string[]): Promise<void>;
    removeProducts(productCategoryId: string, productIds: string[]): Promise<DeleteResult>;
};
export default ProductCategoryRepository;
