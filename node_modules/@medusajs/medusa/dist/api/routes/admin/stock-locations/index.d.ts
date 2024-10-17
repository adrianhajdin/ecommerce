import { DeleteResponse, PaginatedResponse, StockLocationTypes } from "@medusajs/types";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminStockLocationFields: (keyof StockLocationTypes.StockLocationDTO)[];
export declare const defaultAdminStockLocationRelations: never[];
/**
 * @schema AdminStockLocationsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Stock Location.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: stock_location
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminStockLocationsDeleteRes = DeleteResponse;
/**
 * @schema AdminStockLocationsRes
 * type: object
 * description: "The stock location's details."
 * required:
 *   - stock_location
 * properties:
 *   stock_location:
 *     description: "Stock location details."
 *     $ref: "#/components/schemas/StockLocationExpandedDTO"
 */
export type AdminStockLocationsRes = {
    stock_location: StockLocationTypes.StockLocationExpandedDTO;
};
/**
 * @schema AdminStockLocationsListRes
 * type: object
 * description: "The list of stock locations with pagination fields."
 * required:
 *   - stock_locations
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   stock_locations:
 *     type: array
 *     description: "The list of stock locations."
 *     items:
 *       $ref: "#/components/schemas/StockLocationExpandedDTO"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of stock locations skipped when retrieving the stock locations.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminStockLocationsListRes = PaginatedResponse & {
    stock_locations: StockLocationTypes.StockLocationExpandedDTO[];
};
export * from "./create-stock-location";
export * from "./get-stock-location";
export * from "./list-stock-locations";
export * from "./update-stock-location";
