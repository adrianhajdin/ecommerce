/**
 * @oas [get] /store/return-reasons
 * operationId: "GetReturnReasons"
 * summary: "List Return Reasons"
 * description: "Retrieve a list of Return Reasons. This is useful when implementing a Create Return flow in the storefront."
 * x-codegen:
 *   method: list
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.returnReasons.list()
 *       .then(({ return_reasons }) => {
 *         console.log(return_reasons.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useReturnReasons } from "medusa-react"
 *
 *       const ReturnReasons = () => {
 *         const {
 *           return_reasons,
 *           isLoading
 *         } = useReturnReasons()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {return_reasons?.length && (
 *               <ul>
 *                 {return_reasons.map((returnReason) => (
 *                   <li key={returnReason.id}>
 *                     {returnReason.label}
 *                   </li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default ReturnReasons
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/return-reasons'
 * tags:
 *   - Return Reasons
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreReturnReasonsListRes"
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
