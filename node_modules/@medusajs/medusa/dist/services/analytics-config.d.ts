import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { AnalyticsConfig } from "../models";
import { AnalyticsConfigRepository as AnalyticsRepository } from "../repositories/analytics-config";
import { CreateAnalyticsConfig, UpdateAnalyticsConfig } from "../types/analytics-config";
import UserService from "./user";
type InjectedDependencies = {
    analyticsConfigRepository: typeof AnalyticsRepository;
    manager: EntityManager;
};
declare class AnalyticsConfigService extends TransactionBaseService {
    protected readonly analyticsConfigRepository_: typeof AnalyticsRepository;
    protected readonly userService_: UserService;
    constructor({ analyticsConfigRepository }: InjectedDependencies);
    retrieve(userId: string): Promise<AnalyticsConfig>;
    /**
     * Creates an analytics config.
     */
    create(userId: string, data: CreateAnalyticsConfig): Promise<AnalyticsConfig>;
    /**
     * Updates an analytics config. If the config does not exist, it will be created instead.
     */
    update(userId: string, update: UpdateAnalyticsConfig): Promise<AnalyticsConfig>;
    /**
     * Deletes an analytics config.
     */
    delete(userId: string): Promise<void>;
}
export default AnalyticsConfigService;
