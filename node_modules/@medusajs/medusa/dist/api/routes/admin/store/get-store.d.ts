/**
 * @oas [get] /admin/store
 * operationId: "GetStore"
 * summary: "Get Store details"
 * description: "Retrieve the Store's details."
 * x-authenticated: true
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.store.retrieve()
 *       .then(({ store }) => {
 *         console.log(store.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminStore } from "medusa-react"
 *
 *       const Store = () => {
 *         const {
 *           store,
 *           isLoading
 *         } = useAdminStore()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {store && <span>{store.name}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default Store
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/store' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Store
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminExtendedStoresRes"
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
