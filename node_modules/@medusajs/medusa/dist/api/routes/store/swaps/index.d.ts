import { Swap } from "./../../../../";
import { FindConfig } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreSwapRelations: string[];
export declare const defaultStoreSwapFields: FindConfig<Swap>["select"];
/**
 * @schema StoreSwapsRes
 * type: object
 * description: "The swap's details."
 * x-expanded-relations:
 *   field: swap
 *   relations:
 *     - additional_items
 *     - additional_items.variant
 *     - cart
 *     - fulfillments
 *     - order
 *     - payment
 *     - return_order
 *     - return_order.shipping_method
 *     - shipping_address
 *     - shipping_methods
 *   eager:
 *     - fulfillments.items
 * required:
 *   - swap
 * properties:
 *   swap:
 *     description: "Swap details."
 *     $ref: "#/components/schemas/Swap"
 */
export type StoreSwapsRes = {
    swap: Swap;
};
export * from "./create-swap";
export * from "./get-swap-by-cart";
