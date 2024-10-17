import { RequirementType, ShippingOptionPriceType } from "../../../../models";
/**
 * @oas [post] /admin/shipping-options
 * operationId: "PostShippingOptions"
 * summary: "Create Shipping Option"
 * description: "Create a Shipping Option."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostShippingOptionsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingOptions.create({
 *         name: "PostFake",
 *         region_id,
 *         provider_id,
 *         data: {
 *         },
 *         price_type: "flat_rate"
 *       })
 *       .then(({ shipping_option }) => {
 *         console.log(shipping_option.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateShippingOption } from "medusa-react"
 *
 *       type CreateShippingOption = {
 *         name: string
 *         provider_id: string
 *         data: Record<string, unknown>
 *         price_type: string
 *         amount: number
 *       }
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const Region = ({ regionId }: Props) => {
 *         const createShippingOption = useAdminCreateShippingOption()
 *         // ...
 *
 *         const handleCreate = (
 *           data: CreateShippingOption
 *         ) => {
 *           createShippingOption.mutate({
 *             ...data,
 *             region_id: regionId
 *           }, {
 *             onSuccess: ({ shipping_option }) => {
 *               console.log(shipping_option.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Region
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/shipping-options' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "PostFake",
 *           "region_id": "afasf",
 *           "provider_id": "manual",
 *           "data": {},
 *           "price_type": "flat_rate"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Shipping Options
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminShippingOptionsRes"
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
declare class OptionRequirement {
    type: RequirementType;
    amount: number;
}
/**
 * @schema AdminPostShippingOptionsReq
 * type: object
 * description: "The details of the shipping option to create."
 * required:
 *   - name
 *   - region_id
 *   - provider_id
 *   - data
 *   - price_type
 * properties:
 *   name:
 *     description: "The name of the Shipping Option"
 *     type: string
 *   region_id:
 *     description: "The ID of the Region in which the Shipping Option will be available."
 *     type: string
 *   provider_id:
 *     description: "The ID of the Fulfillment Provider that handles the Shipping Option."
 *     type: string
 *   profile_id:
 *     description: "The ID of the Shipping Profile to add the Shipping Option to."
 *     type: number
 *   data:
 *     description: "The data needed for the Fulfillment Provider to handle shipping with this Shipping Option."
 *     type: object
 *   price_type:
 *     description: >-
 *       The type of the Shipping Option price. `flat_rate` indicates fixed pricing, whereas `calculated` indicates that the price will be calculated each time by the fulfillment provider.
 *     type: string
 *     enum:
 *       - flat_rate
 *       - calculated
 *   amount:
 *     description: >-
 *       The amount to charge for the Shipping Option. If the `price_type` is set to `calculated`, this amount will not actually be used.
 *     type: integer
 *   requirements:
 *     description: "The requirements that must be satisfied for the Shipping Option to be available."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - type
 *         - amount
 *       properties:
 *         type:
 *           description: The type of the requirement
 *           type: string
 *           enum:
 *             - max_subtotal
 *             - min_subtotal
 *         amount:
 *           description: The amount to compare with.
 *           type: integer
 *   is_return:
 *     description: Whether the Shipping Option can be used for returns or during checkout.
 *     type: boolean
 *     default: false
 *   admin_only:
 *     description: >-
 *       If set to `true`, the shipping option can only be used when creating draft orders.
 *     type: boolean
 *     default: false
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   includes_tax:
 *     description: "Tax included in prices of shipping option"
 *     x-featureFlag: "tax_inclusive_pricing"
 *     type: boolean
 */
export declare class AdminPostShippingOptionsReq {
    name: string;
    region_id: string;
    provider_id: string;
    profile_id?: string;
    data: Record<string, unknown>;
    price_type: ShippingOptionPriceType;
    amount?: number;
    requirements?: OptionRequirement[];
    admin_only?: boolean;
    is_return?: boolean;
    metadata?: Record<string, unknown>;
    includes_tax?: boolean;
}
