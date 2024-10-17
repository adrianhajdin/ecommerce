import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { PublishableApiKey, SalesChannel } from "../models";
import { PublishableApiKeyRepository } from "../repositories/publishable-api-key";
import { PublishableApiKeySalesChannelRepository } from "../repositories/publishable-api-key-sales-channel";
import { FindConfig, Selector } from "../types/common";
import { CreatePublishableApiKeyInput, UpdatePublishableApiKeyInput } from "../types/publishable-api-key";
import EventBusService from "./event-bus";
type InjectedDependencies = {
    manager: EntityManager;
    eventBusService: EventBusService;
    publishableApiKeyRepository: typeof PublishableApiKeyRepository;
    publishableApiKeySalesChannelRepository: typeof PublishableApiKeySalesChannelRepository;
};
/**
 * A service for PublishableApiKey business logic.
 */
declare class PublishableApiKeyService extends TransactionBaseService {
    static Events: {
        CREATED: string;
        REVOKED: string;
    };
    protected readonly eventBusService_: EventBusService;
    protected readonly publishableApiKeyRepository_: typeof PublishableApiKeyRepository;
    protected readonly publishableApiKeySalesChannelRepository_: typeof PublishableApiKeySalesChannelRepository;
    constructor({ eventBusService, publishableApiKeyRepository, publishableApiKeySalesChannelRepository, }: InjectedDependencies);
    /**
     * Create a PublishableApiKey record.
     *
     * @param data - partial data for creating the entity
     * @param context - key creation context object
     */
    create(data: CreatePublishableApiKeyInput, context: {
        loggedInUserId: string;
    }): Promise<PublishableApiKey | never>;
    /**
     * Retrieves a PublishableApiKey by id
     *
     * @param publishableApiKeyId - id of the key
     * @param config - a find config object
     */
    retrieve(publishableApiKeyId: string, config?: FindConfig<PublishableApiKey>): Promise<PublishableApiKey | never>;
    /**
     * Generic retrieve for selecting PublishableApiKEys by different attributes.
     *
     * @param selector - a PublishableApiKey selector object
     * @param config - a find config object
     */
    protected retrieve_(selector: Selector<PublishableApiKey>, config?: FindConfig<PublishableApiKey>): Promise<PublishableApiKey | never>;
    /**
     * Lists publishable API keys based on the provided parameters.
     *
     * @return an array containing publishable API keys and a total count of records that matches the query
     */
    listAndCount(selector: Selector<PublishableApiKey> & {
        q?: string;
    }, config?: FindConfig<PublishableApiKey>): Promise<[PublishableApiKey[], number]>;
    update(publishableApiKeyId: string, data: UpdatePublishableApiKeyInput): Promise<PublishableApiKey>;
    /**
     * Delete Publishable API key.
     *
     * @param publishableApiKeyId - id of the key being deleted
     */
    delete(publishableApiKeyId: string): Promise<void>;
    /**
     * Revoke a PublishableApiKey
     *
     * @param publishableApiKeyId - id of the key
     * @param context - key revocation context object
     */
    revoke(publishableApiKeyId: string, context: {
        loggedInUserId: string;
    }): Promise<void | never>;
    /**
     * Check whether the key is active (i.e. haven't been revoked or deleted yet)
     *
     * @param publishableApiKeyId - id of the key
     */
    isValid(publishableApiKeyId: string): Promise<boolean>;
    /**
     * Associate provided sales channels with the publishable api key.
     *
     * @param publishableApiKeyId
     * @param salesChannelIds
     */
    addSalesChannels(publishableApiKeyId: string, salesChannelIds: string[]): Promise<void | never>;
    /**
     * Remove provided sales channels from the publishable api key scope.
     *
     * @param publishableApiKeyId
     * @param salesChannelIds
     */
    removeSalesChannels(publishableApiKeyId: string, salesChannelIds: string[]): Promise<void | never>;
    /**
     * List SalesChannels associated with the PublishableKey
     *
     * @param publishableApiKeyId - id of the key SalesChannels are listed for
     * @param config - querying params
     */
    listSalesChannels(publishableApiKeyId: string, config?: {
        q?: string;
    }): Promise<SalesChannel[]>;
    /**
     * Get a map of resources ids that are withing the key's scope.
     *
     * @param publishableApiKeyId
     */
    getResourceScopes(publishableApiKeyId: string): Promise<{
        sales_channel_ids: string[];
    }>;
}
export default PublishableApiKeyService;
