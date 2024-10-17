/**
 * @oas [get] /store/customers/me/payment-methods
 * operationId: GetCustomersCustomerPaymentMethods
 * summary: Get Saved Payment Methods
 * description: "Retrieve the logged-in customer's saved payment methods. This API Route only works with payment providers created with the deprecated Payment Service interface.
 *  The payment methods are saved using the Payment Service's third-party service, and not on the Medusa backend. So, they're retrieved from the third-party service."
 * x-authenticated: true
 * deprecated: true
 * x-codegen:
 *   method: listPaymentMethods
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.paymentMethods.list()
 *       .then(({ payment_methods }) => {
 *         console.log(payment_methods.length);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/customers/me/payment-methods' \
 *       -H 'Authorization: Bearer {access_token}'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersListPaymentMethodsRes"
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
