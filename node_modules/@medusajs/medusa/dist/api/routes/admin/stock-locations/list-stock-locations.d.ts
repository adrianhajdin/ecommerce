import { Request, Response } from "express";
/**
 * @oas [get] /admin/stock-locations
 * operationId: "GetStockLocations"
 * summary: "List Stock Locations"
 * description: "Retrieve a list of stock locations. The stock locations can be filtered by fields such as `name` or `created_at`. The stock locations can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) id {string} Filter by ID.
 *   - (query) name {string} Filter by name.
 *   - (query) order {string} A stock-location field to sort-order the retrieved stock locations by.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: deleted_at
 *     description: Filter by a deletion date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - (query) offset=0 {integer} The number of stock locations to skip when retrieving the stock locations.
 *   - (query) limit=20 {integer} Limit the number of stock locations returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned stock locations.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned stock locations.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetStockLocationsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.stockLocations.list()
 *       .then(({ stock_locations, limit, offset, count }) => {
 *         console.log(stock_locations.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminStockLocations } from "medusa-react"
 *
 *       function StockLocations() {
 *         const {
 *           stock_locations,
 *           isLoading
 *         } = useAdminStockLocations()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {stock_locations && !stock_locations.length && (
 *               <span>No Locations</span>
 *             )}
 *             {stock_locations && stock_locations.length > 0 && (
 *               <ul>
 *                 {stock_locations.map(
 *                   (location) => (
 *                     <li key={location.id}>{location.name}</li>
 *                   )
 *                 )}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default StockLocations
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/stock-locations' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Stock Locations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminStockLocationsListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
declare const AdminGetStockLocationsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved stock locations.
 */
export declare class AdminGetStockLocationsParams extends AdminGetStockLocationsParams_base {
    /**
     * Search term to search stock location names.
     */
    q?: string;
    /**
     * IDs to filter stock locations by.
     */
    id?: string | string[];
    /**
     * Names to filter stock locations by.
     */
    name?: string | string[];
    /**
     * Filter stock locations by the ID of their associated addresses.
     */
    address_id?: string | string[];
    /**
     * Filter stock locations by the ID of their associated sales channels.
     */
    sales_channel_id?: string | string[];
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
}
