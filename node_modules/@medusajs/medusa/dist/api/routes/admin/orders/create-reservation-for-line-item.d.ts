/**
 * @oas [post] /admin/orders/{id}/line-items/{line_item_id}/reserve
 * operationId: "PostOrdersOrderLineItemReservations"
 * summary: "Create a Reservation"
 * description: "Create a Reservation for a line item at a specified location, optionally for a partial quantity."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (path) line_item_id=* {string} The ID of the Line item.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminOrdersOrderLineItemReservationReq"
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/line-items/{line_item_id}/reserve' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "location_id": "loc_1"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPostReservationsReq"
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
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminOrdersOrderLineItemReservationReq
 * type: object
 * required:
 * - location_id
 * properties:
 *   location_id:
 *     description: "The ID of the location of the reservation"
 *     type: string
 *   quantity:
 *     description: "The quantity to reserve"
 *     type: number
 */
export declare class AdminOrdersOrderLineItemReservationReq {
    location_id: string;
    quantity?: number;
}
