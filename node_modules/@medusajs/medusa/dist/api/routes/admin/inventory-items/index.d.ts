import "reflect-metadata";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { InventoryItemDTO, InventoryLevelDTO } from "@medusajs/types";
import { ProductVariant } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminInventoryItemFields: (keyof InventoryItemDTO)[];
export declare const defaultAdminLocationLevelFields: (keyof InventoryLevelDTO)[];
export declare const defaultAdminInventoryItemRelations: never[];
/**
 * @schema AdminInventoryItemsRes
 * type: object
 * description: The inventory item's details.
 * required:
 *   - inventory_item
 * properties:
 *   inventory_item:
 *     description: Inventory Item details
 *     $ref: "#/components/schemas/InventoryItemDTO"
 */
export type AdminInventoryItemsRes = {
    inventory_item: InventoryItemDTO;
};
/**
 * @schema AdminInventoryItemsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Inventory Item.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     format: inventory_item
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Inventory Item was deleted.
 *     default: true
 */
export type AdminInventoryItemsDeleteRes = DeleteResponse;
/**
 * @schema AdminInventoryItemsListRes
 * type: object
 * required:
 *   - inventory_items
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   inventory_items:
 *     type: array
 *     description: an array of Inventory Item details
 *     items:
 *       $ref: "#/components/schemas/InventoryItemDTO"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of inventory items skipped when retrieving the inventory items.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminInventoryItemsListRes = PaginatedResponse & {
    inventory_items: InventoryItemDTO[];
};
/**
 * @schema DecoratedInventoryItemDTO
 * type: object
 * allOf:
 *   - $ref: "#/components/schemas/InventoryItemDTO"
 *   - type: object
 *     required:
 *       - stocked_quantity
 *       - reserved_quantity
 *     properties:
 *       location_levels:
 *         type: array
 *         description: An array of location level details
 *         items:
 *           $ref: "#/components/schemas/InventoryLevelDTO"
 *       variants:
 *         type: array
 *         description: An array of product variant details
 *         items:
 *           $ref: "#/components/schemas/ProductVariant"
 *       stocked_quantity:
 *         type: number
 *         description: The total quantity of the item in stock across levels
 *       reserved_quantity:
 *         type: number
 *         description: The total quantity of the item available across levels
 */
export type DecoratedInventoryItemDTO = InventoryItemDTO & {
    location_levels?: InventoryLevelDTO[];
    variants?: ProductVariant[];
    stocked_quantity: number;
    reserved_quantity: number;
};
/**
 * @schema AdminInventoryItemsListWithVariantsAndLocationLevelsRes
 * type: object
 * required:
 *   - inventory_items
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   inventory_items:
 *     type: array
 *     description: an array of Inventory Item details
 *     items:
 *       $ref: "#/components/schemas/DecoratedInventoryItemDTO"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of inventory items skipped when retrieving the inventory items.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminInventoryItemsListWithVariantsAndLocationLevelsRes = PaginatedResponse & {
    inventory_items: DecoratedInventoryItemDTO[];
};
/**
 * @schema AdminInventoryItemsLocationLevelsRes
 * type: object
 * description: "Details of inventory items and their associated location levels."
 * required:
 *   - inventory_item
 * properties:
 *   inventory_item:
 *     type: object
 *     description: "An inventory item's ID and associated location levels."
 *     required:
 *       - id
 *       - location_levels
 *     properties:
 *       id:
 *         description: The id of the location
 *         type: string
 *       location_levels:
 *         description: List of stock levels at a given location
 *         type: array
 *         items:
 *           $ref: "#/components/schemas/InventoryLevelDTO"
 */
export type AdminInventoryItemsLocationLevelsRes = {
    inventory_item: {
        id: any;
        location_levels: InventoryLevelDTO[];
    };
};
export * from "./create-inventory-item";
export * from "./create-location-level";
export * from "./get-inventory-item";
export * from "./list-inventory-items";
export * from "./list-location-levels";
export * from "./update-inventory-item";
export * from "./update-location-level";
