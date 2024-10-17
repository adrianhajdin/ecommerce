import { ProductStatus } from "@medusajs/utils";
import { z } from "zod";
export declare const AdminGetProductParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminGetProductVariantParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminGetProductOptionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetProductVariantsParamsType = z.infer<typeof AdminGetProductVariantsParams>;
export declare const AdminGetProductVariantsParams: any;
export type AdminGetProductsParamsType = z.infer<typeof AdminGetProductsParams>;
export declare const AdminGetProductsParams: any;
export type AdminGetProductOptionsParamsType = z.infer<typeof AdminGetProductOptionsParams>;
export declare const AdminGetProductOptionsParams: z.ZodObject<{
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    q: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    title: z.ZodOptional<z.ZodString>;
    $and: z.ZodOptional<z.ZodLazy<any>>;
    $or: z.ZodOptional<z.ZodLazy<any>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    order?: string | undefined;
    fields?: string | undefined;
    q?: string | undefined;
    id?: string | string[] | undefined;
    title?: string | undefined;
    $and?: any;
    $or?: any;
}, {
    order?: string | undefined;
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    q?: string | undefined;
    id?: string | string[] | undefined;
    title?: string | undefined;
    $and?: any;
    $or?: any;
}>;
export type AdminCreateProductTagType = z.infer<typeof AdminCreateProductTag>;
export declare const AdminCreateProductTag: z.ZodObject<{
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: string | undefined;
}, {
    value?: string | undefined;
}>;
export type AdminUpdateProductTagType = z.infer<typeof AdminUpdateProductTag>;
export declare const AdminUpdateProductTag: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    value?: string | undefined;
}, {
    id?: string | undefined;
    value?: string | undefined;
}>;
export type AdminCreateProductOptionType = z.infer<typeof AdminCreateProductOption>;
export declare const AdminCreateProductOption: z.ZodObject<{
    title: z.ZodString;
    values: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    values: string[];
    title: string;
}, {
    values: string[];
    title: string;
}>;
export type AdminUpdateProductOptionType = z.infer<typeof AdminUpdateProductOption>;
export declare const AdminUpdateProductOption: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    title?: string | undefined;
    values?: string[] | undefined;
}, {
    id?: string | undefined;
    title?: string | undefined;
    values?: string[] | undefined;
}>;
export type AdminCreateVariantPriceType = z.infer<typeof AdminCreateVariantPrice>;
export declare const AdminCreateVariantPrice: z.ZodObject<{
    currency_code: z.ZodString;
    amount: z.ZodNumber;
    min_quantity: z.ZodOptional<z.ZodNumber>;
    max_quantity: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    currency_code: string;
    amount: number;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
}, {
    currency_code: string;
    amount: number;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
}>;
export type AdminUpdateVariantPriceType = z.infer<typeof AdminUpdateVariantPrice>;
export declare const AdminUpdateVariantPrice: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    currency_code: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
    min_quantity: z.ZodOptional<z.ZodNumber>;
    max_quantity: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
}, {
    id?: string | undefined;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | undefined;
    max_quantity?: number | undefined;
}>;
export type AdminCreateProductTypeType = z.infer<typeof AdminCreateProductType>;
export declare const AdminCreateProductType: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export type AdminCreateProductVariantType = z.infer<typeof AdminCreateProductVariant>;
export declare const AdminCreateProductVariant: z.ZodObject<{
    title: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    ean: z.ZodOptional<z.ZodString>;
    upc: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    hs_code: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    inventory_quantity: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    allow_backorder: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    manage_inventory: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNumber>;
    length: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    origin_country: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    prices: z.ZodArray<z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
        min_quantity: z.ZodOptional<z.ZodNumber>;
        max_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }, {
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }>, "many">;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    prices: {
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }[];
    inventory_quantity: number;
    allow_backorder: boolean;
    manage_inventory: boolean;
    sku?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    barcode?: string | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    variant_rank?: number | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
}, {
    title: string;
    prices: {
        currency_code: string;
        amount: number;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }[];
    sku?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    barcode?: string | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    inventory_quantity?: number | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
    variant_rank?: number | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
}>;
export type AdminUpdateProductVariantType = z.infer<typeof AdminUpdateProductVariant>;
export declare const AdminUpdateProductVariant: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    length: z.ZodOptional<z.ZodNumber>;
    sku: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    ean: z.ZodOptional<z.ZodString>;
    upc: z.ZodOptional<z.ZodString>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    hs_code: z.ZodOptional<z.ZodString>;
    origin_country: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        currency_code: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
        min_quantity: z.ZodOptional<z.ZodNumber>;
        max_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }>, "many">>;
    inventory_quantity: z.ZodOptional<z.ZodNumber>;
    allow_backorder: z.ZodOptional<z.ZodBoolean>;
    manage_inventory: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
    length?: number | undefined;
    sku?: string | undefined;
    barcode?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    variant_rank?: number | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    id?: string | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }[] | undefined;
    inventory_quantity?: number | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
}, {
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
    length?: number | undefined;
    sku?: string | undefined;
    barcode?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    variant_rank?: number | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    id?: string | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }[] | undefined;
    inventory_quantity?: number | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
}>;
export type AdminBatchUpdateProductVariantType = z.infer<typeof AdminBatchUpdateProductVariant>;
export declare const AdminBatchUpdateProductVariant: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    length: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        currency_code: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
        min_quantity: z.ZodOptional<z.ZodNumber>;
        max_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }>, "many">>;
    sku: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    ean: z.ZodOptional<z.ZodString>;
    upc: z.ZodOptional<z.ZodString>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    inventory_quantity: z.ZodOptional<z.ZodNumber>;
    allow_backorder: z.ZodOptional<z.ZodBoolean>;
    manage_inventory: z.ZodOptional<z.ZodBoolean>;
    hs_code: z.ZodOptional<z.ZodString>;
    origin_country: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
    length?: number | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }[] | undefined;
    sku?: string | undefined;
    barcode?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    variant_rank?: number | undefined;
    inventory_quantity?: number | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
}, {
    id: string;
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
    length?: number | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | undefined;
        max_quantity?: number | undefined;
    }[] | undefined;
    sku?: string | undefined;
    barcode?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    variant_rank?: number | undefined;
    inventory_quantity?: number | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
}>;
export declare const AdminCreateProductProductCategory: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type AdminCreateProductType = z.infer<typeof AdminCreateProduct>;
export declare const AdminCreateProduct: z.ZodObject<{
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    is_giftcard: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    discountable: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    thumbnail: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof ProductStatus>>>;
    type_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    collection_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        value?: string | undefined;
    }, {
        id?: string | undefined;
        value?: string | undefined;
    }>, "many">>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        values: string[];
        title: string;
    }, {
        values: string[];
        title: string;
    }>, "many">>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        sku: z.ZodOptional<z.ZodString>;
        ean: z.ZodOptional<z.ZodString>;
        upc: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        hs_code: z.ZodOptional<z.ZodString>;
        mid_code: z.ZodOptional<z.ZodString>;
        inventory_quantity: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        allow_backorder: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        manage_inventory: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNumber>;
        length: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        origin_country: z.ZodOptional<z.ZodString>;
        material: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        prices: z.ZodArray<z.ZodObject<{
            currency_code: z.ZodString;
            amount: z.ZodNumber;
            min_quantity: z.ZodOptional<z.ZodNumber>;
            max_quantity: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            currency_code: string;
            amount: number;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }, {
            currency_code: string;
            amount: number;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }>, "many">;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[];
        inventory_quantity: number;
        allow_backorder: boolean;
        manage_inventory: boolean;
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
    }, {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[];
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
    }>, "many">>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    weight: z.ZodOptional<z.ZodNumber>;
    length: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    hs_code: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    origin_country: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    status: ProductStatus;
    title: string;
    is_giftcard: boolean;
    discountable: boolean;
    subtitle?: string | undefined;
    description?: string | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | undefined;
    handle?: string | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id?: string | undefined;
        value?: string | undefined;
    }[] | undefined;
    options?: {
        values: string[];
        title: string;
    }[] | undefined;
    variants?: {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[];
        inventory_quantity: number;
        allow_backorder: boolean;
        manage_inventory: boolean;
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    title: string;
    subtitle?: string | undefined;
    description?: string | undefined;
    is_giftcard?: boolean | undefined;
    discountable?: boolean | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | undefined;
    handle?: string | undefined;
    status?: ProductStatus | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id?: string | undefined;
        value?: string | undefined;
    }[] | undefined;
    options?: {
        values: string[];
        title: string;
    }[] | undefined;
    variants?: {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[];
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateProductType = z.infer<typeof AdminUpdateProduct>;
export declare const AdminUpdateProduct: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    length: z.ZodOptional<z.ZodNumber>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    hs_code: z.ZodOptional<z.ZodString>;
    origin_country: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        value?: string | undefined;
    }, {
        id?: string | undefined;
        value?: string | undefined;
    }>, "many">>;
    handle: z.ZodOptional<z.ZodString>;
    thumbnail: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    collection_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodString>;
    discountable: z.ZodOptional<z.ZodBoolean>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }>, "many">>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        length: z.ZodOptional<z.ZodNumber>;
        sku: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        ean: z.ZodOptional<z.ZodString>;
        upc: z.ZodOptional<z.ZodString>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        hs_code: z.ZodOptional<z.ZodString>;
        origin_country: z.ZodOptional<z.ZodString>;
        mid_code: z.ZodOptional<z.ZodString>;
        material: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            currency_code: z.ZodOptional<z.ZodString>;
            amount: z.ZodOptional<z.ZodNumber>;
            min_quantity: z.ZodOptional<z.ZodNumber>;
            max_quantity: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }>, "many">>;
        inventory_quantity: z.ZodOptional<z.ZodNumber>;
        allow_backorder: z.ZodOptional<z.ZodBoolean>;
        manage_inventory: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }, {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }>, "many">>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof ProductStatus>>;
}, "strict", z.ZodTypeAny, {
    metadata?: Record<string, unknown> | undefined;
    length?: number | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    description?: string | undefined;
    images?: {
        url: string;
    }[] | undefined;
    tags?: {
        id?: string | undefined;
        value?: string | undefined;
    }[] | undefined;
    handle?: string | undefined;
    thumbnail?: string | undefined;
    subtitle?: string | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    collection_id?: string | null | undefined;
    type_id?: string | null | undefined;
    title?: string | undefined;
    discountable?: boolean | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }[] | undefined;
    status?: ProductStatus | undefined;
}, {
    metadata?: Record<string, unknown> | undefined;
    length?: number | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    description?: string | undefined;
    images?: {
        url: string;
    }[] | undefined;
    tags?: {
        id?: string | undefined;
        value?: string | undefined;
    }[] | undefined;
    handle?: string | undefined;
    thumbnail?: string | undefined;
    subtitle?: string | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    collection_id?: string | null | undefined;
    type_id?: string | null | undefined;
    title?: string | undefined;
    discountable?: boolean | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }[] | undefined;
    status?: ProductStatus | undefined;
}>;
export type AdminBatchUpdateProductType = z.infer<typeof AdminBatchUpdateProduct>;
export declare const AdminBatchUpdateProduct: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }>, "many">>;
    length: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof ProductStatus>>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    title: z.ZodOptional<z.ZodString>;
    hs_code: z.ZodOptional<z.ZodString>;
    origin_country: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        length: z.ZodOptional<z.ZodNumber>;
        sku: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        ean: z.ZodOptional<z.ZodString>;
        upc: z.ZodOptional<z.ZodString>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        hs_code: z.ZodOptional<z.ZodString>;
        origin_country: z.ZodOptional<z.ZodString>;
        mid_code: z.ZodOptional<z.ZodString>;
        material: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            currency_code: z.ZodOptional<z.ZodString>;
            amount: z.ZodOptional<z.ZodNumber>;
            min_quantity: z.ZodOptional<z.ZodNumber>;
            max_quantity: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }>, "many">>;
        inventory_quantity: z.ZodOptional<z.ZodNumber>;
        allow_backorder: z.ZodOptional<z.ZodBoolean>;
        manage_inventory: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }, {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }>, "many">>;
    description: z.ZodOptional<z.ZodString>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        value?: string | undefined;
    }, {
        id?: string | undefined;
        value?: string | undefined;
    }>, "many">>;
    handle: z.ZodOptional<z.ZodString>;
    thumbnail: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    collection_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    discountable: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    metadata?: Record<string, unknown> | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    length?: number | undefined;
    status?: ProductStatus | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    title?: string | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    variants?: {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }[] | undefined;
    description?: string | undefined;
    images?: {
        url: string;
    }[] | undefined;
    tags?: {
        id?: string | undefined;
        value?: string | undefined;
    }[] | undefined;
    handle?: string | undefined;
    thumbnail?: string | undefined;
    subtitle?: string | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    collection_id?: string | null | undefined;
    type_id?: string | null | undefined;
    discountable?: boolean | undefined;
}, {
    id: string;
    metadata?: Record<string, unknown> | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    length?: number | undefined;
    status?: ProductStatus | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    title?: string | undefined;
    hs_code?: string | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    variants?: {
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        length?: number | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        variant_rank?: number | undefined;
        hs_code?: string | undefined;
        origin_country?: string | undefined;
        mid_code?: string | undefined;
        material?: string | undefined;
        weight?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | undefined;
            max_quantity?: number | undefined;
        }[] | undefined;
        inventory_quantity?: number | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
    }[] | undefined;
    description?: string | undefined;
    images?: {
        url: string;
    }[] | undefined;
    tags?: {
        id?: string | undefined;
        value?: string | undefined;
    }[] | undefined;
    handle?: string | undefined;
    thumbnail?: string | undefined;
    subtitle?: string | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    collection_id?: string | null | undefined;
    type_id?: string | null | undefined;
    discountable?: boolean | undefined;
}>;
