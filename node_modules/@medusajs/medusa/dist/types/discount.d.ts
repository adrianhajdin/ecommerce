import { AllocationType, DiscountConditionOperator, DiscountRuleType, Region } from "../models";
import { DateComparisonOperator } from "./common";
export type QuerySelector = {
    q?: string;
};
/**
 * Filters to apply on discounts' rules.
 */
export declare class AdminGetDiscountsDiscountRuleParams {
    /**
     * Type to filter discount rules by.
     */
    type?: DiscountRuleType;
    /**
     * Allocation to filter discount rules by.
     */
    allocation?: AllocationType;
}
export declare class FilterableDiscountProps {
    q?: string;
    id?: string | string[];
    is_dynamic?: boolean;
    is_disabled?: boolean;
    rule?: AdminGetDiscountsDiscountRuleParams;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
/**
 * Fields to create or update a discount condition.
 */
export declare class AdminUpsertConditionsReq {
    /**
     * The products associated with the discount condition, if the discount condition's type is `products`.
     */
    products?: string[];
    /**
     * The product collections associated with the discount condition, if the discount condition's type is `product_collections`.
     */
    product_collections?: string[];
    /**
     * The product types associated with the discount condition, if the discount condition's type is `product_types`.
     */
    product_types?: string[];
    /**
     * The product tags associated with the discount condition, if the discount condition's type is `product_tags`.
     */
    product_tags?: string[];
    /**
     * The customer groups associated with the discount condition, if the discount condition's type is `customer_groups`.
     */
    customer_groups?: string[];
}
export declare const DiscountConditionMapTypeToProperty: {
    products: string;
    product_types: string;
    product_collections: string;
    product_tags: string;
    customer_groups: string;
};
export type DiscountConditionInput = {
    rule_id?: string;
    id?: string;
    operator?: DiscountConditionOperator;
    products?: (string | {
        id: string;
    })[];
    product_collections?: (string | {
        id: string;
    })[];
    product_types?: (string | {
        id: string;
    })[];
    product_tags?: (string | {
        id: string;
    })[];
    customer_groups?: (string | {
        id: string;
    })[];
};
export type CreateDiscountRuleInput = {
    description?: string;
    type: DiscountRuleType;
    value: number;
    allocation: AllocationType;
    conditions?: DiscountConditionInput[];
};
export type CreateDiscountInput = {
    code: string;
    rule: CreateDiscountRuleInput;
    is_dynamic: boolean;
    is_disabled: boolean;
    starts_at?: Date;
    ends_at?: Date;
    valid_duration?: string;
    usage_limit?: number;
    regions?: string[] | Region[];
    metadata?: Record<string, unknown>;
};
export type UpdateDiscountRuleInput = {
    id: string;
    description?: string;
    value?: number;
    allocation?: AllocationType;
    conditions?: DiscountConditionInput[];
};
export type UpdateDiscountInput = {
    code?: string;
    rule?: UpdateDiscountRuleInput;
    is_disabled?: boolean;
    starts_at?: Date;
    ends_at?: Date | null;
    valid_duration?: string | null;
    usage_limit?: number | null;
    regions?: string[];
    metadata?: Record<string, unknown>;
};
export type CreateDynamicDiscountInput = {
    code: string;
    ends_at?: Date;
    usage_limit: number;
    metadata?: Record<string, unknown>;
};
