import { AbstractBatchJobStrategy, TransactionBaseService } from "../interfaces";
import { EntityManager } from "typeorm";
type InjectedDependencies = {
    manager: EntityManager;
    [key: string]: unknown;
};
export default class StrategyResolver extends TransactionBaseService {
    protected readonly container: InjectedDependencies;
    constructor(container: InjectedDependencies);
    resolveBatchJobByType(type: string): AbstractBatchJobStrategy;
}
export {};
