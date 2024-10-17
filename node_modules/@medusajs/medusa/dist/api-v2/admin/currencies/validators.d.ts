import { z } from "zod";
export declare const AdminGetCurrencyParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetCurrenciesParamsType = z.infer<typeof AdminGetCurrenciesParams>;
export declare const AdminGetCurrenciesParams: any;
