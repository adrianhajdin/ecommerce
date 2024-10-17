import { EntityManager } from "typeorm";
import { FlagRouter } from "@medusajs/utils";
import { FindConfig, QuerySelector, Selector } from "../types/common";
import { CreateSalesChannelInput, UpdateSalesChannelInput } from "../types/sales-channels";
import { TransactionBaseService } from "../interfaces";
import { SalesChannel } from "../models";
import { SalesChannelRepository } from "../repositories/sales-channel";
import EventBusService from "./event-bus";
import StoreService from "./store";
type InjectedDependencies = {
    salesChannelRepository: typeof SalesChannelRepository;
    eventBusService: EventBusService;
    manager: EntityManager;
    storeService: StoreService;
    featureFlagRouter: FlagRouter;
};
declare class SalesChannelService extends TransactionBaseService {
    static Events: {
        UPDATED: string;
        CREATED: string;
        DELETED: string;
    };
    protected readonly salesChannelRepository_: typeof SalesChannelRepository;
    protected readonly eventBusService_: EventBusService;
    protected readonly storeService_: StoreService;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ salesChannelRepository, eventBusService, storeService, featureFlagRouter, }: InjectedDependencies);
    /**
     * A generic retrieve used to find a sales channel by different attributes.
     *
     * @param selector - SC selector
     * @param config - find config
     * @returns a single SC matching the query or throws
     */
    protected retrieve_(selector: Selector<SalesChannel>, config?: FindConfig<SalesChannel>): Promise<SalesChannel>;
    /**
     * Retrieve a SalesChannel by id
     *
     * @param salesChannelId - id of the channel to retrieve
     * @param config - SC config
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable the corresponding feature flag in your medusa backend project.
     * @returns a sales channel
     */
    retrieve(salesChannelId: string, config?: FindConfig<SalesChannel>): Promise<SalesChannel | never>;
    /**
     * Find a sales channel by name.
     *
     * @param name of the sales channel
     * @param config - find config
     * @return a sales channel with matching name
     */
    retrieveByName(name: string, config?: FindConfig<SalesChannel>): Promise<SalesChannel | unknown>;
    /**
     * Lists sales channels based on the provided parameters and include the count of
     * sales channels that match the query.
     *
     * @return an array containing the sales channels as
     *   the first element and the total count of sales channels that matches the query
     *   as the second element.
     */
    listAndCount(selector: QuerySelector<SalesChannel>, config?: FindConfig<SalesChannel>): Promise<[SalesChannel[], number]>;
    /**
     * Lists sales channels based on the provided parameters.
     *
     * @return an array containing the sales channels
     */
    list(selector: QuerySelector<SalesChannel>, config?: FindConfig<SalesChannel>): Promise<SalesChannel[]>;
    /**
     * Creates a SalesChannel
     *
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable the corresponding feature flag in your medusa backend project.
     * @returns the created channel
     */
    create(data: CreateSalesChannelInput): Promise<SalesChannel | never>;
    update(salesChannelId: string, data: UpdateSalesChannelInput): Promise<SalesChannel | never>;
    /**
     * Deletes a sales channel from
     * @experimental This feature is under development and may change in the future.
     * To use this feature please enable the corresponding feature flag in your medusa backend project.
     * @param salesChannelId - the id of the sales channel to delete
     */
    delete(salesChannelId: string): Promise<void>;
    /**
     * Creates a default sales channel, if this does not already exist.
     * @return the sales channel
     */
    createDefault(): Promise<SalesChannel>;
    /**
     * Retrieves the default sales channel.
     * @return the sales channel
     */
    retrieveDefault(): Promise<SalesChannel>;
    /**
     * List all product ids that belongs to the sales channels ids
     *
     * @param salesChannelIds
     */
    listProductIdsBySalesChannelIds(salesChannelIds: string | string[]): Promise<{
        [salesChannelId: string]: string[];
    }>;
    /**
     * Remove a batch of product from a sales channel
     * @param salesChannelId - The id of the sales channel on which to remove the products
     * @param productIds - The products ids to remove from the sales channel
     * @return the sales channel on which the products have been removed
     */
    removeProducts(salesChannelId: string, productIds: string[]): Promise<SalesChannel | never>;
    /**
     * Add a batch of product to a sales channel
     * @param salesChannelId - The id of the sales channel on which to add the products
     * @param productIds - The products ids to attach to the sales channel
     * @return the sales channel on which the products have been added
     */
    addProducts(salesChannelId: string, productIds: string[]): Promise<SalesChannel | never>;
}
export default SalesChannelService;
