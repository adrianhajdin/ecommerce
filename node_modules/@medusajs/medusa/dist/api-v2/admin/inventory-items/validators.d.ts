import { z } from "zod";
export type AdminGetInventoryItemParamsType = z.infer<typeof AdminGetInventoryItemParams>;
export declare const AdminGetInventoryItemParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetInventoryItemsParamsType = z.infer<typeof AdminGetInventoryItemsParams>;
export declare const AdminGetInventoryItemsParams: any;
export type AdminGetInventoryLocationLevelParamsType = z.infer<typeof AdminGetInventoryLocationLevelParams>;
export declare const AdminGetInventoryLocationLevelParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetInventoryLocationLevelsParamsType = z.infer<typeof AdminGetInventoryLocationLevelsParams>;
export declare const AdminGetInventoryLocationLevelsParams: any;
export type AdminCreateInventoryLocationLevelType = z.infer<typeof AdminCreateInventoryLocationLevel>;
export declare const AdminCreateInventoryLocationLevel: z.ZodObject<{
    location_id: z.ZodString;
    stocked_quantity: z.ZodOptional<z.ZodNumber>;
    incoming_quantity: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    location_id: string;
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}, {
    location_id: string;
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}>;
export type AdminUpdateInventoryLocationLevelType = z.infer<typeof AdminUpdateInventoryLocationLevel>;
export declare const AdminUpdateInventoryLocationLevel: z.ZodObject<{
    stocked_quantity: z.ZodOptional<z.ZodNumber>;
    incoming_quantity: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}, {
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}>;
export type AdminCreateInventoryItemType = z.infer<typeof AdminCreateInventoryItem>;
export declare const AdminCreateInventoryItem: z.ZodObject<{
    sku: z.ZodOptional<z.ZodString>;
    hs_code: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    length: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    origin_country: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    requires_shipping: z.ZodOptional<z.ZodBoolean>;
    thumbnail: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    sku?: string | undefined;
    hs_code?: string | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    sku?: string | undefined;
    hs_code?: string | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateInventoryItemType = z.infer<typeof AdminUpdateInventoryItem>;
export declare const AdminUpdateInventoryItem: z.ZodObject<{
    sku: z.ZodOptional<z.ZodString>;
    hs_code: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    length: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    origin_country: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    requires_shipping: z.ZodOptional<z.ZodBoolean>;
    thumbnail: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    sku?: string | undefined;
    hs_code?: string | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    sku?: string | undefined;
    hs_code?: string | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
