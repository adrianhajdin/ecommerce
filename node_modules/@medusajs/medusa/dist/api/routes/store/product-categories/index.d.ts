import { ProductCategory } from "../../../../models";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreProductCategoryRelations: string[];
export declare const defaultStoreCategoryScope: {
    is_internal: boolean;
    is_active: boolean;
};
export declare const defaultStoreProductCategoryFields: string[];
export declare const allowedStoreProductCategoryFields: string[];
/**
 * @schema StoreGetProductCategoriesCategoryRes
 * type: object
 * description: "The product category's details."
 * x-expanded-relations:
 *   field: product_category
 *   relations:
 *     - category_children
 *     - parent_category
 * required:
 *   - product_category
 * properties:
 *   product_category:
 *     description: "Product category details."
 *     $ref: "#/components/schemas/ProductCategory"
 */
export type StoreGetProductCategoriesCategoryRes = {
    product_category: ProductCategory;
};
/**
 * @schema StoreGetProductCategoriesRes
 * type: object
 * description: "The list of product categories with pagination fields."
 * x-expanded-relations:
 *   field: product_categories
 *   relations:
 *     - category_children
 *     - parent_category
 * required:
 *   - product_categories
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   product_categories:
 *      type: array
 *      description: "An array of product categories details."
 *      items:
 *        $ref: "#/components/schemas/ProductCategory"
 *   count:
 *      type: integer
 *      description: The total number of items available
 *   offset:
 *      type: integer
 *      description: The number of product categories skipped when retrieving the product categories.
 *   limit:
 *      type: integer
 *      description: The number of items per page
 */
export type StoreGetProductCategoriesRes = PaginatedResponse & {
    product_categories: ProductCategory[];
};
export * from "./get-product-category";
export * from "./list-product-categories";
