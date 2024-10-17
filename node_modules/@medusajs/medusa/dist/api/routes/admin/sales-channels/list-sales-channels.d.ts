import { DateComparisonOperator } from "../../../../types/common";
import { Request, Response } from "express";
/**
 * @oas [get] /admin/sales-channels
 * operationId: "GetSalesChannels"
 * summary: "List Sales Channels"
 * description: "Retrieve a list of sales channels. The sales channels can be filtered by fields such as `q` or `name`. The sales channels can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) id {string} Filter by a sales channel ID.
 *   - (query) name {string} Filter by name.
 *   - (query) description {string} Filter by description.
 *   - (query) q {string} term used to search sales channels' names and descriptions.
 *   - (query) order {string} A sales-channel field to sort-order the retrieved sales channels by.
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
 *   - (query) offset=0 {integer} The number of sales channels to skip when retrieving the sales channels.
 *   - (query) limit=20 {integer} Limit the number of sales channels returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned sales channels.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned sales channels.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetSalesChannelsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.salesChannels.list()
 *       .then(({ sales_channels, limit, offset, count }) => {
 *         console.log(sales_channels.length)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminSalesChannels } from "medusa-react"
 *
 *       const SalesChannels = () => {
 *         const { sales_channels, isLoading } = useAdminSalesChannels()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {sales_channels && !sales_channels.length && (
 *               <span>No Sales Channels</span>
 *             )}
 *             {sales_channels && sales_channels.length > 0 && (
 *               <ul>
 *                 {sales_channels.map((salesChannel) => (
 *                   <li key={salesChannel.id}>{salesChannel.name}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default SalesChannels
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/sales-channels' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Sales Channels
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminSalesChannelsListRes"
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
declare const AdminGetSalesChannelsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved sales channels.
 */
export declare class AdminGetSalesChannelsParams extends AdminGetSalesChannelsParams_base {
    /**
     * ID to filter sales channels by.
     */
    id?: string;
    /**
     * Search term to search sales channels' names and descriptions.
     */
    q?: string;
    /**
     * Name to filter sales channels by.
     */
    name?: string;
    /**
     * Description to filter sales channels by.
     */
    description?: string;
    /**
     * Date filters to apply on sales channels' `created_at` field.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on sales channels' `updated_at` field.
     */
    updated_at?: DateComparisonOperator;
    /**
     * Date filters to apply on sales channels' `deleted_at` field.
     */
    deleted_at?: DateComparisonOperator;
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
}
