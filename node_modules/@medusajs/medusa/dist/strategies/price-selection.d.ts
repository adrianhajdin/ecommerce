import { AbstractPriceSelectionStrategy, PriceSelectionContext, PriceSelectionResult } from "../interfaces";
import { ICacheService } from "@medusajs/types";
import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { MoneyAmountRepository } from "../repositories/money-amount";
declare class PriceSelectionStrategy extends AbstractPriceSelectionStrategy {
    protected manager_: EntityManager;
    protected readonly featureFlagRouter_: FlagRouter;
    protected moneyAmountRepository_: typeof MoneyAmountRepository;
    protected cacheService_: ICacheService;
    constructor({ manager, featureFlagRouter, moneyAmountRepository, cacheService, }: {
        manager: any;
        featureFlagRouter: any;
        moneyAmountRepository: any;
        cacheService: any;
    });
    calculateVariantPrice(data: {
        variantId: string;
        quantity?: number;
    }[], context: PriceSelectionContext): Promise<Map<string, PriceSelectionResult>>;
    private calculateVariantPrice_new;
    private calculateVariantPrice_old;
    onVariantsPricesUpdate(variantIds: string[]): Promise<void>;
    private getCacheKey;
}
export default PriceSelectionStrategy;
