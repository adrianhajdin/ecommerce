/**
 * @oas [get] /store/auth/{email}
 * operationId: "GetAuthEmail"
 * summary: "Check if Email Exists"
 * description: "Check if there's a customer already registered with the provided email."
 * parameters:
 *   - in: path
 *     name: email
 *     schema:
 *       type: string
 *       format: email
 *     required: true
 *     description: The email to check.
 * x-codegen:
 *   method: exists
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.auth.exists("user@example.com")
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/auth/user@example.com'
 * tags:
 *   - Auth
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreGetAuthEmailRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
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
