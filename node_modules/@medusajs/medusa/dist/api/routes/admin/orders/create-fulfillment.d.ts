import { ProductVariantInventoryService } from "../../../../services";
import { Fulfillment } from "../../../../models";
import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/fulfillment
 * operationId: "PostOrdersOrderFulfillments"
 * summary: "Create a Fulfillment"
 * description: "Create a Fulfillment of an Order using the fulfillment provider, and change the order's fulfillment status to either `partially_fulfilled` or `fulfilled`, depending on
 *  whether all the items were fulfilled."
 * x-authenticated: true
 * externalDocs:
 *   description: Fulfillments of orders
 *   url: https://docs.medusajs.com/modules/orders/#fulfillments-in-orders
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderFulfillmentsReq"
 * x-codegen:
 *   method: createFulfillment
 *   params: AdminPostOrdersOrderFulfillmentsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createFulfillment(orderId, {
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
 *       import { useAdminCreateFulfillment } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const createFulfillment = useAdminCreateFulfillment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleCreateFulfillment = (
 *           itemId: string,
 *           quantity: number
 *         ) => {
 *           createFulfillment.mutate({
 *             items: [
 *               {
 *                 item_id: itemId,
 *                 quantity,
 *               },
 *             ],
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.fulfillments)
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
 *       curl -X POST '{backend_url}/admin/orders/{id}/fulfillment' \
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
export declare const updateInventoryAndReservations: (fulfillments: Fulfillment[], context: {
    inventoryService: ProductVariantInventoryService;
    locationId: string;
}) => Promise<void>;
/**
 * @schema AdminPostOrdersOrderFulfillmentsReq
 * type: object
 * description: "The details of the fulfillment to be created."
 * required:
 *   - items
 * properties:
 *   items:
 *     description: The Line Items to include in the Fulfillment.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item to fulfill.
 *           type: string
 *         quantity:
 *           description: The quantity of the Line Item to fulfill.
 *           type: integer
 *   location_id:
 *     type: string
 *     description: "The ID of the location where the items will be fulfilled from."
 *   no_notification:
 *     description: >-
 *       If set to `true`, no notification will be sent to the customer related to this fulfillment.
 *     type: boolean
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostOrdersOrderFulfillmentsReq {
    items: Item[];
    location_id?: string;
    no_notification?: boolean;
    metadata?: Record<string, unknown>;
}
declare class Item {
    item_id: string;
    quantity: number;
}
export declare class AdminPostOrdersOrderFulfillmentsParams extends FindParams {
}
