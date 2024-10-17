/**
 * @oas [get] /admin/auth
 * operationId: "GetAuth"
 * summary: "Get Current User"
 * x-authenticated: true
 * description: "Get the currently logged in user's details."
 * x-codegen:
 *   method: getSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.auth.getSession()
 *       .then(({ user }) => {
 *         console.log(user.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminGetSession } from "medusa-react"
 *
 *       const Profile = () => {
 *         const { user, isLoading } = useAdminGetSession()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {user && <span>{user.email}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default Profile
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/auth' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Auth
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/AdminAuthRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
