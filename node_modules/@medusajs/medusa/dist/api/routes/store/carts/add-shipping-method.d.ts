/**
 * @oas [post] /store/carts/{id}/shipping-methods
 * operationId: "PostCartsCartShippingMethod"
 * summary: "Add Shipping Method"
 * description: "Add a Shipping Method to the Cart. The validation of the `data` field is handled by the fulfillment provider of the chosen shipping option."
 * parameters:
 *   - (path) id=* {string} The cart ID.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartShippingMethodReq"
 * x-codegen:
 *   method: addShippingMethod
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.addShippingMethod(cartId, {
 *         option_id
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAddShippingMethodToCart } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const addShippingMethod = useAddShippingMethodToCart(cartId)
 *
 *         const handleAddShippingMethod = (
 *           optionId: string
 *         ) => {
 *           addShippingMethod.mutate({
 *             option_id: optionId,
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.shipping_methods)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/carts/{id}/shipping-methods' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "option_id": "{option_id}",
 *       }'
 * tags:
 *   - Carts
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreCartsRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema StorePostCartsCartShippingMethodReq
 * type: object
 * description: "The details of the shipping method to add to the cart."
 * required:
 *   - option_id
 * properties:
 *   option_id:
 *     type: string
 *     description: ID of the shipping option to create the method from.
 *   data:
 *     type: object
 *     description: Used to hold any data that the shipping method may need to process the fulfillment of the order. This depends on the fulfillment provider you're using.
 */
export declare class StorePostCartsCartShippingMethodReq {
    option_id: string;
    data?: Record<string, any>;
}
