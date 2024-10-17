import { MoneyAmount, ProductVariant } from "../models";
import { PriceListPriceCreateInput, PriceListPriceUpdateInput } from "../types/price-list";
import { ProductVariantPrice } from "../types/product-variant";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
type Price = Partial<Omit<MoneyAmount, "created_at" | "updated_at" | "deleted_at">> & {
    amount: number;
};
export declare const MoneyAmountRepository: import("typeorm").Repository<MoneyAmount> & {
    insertBulk(data: QueryDeepPartialEntity<MoneyAmount>[]): Promise<MoneyAmount[]>;
    /**
     * Will be removed in a future release.
     * Use `deleteVariantPricesNotIn` instead.
     * @deprecated
     */
    findVariantPricesNotIn(variantId: string, prices: Price[]): Promise<MoneyAmount[]>;
    deleteVariantPricesNotIn(variantIdOrData: string | {
        variantId: string;
        prices: ProductVariantPrice[];
    }[], prices?: Price[]): Promise<void>;
    upsertVariantCurrencyPrice(variantId: string, price: Price): Promise<MoneyAmount>;
    addPriceListPrices(priceListId: string, prices: PriceListPriceCreateInput[], overrideExisting?: boolean): Promise<MoneyAmount[]>;
    deletePriceListPrices(priceListId: string, moneyAmountIds: string[]): Promise<void>;
    findManyForVariantInPriceList(variant_id: string, price_list_id: string, requiresPriceList?: boolean): Promise<[MoneyAmount[], number]>;
    /**
     * @deprecated in favor of {@link findManyForVariantsInRegion}
     * @param variant_id
     * @param region_id
     * @param currency_code
     * @param customer_id
     * @param include_discount_prices
     * @param include_tax_inclusive_pricing
     */
    findManyForVariantInRegion(variant_id: string, region_id?: string, currency_code?: string, customer_id?: string, include_discount_prices?: boolean, include_tax_inclusive_pricing?: boolean): Promise<[MoneyAmount[], number]>;
    findCurrencyMoneyAmounts(where: {
        variant_id: string;
        currency_code: string;
    }[]): Promise<{
        variant_id: any;
        currency_code: string;
        currency?: import("../models").Currency | undefined;
        amount: number;
        min_quantity: number | null;
        max_quantity: number | null;
        price_list_id: string | null;
        price_list: import("../models").PriceList | null;
        variants: ProductVariant[];
        variant: ProductVariant;
        region_id: string | null;
        region?: import("../models").Region | undefined;
        deleted_at: Date | null;
        id: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findRegionMoneyAmounts(where: {
        variant_id: string;
        region_id: string;
    }[]): Promise<{
        variant_id: any;
        currency_code: string;
        currency?: import("../models").Currency | undefined;
        amount: number;
        min_quantity: number | null;
        max_quantity: number | null;
        price_list_id: string | null;
        price_list: import("../models").PriceList | null;
        variants: ProductVariant[];
        variant: ProductVariant;
        region_id: string | null;
        region?: import("../models").Region | undefined;
        deleted_at: Date | null;
        id: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findManyForVariantsInRegion(variant_ids: string | string[], region_id?: string, currency_code?: string, customer_id?: string, include_discount_prices?: boolean, include_tax_inclusive_pricing?: boolean): Promise<[Record<string, MoneyAmount[]>, number]>;
    updatePriceListPrices(priceListId: string, updates: PriceListPriceUpdateInput[]): Promise<MoneyAmount[]>;
    getPricesForVariantInRegion(variantId: string, regionId: string | undefined): Promise<MoneyAmount[]>;
    createProductVariantMoneyAmounts(toCreate: {
        variant_id: string;
        money_amount_id: string;
    }[]): Promise<import("typeorm").InsertResult>;
};
export default MoneyAmountRepository;
