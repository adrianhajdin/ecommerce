/**
 * @oas [post] /store/carts/{id}/payment-sessions
 * operationId: "PostCartsCartPaymentSessions"
 * summary: "Create Payment Sessions"
 * description: "Create Payment Sessions for each of the available Payment Providers in the Cart's Region. If there's only one payment session created,
 *  it will be selected by default. The creation of the payment session uses the payment provider and may require sending requests to third-party services."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 * x-codegen:
 *   method: createPaymentSessions
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.createPaymentSessions(cartId)
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreatePaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const createPaymentSession = useCreatePaymentSession(cartId)
 *
 *         const handleComplete = () => {
 *           createPaymentSession.mutate(void 0, {
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
 *       curl -X POST '{backend_url}/store/carts/{id}/payment-sessions'
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
