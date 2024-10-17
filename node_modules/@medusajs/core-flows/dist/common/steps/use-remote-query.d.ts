interface StepInput {
    entry_point: string;
    fields: string[];
    variables?: Record<string, any>;
    list?: boolean;
}
export declare const useRemoteQueryStepId = "use-remote-query";
export declare const useRemoteQueryStep: import("@medusajs/workflows-sdk").StepFunction<StepInput, any>;
export {};
