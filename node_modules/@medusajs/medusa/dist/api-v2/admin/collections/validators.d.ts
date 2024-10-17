import { z } from "zod";
export declare const AdminGetCollectionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetCollectionsParamsType = z.infer<typeof AdminGetCollectionsParams>;
export declare const AdminGetCollectionsParams: any;
export type AdminCreateCollectionType = z.infer<typeof AdminCreateCollection>;
export declare const AdminCreateCollection: z.ZodObject<{
    title: z.ZodString;
    handle: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    handle?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    title: string;
    handle?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateCollectionType = z.infer<typeof AdminUpdateCollection>;
export declare const AdminUpdateCollection: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    handle?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    title?: string | undefined;
    handle?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
