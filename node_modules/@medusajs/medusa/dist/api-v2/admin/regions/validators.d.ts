import { z } from "zod";
export type AdminGetRegionParamsType = z.infer<typeof AdminGetRegionParams>;
export declare const AdminGetRegionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetRegionsParamsType = z.infer<typeof AdminGetRegionsParams>;
export declare const AdminGetRegionsParams: any;
export type AdminCreateRegionType = z.infer<typeof AdminCreateRegion>;
export declare const AdminCreateRegion: z.ZodObject<{
    name: z.ZodString;
    currency_code: z.ZodString;
    countries: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    automatic_taxes: z.ZodOptional<z.ZodBoolean>;
    payment_providers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    name: string;
    currency_code: string;
    countries?: string[] | undefined;
    automatic_taxes?: boolean | undefined;
    payment_providers?: string[] | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    name: string;
    currency_code: string;
    countries?: string[] | undefined;
    automatic_taxes?: boolean | undefined;
    payment_providers?: string[] | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateRegionType = z.infer<typeof AdminUpdateRegion>;
export declare const AdminUpdateRegion: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    currency_code: z.ZodOptional<z.ZodString>;
    countries: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    automatic_taxes: z.ZodOptional<z.ZodBoolean>;
    payment_providers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    currency_code?: string | undefined;
    countries?: string[] | undefined;
    automatic_taxes?: boolean | undefined;
    payment_providers?: string[] | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    name?: string | undefined;
    currency_code?: string | undefined;
    countries?: string[] | undefined;
    automatic_taxes?: boolean | undefined;
    payment_providers?: string[] | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
