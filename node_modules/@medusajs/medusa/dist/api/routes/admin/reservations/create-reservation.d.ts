/**
 * @oas [post] /admin/reservations
 * operationId: "PostReservations"
 * summary: "Create a Reservation"
 * description: "Create a Reservation which can be associated with any resource, such as an order's line item."
 * x-authenticated: true
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostReservationsReq"
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.reservations.create({
 *         line_item_id: "item_123",
 *         location_id: "loc_123",
 *         inventory_item_id: "iitem_123",
 *         quantity: 1
 *       })
 *       .then(({ reservation }) => {
 *         console.log(reservation.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateReservation } from "medusa-react"
 *
 *       const CreateReservation = () => {
 *         const createReservation = useAdminCreateReservation()
 *         // ...
 *
 *         const handleCreate = (
 *           locationId: string,
 *           inventoryItemId: string,
 *           quantity: number
 *         ) => {
 *           createReservation.mutate({
 *             location_id: locationId,
 *             inventory_item_id: inventoryItemId,
 *             quantity,
 *           }, {
 *             onSuccess: ({ reservation }) => {
 *               console.log(reservation.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateReservation
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/reservations' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "line_item_id": "item_123",
 *           "location_id": "loc_123",
 *           "inventory_item_id": "iitem_123",
 *           "quantity": 1
 *       }'
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
 *           $ref: "#/components/schemas/AdminReservationsRes"
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
 * @schema AdminPostReservationsReq
 * type: object
 * description: "The details of the reservation to create."
 * required:
 *   - location_id
 *   - inventory_item_id
 *   - quantity
 * properties:
 *   line_item_id:
 *     description: "The ID of the line item of the reservation."
 *     type: string
 *   location_id:
 *     description: "The ID of the location of the reservation."
 *     type: string
 *   inventory_item_id:
 *     description: "The ID of the inventory item the reservation is associated with."
 *     type: string
 *   quantity:
 *     description: "The quantity to reserve."
 *     type: number
 *   description:
 *     description: "The reservation's description."
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostReservationsReq {
    line_item_id?: string;
    location_id: string;
    inventory_item_id: string;
    quantity: number;
    description?: string;
    metadata?: Record<string, unknown>;
}
