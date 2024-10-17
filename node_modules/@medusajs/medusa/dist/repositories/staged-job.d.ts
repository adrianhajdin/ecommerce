import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { StagedJob } from "../models";
export declare const StagedJobRepository: import("typeorm").Repository<StagedJob> & {
    insertBulk(jobToCreates: QueryDeepPartialEntity<StagedJob>[]): Promise<StagedJob[]>;
};
export default StagedJobRepository;
