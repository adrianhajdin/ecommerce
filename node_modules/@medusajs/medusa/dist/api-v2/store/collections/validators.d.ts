import { z } from "zod";
export declare const StoreGetCollectionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreGetCollectionsParamsType = z.infer<typeof StoreGetCollectionsParams>;
export declare const StoreGetCollectionsParams: any;
