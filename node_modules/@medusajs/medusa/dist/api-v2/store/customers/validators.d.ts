import { z } from "zod";
export declare const StoreGetCustomerParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const StoreCreateCustomer: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    company_name: z.ZodOptional<z.ZodString>;
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    company_name?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    phone?: string | undefined;
}, {
    email?: string | undefined;
    company_name?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    phone?: string | undefined;
}>;
export declare const StoreUpdateCustomer: z.ZodObject<{
    company_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    company_name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    phone?: string | null | undefined;
}, {
    company_name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    phone?: string | null | undefined;
}>;
export declare const StoreGetCustomerAddressParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const StoreCreateCustomerAddress: z.ZodObject<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
    phone: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    address_1: z.ZodOptional<z.ZodString>;
    address_2: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    country_code: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    postal_code: z.ZodOptional<z.ZodString>;
    address_name: z.ZodOptional<z.ZodString>;
    is_default_shipping: z.ZodOptional<z.ZodBoolean>;
    is_default_billing: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    metadata?: Record<string, string> | null | undefined;
    phone?: string | undefined;
    company?: string | undefined;
    address_1?: string | undefined;
    address_2?: string | undefined;
    city?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    postal_code?: string | undefined;
    address_name?: string | undefined;
    is_default_shipping?: boolean | undefined;
    is_default_billing?: boolean | undefined;
}, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    metadata?: Record<string, string> | null | undefined;
    phone?: string | undefined;
    company?: string | undefined;
    address_1?: string | undefined;
    address_2?: string | undefined;
    city?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    postal_code?: string | undefined;
    address_name?: string | undefined;
    is_default_shipping?: boolean | undefined;
    is_default_billing?: boolean | undefined;
}>;
export declare const StoreUpdateCustomerAddress: z.ZodObject<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
    phone: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    address_1: z.ZodOptional<z.ZodString>;
    address_2: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    country_code: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    postal_code: z.ZodOptional<z.ZodString>;
    address_name: z.ZodOptional<z.ZodString>;
    is_default_shipping: z.ZodOptional<z.ZodBoolean>;
    is_default_billing: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    metadata?: Record<string, string> | null | undefined;
    phone?: string | undefined;
    company?: string | undefined;
    address_1?: string | undefined;
    address_2?: string | undefined;
    city?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    postal_code?: string | undefined;
    address_name?: string | undefined;
    is_default_shipping?: boolean | undefined;
    is_default_billing?: boolean | undefined;
}, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    metadata?: Record<string, string> | null | undefined;
    phone?: string | undefined;
    company?: string | undefined;
    address_1?: string | undefined;
    address_2?: string | undefined;
    city?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    postal_code?: string | undefined;
    address_name?: string | undefined;
    is_default_shipping?: boolean | undefined;
    is_default_billing?: boolean | undefined;
}>;
export declare const StoreGetCustomerAddressesParams: z.ZodObject<{
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    q: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    country_code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    postal_code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    order?: string | undefined;
    fields?: string | undefined;
    q?: string | undefined;
    city?: string | string[] | undefined;
    country_code?: string | string[] | undefined;
    postal_code?: string | string[] | undefined;
}, {
    order?: string | undefined;
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    q?: string | undefined;
    city?: string | string[] | undefined;
    country_code?: string | string[] | undefined;
    postal_code?: string | string[] | undefined;
}>;
export type StoreGetCustomerParamsType = z.infer<typeof StoreGetCustomerParams>;
export type StoreCreateCustomerType = z.infer<typeof StoreCreateCustomer>;
export type StoreUpdateCustomerType = z.infer<typeof StoreUpdateCustomer>;
export type StoreGetCustomerAddressParamsType = z.infer<typeof StoreGetCustomerAddressParams>;
export type StoreGetCustomerAddressesParamsType = z.infer<typeof StoreCreateCustomerAddress>;
export type StoreCreateCustomerAddressType = z.infer<typeof StoreCreateCustomerAddress>;
export type StoreUpdateCustomerAddressType = z.infer<typeof StoreUpdateCustomerAddress>;
