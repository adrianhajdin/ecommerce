import { ProductTag } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminProductTagsFields: string[];
export declare const defaultAdminProductTagsRelations: never[];
/**
 * @schema AdminProductTagsListRes
 * type: object
 * description: "The list of product tags with pagination fields."
 * required:
 *   - product_tags
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   product_tags:
 *     type: array
 *     description: "An array of product tag details."
 *     items:
 *       $ref: "#/components/schemas/ProductTag"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of product tags skipped when retrieving the product tags.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminProductTagsListRes = PaginatedResponse & {
    product_tags: ProductTag[];
};
export * from "./list-product-tags";
