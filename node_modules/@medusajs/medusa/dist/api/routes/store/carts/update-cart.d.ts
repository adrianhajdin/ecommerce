import { AddressPayload } from "../../../../types/common";
/**
 * @oas [post] /store/carts/{id}
 * operationId: PostCartsCart
 * summary: Update a Cart
 * description: "Update a Cart's details. If the cart has payment sessions and the region was not changed, the payment sessions are updated. The cart's totals are also recalculated."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.update(cartId, {
 *         email: "user@example.com"
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useUpdateCart } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const updateCart = useUpdateCart(cartId)
 *
 *         const handleUpdate = (
 *           email: string
 *         ) => {
 *           updateCart.mutate({
 *             email
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.email)
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
 *       curl -X POST '{backend_url}/store/carts/{id}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com"
 *       }'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCartsRes"
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
declare class GiftCard {
    code: string;
}
declare class Discount {
    code: string;
}
/**
 * @schema StorePostCartsCartReq
 * type: object
 * description: "The details to update of the cart."
 * properties:
 *   region_id:
 *     type: string
 *     description: "The ID of the Region to create the Cart in. Setting the cart's region can affect the pricing of the items in the cart as well as the used currency."
 *   country_code:
 *     type: string
 *     description: "The 2 character ISO country code to create the Cart in. Setting this parameter will set the country code of the shipping address."
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *       description: See a list of codes.
 *   email:
 *     type: string
 *     description: "An email to be used on the Cart."
 *     format: email
 *   sales_channel_id:
 *     type: string
 *     description: "The ID of the Sales channel to create the Cart in. The cart's sales channel affects which products can be added to the cart. If a product does not
 *      exist in the cart's sales channel, it cannot be added to the cart. If you add a publishable API key in the header of this request and specify a sales channel ID,
 *      the specified sales channel must be within the scope of the publishable API key's resources."
 *   billing_address:
 *     description: "The Address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *         description: A full billing address object.
 *       - type: string
 *         description: The billing address ID
 *   shipping_address:
 *     description: "The Address to be used for shipping purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *         description: A full shipping address object.
 *       - type: string
 *         description: The shipping address ID
 *   gift_cards:
 *     description: "An array of Gift Card codes to add to the Cart."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: "The code of a gift card."
 *           type: string
 *   discounts:
 *     description: "An array of Discount codes to add to the Cart."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: "The code of the discount."
 *           type: string
 *   customer_id:
 *     description: "The ID of the Customer to associate the Cart with."
 *     type: string
 *   context:
 *     description: >-
 *       An object to provide context to the Cart. The `context` field is automatically populated with `ip` and `user_agent`
 *     type: object
 *     example:
 *       ip: "::1"
 *       user_agent: "Chrome"
 */
export declare class StorePostCartsCartReq {
    region_id?: string;
    country_code?: string;
    email?: string;
    billing_address?: AddressPayload | string;
    shipping_address?: AddressPayload | string;
    gift_cards?: GiftCard[];
    discounts?: Discount[];
    customer_id?: string;
    context?: object;
    sales_channel_id?: string;
}
