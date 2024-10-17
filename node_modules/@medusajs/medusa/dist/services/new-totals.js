"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var models_1 = require("../models");
var utils_1 = require("../utils");
var NewTotalsService = /** @class */ (function (_super) {
    __extends(NewTotalsService, _super);
    function NewTotalsService(_a) {
        var taxProviderService = _a.taxProviderService, featureFlagRouter = _a.featureFlagRouter, taxCalculationStrategy = _a.taxCalculationStrategy;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.taxProviderService_ = taxProviderService;
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.taxCalculationStrategy_ = taxCalculationStrategy;
        return _this;
    }
    /**
     * Calculate and return the items totals for either the legacy calculation or the new calculation
     * @param items
     * @param param1
     */
    NewTotalsService.prototype.getLineItemTotals = function (items, _a) {
        var includeTax = _a.includeTax, calculationContext = _a.calculationContext, taxRate = _a.taxRate;
        return __awaiter(this, void 0, void 0, function () {
            var lineItemsTaxLinesMap, itemContainsTaxLines, lineItemsTaxLines, calculationMethod, itemsTotals, items_1, items_1_1, item, lineItemAllocation, _b, _c, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        items = Array.isArray(items) ? items : [items];
                        lineItemsTaxLinesMap = {};
                        if (!(!taxRate && includeTax)) return [3 /*break*/, 3];
                        itemContainsTaxLines = items.some(function (item) { var _a; return (_a = item.tax_lines) === null || _a === void 0 ? void 0 : _a.length; });
                        if (!itemContainsTaxLines) return [3 /*break*/, 1];
                        items.forEach(function (item) {
                            var _a;
                            lineItemsTaxLinesMap[item.id] = (_a = item.tax_lines) !== null && _a !== void 0 ? _a : [];
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.taxProviderService_
                            .withTransaction(this.activeManager_)
                            .getTaxLinesMap(items, calculationContext)];
                    case 2:
                        lineItemsTaxLines = (_e.sent()).lineItemsTaxLines;
                        lineItemsTaxLinesMap = lineItemsTaxLines;
                        _e.label = 3;
                    case 3:
                        calculationMethod = taxRate
                            ? this.getLineItemTotalsLegacy.bind(this)
                            : this.getLineItemTotals_.bind(this);
                        itemsTotals = {};
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 9, 10, 11]);
                        items_1 = __values(items), items_1_1 = items_1.next();
                        _e.label = 5;
                    case 5:
                        if (!!items_1_1.done) return [3 /*break*/, 8];
                        item = items_1_1.value;
                        lineItemAllocation = calculationContext.allocation_map[item.id] || {};
                        _b = itemsTotals;
                        _c = item.id;
                        return [4 /*yield*/, calculationMethod(item, {
                                taxRate: taxRate,
                                includeTax: includeTax,
                                lineItemAllocation: lineItemAllocation,
                                taxLines: lineItemsTaxLinesMap[item.id],
                                calculationContext: calculationContext,
                            })];
                    case 6:
                        _b[_c] = _e.sent();
                        _e.label = 7;
                    case 7:
                        items_1_1 = items_1.next();
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (items_1_1 && !items_1_1.done && (_d = items_1.return)) _d.call(items_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, itemsTotals];
                }
            });
        });
    };
    /**
     * Calculate and return the totals for an item
     * @param item
     * @param param1
     * @returns
     */
    NewTotalsService.prototype.getLineItemTotals_ = function (item, _a) {
        var _b, _c, _d, _e;
        var includeTax = _a.includeTax, lineItemAllocation = _a.lineItemAllocation, 
        /**
         * Only needed to force the usage of the specified tax lines, often in the case where the item does not hold the tax lines
         */
        taxLines = _a.taxLines, calculationContext = _a.calculationContext;
        return __awaiter(this, void 0, void 0, function () {
            var subtotal, raw_discount_total, discount_total, totals, _f, noDiscountContext, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        subtotal = item.unit_price * item.quantity;
                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) &&
                            item.includes_tax) {
                            subtotal = 0; // in that case we need to know the tax rate to compute it later
                        }
                        raw_discount_total = (_c = (_b = lineItemAllocation.discount) === null || _b === void 0 ? void 0 : _b.amount) !== null && _c !== void 0 ? _c : 0;
                        discount_total = Math.round(raw_discount_total);
                        totals = {
                            unit_price: item.unit_price,
                            quantity: item.quantity,
                            subtotal: subtotal,
                            discount_total: discount_total,
                            total: subtotal - discount_total,
                            original_total: subtotal,
                            original_tax_total: 0,
                            tax_total: 0,
                            tax_lines: (_d = item.tax_lines) !== null && _d !== void 0 ? _d : [],
                            raw_discount_total: raw_discount_total,
                        };
                        if (includeTax) {
                            totals.tax_lines = totals.tax_lines.length
                                ? totals.tax_lines
                                : taxLines;
                            if (!totals.tax_lines && item.variant_id) {
                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax Lines must be joined to calculate taxes");
                            }
                        }
                        if (item.is_return) {
                            if (!(0, medusa_core_utils_1.isDefined)(item.tax_lines) && item.variant_id) {
                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Return Line Items must join tax lines");
                            }
                        }
                        if (!(((_e = totals.tax_lines) === null || _e === void 0 ? void 0 : _e.length) > 0)) return [3 /*break*/, 3];
                        _f = totals;
                        return [4 /*yield*/, this.taxCalculationStrategy_.calculate([item], totals.tax_lines, calculationContext)];
                    case 1:
                        _f.tax_total = _h.sent();
                        noDiscountContext = __assign(__assign({}, calculationContext), { allocation_map: {} });
                        _g = totals;
                        return [4 /*yield*/, this.taxCalculationStrategy_.calculate([item], totals.tax_lines, noDiscountContext)];
                    case 2:
                        _g.original_tax_total = _h.sent();
                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) &&
                            item.includes_tax) {
                            totals.subtotal +=
                                totals.unit_price * totals.quantity - totals.original_tax_total;
                            totals.total += totals.subtotal;
                            totals.original_total += totals.subtotal;
                        }
                        totals.total += totals.tax_total;
                        totals.original_total += totals.original_tax_total;
                        _h.label = 3;
                    case 3: return [2 /*return*/, totals];
                }
            });
        });
    };
    /**
     * Calculate and return the legacy calculated totals using the tax rate
     * @param item
     * @param param1
     */
    NewTotalsService.prototype.getLineItemTotalsLegacy = function (item, _a) {
        var _b, _c;
        var taxRate = _a.taxRate, lineItemAllocation = _a.lineItemAllocation, calculationContext = _a.calculationContext;
        return __awaiter(this, void 0, void 0, function () {
            var subtotal, raw_discount_total, discount_total, totals, includesTax, taxIncludedInPrice;
            return __generator(this, function (_d) {
                subtotal = item.unit_price * item.quantity;
                if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) &&
                    item.includes_tax) {
                    subtotal = 0; // in that case we need to know the tax rate to compute it later
                }
                raw_discount_total = (_c = (_b = lineItemAllocation.discount) === null || _b === void 0 ? void 0 : _b.amount) !== null && _c !== void 0 ? _c : 0;
                discount_total = Math.round(raw_discount_total);
                totals = {
                    unit_price: item.unit_price,
                    quantity: item.quantity,
                    subtotal: subtotal,
                    discount_total: discount_total,
                    total: subtotal - discount_total,
                    original_total: subtotal,
                    original_tax_total: 0,
                    tax_total: 0,
                    tax_lines: [],
                    raw_discount_total: raw_discount_total,
                };
                taxRate = taxRate / 100;
                includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && item.includes_tax;
                taxIncludedInPrice = !item.includes_tax
                    ? 0
                    : Math.round((0, utils_1.calculatePriceTaxAmount)({
                        price: item.unit_price,
                        taxRate: taxRate,
                        includesTax: includesTax,
                    }));
                totals.subtotal = Math.round((item.unit_price - taxIncludedInPrice) * item.quantity);
                totals.total = totals.subtotal;
                totals.original_tax_total = Math.round(totals.subtotal * taxRate);
                totals.tax_total = Math.round((totals.subtotal - discount_total) * taxRate);
                totals.total += totals.tax_total;
                if (includesTax) {
                    totals.original_total += totals.subtotal;
                }
                totals.original_total += totals.original_tax_total;
                return [2 /*return*/, totals];
            });
        });
    };
    /**
     * Return the amount that can be refund on a line item
     * @param lineItem
     * @param param1
     */
    NewTotalsService.prototype.getLineItemRefund = function (lineItem, _a) {
        var _b, _c;
        var calculationContext = _a.calculationContext, taxRate = _a.taxRate;
        /*
         * Used for backcompat with old tax system
         */
        if (taxRate != null) {
            return this.getLineItemRefundLegacy(lineItem, {
                calculationContext: calculationContext,
                taxRate: taxRate,
            });
        }
        var includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && lineItem.includes_tax;
        var discountAmount = (((_c = (_b = calculationContext.allocation_map[lineItem.id]) === null || _b === void 0 ? void 0 : _b.discount) === null || _c === void 0 ? void 0 : _c.unit_amount) ||
            0) * lineItem.quantity;
        if (!(0, medusa_core_utils_1.isDefined)(lineItem.tax_lines)) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Cannot compute line item refund amount, tax lines are missing from the line item");
        }
        var totalTaxRate = lineItem.tax_lines.reduce(function (acc, next) {
            return acc + next.rate / 100;
        }, 0);
        var taxAmountIncludedInPrice = !includesTax
            ? 0
            : Math.round((0, utils_1.calculatePriceTaxAmount)({
                price: lineItem.unit_price,
                taxRate: totalTaxRate,
                includesTax: includesTax,
            }));
        var lineSubtotal = (lineItem.unit_price - taxAmountIncludedInPrice) * lineItem.quantity -
            discountAmount;
        var taxTotal = lineItem.tax_lines.reduce(function (acc, next) {
            return acc + Math.round(lineSubtotal * (next.rate / 100));
        }, 0);
        return lineSubtotal + taxTotal;
    };
    /**
     * @param lineItem
     * @param param1
     * @protected
     */
    NewTotalsService.prototype.getLineItemRefundLegacy = function (lineItem, _a) {
        var _b, _c, _d;
        var calculationContext = _a.calculationContext, taxRate = _a.taxRate;
        var includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && lineItem.includes_tax;
        var taxAmountIncludedInPrice = !includesTax
            ? 0
            : Math.round((0, utils_1.calculatePriceTaxAmount)({
                price: lineItem.unit_price,
                taxRate: taxRate / 100,
                includesTax: includesTax,
            }));
        var discountAmount = (_d = (_c = (_b = calculationContext.allocation_map[lineItem.id]) === null || _b === void 0 ? void 0 : _b.discount) === null || _c === void 0 ? void 0 : _c.amount) !== null && _d !== void 0 ? _d : 0;
        var lineSubtotal = (lineItem.unit_price - taxAmountIncludedInPrice) * lineItem.quantity -
            discountAmount;
        return Math.round(lineSubtotal * (1 + taxRate / 100));
    };
    /**
     * Calculate and return the gift cards totals
     * @param giftCardableAmount
     * @param param1
     */
    NewTotalsService.prototype.getGiftCardTotals = function (giftCardableAmount, _a) {
        var giftCardTransactions = _a.giftCardTransactions, region = _a.region, giftCards = _a.giftCards;
        return __awaiter(this, void 0, void 0, function () {
            var result, _b, totalGiftCardBalance, totalTaxFromGiftCards;
            return __generator(this, function (_c) {
                if (!giftCards && !giftCardTransactions) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Cannot calculate the gift card totals. Neither the gift cards or gift card transactions have been provided");
                }
                if (giftCardTransactions === null || giftCardTransactions === void 0 ? void 0 : giftCardTransactions.length) {
                    return [2 /*return*/, this.getGiftCardTransactionsTotals({
                            giftCardTransactions: giftCardTransactions,
                            region: region,
                        })];
                }
                result = {
                    total: 0,
                    tax_total: 0,
                };
                if (!(giftCards === null || giftCards === void 0 ? void 0 : giftCards.length)) {
                    return [2 /*return*/, result];
                }
                _b = giftCards.reduce(function (acc, giftCard) {
                    var taxableAmount = 0;
                    acc.totalGiftCardBalance += giftCard.balance;
                    taxableAmount = Math.min(acc.giftCardableBalance, giftCard.balance);
                    // skip tax, if the taxable amount is not a positive number or tax rate is not set
                    if (taxableAmount <= 0 || !giftCard.tax_rate) {
                        return acc;
                    }
                    var taxAmountFromGiftCard = Math.round(taxableAmount * (giftCard.tax_rate / 100));
                    acc.totalTaxFromGiftCards += taxAmountFromGiftCard;
                    // Update the balance, pass it over to the next gift card (if any) for calculating tax on balance.
                    acc.giftCardableBalance -= taxableAmount;
                    return acc;
                }, {
                    totalGiftCardBalance: 0,
                    totalTaxFromGiftCards: 0,
                    giftCardableBalance: giftCardableAmount,
                }), totalGiftCardBalance = _b.totalGiftCardBalance, totalTaxFromGiftCards = _b.totalTaxFromGiftCards;
                result.tax_total = Math.round(totalTaxFromGiftCards);
                result.total = Math.min(giftCardableAmount, totalGiftCardBalance);
                return [2 /*return*/, result];
            });
        });
    };
    /**
     * Calculate and return the gift cards totals based on their transactions
     * @param param0
     */
    NewTotalsService.prototype.getGiftCardTransactionsTotals = function (_a) {
        var giftCardTransactions = _a.giftCardTransactions, region = _a.region;
        return giftCardTransactions.reduce(function (acc, next) {
            var _a, _b, _c;
            var taxMultiplier = (next.tax_rate || 0) / 100;
            // Previously we did not record whether a gift card was taxable or not.
            // All gift cards where is_taxable === null are from the old system,
            // where we defaulted to taxable gift cards.
            //
            // This is a backwards compatability fix for orders that were created
            // before we added the gift card tax rate.
            // We prioritize the giftCard.tax_rate as we create a snapshot of the tax
            // on order creation to create gift cards on the gift card itself.
            // If its created outside of the order, we refer to the region tax
            if (next.is_taxable === null) {
                if ((region === null || region === void 0 ? void 0 : region.gift_cards_taxable) || ((_a = next.gift_card) === null || _a === void 0 ? void 0 : _a.tax_rate)) {
                    taxMultiplier = ((_c = (_b = next.gift_card) === null || _b === void 0 ? void 0 : _b.tax_rate) !== null && _c !== void 0 ? _c : region.tax_rate) / 100;
                }
            }
            return {
                total: acc.total + next.amount,
                tax_total: Math.round(acc.tax_total + next.amount * taxMultiplier),
            };
        }, {
            total: 0,
            tax_total: 0,
        });
    };
    /**
     * Calculate and return the shipping methods totals for either the legacy calculation or the new calculation
     * @param shippingMethods
     * @param param1
     */
    NewTotalsService.prototype.getShippingMethodTotals = function (shippingMethods, _a) {
        var includeTax = _a.includeTax, discounts = _a.discounts, taxRate = _a.taxRate, calculationContext = _a.calculationContext;
        return __awaiter(this, void 0, void 0, function () {
            var shippingMethodsTaxLinesMap, shippingMethodContainsTaxLines, calculationContextWithGivenMethod, shippingMethodsTaxLines, calculationMethod, shippingMethodsTotals, shippingMethods_1, shippingMethods_1_1, shippingMethod, _b, _c, e_2_1;
            var e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        shippingMethods = Array.isArray(shippingMethods)
                            ? shippingMethods
                            : [shippingMethods];
                        shippingMethodsTaxLinesMap = {};
                        if (!(!taxRate && includeTax)) return [3 /*break*/, 3];
                        shippingMethodContainsTaxLines = shippingMethods.some(function (method) { var _a; return (_a = method.tax_lines) === null || _a === void 0 ? void 0 : _a.length; });
                        if (!shippingMethodContainsTaxLines) return [3 /*break*/, 1];
                        shippingMethods.forEach(function (sm) {
                            var _a;
                            shippingMethodsTaxLinesMap[sm.id] = (_a = sm.tax_lines) !== null && _a !== void 0 ? _a : [];
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        calculationContextWithGivenMethod = __assign(__assign({}, calculationContext), { shipping_methods: shippingMethods });
                        return [4 /*yield*/, this.taxProviderService_
                                .withTransaction(this.activeManager_)
                                .getTaxLinesMap([], calculationContextWithGivenMethod)];
                    case 2:
                        shippingMethodsTaxLines = (_e.sent()).shippingMethodsTaxLines;
                        shippingMethodsTaxLinesMap = shippingMethodsTaxLines;
                        _e.label = 3;
                    case 3:
                        calculationMethod = taxRate
                            ? this.getShippingMethodTotalsLegacy.bind(this)
                            : this.getShippingMethodTotals_.bind(this);
                        shippingMethodsTotals = {};
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 9, 10, 11]);
                        shippingMethods_1 = __values(shippingMethods), shippingMethods_1_1 = shippingMethods_1.next();
                        _e.label = 5;
                    case 5:
                        if (!!shippingMethods_1_1.done) return [3 /*break*/, 8];
                        shippingMethod = shippingMethods_1_1.value;
                        _b = shippingMethodsTotals;
                        _c = shippingMethod.id;
                        return [4 /*yield*/, calculationMethod(shippingMethod, {
                                includeTax: includeTax,
                                calculationContext: calculationContext,
                                taxLines: shippingMethodsTaxLinesMap[shippingMethod.id],
                                discounts: discounts,
                                taxRate: taxRate,
                            })];
                    case 6:
                        _b[_c] = _e.sent();
                        _e.label = 7;
                    case 7:
                        shippingMethods_1_1 = shippingMethods_1.next();
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (shippingMethods_1_1 && !shippingMethods_1_1.done && (_d = shippingMethods_1.return)) _d.call(shippingMethods_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, shippingMethodsTotals];
                }
            });
        });
    };
    NewTotalsService.prototype.getGiftCardableAmount = function (_a) {
        var gift_cards_taxable = _a.gift_cards_taxable, subtotal = _a.subtotal, shipping_total = _a.shipping_total, discount_total = _a.discount_total, tax_total = _a.tax_total;
        return ((gift_cards_taxable
            ? subtotal + shipping_total - discount_total
            : subtotal + shipping_total + tax_total - discount_total) || 0);
    };
    /**
     * Calculate and return the shipping method totals
     * @param shippingMethod
     * @param param1
     */
    NewTotalsService.prototype.getShippingMethodTotals_ = function (shippingMethod, _a) {
        var _b;
        var includeTax = _a.includeTax, calculationContext = _a.calculationContext, taxLines = _a.taxLines, discounts = _a.discounts;
        return __awaiter(this, void 0, void 0, function () {
            var totals, calculationContext_, includesTax, _c, hasFreeShipping;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        totals = {
                            price: shippingMethod.price,
                            original_total: shippingMethod.price,
                            total: shippingMethod.price,
                            subtotal: shippingMethod.price,
                            original_tax_total: 0,
                            tax_total: 0,
                            tax_lines: (_b = shippingMethod.tax_lines) !== null && _b !== void 0 ? _b : [],
                        };
                        if (includeTax) {
                            totals.tax_lines = totals.tax_lines.length
                                ? totals.tax_lines
                                : taxLines;
                            if (!totals.tax_lines) {
                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax Lines must be joined to calculate shipping taxes");
                            }
                        }
                        calculationContext_ = __assign(__assign({}, calculationContext), { shipping_methods: [shippingMethod] });
                        if (!totals.tax_lines.length) return [3 /*break*/, 2];
                        includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && shippingMethod.includes_tax;
                        _c = totals;
                        return [4 /*yield*/, this.taxCalculationStrategy_.calculate([], totals.tax_lines, calculationContext_)];
                    case 1:
                        _c.original_tax_total = _d.sent();
                        totals.tax_total = totals.original_tax_total;
                        if (includesTax) {
                            totals.subtotal -= totals.tax_total;
                        }
                        else {
                            totals.original_total += totals.original_tax_total;
                            totals.total += totals.tax_total;
                        }
                        _d.label = 2;
                    case 2:
                        hasFreeShipping = discounts === null || discounts === void 0 ? void 0 : discounts.some(function (d) { return d.rule.type === models_1.DiscountRuleType.FREE_SHIPPING; });
                        if (hasFreeShipping) {
                            totals.total = 0;
                            totals.subtotal = 0;
                            totals.tax_total = 0;
                        }
                        return [2 /*return*/, totals];
                }
            });
        });
    };
    /**
     * Calculate and return the shipping method totals legacy using the tax rate
     * @param shippingMethod
     * @param param1
     */
    NewTotalsService.prototype.getShippingMethodTotalsLegacy = function (shippingMethod, _a) {
        var calculationContext = _a.calculationContext, discounts = _a.discounts, taxRate = _a.taxRate;
        return __awaiter(this, void 0, void 0, function () {
            var totals, hasFreeShipping;
            return __generator(this, function (_b) {
                totals = {
                    price: shippingMethod.price,
                    original_total: shippingMethod.price,
                    total: shippingMethod.price,
                    subtotal: shippingMethod.price,
                    original_tax_total: 0,
                    tax_total: 0,
                    tax_lines: [],
                };
                totals.original_tax_total = Math.round(totals.price * (taxRate / 100));
                totals.tax_total = Math.round(totals.price * (taxRate / 100));
                hasFreeShipping = discounts === null || discounts === void 0 ? void 0 : discounts.some(function (d) { return d.rule.type === models_1.DiscountRuleType.FREE_SHIPPING; });
                if (hasFreeShipping) {
                    totals.total = 0;
                    totals.subtotal = 0;
                    totals.tax_total = 0;
                }
                return [2 /*return*/, totals];
            });
        });
    };
    return NewTotalsService;
}(interfaces_1.TransactionBaseService));
exports.default = NewTotalsService;
//# sourceMappingURL=new-totals.js.map