import { z } from "zod";
export type StoreGetRegionParamsType = z.infer<typeof StoreGetRegionParams>;
export declare const StoreGetRegionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreGetRegionsParamsType = z.infer<typeof StoreGetRegionsParams>;
export declare const StoreGetRegionsParams: any;
