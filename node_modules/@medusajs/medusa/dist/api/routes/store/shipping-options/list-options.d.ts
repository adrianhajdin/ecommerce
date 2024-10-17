/**
 * @oas [get] /store/shipping-options
 * operationId: GetShippingOptions
 * summary: Get Shipping Options
 * description: "Retrieve a list of Shipping Options."
 * parameters:
 *   - (query) is_return {boolean} Whether return shipping options should be included. By default, all shipping options are returned.
 *   - (query) product_ids {string} "Comma-separated list of Product IDs to filter Shipping Options by. If provided, only shipping options that can be used with the provided products are retrieved."
 *   - (query) region_id {string} "The ID of the region that the shipping options belong to. If not provided, all shipping options are retrieved."
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetShippingOptionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.shippingOptions.list()
 *       .then(({ shipping_options }) => {
 *         console.log(shipping_options.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useShippingOptions } from "medusa-react"
 *
 *       const ShippingOptions = () => {
 *         const {
 *           shipping_options,
 *           isLoading,
 *         } = useShippingOptions()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {shipping_options?.length &&
 *               shipping_options?.length > 0 && (
 *               <ul>
 *                 {shipping_options?.map((shipping_option) => (
 *                   <li key={shipping_option.id}>
 *                     {shipping_option.id}
 *                   </li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default ShippingOptions
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/shipping-options'
 * tags:
 *   - Shipping Options
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreShippingOptionsListRes"
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
 * Filters to apply on the retrieved shipping options.
 */
export declare class StoreGetShippingOptionsParams {
    /**
     * Product ID that is used to filter shipping options by whether they can be used to ship that product.
     */
    product_ids?: string;
    /**
     * Filter the shipping options by the ID of their associated region.
     */
    region_id?: string;
    /**
     * Filter the shipping options by whether they're return shipping options.
     */
    is_return?: string;
}
