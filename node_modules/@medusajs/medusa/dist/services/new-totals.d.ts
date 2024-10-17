import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { ITaxCalculationStrategy, TaxCalculationContext, TransactionBaseService } from "../interfaces";
import { Discount, GiftCard, LineItem, LineItemTaxLine, Region, ShippingMethod, ShippingMethodTaxLine } from "../models";
import { LineAllocationsMap } from "../types/totals";
import { TaxProviderService } from "./index";
type LineItemTotals = {
    unit_price: number;
    quantity: number;
    subtotal: number;
    tax_total: number;
    total: number;
    original_total: number;
    original_tax_total: number;
    tax_lines: LineItemTaxLine[];
    discount_total: number;
    raw_discount_total: number;
};
type GiftCardTransaction = {
    tax_rate: number | null;
    is_taxable: boolean | null;
    amount: number;
    gift_card: GiftCard;
};
type ShippingMethodTotals = {
    price: number;
    tax_total: number;
    total: number;
    subtotal: number;
    original_total: number;
    original_tax_total: number;
    tax_lines: ShippingMethodTaxLine[];
};
type InjectedDependencies = {
    manager: EntityManager;
    taxProviderService: TaxProviderService;
    taxCalculationStrategy: ITaxCalculationStrategy;
    featureFlagRouter: FlagRouter;
};
export default class NewTotalsService extends TransactionBaseService {
    protected readonly taxProviderService_: TaxProviderService;
    protected readonly featureFlagRouter_: FlagRouter;
    protected readonly taxCalculationStrategy_: ITaxCalculationStrategy;
    constructor({ taxProviderService, featureFlagRouter, taxCalculationStrategy, }: InjectedDependencies);
    /**
     * Calculate and return the items totals for either the legacy calculation or the new calculation
     * @param items
     * @param param1
     */
    getLineItemTotals(items: LineItem | LineItem[], { includeTax, calculationContext, taxRate, }: {
        includeTax?: boolean;
        calculationContext: TaxCalculationContext;
        taxRate?: number | null;
    }): Promise<{
        [lineItemId: string]: LineItemTotals;
    }>;
    /**
     * Calculate and return the totals for an item
     * @param item
     * @param param1
     * @returns
     */
    protected getLineItemTotals_(item: LineItem, { includeTax, lineItemAllocation, 
    /**
     * Only needed to force the usage of the specified tax lines, often in the case where the item does not hold the tax lines
     */
    taxLines, calculationContext, }: {
        includeTax?: boolean;
        lineItemAllocation: LineAllocationsMap[number];
        taxLines?: LineItemTaxLine[];
        calculationContext: TaxCalculationContext;
    }): Promise<LineItemTotals>;
    /**
     * Calculate and return the legacy calculated totals using the tax rate
     * @param item
     * @param param1
     */
    protected getLineItemTotalsLegacy(item: LineItem, { taxRate, lineItemAllocation, calculationContext, }: {
        lineItemAllocation: LineAllocationsMap[number];
        calculationContext: TaxCalculationContext;
        taxRate: number;
    }): Promise<LineItemTotals>;
    /**
     * Return the amount that can be refund on a line item
     * @param lineItem
     * @param param1
     */
    getLineItemRefund(lineItem: {
        id: string;
        unit_price: number;
        includes_tax: boolean;
        quantity: number;
        tax_lines: LineItemTaxLine[];
    }, { calculationContext, taxRate, }: {
        calculationContext: TaxCalculationContext;
        taxRate?: number | null;
    }): number;
    /**
     * @param lineItem
     * @param param1
     * @protected
     */
    protected getLineItemRefundLegacy(lineItem: {
        id: string;
        unit_price: number;
        includes_tax: boolean;
        quantity: number;
    }, { calculationContext, taxRate, }: {
        calculationContext: TaxCalculationContext;
        taxRate: number;
    }): number;
    /**
     * Calculate and return the gift cards totals
     * @param giftCardableAmount
     * @param param1
     */
    getGiftCardTotals(giftCardableAmount: number, { giftCardTransactions, region, giftCards, }: {
        region: Region;
        giftCardTransactions?: GiftCardTransaction[];
        giftCards?: GiftCard[];
    }): Promise<{
        total: number;
        tax_total: number;
    }>;
    /**
     * Calculate and return the gift cards totals based on their transactions
     * @param param0
     */
    getGiftCardTransactionsTotals({ giftCardTransactions, region, }: {
        giftCardTransactions: GiftCardTransaction[];
        region: {
            gift_cards_taxable: boolean;
            tax_rate: number;
        };
    }): {
        total: number;
        tax_total: number;
    };
    /**
     * Calculate and return the shipping methods totals for either the legacy calculation or the new calculation
     * @param shippingMethods
     * @param param1
     */
    getShippingMethodTotals(shippingMethods: ShippingMethod | ShippingMethod[], { includeTax, discounts, taxRate, calculationContext, }: {
        includeTax?: boolean;
        calculationContext: TaxCalculationContext;
        discounts?: Discount[];
        taxRate?: number | null;
    }): Promise<{
        [shippingMethodId: string]: ShippingMethodTotals;
    }>;
    getGiftCardableAmount({ gift_cards_taxable, subtotal, shipping_total, discount_total, tax_total, }: {
        gift_cards_taxable?: boolean;
        subtotal: number;
        shipping_total: number;
        discount_total: number;
        tax_total: number;
    }): number;
    /**
     * Calculate and return the shipping method totals
     * @param shippingMethod
     * @param param1
     */
    protected getShippingMethodTotals_(shippingMethod: ShippingMethod, { includeTax, calculationContext, taxLines, discounts, }: {
        includeTax?: boolean;
        calculationContext: TaxCalculationContext;
        taxLines?: ShippingMethodTaxLine[];
        discounts?: Discount[];
    }): Promise<ShippingMethodTotals>;
    /**
     * Calculate and return the shipping method totals legacy using the tax rate
     * @param shippingMethod
     * @param param1
     */
    protected getShippingMethodTotalsLegacy(shippingMethod: ShippingMethod, { calculationContext, discounts, taxRate, }: {
        calculationContext: TaxCalculationContext;
        discounts?: Discount[];
        taxRate: number;
    }): Promise<ShippingMethodTotals>;
}
export {};
