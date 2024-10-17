import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /admin/inventory-items/{id}
 * operationId: "PostInventoryItemsInventoryItem"
 * summary: "Update an Inventory Item"
 * description: "Update an Inventory Item's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Inventory Item.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned inventory level.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned inventory level.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostInventoryItemsInventoryItemReq"
 * x-codegen:
 *   method: update
 *   queryParams: AdminPostInventoryItemsInventoryItemParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.update(inventoryItemId, {
 *         origin_country: "US",
 *       })
 *       .then(({ inventory_item }) => {
 *         console.log(inventory_item.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateInventoryItem } from "medusa-react"
 *
 *       type Props = {
 *         inventoryItemId: string
 *       }
 *
 *       const InventoryItem = ({ inventoryItemId }: Props) => {
 *         const updateInventoryItem = useAdminUpdateInventoryItem(
 *           inventoryItemId
 *         )
 *         // ...
 *
 *         const handleUpdate = (origin_country: string) => {
 *           updateInventoryItem.mutate({
 *             origin_country,
 *           }, {
 *             onSuccess: ({ inventory_item }) => {
 *               console.log(inventory_item.origin_country)
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
 *       curl -X POST '{backend_url}/admin/inventory-items/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "origin_country": "US"
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
 * @schema AdminPostInventoryItemsInventoryItemReq
 * type: object
 * description: "The attributes to update in an inventory item."
 * properties:
 *   hs_code:
 *     description: The Harmonized System code of the Inventory Item. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   origin_country:
 *     description: The country in which the Inventory Item was produced. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   mid_code:
 *     description: The Manufacturers Identification code that identifies the manufacturer of the Inventory Item. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   material:
 *     description: The material and composition that the Inventory Item is made of, May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     type: string
 *   weight:
 *     description: The weight of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   height:
 *     description: The height of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   width:
 *     description: The width of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   length:
 *     description: The length of the Inventory Item. May be used in shipping rate calculations.
 *     type: number
 *   title:
 *     description: The inventory item's title.
 *     type: string
 *   description:
 *     description: The inventory item's description.
 *     type: string
 *   thumbnail:
 *     description: The inventory item's thumbnail.
 *     type: string
 *   requires_shipping:
 *     description: Whether the item requires shipping.
 *     type: boolean
 */
export declare class AdminPostInventoryItemsInventoryItemReq {
    sku?: string;
    origin_country?: string;
    hs_code?: string;
    mid_code?: string;
    material?: string;
    weight?: number;
    height?: number;
    length?: number;
    width?: number;
    title?: string;
    description?: string;
    thumbnail?: string;
    requires_shipping?: boolean;
}
export declare class AdminPostInventoryItemsInventoryItemParams extends FindParams {
}
