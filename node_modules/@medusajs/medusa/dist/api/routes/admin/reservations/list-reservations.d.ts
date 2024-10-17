import { Request, Response } from "express";
import { DateComparisonOperator, NumericalComparisonOperator, StringComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /admin/reservations
 * operationId: "GetReservations"
 * summary: "List Reservations"
 * description: "Retrieve a list of Reservations. The reservations can be filtered by fields such as `location_id` or `quantity`. The reservations can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: location_id
 *     style: form
 *     explode: false
 *     description: Filter by location ID
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: inventory_item_id
 *     style: form
 *     explode: false
 *     description: Filter by inventory item ID.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: line_item_id
 *     style: form
 *     explode: false
 *     description: Filter by line item ID.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: quantity
 *     description: Filter by reservation quantity
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *           type: number
 *           description: filter by reservation quantity less than this number
 *         gt:
 *           type: number
 *           description: filter by reservation quantity greater than this number
 *         lte:
 *           type: number
 *           description: filter by reservation quantity less than or equal to this number
 *         gte:
 *           type: number
 *           description: filter by reservation quantity greater than or equal to this number
 *   - in: query
 *     name: description
 *     description: Filter by description.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: description value to filter by.
 *         - type: object
 *           properties:
 *             contains:
 *               type: string
 *               description: filter by reservation description containing search string.
 *             starts_with:
 *               type: string
 *               description: filter by reservation description starting with search string.
 *             ends_with:
 *               type: string
 *               description: filter by reservation description ending with search string.
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
 *   - (query) offset=0 {integer} The number of reservations to skip when retrieving the reservations.
 *   - (query) limit=20 {integer} Limit the number of reservations returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned reservations.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned reservations.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetReservationsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.reservations.list()
 *       .then(({ reservations, count, limit, offset }) => {
 *         console.log(reservations.length)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminReservations } from "medusa-react"
 *
 *       const Reservations = () => {
 *         const { reservations, isLoading } = useAdminReservations()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {reservations && !reservations.length && (
 *               <span>No Reservations</span>
 *             )}
 *             {reservations && reservations.length > 0 && (
 *               <ul>
 *                 {reservations.map((reservation) => (
 *                   <li key={reservation.id}>{reservation.quantity}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Reservations
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/product-categories' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Reservations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReservationsListRes"
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
declare const AdminGetReservationsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved reservations.
 */
export declare class AdminGetReservationsParams extends AdminGetReservationsParams_base {
    /**
     * Location IDs to filter reservations by.
     */
    location_id?: string | string[];
    /**
     * Inventory item IDs to filter reservations by.
     */
    inventory_item_id?: string[];
    /**
     * Line item IDs to filter reservations by.
     */
    line_item_id?: string[];
    /**
     * "Create by" user IDs to filter reservations by.
     */
    created_by?: string[];
    /**
     * Numerical filters to apply on the reservations' `quantity` field.
     */
    quantity?: NumericalComparisonOperator;
    /**
     * Date filters to apply on the reservations' `created_at` field.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the reservations' `updated_at` field.
     */
    updated_at?: DateComparisonOperator;
    /**
     * String filters to apply on the reservations' `description` field.
     */
    description?: string | StringComparisonOperator;
}
