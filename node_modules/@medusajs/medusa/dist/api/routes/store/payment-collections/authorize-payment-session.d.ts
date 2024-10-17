/**
 * @oas [post] /store/payment-collections/{id}/sessions/{session_id}/authorize
 * operationId: "PostPaymentCollectionsSessionsSessionAuthorize"
 * summary: "Authorize Payment Session"
 * description: "Authorize a Payment Session of a Payment Collection."
 * x-authenticated: false
 * parameters:
 *   - (path) id=* {string} The ID of the Payment Collection.
 *   - (path) session_id=* {string} The ID of the Payment Session.
 * x-codegen:
 *   method: authorizePaymentSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.paymentCollections.authorize(paymentId, sessionId)
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAuthorizePaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         paymentCollectionId: string
 *       }
 *
 *       const PaymentCollection = ({
 *         paymentCollectionId
 *       }: Props) => {
 *         const authorizePaymentSession = useAuthorizePaymentSession(
 *           paymentCollectionId
 *         )
 *         // ...
 *
 *         const handleAuthorizePayment = (paymentSessionId: string) => {
 *           authorizePaymentSession.mutate(paymentSessionId, {
 *             onSuccess: ({ payment_collection }) => {
 *               console.log(payment_collection.payment_sessions)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default PaymentCollection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/payment-collections/{id}/sessions/{session_id}/authorize'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Payment Collections
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StorePaymentCollectionsSessionRes"
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
