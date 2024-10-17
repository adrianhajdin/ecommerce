/**
 * @oas [post] /store/orders/batch/customer/token
 * operationId: "PostOrdersCustomerOrderClaim"
 * summary: "Claim Order"
 * description: "Allow the logged-in customer to claim ownership of one or more orders. This generates a token that can be used later on to verify the claim using the Verify Order Claim API Route.
 *  This also emits the event `order-update-token.created`. So, if you have a notification provider installed that handles this event and sends the customer a notification, such as an email,
 *  the customer should receive instructions on how to finalize their claim ownership."
 * externalDocs:
 *   description: "How to implement claim-order flow in a storefront"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/implement-claim-order"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerOrderClaimReq"
 * x-codegen:
 *   method: requestCustomerOrders
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.orders.requestCustomerOrders({
 *         order_ids,
 *       })
 *       .then(() => {
 *         // successful
 *       })
 *       .catch(() => {
 *         // an error occurred
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useRequestOrderAccess } from "medusa-react"
 *
 *       const ClaimOrder = () => {
 *         const claimOrder = useRequestOrderAccess()
 *
 *         const handleClaimOrder = (
 *           orderIds: string[]
 *         ) => {
 *           claimOrder.mutate({
 *             order_ids: orderIds
 *           }, {
 *             onSuccess: () => {
 *               // successful
 *             },
 *             onError: () => {
 *               // an error occurred.
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ClaimOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/batch/customer/token' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "order_ids": ["id"],
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
 * @schema StorePostCustomersCustomerOrderClaimReq
 * type: object
 * description: "The details of the orders to claim."
 * required:
 *   - order_ids
 * properties:
 *   order_ids:
 *     description: "The ID of the orders to claim"
 *     type: array
 *     items:
 *      type: string
 */
export declare class StorePostCustomersCustomerOrderClaimReq {
    order_ids: string[];
}
