import { z } from "zod";
export declare const StoreGetCurrencyParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreGetCurrenciesParamsType = z.infer<typeof StoreGetCurrenciesParams>;
export declare const StoreGetCurrenciesParams: any;
