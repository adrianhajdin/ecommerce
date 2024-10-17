import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { GiftCard, Region } from "../models";
import { GiftCardRepository } from "../repositories/gift-card";
import { GiftCardTransactionRepository } from "../repositories/gift-card-transaction";
import { FindConfig, QuerySelector, Selector } from "../types/common";
import { CreateGiftCardInput, CreateGiftCardTransactionInput, UpdateGiftCardInput } from "../types/gift-card";
import EventBusService from "./event-bus";
import RegionService from "./region";
type InjectedDependencies = {
    manager: EntityManager;
    giftCardRepository: typeof GiftCardRepository;
    giftCardTransactionRepository: typeof GiftCardTransactionRepository;
    regionService: RegionService;
    eventBusService: EventBusService;
};
/**
 * Provides layer to manipulate gift cards.
 */
declare class GiftCardService extends TransactionBaseService {
    protected readonly giftCardRepository_: typeof GiftCardRepository;
    protected readonly giftCardTransactionRepo_: typeof GiftCardTransactionRepository;
    protected readonly regionService_: RegionService;
    protected readonly eventBus_: EventBusService;
    static Events: {
        CREATED: string;
    };
    constructor({ giftCardRepository, giftCardTransactionRepository, regionService, eventBusService, }: InjectedDependencies);
    /**
     * Generates a 16 character gift card code
     * @return the generated gift card code
     */
    static generateCode(): string;
    /**
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    listAndCount(selector?: QuerySelector<GiftCard>, config?: FindConfig<GiftCard>): Promise<[GiftCard[], number]>;
    /**
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    list(selector?: QuerySelector<GiftCard>, config?: FindConfig<GiftCard>): Promise<GiftCard[]>;
    createTransaction(data: CreateGiftCardTransactionInput): Promise<string>;
    /**
     * Creates a gift card with provided data given that the data is validated.
     * @param giftCard - the gift card data to create
     * @return the result of the create operation
     */
    create(giftCard: CreateGiftCardInput): Promise<GiftCard>;
    /**
     * The tax_rate of the giftcard can depend on whether regions tax gift cards, an input
     * provided by the user or the tax rate. Based on these conditions, tax_rate changes.
     * @return the tax rate for the gift card
     */
    protected static resolveTaxRate(giftCardTaxRate: number | null, region: Region): number | null;
    protected retrieve_(selector: Selector<GiftCard>, config?: FindConfig<GiftCard>): Promise<GiftCard>;
    /**
     * Gets a gift card by id.
     * @param giftCardId - id of gift card to retrieve
     * @param config - optional values to include with gift card query
     * @return the gift card
     */
    retrieve(giftCardId: string, config?: FindConfig<GiftCard>): Promise<GiftCard>;
    retrieveByCode(code: string, config?: FindConfig<GiftCard>): Promise<GiftCard>;
    /**
     * Updates a giftCard.
     * @param giftCardId - giftCard id of giftCard to update
     * @param update - the data to update the giftCard with
     * @return the result of the update operation
     */
    update(giftCardId: string, update: UpdateGiftCardInput): Promise<GiftCard>;
    /**
     * Deletes a gift card idempotently
     * @param giftCardId - id of gift card to delete
     * @return the result of the delete operation
     */
    delete(giftCardId: string): Promise<GiftCard | void>;
}
export default GiftCardService;
