/**
 * @oas [delete] /store/carts/{id}/payment-sessions/{provider_id}
 * operationId: DeleteCartsCartPaymentSessionsSession
 * summary: "Delete a Payment Session"
 * description: "Delete a Payment Session in a Cart. May be useful if a payment has failed. The totals will be recalculated."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 *   - (path) provider_id=* {string} The ID of the Payment Provider used to create the Payment Session to be deleted.
 * x-codegen:
 *   method: deletePaymentSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.deletePaymentSession(cartId, "manual")
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useDeletePaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const deletePaymentSession = useDeletePaymentSession(cartId)
 *
 *         const handleDeletePaymentSession = (
 *           providerId: string
 *         ) => {
 *           deletePaymentSession.mutate({
 *             provider_id: providerId,
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.payment_sessions)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/store/carts/{id}/payment-sessions/{provider_id}'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCartsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
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
