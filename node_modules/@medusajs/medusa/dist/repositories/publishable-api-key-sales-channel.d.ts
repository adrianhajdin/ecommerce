import { PublishableApiKeySalesChannel, SalesChannel } from "../models";
export declare const PublishableApiKeySalesChannelRepository: import("typeorm").Repository<PublishableApiKeySalesChannel> & {
    /**
     * Query a list of sales channels that are assigned to the publishable key scope
     *
     * @param publishableApiKeyId - id of the key to retrieve channels for
     * @param config - querying params
     */
    findSalesChannels(publishableApiKeyId: string, config?: {
        q?: string;
    }): Promise<SalesChannel[]>;
    /**
     * Assign (multiple) sales channels to the Publishable Key scope
     *
     * @param publishableApiKeyId - publishable key id
     * @param salesChannelIds - an array of SC ids
     */
    addSalesChannels(publishableApiKeyId: string, salesChannelIds: string[]): Promise<void>;
    /**
     * Remove multiple sales channels from the PK scope
     *
     * @param publishableApiKeyId -publishable key id
     * @param salesChannelIds - an array of SC ids
     */
    removeSalesChannels(publishableApiKeyId: string, salesChannelIds: string[]): Promise<void>;
};
export default PublishableApiKeySalesChannelRepository;
