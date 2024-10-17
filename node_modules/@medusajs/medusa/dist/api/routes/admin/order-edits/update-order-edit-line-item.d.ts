import { Request, Response } from "express";
/**
 * @oas [post] /admin/order-edits/{id}/items/{item_id}
 * operationId: "PostOrderEditsEditLineItemsLineItem"
 * summary: "Upsert Line Item Change"
 * description: "Create or update a line item change in the order edit that indicates addition, deletion, or update of a line item into an original order. Line item changes
 *  are only reflected on the original order after the order edit is confirmed."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 *   - (path) item_id=* {string} The ID of the line item in the original order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrderEditsEditLineItemsLineItemReq"
 * x-codegen:
 *   method: updateLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.updateLineItem(orderEditId, lineItemId, {
 *         quantity: 5
 *       })
 *       .then(({ order_edit }) => {
 *         console.log(order_edit.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminOrderEditUpdateLineItem } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *         itemId: string
 *       }
 *
 *       const OrderEditItemChange = ({
 *         orderEditId,
 *         itemId
 *       }: Props) => {
 *         const updateLineItem = useAdminOrderEditUpdateLineItem(
 *           orderEditId,
 *           itemId
 *         )
 *
 *         const handleUpdateLineItem = (quantity: number) => {
 *           updateLineItem.mutate({
 *             quantity,
 *           }, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(order_edit.items)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default OrderEditItemChange
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/order-edits/{id}/items/{item_id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{ "quantity": 5 }'
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
 * @schema AdminPostOrderEditsEditLineItemsLineItemReq
 * type: object
 * description: "The details to create or update of the line item change."
 * required:
 *   - quantity
 * properties:
 *   quantity:
 *     description: The quantity to update
 *     type: number
 */
export declare class AdminPostOrderEditsEditLineItemsLineItemReq {
    quantity: number;
}
