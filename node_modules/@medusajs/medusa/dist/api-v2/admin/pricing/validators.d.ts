import { z } from "zod";
export type AdminGetPricingRuleTypeParamsType = z.infer<typeof AdminGetPricingRuleTypeParams>;
export declare const AdminGetPricingRuleTypeParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetPricingRuleTypesParamsType = z.infer<typeof AdminGetPricingRuleTypesParams>;
export declare const AdminGetPricingRuleTypesParams: any;
export type AdminCreatePricingRuleTypeType = z.infer<typeof AdminCreatePricingRuleType>;
export declare const AdminCreatePricingRuleType: z.ZodObject<{
    name: z.ZodString;
    rule_attribute: z.ZodString;
    default_priority: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    name: string;
    rule_attribute: string;
    default_priority: number;
}, {
    name: string;
    rule_attribute: string;
    default_priority: number;
}>;
export type AdminUpdatePricingRuleTypeType = z.infer<typeof AdminUpdatePricingRuleType>;
export declare const AdminUpdatePricingRuleType: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    rule_attribute: z.ZodOptional<z.ZodString>;
    default_priority: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    rule_attribute?: string | undefined;
    default_priority?: number | undefined;
}, {
    name?: string | undefined;
    rule_attribute?: string | undefined;
    default_priority?: number | undefined;
}>;
