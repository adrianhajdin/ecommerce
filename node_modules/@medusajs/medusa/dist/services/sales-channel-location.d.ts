import { IEventBusService, IStockLocationService } from "@medusajs/types";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import SalesChannelService from "./sales-channel";
type InjectedDependencies = {
    stockLocationService: IStockLocationService;
    salesChannelService: SalesChannelService;
    eventBusService: IEventBusService;
    manager: EntityManager;
};
/**
 * Service for managing the stock locations of sales channels
 */
declare class SalesChannelLocationService extends TransactionBaseService {
    protected readonly salesChannelService_: SalesChannelService;
    protected readonly eventBusService_: IEventBusService;
    protected get stockLocationService_(): IStockLocationService;
    constructor({ salesChannelService, eventBusService }: InjectedDependencies);
    /**
     * Removes an association between a sales channel and a stock location.
     * @param salesChannelId - The ID of the sales channel or undefined if all the sales channel will be affected.
     * @param locationId - The ID of the stock location.
     * @returns A promise that resolves when the association has been removed.
     */
    removeLocation(locationId: string, salesChannelId?: string): Promise<void>;
    /**
     * Associates a sales channel with a stock location.
     * @param salesChannelId - The ID of the sales channel.
     * @param locationId - The ID of the stock location.
     * @returns A promise that resolves when the association has been created.
     */
    associateLocation(salesChannelId: string, locationId: string): Promise<void>;
    /**
     * Lists the stock locations associated with a sales channel.
     * @param salesChannelId - The ID of the sales channel.
     * @returns A promise that resolves with an array of location IDs.
     */
    listLocationIds(salesChannelId: string | string[]): Promise<string[]>;
    /**
     * Lists the sales channels associated with a stock location.
     * @param {string} locationId - The ID of the stock location.
     * @returns {Promise<string[]>} A promise that resolves with an array of sales channel IDs.
     */
    listSalesChannelIds(locationId: string): Promise<string[]>;
}
export default SalesChannelLocationService;
