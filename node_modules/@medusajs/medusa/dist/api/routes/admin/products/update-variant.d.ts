import { ProductVariantPricesUpdateReq } from "../../../../types/product-variant";
/**
 * @oas [post] /admin/products/{id}/variants/{variant_id}
 * operationId: "PostProductsProductVariantsVariant"
 * summary: "Update a Product Variant"
 * description: "Update a Product Variant's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 *   - (path) variant_id=* {string} The ID of the Product Variant.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductVariantsVariantReq"
 * x-codegen:
 *   method: updateVariant
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.updateVariant(productId, variantId, {
 *         title: "Color",
 *         prices: [
 *           {
 *             amount: 1000,
 *             currency_code: "eur"
 *           }
 *         ],
 *         options: [
 *           {
 *             option_id,
 *             value: "S"
 *           }
 *         ],
 *         inventory_quantity: 100
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateVariant } from "medusa-react"
 *
 *       type Props = {
 *         productId: string
 *         variantId: string
 *       }
 *
 *       const ProductVariant = ({
 *         productId,
 *         variantId
 *       }: Props) => {
 *         const updateVariant = useAdminUpdateVariant(
 *           productId
 *         )
 *         // ...
 *
 *         const handleUpdate = (title: string) => {
 *           updateVariant.mutate({
 *             variant_id: variantId,
 *             title,
 *           }, {
 *             onSuccess: ({ product }) => {
 *               console.log(product.variants)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ProductVariant
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products/{id}/variants/{variant_id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Color",
 *           "prices": [
 *             {
 *               "amount": 1000,
 *               "currency_code": "eur"
 *             }
 *           ]
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
declare class ProductVariantOptionReq {
    value: string;
    option_id: string;
}
/**
 * @schema AdminPostProductsProductVariantsVariantReq
 * type: object
 * properties:
 *   title:
 *     description: The title of the product variant.
 *     type: string
 *   sku:
 *     description: The unique SKU of the product variant.
 *     type: string
 *   ean:
 *     description: The EAN number of the item.
 *     type: string
 *   upc:
 *     description: The UPC number of the item.
 *     type: string
 *   barcode:
 *     description: A generic GTIN field of the product variant.
 *     type: string
 *   hs_code:
 *     description: The Harmonized System code of the product variant.
 *     type: string
 *   inventory_quantity:
 *     description: The amount of stock kept of the product variant.
 *     type: integer
 *   allow_backorder:
 *     description: Whether the product variant can be purchased when out of stock.
 *     type: boolean
 *   manage_inventory:
 *     description: Whether Medusa should keep track of the inventory of this product variant.
 *     type: boolean
 *   weight:
 *     description: The weight of the product variant.
 *     type: number
 *   length:
 *     description: The length of the product variant.
 *     type: number
 *   height:
 *     description: The height of the product variant.
 *     type: number
 *   width:
 *     description: The width of the product variant.
 *     type: number
 *   origin_country:
 *     description: The country of origin of the product variant.
 *     type: string
 *   mid_code:
 *     description: The Manufacturer Identification code of the product variant.
 *     type: string
 *   material:
 *     description: The material composition of the product variant.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   prices:
 *     type: array
 *     description: An array of product variant prices. A product variant can have different prices for each region or currency code.
 *     externalDocs:
 *       url: https://docs.medusajs.com/modules/products/admin/manage-products#product-variant-prices
 *       description: Product variant pricing.
 *     items:
 *       type: object
 *       required:
 *         - amount
 *       properties:
 *         id:
 *           description: The ID of the price. If provided, the existing price will be updated. Otherwise, a new price will be created.
 *           type: string
 *         region_id:
 *           description: The ID of the Region the price will be used in. This is only required if `currency_code` is not provided.
 *           type: string
 *         currency_code:
 *           description: The 3 character ISO currency code the price will be used in. This is only required if `region_id` is not provided.
 *           type: string
 *           externalDocs:
 *             url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *             description: See a list of codes.
 *         amount:
 *           description: The price amount.
 *           type: integer
 *         min_quantity:
 *          description: The minimum quantity required to be added to the cart for the price to be used.
 *          type: integer
 *         max_quantity:
 *           description: The maximum quantity required to be added to the cart for the price to be used.
 *           type: integer
 *   options:
 *     type: array
 *     description: An array of Product Option values that the variant corresponds to.
 *     items:
 *       type: object
 *       required:
 *         - option_id
 *         - value
 *       properties:
 *         option_id:
 *           description: The ID of the Product Option.
 *           type: string
 *         value:
 *           description: The value of the Product Option.
 *           type: string
 */
export declare class AdminPostProductsProductVariantsVariantReq {
    title?: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: ProductVariantPricesUpdateReq[];
    options?: ProductVariantOptionReq[];
}
