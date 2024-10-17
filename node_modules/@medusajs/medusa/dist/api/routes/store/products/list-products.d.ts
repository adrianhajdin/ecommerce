import { DateComparisonOperator } from "../../../../types/common";
import { PriceSelectionParams } from "../../../../types/price-selection";
/**
 * @oas [get] /store/products
 * operationId: GetProducts
 * summary: List Products
 * description: |
 *   Retrieves a list of products. The products can be filtered by fields such as `id` or `q`. The products can also be sorted or paginated.
 *   This API Route can also be used to retrieve a product by its handle.
 *
 *   For accurate and correct pricing of the products based on the customer's context, it's highly recommended to pass fields such as
 *   `region_id`, `currency_code`, and `cart_id` when available.
 *
 *   Passing `sales_channel_id` ensures retrieving only products available in the specified sales channel.
 *   You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
 * externalDocs:
 *   description: "How to retrieve a product by its handle"
 *   url: "https://docs.medusajs.com/modules/products/storefront/show-products#retrieve-product-by-handle"
 * parameters:
 *   - (query) q {string} term used to search products' title, description, variant's title, variant's sku, and collection's title.
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by IDs.
 *     schema:
 *       oneOf:
 *         - type: string
 *         - type: array
 *           items:
 *             type: string
 *   - in: query
 *     name: sales_channel_id
 *     style: form
 *     explode: false
 *     description: "Filter by sales channel IDs. When provided, only products available in the selected sales channels are retrieved. Alternatively, you can pass a
 *      publishable API key in the request header and this will have the same effect."
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: collection_id
 *     style: form
 *     explode: false
 *     description: Filter by product collection IDs. When provided, only products that belong to the specified product collections are retrieved.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: type_id
 *     style: form
 *     explode: false
 *     description: Filter by product type IDs. When provided, only products that belong to the specified product types are retrieved.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: tags
 *     style: form
 *     explode: false
 *     description: Filter by product tag IDs. When provided, only products that belong to the specified product tags are retrieved.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) title {string} Filter by title.
 *   - (query) description {string} Filter by description
 *   - (query) handle {string} Filter by handle.
 *   - (query) is_giftcard {boolean} Whether to retrieve regular products or gift-card products.
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
 *     name: category_id
 *     style: form
 *     explode: false
 *     description: Filter by product category IDs. When provided, only products that belong to the specified product categories are retrieved.
 *     schema:
 *       type: array
 *       x-featureFlag: "product_categories"
 *       items:
 *         type: string
 *   - in: query
 *     name: include_category_children
 *     style: form
 *     explode: false
 *     description: Whether to include child product categories when filtering using the `category_id` field.
 *     schema:
 *       type: boolean
 *       x-featureFlag: "product_categories"
 *   - (query) offset=0 {integer} The number of products to skip when retrieving the products.
 *   - (query) limit=100 {integer} Limit the number of products returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned products.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned products.
 *   - (query) order {string} A product field to sort-order the retrieved products by.
 *   - (query) cart_id {string} The ID of the cart. This is useful for accurate pricing based on the cart's context.
 *   - (query) region_id {string} The ID of the region. This is useful for accurate pricing based on the selected region.
 *   - in: query
 *     name: currency_code
 *     style: form
 *     explode: false
 *     description: A 3 character ISO currency code. This is useful for accurate pricing based on the selected currency.
 *     schema:
 *       type: string
 *       externalDocs:
 *         url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *         description: See a list of codes.
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetProductsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.products.list()
 *       .then(({ products, limit, offset, count }) => {
 *         console.log(products.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useProducts } from "medusa-react"
 *
 *       const Products = () => {
 *         const { products, isLoading } = useProducts()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {products && !products.length && <span>No Products</span>}
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
 *       export default Products
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/products'
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreProductsListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
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
 * {@inheritDoc FindPaginationParams}
 */
export declare class StoreGetProductsPaginationParams extends PriceSelectionParams {
    /**
     * {@inheritDoc FindPaginationParams.offset}
     * @defaultValue 0
     */
    offset?: number;
    /**
     * {@inheritDoc FindPaginationParams.limit}
     * @defaultValue 100
     */
    limit?: number;
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
}
/**
 * Parameters used to filter and configure the pagination of the retrieved products.
 */
export declare class StoreGetProductsParams extends StoreGetProductsPaginationParams {
    /**
     * {@inheritDoc FilterableProductProps.id}
     */
    id?: string | string[];
    /**
     * {@inheritDoc FilterableProductProps.q}
     */
    q?: string;
    /**
     * {@inheritDoc FilterableProductProps.collection_id}
     */
    collection_id?: string[];
    /**
     * {@inheritDoc FilterableProductProps.tags}
     */
    tags?: string[];
    /**
     * {@inheritDoc FilterableProductProps.title}
     */
    title?: string;
    /**
     * {@inheritDoc FilterableProductProps.description}
     */
    description?: string;
    /**
     * {@inheritDoc FilterableProductProps.handle}
     */
    handle?: string;
    /**
     * {@inheritDoc FilterableProductProps.is_giftcard}
     */
    is_giftcard?: boolean;
    /**
     * {@inheritDoc FilterableProductProps.type_id}
     */
    type_id?: string[];
    /**
     * {@inheritDoc FilterableProductProps.sales_channel_id}
     */
    sales_channel_id?: string[];
    /**
     * {@inheritDoc FilterableProductProps.category_id}
     */
    category_id?: string[];
    /**
     * {@inheritDoc FilterableProductProps.include_category_children}
     *
     * @featureFlag product_categories
     */
    include_category_children?: boolean;
    /**
     * {@inheritDoc FilterableProductProps.created_at}
     */
    created_at?: DateComparisonOperator;
    /**
     * {@inheritDoc FilterableProductProps.created_at}
     */
    updated_at?: DateComparisonOperator;
}
