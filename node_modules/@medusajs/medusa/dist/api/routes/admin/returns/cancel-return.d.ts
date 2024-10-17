/**
 * @oas [post] /admin/returns/{id}/cancel
 * operationId: "PostReturnsReturnCancel"
 * summary: "Cancel a Return"
 * description: "Registers a Return as canceled. The return can be associated with an order, claim, or swap."
 * parameters:
 *   - (path) id=* {string} The ID of the Return.
 * x-codegen:
 *   method: cancel
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returns.cancel(returnId)
 *       .then(({ order }) => {
 *         console.log(order.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCancelReturn } from "medusa-react"
 *
 *       type Props = {
 *         returnId: string
 *       }
 *
 *       const Return = ({ returnId }: Props) => {
 *         const cancelReturn = useAdminCancelReturn(
 *           returnId
 *         )
 *         // ...
 *
 *         const handleCancel = () => {
 *           cancelReturn.mutate(void 0, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.returns)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Return
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/returns/{id}/cancel' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Returns
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReturnsCancelRes"
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
