import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { CustomShippingOption } from "../models";
import { CustomShippingOptionRepository } from "../repositories/custom-shipping-option";
import { FindConfig, Selector } from "../types/common";
import { CreateCustomShippingOptionInput } from "../types/shipping-options";
type InjectedDependencies = {
    manager: EntityManager;
    customShippingOptionRepository: typeof CustomShippingOptionRepository;
};
declare class CustomShippingOptionService extends TransactionBaseService {
    protected customShippingOptionRepository_: typeof CustomShippingOptionRepository;
    constructor({ customShippingOptionRepository }: InjectedDependencies);
    /**
     * Retrieves a specific shipping option.
     * @param id - the id of the custom shipping option to retrieve.
     * @param config - any options needed to query for the result.
     * @return the requested custom shipping option.
     */
    retrieve(id: string, config?: FindConfig<CustomShippingOption>): Promise<CustomShippingOption>;
    /** Fetches all custom shipping options based on the given selector
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return custom shipping options matching the query
     */
    list(selector: Selector<CustomShippingOption>, config?: FindConfig<CustomShippingOption>): Promise<CustomShippingOption[]>;
    /**
     * Creates a custom shipping option
     * @param data - the custom shipping option to create
     * @return resolves to the creation result
     */
    create<T = CreateCustomShippingOptionInput | CreateCustomShippingOptionInput[], TResult = T extends CreateCustomShippingOptionInput[] ? CustomShippingOption[] : CustomShippingOption>(data: T): Promise<TResult>;
}
export default CustomShippingOptionService;
