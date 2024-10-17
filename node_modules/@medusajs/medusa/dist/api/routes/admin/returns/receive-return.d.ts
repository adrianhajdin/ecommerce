/**
 * @oas [post] /admin/returns/{id}/receive
 * operationId: "PostReturnsReturnReceive"
 * summary: "Receive a Return"
 * description: "Mark a Return as received. This also updates the status of associated order, claim, or swap accordingly."
 * parameters:
 *   - (path) id=* {string} The ID of the Return.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostReturnsReturnReceiveReq"
 * x-codegen:
 *   method: receive
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returns.receive(returnId, {
 *         items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then((data) => {
 *         console.log(data.return.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminReceiveReturn } from "medusa-react"
 *
 *       type ReceiveReturnData = {
 *         items: {
 *           item_id: string
 *           quantity: number
 *         }[]
 *       }
 *
 *       type Props = {
 *         returnId: string
 *       }
 *
 *       const Return = ({ returnId }: Props) => {
 *         const receiveReturn = useAdminReceiveReturn(
 *           returnId
 *         )
 *         // ...
 *
 *         const handleReceive = (data: ReceiveReturnData) => {
 *           receiveReturn.mutate(data, {
 *             onSuccess: ({ return: dataReturn }) => {
 *               console.log(dataReturn.status)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Return
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/returns/{id}/receive' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "items": [
 *             {
 *               "item_id": "asafg",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Returns
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReturnsRes"
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
declare class Item {
    item_id: string;
    quantity: number;
}
/**
 * @schema AdminPostReturnsReturnReceiveReq
 * type: object
 * description: "The details of the received return."
 * required:
 *   - items
 * properties:
 *   items:
 *     description: The Line Items that have been received.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item.
 *           type: string
 *         quantity:
 *           description: The quantity of the Line Item.
 *           type: integer
 *   refund:
 *     description: The amount to refund.
 *     type: number
 *   location_id:
 *     description: The ID of the location to return items from.
 *     type: string
 */
export declare class AdminPostReturnsReturnReceiveReq {
    items: Item[];
    refund?: number;
    location_id?: string;
}
