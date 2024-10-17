import { z } from "zod";
export declare const geoZoneCountrySchema: z.ZodObject<{
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
}>;
export declare const geoZoneProvinceSchema: z.ZodObject<{
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
}>;
export declare const geoZoneCitySchema: z.ZodObject<{
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
}>;
export declare const geoZoneZipSchema: z.ZodObject<{
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
}>;
