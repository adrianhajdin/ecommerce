import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /admin/inventory-items/{id}/location-levels
 * operationId: "GetInventoryItemsInventoryItemLocationLevels"
 * summary: "List Inventory Level"
 * description: "Retrieve a list of inventory levels of an inventory item. The inventory levels can be filtered by fields such as `location_id`."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Inventory Item the locations are associated with.
 *   - in: query
 *     name: location_id
 *     style: form
 *     explode: false
 *     description: Filter by location IDs.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned inventory levels.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned inventory levels.
 * x-codegen:
 *   method: listLocationLevels
 *   queryParams: AdminGetInventoryItemsItemLocationLevelsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.listLocationLevels(inventoryItemId)
 *       .then(({ inventory_item }) => {
 *         console.log(inventory_item.location_levels);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminInventoryItemLocationLevels,
 *       } from "medusa-react"
 *
 *       type Props = {
 *         inventoryItemId: string
 *       }
 *
 *       const InventoryItem = ({ inventoryItemId }: Props) => {
 *         const {
 *           inventory_item,
 *           isLoading,
 *         } = useAdminInventoryItemLocationLevels(inventoryItemId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {inventory_item && (
 *               <ul>
 *                 {inventory_item.location_levels.map((level) => (
 *                   <span key={level.id}>{level.stocked_quantity}</span>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default InventoryItem
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/inventory-items/{id}/location-levels' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Inventory Items
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminInventoryItemsLocationLevelsRes"
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
export declare class AdminGetInventoryItemsItemLocationLevelsParams extends FindParams {
    /**
     * Location IDs to filter location levels.
     */
    location_id?: string[];
}
