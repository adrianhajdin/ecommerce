/**
 * @oas [delete] /store/carts/{id}/discounts/{code}
 * operationId: DeleteCartsCartDiscountsDiscount
 * summary: "Remove Discount"
 * description: "Remove a Discount from a Cart. This only removes the application of the discount, and not completely deletes it. The totals will be re-calculated and the payment sessions
 *  will be refreshed after the removal."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 *   - (path) code=* {string} The unique discount code.
 * x-codegen:
 *   method: deleteDiscount
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.deleteDiscount(cartId, code)
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/store/carts/{id}/discounts/{code}'
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
