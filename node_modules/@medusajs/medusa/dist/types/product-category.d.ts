import { ProductCategory } from "../models";
export declare const tempReorderRank = 99999;
type ProductCategoryInput = {
    handle?: string;
    is_internal?: boolean;
    is_active?: boolean;
    parent_category_id?: string | null;
    parent_category?: ProductCategory | null;
    rank?: number;
    metadata?: Record<string, unknown>;
};
export type CreateProductCategoryInput = ProductCategoryInput & {
    name: string;
};
export type UpdateProductCategoryInput = ProductCategoryInput & {
    name?: string;
};
export declare class AdminProductCategoriesReqBase {
    description?: string;
    handle?: string;
    is_internal?: boolean;
    is_active?: boolean;
    parent_category_id?: string | null;
}
export declare class ProductBatchProductCategory {
    id: string;
}
export type ReorderConditions = {
    targetCategoryId: string;
    originalParentId: string | null;
    targetParentId: string | null | undefined;
    originalRank: number;
    targetRank: number | undefined;
    shouldChangeParent: boolean;
    shouldChangeRank: boolean;
    shouldIncrementRank: boolean;
    shouldDeleteElement: boolean;
};
export {};
