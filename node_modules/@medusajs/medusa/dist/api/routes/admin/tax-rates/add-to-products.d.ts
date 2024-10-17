/**
 * @oas [post] /admin/tax-rates/{id}/products/batch
 * operationId: "PostTaxRatesTaxRateProducts"
 * summary: "Add to Products"
 * description: "Add products to a tax rate."
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
 *         $ref: "#/components/schemas/AdminPostTaxRatesTaxRateProductsReq"
 * x-codegen:
 *   method: addProducts
 *   queryParams: AdminPostTaxRatesTaxRateProductsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.taxRates.addProducts(taxRateId, {
 *         products: [
 *           productId
 *         ]
 *       })
 *       .then(({ tax_rate }) => {
 *         console.log(tax_rate.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateProductTaxRates } from "medusa-react"
 *
 *       type Props = {
 *         taxRateId: string
 *       }
 *
 *       const TaxRate = ({ taxRateId }: Props) => {
 *         const addProduct = useAdminCreateProductTaxRates(taxRateId)
 *         // ...
 *
 *         const handleAddProduct = (productIds: string[]) => {
 *           addProduct.mutate({
 *             products: productIds,
 *           }, {
 *             onSuccess: ({ tax_rate }) => {
 *               console.log(tax_rate.products)
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
 *       curl -X POST '{backend_url}/admin/tax-rates/{id}/products/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *          "products": [
 *            "{product_id}"
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
 * @schema AdminPostTaxRatesTaxRateProductsReq
 * type: object
 * description: "The details of the products to associat with the tax rate."
 * required:
 *   - products
 * properties:
 *   products:
 *     type: array
 *     description: "The IDs of the products to associate with this tax rate"
 *     items:
 *       type: string
 */
export declare class AdminPostTaxRatesTaxRateProductsReq {
    products: string[];
}
/**
 * {@inheritDoc FindParams}
 */
export declare class AdminPostTaxRatesTaxRateProductsParams {
    /**
     * {@inheritDoc FindParams.expand}
     */
    expand?: string[];
    /**
     * {@inheritDoc FindParams.fields}
     */
    fields?: string[];
}
