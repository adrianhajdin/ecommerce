import { NumericalComparisonOperator } from "../../../../types/common";
import { AdminPriceSelectionParams } from "../../../../types/price-selection";
/**
 * @oas [get] /admin/variants
 * operationId: "GetVariants"
 * summary: "List Product Variants"
 * description: "Retrieve a list of Product Variants. The product variant can be filtered by fields such as `id` or `title`. The product variant can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: Filter by product variant IDs.
 *     schema:
 *       oneOf:
 *        - type: string
 *          description: A product variant ID.
 *        - type: array
 *          description: An array of product variant IDs.
 *          items:
 *            type: string
 *   - (query) expand {string} "Comma-separated relations that should be expanded in the returned product variants."
 *   - (query) fields {string} "Comma-separated fields that should be included in the returned product variants."
 *   - (query) offset=0 {number} The number of product variants to skip when retrieving the product variants.
 *   - (query) limit=100 {number} Limit the number of product variants returned.
 *   - (query) order {string} The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 *   - (query) manage_inventory {boolean} Filter product variants by whether their inventory is managed or not.
 *   - (query) allow_backorder {boolean} Filter product variants by whether they are allowed to be backordered or not.
 *   - in: query
 *     name: cart_id
 *     style: form
 *     explode: false
 *     description: The ID of the cart to use for the price selection context.
 *     schema:
 *       type: string
 *   - in: query
 *     name: region_id
 *     style: form
 *     explode: false
 *     description: The ID of the region to use for the price selection context.
 *     schema:
 *       type: string
 *       externalDocs:
 *         description: "Price selection context overview"
 *         url: "https://docs.medusajs.com/modules/price-lists/price-selection-strategy#context-object"
 *   - in: query
 *     name: currency_code
 *     style: form
 *     explode: false
 *     description: The 3 character ISO currency code to use for the price selection context.
 *     schema:
 *       type: string
 *       externalDocs:
 *         description: "Price selection context overview"
 *         url: "https://docs.medusajs.com/modules/price-lists/price-selection-strategy#context-object"
 *   - in: query
 *     name: customer_id
 *     style: form
 *     explode: false
 *     description: The ID of the customer to use for the price selection context.
 *     schema:
 *       type: string
 *       externalDocs:
 *         description: "Price selection context overview"
 *         url: "https://docs.medusajs.com/modules/price-lists/price-selection-strategy#context-object"
 *   - in: query
 *     name: title
 *     style: form
 *     explode: false
 *     description: Filter by title.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: a single title to filter by
 *         - type: array
 *           description: multiple titles to filter by
 *           items:
 *             type: string
 *   - in: query
 *     name: inventory_quantity
 *     description: Filter by available inventory quantity
 *     schema:
 *       oneOf:
 *         - type: number
 *           description: a specific number to filter by.
 *         - type: object
 *           description: filter using less and greater than comparisons.
 *           properties:
 *             lt:
 *               type: number
 *               description: filter by inventory quantity less than this number
 *             gt:
 *               type: number
 *               description: filter by inventory quantity greater than this number
 *             lte:
 *               type: number
 *               description: filter by inventory quantity less than or equal to this number
 *             gte:
 *               type: number
 *               description: filter by inventory quantity greater than or equal to this number
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetVariantsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.variants.list()
 *       .then(({ variants, limit, offset, count }) => {
 *         console.log(variants.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminVariants } from "medusa-react"
 *
 *       const Variants = () => {
 *         const { variants, isLoading } = useAdminVariants()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {variants && !variants.length && (
 *               <span>No Variants</span>
 *             )}
 *             {variants && variants.length > 0 && (
 *               <ul>
 *                 {variants.map((variant) => (
 *                   <li key={variant.id}>{variant.title}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Variants
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/variants' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Variants
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminVariantsListRes"
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
 * Parameters used to filter and configure the pagination of the retrieved product variants.
 */
export declare class AdminGetVariantsParams extends AdminPriceSelectionParams {
    /**
     * Search term to search product variants' IDs.
     */
    q?: string;
    /**
     * {@inheritDoc FindPaginationParams.limit}
     * @defaultValue 20
     */
    limit?: number;
    /**
     * {@inheritDoc FindPaginationParams.offset}
     * @defaultValue 0
     */
    offset?: number;
    /**
     * {@inheritDoc FindParams.expand}
     */
    expand?: string;
    /**
     * {@inheritDoc FindParams.fields}
     */
    fields?: string;
    /**
     * IDs to filter product variants by.
     */
    id?: string | string[];
    /**
     * Titles to filter product variants by.
     */
    title?: string | string[];
    /**
     * Number filters to apply on product variants' `inventory_quantity` field.
     */
    inventory_quantity?: number | NumericalComparisonOperator;
    /**
     * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     */
    order?: string;
    /**
     * Filter product variants by whether their inventory is managed or not.
     */
    manage_inventory?: boolean;
    /**
     * Filter product variants by whether they are allowed to be backordered or not.
     */
    allow_backorder?: boolean;
}
