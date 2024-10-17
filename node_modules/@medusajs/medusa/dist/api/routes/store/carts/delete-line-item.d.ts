/**
 * @oas [delete] /store/carts/{id}/line-items/{line_id}
 * operationId: DeleteCartsCartLineItemsItem
 * summary: Delete a Line Item
 * description: "Delete a Line Item from a Cart. The payment sessions will be updated and the totals will be recalculated."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 *   - (path) line_id=* {string} The ID of the Line Item.
 * x-codegen:
 *   method: deleteLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.lineItems.delete(cartId, lineId)
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useDeleteLineItem } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const deleteLineItem = useDeleteLineItem(cartId)
 *
 *         const handleDeleteItem = (
 *           lineItemId: string
 *         ) => {
 *           deleteLineItem.mutate({
 *             lineId: lineItemId,
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.items)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/store/carts/{id}/line-items/{line_id}'
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
