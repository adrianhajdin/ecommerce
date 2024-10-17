import { RuleOperator, ShippingOptionPriceType as ShippingOptionPriceTypeEnum } from "@medusajs/utils";
import { z } from "zod";
export type AdminGetShippingOptionParamsType = z.infer<typeof AdminGetShippingOptionParams>;
export declare const AdminGetShippingOptionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetShippingOptionsParamsType = z.infer<typeof AdminGetShippingOptionsParams>;
export declare const AdminGetShippingOptionsParams: z.ZodObject<{
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
/**
 * SHIPPING OPTIONS RULES
 */
export type AdminGetShippingOptionRuleParamsType = z.infer<typeof AdminGetShippingOptionRuleParams>;
export declare const AdminGetShippingOptionRuleParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminCreateShippingOptionRuleType = z.infer<typeof AdminCreateShippingOptionRule>;
export declare const AdminCreateShippingOptionRule: z.ZodObject<{
    operator: z.ZodNativeEnum<typeof RuleOperator>;
    attribute: z.ZodString;
    value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
}, "strict", z.ZodTypeAny, {
    value: (string | string[]) & (string | string[] | undefined);
    operator: RuleOperator;
    attribute: string;
}, {
    value: (string | string[]) & (string | string[] | undefined);
    operator: RuleOperator;
    attribute: string;
}>;
export type AdminUpdateShippingOptionRuleType = z.infer<typeof AdminUpdateShippingOptionRule>;
export declare const AdminUpdateShippingOptionRule: z.ZodObject<{
    id: z.ZodString;
    operator: z.ZodNativeEnum<typeof RuleOperator>;
    attribute: z.ZodString;
    value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
}, "strict", z.ZodTypeAny, {
    id: string;
    value: (string | string[]) & (string | string[] | undefined);
    operator: RuleOperator;
    attribute: string;
}, {
    id: string;
    value: (string | string[]) & (string | string[] | undefined);
    operator: RuleOperator;
    attribute: string;
}>;
/**
 * SHIPPING OPTIONS
 */
export declare const AdminCreateShippingOptionTypeObject: z.ZodObject<{
    label: z.ZodString;
    description: z.ZodString;
    code: z.ZodString;
}, "strict", z.ZodTypeAny, {
    code: string;
    description: string;
    label: string;
}, {
    code: string;
    description: string;
    label: string;
}>;
export declare const AdminCreateShippingOptionPriceWithCurrency: z.ZodObject<{
    currency_code: z.ZodString;
    amount: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    currency_code: string;
    amount: number;
}, {
    currency_code: string;
    amount: number;
}>;
export declare const AdminCreateShippingOptionPriceWithRegion: z.ZodObject<{
    region_id: z.ZodString;
    amount: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    region_id: string;
    amount: number;
}, {
    region_id: string;
    amount: number;
}>;
export declare const AdminUpdateShippingOptionPriceWithCurrency: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    currency_code: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    currency_code?: string | undefined;
    amount?: number | undefined;
}, {
    id?: string | undefined;
    currency_code?: string | undefined;
    amount?: number | undefined;
}>;
export declare const AdminUpdateShippingOptionPriceWithRegion: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    region_id: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    region_id?: string | undefined;
    amount?: number | undefined;
}, {
    id?: string | undefined;
    region_id?: string | undefined;
    amount?: number | undefined;
}>;
export type AdminCreateShippingOptionType = z.infer<typeof AdminCreateShippingOption>;
export declare const AdminCreateShippingOption: z.ZodObject<{
    name: z.ZodString;
    service_zone_id: z.ZodString;
    shipping_profile_id: z.ZodString;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    price_type: z.ZodNativeEnum<typeof ShippingOptionPriceTypeEnum>;
    provider_id: z.ZodString;
    type: z.ZodObject<{
        label: z.ZodString;
        description: z.ZodString;
        code: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        code: string;
        description: string;
        label: string;
    }, {
        code: string;
        description: string;
        label: string;
    }>;
    prices: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        currency_code: string;
        amount: number;
    }, {
        currency_code: string;
        amount: number;
    }>, z.ZodObject<{
        region_id: z.ZodString;
        amount: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        region_id: string;
        amount: number;
    }, {
        region_id: string;
        amount: number;
    }>]>, "many">;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof RuleOperator>;
        attribute: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }, {
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    name: string;
    type: {
        code: string;
        description: string;
        label: string;
    };
    prices: ({
        currency_code: string;
        amount: number;
    } | {
        region_id: string;
        amount: number;
    })[];
    provider_id: string;
    price_type: ShippingOptionPriceTypeEnum;
    shipping_profile_id: string;
    service_zone_id: string;
    data?: Record<string, unknown> | undefined;
    rules?: {
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }[] | undefined;
}, {
    name: string;
    type: {
        code: string;
        description: string;
        label: string;
    };
    prices: ({
        currency_code: string;
        amount: number;
    } | {
        region_id: string;
        amount: number;
    })[];
    provider_id: string;
    price_type: ShippingOptionPriceTypeEnum;
    shipping_profile_id: string;
    service_zone_id: string;
    data?: Record<string, unknown> | undefined;
    rules?: {
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }[] | undefined;
}>;
export type AdminUpdateShippingOptionType = z.infer<typeof AdminUpdateShippingOption>;
export declare const AdminUpdateShippingOption: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    price_type: z.ZodOptional<z.ZodNativeEnum<typeof ShippingOptionPriceTypeEnum>>;
    provider_id: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        description: z.ZodString;
        code: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        code: string;
        description: string;
        label: string;
    }, {
        code: string;
        description: string;
        label: string;
    }>>;
    prices: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        currency_code: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
    }, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        region_id: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        id?: string | undefined;
        region_id?: string | undefined;
        amount?: number | undefined;
    }, {
        id?: string | undefined;
        region_id?: string | undefined;
        amount?: number | undefined;
    }>]>, "many">>;
    rules: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        id: z.ZodString;
        operator: z.ZodNativeEnum<typeof RuleOperator>;
        attribute: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }, {
        id: string;
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }>, z.ZodObject<{
        operator: z.ZodNativeEnum<typeof RuleOperator>;
        attribute: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }, {
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    }>]>, "many">>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    data?: Record<string, unknown> | undefined;
    price_type?: ShippingOptionPriceTypeEnum | undefined;
    provider_id?: string | undefined;
    type?: {
        code: string;
        description: string;
        label: string;
    } | undefined;
    prices?: ({
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
    } | {
        id?: string | undefined;
        region_id?: string | undefined;
        amount?: number | undefined;
    })[] | undefined;
    rules?: ({
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    } | {
        id: string;
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    })[] | undefined;
}, {
    name?: string | undefined;
    data?: Record<string, unknown> | undefined;
    price_type?: ShippingOptionPriceTypeEnum | undefined;
    provider_id?: string | undefined;
    type?: {
        code: string;
        description: string;
        label: string;
    } | undefined;
    prices?: ({
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
    } | {
        id?: string | undefined;
        region_id?: string | undefined;
        amount?: number | undefined;
    })[] | undefined;
    rules?: ({
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    } | {
        id: string;
        value: (string | string[]) & (string | string[] | undefined);
        operator: RuleOperator;
        attribute: string;
    })[] | undefined;
}>;
