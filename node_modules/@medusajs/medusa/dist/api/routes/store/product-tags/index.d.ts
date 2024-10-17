import { Router } from "express";
import { ProductTag } from "../../../../models";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: Router) => Router;
export default _default;
export declare const defaultStoreProductTagFields: string[];
export declare const allowedStoreProductTagFields: string[];
export declare const defaultStoreProductTagRelations: never[];
/**
 * @schema StoreProductTagsListRes
 * type: object
 * description: "The list of product tags with pagination fields."
 * required:
 *   - product_tags
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   product_tags:
 *      type: array
 *      description: "An array of product tags details."
 *      items:
 *        $ref: "#/components/schemas/ProductTag"
 *   count:
 *      type: integer
 *      description: The total number of items available
 *   offset:
 *      type: integer
 *      description: The number of product tags skipped when retrieving the product tags.
 *   limit:
 *      type: integer
 *      description: The number of items per page
 */
export type StoreProductTagsListRes = PaginatedResponse & {
    product_tags: ProductTag[];
};
export * from "./list-product-tags";
