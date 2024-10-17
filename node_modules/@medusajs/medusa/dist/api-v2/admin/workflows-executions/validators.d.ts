import { TransactionHandlerType } from "@medusajs/utils";
import { z } from "zod";
export type AdminGetWorkflowExecutionDetailsParamsType = z.infer<typeof AdminGetWorkflowExecutionDetailsParams>;
export declare const AdminGetWorkflowExecutionDetailsParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetWorkflowExecutionsParamsType = z.infer<typeof AdminGetWorkflowExecutionsParams>;
export declare const AdminGetWorkflowExecutionsParams: z.ZodObject<{
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    transaction_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    workflow_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    order?: string | undefined;
    fields?: string | undefined;
    transaction_id?: string | string[] | undefined;
    workflow_id?: string | string[] | undefined;
}, {
    order?: string | undefined;
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    transaction_id?: string | string[] | undefined;
    workflow_id?: string | string[] | undefined;
}>;
export type AdminCreateWorkflowsRunType = z.infer<typeof AdminCreateWorkflowsRun>;
export declare const AdminCreateWorkflowsRun: z.ZodObject<{
    input: z.ZodOptional<z.ZodAny>;
    transaction_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    input?: any;
    transaction_id?: string | undefined;
}, {
    input?: any;
    transaction_id?: string | undefined;
}>;
export type AdminCreateWorkflowsAsyncResponseType = z.infer<typeof AdminCreateWorkflowsAsyncResponse>;
export declare const AdminCreateWorkflowsAsyncResponse: z.ZodObject<{
    transaction_id: z.ZodString;
    step_id: z.ZodString;
    response: z.ZodOptional<z.ZodAny>;
    compensate_input: z.ZodOptional<z.ZodAny>;
    action: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNativeEnum<typeof TransactionHandlerType>>, TransactionHandlerType | undefined, unknown>>;
}, "strip", z.ZodTypeAny, {
    transaction_id: string;
    step_id: string;
    response?: any;
    compensate_input?: any;
    action?: TransactionHandlerType | undefined;
}, {
    transaction_id: string;
    step_id: string;
    response?: any;
    compensate_input?: any;
    action?: unknown;
}>;
