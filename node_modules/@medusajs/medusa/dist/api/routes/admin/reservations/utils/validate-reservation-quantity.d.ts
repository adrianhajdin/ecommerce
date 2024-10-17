import { IInventoryService } from "@medusajs/types";
import { LineItemService } from "../../../../../services";
export declare const validateUpdateReservationQuantity: (lineItemId: string, quantityUpdate: number, context: {
    lineItemService: LineItemService;
    inventoryService: IInventoryService;
}) => Promise<void>;
