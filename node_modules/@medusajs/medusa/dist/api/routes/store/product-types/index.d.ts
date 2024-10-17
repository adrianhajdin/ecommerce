import { ProductType } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare const allowedStoreProductTypeFields: string[];
export declare const defaultStoreProductTypeFields: string[];
export declare const defaultStoreProductTypeRelations: never[];
/**
 * @schema StoreProductTypesListRes
 * type: object
 * required:
 *   - product_types
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   product_types:
 *     type: array
 *     description: "An array of product types details."
 *     items:
 *       $ref: "#/components/schemas/ProductType"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of product types skipped when retrieving the product types.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type StoreProductTypesListRes = PaginatedResponse & {
    product_types: ProductType[];
};
export * from "./list-product-types";
