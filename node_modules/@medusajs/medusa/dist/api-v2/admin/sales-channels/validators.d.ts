import { z } from "zod";
export type AdminGetSalesChannelParamsType = z.infer<typeof AdminGetSalesChannelParams>;
export declare const AdminGetSalesChannelParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetSalesChannelsParamsType = z.infer<typeof AdminGetSalesChannelsParams>;
export declare const AdminGetSalesChannelsParams: any;
export type AdminCreateSalesChannelType = z.infer<typeof AdminCreateSalesChannel>;
export declare const AdminCreateSalesChannel: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    is_disabled: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
    is_disabled?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    name: string;
    description?: string | undefined;
    is_disabled?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateSalesChannelType = z.infer<typeof AdminUpdateSalesChannel>;
export declare const AdminUpdateSalesChannel: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    is_disabled: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    is_disabled?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    is_disabled?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
