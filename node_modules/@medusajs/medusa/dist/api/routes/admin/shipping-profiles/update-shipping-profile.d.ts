import { ShippingProfileType } from "../../../../models";
/**
 * @oas [post] /admin/shipping-profiles/{id}
 * operationId: "PostShippingProfilesProfile"
 * summary: "Update a Shipping Profile"
 * description: "Update a Shipping Profile's details."
 * parameters:
 *   - (path) id=* {string} The ID of the Shipping Profile.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostShippingProfilesProfileReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingProfiles.update(shippingProfileId, {
 *         name: 'Large Products'
 *       })
 *       .then(({ shipping_profile }) => {
 *         console.log(shipping_profile.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { ShippingProfileType } from "@medusajs/medusa"
 *       import { useAdminUpdateShippingProfile } from "medusa-react"
 *
 *       type Props = {
 *         shippingProfileId: string
 *       }
 *
 *       const ShippingProfile = ({ shippingProfileId }: Props) => {
 *         const updateShippingProfile = useAdminUpdateShippingProfile(
 *           shippingProfileId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           name: string,
 *           type: ShippingProfileType
 *         ) => {
 *           updateShippingProfile.mutate({
 *             name,
 *             type
 *           }, {
 *             onSuccess: ({ shipping_profile }) => {
 *               console.log(shipping_profile.name)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ShippingProfile
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/shipping-profiles/{id} \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Large Products"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Shipping Profiles
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminShippingProfilesRes"
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
 * @schema AdminPostShippingProfilesProfileReq
 * type: object
 * description: "The detail to update of the shipping profile."
 * properties:
 *   name:
 *     description: The name of the Shipping Profile
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   type:
 *     description: The type of the Shipping Profile
 *     type: string
 *     enum: [default, gift_card, custom]
 *   products:
 *     description: product IDs to associate with the Shipping Profile
 *     type: array
 *   shipping_options:
 *     description: Shipping option IDs to associate with the Shipping Profile
 *     type: array
 */
export declare class AdminPostShippingProfilesProfileReq {
    name?: string;
    metadata?: Record<string, unknown>;
    type?: ShippingProfileType;
    products?: string[];
    shipping_options?: string[];
}
