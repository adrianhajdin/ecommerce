/**
 * @oas [post] /store/carts/{id}/taxes
 * operationId: "PostCartsCartTaxes"
 * summary: "Calculate Cart Taxes"
 * description: "Calculate the taxes for a cart. This is useful if the `automatic_taxes` field of the cart's region is set to `false`. If the cart's region uses a tax provider other than
 *  Medusa's system provider, this may lead to sending requests to third-party services."
 * externalDocs:
 *   description: "How to calculate taxes manually during checkout"
 *   url: "https://docs.medusajs.com/modules/taxes/storefront/manual-calculation"
 * parameters:
 *   - (path) id=* {String} The Cart ID.
 * x-codegen:
 *   method: calculateTaxes
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/carts/{id}/taxes'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCartsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
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
