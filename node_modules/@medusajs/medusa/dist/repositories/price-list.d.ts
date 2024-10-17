import { PriceList } from "../models";
import { ExtendedFindConfig } from "../types/common";
export declare const PriceListRepository: import("typeorm").Repository<PriceList> & {
    listAndCount(query: ExtendedFindConfig<PriceList>, q?: string): Promise<[PriceList[], number]>;
    listPriceListsVariantIdsMap(priceListIds: string | string[]): Promise<{
        [priceListId: string]: string[];
    }>;
};
export default PriceListRepository;
