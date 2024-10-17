/**
 * @oas [post] /store/returns
 * operationId: "PostReturns"
 * summary: "Create Return"
 * description: "Create a Return for an Order. If a return shipping method is specified, the return is automatically fulfilled."
 * externalDocs:
 *   description: "How to create a return in a storefront"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/create-return"
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostReturnsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.returns.create({
 *         order_id,
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
 *       import { useCreateReturn } from "medusa-react"
 *
 *       type CreateReturnData = {
 *         items: {
 *           item_id: string,
 *           quantity: number
 *         }[]
 *         return_shipping: {
 *           option_id: string
 *         }
 *       }
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const CreateReturn = ({ orderId }: Props) => {
 *         const createReturn = useCreateReturn()
 *         // ...
 *
 *         const handleCreate = (data: CreateReturnData) => {
 *           createReturn.mutate({
 *             ...data,
 *             order_id: orderId
 *           }, {
 *             onSuccess: ({ return: returnData }) => {
 *               console.log(returnData.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateReturn
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/returns' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "order_id": "asfasf",
 *           "items": [
 *             {
 *               "item_id": "assfasf",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * tags:
 *   - Returns
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreReturnsRes"
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
declare class ReturnShipping {
    option_id: string;
}
declare class Item {
    item_id: string;
    quantity: number;
    reason_id?: string;
    note?: string;
}
/**
 * @schema StorePostReturnsReq
 * type: object
 * description: "The details of the return to create."
 * required:
 *   - order_id
 *   - items
 * properties:
 *   order_id:
 *     type: string
 *     description: The ID of the Order to create the return for.
 *   items:
 *     description: "The items to include in the return."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the line item to return.
 *           type: string
 *         quantity:
 *           description: The quantity to return.
 *           type: integer
 *         reason_id:
 *           description: The ID of the return reason. Return reasons can be retrieved from the List Return Reasons API Route.
 *           type: string
 *         note:
 *           description: A note to add to the item returned.
 *           type: string
 *   return_shipping:
 *     description: The return shipping method used to return the items. If provided, a fulfillment is automatically created for the return.
 *     type: object
 *     required:
 *       - option_id
 *     properties:
 *       option_id:
 *         type: string
 *         description: The ID of the Shipping Option to create the Shipping Method from.
 */
export declare class StorePostReturnsReq {
    order_id: string;
    items: Item[];
    return_shipping?: ReturnShipping;
}
