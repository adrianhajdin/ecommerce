import { ProductVariantInventoryService } from "../../../../services";
import { Fulfillment } from "../../../../models";
import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/fulfillments/{fulfillment_id}/cancel
 * operationId: "PostOrdersOrderFulfillmentsCancel"
 * summary: "Cancel a Fulfilmment"
 * description: "Cancel an order's fulfillment and change its fulfillment status to `canceled`."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (path) fulfillment_id=* {string} The ID of the Fulfillment.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * x-codegen:
 *   method: cancelFulfillment
 *   params: AdminPostOrdersOrderFulfillementsCancelParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.cancelFulfillment(orderId, fulfillmentId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCancelFulfillment } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const cancelFulfillment = useAdminCancelFulfillment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleCancel = (
 *           fulfillmentId: string
 *         ) => {
 *           cancelFulfillment.mutate(fulfillmentId, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.fulfillments)
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
 *       curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/cancel' \
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
export declare const adjustInventoryForCancelledFulfillment: (fulfillment: Fulfillment, context: {
    productVariantInventoryService: ProductVariantInventoryService;
}) => Promise<void>;
export declare class AdminPostOrdersOrderFulfillementsCancelParams extends FindParams {
}
