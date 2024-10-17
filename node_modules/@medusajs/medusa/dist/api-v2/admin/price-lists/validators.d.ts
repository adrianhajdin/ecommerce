import { PriceListStatus, PriceListType } from "@medusajs/types";
import { z } from "zod";
export declare const AdminGetPriceListPricesParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminGetPriceListsParams: any;
export declare const AdminGetPriceListParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminCreatePriceListPrice: z.ZodObject<{
    currency_code: z.ZodString;
    amount: z.ZodNumber;
    variant_id: z.ZodString;
    min_quantity: z.ZodOptional<z.ZodNumber>;
    max_quantity: z.ZodOptional<z.ZodNumber>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    variant_id: string;
    currency_code: string;
    amount: number;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
    rules?: Record<string, string> | undefined;
}, {
    variant_id: string;
    currency_code: string;
    amount: number;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
    rules?: Record<string, string> | undefined;
}>;
export type AdminCreatePriceListPriceType = z.infer<typeof AdminCreatePriceListPrice>;
export declare const AdminUpdatePriceListPrice: z.ZodObject<{
    id: z.ZodString;
    currency_code: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
    variant_id: z.ZodString;
    min_quantity: z.ZodOptional<z.ZodNumber>;
    max_quantity: z.ZodOptional<z.ZodNumber>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    variant_id: string;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
    rules?: Record<string, string> | undefined;
}, {
    id: string;
    variant_id: string;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
    rules?: Record<string, string> | undefined;
}>;
export type AdminUpdatePriceListPriceType = z.infer<typeof AdminUpdatePriceListPrice>;
export declare const AdminCreatePriceList: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    starts_at: z.ZodOptional<z.ZodString>;
    ends_at: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof PriceListStatus>>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof PriceListType>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
        variant_id: z.ZodString;
        min_quantity: z.ZodOptional<z.ZodNumber>;
        max_quantity: z.ZodOptional<z.ZodNumber>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        variant_id: string;
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        variant_id: string;
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    starts_at?: string | undefined;
    ends_at?: string | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
    prices?: {
        variant_id: string;
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
}, {
    title: string;
    description: string;
    starts_at?: string | undefined;
    ends_at?: string | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
    prices?: {
        variant_id: string;
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
}>;
export type AdminCreatePriceListType = z.infer<typeof AdminCreatePriceList>;
export declare const AdminUpdatePriceList: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    starts_at: z.ZodOptional<z.ZodString>;
    ends_at: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof PriceListStatus>>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof PriceListType>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | undefined;
    starts_at?: string | undefined;
    ends_at?: string | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
    starts_at?: string | undefined;
    ends_at?: string | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
}>;
export type AdminUpdatePriceListType = z.infer<typeof AdminUpdatePriceList>;
