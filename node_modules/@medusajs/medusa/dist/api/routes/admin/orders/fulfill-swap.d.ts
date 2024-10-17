import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/swaps/{swap_id}/fulfillments
 * operationId: "PostOrdersOrderSwapsSwapFulfillments"
 * summary: "Create a Swap Fulfillment"
 * description: "Create a Fulfillment for a Swap and change its fulfillment status to `fulfilled`. If it requires any additional actions,
 * its fulfillment status may change to `requires_action`."
 * x-authenticated: true
 * externalDocs:
 *   description: Handling a swap's fulfillment
 *   url: https://docs.medusajs.com/modules/orders/swaps#handling-swap-fulfillment
 * parameters:
 *   - (path) id=* {string} The ID of the Order the swap is associated with.
 *   - (path) swap_id=* {string} The ID of the Swap.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderSwapsSwapFulfillmentsReq"
 * x-codegen:
 *   method: fulfillSwap
 *   params: AdminPostOrdersOrderSwapsSwapFulfillmentsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.fulfillSwap(orderId, swapId, {
 *
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminFulfillSwap } from "medusa-react"
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
 *         const fulfillSwap = useAdminFulfillSwap(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleFulfill = () => {
 *           fulfillSwap.mutate({
 *             swap_id: swapId,
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
 *       curl -X POST '{backend_url}/admin/orders/{id}/swaps/{swap_id}/fulfillments' \
 *       -H 'x-medusa-access-token: {api_token}'
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
 * @schema AdminPostOrdersOrderSwapsSwapFulfillmentsReq
 * type: object
 * properties:
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   no_notification:
 *     description: If set to `true`, no notification will be sent to the customer related to this swap.
 *     type: boolean
 *   location_id:
 *     description: "The ID of the fulfillment's location."
 *     type: string
 */
export declare class AdminPostOrdersOrderSwapsSwapFulfillmentsReq {
    metadata?: Record<string, unknown>;
    no_notification?: boolean;
    location_id?: string;
}
export declare class AdminPostOrdersOrderSwapsSwapFulfillmentsParams extends FindParams {
}
