/**
 * @oas [post] /store/payment-collections/{id}/sessions/{session_id}
 * operationId: PostPaymentCollectionsPaymentCollectionPaymentSessionsSession
 * summary: "Refresh a Payment Session"
 * description: "Refresh a Payment Session's data to ensure that it is in sync with the Payment Collection."
 * x-authenticated: false
 * parameters:
 *   - (path) id=* {string} The id of the PaymentCollection.
 *   - (path) session_id=* {string} The id of the Payment Session to be refreshed.
 * x-codegen:
 *   method: refreshPaymentSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.paymentCollections.refreshPaymentSession(paymentCollectionId, sessionId)
 *       .then(({ payment_session }) => {
 *         console.log(payment_session.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { usePaymentCollectionRefreshPaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         paymentCollectionId: string
 *       }
 *
 *       const PaymentCollection = ({
 *         paymentCollectionId
 *       }: Props) => {
 *         const refreshPaymentSession = usePaymentCollectionRefreshPaymentSession(
 *           paymentCollectionId
 *         )
 *         // ...
 *
 *         const handleRefreshPaymentSession = (paymentSessionId: string) => {
 *           refreshPaymentSession.mutate(paymentSessionId, {
 *             onSuccess: ({ payment_session }) => {
 *               console.log(payment_session.status)
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
 *       curl -X POST '{backend_url}/store/payment-collections/{id}/sessions/{session_id}'
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
