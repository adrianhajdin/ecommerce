/**
 * @oas [post] /admin/products/{id}/options
 * operationId: "PostProductsProductOptions"
 * summary: "Add a Product Option"
 * description: "Add a Product Option to a Product."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductOptionsReq"
 * x-codegen:
 *   method: addOption
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.addOption(productId, {
 *         title: "Size"
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateProductOption } from "medusa-react"
 *
 *       type Props = {
 *         productId: string
 *       }
 *
 *       const CreateProductOption = ({ productId }: Props) => {
 *         const createOption = useAdminCreateProductOption(
 *           productId
 *         )
 *         // ...
 *
 *         const handleCreate = (
 *           title: string
 *         ) => {
 *           createOption.mutate({
 *             title
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
 *       export default CreateProductOption
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products/{id}/options' \
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
 * @schema AdminPostProductsProductOptionsReq
 * type: object
 * description: "The details of the product option to create."
 * required:
 *   - title
 * properties:
 *   title:
 *     description: "The title the Product Option."
 *     type: string
 *     example: "Size"
 */
export declare class AdminPostProductsProductOptionsReq {
    title: string;
}
