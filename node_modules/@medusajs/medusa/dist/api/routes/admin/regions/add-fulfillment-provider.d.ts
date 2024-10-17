/**
 * @oas [post] /admin/regions/{id}/fulfillment-providers
 * operationId: "PostRegionsRegionFulfillmentProviders"
 * summary: "Add Fulfillment Provider"
 * description: "Add a Fulfillment Provider to the list of fulfullment providers in a Region."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Region.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostRegionsRegionFulfillmentProvidersReq"
 * x-codegen:
 *   method: addFulfillmentProvider
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.regions.addFulfillmentProvider(regionId, {
 *         provider_id: "manual"
 *       })
 *       .then(({ region }) => {
 *         console.log(region.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminRegionAddFulfillmentProvider
 *       } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const Region = ({
 *         regionId
 *       }: Props) => {
 *         const addFulfillmentProvider =
 *           useAdminRegionAddFulfillmentProvider(regionId)
 *         // ...
 *
 *         const handleAddFulfillmentProvider = (
 *           providerId: string
 *         ) => {
 *           addFulfillmentProvider.mutate({
 *             provider_id: providerId
 *           }, {
 *             onSuccess: ({ region }) => {
 *               console.log(region.fulfillment_providers)
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
 *       curl -X POST '{backend_url}/admin/regions/{id}/fulfillment-providers' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "provider_id": "manual"
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
 * @schema AdminPostRegionsRegionFulfillmentProvidersReq
 * type: object
 * description: "The details of the fulfillment provider to add to the region."
 * required:
 *   - provider_id
 * properties:
 *   provider_id:
 *     description: "The ID of the Fulfillment Provider."
 *     type: string
 */
export declare class AdminPostRegionsRegionFulfillmentProvidersReq {
    provider_id: string;
}
