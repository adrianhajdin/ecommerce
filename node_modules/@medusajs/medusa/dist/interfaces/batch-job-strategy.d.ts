import { BatchJob } from "../models";
import { BatchJobService } from "../services";
import { CreateBatchJobInput } from "../types/batch-job";
import { TransactionBaseService } from "./transaction-base-service";
export interface IBatchJobStrategy extends TransactionBaseService {
    /**
     * Method for preparing a batch job for processing
     */
    prepareBatchJobForProcessing(batchJobEntity: CreateBatchJobInput, req: Express.Request): Promise<CreateBatchJobInput>;
    /**
     * Method for pre-processing a batch job
     */
    preProcessBatchJob(batchJobId: string): Promise<void>;
    /**
     *  Method does the actual processing of the job. Should report back on the progress of the operation.
     */
    processJob(batchJobId: string): Promise<void>;
    /**
     * Builds and returns a template file that can be downloaded and filled in
     */
    buildTemplate(): Promise<string>;
}
export declare abstract class AbstractBatchJobStrategy extends TransactionBaseService implements IBatchJobStrategy {
    static _isBatchJobStrategy: boolean;
    static identifier: string;
    static batchType: string;
    protected abstract batchJobService_: BatchJobService;
    static isBatchJobStrategy(object: any): object is IBatchJobStrategy;
    prepareBatchJobForProcessing(batchJob: CreateBatchJobInput, req: Express.Request): Promise<CreateBatchJobInput>;
    preProcessBatchJob(batchJobId: string): Promise<void>;
    abstract processJob(batchJobId: string): Promise<void>;
    abstract buildTemplate(): Promise<string>;
    protected shouldRetryOnProcessingError(batchJob: BatchJob, err: unknown): Promise<boolean>;
    protected handleProcessingError<T>(batchJobId: string, err: unknown, result: T): Promise<void>;
}
