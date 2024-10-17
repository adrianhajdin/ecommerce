import { FlagRouter } from "@medusajs/utils";
import "reflect-metadata";
import { Region } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultAdminRegionFields: (keyof Region)[];
export declare const defaultAdminRegionRelations: string[];
/**
 * @schema AdminRegionsRes
 * type: object
 * description: "The region's details."
 * x-expanded-relations:
 *   field: region
 *   relations:
 *     - countries
 *     - fulfillment_providers
 *     - payment_providers
 *   eager:
 *     - fulfillment_providers
 *     - payment_providers
 * required:
 *   - region
 * properties:
 *   region:
 *     description: "Region details."
 *     $ref: "#/components/schemas/Region"
 */
export type AdminRegionsRes = {
    region: Region;
};
/**
 * @schema AdminRegionsListRes
 * type: object
 * description: "The list of regions with pagination fields."
 * x-expanded-relations:
 *   field: regions
 *   relations:
 *     - countries
 *     - fulfillment_providers
 *     - payment_providers
 *   eager:
 *     - fulfillment_providers
 *     - payment_providers
 * required:
 *   - regions
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   regions:
 *     type: array
 *     description: "An array of regions details."
 *     items:
 *       $ref: "#/components/schemas/Region"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of regions skipped when retrieving the regions.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminRegionsListRes = PaginatedResponse & {
    regions: Region[];
};
/**
 * @schema AdminRegionsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Region.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: region
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminRegionsDeleteRes = DeleteResponse;
export declare class FulfillmentOption {
    provider_id: string;
    options: unknown[];
}
/**
 * @schema AdminGetRegionsRegionFulfillmentOptionsRes
 * type: object
 * description: "The list of fulfillment options in a region."
 * required:
 *   - fulfillment_options
 * properties:
 *   fulfillment_options:
 *     type: array
 *     description: Fulfillment providers details.
 *     items:
 *       type: object
 *       required:
 *         - provider_id
 *         - options
 *       properties:
 *         provider_id:
 *           description: ID of the fulfillment provider
 *           type: string
 *         options:
 *           description: fulfillment provider options
 *           type: array
 *           items:
 *             type: object
 *             example:
 *               - id: "manual-fulfillment"
 *               - id: "manual-fulfillment-return"
 *                 is_return: true
 */
export declare class AdminGetRegionsRegionFulfillmentOptionsRes {
    fulfillment_options: FulfillmentOption[];
}
export * from "./add-country";
export * from "./add-fulfillment-provider";
export * from "./add-payment-provider";
export * from "./create-region";
export * from "./list-regions";
export * from "./update-region";
export * from "./get-region";
