import { TransactionHandlerType } from "@medusajs/utils";
import { FindParams } from "../../../../types/common";
export declare class AdminGetWorkflowExecutionDetailsParams extends FindParams {
}
declare const AdminGetWorkflowExecutionsParams_base: import("../../../..").ClassConstructor<FindParams & import("../../../../types/common").FindPaginationParams>;
export declare class AdminGetWorkflowExecutionsParams extends AdminGetWorkflowExecutionsParams_base {
    /**
     * transaction id(s) to filter workflow executions by transaction_id.
     */
    transaction_id?: string | string[];
    /**
     * workflow id(s) to filter workflow executions by workflow_id
     */
    workflow_id?: string | string[];
}
export declare class AdminPostWorkflowsRunReq {
    input?: unknown;
    transaction_id?: string;
}
export declare class AdminPostWorkflowsAsyncResponseReq {
    transaction_id: string;
    step_id: string;
    response?: unknown;
    compensate_input?: unknown;
    action?: TransactionHandlerType;
}
export {};
