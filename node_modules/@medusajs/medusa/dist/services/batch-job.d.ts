import { Request } from "express";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { BatchJob } from "../models";
import { BatchJobRepository } from "../repositories/batch-job";
import { BatchJobCreateProps, BatchJobResultError, BatchJobStatus, BatchJobUpdateProps, CreateBatchJobInput, FilterableBatchJobProps } from "../types/batch-job";
import { FindConfig } from "../types/common";
import EventBusService from "./event-bus";
import { StrategyResolverService } from "./index";
type InjectedDependencies = {
    manager: EntityManager;
    eventBusService: EventBusService;
    batchJobRepository: typeof BatchJobRepository;
    strategyResolverService: StrategyResolverService;
};
declare class BatchJobService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
        UPDATED: string;
        PRE_PROCESSED: string;
        CONFIRMED: string;
        PROCESSING: string;
        COMPLETED: string;
        CANCELED: string;
        FAILED: string;
    };
    protected readonly batchJobRepository_: typeof BatchJobRepository;
    protected readonly eventBus_: EventBusService;
    protected readonly strategyResolver_: StrategyResolverService;
    protected batchJobStatusMapToProps: Map<BatchJobStatus, {
        entityColumnName: string;
        eventType: string;
    }>;
    constructor({ batchJobRepository, eventBusService, strategyResolverService, }: InjectedDependencies);
    retrieve(batchJobId: string, config?: FindConfig<BatchJob>): Promise<BatchJob | never>;
    listAndCount(selector?: FilterableBatchJobProps, config?: FindConfig<BatchJob>): Promise<[BatchJob[], number]>;
    create(data: BatchJobCreateProps): Promise<BatchJob>;
    update(batchJobOrId: BatchJob | string, data: BatchJobUpdateProps): Promise<BatchJob>;
    confirm(batchJobOrId: string | BatchJob): Promise<BatchJob | never>;
    complete(batchJobOrId: string | BatchJob): Promise<BatchJob | never>;
    cancel(batchJobOrId: string | BatchJob): Promise<BatchJob | never>;
    setPreProcessingDone(batchJobOrId: string | BatchJob): Promise<BatchJob | never>;
    setProcessing(batchJobOrId: string | BatchJob): Promise<BatchJob | never>;
    setFailed(batchJobOrId: string | BatchJob, error?: BatchJobResultError | string): Promise<BatchJob | never>;
    prepareBatchJobForProcessing(data: CreateBatchJobInput, req: Request): Promise<CreateBatchJobInput | never>;
    protected updateStatus(batchJobOrId: BatchJob | string, status: BatchJobStatus): Promise<BatchJob | never>;
}
export default BatchJobService;
