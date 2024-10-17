/**
 * @oas [post] /store/swaps
 * operationId: PostSwaps
 * summary: Create a Swap
 * description: |
 *   Create a Swap for an Order. This will also create a return and associate it with the swap. If a return shipping option is specified, the return will automatically be fulfilled.
 *   To complete the swap, you must use the Complete Cart API Route passing it the ID of the swap's cart.
 *
 *   An idempotency key will be generated if none is provided in the header `Idempotency-Key` and added to
 *   the response. If an error occurs during swap creation or the request is interrupted for any reason, the swap creation can be retried by passing the idempotency
 *   key in the `Idempotency-Key` header.
 * externalDocs:
 *   description: "How to create a swap"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/create-swap"
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostSwapsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.swaps.create({
 *         order_id,
 *         return_items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ],
 *         additional_items: [
 *           {
 *             variant_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then(({ swap }) => {
 *         console.log(swap.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreateSwap } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       type CreateData = {
 *         return_items: {
 *           item_id: string
 *           quantity: number
 *         }[]
 *         additional_items: {
 *           variant_id: string
 *           quantity: number
 *         }[]
 *         return_shipping_option: string
 *       }
 *
 *       const CreateSwap = ({
 *         orderId
 *       }: Props) => {
 *         const createSwap = useCreateSwap()
 *         // ...
 *
 *         const handleCreate = (
 *           data: CreateData
 *         ) => {
 *           createSwap.mutate({
 *             ...data,
 *             order_id: orderId
 *           }, {
 *             onSuccess: ({ swap }) => {
 *               console.log(swap.id)
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
 *       curl -X POST '{backend_url}/store/swaps' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "order_id": "{order_id}",
 *           "return_items": [
 *             {
 *               "item_id": "{item_id}",
 *               "quantity": 1
 *             }
 *           ],
 *           "additional_items": [
 *             {
 *               "variant_id": "{variant_id}",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * tags:
 *   - Swaps
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreSwapsRes"
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
declare class Item {
    item_id: string;
    quantity: number;
    reason_id?: string;
    note?: string;
}
declare class AdditionalItem {
    variant_id: string;
    quantity: number;
}
/**
 * @schema StorePostSwapsReq
 * type: object
 * description: "The details of the swap to create."
 * required:
 *   - order_id
 *   - return_items
 *   - additional_items
 * properties:
 *   order_id:
 *     type: string
 *     description: The ID of the Order to create the Swap for.
 *   return_items:
 *     description: "The items to include in the Return."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the order's line item to return.
 *           type: string
 *         quantity:
 *           description: The quantity to return.
 *           type: integer
 *         reason_id:
 *           description: The ID of the reason of this return. Return reasons can be retrieved from the List Return Reasons API Route.
 *           type: string
 *         note:
 *           description: The note to add to the item being swapped.
 *           type: string
 *   return_shipping_option:
 *     type: string
 *     description: The ID of the Shipping Option to create the Shipping Method from.
 *   additional_items:
 *     description: "The items to exchange the returned items with."
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
 *           description: The quantity of the variant.
 *           type: integer
 */
export declare class StorePostSwapsReq {
    order_id: string;
    return_items: Item[];
    additional_items: AdditionalItem[];
    return_shipping_option?: string;
}
