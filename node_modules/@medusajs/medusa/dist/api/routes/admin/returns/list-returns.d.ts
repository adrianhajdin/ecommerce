/**
 * @oas [get] /admin/returns
 * operationId: "GetReturns"
 * summary: "List Returns"
 * description: "Retrieve a list of Returns. The returns can be paginated."
 * parameters:
 *   - (query) limit=50 {number} Limit the number of Returns returned.
 *   - (query) offset=0 {number} The number of Returns to skip when retrieving the Returns.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetReturnsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returns.list()
 *       .then(({ returns, limit, offset, count }) => {
 *         console.log(returns.length)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminReturns } from "medusa-react"
 *
 *       const Returns = () => {
 *         const { returns, isLoading } = useAdminReturns()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {returns && !returns.length && (
 *               <span>No Returns</span>
 *             )}
 *             {returns && returns.length > 0 && (
 *               <ul>
 *                 {returns.map((returnData) => (
 *                   <li key={returnData.id}>
 *                     {returnData.status}
 *                   </li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Returns
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/returns' \
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
 *           $ref: "#/components/schemas/AdminReturnsListRes"
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
/**
 * {@inheritDoc FindPaginationParams}
 */
export declare class AdminGetReturnsParams {
    /**
     * {@inheritDoc FindPaginationParams.limit}
     * @defaultValue 50
     */
    limit?: number;
    /**
     * {@inheritDoc FindPaginationParams.offset}
     * @defaultValue 50
     */
    offset?: number;
}
