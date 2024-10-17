/**
 * @oas [post] /admin/regions/{id}
 * operationId: "PostRegionsRegion"
 * summary: "Update a Region"
 * description: "Update a Region's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Region.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostRegionsRegionReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.regions.update(regionId, {
 *         name: "Europe"
 *       })
 *       .then(({ region }) => {
 *         console.log(region.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateRegion } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const Region = ({
 *         regionId
 *       }: Props) => {
 *         const updateRegion = useAdminUpdateRegion(regionId)
 *         // ...
 *
 *         const handleUpdate = (
 *           countries: string[]
 *         ) => {
 *           updateRegion.mutate({
 *             countries,
 *           }, {
 *             onSuccess: ({ region }) => {
 *               console.log(region.id)
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
 *       curl -X POST '{backend_url}/admin/regions/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Europe"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Regions
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminRegionsRes"
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
 * @schema AdminPostRegionsRegionReq
 * type: object
 * description: "The details to update of the regions."
 * properties:
 *   name:
 *     description: "The name of the Region"
 *     type: string
 *   currency_code:
 *     description: "The 3 character ISO currency code to use in the Region."
 *     type: string
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   automatic_taxes:
 *     description: >-
 *       If set to `true`, the Medusa backend will automatically calculate taxes for carts in this region. If set to `false`, the taxes must be calculated manually.
 *     externalDocs:
 *       url: https://docs.medusajs.com/modules/taxes/storefront/manual-calculation
 *       description: How to calculate taxes in a storefront.
 *     type: boolean
 *   gift_cards_taxable:
 *     description: >-
 *       If set to `true`, taxes will be applied on gift cards.
 *     type: boolean
 *   tax_provider_id:
 *     description: "The ID of the tax provider to use. If none provided, the system tax provider is used."
 *     type: string
 *   tax_code:
 *     description: "The tax code of the Region."
 *     type: string
 *   tax_rate:
 *     description: "The tax rate to use in the Region."
 *     type: number
 *   includes_tax:
 *     x-featureFlag: "tax_inclusive_pricing"
 *     description: "Whether taxes are included in the prices of the region."
 *     type: boolean
 *   payment_providers:
 *     description: "A list of Payment Provider IDs that can be used in the Region"
 *     type: array
 *     items:
 *       type: string
 *   fulfillment_providers:
 *     description: "A list of Fulfillment Provider IDs that can be used in the Region"
 *     type: array
 *     items:
 *       type: string
 *   countries:
 *     description: "A list of countries' 2 ISO characters that should be included in the Region."
 *     type: array
 *     items:
 *       type: string
 */
export declare class AdminPostRegionsRegionReq {
    name?: string;
    currency_code?: string;
    tax_code?: string;
    tax_rate?: number;
    gift_cards_taxable?: boolean;
    automatic_taxes?: boolean;
    tax_provider_id?: string | null;
    payment_providers?: string[];
    fulfillment_providers?: string[];
    countries?: string[];
    includes_tax?: boolean;
    metadata?: Record<string, unknown>;
}
