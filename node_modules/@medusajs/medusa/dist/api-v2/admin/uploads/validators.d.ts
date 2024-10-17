import { z } from "zod";
export type AdminGetUploadParamsType = z.infer<typeof AdminGetUploadParams>;
export declare const AdminGetUploadParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
