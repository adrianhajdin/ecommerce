import { BatchMethodResponse, MedusaContainer, ShippingOptionRuleDTO } from "@medusajs/types";
export declare const refetchShippingOption: (shippingOptionId: string, scope: MedusaContainer, fields: string[]) => Promise<any>;
export declare const refetchBatchRules: (batchResult: BatchMethodResponse<ShippingOptionRuleDTO>, scope: MedusaContainer, fields: string[]) => Promise<{
    created: ShippingOptionRuleDTO[];
    updated: ShippingOptionRuleDTO[];
    deleted: {
        ids: string[];
        object: string;
        deleted: boolean;
    };
}>;
