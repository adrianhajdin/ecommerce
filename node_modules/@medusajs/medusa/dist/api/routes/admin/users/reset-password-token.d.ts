/**
 * @oas [post] /admin/users/password-token
 * operationId: "PostUsersUserPasswordToken"
 * summary: "Request Password Reset"
 * description: "Generate a password token for an admin user with a given email. This also triggers the `user.password_reset` event. So, if you have a Notification Service installed
 * that can handle this event, a notification, such as an email, will be sent to the user. The token is triggered as part of the `user.password_reset` event's payload.
 * That token must be used later to reset the password using the [Reset Password](https://docs.medusajs.com/api/admin#users_postusersuserpassword) API Route."
 * externalDocs:
 *   description: How to reset a user's password
 *   url: https://docs.medusajs.com/modules/users/admin/manage-profile#reset-password
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminResetPasswordTokenRequest"
 * x-codegen:
 *   method: sendResetPasswordToken
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.users.sendResetPasswordToken({
 *         email: "user@example.com"
 *       })
 *       .then(() => {
 *         // successful
 *       })
 *       .catch(() => {
 *         // error occurred
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminSendResetPasswordToken } from "medusa-react"
 *
 *       const Login = () => {
 *         const requestPasswordReset = useAdminSendResetPasswordToken()
 *         // ...
 *
 *         const handleResetPassword = (
 *           email: string
 *         ) => {
 *           requestPasswordReset.mutate({
 *             email
 *           }, {
 *             onSuccess: () => {
 *               // successful
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
 *       curl -X POST '{backend_url}/admin/users/password-token' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Users
 * responses:
 *   204:
 *     description: OK
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
 * @schema AdminResetPasswordTokenRequest
 * type: object
 * description: "The details of the password reset token request."
 * required:
 *   - email
 * properties:
 *   email:
 *     description: "The User's email."
 *     type: string
 *     format: email
 */
export declare class AdminResetPasswordTokenRequest {
    email: string;
}
