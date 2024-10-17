import { IPricingModuleService, RemoteQueryFunction } from "@medusajs/types";
import { FlagRouter } from "@medusajs/utils";
import { CustomerService, ProductVariantService, RegionService, TaxProviderService } from ".";
import { IPriceSelectionStrategy, PriceSelectionContext } from "../interfaces/price-selection-strategy";
import { Product, ProductVariant, ShippingOption } from "../models";
import { PricedProduct, PricedShippingOption, PricedVariant, PricingContext, ProductVariantPricing, TaxedPricing } from "../types/pricing";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { TaxServiceRate } from "../types/tax-service";
type InjectedDependencies = {
    manager: EntityManager;
    productVariantService: ProductVariantService;
    taxProviderService: TaxProviderService;
    regionService: RegionService;
    customerService: CustomerService;
    priceSelectionStrategy: IPriceSelectionStrategy;
    featureFlagRouter: FlagRouter;
    remoteQuery: RemoteQueryFunction;
    pricingModuleService: IPricingModuleService;
};
/**
 * Allows retrieval of prices.
 */
declare class PricingService extends TransactionBaseService {
    protected readonly regionService: RegionService;
    protected readonly taxProviderService: TaxProviderService;
    protected readonly customerService_: CustomerService;
    protected readonly priceSelectionStrategy: IPriceSelectionStrategy;
    protected readonly productVariantService: ProductVariantService;
    protected readonly featureFlagRouter: FlagRouter;
    protected get pricingModuleService(): IPricingModuleService;
    protected get remoteQuery(): RemoteQueryFunction;
    constructor({ productVariantService, taxProviderService, regionService, priceSelectionStrategy, featureFlagRouter, customerService, }: InjectedDependencies);
    /**
     * Collects additional information necessary for completing the price
     * selection.
     * @param context - the price selection context to use
     * @return The pricing context
     */
    collectPricingContext(context: PriceSelectionContext): Promise<PricingContext>;
    /**
     * Gets the prices for a product variant
     * @param variantPricing - the prices retrieved from a variant
     * @param productRates - the tax rates that the product has applied
     * @return The tax related variant prices.
     */
    calculateTaxes(variantPricing: ProductVariantPricing, productRates: TaxServiceRate[]): TaxedPricing;
    private getProductVariantPricing_;
    /**
     * Gets the prices for a product variant.
     * @param variant
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    getProductVariantPricing(variant: Pick<ProductVariant, "id" | "product_id">, context: PriceSelectionContext | PricingContext): Promise<ProductVariantPricing>;
    /**
     * Gets the prices for a product variant by a variant id.
     * @param variantId - the id of the variant to get prices for
     * @param context - the price selection context to use
     * @return The product variant prices
     * @deprecated Use {@link getProductVariantsPricing} instead.
     */
    getProductVariantPricingById(variantId: string, context: PriceSelectionContext | PricingContext): Promise<ProductVariantPricing>;
    /**
     * Gets the prices for a collection of variants.
     * @param data
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    getProductVariantsPricing(data: {
        variantId: string;
        quantity?: number;
    }[], context: PriceSelectionContext | PricingContext): Promise<{
        [variant_id: string]: ProductVariantPricing;
    }>;
    private getProductPricing_;
    /**
     * Gets all the variant prices for a product. All the product's variants will
     * be fetched.
     * @param product - the product to get pricing for.
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    getProductPricing(product: Pick<Product, "id" | "variants">, context: PriceSelectionContext): Promise<Record<string, ProductVariantPricing>>;
    /**
     * Gets all the variant prices for a product by the product id
     * @param productId - the id of the product to get prices for
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    getProductPricingById(productId: string, context: PriceSelectionContext): Promise<Record<string, ProductVariantPricing>>;
    /**
     * Set additional prices on a list of product variants.
     * @param variants
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    setVariantPrices(variants: ProductVariant[], context?: PriceSelectionContext): Promise<PricedVariant[]>;
    /**
     * Set additional prices on a list of products.
     * @param products - list of products on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    setProductPrices(products: Product[], context?: PriceSelectionContext): Promise<(Product | PricedProduct)[]>;
    setAdminVariantPricing(variants: ProductVariant[], context?: PriceSelectionContext): Promise<PricedVariant[]>;
    setAdminProductPricing(products: Product[]): Promise<(Product | PricedProduct)[]>;
    /**
     * Gets the prices for a shipping option.
     * @param shippingOption - the shipping option to get prices for
     * @param context - the price selection context to use
     * @return The shipping option prices
     */
    getShippingOptionPricing(shippingOption: ShippingOption, context: PriceSelectionContext | PricingContext): Promise<PricedShippingOption>;
    /**
     * Set additional prices on a list of shipping options.
     * @param shippingOptions - list of shipping options on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of shipping options with prices
     */
    setShippingOptionPrices(shippingOptions: ShippingOption[], context?: Omit<PriceSelectionContext, "region_id">): Promise<PricedShippingOption[]>;
}
export default PricingService;
