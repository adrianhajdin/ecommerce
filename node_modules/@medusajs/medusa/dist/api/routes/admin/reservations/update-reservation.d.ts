/**
 * @oas [post] /admin/reservations/{id}
 * operationId: "PostReservationsReservation"
 * summary: "Update a Reservation"
 * description: "Update a Reservation's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Reservation.
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostReservationsReservationReq"
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.reservations.update(reservationId, {
 *         quantity: 3
 *       })
 *       .then(({ reservation }) => {
 *         console.log(reservation.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateReservation } from "medusa-react"
 *
 *       type Props = {
 *         reservationId: string
 *       }
 *
 *       const Reservation = ({ reservationId }: Props) => {
 *         const updateReservation = useAdminUpdateReservation(
 *           reservationId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           quantity: number
 *         ) => {
 *           updateReservation.mutate({
 *             quantity,
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Reservation
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/reservations/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *          "quantity": 3,
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
 * @schema AdminPostReservationsReservationReq
 * type: object
 * description: "The details to update of the reservation."
 * properties:
 *   location_id:
 *     description: "The ID of the location associated with the reservation."
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
export declare class AdminPostReservationsReservationReq {
    quantity?: number;
    location_id?: string;
    description?: string;
    metadata?: Record<string, unknown>;
}
