import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/shipment
 * operationId: "PostOrdersOrderShipment"
 * summary: "Ship a Fulfillment"
 * description: "Create a shipment and mark a fulfillment as shipped. This changes the order's fulfillment status to either `partially_shipped` or `shipped`, depending on
 *  whether all the items were shipped."
 * x-authenticated: true
 * externalDocs:
 *   description: Fulfillments of orders
 *   url: https://docs.medusajs.com/modules/orders/#fulfillments-in-orders
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderShipmentReq"
 * x-codegen:
 *   method: createShipment
 *   params: AdminPostOrdersOrderShipmentParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createShipment(order_id, {
 *         fulfillment_id
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateShipment } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const createShipment = useAdminCreateShipment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleCreate = (
 *           fulfillmentId: string
 *         ) => {
 *           createShipment.mutate({
 *             fulfillment_id: fulfillmentId,
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.fulfillment_status)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Order
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/shipment' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "fulfillment_id": "{fulfillment_id}"
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
 *           $ref: "#/components/schemas/AdminOrdersRes"
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
 * @schema AdminPostOrdersOrderShipmentReq
 * type: object
 * description: "The details of the shipment to create."
 * required:
 *   - fulfillment_id
 * properties:
 *   fulfillment_id:
 *     description: The ID of the Fulfillment.
 *     type: string
 *   tracking_numbers:
 *     description: The tracking numbers for the shipment.
 *     type: array
 *     items:
 *       type: string
 *   no_notification:
 *     description: If set to true no notification will be send related to this Shipment.
 *     type: boolean
 */
export declare class AdminPostOrdersOrderShipmentReq {
    fulfillment_id: string;
    tracking_numbers?: string[];
    no_notification?: boolean;
}
export declare class AdminPostOrdersOrderShipmentParams extends FindParams {
}
