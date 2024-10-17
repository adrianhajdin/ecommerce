import { EntityManager } from "typeorm";
import { ITaxCalculationStrategy, TaxCalculationContext, TransactionBaseService } from "../interfaces";
import { Cart, ClaimOrder, Discount, DiscountRuleType, LineItem, LineItemTaxLine, Order, ShippingMethod, ShippingMethodTaxLine, Swap } from "../models";
import { CalculationContextData, LineAllocationsMap, LineDiscount, LineDiscountAmount, SubtotalOptions } from "../types/totals";
import { NewTotalsService, TaxProviderService } from "./index";
import { FlagRouter } from "@medusajs/utils";
type ShippingMethodTotals = {
    price: number;
    tax_total: number;
    total: number;
    subtotal: number;
    original_total: number;
    original_tax_total: number;
    tax_lines: ShippingMethodTaxLine[];
};
type GetShippingMethodTotalsOptions = {
    include_tax?: boolean;
    use_tax_lines?: boolean;
    calculation_context?: TaxCalculationContext;
};
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
type LineItemTotalsOptions = {
    include_tax?: boolean;
    use_tax_lines?: boolean;
    exclude_gift_cards?: boolean;
    calculation_context?: TaxCalculationContext;
};
type GetLineItemTotalOptions = {
    include_tax?: boolean;
    exclude_discounts?: boolean;
};
type TotalsServiceProps = {
    taxProviderService: TaxProviderService;
    newTotalsService: NewTotalsService;
    taxCalculationStrategy: ITaxCalculationStrategy;
    manager: EntityManager;
    featureFlagRouter: FlagRouter;
};
type GetTotalsOptions = {
    exclude_gift_cards?: boolean;
    force_taxes?: boolean;
};
type AllocationMapOptions = {
    exclude_gift_cards?: boolean;
    exclude_discounts?: boolean;
};
type CalculationContextOptions = {
    is_return?: boolean;
    exclude_shipping?: boolean;
    exclude_gift_cards?: boolean;
    exclude_discounts?: boolean;
};
/**
 * A service that calculates total and subtotals for orders, carts etc..
 * @implements {BaseService}
 */
declare class TotalsService extends TransactionBaseService {
    protected readonly taxProviderService_: TaxProviderService;
    protected readonly newTotalsService_: NewTotalsService;
    protected readonly taxCalculationStrategy_: ITaxCalculationStrategy;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ taxProviderService, newTotalsService, taxCalculationStrategy, featureFlagRouter, }: TotalsServiceProps);
    /**
     * Calculates total of a given cart or order.
     * @param cartOrOrder - object to calculate total for
     * @param options - options to calculate by
     * @return the calculated subtotal
     */
    getTotal(cartOrOrder: Cart | Order, options?: GetTotalsOptions): Promise<number>;
    /**
     * Gets the total payments made on an order
     * @param order - the order to calculate paid amount for
     * @return the total paid amount
     */
    getPaidTotal(order: Order): number;
    /**
     * The total paid for swaps. May be negative in case of negative swap
     * difference.
     * @param order - the order to calculate swap total for
     * @return the swap total
     */
    getSwapTotal(order: Order): number;
    /**
     * Gets the totals breakdown for a shipping method. Fetches tax lines if not
     * already provided.
     * @param shippingMethod - the shipping method to get totals breakdown for.
     * @param cartOrOrder - the cart or order to use as context for the breakdown
     * @param opts - options for what should be included
     * @returns An object that breaks down the totals for the shipping method
     */
    getShippingMethodTotals(shippingMethod: ShippingMethod, cartOrOrder: Cart | Order, opts?: GetShippingMethodTotalsOptions): Promise<ShippingMethodTotals>;
    /**
     * Calculates subtotal of a given cart or order.
     * @param cartOrOrder - cart or order to calculate subtotal for
     * @param opts - options
     * @return the calculated subtotal
     */
    getSubtotal(cartOrOrder: Cart | Order, opts?: SubtotalOptions): Promise<number>;
    /**
     * Calculates shipping total
     * @param cartOrOrder - cart or order to calculate subtotal for
     * @return shipping total
     */
    getShippingTotal(cartOrOrder: Cart | Order): Promise<number>;
    /**
     * Calculates tax total
     * Currently based on the Danish tax system
     * @param cartOrOrder - cart or order to calculate tax total for
     * @param forceTaxes - whether taxes should be calculated regardless
     *   of region settings
     * @return tax total
     */
    getTaxTotal(cartOrOrder: Cart | Order, forceTaxes?: boolean): Promise<number | null>;
    /**
     * Gets a map of discounts and gift cards that apply to line items in an
     * order. The function calculates the amount of a discount or gift card that
     * applies to a specific line item.
     * @param orderOrCart - the order or cart to get an allocation map for
     * @param options - controls what should be included in allocation map
     * @return the allocation map for the line items in the cart or order.
     */
    getAllocationMap(orderOrCart: {
        discounts?: Discount[];
        items: LineItem[];
        swaps?: Swap[];
        claims?: ClaimOrder[];
    }, options?: AllocationMapOptions): Promise<LineAllocationsMap>;
    /**
     * Gets the total refund amount for an order.
     * @param order - the order to get total refund amount for.
     * @return the total refunded amount for an order.
     */
    getRefundedTotal(order: Order): number;
    /**
     * The amount that can be refunded for a given line item.
     * @param order - order to use as context for the calculation
     * @param lineItem - the line item to calculate the refund amount for.
     * @return the line item refund amount.
     */
    getLineItemRefund(order: Order, lineItem: LineItem): Promise<number>;
    /**
     * Calculates refund total of line items.
     * If any of the items to return have been discounted, we need to
     * apply the discount again before refunding them.
     * @param order - cart or order to calculate subtotal for
     * @param lineItems - the line items to calculate refund total for
     * @return the calculated subtotal
     */
    getRefundTotal(order: Order, lineItems: LineItem[]): Promise<number>;
    /**
     * Calculates either fixed or percentage discount of a variant
     * @param lineItem - id of line item
     * @param variant - id of variant in line item
     * @param variantPrice - price of the variant based on region
     * @param value - discount value
     * @param discountType - the type of discount (fixed or percentage)
     * @return triples of lineitem, variant and applied discount
     * @deprecated - in favour of DiscountService.calculateDiscountForLineItem
     */
    calculateDiscount_(lineItem: LineItem, variant: string, variantPrice: number, value: number, discountType: DiscountRuleType): LineDiscount;
    /**
     * If the rule of a discount has allocation="item", then we need
     * to calculate discount on each item in the cart. Furthermore, we need to
     * make sure to only apply the discount on valid variants. And finally we
     * return ether an array of percentages discounts or fixed discounts
     * alongside the variant on which the discount was applied.
     * @param discount - the discount to which we do the calculation
     * @param cart - the cart to calculate discounts for
     * @return array of triples of lineitem, variant and applied discount
     */
    getAllocationItemDiscounts(discount: Discount, cart: Cart | Order): LineDiscount[];
    getLineItemDiscountAdjustment(lineItem: LineItem, discount: Discount): number;
    getLineItemAdjustmentsTotal(cartOrOrder: Cart | Order): number;
    /**
     * Returns the discount amount allocated to the line items of an order.
     * @param cartOrOrder - the cart or order to get line discount allocations for
     * @param discount - the discount to use as context for the calculation
     * @return the allocations that the discount has on the items in the cart or
     *   order
     */
    getLineDiscounts(cartOrOrder: {
        items: LineItem[];
        swaps?: Swap[];
        claims?: ClaimOrder[];
    }, discount?: Discount): LineDiscountAmount[];
    /**
     * Breaks down the totals related to a line item; these are the subtotal, the
     * amount of discount applied to the line item, the amount of a gift card
     * applied to a line item and the amount of tax applied to a line item.
     * @param lineItem - the line item to calculate totals for
     * @param cartOrOrder - the cart or order to use as context for the calculation
     * @param options - the options to evaluate the line item totals for
     * @returns the breakdown of the line item totals
     */
    getLineItemTotals(lineItem: LineItem, cartOrOrder: Cart | Order, options?: LineItemTotalsOptions): Promise<LineItemTotals>;
    /**
     * Gets a total for a line item. The total can take gift cards, discounts and
     * taxes into account. This can be controlled through the options.
     * @param lineItem - the line item to calculate a total for
     * @param cartOrOrder - the cart or order to use as context for the calculation
     * @param options - the options to use for the calculation
     * @returns the line item total
     */
    getLineItemTotal(lineItem: LineItem, cartOrOrder: Cart | Order, options?: GetLineItemTotalOptions): Promise<number>;
    /**
     * Gets the amount that can be gift carded on a cart. In regions where gift
     * cards are taxable this amount should exclude taxes.
     * @param cartOrOrder - the cart or order to get gift card amount for
     * @return the gift card amount applied to the cart or order
     */
    getGiftCardableAmount(cartOrOrder: Cart | Order): Promise<number>;
    /**
     * Gets the gift card amount on a cart or order.
     * @param cartOrOrder - the cart or order to get gift card amount for
     * @return the gift card amount applied to the cart or order
     */
    getGiftCardTotal(cartOrOrder: Cart | Order, opts?: {
        gift_cardable?: number;
    }): Promise<{
        total: number;
        tax_total: number;
    }>;
    /**
     * Calculates the total discount amount for each of the different supported
     * discount types. If discounts aren't present or invalid returns 0.
     * @param cartOrOrder - the cart or order to calculate discounts for
     * @return the total discounts amount
     */
    getDiscountTotal(cartOrOrder: Cart | Order): Promise<number>;
    /**
     * Prepares the calculation context for a tax total calculation.
     * @param calculationContextData - the calculationContextData to get the calculation context for
     * @param options - options to gather context by
     * @return the tax calculation context
     */
    getCalculationContext(calculationContextData: CalculationContextData, options?: CalculationContextOptions): Promise<TaxCalculationContext>;
    /**
     * Rounds a number using Math.round.
     * @param value - the value to round
     * @return the rounded value
     */
    rounded(value: number): number;
}
export default TotalsService;
