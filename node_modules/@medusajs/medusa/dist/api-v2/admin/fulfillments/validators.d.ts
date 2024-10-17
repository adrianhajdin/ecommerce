import { z } from "zod";
export declare const AdminFulfillmentParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminCancelFulfillmentType = z.infer<typeof AdminCancelFulfillment>;
export declare const AdminCancelFulfillment: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type AdminCreateFulfillmentType = z.infer<typeof AdminCreateFulfillment>;
export declare const AdminCreateFulfillment: z.ZodObject<{
    location_id: z.ZodString;
    provider_id: z.ZodString;
    delivery_address: z.ZodObject<{
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
    items: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        sku: z.ZodString;
        quantity: z.ZodNumber;
        barcode: z.ZodString;
        line_item_id: z.ZodOptional<z.ZodString>;
        inventory_item_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        sku: string;
        barcode: string;
        quantity: number;
        line_item_id?: string | undefined;
        inventory_item_id?: string | undefined;
    }, {
        title: string;
        sku: string;
        barcode: string;
        quantity: number;
        line_item_id?: string | undefined;
        inventory_item_id?: string | undefined;
    }>, "many">;
    labels: z.ZodArray<z.ZodObject<{
        tracking_number: z.ZodString;
        tracking_url: z.ZodString;
        label_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }, {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }>, "many">;
    order: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    order: {};
    items: {
        title: string;
        sku: string;
        barcode: string;
        quantity: number;
        line_item_id?: string | undefined;
        inventory_item_id?: string | undefined;
    }[];
    provider_id: string;
    location_id: string;
    delivery_address: {
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
    };
    labels: {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }[];
    metadata?: Record<string, unknown> | null | undefined;
}, {
    order: {};
    items: {
        title: string;
        sku: string;
        barcode: string;
        quantity: number;
        line_item_id?: string | undefined;
        inventory_item_id?: string | undefined;
    }[];
    provider_id: string;
    location_id: string;
    delivery_address: {
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
    };
    labels: {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }[];
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type AdminCreateShipmentType = z.infer<typeof AdminCreateShipment>;
export declare const AdminCreateShipment: z.ZodObject<{
    labels: z.ZodArray<z.ZodObject<{
        tracking_number: z.ZodString;
        tracking_url: z.ZodString;
        label_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }, {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    labels: {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }[];
}, {
    labels: {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }[];
}>;
