import "reflect-metadata";
import { SalesChannel } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminSalesChannelsRes
 * type: object
 * description: "The sales channel's details."
 * required:
 *   - sales_channel
 * properties:
 *   sales_channel:
 *     description: Sales Channel's details.
 *     $ref: "#/components/schemas/SalesChannel"
 */
export type AdminSalesChannelsRes = {
    sales_channel: SalesChannel;
};
/**
 * @schema AdminSalesChannelsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted sales channel
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: sales-channel
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminSalesChannelsDeleteRes = DeleteResponse;
/**
 * @schema AdminSalesChannelsDeleteLocationRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the removed stock location from a sales channel
 *   object:
 *     type: string
 *     description: The type of the object that was removed.
 *     default: stock-location
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminSalesChannelsDeleteLocationRes = DeleteResponse;
/**
 * @schema AdminSalesChannelsListRes
 * type: object
 * description: "The list of sales channels with pagination fields."
 * required:
 *   - sales_channels
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   sales_channels:
 *     type: array
 *     description: "An array of sales channels details."
 *     items:
 *       $ref: "#/components/schemas/SalesChannel"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of items skipped before the returned results
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminSalesChannelsListRes = PaginatedResponse & {
    sales_channels: SalesChannel[];
};
export * from "./add-product-batch";
export * from "./create-sales-channel";
export * from "./delete-products-batch";
export * from "./delete-sales-channel";
export * from "./get-sales-channel";
export * from "./list-sales-channels";
export * from "./update-sales-channel";
export * from "./associate-stock-location";
export * from "./remove-stock-location";
