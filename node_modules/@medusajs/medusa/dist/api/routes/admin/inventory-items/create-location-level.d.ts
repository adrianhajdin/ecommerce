import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/inventory-items/{id}/location-levels
 * operationId: "PostInventoryItemsInventoryItemLocationLevels"
 * summary: "Create an Inventory Level"
 * description: "Create an Inventory Level for a given Inventory Item."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Inventory Item.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned inventory item.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned inventory item.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostInventoryItemsItemLocationLevelsReq"
 * x-codegen:
 *   method: createLocationLevel
 *   queryParams: AdminPostInventoryItemsItemLocationLevelsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.createLocationLevel(inventoryItemId, {
 *         location_id: "sloc_123",
 *         stocked_quantity: 10,
 *       })
 *       .then(({ inventory_item }) => {
 *         console.log(inventory_item.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateLocationLevel } from "medusa-react"
 *
 *       type Props = {
 *         inventoryItemId: string
 *       }
 *
 *       const InventoryItem = ({ inventoryItemId }: Props) => {
 *         const createLocationLevel = useAdminCreateLocationLevel(
 *           inventoryItemId
 *         )
 *         // ...
 *
 *         const handleCreateLocationLevel = (
 *           locationId: string,
 *           stockedQuantity: number
 *         ) => {
 *           createLocationLevel.mutate({
 *             location_id: locationId,
 *             stocked_quantity: stockedQuantity,
 *           }, {
 *             onSuccess: ({ inventory_item }) => {
 *               console.log(inventory_item.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default InventoryItem
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/inventory-items/{id}/location-levels' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "location_id": "sloc_123",
 *           "stocked_quantity": 10
 *       }'
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
 *           $ref: "#/components/schemas/AdminInventoryItemsRes"
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
/**
 * @schema AdminPostInventoryItemsItemLocationLevelsReq
 * type: object
 * description: "The details of the inventory level to create."
 * required:
 *   - location_id
 *   - stocked_quantity
 * properties:
 *   location_id:
 *     description: the ID of the stock location
 *     type: string
 *   stocked_quantity:
 *     description: the stock quantity of the inventory item at this location
 *     type: number
 *   incoming_quantity:
 *     description: the incoming stock quantity of the inventory item at this location
 *     type: number
 */
export declare class AdminPostInventoryItemsItemLocationLevelsReq {
    location_id: string;
    stocked_quantity: number;
    incoming_quantity?: number;
}
export declare class AdminPostInventoryItemsItemLocationLevelsParams extends FindParams {
}
