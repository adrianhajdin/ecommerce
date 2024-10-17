import { PriceList } from "../models/price-list";
import { DateComparisonOperator } from "./common";
/**
 * @enum
 *
 * The type of price list.
 */
export declare enum PriceListType {
    /**
     * The price list is used for a sale.
     */
    SALE = "sale",
    /**
     * The price list is used to override original prices for specific conditions.
     */
    OVERRIDE = "override"
}
/**
 * @enum
 *
 * The status of a price list.
 */
export declare enum PriceListStatus {
    /**
     * The price list is active, meaning its prices are applied to customers.
     */
    ACTIVE = "active",
    /**
     * The price list is a draft, meaning its not yet applied to customers.
     */
    DRAFT = "draft"
}
/**
 * Filters to apply on the retrieved price lists.
 */
export declare class FilterablePriceListProps {
    /**
     * IDs to filter price lists by.
     */
    id?: string;
    /**
     * Search terms to search price lists' description, name, and customer group's name.
     */
    q?: string;
    /**
     * Statuses to filter price lists by.
     */
    status?: PriceListStatus[];
    /**
     * Name to filter price lists by.
     */
    name?: string;
    /**
     * Filter price lists by their associated customer groups.
     */
    customer_groups?: string[];
    /**
     * Description to filter price lists by.
     */
    description?: string;
    /**
     * Types to filter price lists by.
     */
    type?: PriceListType[];
    /**
     * Date filters to apply on the price lists' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the price lists' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the price lists' `deleted_at` date.
     */
    deleted_at?: DateComparisonOperator;
}
export declare class AdminPriceListPricesUpdateReq {
    id?: string;
    region_id?: string;
    currency_code?: string;
    variant_id: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
}
export declare class AdminPriceListPricesCreateReq {
    region_id?: string;
    currency_code?: string;
    amount: number;
    variant_id: string;
    min_quantity?: number;
    max_quantity?: number;
}
export type CreatePriceListInput = {
    name: string;
    description: string;
    type: PriceListType;
    status?: PriceListStatus;
    prices: AdminPriceListPricesCreateReq[];
    customer_groups?: {
        id: string;
    }[];
    starts_at?: Date;
    ends_at?: Date;
    includes_tax?: boolean;
};
export type UpdatePriceListInput = Partial<Pick<PriceList, "name" | "description" | "starts_at" | "ends_at" | "status" | "type" | "includes_tax">> & {
    prices?: AdminPriceListPricesUpdateReq[];
    customer_groups?: {
        id: string;
    }[];
};
export type PriceListPriceUpdateInput = {
    id?: string;
    variant_id?: string;
    region_id?: string;
    currency_code?: string;
    amount?: number;
    min_quantity?: number;
    max_quantity?: number;
};
export type PriceListPriceCreateInput = {
    region_id?: string;
    currency_code?: string;
    variant_id: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
};
export type PriceListLoadConfig = {
    include_discount_prices?: boolean;
    customer_id?: string;
    cart_id?: string;
    region_id?: string;
    currency_code?: string;
};
