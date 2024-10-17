import { DateComparisonOperator } from "./common";
import { BatchJob } from "../models";
export declare enum BatchJobStatus {
    CREATED = "created",
    PRE_PROCESSED = "pre_processed",
    CONFIRMED = "confirmed",
    PROCESSING = "processing",
    COMPLETED = "completed",
    CANCELED = "canceled",
    FAILED = "failed"
}
export type BatchJobUpdateProps = Partial<Pick<BatchJob, "context" | "result">>;
export type CreateBatchJobInput = {
    type: string;
    context: BatchJob["context"];
    dry_run: boolean;
};
export type BatchJobResultError = {
    message: string;
    code: string | number;
    [key: string]: unknown;
};
export type BatchJobResultStatDescriptor = {
    key: string;
    name: string;
    message: string;
};
export declare class FilterableBatchJobProps {
    id?: string | string[];
    status?: BatchJobStatus[];
    type?: string[];
    created_by?: string | string[];
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
export type BatchJobCreateProps = Pick<BatchJob, "context" | "type" | "created_by" | "dry_run">;
