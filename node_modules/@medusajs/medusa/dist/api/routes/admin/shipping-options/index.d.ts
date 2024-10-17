import { FlagRouter } from "@medusajs/utils";
import { ShippingOption } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const shippingOptionsDefaultFields: (keyof ShippingOption)[];
export declare const shippingOptionsDefaultRelations: string[];
/**
 * @schema AdminShippingOptionsListRes
 * type: object
 * description: "The list of shipping options with pagination fields."
 * x-expanded-relations:
 *   field: shipping_options
 *   relations:
 *     - profile
 *     - region
 *     - requirements
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 * required:
 *   - shipping_options
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   shipping_options:
 *     type: array
 *     description: "An array of shipping options details."
 *     items:
 *       $ref: "#/components/schemas/ShippingOption"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of shipping options skipped when retrieving the shipping options.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminShippingOptionsListRes = PaginatedResponse & {
    shipping_options: ShippingOption[];
};
/**
 * @schema AdminShippingOptionsRes
 * type: object
 * description: "The shipping option's details."
 * x-expanded-relations:
 *   field: shipping_option
 *   relations:
 *     - profile
 *     - region
 *     - requirements
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 * required:
 *   - shipping_option
 * properties:
 *   shipping_option:
 *     description: "Shipping option details."
 *     $ref: "#/components/schemas/ShippingOption"
 */
export type AdminShippingOptionsRes = {
    shipping_option: ShippingOption;
};
/**
 * @schema AdminShippingOptionsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Shipping Option.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: shipping-option
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminShippingOptionsDeleteRes = DeleteResponse;
export * from "./create-shipping-option";
export * from "./delete-shipping-option";
export * from "./get-shipping-option";
export * from "./list-shipping-options";
export * from "./update-shipping-option";
