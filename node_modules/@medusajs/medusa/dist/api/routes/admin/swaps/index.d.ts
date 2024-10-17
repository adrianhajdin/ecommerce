import { Swap } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminSwapRelations: string[];
export declare const defaultAdminSwapFields: string[];
/**
 * @schema AdminSwapsListRes
 * type: object
 * description: "The list of swaps with pagination fields."
 * required:
 *   - swaps
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   swaps:
 *     type: array
 *     description: "An array of swaps details."
 *     items:
 *       $ref: "#/components/schemas/Swap"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of swaps skipped when retrieving the swaps.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminSwapsListRes = PaginatedResponse & {
    swaps: Swap[];
};
/**
 * @schema AdminSwapsRes
 * type: object
 * description: "The swap's details."
 * x-expanded-relations:
 *   field: swap
 *   relations:
 *     - additional_items
 *     - additional_items.adjustments
 *     - cart
 *     - cart.items
 *     - cart.items.adjustments
 *     - cart.items.variant
 *     - fulfillments
 *     - order
 *     - payment
 *     - return_order
 *     - shipping_address
 *     - shipping_methods
 *   eager:
 *     - fulfillments.items
 *     - shipping_methods.shipping_option
 * required:
 *   - swap
 * properties:
 *   swap:
 *     description: "Swap details."
 *     $ref: "#/components/schemas/Swap"
 */
export type AdminSwapsRes = {
    swap: Swap;
};
export * from "./get-swap";
export * from "./list-swaps";
