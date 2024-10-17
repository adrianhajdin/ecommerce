import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { DiscountCondition, DiscountConditionCustomerGroup, DiscountConditionProduct, DiscountConditionProductCollection, DiscountConditionProductTag, DiscountConditionProductType, DiscountConditionType } from "../models";
import { DiscountConditionRepository } from "../repositories/discount-condition";
import { FindConfig } from "../types/common";
import { DiscountConditionInput } from "../types/discount";
import EventBusService from "./event-bus";
type InjectedDependencies = {
    manager: EntityManager;
    discountConditionRepository: typeof DiscountConditionRepository;
    eventBusService: EventBusService;
};
/**
 * Provides layer to manipulate discount conditions.
 * @implements {BaseService}
 */
declare class DiscountConditionService extends TransactionBaseService {
    protected readonly discountConditionRepository_: typeof DiscountConditionRepository;
    protected readonly eventBus_: EventBusService;
    constructor({ discountConditionRepository, eventBusService, }: InjectedDependencies);
    retrieve(conditionId: string, config?: FindConfig<DiscountCondition>): Promise<DiscountCondition | never>;
    protected static resolveConditionType_(data: DiscountConditionInput): {
        type: DiscountConditionType;
        resource_ids: (string | {
            id: string;
        })[];
    } | undefined;
    upsertCondition(data: DiscountConditionInput, overrideExisting?: boolean): Promise<(DiscountConditionProduct | DiscountConditionProductType | DiscountConditionProductCollection | DiscountConditionProductTag | DiscountConditionCustomerGroup)[]>;
    removeResources(data: Omit<DiscountConditionInput, "id"> & {
        id: string;
    }): Promise<void>;
    delete(discountConditionId: string): Promise<DiscountCondition | void>;
}
export default DiscountConditionService;
