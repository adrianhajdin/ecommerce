import { z } from "zod";
export type AdminGetOrderParamsType = z.infer<typeof AdminGetOrderParams>;
export declare const AdminGetOrderParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetOrdersParamsType = z.infer<typeof AdminGetOrdersParams>;
export declare const AdminGetOrdersParams: any;
declare enum Status {
    completed = "completed"
}
export type AdminCreateDraftOrderType = z.infer<typeof AdminCreateDraftOrder>;
export declare const AdminCreateDraftOrder: z.ZodEffects<z.ZodObject<{
    status: z.ZodOptional<z.ZodNativeEnum<typeof Status>>;
    sales_channel_id: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    customer_id: z.ZodOptional<z.ZodString>;
    billing_address: z.ZodOptional<z.ZodObject<{
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
    }>>;
    shipping_address: z.ZodOptional<z.ZodObject<{
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
    }>>;
    items: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        sku: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        variant_id: z.ZodOptional<z.ZodString>;
        unit_price: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodObject<{
            value: z.ZodString;
            precision: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: string;
            precision: number;
        }, {
            value: string;
            precision: number;
        }>]>>;
        quantity: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }, {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }>, {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }, {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }>, "many">>;
    region_id: z.ZodString;
    promo_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    currency_code: z.ZodOptional<z.ZodString>;
    no_notification_order: z.ZodOptional<z.ZodBoolean>;
    shipping_methods: z.ZodArray<z.ZodObject<{
        shipping_method_id: z.ZodOptional<z.ZodString>;
        order_id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        option_id: z.ZodString;
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        amount: z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodObject<{
            value: z.ZodString;
            precision: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: string;
            precision: number;
        }, {
            value: string;
            precision: number;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | undefined;
        order_id?: string | undefined;
        data?: Record<string, unknown> | undefined;
    }, {
        name: string;
        option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | undefined;
        order_id?: string | undefined;
        data?: Record<string, unknown> | undefined;
    }>, "many">;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    region_id: string;
    shipping_methods: {
        name: string;
        option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | undefined;
        order_id?: string | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    status?: Status.completed | undefined;
    sales_channel_id?: string | undefined;
    email?: string | undefined;
    customer_id?: string | undefined;
    billing_address?: {
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
    shipping_address?: {
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
    items?: {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    promo_codes?: string[] | undefined;
    currency_code?: string | undefined;
    no_notification_order?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    region_id: string;
    shipping_methods: {
        name: string;
        option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | undefined;
        order_id?: string | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    status?: Status.completed | undefined;
    sales_channel_id?: string | undefined;
    email?: string | undefined;
    customer_id?: string | undefined;
    billing_address?: {
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
    shipping_address?: {
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
    items?: {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    promo_codes?: string[] | undefined;
    currency_code?: string | undefined;
    no_notification_order?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}>, {
    region_id: string;
    shipping_methods: {
        name: string;
        option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | undefined;
        order_id?: string | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    status?: Status.completed | undefined;
    sales_channel_id?: string | undefined;
    email?: string | undefined;
    customer_id?: string | undefined;
    billing_address?: {
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
    shipping_address?: {
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
    items?: {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    promo_codes?: string[] | undefined;
    currency_code?: string | undefined;
    no_notification_order?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    region_id: string;
    shipping_methods: {
        name: string;
        option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | undefined;
        order_id?: string | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    status?: Status.completed | undefined;
    sales_channel_id?: string | undefined;
    email?: string | undefined;
    customer_id?: string | undefined;
    billing_address?: {
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
    shipping_address?: {
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
    items?: {
        quantity: number;
        title?: string | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        variant_id?: string | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    promo_codes?: string[] | undefined;
    currency_code?: string | undefined;
    no_notification_order?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export {};
