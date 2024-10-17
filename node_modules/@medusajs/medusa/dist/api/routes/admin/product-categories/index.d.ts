import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { ProductCategory } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
export * from "./get-product-category";
export * from "./delete-product-category";
export * from "./list-product-categories";
export * from "./create-product-category";
export * from "./update-product-category";
export * from "./add-products-batch";
export * from "./delete-products-batch";
export declare const defaultAdminProductCategoryRelations: string[];
export declare const allowedAdminProductCategoryRelations: string[];
export declare const defaultProductCategoryFields: string[];
/**
 * @schema AdminProductCategoriesCategoryRes
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
export type AdminProductCategoriesCategoryRes = {
    product_category: ProductCategory;
};
/**
 * @schema AdminProductCategoriesCategoryDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted product category
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product-category
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminProductCategoriesCategoryDeleteRes = DeleteResponse;
/**
 * @schema AdminProductCategoriesListRes
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
 *     type: array
 *     description: "An array of product category details."
 *     items:
 *       $ref: "#/components/schemas/ProductCategory"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of product categories skipped when retrieving the product categories.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminProductCategoriesListRes = PaginatedResponse & {
    product_categories: ProductCategory[];
};
