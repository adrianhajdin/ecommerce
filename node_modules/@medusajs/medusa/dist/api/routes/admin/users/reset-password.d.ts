/**
 * @oas [post] /admin/users/reset-password
 * operationId: "PostUsersUserPassword"
 * summary: "Reset Password"
 * description: "Reset the password of an admin User using their reset password token. A user must request to reset their password first before attempting to reset their
 * password with this request."
 * externalDocs:
 *   description: How to reset a user's password
 *   url: https://docs.medusajs.com/modules/users/admin/manage-profile#reset-password
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminResetPasswordRequest"
 * x-codegen:
 *   method: resetPassword
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.users.resetPassword({
 *         token: "supersecrettoken",
 *         password: "supersecret"
 *       })
 *       .then(({ user }) => {
 *         console.log(user.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminResetPassword } from "medusa-react"
 *
 *       const ResetPassword = () => {
 *         const resetPassword = useAdminResetPassword()
 *         // ...
 *
 *         const handleResetPassword = (
 *           token: string,
 *           password: string
 *         ) => {
 *           resetPassword.mutate({
 *             token,
 *             password,
 *           }, {
 *             onSuccess: ({ user }) => {
 *               console.log(user.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ResetPassword
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/users/reset-password' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "token": "supersecrettoken",
 *           "password": "supersecret"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Users
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminUserRes"
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
export type payload = {
    email: string;
    user_id: string;
    password: string;
};
/**
 * @schema AdminResetPasswordRequest
 * type: object
 * description: "The details of the password reset request."
 * required:
 *   - token
 *   - password
 * properties:
 *   email:
 *     description: "The User's email."
 *     type: string
 *     format: email
 *   token:
 *     description: "The password-reset token generated when the password reset was requested."
 *     type: string
 *   password:
 *     description: "The User's new password."
 *     type: string
 *     format: password
 */
export declare class AdminResetPasswordRequest {
    email?: string;
    token: string;
    password: string;
}
