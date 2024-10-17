import { InventoryItemDTO, InventoryLevelDTO } from "@medusajs/types";
/**
 * @oas [get] /admin/variants/{id}/inventory
 * operationId: "GetVariantsVariantInventory"
 * summary: "Get Variant's Inventory"
 * description: "Retrieve the available inventory of a Product Variant."
 * x-authenticated: true
 * parameters:
 *   - (path) id {string} The Product Variant ID.
 * x-codegen:
 *   method: getInventory
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.variants.getInventory(variantId)
 *       .then(({ variant }) => {
 *         console.log(variant.inventory, variant.sales_channel_availability)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminVariantsInventory } from "medusa-react"
 *
 *       type Props = {
 *         variantId: string
 *       }
 *
 *       const VariantInventory = ({ variantId }: Props) => {
 *         const { variant, isLoading } = useAdminVariantsInventory(
 *           variantId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {variant && variant.inventory.length === 0 && (
 *               <span>Variant doesn't have inventory details</span>
 *             )}
 *             {variant && variant.inventory.length > 0 && (
 *               <ul>
 *                 {variant.inventory.map((inventory) => (
 *                   <li key={inventory.id}>{inventory.title}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default VariantInventory
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/variants/{id}/inventory' \
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
 *           $ref: "#/components/schemas/AdminGetVariantsVariantInventoryRes"
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
export type LevelWithAvailability = InventoryLevelDTO & {
    available_quantity: number;
};
/**
 * @schema ResponseInventoryItem
 * allOf:
 *   - $ref: "#/components/schemas/InventoryItemDTO"
 *   - type: object
 *     properties:
 *       location_levels:
 *         type: array
 *         description: The inventory's location levels.
 *         items:
 *           allOf:
 *             - $ref: "#/components/schemas/InventoryItemDTO"
 *             - type: object
 *               required:
 *                 - available_quantity
 *               properties:
 *                 available_quantity:
 *                   description: The available quantity in the inventory location.
 *                   type: number
 */
export type ResponseInventoryItem = Partial<InventoryItemDTO> & {
    location_levels?: LevelWithAvailability[];
};
/**
 * @schema VariantInventory
 * type: object
 * required:
 *   - id
 *   - inventory
 *   - sales_channel_availability
 * properties:
 *   id:
 *     description: the ID of the variant
 *     type: string
 *   inventory:
 *     description: The inventory details.
 *     $ref: "#/components/schemas/ResponseInventoryItem"
 *   sales_channel_availability:
 *     type: array
 *     description: Details about the variant's inventory availability in sales channels.
 *     items:
 *       type: object
 *       required:
 *         - channel_name
 *         - channel_id
 *         - available_quantity
 *       properties:
 *         channel_name:
 *           description: Sales channel's name
 *           type: string
 *         channel_id:
 *           description: Sales channel's ID
 *           type: string
 *         available_quantity:
 *           description: Available quantity in the sales channel
 *           type: number
 */
export type VariantInventory = {
    id: string;
    inventory: ResponseInventoryItem[];
    sales_channel_availability: {
        channel_name: string;
        channel_id: string;
        available_quantity: number;
    }[];
};
/**
 * @schema AdminGetVariantsVariantInventoryRes
 * type: object
 * description: "The variant's inventory details."
 * properties:
 *   variant:
 *     type: object
 *     description: "The product variant's inventory details."
 *     $ref: "#/components/schemas/VariantInventory"
 */
export type AdminGetVariantsVariantInventoryRes = {
    variant: VariantInventory;
};
