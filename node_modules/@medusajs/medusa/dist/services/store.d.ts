import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { Currency, Store } from "../models";
import { CurrencyRepository } from "../repositories/currency";
import { StoreRepository } from "../repositories/store";
import { FindConfig } from "../types/common";
import { UpdateStoreInput } from "../types/store";
import EventBusService from "./event-bus";
type InjectedDependencies = {
    manager: EntityManager;
    storeRepository: typeof StoreRepository;
    currencyRepository: typeof CurrencyRepository;
    eventBusService: EventBusService;
};
/**
 * Provides layer to manipulate store settings.
 */
declare class StoreService extends TransactionBaseService {
    protected readonly storeRepository_: typeof StoreRepository;
    protected readonly currencyRepository_: typeof CurrencyRepository;
    protected readonly eventBus_: EventBusService;
    constructor({ storeRepository, currencyRepository, eventBusService, }: InjectedDependencies);
    /**
     * Creates a store if it doesn't already exist.
     * @return The store.
     */
    create(): Promise<Store>;
    /**
     * Retrieve the store settings. There is always a maximum of one store.
     * @param config The config object from which the query will be built
     * @return the store
     */
    retrieve(config?: FindConfig<Store>): Promise<Store>;
    protected getDefaultCurrency_(code: string): Partial<Currency>;
    /**
     * Updates a store
     * @param data - an object with the update values.
     * @return resolves to the update result.
     */
    update(data: UpdateStoreInput): Promise<Store>;
    /**
     * Add a currency to the store
     * @param code - 3 character ISO currency code
     * @return result after update
     */
    addCurrency(code: string): Promise<Store | never>;
    /**
     * Removes a currency from the store
     * @param code - 3 character ISO currency code
     * @return result after update
     */
    removeCurrency(code: string): Promise<any>;
}
export default StoreService;
