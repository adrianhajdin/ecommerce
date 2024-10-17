import { z } from "zod";
export type StoreGetPromotionType = z.infer<typeof StoreGetCartsCart>;
export declare const StoreGetCartsCart: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreCreateCartType = z.infer<typeof StoreCreateCart>;
export declare const StoreCreateCart: z.ZodObject<{
    region_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    shipping_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
    }>, z.ZodString]>>;
    billing_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
    }>, z.ZodString]>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    currency_code: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        variant_id: z.ZodString;
        quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        variant_id: string;
        quantity: number;
    }, {
        variant_id: string;
        quantity: number;
    }>, "many">>;
    sales_channel_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    region_id?: string | null | undefined;
    shipping_address?: string | {
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
    } | undefined;
    billing_address?: string | {
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
    } | undefined;
    email?: string | null | undefined;
    currency_code?: string | undefined;
    items?: {
        variant_id: string;
        quantity: number;
    }[] | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    region_id?: string | null | undefined;
    shipping_address?: string | {
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
    } | undefined;
    billing_address?: string | {
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
    } | undefined;
    email?: string | null | undefined;
    currency_code?: string | undefined;
    items?: {
        variant_id: string;
        quantity: number;
    }[] | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type StoreAddCartPromotionsType = z.infer<typeof StoreAddCartPromotions>;
export declare const StoreAddCartPromotions: z.ZodObject<{
    promo_codes: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    promo_codes: string[];
}, {
    promo_codes: string[];
}>;
export type StoreRemoveCartPromotionsType = z.infer<typeof StoreRemoveCartPromotions>;
export declare const StoreRemoveCartPromotions: z.ZodObject<{
    promo_codes: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    promo_codes: string[];
}, {
    promo_codes: string[];
}>;
export type StoreUpdateCartType = z.infer<typeof StoreUpdateCart>;
export declare const StoreUpdateCart: z.ZodObject<{
    region_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    billing_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
    }>, z.ZodString]>>;
    shipping_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
    }>, z.ZodString]>>;
    sales_channel_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    promo_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    region_id?: string | null | undefined;
    email?: string | null | undefined;
    billing_address?: string | {
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
    } | undefined;
    shipping_address?: string | {
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
    } | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    promo_codes?: string[] | undefined;
}, {
    region_id?: string | null | undefined;
    email?: string | null | undefined;
    billing_address?: string | {
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
    } | undefined;
    shipping_address?: string | {
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
    } | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    promo_codes?: string[] | undefined;
}>;
export type StoreCalculateCartTaxesType = z.infer<typeof StoreCalculateCartTaxes>;
export declare const StoreCalculateCartTaxes: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreAddCartLineItemType = z.infer<typeof StoreAddCartLineItem>;
export declare const StoreAddCartLineItem: z.ZodObject<{
    variant_id: z.ZodString;
    quantity: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    variant_id: string;
    quantity: number;
    metadata?: Record<string, unknown> | undefined;
}, {
    variant_id: string;
    quantity: number;
    metadata?: Record<string, unknown> | undefined;
}>;
export type StoreUpdateCartLineItemType = z.infer<typeof StoreUpdateCartLineItem>;
export declare const StoreUpdateCartLineItem: z.ZodObject<{
    quantity: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    metadata?: Record<string, unknown> | undefined;
}, {
    quantity: number;
    metadata?: Record<string, unknown> | undefined;
}>;
export type StoreAddCartShippingMethodsType = z.infer<typeof StoreAddCartShippingMethods>;
export declare const StoreAddCartShippingMethods: z.ZodObject<{
    option_id: z.ZodString;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    option_id: string;
    data?: Record<string, unknown> | undefined;
}, {
    option_id: string;
    data?: Record<string, unknown> | undefined;
}>;
