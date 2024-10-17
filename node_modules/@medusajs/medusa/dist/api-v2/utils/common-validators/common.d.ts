import { z } from "zod";
export declare const AddressPayload: z.ZodObject<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    address_1: z.ZodOptional<z.ZodString>;
    address_2: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    country_code: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    postal_code: z.ZodOptional<z.ZodString>;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
}, "strict", z.ZodTypeAny, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    phone?: string | undefined;
    company?: string | undefined;
    address_1?: string | undefined;
    address_2?: string | undefined;
    city?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    postal_code?: string | undefined;
    metadata?: Record<string, string> | null | undefined;
}, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    phone?: string | undefined;
    company?: string | undefined;
    address_1?: string | undefined;
    address_2?: string | undefined;
    city?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    postal_code?: string | undefined;
    metadata?: Record<string, string> | null | undefined;
}>;
export declare const BigNumberInput: z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodObject<{
    value: z.ZodString;
    precision: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: string;
    precision: number;
}, {
    value: string;
    precision: number;
}>]>;
export declare const OptionalBooleanValidator: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
