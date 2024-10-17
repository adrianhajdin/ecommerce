import { Request, Response } from "express";
/**
 * @oas [get] /store/product-categories
 * operationId: "GetProductCategories"
 * summary: "List Product Categories"
 * description: "Retrieve a list of product categories. The product categories can be filtered by fields such as `handle` or `q`. The product categories can also be paginated.
 *  This API Route can also be used to retrieve a product category by its handle."
 * x-featureFlag: "product_categories"
 * externalDocs:
 *   description: "How to retrieve a product category by its handle"
 *   url: "https://docs.medusajs.com/modules/products/storefront/use-categories#get-a-category-by-its-handle"
 * parameters:
 *   - (query) q {string} term used to search product category's names and handles.
 *   - (query) handle {string} Filter by handle.
 *   - (query) parent_category_id {string} Filter by the ID of a parent category. Only children of the provided parent category are retrieved.
 *   - (query) include_descendants_tree {boolean} Whether all nested categories inside a category should be retrieved.
 *   - (query) offset=0 {integer} The number of product categories to skip when retrieving the product categories.
 *   - (query) limit=100 {integer} Limit the number of product categories returned.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product categories.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned product categories.
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetProductCategoriesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.productCategories.list()
 *       .then(({ product_categories, limit, offset, count }) => {
 *         console.log(product_categories.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useProductCategories } from "medusa-react"
 *
 *       function Categories() {
 *         const {
 *           product_categories,
 *           isLoading,
 *         } = useProductCategories()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {product_categories && !product_categories.length && (
 *               <span>No Categories</span>
 *             )}
 *             {product_categories && product_categories.length > 0 && (
 *               <ul>
 *                 {product_categories.map(
 *                   (category) => (
 *                     <li key={category.id}>{category.name}</li>
 *                   )
 *                 )}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Categories
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/product-categories' \
 *       -H 'x-medusa-access-token: {api_token}'
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
 *           $ref: "#/components/schemas/StoreGetProductCategoriesRes"
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
declare const StoreGetProductCategoriesParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved product categories.
 *
 * @property {number} limit - Limit the number of product categories returned in the list. Default is `100`.
 */
export declare class StoreGetProductCategoriesParams extends StoreGetProductCategoriesParams_base {
    /**
     * Search term to search product categories' names and handles.
     */
    q?: string;
    /**
     * Handle to filter product categories by.
     */
    handle?: string;
    /**
     * Filter product categories by the ID of their associated parent category.
     */
    parent_category_id?: string | null;
    /**
     * Whether to include child categories in the retrieved categories.
     */
    include_descendants_tree?: boolean;
}
