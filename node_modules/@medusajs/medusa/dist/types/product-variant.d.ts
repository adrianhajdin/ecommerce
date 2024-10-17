import { DateComparisonOperator, NumericalComparisonOperator, StringComparisonOperator, WithRequiredProperty } from "./common";
import { ProductVariant } from "../models";
export type ProductVariantPrice = {
    id?: string;
    currency_code?: string;
    region_id?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
};
export type GetRegionPriceContext = {
    regionId: string;
    quantity?: number;
    customer_id?: string;
    include_discount_prices?: boolean;
};
export type ProductVariantOption = {
    option_id: string;
    value: string;
};
export type CreateProductVariantInput = {
    title?: string;
    product_id?: string;
    sku?: string;
    barcode?: string;
    ean?: string;
    upc?: string;
    variant_rank?: number;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    hs_code?: string;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    options: ProductVariantOption[];
    prices: ProductVariantPrice[];
    metadata?: Record<string, unknown>;
};
export type UpdateProductVariantInput = {
    title?: string;
    product_id?: string;
    sku?: string;
    barcode?: string;
    ean?: string;
    upc?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    hs_code?: string;
    origin_country?: string;
    variant_rank?: number;
    mid_code?: string;
    material?: string;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    options?: ProductVariantOption[];
    prices?: ProductVariantPrice[];
    metadata?: Record<string, unknown>;
};
export type UpdateProductVariantData = {
    variant: ProductVariant;
    updateData: UpdateProductVariantInput;
};
export type UpdateVariantPricesData = {
    variantId: string;
    prices: ProductVariantPrice[];
};
export type UpdateVariantRegionPriceData = {
    variantId: string;
    price: {
        currency_code: string;
        region_id: string;
        amount: number;
    };
};
export type UpdateVariantCurrencyPriceData = {
    variantId: string;
    price: WithRequiredProperty<ProductVariantPrice, "currency_code">;
};
export declare class FilterableProductVariantProps {
    id?: string | string[] | StringComparisonOperator;
    title?: string | string[];
    product_id?: string | string[];
    sku?: string | string[];
    barcode?: string | string[];
    ean?: string | string[];
    upc?: string;
    inventory_quantity?: number | NumericalComparisonOperator;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    hs_code?: string | string[];
    origin_country?: string | string[];
    mid_code?: string | string[];
    material?: string;
    weight?: number | NumericalComparisonOperator;
    length?: number | NumericalComparisonOperator;
    height?: number | NumericalComparisonOperator;
    width?: number | NumericalComparisonOperator;
    q?: string;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
export declare class ProductVariantPricesUpdateReq {
    id?: string;
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
}
export declare class ProductVariantPricesCreateReq {
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
}
