/**
 * @oas [get] /admin/swaps
 * operationId: "GetSwaps"
 * summary: "List Swaps"
 * description: "Retrieve a list of Swaps. The swaps can be paginated."
 * parameters:
 *   - (query) limit=50 {number} Limit the number of swaps returned.
 *   - (query) offset=0 {number} The number of swaps to skip when retrieving the swaps.
 * x-authenticated: true
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetSwapsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.swaps.list()
 *       .then(({ swaps }) => {
 *         console.log(swaps.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminSwaps } from "medusa-react"
 *
 *       const Swaps = () => {
 *         const { swaps, isLoading } = useAdminSwaps()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {swaps && !swaps.length && <span>No Swaps</span>}
 *             {swaps && swaps.length > 0 && (
 *               <ul>
 *                 {swaps.map((swap) => (
 *                   <li key={swap.id}>{swap.payment_status}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Swaps
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/swaps' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Swaps
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminSwapsListRes"
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
export declare class AdminGetSwapsParams {
    /**
     * {@inheritDoc FindPaginationParams.limit}
     */
    limit?: number;
    /**
     * {@inheritDoc FindPaginationParams.offset}
     */
    offset?: number;
}
