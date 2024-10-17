import { DateComparisonOperator } from "../../../../types/common";
import { Request } from "express";
import { ProductStatus } from "../../../../models";
/**
 * @oas [get] /admin/price-lists/{id}/products
 * operationId: "GetPriceListsPriceListProducts"
 * summary: "List Products"
 * description: "Retrieve a price list's products. The products can be filtered by fields such as `q` or `status`. The products can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} ID of the price list.
 *   - (query) q {string} term used to search products' title, description, product variant's title and sku, and product collection's title.
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by product IDs.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: ID of the product.
 *         - type: array
 *           items:
 *             type: string
 *             description: ID of a product.
 *   - in: query
 *     name: status
 *     description: Filter by product status
 *     style: form
 *     explode: false
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *         enum: [draft, proposed, published, rejected]
 *   - in: query
 *     name: collection_id
 *     description: Filter by product collection ID. Only products in the specified collections are retrieved.
 *     style: form
 *     explode: false
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: tags
 *     description: Filter by tag IDs. Only products having the specified tags are retrieved.
 *     style: form
 *     explode: false
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) title {string} Filter by title
 *   - (query) description {string} Filter by description
 *   - (query) handle {string} Filter by handle
 *   - (query) is_giftcard {boolean} A boolean value to filter by whether the product is a gift card or not.
 *   - (query) type {string} Filter product type.
 *   - (query) order {string} A product field to sort-order the retrieved products by.
 *   - in: query
 *     name: created_at
 *     description: Filter by a creation date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Filter by an update date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: deleted_at
 *     description: Filter by a deletion date range.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - (query) offset=0 {integer} The number of products to skip when retrieving the products.
 *   - (query) limit=50 {integer} Limit the number of products returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned products.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned products.
 * x-codegen:
 *   method: listProducts
 *   queryParams: AdminGetPriceListsPriceListProductsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.priceLists.listProducts(priceListId)
 *       .then(({ products, limit, offset, count }) => {
 *         console.log(products.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminPriceListProducts } from "medusa-react"
 *
 *       type Props = {
 *         priceListId: string
 *       }
 *
 *       const PriceListProducts = ({
 *         priceListId
 *       }: Props) => {
 *         const { products, isLoading } = useAdminPriceListProducts(
 *           priceListId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {products && !products.length && (
 *               <span>No Price Lists</span>
 *             )}
 *             {products && products.length > 0 && (
 *               <ul>
 *                 {products.map((product) => (
 *                   <li key={product.id}>{product.title}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default PriceListProducts
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/price-lists/{id}/products' \
 *       -H 'x-medusa-access-token: {api_token}'
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
 *           $ref: "#/components/schemas/AdminPriceListsProductsListRes"
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
declare const _default: (req: Request, res: any) => Promise<void>;
export default _default;
declare const AdminGetPriceListsPriceListProductsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved products associated with a price list.
 *
 * @property {number} limit - Limit the number of products returned in the list. Default is `50`.
 */
export declare class AdminGetPriceListsPriceListProductsParams extends AdminGetPriceListsPriceListProductsParams_base {
    /**
     * ID to filter products by.
     */
    id?: string | string[];
    /**
     * Search term to search products' title, description, product variant's title and sku, and product collection's title.
     */
    q?: string;
    /**
     * Statuses to filter products by.
     */
    status?: ProductStatus[];
    /**
     * Filter products by their associated collection ID.
     */
    collection_id?: string[];
    /**
     * Tags to filter products by.
     */
    tags?: string[];
    /**
     * Title to filter products by.
     */
    title?: string;
    /**
     * Description to filter products by.
     */
    description?: string;
    /**
     * Handle to filter products by.
     */
    handle?: string;
    /**
     * Filter products by whether they're gift cards.
     */
    is_giftcard?: boolean;
    /**
     * Type to filter products by.
     */
    type?: string;
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
    /**
     * Date filters to apply on the products' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the products' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the products' `deleted_at` date.
     */
    deleted_at?: DateComparisonOperator;
}
