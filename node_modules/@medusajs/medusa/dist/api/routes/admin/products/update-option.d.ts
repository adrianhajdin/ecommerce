/**
 * @oas [post] /admin/products/{id}/options/{option_id}
 * operationId: "PostProductsProductOptionsOption"
 * summary: "Update a Product Option"
 * description: "Update a Product Option's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 *   - (path) option_id=* {string} The ID of the Product Option.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductOptionsOption"
 * x-codegen:
 *   method: updateOption
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.updateOption(productId, optionId, {
 *         title: "Size"
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateProductOption } from "medusa-react"
 *
 *       type Props = {
 *         productId: string
 *         optionId: string
 *       }
 *
 *       const ProductOption = ({
 *         productId,
 *         optionId
 *       }: Props) => {
 *         const updateOption = useAdminUpdateProductOption(
 *           productId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           title: string
 *         ) => {
 *           updateOption.mutate({
 *             option_id: optionId,
 *             title,
 *           }, {
 *             onSuccess: ({ product }) => {
 *               console.log(product.options)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ProductOption
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products/{id}/options/{option_id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Size"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductsRes"
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
 * @schema AdminPostProductsProductOptionsOption
 * type: object
 * required:
 *   - title
 * properties:
 *   title:
 *     description: "The title of the Product Option"
 *     type: string
 */
export declare class AdminPostProductsProductOptionsOption {
    title: string;
}
