/**
 * @oas [get] /store/return-reasons/{id}
 * operationId: "GetReturnReasonsReason"
 * summary: "Get a Return Reason"
 * description: "Retrieve a Return Reason's details."
 * parameters:
 *   - (path) id=* {string} The id of the Return Reason.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.returnReasons.retrieve(reasonId)
 *       .then(({ return_reason }) => {
 *         console.log(return_reason.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useReturnReason } from "medusa-react"
 *
 *       type Props = {
 *         returnReasonId: string
 *       }
 *
 *       const ReturnReason = ({ returnReasonId }: Props) => {
 *         const {
 *           return_reason,
 *           isLoading
 *         } = useReturnReason(
 *           returnReasonId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {return_reason && <span>{return_reason.label}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default ReturnReason
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/return-reasons/{id}'
 * tags:
 *   - Return Reasons
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreReturnReasonsRes"
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
