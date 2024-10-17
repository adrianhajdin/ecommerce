import { FindParams } from "../../../../types/common";
import { OrdersReturnItem } from "../../../../types/orders";
/**
 * @oas [post] /admin/orders/{id}/return
 * operationId: "PostOrdersOrderReturns"
 * summary: "Request a Return"
 * description: "Request and create a Return for items in an order. If the return shipping method is specified, it will be automatically fulfilled."
 * x-authenticated: true
 * externalDocs:
 *   description: Return creation process
 *   url: https://docs.medusajs.com/modules/orders/returns#returns-process
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderReturnsReq"
 * x-codegen:
 *   method: requestReturn
 *   params: AdminPostOrdersOrderReturnsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.requestReturn(orderId, {
 *         items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminRequestReturn } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const requestReturn = useAdminRequestReturn(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleRequestingReturn = (
 *           itemId: string,
 *           quantity: number
 *         ) => {
 *           requestReturn.mutate({
 *             items: [
 *               {
 *                 item_id: itemId,
 *                 quantity
 *               }
 *             ]
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.returns)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Order
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/return' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "items": [
 *             {
 *               "item_id": "{item_id}",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrdersRes"
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
/**
 * The return's shipping method details.
 */
declare class ReturnShipping {
    /**
     * The ID of the shipping option used for the return.
     */
    option_id?: string;
    /**
     * The shipping method's price.
     */
    price?: number;
}
/**
 * @schema AdminPostOrdersOrderReturnsReq
 * type: object
 * description: "The details of the requested return."
 * required:
 *   - items
 * properties:
 *   items:
 *     description: The line items that will be returned.
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
 *         reason_id:
 *           description: The ID of the Return Reason to use.
 *           type: string
 *         note:
 *           description: An optional note with information about the Return.
 *           type: string
 *         quantity:
 *           description: The quantity of the Line Item.
 *           type: integer
 *   return_shipping:
 *     description: The Shipping Method to be used to handle the return shipment.
 *     type: object
 *     properties:
 *       option_id:
 *         type: string
 *         description: The ID of the Shipping Option to create the Shipping Method from.
 *       price:
 *         type: integer
 *         description: The price to charge for the Shipping Method.
 *   note:
 *     description: An optional note with information about the Return.
 *     type: string
 *   receive_now:
 *     description: A flag to indicate if the Return should be registerd as received immediately.
 *     type: boolean
 *     default: false
 *   no_notification:
 *     description: >-
 *       If set to `true`, no notification will be sent to the customer related to this Return.
 *     type: boolean
 *   refund:
 *     description: The amount to refund.
 *     type: integer
 *   location_id:
 *     description: "The ID of the location used for the return."
 *     type: string
 */
export declare class AdminPostOrdersOrderReturnsReq {
    items: OrdersReturnItem[];
    return_shipping?: ReturnShipping;
    note?: string;
    receive_now?: boolean;
    no_notification?: boolean;
    refund?: number;
    location_id?: string;
}
export declare class AdminPostOrdersOrderReturnsParams extends FindParams {
}
