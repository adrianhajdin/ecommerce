"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePriceTaxAmount = void 0;
/**
 * Return the tax amount that
 *
 * - is includes in the price if it is tax inclusive
 * - will be applied on to the price if it is tax exclusive
 */
function calculatePriceTaxAmount(_a) {
    var price = _a.price, includesTax = _a.includesTax, taxRate = _a.taxRate;
    if (includesTax) {
        return (taxRate * price) / (1 + taxRate);
    }
    return price * taxRate;
}
exports.calculatePriceTaxAmount = calculatePriceTaxAmount;
//# sourceMappingURL=calculate-price-tax-amount.js.map