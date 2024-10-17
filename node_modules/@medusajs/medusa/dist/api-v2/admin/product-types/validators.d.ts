import { z } from "zod";
export type AdminGetProductTypeParamsType = z.infer<typeof AdminGetProductTypeParams>;
export declare const AdminGetProductTypeParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetProductTypesParamsType = z.infer<typeof AdminGetProductTypesParams>;
export declare const AdminGetProductTypesParams: any;
export type AdminCreateProductTypeType = z.infer<typeof AdminCreateProductType>;
export declare const AdminCreateProductType: z.ZodObject<{
    value: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    value: string;
    metadata?: Record<string, unknown> | undefined;
}, {
    value: string;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateProductTypeType = z.infer<typeof AdminUpdateProductType>;
export declare const AdminUpdateProductType: z.ZodObject<{
    value: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    value?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    value?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
