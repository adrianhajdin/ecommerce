import "reflect-metadata";
import { ProductCollection } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminCollectionsFields: string[];
export declare const defaultAdminCollectionsRelations: string[];
/**
 * @schema AdminCollectionsListRes
 * type: object
 * required:
 *   - collections
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   collections:
 *      type: array
 *      description: an array of collection details
 *      items:
 *        $ref: "#/components/schemas/ProductCollection"
 *   count:
 *      type: integer
 *      description: The total number of items available
 *   offset:
 *      type: integer
 *      description: The number of product collections skipped when retrieving the product collections.
 *   limit:
 *      type: integer
 *      description: The number of items per page
 */
export type AdminCollectionsListRes = PaginatedResponse & {
    collections: ProductCollection[];
};
/**
 * @schema AdminCollectionsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Collection
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product-collection
 *   deleted:
 *     type: boolean
 *     description: Whether the collection was deleted successfully or not.
 *     default: true
 */
export type AdminCollectionsDeleteRes = DeleteResponse;
/**
 * @schema AdminDeleteProductsFromCollectionRes
 * type: object
 * description: "Deletion operation details"
 * required:
 *   - id
 *   - object
 *   - removed_products
 * properties:
 *   id:
 *     type: string
 *     description: "The ID of the collection"
 *   object:
 *     type: string
 *     description: "The type of object the removal was executed on"
 *     default: product-collection
 *   removed_products:
 *     description: "The IDs of the products removed from the collection"
 *     type: array
 *     items:
 *       description: "The ID of the Product removed from the Product Collection."
 *       type: string
 */
export type AdminDeleteProductsFromCollectionRes = {
    id: string;
    object: string;
    removed_products: string[];
};
/**
 * @schema AdminCollectionsRes
 * type: object
 * description: The collection's details.
 * x-expanded-relations:
 *   field: collection
 *   relations:
 *     - products
 * required:
 *   - collection
 * properties:
 *   collection:
 *     description: "Product Collection details."
 *     $ref: "#/components/schemas/ProductCollection"
 */
export type AdminCollectionsRes = {
    collection: ProductCollection;
};
export * from "./add-products";
export * from "./create-collection";
export * from "./delete-collection";
export * from "./get-collection";
export * from "./list-collections";
export * from "./remove-products";
export * from "./update-collection";
