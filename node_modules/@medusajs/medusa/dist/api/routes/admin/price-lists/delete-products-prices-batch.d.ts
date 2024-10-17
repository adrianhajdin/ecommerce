import { Request, Response } from "express";
/**
 * @oas [delete] /admin/price-lists/{id}/products/prices/batch
 * operationId: "DeletePriceListsPriceListProductsPricesBatch"
 * summary: "Delete Product Prices"
 * description: "Delete all the prices associated with multiple products in a price list."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Price List
 * x-codegen:
 *   method: deleteProductsPrices
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.priceLists.deleteProductsPrices(priceListId, {
 *         product_ids: [
 *           productId1,
 *           productId2,
 *         ]
 *       })
 *       .then(({ ids, object, deleted }) => {
 *         console.log(ids.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeletePriceListProductsPrices } from "medusa-react"
 *
 *       type Props = {
 *         priceListId: string
 *       }
 *
 *       const PriceList = ({
 *         priceListId
 *       }: Props) => {
 *         const deleteProductsPrices = useAdminDeletePriceListProductsPrices(
 *           priceListId
 *         )
 *         // ...
 *
 *         const handleDeleteProductsPrices = (productIds: string[]) => {
 *           deleteProductsPrices.mutate({
 *             product_ids: productIds
 *           }, {
 *             onSuccess: ({ ids, deleted, object }) => {
 *               console.log(ids)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default PriceList
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/price-lists/{id}/products/prices/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "product_ids": [
 *             "prod_1",
 *             "prod_2"
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Price Lists
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPriceListDeleteProductPricesRes"
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
declare const _default: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export default _default;
/**
 * @schema AdminDeletePriceListsPriceListProductsPricesBatchReq
 * type: object
 * description: "The details of the products' prices to delete."
 * properties:
 *   product_ids:
 *     description: The IDs of the products to delete their associated prices.
 *     type: array
 *     items:
 *       type: string
 */
export declare class AdminDeletePriceListsPriceListProductsPricesBatchReq {
    product_ids: string[];
}
