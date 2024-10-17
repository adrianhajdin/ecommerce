import { BatchJob } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminBatchJobRes
 * type: object
 * description: "The batch job's details."
 * required:
 *   - batch_job
 * properties:
 *   batch_job:
 *     description: Batch job details.
 *     $ref: "#/components/schemas/BatchJob"
 */
export type AdminBatchJobRes = {
    batch_job: BatchJob;
};
/**
 * @schema AdminBatchJobListRes
 * type: object
 * required:
 *   - batch_jobs
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   batch_jobs:
 *      type: array
 *      description: An array of batch job details.
 *      items:
 *        $ref: "#/components/schemas/BatchJob"
 *   count:
 *      type: integer
 *      description: The total number of items available
 *   offset:
 *      type: integer
 *      description: The number of batch jobs skipped when retrieving the batch jobs.
 *   limit:
 *      type: integer
 *      description: The number of items per page
 */
export type AdminBatchJobListRes = PaginatedResponse & {
    batch_jobs: BatchJob[];
};
export declare const defaultAdminBatchFields: string[];
export * from "./cancel-batch-job";
export * from "./confirm-batch-job";
export * from "./create-batch-job";
export * from "./get-batch-job";
export * from "./list-batch-jobs";
