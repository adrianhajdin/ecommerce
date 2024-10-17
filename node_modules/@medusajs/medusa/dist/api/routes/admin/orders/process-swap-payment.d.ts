import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/swaps/{swap_id}/process-payment
 * operationId: "PostOrdersOrderSwapsSwapProcessPayment"
 * summary: "Process a Swap Payment"
 * description: "Process a swap's payment either by refunding or issuing a payment. This depends on the `difference_due` of the swap. If `difference_due` is negative, the amount is refunded.
 *  If `difference_due` is positive, the amount is captured."
 * x-authenticated: true
 * externalDocs:
 *   description: Handling a swap's payment
 *   url: https://docs.medusajs.com/modules/orders/swaps#handling-swap-payment
 * parameters:
 *   - (path) id=* {string} The ID of the order the swap is associated with.
 *   - (path) swap_id=* {string} The ID of the swap.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * x-codegen:
 *   method: processSwapPayment
 *   params: AdminPostOrdersOrderSwapsSwapProcessPaymentParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.processSwapPayment(orderId, swapId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminProcessSwapPayment } from "medusa-react"
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
 *         const processPayment = useAdminProcessSwapPayment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleProcessPayment = () => {
 *           processPayment.mutate(swapId, {
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
 *       curl -X POST '{backend_url}/admin/orders/{id}/swaps/{swap_id}/process-payment' \
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
export declare class AdminPostOrdersOrderSwapsSwapProcessPaymentParams extends FindParams {
}
