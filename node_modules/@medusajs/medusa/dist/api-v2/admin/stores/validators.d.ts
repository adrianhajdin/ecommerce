import { z } from "zod";
export type AdminGetStoreParamsType = z.infer<typeof AdminGetStoreParams>;
export declare const AdminGetStoreParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetStoresParamsType = z.infer<typeof AdminGetStoresParams>;
export declare const AdminGetStoresParams: any;
export type AdminUpdateStoreType = z.infer<typeof AdminUpdateStore>;
export declare const AdminUpdateStore: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    supported_currency_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    default_currency_code: z.ZodOptional<z.ZodString>;
    default_sales_channel_id: z.ZodOptional<z.ZodString>;
    default_region_id: z.ZodOptional<z.ZodString>;
    default_location_id: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    supported_currency_codes?: string[] | undefined;
    default_currency_code?: string | undefined;
    default_sales_channel_id?: string | undefined;
    default_region_id?: string | undefined;
    default_location_id?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    name?: string | undefined;
    supported_currency_codes?: string[] | undefined;
    default_currency_code?: string | undefined;
    default_sales_channel_id?: string | undefined;
    default_region_id?: string | undefined;
    default_location_id?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
