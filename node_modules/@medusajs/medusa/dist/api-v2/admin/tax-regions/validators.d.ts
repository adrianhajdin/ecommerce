import { z } from "zod";
export type AdminGetTaxRegionParamsType = z.infer<typeof AdminGetTaxRegionParams>;
export declare const AdminGetTaxRegionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetTaxRegionsParamsType = z.infer<typeof AdminGetTaxRegionsParams>;
export declare const AdminGetTaxRegionsParams: any;
export type AdminCreateTaxRegionType = z.infer<typeof AdminCreateTaxRegion>;
export declare const AdminCreateTaxRegion: z.ZodObject<{
    country_code: z.ZodString;
    province_code: z.ZodOptional<z.ZodString>;
    parent_id: z.ZodOptional<z.ZodString>;
    default_tax_rate: z.ZodOptional<z.ZodObject<{
        rate: z.ZodOptional<z.ZodNumber>;
        code: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        is_combinable: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"true">, z.ZodLiteral<"false">]>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        rate?: number | undefined;
        code?: string | undefined;
        is_combinable?: "true" | "false" | undefined;
        metadata?: Record<string, unknown> | undefined;
    }, {
        name: string;
        rate?: number | undefined;
        code?: string | undefined;
        is_combinable?: "true" | "false" | undefined;
        metadata?: Record<string, unknown> | undefined;
    }>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    country_code: string;
    province_code?: string | undefined;
    parent_id?: string | undefined;
    default_tax_rate?: {
        name: string;
        rate?: number | undefined;
        code?: string | undefined;
        is_combinable?: "true" | "false" | undefined;
        metadata?: Record<string, unknown> | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    country_code: string;
    province_code?: string | undefined;
    parent_id?: string | undefined;
    default_tax_rate?: {
        name: string;
        rate?: number | undefined;
        code?: string | undefined;
        is_combinable?: "true" | "false" | undefined;
        metadata?: Record<string, unknown> | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
