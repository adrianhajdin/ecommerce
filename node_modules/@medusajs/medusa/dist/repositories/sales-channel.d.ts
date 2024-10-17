import { DeleteResult } from "typeorm";
import { SalesChannel } from "../models";
import { ExtendedFindConfig } from "../types/common";
export declare const SalesChannelRepository: import("typeorm").Repository<SalesChannel> & {
    getFreeTextSearchResults_(q: string, options?: ExtendedFindConfig<SalesChannel> & {
        withCount?: boolean;
    }): Promise<SalesChannel[] | [SalesChannel[], number]>;
    getFreeTextSearchResultsAndCount(q: string, options?: ExtendedFindConfig<SalesChannel>): Promise<[SalesChannel[], number]>;
    getFreeTextSearchResults(q: string, options?: ExtendedFindConfig<SalesChannel>): Promise<SalesChannel[]>;
    removeProducts(salesChannelId: string, productIds: string[]): Promise<DeleteResult>;
    addProducts(salesChannelId: string, productIds: string[], isMedusaV2Enabled?: boolean): Promise<void>;
    listProductIdsBySalesChannelIds(salesChannelIds: string | string[]): Promise<{
        [salesChannelId: string]: string[];
    }>;
};
export default SalesChannelRepository;
