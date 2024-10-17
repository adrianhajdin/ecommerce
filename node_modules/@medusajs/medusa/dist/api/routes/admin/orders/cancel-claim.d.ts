import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/claims/{claim_id}/cancel
 * operationId: "PostOrdersClaimCancel"
 * summary: "Cancel a Claim"
 * description: "Cancel a Claim and change its status. A claim can't be canceled if it has a refund, if its fulfillments haven't been canceled, of if its associated return hasn't been canceled."
 * x-authenticated: true
 * externalDocs:
 *   description: Canceling a claim
 *   url: https://docs.medusajs.com/modules/orders/claims#cancel-a-claim
 * parameters:
 *   - (path) id=* {string} The ID of the order the claim is associated with.
 *   - (path) claim_id=* {string} The ID of the Claim.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * x-codegen:
 *   method: cancelClaim
 *   params: AdminPostOrdersClaimCancel
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.cancelClaim(orderId, claimId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCancelClaim } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *         claimId: string
 *       }
 *
 *       const Claim = ({ orderId, claimId }: Props) => {
 *         const cancelClaim = useAdminCancelClaim(orderId)
 *         // ...
 *
 *         const handleCancel = () => {
 *           cancelClaim.mutate(claimId)
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Claim
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/claims/{claim_id}/cancel' \
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
export declare class AdminPostOrdersClaimCancel extends FindParams {
}
