import { IInventoryService, InventoryItemDTO, InventoryLevelDTO } from "@medusajs/types";
import { LevelWithAvailability, ResponseInventoryItem } from "../../variants";
export declare const buildLevelsByInventoryItemId: (inventoryLevels: InventoryLevelDTO[], locationIds: string[]) => {};
export declare const getLevelsByInventoryItemId: (items: InventoryItemDTO[], locationIds: string[], inventoryService: IInventoryService) => Promise<Record<string, LevelWithAvailability[]>>;
export declare const joinLevels: (inventoryItems: InventoryItemDTO[], locationIds: string[], inventoryService: IInventoryService) => Promise<ResponseInventoryItem[]>;
