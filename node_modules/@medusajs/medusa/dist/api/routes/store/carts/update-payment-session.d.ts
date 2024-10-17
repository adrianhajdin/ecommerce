/**
 * @oas [post] /store/carts/{id}/payment-sessions/{provider_id}
 * operationId: PostCartsCartPaymentSessionUpdate
 * summary: Update a Payment Session
 * description: "Update a Payment Session with additional data. This can be useful depending on the payment provider used.
 *  All payment sessions are updated and cart totals are recalculated afterwards."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 *   - (path) provider_id=* {string} The ID of the payment provider.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartPaymentSessionUpdateReq"
 * x-codegen:
 *   method: updatePaymentSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.updatePaymentSession(cartId, "manual", {
 *         data: {
 *
 *         }
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useUpdatePaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const updatePaymentSession = useUpdatePaymentSession(cartId)
 *
 *         const handleUpdate = (
 *           providerId: string,
 *           data: Record<string, unknown>
 *         ) => {
 *           updatePaymentSession.mutate({
 *             provider_id: providerId,
 *             data
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.payment_session)
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
 *       curl -X POST '{backend_url}/store/carts/{id}/payment-sessions/manual' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "data": {}
 *       }'
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
/**
 * @schema StorePostCartsCartPaymentSessionUpdateReq
 * type: object
 * required:
 *   - data
 * properties:
 *   data:
 *     type: object
 *     description: The data to update the payment session with.
 */
export declare class StorePostCartsCartPaymentSessionUpdateReq {
    data: Record<string, unknown>;
}
