import { ProductVariantInventoryService } from "../../../../services";
import { Order } from "../../../../models";
/**
 * @oas [post] /admin/draft-orders/{id}/pay
 * summary: "Mark Paid"
 * operationId: "PostDraftOrdersDraftOrderRegisterPayment"
 * description: "Capture the draft order's payment. This will also set the draft order's status to `completed` and create an Order from the draft order. The payment is captured through Medusa's system payment,
 *  which is manual payment that isn't integrated with any third-party payment provider. It is assumed that the payment capturing is handled manually by the admin."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {String} The Draft Order ID.
 * x-codegen:
 *   method: markPaid
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.markPaid(draftOrderId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDraftOrderRegisterPayment } from "medusa-react"
 *
 *       type Props = {
 *         draftOrderId: string
 *       }
 *
 *       const DraftOrder = ({ draftOrderId }: Props) => {
 *         const registerPayment = useAdminDraftOrderRegisterPayment(
 *           draftOrderId
 *         )
 *         // ...
 *
 *         const handlePayment = () => {
 *           registerPayment.mutate(void 0, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DraftOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/draft-orders/{id}/pay' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Draft Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPostDraftOrdersDraftOrderRegisterPaymentRes"
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
export declare const reserveQuantityForDraftOrder: (order: Order, context: {
    productVariantInventoryService: ProductVariantInventoryService;
    locationId?: string | undefined;
}) => Promise<void>;
