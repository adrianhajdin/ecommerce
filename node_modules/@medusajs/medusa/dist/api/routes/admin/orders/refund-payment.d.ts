import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/refund
 * operationId: "PostOrdersOrderRefunds"
 * summary: "Create a Refund"
 * description: "Refund an amount for an order. The amount must be less than or equal the `refundable_amount` of the order."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderRefundsReq"
 * x-codegen:
 *   method: refundPayment
 *   params: AdminPostOrdersOrderRefundsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.refundPayment(orderId, {
 *         amount: 1000,
 *         reason: "Do not like it"
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminRefundPayment } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const refundPayment = useAdminRefundPayment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleRefund = (
 *           amount: number,
 *           reason: string
 *         ) => {
 *           refundPayment.mutate({
 *             amount,
 *             reason,
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.refunds)
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
 *       curl -X POST '{backend_url}/admin/orders/adasda/refund' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "amount": 1000,
 *           "reason": "Do not like it"
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
 * @schema AdminPostOrdersOrderRefundsReq
 * type: object
 * description: "The details of the order refund."
 * required:
 *   - amount
 *   - reason
 * properties:
 *   amount:
 *     description: The amount to refund. It should be less than or equal the `refundable_amount` of the order.
 *     type: integer
 *   reason:
 *     description: The reason for the Refund.
 *     type: string
 *   note:
 *     description: A note with additional details about the Refund.
 *     type: string
 *   no_notification:
 *     description: >-
 *       If set to `true`, no notification will be sent to the customer related to this Refund.
 *     type: boolean
 */
export declare class AdminPostOrdersOrderRefundsReq {
    amount: number;
    reason: string;
    note?: string;
    no_notification?: boolean;
}
export declare class AdminPostOrdersOrderRefundsParams extends FindParams {
}
