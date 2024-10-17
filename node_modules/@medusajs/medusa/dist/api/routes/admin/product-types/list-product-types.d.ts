import { DateComparisonOperator, FindPaginationParams, StringComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /admin/product-types
 * operationId: "GetProductTypes"
 * summary: "List Product Types"
 * description: "Retrieve a list of product types. The product types can be filtered by fields such as `q` or `value`. The product types can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) limit=20 {integer} Limit the number of product types returned.
 *   - (query) offset=0 {integer} The number of product types to skip when retrieving the product types.
 *   - (query) order {string} A product type field to sort-order the retrieved product types by.
 *   - (query) discount_condition_id {string} Filter by the ID of a discount condition. Only product types that this discount condition is applied to will be retrieved.
 *   - in: query
 *     name: value
 *     style: form
 *     explode: false
 *     description: Filter by value.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by product type IDs.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) q {string} term to search product types' values.
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
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetProductTypesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.productTypes.list()
 *       .then(({ product_types }) => {
 *         console.log(product_types.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminProductTypes } from "medusa-react"
 *
 *       function ProductTypes() {
 *         const {
 *           product_types,
 *           isLoading
 *         } = useAdminProductTypes()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {product_types && !product_types.length && (
 *               <span>No Product Tags</span>
 *             )}
 *             {product_types && product_types.length > 0 && (
 *               <ul>
 *                 {product_types.map(
 *                   (type) => (
 *                     <li key={type.id}>{type.value}</li>
 *                   )
 *                 )}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default ProductTypes
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/product-types' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Types
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/AdminProductTypesListRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * Parameters used to filter and configure the pagination of the retrieved product types.
 */
export declare class AdminGetProductTypesParams extends FindPaginationParams {
    /**
     * IDs to filter product types by.
     */
    id?: string | string[] | StringComparisonOperator;
    /**
     * Search terms to search product types' value.
     */
    q?: string;
    /**
     * Values to filter product types by.
     */
    value?: string | string[] | StringComparisonOperator;
    /**
     * Date filters to apply on the product types' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the product types' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
    /**
     * Filter product types by their associated discount condition's ID.
     */
    discount_condition_id?: string;
}
