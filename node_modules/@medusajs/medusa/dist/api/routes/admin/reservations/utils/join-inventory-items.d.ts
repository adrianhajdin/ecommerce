import { EntityManager } from "typeorm";
import { ExtendedReservationItem } from "..";
import { IInventoryService } from "@medusajs/types";
export declare const joinInventoryItems: (reservations: ExtendedReservationItem[], dependencies: {
    inventoryService: IInventoryService;
    manager: EntityManager;
}) => Promise<ExtendedReservationItem[]>;
