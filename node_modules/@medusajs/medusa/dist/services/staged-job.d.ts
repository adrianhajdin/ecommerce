import { EntityManager } from "typeorm";
import { EventBusTypes } from "@medusajs/types";
import { FindConfig } from "../types/common";
import { StagedJob } from "../models";
import { StagedJobRepository } from "../repositories/staged-job";
import { TransactionBaseService } from "../interfaces";
type StagedJobServiceProps = {
    manager: EntityManager;
    stagedJobRepository: typeof StagedJobRepository;
};
/**
 * Provides layer to manipulate users.
 */
declare class StagedJobService extends TransactionBaseService {
    protected stagedJobRepository_: typeof StagedJobRepository;
    constructor({ stagedJobRepository }: StagedJobServiceProps);
    list(config: FindConfig<StagedJob>): Promise<StagedJob[]>;
    delete(stagedJobIds: string | string[]): Promise<void>;
    create(data: EventBusTypes.EmitData[] | EventBusTypes.EmitData): Promise<StagedJob[]>;
}
export default StagedJobService;
