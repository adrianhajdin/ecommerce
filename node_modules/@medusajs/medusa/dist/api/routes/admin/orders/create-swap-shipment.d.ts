import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/swaps/{swap_id}/shipments
 * operationId: "PostOrdersOrderSwapsSwapShipments"
 * summary: "Ship a Swap's Fulfillment"
 * description: "Create a shipment for a swap and mark its fulfillment as shipped. This changes the swap's fulfillment status to either `partially_shipped` or `shipped`, depending on
 *  whether all the items were shipped."
 * x-authenticated: true
 * externalDocs:
 *   description: Handling swap fulfillments
 *   url: https://docs.medusajs.com/modules/orders/swaps#handling-swap-fulfillment
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (path) swap_id=* {string} The ID of the Swap.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderSwapsSwapShipmentsReq"
 * x-codegen:
 *   method: createSwapShipment
 *   params: AdminPostOrdersOrderSwapsSwapShipmentsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createSwapShipment(orderId, swapId, {
 *         fulfillment_id
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateSwapShipment } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string,
 *         swapId: string
 *       }
 *
 *       const Swap = ({
 *         orderId,
 *         swapId
 *       }: Props) => {
 *         const createShipment = useAdminCreateSwapShipment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleCreateShipment = (
 *           fulfillmentId: string
 *         ) => {
 *           createShipment.mutate({
 *             swap_id: swapId,
 *             fulfillment_id: fulfillmentId,
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.swaps)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Swap
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/swaps/{swap_id}/shipments' \
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
 * @schema AdminPostOrdersOrderSwapsSwapShipmentsReq
 * type: object
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
 *     description: If set to true no notification will be sent related to this Claim.
 *     type: boolean
 */
export declare class AdminPostOrdersOrderSwapsSwapShipmentsReq {
    fulfillment_id: string;
    tracking_numbers?: string[];
    no_notification?: boolean;
}
export declare class AdminPostOrdersOrderSwapsSwapShipmentsParams extends FindParams {
}
