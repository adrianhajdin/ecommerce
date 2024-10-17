/**
 * @oas [post] /store/carts
 * operationId: "PostCart"
 * summary: "Create a Cart"
 * description: |
 *   Create a Cart. Although optional, specifying the cart's region and sales channel can affect the cart's pricing and
 *   the products that can be added to the cart respectively. So, make sure to set those early on and change them if necessary, such as when the customer changes their region.
 *
 *   If a customer is logged in, make sure to pass its ID or email within the cart's details so that the cart is attached to the customer.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.create()
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreateCart } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const Cart = ({ regionId }: Props) => {
 *         const createCart = useCreateCart()
 *
 *         const handleCreate = () => {
 *           createCart.mutate({
 *             region_id: regionId
 *             // creates an empty cart
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.items)
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
 *       curl -X POST '{backend_url}/store/carts'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: "Successfully created a new Cart"
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
export declare class Item {
    variant_id: string;
    quantity: number;
}
/**
 * @schema StorePostCartReq
 * type: object
 * description: "The details of the cart to be created."
 * properties:
 *   region_id:
 *     type: string
 *     description: "The ID of the Region to create the Cart in. Setting the cart's region can affect the pricing of the items in the cart as well as the used currency.
 *      If this parameter is not provided, the first region in the store is used by default."
 *   sales_channel_id:
 *     type: string
 *     description: "The ID of the Sales channel to create the Cart in. The cart's sales channel affects which products can be added to the cart. If a product does not
 *      exist in the cart's sales channel, it cannot be added to the cart. If you add a publishable API key in the header of this request and specify a sales channel ID,
 *      the specified sales channel must be within the scope of the publishable API key's resources. If you add a publishable API key in the header of this request,
 *      you don't specify a sales channel ID, and the publishable API key is associated with one sales channel, that sales channel will be attached to the cart.
 *      If no sales channel is passed and no publishable API key header is passed or the publishable API key isn't associated with any sales channel,
 *      the cart will not be associated with any sales channel."
 *   country_code:
 *     type: string
 *     description: "The two character ISO country code to create the Cart in. Setting this parameter will set the country code of the shipping address."
 *     externalDocs:
 *      url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *      description: See a list of codes.
 *   items:
 *     description: "An array of product variants to generate line items from."
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
 *           description: The quantity to add into the cart.
 *           type: integer
 *   context:
 *     description: >-
 *       An object to provide context to the Cart. The `context` field is automatically populated with `ip` and `user_agent`
 *     type: object
 *     example:
 *       ip: "::1"
 *       user_agent: "Chrome"
 */
export declare class StorePostCartReq {
    region_id?: string;
    country_code?: string;
    items?: Item[];
    context?: object;
    sales_channel_id?: string;
}
