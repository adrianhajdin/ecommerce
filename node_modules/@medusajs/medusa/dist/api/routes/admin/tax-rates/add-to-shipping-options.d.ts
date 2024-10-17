/**
 * @oas [post] /admin/tax-rates/{id}/shipping-options/batch
 * operationId: "PostTaxRatesTaxRateShippingOptions"
 * summary: "Add to Shipping Options"
 * description: "Add Shipping Options to a Tax Rate."
 * parameters:
 *   - (path) id=* {string} ID of the tax rate.
 *   - in: query
 *     name: fields
 *     description: "Comma-separated fields that should be included in the returned tax rate."
 *     style: form
 *     explode: false
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: expand
 *     description: "Comma-separated relations that should be expanded in the returned tax rate."
 *     style: form
 *     explode: false
 *     schema:
 *       type: array
 *       items:
 *         type: string
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostTaxRatesTaxRateShippingOptionsReq"
 * x-codegen:
 *   method: addShippingOptions
 *   queryParams: AdminPostTaxRatesTaxRateShippingOptionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.taxRates.addShippingOptions(taxRateId, {
 *         shipping_options: [
 *           shippingOptionId
 *         ]
 *       })
 *       .then(({ tax_rate }) => {
 *         console.log(tax_rate.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateShippingTaxRates } from "medusa-react"
 *
 *       type Props = {
 *         taxRateId: string
 *       }
 *
 *       const TaxRate = ({ taxRateId }: Props) => {
 *         const addShippingOption = useAdminCreateShippingTaxRates(
 *           taxRateId
 *         )
 *         // ...
 *
 *         const handleAddShippingOptions = (
 *           shippingOptionIds: string[]
 *         ) => {
 *           addShippingOption.mutate({
 *             shipping_options: shippingOptionIds,
 *           }, {
 *             onSuccess: ({ tax_rate }) => {
 *               console.log(tax_rate.shipping_options)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default TaxRate
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/tax-rates/{id}/shipping-options/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *          "shipping_options": [
 *            "{shipping_option_id}"
 *          ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Tax Rates
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminTaxRatesRes"
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
 * @schema AdminPostTaxRatesTaxRateShippingOptionsReq
 * type: object
 * description: "The details of the shipping options to associate with the tax rate."
 * required:
 *   - shipping_options
 * properties:
 *   shipping_options:
 *     type: array
 *     description: "The IDs of the shipping options to associate with this tax rate"
 *     items:
 *       type: string
 */
export declare class AdminPostTaxRatesTaxRateShippingOptionsReq {
    shipping_options: string[];
}
/**
 * {@inheritDoc FindParams}
 */
export declare class AdminPostTaxRatesTaxRateShippingOptionsParams {
    /**
     * {@inheritDoc FindParams.expand}
     */
    expand?: string[];
    /**
     * {@inheritDoc FindParams.fields}
     */
    fields?: string[];
}
