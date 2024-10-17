/**
 * @oas [post] /admin/tax-rates
 * operationId: "PostTaxRates"
 * summary: "Create a Tax Rate"
 * description: "Create a Tax Rate."
 * parameters:
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
 *         $ref: "#/components/schemas/AdminPostTaxRatesReq"
 * x-codegen:
 *   method: create
 *   queryParams: AdminPostTaxRatesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.taxRates.create({
 *         code: "TEST",
 *         name: "New Tax Rate",
 *         region_id
 *       })
 *       .then(({ tax_rate }) => {
 *         console.log(tax_rate.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateTaxRate } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const CreateTaxRate = ({ regionId }: Props) => {
 *         const createTaxRate = useAdminCreateTaxRate()
 *         // ...
 *
 *         const handleCreate = (
 *           code: string,
 *           name: string,
 *           rate: number
 *         ) => {
 *           createTaxRate.mutate({
 *             code,
 *             name,
 *             region_id: regionId,
 *             rate,
 *           }, {
 *             onSuccess: ({ tax_rate }) => {
 *               console.log(tax_rate.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateTaxRate
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/tax-rates' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "code": "TEST",
 *           "name": "New Tax Rate",
 *           "region_id": "{region_id}"
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
 * @schema AdminPostTaxRatesReq
 * type: object
 * description: "The details of the tax rate to create."
 * required:
 *   - code
 *   - name
 *   - region_id
 * properties:
 *   code:
 *     type: string
 *     description: "The code of the tax rate."
 *   name:
 *     type: string
 *     description: "The name of the tax rate."
 *   region_id:
 *     type: string
 *     description: "The ID of the Region that the tax rate belongs to."
 *   rate:
 *     type: number
 *     description: "The numeric rate to charge."
 *   products:
 *     type: array
 *     description: "The IDs of the products associated with this tax rate."
 *     items:
 *       type: string
 *   shipping_options:
 *     type: array
 *     description: "The IDs of the shipping options associated with this tax rate"
 *     items:
 *       type: string
 *   product_types:
 *     type: array
 *     description: "The IDs of the types of products associated with this tax rate"
 *     items:
 *       type: string
 */
export declare class AdminPostTaxRatesReq {
    code: string;
    name: string;
    region_id: string;
    rate?: number | null;
    products?: string[];
    shipping_options?: string[];
    product_types?: string[];
}
/**
 * {@inheritDoc FindParams}
 */
export declare class AdminPostTaxRatesParams {
    /**
     * {@inheritDoc FindParams.expand}
     */
    expand?: string[];
    /**
     * {@inheritDoc FindParams.fields}
     */
    fields?: string[];
}
