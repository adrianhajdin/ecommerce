import { z } from "zod";
import { ApiKeyType } from "@medusajs/utils";
export declare const AdminGetApiKeyParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetApiKeysParamsType = z.infer<typeof AdminGetApiKeysParams>;
export declare const AdminGetApiKeysParams: any;
export type AdminCreateApiKeyType = z.infer<typeof AdminCreateApiKey>;
export declare const AdminCreateApiKey: z.ZodObject<{
    title: z.ZodString;
    type: z.ZodNativeEnum<typeof ApiKeyType>;
}, "strip", z.ZodTypeAny, {
    type: ApiKeyType;
    title: string;
}, {
    type: ApiKeyType;
    title: string;
}>;
export type AdminUpdateApiKeyType = z.infer<typeof AdminUpdateApiKey>;
export declare const AdminUpdateApiKey: z.ZodObject<{
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
}, {
    title: string;
}>;
export type AdminRevokeApiKeyType = z.infer<typeof AdminRevokeApiKey>;
export declare const AdminRevokeApiKey: z.ZodObject<{
    revoke_in: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    revoke_in?: number | undefined;
}, {
    revoke_in?: number | undefined;
}>;
