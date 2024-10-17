import { Request, Response } from "express";
/**
 * @oas [post] /admin/order-edits
 * operationId: "PostOrderEdits"
 * summary: "Create an OrderEdit"
 * description: "Create an Order Edit."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrderEditsReq"
 * x-authenticated: true
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.create({ orderId })
 *       .then(({ order_edit }) => {
 *         console.log(order_edit.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateOrderEdit } from "medusa-react"
 *
 *       const CreateOrderEdit = () => {
 *         const createOrderEdit = useAdminCreateOrderEdit()
 *
 *         const handleCreateOrderEdit = (orderId: string) => {
 *           createOrderEdit.mutate({
 *             order_id: orderId,
 *           }, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(order_edit.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateOrderEdit
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/order-edits' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{ "order_id": "my_order_id", "internal_note": "my_optional_note" }'
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
declare const _default: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export default _default;
/**
 * @schema AdminPostOrderEditsReq
 * type: object
 * description: "The details of the order edit to create."
 * required:
 *   - order_id
 * properties:
 *   order_id:
 *     description: The ID of the order to create the edit for.
 *     type: string
 *   internal_note:
 *     description: An optional note to associate with the order edit.
 *     type: string
 */
export declare class AdminPostOrderEditsReq {
    order_id: string;
    internal_note?: string;
    created_by?: string;
}
