import { AddressPayload, FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/orders/{id}
 * operationId: "PostOrdersOrder"
 * summary: "Update an Order"
 * description: "Update and order's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderReq"
 * x-codegen:
 *   method: update
 *   params: AdminPostOrdersOrderParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.update(orderId, {
 *         email: "user@example.com"
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateOrder } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const updateOrder = useAdminUpdateOrder(
 *           orderId
 *         )
 *
 *         const handleUpdate = (
 *           email: string
 *         ) => {
 *           updateOrder.mutate({
 *             email,
 *           }, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.email)
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
 *       curl -X POST '{backend_url}/admin/orders/adasda' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com"
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
 * The attributes to update in the order's payment method.
 */
declare class PaymentMethod {
    /**
     * The ID of the payment provider used in the order.
     */
    provider_id?: string;
    /**
     * The data to attach to the payment.
     */
    data?: Record<string, unknown>;
}
/**
 * The attributes to update in the order's shipping method.
 */
declare class ShippingMethod {
    /**
     * The ID of the shipping provider used in the order.
     */
    provider_id?: string;
    /**
     * The ID of the shipping profile used in the order.
     */
    profile_id?: string;
    /**
     * The price of the shipping method.
     */
    price?: number;
    /**
     * The data to attach to the shipping method.
     */
    data?: Record<string, unknown>;
    /**
     * The line items associated with this shipping methods.
     */
    items?: Record<string, unknown>[];
}
/**
 * @schema AdminPostOrdersOrderReq
 * type: object
 * description: "The details to update of the order."
 * properties:
 *   email:
 *     description: The email associated with the order
 *     type: string
 *   billing_address:
 *     description: The order's billing address
 *     $ref: "#/components/schemas/AddressPayload"
 *   shipping_address:
 *     description: The order's shipping address
 *     $ref: "#/components/schemas/AddressPayload"
 *   items:
 *     description: The line items of the order
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   region:
 *     description: ID of the region that the order is associated with.
 *     type: string
 *   discounts:
 *     description: The discounts applied to the order
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Discount"
 *   customer_id:
 *     description: The ID of the customer associated with the order.
 *     type: string
 *   payment_method:
 *     description: The payment method chosen for the order.
 *     type: object
 *     properties:
 *       provider_id:
 *         type: string
 *         description: The ID of the payment provider.
 *       data:
 *         description: Any data relevant for the given payment method.
 *         type: object
 *   shipping_method:
 *     description: The Shipping Method used for shipping the order.
 *     type: object
 *     properties:
 *       provider_id:
 *         type: string
 *         description: The ID of the shipping provider.
 *       profile_id:
 *         type: string
 *         description: The ID of the shipping profile.
 *       price:
 *         type: integer
 *         description: The price of the shipping.
 *       data:
 *         type: object
 *         description: Any data relevant to the specific shipping method.
 *       items:
 *         type: array
 *         items:
 *           $ref: "#/components/schemas/LineItem"
 *         description: Items to ship
 *   no_notification:
 *     description: >-
 *       If set to `true`, no notification will be sent to the customer related to this order.
 *     type: boolean
 */
export declare class AdminPostOrdersOrderReq {
    email?: string;
    billing_address?: AddressPayload;
    shipping_address?: AddressPayload;
    items?: Record<string, unknown>[];
    region?: string;
    discounts?: Record<string, unknown>[];
    customer_id?: string;
    payment_method?: PaymentMethod;
    shipping_method?: ShippingMethod[];
    no_notification?: boolean;
}
/**
 * Parameters used to configure the retrieved order.
 */
export declare class AdminPostOrdersOrderParams extends FindParams {
}
