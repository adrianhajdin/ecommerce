import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}/swaps
 * operationId: "PostOrdersOrderSwaps"
 * summary: "Create a Swap"
 * description: "Create a Swap. This includes creating a return that is associated with the swap."
 * x-authenticated: true
 * externalDocs:
 *   description: How are swaps created
 *   url: https://docs.medusajs.com/modules/orders/swaps#how-are-swaps-created
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderSwapsReq"
 * x-codegen:
 *   method: createSwap
 *   queryParams: AdminPostOrdersOrderSwapsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createSwap(orderId, {
 *         return_items: [
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
 *       import { useAdminCreateSwap } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const CreateSwap = ({ orderId }: Props) => {
 *         const createSwap = useAdminCreateSwap(orderId)
 *         // ...
 *
 *         const handleCreate = (
 *           returnItems: {
 *             item_id: string,
 *             quantity: number
 *           }[]
 *         ) => {
 *           createSwap.mutate({
 *             return_items: returnItems
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.swaps)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateSwap
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/swaps' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "return_items": [
 *             {
 *               "item_id": "asfasf",
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
declare class ReturnItem {
    item_id: string;
    quantity: number;
    reason_id?: string;
    note?: string;
}
/**
 * The return's shipping method details.
 */
declare class ReturnShipping {
    /**
     * The ID of the shipping option used for the return.
     */
    option_id: string;
    /**
     * The shipping method's price.
     */
    price?: number;
}
declare class CustomShippingOption {
    option_id: string;
    price: number;
}
declare class AdditionalItem {
    variant_id: string;
    quantity: number;
}
/**
 * @schema AdminPostOrdersOrderSwapsReq
 * type: object
 * description: "The details of the swap to create."
 * required:
 *   - return_items
 * properties:
 *   return_items:
 *     description: The Line Items to associate with the swap's return.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item that will be returned.
 *           type: string
 *         quantity:
 *           description: The number of items that will be returned
 *           type: integer
 *         reason_id:
 *           description: The ID of the Return Reason to use.
 *           type: string
 *         note:
 *           description: An optional note with information about the Return.
 *           type: string
 *   return_shipping:
 *     description: The shipping method associated with the swap's return.
 *     type: object
 *     required:
 *       - option_id
 *     properties:
 *       option_id:
 *         type: string
 *         description: The ID of the Shipping Option to create the Shipping Method from.
 *       price:
 *         type: integer
 *         description: The price to charge for the Shipping Method.
 *   additional_items:
 *     description: The new items to send to the Customer.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - variant_id
 *         - quantity
 *       properties:
 *         variant_id:
 *           description: The ID of the Product Variant.
 *           type: string
 *         quantity:
 *           description: The quantity of the Product Variant.
 *           type: integer
 *   sales_channel_id:
 *     type: string
 *     description: "The ID of the sales channel associated with the swap."
 *   custom_shipping_options:
 *     description: An array of custom shipping options to potentially create a Shipping Method from to send the additional items.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - option_id
 *         - price
 *       properties:
 *         option_id:
 *           description: The ID of the Shipping Option.
 *           type: string
 *         price:
 *           description: The custom price of the Shipping Option.
 *           type: integer
 *   no_notification:
 *     description: >-
 *       If set to `true`, no notification will be sent to the customer related to this Swap.
 *     type: boolean
 *   return_location_id:
 *     type: string
 *     description: "The ID of the location used for the associated return."
 *   allow_backorder:
 *     description: >-
 *       If set to `true`, swaps can be completed with items out of stock
 *     type: boolean
 *     default: true
 */
export declare class AdminPostOrdersOrderSwapsReq {
    return_items: ReturnItem[];
    return_shipping?: ReturnShipping;
    sales_channel_id?: string;
    additional_items?: AdditionalItem[];
    custom_shipping_options?: CustomShippingOption[];
    no_notification?: boolean;
    return_location_id?: string;
    allow_backorder?: boolean;
}
export declare class AdminPostOrdersOrderSwapsParams extends FindParams {
}
