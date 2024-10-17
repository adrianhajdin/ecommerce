/**
 * Return the tax amount that
 *
 * - is includes in the price if it is tax inclusive
 * - will be applied on to the price if it is tax exclusive
 */
export declare function calculatePriceTaxAmount({ price, includesTax, taxRate, }: {
    price: number;
    includesTax?: boolean;
    taxRate: number;
}): number;
