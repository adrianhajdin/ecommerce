import { Request, Response } from "express";
import { ProductBatchProductCategory } from "../../../../types/product-category";
import { FindParams } from "../../../../types/common";
/**
 * @oas [delete] /admin/product-categories/{id}/products/batch
 * operationId: "DeleteProductCategoriesCategoryProductsBatch"
 * summary: "Remove Products from Category"
 * description: "Remove a list of products from a product category."
 * x-authenticated: true
 * x-featureFlag: "product_categories"
 * parameters:
 *   - (path) id=* {string} The ID of the Product Category.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product category.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product category.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminDeleteProductCategoriesCategoryProductsBatchReq"
 * x-codegen:
 *   method: removeProducts
 *   queryParams: AdminDeleteProductCategoriesCategoryProductsBatchParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.productCategories.removeProducts(productCategoryId, {
 *         product_ids: [
 *           {
 *             id: productId
 *           }
 *         ]
 *       })
 *       .then(({ product_category }) => {
 *         console.log(product_category.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteProductsFromCategory } from "medusa-react"
 *
 *       type ProductsData = {
 *         id: string
 *       }
 *
 *       type Props = {
 *         productCategoryId: string
 *       }
 *
 *       const Category = ({
 *         productCategoryId
 *       }: Props) => {
 *         const deleteProducts = useAdminDeleteProductsFromCategory(
 *           productCategoryId
 *         )
 *         // ...
 *
 *         const handleDeleteProducts = (
 *           productIds: ProductsData[]
 *         ) => {
 *           deleteProducts.mutate({
 *             product_ids: productIds
 *           }, {
 *             onSuccess: ({ product_category }) => {
 *               console.log(product_category.products)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Category
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/product-categories/{id}/products/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "product_ids": [
 *             {
 *               "id": "{product_id}"
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Categories
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductCategoriesCategoryRes"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
/**
 * @schema AdminDeleteProductCategoriesCategoryProductsBatchReq
 * type: object
 * description: "The details of the products to delete from the product category."
 * required:
 *   - product_ids
 * properties:
 *   product_ids:
 *     description: The IDs of the products to delete from the product category.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a product
 *           type: string
 */
export declare class AdminDeleteProductCategoriesCategoryProductsBatchReq {
    product_ids: ProductBatchProductCategory[];
}
export declare class AdminDeleteProductCategoriesCategoryProductsBatchParams extends FindParams {
}
