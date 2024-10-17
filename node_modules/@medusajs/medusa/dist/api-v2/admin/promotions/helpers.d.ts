import { BatchMethodResponse } from "@medusajs/types";
import { PromotionRuleDTO, MedusaContainer } from "@medusajs/types";
export declare const refetchPromotion: (promotionId: string, scope: MedusaContainer, fields: string[]) => Promise<any>;
export declare const refetchBatchRules: (batchResult: BatchMethodResponse<PromotionRuleDTO>, scope: MedusaContainer, fields: string[]) => Promise<{
    created: PromotionRuleDTO[];
    updated: PromotionRuleDTO[];
    deleted: {
        ids: string[];
        object: string;
        deleted: boolean;
    };
}>;
