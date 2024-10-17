import { ApplicationMethodAllocation, ApplicationMethodTargetType, ApplicationMethodType, CampaignBudgetType, PromotionRuleOperator, PromotionType } from "@medusajs/utils";
import { z } from "zod";
export type AdminGetPromotionParamsType = z.infer<typeof AdminGetPromotionParams>;
export declare const AdminGetPromotionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetPromotionsParamsType = z.infer<typeof AdminGetPromotionsParams>;
export declare const AdminGetPromotionsParams: any;
export type AdminGetPromotionRuleParamsType = z.infer<typeof AdminGetPromotionRuleParams>;
export declare const AdminGetPromotionRuleParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetPromotionRuleTypeParamsType = z.infer<typeof AdminGetPromotionRuleTypeParams>;
export declare const AdminGetPromotionRuleTypeParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetPromotionsRuleValueParamsType = z.infer<typeof AdminGetPromotionsRuleValueParams>;
export declare const AdminGetPromotionsRuleValueParams: z.ZodObject<{
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    q: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    order?: string | undefined;
    fields?: string | undefined;
    q?: string | undefined;
}, {
    order?: string | undefined;
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    q?: string | undefined;
}>;
export type AdminCreatePromotionRuleType = z.infer<typeof AdminCreatePromotionRule>;
export declare const AdminCreatePromotionRule: z.ZodObject<{
    operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
    description: z.ZodOptional<z.ZodString>;
    attribute: z.ZodString;
    values: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    values: string[];
    operator: PromotionRuleOperator;
    attribute: string;
    description?: string | undefined;
}, {
    values: string[];
    operator: PromotionRuleOperator;
    attribute: string;
    description?: string | undefined;
}>;
export type AdminUpdatePromotionRuleType = z.infer<typeof AdminUpdatePromotionRule>;
export declare const AdminUpdatePromotionRule: z.ZodObject<{
    id: z.ZodString;
    operator: z.ZodOptional<z.ZodNativeEnum<typeof PromotionRuleOperator>>;
    description: z.ZodOptional<z.ZodString>;
    attribute: z.ZodOptional<z.ZodString>;
    values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    id: string;
    operator?: PromotionRuleOperator | undefined;
    description?: string | undefined;
    attribute?: string | undefined;
    values?: string[] | undefined;
}, {
    id: string;
    operator?: PromotionRuleOperator | undefined;
    description?: string | undefined;
    attribute?: string | undefined;
    values?: string[] | undefined;
}>;
export type AdminCreateApplicationMethodType = z.infer<typeof AdminCreateApplicationMethod>;
export declare const AdminCreateApplicationMethod: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    value: z.ZodNumber;
    max_quantity: z.ZodOptional<z.ZodNumber>;
    type: z.ZodNativeEnum<typeof ApplicationMethodType>;
    target_type: z.ZodNativeEnum<typeof ApplicationMethodTargetType>;
    allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
    target_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodString>;
        attribute: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }>, "many">>;
    buy_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodString>;
        attribute: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }>, "many">>;
    apply_to_quantity: z.ZodOptional<z.ZodNumber>;
    buy_rules_min_quantity: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    value: number;
    type: ApplicationMethodType;
    target_type: ApplicationMethodTargetType;
    description?: string | undefined;
    max_quantity?: number | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    target_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    buy_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    apply_to_quantity?: number | undefined;
    buy_rules_min_quantity?: number | undefined;
}, {
    value: number;
    type: ApplicationMethodType;
    target_type: ApplicationMethodTargetType;
    description?: string | undefined;
    max_quantity?: number | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    target_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    buy_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    apply_to_quantity?: number | undefined;
    buy_rules_min_quantity?: number | undefined;
}>;
export type AdminUpdateApplicationMethodType = z.infer<typeof AdminUpdateApplicationMethod>;
export declare const AdminUpdateApplicationMethod: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    max_quantity: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodType>>;
    target_type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodTargetType>>;
    allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
    target_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodString>;
        attribute: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }>, "many">>;
    buy_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodString>;
        attribute: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }>, "many">>;
    apply_to_quantity: z.ZodOptional<z.ZodNumber>;
    buy_rules_min_quantity: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    description?: string | undefined;
    value?: string | undefined;
    max_quantity?: number | undefined;
    type?: ApplicationMethodType | undefined;
    target_type?: ApplicationMethodTargetType | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    target_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    buy_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    apply_to_quantity?: number | undefined;
    buy_rules_min_quantity?: number | undefined;
}, {
    description?: string | undefined;
    value?: string | undefined;
    max_quantity?: number | undefined;
    type?: ApplicationMethodType | undefined;
    target_type?: ApplicationMethodTargetType | undefined;
    allocation?: ApplicationMethodAllocation | undefined;
    target_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    buy_rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
    apply_to_quantity?: number | undefined;
    buy_rules_min_quantity?: number | undefined;
}>;
export type AdminCreateCampaignType = z.infer<typeof AdminCreateCampaign>;
export declare const AdminCreateCampaign: z.ZodObject<{
    name: z.ZodString;
    campaign_identifier: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodString>;
    budget: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof CampaignBudgetType>;
        limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: CampaignBudgetType;
        limit: number;
    }, {
        type: CampaignBudgetType;
        limit: number;
    }>>;
    starts_at: z.ZodOptional<z.ZodDate>;
    ends_at: z.ZodOptional<z.ZodDate>;
    promotions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    campaign_identifier: string;
    description?: string | undefined;
    currency?: string | undefined;
    budget?: {
        type: CampaignBudgetType;
        limit: number;
    } | undefined;
    starts_at?: Date | undefined;
    ends_at?: Date | undefined;
    promotions?: {
        id: string;
    }[] | undefined;
}, {
    name: string;
    campaign_identifier: string;
    description?: string | undefined;
    currency?: string | undefined;
    budget?: {
        type: CampaignBudgetType;
        limit: number;
    } | undefined;
    starts_at?: Date | undefined;
    ends_at?: Date | undefined;
    promotions?: {
        id: string;
    }[] | undefined;
}>;
export type AdminCreatePromotionType = z.infer<typeof AdminCreatePromotion>;
export declare const AdminCreatePromotion: z.ZodEffects<z.ZodObject<{
    code: z.ZodString;
    is_automatic: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodNativeEnum<typeof PromotionType>;
    campaign_id: z.ZodOptional<z.ZodString>;
    campaign: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        campaign_identifier: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        currency: z.ZodOptional<z.ZodString>;
        budget: z.ZodOptional<z.ZodObject<{
            type: z.ZodNativeEnum<typeof CampaignBudgetType>;
            limit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: CampaignBudgetType;
            limit: number;
        }, {
            type: CampaignBudgetType;
            limit: number;
        }>>;
        starts_at: z.ZodOptional<z.ZodDate>;
        ends_at: z.ZodOptional<z.ZodDate>;
        promotions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    }, {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    }>>;
    application_method: z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        value: z.ZodNumber;
        max_quantity: z.ZodOptional<z.ZodNumber>;
        type: z.ZodNativeEnum<typeof ApplicationMethodType>;
        target_type: z.ZodNativeEnum<typeof ApplicationMethodTargetType>;
        allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
        target_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
            description: z.ZodOptional<z.ZodString>;
            attribute: z.ZodString;
            values: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }>, "many">>;
        buy_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
            description: z.ZodOptional<z.ZodString>;
            attribute: z.ZodString;
            values: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }>, "many">>;
        apply_to_quantity: z.ZodOptional<z.ZodNumber>;
        buy_rules_min_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        value: number;
        type: ApplicationMethodType;
        target_type: ApplicationMethodTargetType;
        description?: string | undefined;
        max_quantity?: number | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    }, {
        value: number;
        type: ApplicationMethodType;
        target_type: ApplicationMethodTargetType;
        description?: string | undefined;
        max_quantity?: number | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    }>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodString>;
        attribute: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    code: string;
    type: PromotionType;
    application_method: {
        value: number;
        type: ApplicationMethodType;
        target_type: ApplicationMethodTargetType;
        description?: string | undefined;
        max_quantity?: number | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    };
    is_automatic?: boolean | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}, {
    code: string;
    type: PromotionType;
    application_method: {
        value: number;
        type: ApplicationMethodType;
        target_type: ApplicationMethodTargetType;
        description?: string | undefined;
        max_quantity?: number | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    };
    is_automatic?: boolean | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}>, {
    code: string;
    type: PromotionType;
    application_method: {
        value: number;
        type: ApplicationMethodType;
        target_type: ApplicationMethodTargetType;
        description?: string | undefined;
        max_quantity?: number | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    };
    is_automatic?: boolean | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}, {
    code: string;
    type: PromotionType;
    application_method: {
        value: number;
        type: ApplicationMethodType;
        target_type: ApplicationMethodTargetType;
        description?: string | undefined;
        max_quantity?: number | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    };
    is_automatic?: boolean | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}>;
export type AdminUpdatePromotionType = z.infer<typeof AdminUpdatePromotion>;
export declare const AdminUpdatePromotion: z.ZodEffects<z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    is_automatic: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof PromotionType>>;
    campaign_id: z.ZodOptional<z.ZodString>;
    campaign: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        campaign_identifier: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        currency: z.ZodOptional<z.ZodString>;
        budget: z.ZodOptional<z.ZodObject<{
            type: z.ZodNativeEnum<typeof CampaignBudgetType>;
            limit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: CampaignBudgetType;
            limit: number;
        }, {
            type: CampaignBudgetType;
            limit: number;
        }>>;
        starts_at: z.ZodOptional<z.ZodDate>;
        ends_at: z.ZodOptional<z.ZodDate>;
        promotions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    }, {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    }>>;
    application_method: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
        max_quantity: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodType>>;
        target_type: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodTargetType>>;
        allocation: z.ZodOptional<z.ZodNativeEnum<typeof ApplicationMethodAllocation>>;
        target_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
            description: z.ZodOptional<z.ZodString>;
            attribute: z.ZodString;
            values: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }>, "many">>;
        buy_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
            description: z.ZodOptional<z.ZodString>;
            attribute: z.ZodString;
            values: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }, {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }>, "many">>;
        apply_to_quantity: z.ZodOptional<z.ZodNumber>;
        buy_rules_min_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        description?: string | undefined;
        value?: string | undefined;
        max_quantity?: number | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    }, {
        description?: string | undefined;
        value?: string | undefined;
        max_quantity?: number | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    }>>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof PromotionRuleOperator>;
        description: z.ZodOptional<z.ZodString>;
        attribute: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }, {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    type?: PromotionType | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    application_method?: {
        description?: string | undefined;
        value?: string | undefined;
        max_quantity?: number | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    type?: PromotionType | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    application_method?: {
        description?: string | undefined;
        value?: string | undefined;
        max_quantity?: number | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}>, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    type?: PromotionType | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    application_method?: {
        description?: string | undefined;
        value?: string | undefined;
        max_quantity?: number | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    type?: PromotionType | undefined;
    campaign_id?: string | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | undefined;
        currency?: string | undefined;
        budget?: {
            type: CampaignBudgetType;
            limit: number;
        } | undefined;
        starts_at?: Date | undefined;
        ends_at?: Date | undefined;
        promotions?: {
            id: string;
        }[] | undefined;
    } | undefined;
    application_method?: {
        description?: string | undefined;
        value?: string | undefined;
        max_quantity?: number | undefined;
        type?: ApplicationMethodType | undefined;
        target_type?: ApplicationMethodTargetType | undefined;
        allocation?: ApplicationMethodAllocation | undefined;
        target_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        buy_rules?: {
            values: string[];
            operator: PromotionRuleOperator;
            attribute: string;
            description?: string | undefined;
        }[] | undefined;
        apply_to_quantity?: number | undefined;
        buy_rules_min_quantity?: number | undefined;
    } | undefined;
    rules?: {
        values: string[];
        operator: PromotionRuleOperator;
        attribute: string;
        description?: string | undefined;
    }[] | undefined;
}>;
