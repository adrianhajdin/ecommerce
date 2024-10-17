/**
 * @oas [post] /store/carts/{id}/line-items/{line_id}
 * operationId: PostCartsCartLineItemsItem
 * summary: Update a Line Item
 * description: "Update a line item's quantity."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 *   - (path) line_id=* {string} The ID of the Line Item.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartLineItemsItemReq"
 * x-codegen:
 *   method: updateLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.lineItems.update(cartId, lineId, {
 *         quantity: 1
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useUpdateLineItem } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const updateLineItem = useUpdateLineItem(cartId)
 *
 *         const handleUpdateItem = (
 *           lineItemId: string,
 *           quantity: number
 *         ) => {
 *           updateLineItem.mutate({
 *             lineId: lineItemId,
 *             quantity,
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
 *       curl -X POST '{backend_url}/store/carts/{id}/line-items/{line_id}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "quantity": 1
 *       }'
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
/**
 * @schema StorePostCartsCartLineItemsItemReq
 * type: object
 * description: "The details to update of the line item."
 * required:
 *   - quantity
 * properties:
 *   quantity:
 *     type: number
 *     description: The quantity of the line item in the cart.
 *   metadata:
 *     type: object
 *     description: An optional key-value map with additional details about the Line Item. If omitted, the metadata will remain unchanged."
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class StorePostCartsCartLineItemsItemReq {
    quantity: number;
    metadata?: Record<string, unknown> | undefined;
}
