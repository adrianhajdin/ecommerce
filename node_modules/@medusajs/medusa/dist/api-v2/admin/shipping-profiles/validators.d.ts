import { z } from "zod";
export type AdminGetShippingProfileParamsType = z.infer<typeof AdminGetShippingProfileParams>;
export declare const AdminGetShippingProfileParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetShippingProfilesParamsType = z.infer<typeof AdminGetShippingProfilesParams>;
export declare const AdminGetShippingProfilesParams: any;
export type AdminCreateShippingProfileType = z.infer<typeof AdminCreateShippingProfile>;
export declare const AdminCreateShippingProfile: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    name: string;
    type: string;
    metadata?: Record<string, unknown> | undefined;
}, {
    name: string;
    type: string;
    metadata?: Record<string, unknown> | undefined;
}>;
