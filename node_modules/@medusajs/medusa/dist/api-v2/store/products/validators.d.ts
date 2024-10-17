import { z } from "zod";
export declare const StoreGetProductParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreGetProductVariantsParamsType = z.infer<typeof StoreGetProductVariantsParams>;
export declare const StoreGetProductVariantsParams: any;
export type StoreGetProductsParamsType = z.infer<typeof StoreGetProductsParams>;
export declare const StoreGetProductsParams: any;
