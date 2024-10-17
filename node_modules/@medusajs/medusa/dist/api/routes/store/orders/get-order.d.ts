import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /store/orders/{id}
 * operationId: GetOrdersOrder
 * summary: Get an Order
 * description: "Retrieve an Order's details."
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) fields {string} Comma-separated fields that should be expanded in the returned order.
 *   - (query) expand {string} Comma-separated relations that should be included in the returned order.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orders.retrieve(orderId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useOrder } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const {
 *           order,
 *           isLoading,
 *         } = useOrder(orderId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {order && <span>{order.display_id}</span>}
 *
 *           </div>
 *         )
 *       }
 *
 *       export default Order
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/orders/{id}'
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrdersRes"
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
export declare class StoreGetOrderParams extends FindParams {
}
