import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { Currency } from "../models";
import { CurrencyRepository } from "../repositories/currency";
import { FindConfig, Selector } from "../types/common";
import { UpdateCurrencyInput } from "../types/currency";
import EventBusService from "./event-bus";
type InjectedDependencies = {
    manager: EntityManager;
    currencyRepository: typeof CurrencyRepository;
    eventBusService: EventBusService;
    featureFlagRouter: FlagRouter;
};
export default class CurrencyService extends TransactionBaseService {
    static readonly Events: {
        UPDATED: string;
    };
    protected readonly currencyRepository_: typeof CurrencyRepository;
    protected readonly eventBusService_: EventBusService;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ currencyRepository, eventBusService, featureFlagRouter, }: InjectedDependencies);
    /**
     * Return the currency
     * @param code - The code of the currency that must be retrieve
     * @return The currency
     */
    retrieveByCode(code: string): Promise<Currency | never>;
    /**
     * Lists currencies based on the provided parameters and includes the count of
     * currencies that match the query.
     * @param selector - an object that defines rules to filter currencies
     *   by
     * @param config - object that defines the scope for what should be
     *   returned
     * @return an array containing the currencies as
     *   the first element and the total count of products that matches the query
     *   as the second element.
     */
    listAndCount(selector: Selector<Currency> & {
        q?: string;
    }, config?: FindConfig<Currency>): Promise<[Currency[], number]>;
    /**
     * Update a currency
     * @param code - The code of the currency to update
     * @param data - The data that must be updated on the currency
     * @return The updated currency
     */
    update(code: string, data: UpdateCurrencyInput): Promise<Currency | undefined | never>;
}
export {};
