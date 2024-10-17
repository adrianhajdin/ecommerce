import { Request, Response } from "express";
/**
 * @oas [post] /admin/order-edits/{id}/items
 * operationId: "PostOrderEditsEditLineItems"
 * summary: "Add a Line Item"
 * description: "Create a line item change in the order edit that indicates adding an item in the original order. The item will not be added to the original order until the order edit is
 *  confirmed."
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrderEditsEditLineItemsReq"
 * x-authenticated: true
 * x-codegen:
 *   method: addLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.addLineItem(orderEditId, {
 *         variant_id,
 *         quantity
 *       })
 *       .then(({ order_edit }) => {
 *          console.log(order_edit.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminOrderEditAddLineItem } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *       }
 *
 *       const OrderEdit = ({ orderEditId }: Props) => {
 *         const addLineItem = useAdminOrderEditAddLineItem(
 *           orderEditId
 *         )
 *
 *         const handleAddLineItem =
 *           (quantity: number, variantId: string) => {
 *             addLineItem.mutate({
 *               quantity,
 *               variant_id: variantId,
 *             }, {
 *               onSuccess: ({ order_edit }) => {
 *                 console.log(order_edit.changes)
 *               }
 *             })
 *           }
 *
 *         // ...
 *       }
 *
 *       export default OrderEdit
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/order-edits/{id}/items' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{ "variant_id": "variant_01G1G5V2MRX2V3PVSR2WXYPFB6", "quantity": 3 }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrderEditsRes"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
/**
 * @schema AdminPostOrderEditsEditLineItemsReq
 * type: object
 * description: "The details of the line item change to create."
 * required:
 *   - variant_id
 *   - quantity
 * properties:
 *   variant_id:
 *     description: The ID of the product variant associated with the item.
 *     type: string
 *   quantity:
 *     description: The quantity of the item.
 *     type: number
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostOrderEditsEditLineItemsReq {
    variant_id: string;
    quantity: number;
    metadata?: Record<string, unknown> | undefined;
}
