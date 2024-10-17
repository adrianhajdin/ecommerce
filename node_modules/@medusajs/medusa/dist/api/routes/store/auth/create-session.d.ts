/**
 * @oas [post] /store/auth
 * operationId: "PostAuth"
 * summary: "Customer Login"
 * description: "Log a customer in and includes the Cookie session in the response header. The cookie session can be used in subsequent requests to authenticate the customer.
 * When using Medusa's JS or Medusa React clients, the cookie is automatically attached to subsequent requests."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostAuthReq"
 * x-codegen:
 *   method: authenticate
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.auth.authenticate({
 *         email: "user@example.com",
 *         password: "user@example.com"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/auth' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com",
 *           "password": "supersecret"
 *       }'
 * tags:
 *   - Auth
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreAuthRes"
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
 * @schema StorePostAuthReq
 * type: object
 * required:
 *   - email
 *   - password
 * properties:
 *   email:
 *     type: string
 *     description: The Customer's email.
 *   password:
 *     type: string
 *     description: The Customer's password.
 */
export declare class StorePostAuthReq {
    email: string;
    password: string;
}
