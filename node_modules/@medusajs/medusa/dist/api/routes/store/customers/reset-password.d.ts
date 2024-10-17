/**
 * @oas [post] /store/customers/password-reset
 * operationId: PostCustomersResetPassword
 * summary: Reset Password
 * description: "Reset a Customer's password using a password token created by a previous request to the Request Password Reset API Route. If the password token expired,
 *  you must create a new one."
 * externalDocs:
 *   description: "How to reset password"
 *   url: "https://docs.medusajs.com/modules/customers/storefront/implement-customer-profiles#reset-password"
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersResetPasswordReq"
 * x-codegen:
 *   method: resetPassword
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.customers.resetPassword({
 *         email: "user@example.com",
 *         password: "supersecret",
 *         token: "supersecrettoken"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/customers/password-reset' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com",
 *           "password": "supersecret",
 *           "token": "supersecrettoken"
 *       }'
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersResetPasswordRes"
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
 * @schema StorePostCustomersResetPasswordReq
 * type: object
 * required:
 *   - email
 *   - password
 *   - token
 * properties:
 *   email:
 *     description: "The customer's email."
 *     type: string
 *     format: email
 *   password:
 *     description: "The customer's password."
 *     type: string
 *     format: password
 *   token:
 *     description: "The reset password token"
 *     type: string
 */
export declare class StorePostCustomersResetPasswordReq {
    email: string;
    token: string;
    password: string;
}
