import { z } from "zod";
export type AdminGetTaxRateParamsType = z.infer<typeof AdminGetTaxRateParams>;
export declare const AdminGetTaxRateParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetTaxRatesParamsType = z.infer<typeof AdminGetTaxRatesParams>;
export declare const AdminGetTaxRatesParams: any;
export type AdminCreateTaxRateRuleType = z.infer<typeof AdminCreateTaxRateRule>;
export declare const AdminCreateTaxRateRule: z.ZodObject<{
    reference: z.ZodString;
    reference_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reference: string;
    reference_id: string;
}, {
    reference: string;
    reference_id: string;
}>;
export type AdminCreateTaxRateType = z.infer<typeof AdminCreateTaxRate>;
export declare const AdminCreateTaxRate: z.ZodObject<{
    rate: z.ZodOptional<z.ZodNumber>;
    code: z.ZodOptional<z.ZodString>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        reference: z.ZodString;
        reference_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reference: string;
        reference_id: string;
    }, {
        reference: string;
        reference_id: string;
    }>, "many">>;
    name: z.ZodString;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_combinable: z.ZodOptional<z.ZodBoolean>;
    tax_region_id: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    tax_region_id: string;
    rate?: number | undefined;
    code?: string | undefined;
    rules?: {
        reference: string;
        reference_id: string;
    }[] | undefined;
    is_default?: boolean | undefined;
    is_combinable?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    name: string;
    tax_region_id: string;
    rate?: number | undefined;
    code?: string | undefined;
    rules?: {
        reference: string;
        reference_id: string;
    }[] | undefined;
    is_default?: boolean | undefined;
    is_combinable?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateTaxRateType = z.infer<typeof AdminUpdateTaxRate>;
export declare const AdminUpdateTaxRate: z.ZodObject<{
    rate: z.ZodOptional<z.ZodNumber>;
    code: z.ZodOptional<z.ZodString>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        reference: z.ZodString;
        reference_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reference: string;
        reference_id: string;
    }, {
        reference: string;
        reference_id: string;
    }>, "many">>;
    name: z.ZodOptional<z.ZodString>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_combinable: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    rate?: number | undefined;
    code?: string | undefined;
    rules?: {
        reference: string;
        reference_id: string;
    }[] | undefined;
    name?: string | undefined;
    is_default?: boolean | undefined;
    is_combinable?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    rate?: number | undefined;
    code?: string | undefined;
    rules?: {
        reference: string;
        reference_id: string;
    }[] | undefined;
    name?: string | undefined;
    is_default?: boolean | undefined;
    is_combinable?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
