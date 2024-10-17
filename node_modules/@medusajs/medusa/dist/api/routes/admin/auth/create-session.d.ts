/**
 * @oas [post] /admin/auth
 * operationId: "PostAuth"
 * summary: "User Login"
 * x-authenticated: false
 * description: "Log a User in and includes the Cookie session in the response header. The cookie session can be used in subsequent requests to authorize the user to perform admin functionalities.
 * When using Medusa's JS or Medusa React clients, the cookie is automatically attached to subsequent requests."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostAuthReq"
 * x-codegen:
 *   method: createSession
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.admin.auth.createSession({
 *         email: "user@example.com",
 *         password: "supersecret"
 *       })
 *       .then(({ user }) => {
 *         console.log(user.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminLogin } from "medusa-react"
 *
 *       const Login = () => {
 *         const adminLogin = useAdminLogin()
 *         // ...
 *
 *         const handleLogin = () => {
 *           adminLogin.mutate({
 *             email: "user@example.com",
 *             password: "supersecret",
 *           }, {
 *             onSuccess: ({ user }) => {
 *               console.log(user)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Login
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/auth' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *         "email": "user@example.com",
 *         "password": "supersecret"
 *       }'
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
 *    $ref: "#/components/responses/incorrect_credentials"
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
/**
 * @schema AdminPostAuthReq
 * type: object
 * description: The admin's credentials used to log in.
 * required:
 *   - email
 *   - password
 * properties:
 *   email:
 *     type: string
 *     description: The user's email.
 *     format: email
 *   password:
 *     type: string
 *     description: The user's password.
 *     format: password
 */
export declare class AdminPostAuthReq {
    email: string;
    password: string;
}
