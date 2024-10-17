import { z } from "zod";
export type AdminFulfillmentProvidersParamsType = z.infer<typeof AdminFulfillmentProvidersParams>;
export declare const AdminFulfillmentProvidersParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
