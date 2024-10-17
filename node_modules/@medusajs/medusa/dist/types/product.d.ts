import { PriceList, Product, ProductCategory, ProductOptionValue, ProductStatus, SalesChannel } from "../models";
import { DateComparisonOperator, FindConfig, Selector } from "./common";
import { FindOperator } from "typeorm";
import { PriceListLoadConfig } from "./price-list";
/**
 * Filters to apply on retrieved products.
 */
export declare class FilterableProductProps {
    /**
     * IDs to filter products by.
     */
    id?: string | string[];
    /**
     * Search term to search products' title, description, variants' title and sku, and collections' title.
     */
    q?: string;
    /**
     * Statuses to filter products by.
     */
    status?: ProductStatus[];
    /**
     * Filter products by their associated price lists' ID.
     */
    price_list_id?: string[];
    /**
     * Filter products by their associated product collection's ID.
     */
    collection_id?: string[];
    /**
     * Filter products by their associated tags' value.
     */
    tags?: string[];
    /**
     * Title to filter products by.
     */
    title?: string;
    /**
     * Description to filter products by.
     */
    description?: string;
    /**
     * Handle to filter products by.
     */
    handle?: string;
    /**
     * Filter products by whether they're gift cards.
     */
    is_giftcard?: boolean;
    /**
     * Filter products by their associated product type's ID.
     */
    type_id?: string[];
    /**
     * Filter products by their associated sales channels' ID.
     */
    sales_channel_id?: string[];
    /**
     * Filter products by their associated discount condition's ID.
     */
    discount_condition_id?: string;
    /**
     * Filter products by their associated product category's ID.
     */
    category_id?: string[];
    /**
     * Whether to include product category children in the response.
     *
     * @featureFlag product_categories
     */
    include_category_children?: boolean;
    /**
     * Date filters to apply on the products' `created_at` date.
     */
    created_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the products' `updated_at` date.
     */
    updated_at?: DateComparisonOperator;
    /**
     * Date filters to apply on the products' `deleted_at` date.
     */
    deleted_at?: DateComparisonOperator;
}
export type ProductSelector = FilterableProductProps | (Selector<Product> & {
    q?: string;
    discount_condition_id?: string;
    price_list_id?: string[] | FindOperator<PriceList>;
    sales_channel_id?: string[] | FindOperator<SalesChannel>;
    category_id?: string[] | FindOperator<ProductCategory>;
});
/**
 * Service Level DTOs
 */
export type CreateProductInput = {
    title: string;
    subtitle?: string;
    profile_id?: string;
    description?: string;
    is_giftcard?: boolean;
    discountable?: boolean;
    images?: string[];
    thumbnail?: string;
    handle?: string;
    status?: ProductStatus;
    type?: CreateProductProductTypeInput;
    collection_id?: string;
    tags?: CreateProductProductTagInput[];
    options?: CreateProductProductOption[];
    variants?: CreateProductProductVariantInput[];
    sales_channels?: CreateProductProductSalesChannelInput[] | null;
    categories?: CreateProductProductCategoryInput[] | null;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    hs_code?: string;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    external_id?: string | null;
};
export type CreateProductProductTagInput = {
    id?: string;
    value: string;
};
export type CreateProductProductSalesChannelInput = {
    id: string;
};
export type CreateProductProductCategoryInput = {
    id: string;
};
export type CreateProductProductTypeInput = {
    id?: string;
    value: string;
};
export type CreateProductProductVariantInput = {
    title: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: CreateProductProductVariantPriceInput[];
    options?: {
        value: string;
    }[];
};
export type UpdateProductProductVariantDTO = {
    id?: string;
    title?: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: CreateProductProductVariantPriceInput[];
    options?: {
        value: string;
        option_id: string;
    }[];
};
export type CreateProductProductOption = {
    title: string;
};
export type CreateProductProductVariantPriceInput = {
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
};
export type UpdateProductInput = Omit<Partial<CreateProductInput>, "variants"> & {
    variants?: UpdateProductProductVariantDTO[];
};
export type ProductOptionInput = {
    title: string;
    values?: ProductOptionValue[];
};
export type FindProductConfig = FindConfig<Product> & PriceListLoadConfig;
export declare class ProductSalesChannelReq {
    id: string;
}
export declare class ProductProductCategoryReq {
    id: string;
}
export declare class ProductTagReq {
    id?: string;
    value: string;
}
/**
 * The details of a product type, used to create or update an existing product type.
 */
export declare class ProductTypeReq {
    /**
     * The ID of the product type. It's only required when referring to an existing product type.
     */
    id?: string;
    /**
     * The value of the product type.
     */
    value: string;
}
export type ProductFilterOptions = {
    price_list_id?: FindOperator<PriceList>;
    sales_channel_id?: FindOperator<SalesChannel>;
    category_id?: FindOperator<ProductCategory>;
    include_category_children?: boolean;
    discount_condition_id?: string;
};
