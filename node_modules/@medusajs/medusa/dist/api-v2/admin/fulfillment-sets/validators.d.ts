import { z } from "zod";
export declare const AdminServiceZonesParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
}, {
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    order?: string | undefined;
}>;
export type AdminServiceZonesParamsType = z.infer<typeof AdminServiceZonesParams>;
export declare const AdminCreateFulfillmentSetServiceZonesSchema: z.ZodObject<{
    name: z.ZodString;
    geo_zones: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        country_code: z.ZodString;
        type: z.ZodLiteral<"country">;
    }, "strip", z.ZodTypeAny, {
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
    }, {
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
    }>, z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        country_code: z.ZodString;
        type: z.ZodLiteral<"province">;
        province_code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    }, {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    }>, z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        country_code: z.ZodString;
        type: z.ZodLiteral<"city">;
        province_code: z.ZodString;
        city: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    }, {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    }>, z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        country_code: z.ZodString;
        type: z.ZodLiteral<"zip">;
        province_code: z.ZodString;
        city: z.ZodString;
        postal_expression: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
    }, {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
    }>]>, "many">>;
}, "strict", z.ZodTypeAny, {
    name: string;
    geo_zones?: ({
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
    } | {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    } | {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    } | {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
    })[] | undefined;
}, {
    name: string;
    geo_zones?: ({
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
    } | {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    } | {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
    } | {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
    })[] | undefined;
}>;
export declare const AdminUpdateFulfillmentSetServiceZonesSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    geo_zones: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        country_code: z.ZodString;
        type: z.ZodLiteral<"country">;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }, {
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }>, z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        country_code: z.ZodString;
        type: z.ZodLiteral<"province">;
        province_code: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }, {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }>, z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        city: z.ZodString;
        country_code: z.ZodString;
        type: z.ZodLiteral<"city">;
        province_code: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }, {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }>, z.ZodObject<{
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        city: z.ZodString;
        country_code: z.ZodString;
        type: z.ZodLiteral<"zip">;
        province_code: z.ZodString;
        postal_expression: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }, {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    }>]>, "many">>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    geo_zones?: ({
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    } | {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    } | {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    } | {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    })[] | undefined;
}, {
    name?: string | undefined;
    geo_zones?: ({
        country_code: string;
        type: "country";
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    } | {
        country_code: string;
        type: "province";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    } | {
        city: string;
        country_code: string;
        type: "city";
        province_code: string;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    } | {
        city: string;
        country_code: string;
        type: "zip";
        province_code: string;
        postal_expression: Record<string, unknown>;
        metadata?: Record<string, unknown> | undefined;
        id?: string | undefined;
    })[] | undefined;
}>;
export declare const AdminFulfillmentSetParams: z.ZodObject<{
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    type: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    service_zone_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    created_at: z.ZodOptional<z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>>;
    updated_at: z.ZodOptional<z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>>;
    deleted_at: z.ZodOptional<z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    order?: string | undefined;
    fields?: string | undefined;
    id?: string | string[] | undefined;
    name?: string | string[] | undefined;
    type?: string | string[] | undefined;
    service_zone_id?: string | string[] | undefined;
    created_at?: {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    } | undefined;
    updated_at?: {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    } | undefined;
    deleted_at?: {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    } | undefined;
}, {
    order?: string | undefined;
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    id?: string | string[] | undefined;
    name?: string | string[] | undefined;
    type?: string | string[] | undefined;
    service_zone_id?: string | string[] | undefined;
    created_at?: {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    } | undefined;
    updated_at?: {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    } | undefined;
    deleted_at?: {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    } | undefined;
}>;
export type AdminCreateFulfillmentSetServiceZonesType = z.infer<typeof AdminCreateFulfillmentSetServiceZonesSchema>;
export type AdminUpdateFulfillmentSetServiceZonesType = z.infer<typeof AdminUpdateFulfillmentSetServiceZonesSchema>;
export type AdminFulfillmentSetParamsType = z.infer<typeof AdminFulfillmentSetParams>;
