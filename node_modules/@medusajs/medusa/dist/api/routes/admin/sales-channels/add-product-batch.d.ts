import { Request, Response } from "express";
import { ProductBatchSalesChannel } from "../../../../types/sales-channels";
/**
 * @oas [post] /admin/sales-channels/{id}/products/batch
 * operationId: "PostSalesChannelsChannelProductsBatch"
 * summary: "Add Products to Sales Channel"
 * description: "Add a list of products to a sales channel."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Sales channel.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostSalesChannelsChannelProductsBatchReq"
 * x-codegen:
 *   method: addProducts
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.salesChannels.addProducts(salesChannelId, {
 *         product_ids: [
 *           {
 *             id: productId
 *           }
 *         ]
 *       })
 *       .then(({ sales_channel }) => {
 *         console.log(sales_channel.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminAddProductsToSalesChannel } from "medusa-react"
 *
 *       type Props = {
 *         salesChannelId: string
 *       }
 *
 *       const SalesChannel = ({ salesChannelId }: Props) => {
 *         const addProducts = useAdminAddProductsToSalesChannel(
 *           salesChannelId
 *         )
 *         // ...
 *
 *         const handleAddProducts = (productId: string) => {
 *           addProducts.mutate({
 *             product_ids: [
 *               {
 *                 id: productId,
 *               },
 *             ],
 *           }, {
 *             onSuccess: ({ sales_channel }) => {
 *               console.log(sales_channel.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default SalesChannel
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/sales-channels/{id}/products/batch' \
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
 *   - Sales Channels
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminSalesChannelsRes"
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
 * @schema AdminPostSalesChannelsChannelProductsBatchReq
 * type: object
 * description: "The details of the products to add to the sales channel."
 * required:
 *   - product_ids
 * properties:
 *   product_ids:
 *     description: The IDs of the products to add to the sales channel
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the product
 */
export declare class AdminPostSalesChannelsChannelProductsBatchReq {
    product_ids: ProductBatchSalesChannel[];
}
