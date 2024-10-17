import { EventBusTypes, IInventoryService } from "@medusajs/types";
import { TransactionBaseService } from "../interfaces";
import { EntityManager } from "typeorm";
import SalesChannelLocationService from "./sales-channel-location";
type InjectedDependencies = {
    inventoryService: IInventoryService;
    salesChannelLocationService: SalesChannelLocationService;
    eventBusService: EventBusTypes.IEventBusService;
    manager: EntityManager;
};
declare class SalesChannelInventoryService extends TransactionBaseService {
    protected readonly salesChannelLocationService_: SalesChannelLocationService;
    protected readonly eventBusService_: EventBusTypes.IEventBusService;
    protected get inventoryService_(): IInventoryService;
    constructor({ salesChannelLocationService, eventBusService, }: InjectedDependencies);
    /**
     * Retrieves the available quantity of an item across all sales channel locations
     * @param salesChannelId Sales channel id
     * @param inventoryItemId Item id
     * @returns available quantity of item across all sales channel locations
     */
    retrieveAvailableItemQuantity(salesChannelId: string, inventoryItemId: string): Promise<number>;
}
export default SalesChannelInventoryService;
