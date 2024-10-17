import { GiftCard } from "../models";
import { ExtendedFindConfig } from "../types/common";
export declare const GiftCardRepository: import("typeorm").Repository<GiftCard> & {
    listGiftCardsAndCount(query: ExtendedFindConfig<GiftCard>, q?: string): Promise<[GiftCard[], number]>;
};
export default GiftCardRepository;
