import { PricedShippingOption } from "../../../../types/pricing";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultRelations: string[];
/**
 * @schema StoreShippingOptionsListRes
 * type: object
 * description: "The list of shipping options."
 * x-expanded-relations:
 *   field: shipping_options
 *   relations:
 *     - requirements
 * required:
 *   - shipping_options
 * properties:
 *   shipping_options:
 *     type: array
 *     description: "An array of shipping options details."
 *     items:
 *       $ref: "#/components/schemas/PricedShippingOption"
 */
export type StoreShippingOptionsListRes = {
    shipping_options: PricedShippingOption[];
};
/**
 * @schema StoreCartShippingOptionsListRes
 * type: object
 * x-expanded-relations:
 *   field: shipping_options
 *   implicit:
 *     - profile
 *     - requirements
 * required:
 *   - shipping_options
 * properties:
 *   shipping_options:
 *     type: array
 *     description: "An array of shipping options details."
 *     items:
 *       $ref: "#/components/schemas/PricedShippingOption"
 */
export type StoreCartShippingOptionsListRes = {
    shipping_options: PricedShippingOption[];
};
export * from "./list-options";
export * from "./list-shipping-options";
