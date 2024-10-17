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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var models_1 = require("../models");
var cart_1 = require("../types/cart");
var orders_1 = require("../types/orders");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_2 = require("../utils");
/**
 * A service that calculates total and subtotals for orders, carts etc..
 * @implements {BaseService}
 */
var TotalsService = /** @class */ (function (_super) {
    __extends(TotalsService, _super);
    function TotalsService(_a) {
        var taxProviderService = _a.taxProviderService, newTotalsService = _a.newTotalsService, taxCalculationStrategy = _a.taxCalculationStrategy, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.taxProviderService_ = taxProviderService;
        _this.newTotalsService_ = newTotalsService;
        _this.taxCalculationStrategy_ = taxCalculationStrategy;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Calculates total of a given cart or order.
     * @param cartOrOrder - object to calculate total for
     * @param options - options to calculate by
     * @return the calculated subtotal
     */
    TotalsService.prototype.getTotal = function (cartOrOrder, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var subtotal, taxTotal, discountTotal, giftCardTotal, _a, shippingTotal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getSubtotal(cartOrOrder)];
                    case 1:
                        subtotal = _b.sent();
                        return [4 /*yield*/, this.getTaxTotal(cartOrOrder, options.force_taxes)];
                    case 2:
                        taxTotal = (_b.sent()) || 0;
                        return [4 /*yield*/, this.getDiscountTotal(cartOrOrder)];
                    case 3:
                        discountTotal = _b.sent();
                        if (!options.exclude_gift_cards) return [3 /*break*/, 4];
                        _a = { total: 0 };
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.getGiftCardTotal(cartOrOrder)];
                    case 5:
                        _a = _b.sent();
                        _b.label = 6;
                    case 6:
                        giftCardTotal = _a;
                        return [4 /*yield*/, this.getShippingTotal(cartOrOrder)];
                    case 7:
                        shippingTotal = _b.sent();
                        return [2 /*return*/, (subtotal + taxTotal + shippingTotal - discountTotal - giftCardTotal.total)];
                }
            });
        });
    };
    /**
     * Gets the total payments made on an order
     * @param order - the order to calculate paid amount for
     * @return the total paid amount
     */
    TotalsService.prototype.getPaidTotal = function (order) {
        var _a;
        var total = (_a = order.payments) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, next) {
            acc += next.amount;
            return acc;
        }, 0);
        return total;
    };
    /**
     * The total paid for swaps. May be negative in case of negative swap
     * difference.
     * @param order - the order to calculate swap total for
     * @return the swap total
     */
    TotalsService.prototype.getSwapTotal = function (order) {
        var e_1, _a;
        var swapTotal = 0;
        if (order.swaps && order.swaps.length) {
            try {
                for (var _b = __values(order.swaps), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var s = _c.value;
                    swapTotal = swapTotal + s.difference_due;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return swapTotal;
    };
    /**
     * Gets the totals breakdown for a shipping method. Fetches tax lines if not
     * already provided.
     * @param shippingMethod - the shipping method to get totals breakdown for.
     * @param cartOrOrder - the cart or order to use as context for the breakdown
     * @param opts - options for what should be included
     * @returns An object that breaks down the totals for the shipping method
     */
    TotalsService.prototype.getShippingMethodTotals = function (shippingMethod, cartOrOrder, opts) {
        var _a;
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var calculationContext, _b, totals, orderLines, includesTax, _c, hasFreeShipping;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = opts.calculation_context;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getCalculationContext(cartOrOrder, {
                                exclude_shipping: true,
                            })];
                    case 1:
                        _b = (_d.sent());
                        _d.label = 2;
                    case 2:
                        calculationContext = _b;
                        calculationContext.shipping_methods = [shippingMethod];
                        totals = {
                            price: shippingMethod.price,
                            original_total: shippingMethod.price,
                            total: shippingMethod.price,
                            subtotal: shippingMethod.price,
                            original_tax_total: 0,
                            tax_total: 0,
                            tax_lines: shippingMethod.tax_lines || [],
                        };
                        if (!opts.include_tax) return [3 /*break*/, 7];
                        if (!((0, orders_1.isOrder)(cartOrOrder) && cartOrOrder.tax_rate != null)) return [3 /*break*/, 3];
                        totals.original_tax_total = Math.round(totals.price * (cartOrOrder.tax_rate / 100));
                        totals.tax_total = Math.round(totals.price * (cartOrOrder.tax_rate / 100));
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(totals.tax_lines.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.taxProviderService_
                                .withTransaction(this.activeManager_)
                                .getTaxLines(cartOrOrder.items, calculationContext)];
                    case 4:
                        orderLines = _d.sent();
                        totals.tax_lines = orderLines.filter(function (ol) {
                            if ("shipping_method_id" in ol) {
                                return ol.shipping_method_id === shippingMethod.id;
                            }
                            return false;
                        });
                        if (totals.tax_lines.length === 0 && (0, orders_1.isOrder)(cartOrOrder)) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax Lines must be joined on shipping method to calculate taxes");
                        }
                        _d.label = 5;
                    case 5:
                        if (!(totals.tax_lines.length > 0)) return [3 /*break*/, 7];
                        includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && shippingMethod.includes_tax;
                        _c = totals;
                        return [4 /*yield*/, this.taxCalculationStrategy_.calculate([], totals.tax_lines, calculationContext)];
                    case 6:
                        _c.original_tax_total =
                            _d.sent();
                        totals.tax_total = totals.original_tax_total;
                        if (includesTax) {
                            totals.subtotal -= totals.tax_total;
                        }
                        else {
                            totals.original_total += totals.original_tax_total;
                            totals.total += totals.tax_total;
                        }
                        _d.label = 7;
                    case 7:
                        hasFreeShipping = (_a = cartOrOrder.discounts) === null || _a === void 0 ? void 0 : _a.some(function (d) { return d.rule.type === models_1.DiscountRuleType.FREE_SHIPPING; });
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
     * Calculates subtotal of a given cart or order.
     * @param cartOrOrder - cart or order to calculate subtotal for
     * @param opts - options
     * @return the calculated subtotal
     */
    TotalsService.prototype.getSubtotal = function (cartOrOrder, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var subtotal, getLineItemSubtotal, _a, _b, item, _c, _d, e_2_1;
            var e_2, _e;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        subtotal = 0;
                        if (!cartOrOrder.items) {
                            return [2 /*return*/, subtotal];
                        }
                        getLineItemSubtotal = function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var totals;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getLineItemTotals(item, cartOrOrder, {
                                            include_tax: true,
                                            exclude_gift_cards: true,
                                        })];
                                    case 1:
                                        totals = _a.sent();
                                        return [2 /*return*/, totals.subtotal];
                                }
                            });
                        }); };
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 9, 10, 11]);
                        _a = __values(cartOrOrder.items), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 8];
                        item = _b.value;
                        if (!opts.excludeNonDiscounts) return [3 /*break*/, 5];
                        if (!item.allow_discounts) return [3 /*break*/, 4];
                        _c = subtotal;
                        return [4 /*yield*/, getLineItemSubtotal(item)];
                    case 3:
                        subtotal = _c + _f.sent();
                        _f.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        _d = subtotal;
                        return [4 /*yield*/, getLineItemSubtotal(item)];
                    case 6:
                        subtotal = _d + _f.sent();
                        _f.label = 7;
                    case 7:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, this.rounded(subtotal)];
                }
            });
        });
    };
    /**
     * Calculates shipping total
     * @param cartOrOrder - cart or order to calculate subtotal for
     * @return shipping total
     */
    TotalsService.prototype.getShippingTotal = function (cartOrOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var shipping_methods, total, shipping_methods_1, shipping_methods_1_1, shippingMethod, totals, e_3_1;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shipping_methods = cartOrOrder.shipping_methods;
                        total = 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        shipping_methods_1 = __values(shipping_methods), shipping_methods_1_1 = shipping_methods_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!shipping_methods_1_1.done) return [3 /*break*/, 5];
                        shippingMethod = shipping_methods_1_1.value;
                        return [4 /*yield*/, this.getShippingMethodTotals(shippingMethod, cartOrOrder, {
                                include_tax: true,
                            })];
                    case 3:
                        totals = _b.sent();
                        total += totals.subtotal;
                        _b.label = 4;
                    case 4:
                        shipping_methods_1_1 = shipping_methods_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (shipping_methods_1_1 && !shipping_methods_1_1.done && (_a = shipping_methods_1.return)) _a.call(shipping_methods_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, total];
                }
            });
        });
    };
    /**
     * Calculates tax total
     * Currently based on the Danish tax system
     * @param cartOrOrder - cart or order to calculate tax total for
     * @param forceTaxes - whether taxes should be calculated regardless
     *   of region settings
     * @return tax total
     */
    TotalsService.prototype.getTaxTotal = function (cartOrOrder, forceTaxes) {
        if (forceTaxes === void 0) { forceTaxes = false; }
        return __awaiter(this, void 0, void 0, function () {
            var calculationContext, giftCardTotal, taxLines, taxLinesJoined, shippingTaxLines, subtotal, shippingTotal, discountTotal, returnTaxLines, toReturn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((0, cart_1.isCart)(cartOrOrder) &&
                            !forceTaxes &&
                            !cartOrOrder.region.automatic_taxes) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.getCalculationContext(cartOrOrder)];
                    case 1:
                        calculationContext = _a.sent();
                        return [4 /*yield*/, this.getGiftCardTotal(cartOrOrder)];
                    case 2:
                        giftCardTotal = _a.sent();
                        if (!(0, orders_1.isOrder)(cartOrOrder)) return [3 /*break*/, 8];
                        taxLinesJoined = cartOrOrder.items.every(function (i) {
                            return (0, utils_1.isDefined)(i.tax_lines);
                        });
                        if (!taxLinesJoined) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Order tax calculations must have tax lines joined on line items");
                        }
                        if (!(cartOrOrder.tax_rate === null)) return [3 /*break*/, 3];
                        taxLines = cartOrOrder.items.flatMap(function (li) { return li.tax_lines; });
                        shippingTaxLines = cartOrOrder.shipping_methods.flatMap(function (sm) { return sm.tax_lines; });
                        taxLines = taxLines.concat(shippingTaxLines);
                        return [3 /*break*/, 7];
                    case 3: return [4 /*yield*/, this.getSubtotal(cartOrOrder)];
                    case 4:
                        subtotal = _a.sent();
                        return [4 /*yield*/, this.getShippingTotal(cartOrOrder)];
                    case 5:
                        shippingTotal = _a.sent();
                        return [4 /*yield*/, this.getDiscountTotal(cartOrOrder)];
                    case 6:
                        discountTotal = _a.sent();
                        return [2 /*return*/, this.rounded((subtotal - discountTotal - giftCardTotal.total + shippingTotal) *
                                (cartOrOrder.tax_rate / 100))];
                    case 7: return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.taxProviderService_
                            .withTransaction(this.activeManager_)
                            .getTaxLines(cartOrOrder.items, calculationContext)];
                    case 9:
                        taxLines = _a.sent();
                        if (cartOrOrder.type === "swap") {
                            returnTaxLines = cartOrOrder.items.flatMap(function (i) {
                                if (i.is_return) {
                                    if (typeof i.tax_lines === "undefined") {
                                        throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Return Line Items must join tax lines");
                                    }
                                    return i.tax_lines;
                                }
                                return [];
                            });
                            taxLines = taxLines.concat(returnTaxLines);
                        }
                        _a.label = 10;
                    case 10: return [4 /*yield*/, this.taxCalculationStrategy_.calculate(cartOrOrder.items, taxLines, calculationContext)];
                    case 11:
                        toReturn = _a.sent();
                        if (cartOrOrder.region.gift_cards_taxable) {
                            return [2 /*return*/, this.rounded(toReturn - giftCardTotal.tax_total)];
                        }
                        return [2 /*return*/, this.rounded(toReturn)];
                }
            });
        });
    };
    /**
     * Gets a map of discounts and gift cards that apply to line items in an
     * order. The function calculates the amount of a discount or gift card that
     * applies to a specific line item.
     * @param orderOrCart - the order or cart to get an allocation map for
     * @param options - controls what should be included in allocation map
     * @return the allocation map for the line items in the cart or order.
     */
    TotalsService.prototype.getAllocationMap = function (orderOrCart, options) {
        var _a;
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var allocationMap, discount, lineDiscounts, lineDiscounts_1, lineDiscounts_1_1, ld, adjustmentAmount;
            var e_4, _b;
            return __generator(this, function (_c) {
                allocationMap = {};
                if (!options.exclude_discounts) {
                    discount = (_a = orderOrCart.discounts) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
                        var rule = _a.rule;
                        return rule.type !== models_1.DiscountRuleType.FREE_SHIPPING;
                    });
                    lineDiscounts = this.getLineDiscounts(orderOrCart, discount);
                    try {
                        for (lineDiscounts_1 = __values(lineDiscounts), lineDiscounts_1_1 = lineDiscounts_1.next(); !lineDiscounts_1_1.done; lineDiscounts_1_1 = lineDiscounts_1.next()) {
                            ld = lineDiscounts_1_1.value;
                            adjustmentAmount = ld.amount + ld.customAdjustmentsAmount;
                            if (allocationMap[ld.item.id]) {
                                allocationMap[ld.item.id].discount = {
                                    amount: adjustmentAmount,
                                    /**
                                     * Used for the refund computation
                                     */
                                    unit_amount: adjustmentAmount / ld.item.quantity,
                                };
                            }
                            else {
                                allocationMap[ld.item.id] = {
                                    discount: {
                                        amount: adjustmentAmount,
                                        /**
                                         * Used for the refund computation
                                         */
                                        unit_amount: Math.round(adjustmentAmount / ld.item.quantity),
                                    },
                                };
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (lineDiscounts_1_1 && !lineDiscounts_1_1.done && (_b = lineDiscounts_1.return)) _b.call(lineDiscounts_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                return [2 /*return*/, allocationMap];
            });
        });
    };
    /**
     * Gets the total refund amount for an order.
     * @param order - the order to get total refund amount for.
     * @return the total refunded amount for an order.
     */
    TotalsService.prototype.getRefundedTotal = function (order) {
        if (!order.refunds) {
            return 0;
        }
        var total = order.refunds.reduce(function (acc, next) { return acc + next.amount; }, 0);
        return this.rounded(total);
    };
    /**
     * The amount that can be refunded for a given line item.
     * @param order - order to use as context for the calculation
     * @param lineItem - the line item to calculate the refund amount for.
     * @return the line item refund amount.
     */
    TotalsService.prototype.getLineItemRefund = function (order, lineItem) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var allocationMap, includesTax, discountAmount, lineSubtotal, taxAmountIncludedInPrice_1, taxRate_1, taxRate, taxAmountIncludedInPrice, taxTotal;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getAllocationMap(order)];
                    case 1:
                        allocationMap = _c.sent();
                        includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && lineItem.includes_tax;
                        discountAmount = (((_b = (_a = allocationMap[lineItem.id]) === null || _a === void 0 ? void 0 : _a.discount) === null || _b === void 0 ? void 0 : _b.unit_amount) || 0) *
                            lineItem.quantity;
                        lineSubtotal = lineItem.unit_price * lineItem.quantity - discountAmount;
                        /*
                         * Used for backcompat with old tax system
                         */
                        if (order.tax_rate !== null) {
                            taxAmountIncludedInPrice_1 = !includesTax
                                ? 0
                                : Math.round((0, utils_2.calculatePriceTaxAmount)({
                                    price: lineItem.unit_price,
                                    taxRate: order.tax_rate / 100,
                                    includesTax: includesTax,
                                }));
                            lineSubtotal =
                                (lineItem.unit_price - taxAmountIncludedInPrice_1) * lineItem.quantity -
                                    discountAmount;
                            taxRate_1 = order.tax_rate / 100;
                            return [2 /*return*/, this.rounded(lineSubtotal * (1 + taxRate_1))];
                        }
                        /*
                         * New tax system uses the tax lines registerd on the line items
                         */
                        if (typeof lineItem.tax_lines === "undefined") {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax calculation did not receive tax_lines");
                        }
                        taxRate = lineItem.tax_lines.reduce(function (acc, next) {
                            return acc + next.rate / 100;
                        }, 0);
                        taxAmountIncludedInPrice = !includesTax
                            ? 0
                            : Math.round((0, utils_2.calculatePriceTaxAmount)({
                                price: lineItem.unit_price,
                                taxRate: taxRate,
                                includesTax: includesTax,
                            }));
                        lineSubtotal =
                            (lineItem.unit_price - taxAmountIncludedInPrice) * lineItem.quantity -
                                discountAmount;
                        taxTotal = lineItem.tax_lines.reduce(function (acc, next) {
                            var taxRate = next.rate / 100;
                            return acc + _this.rounded(lineSubtotal * taxRate);
                        }, 0);
                        return [2 /*return*/, lineSubtotal + taxTotal];
                }
            });
        });
    };
    /**
     * Calculates refund total of line items.
     * If any of the items to return have been discounted, we need to
     * apply the discount again before refunding them.
     * @param order - cart or order to calculate subtotal for
     * @param lineItems - the line items to calculate refund total for
     * @return the calculated subtotal
     */
    TotalsService.prototype.getRefundTotal = function (order, lineItems) {
        return __awaiter(this, void 0, void 0, function () {
            var itemIds, _a, _b, s, swapItemIds, _c, _d, c, claimItemIds, refunds, lineItems_1, lineItems_1_1, item, refund, e_5_1;
            var e_6, _e, e_7, _f, e_5, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        itemIds = order.items.map(function (i) { return i.id; });
                        // in case we swap a swap, we need to include swap items
                        if (order.swaps && order.swaps.length) {
                            try {
                                for (_a = __values(order.swaps), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    s = _b.value;
                                    swapItemIds = s.additional_items.map(function (el) { return el.id; });
                                    itemIds = __spreadArray(__spreadArray([], __read(itemIds), false), __read(swapItemIds), false);
                                }
                            }
                            catch (e_6_1) { e_6 = { error: e_6_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                }
                                finally { if (e_6) throw e_6.error; }
                            }
                        }
                        if (order.claims && order.claims.length) {
                            try {
                                for (_c = __values(order.claims), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    c = _d.value;
                                    claimItemIds = c.additional_items.map(function (el) { return el.id; });
                                    itemIds = __spreadArray(__spreadArray([], __read(itemIds), false), __read(claimItemIds), false);
                                }
                            }
                            catch (e_7_1) { e_7 = { error: e_7_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                                }
                                finally { if (e_7) throw e_7.error; }
                            }
                        }
                        refunds = [];
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 6, 7, 8]);
                        lineItems_1 = __values(lineItems), lineItems_1_1 = lineItems_1.next();
                        _h.label = 2;
                    case 2:
                        if (!!lineItems_1_1.done) return [3 /*break*/, 5];
                        item = lineItems_1_1.value;
                        if (!itemIds.includes(item.id)) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Line item does not exist on order");
                        }
                        return [4 /*yield*/, this.getLineItemRefund(order, item)];
                    case 3:
                        refund = _h.sent();
                        refunds.push(refund);
                        _h.label = 4;
                    case 4:
                        lineItems_1_1 = lineItems_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_5_1 = _h.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (lineItems_1_1 && !lineItems_1_1.done && (_g = lineItems_1.return)) _g.call(lineItems_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, this.rounded(refunds.reduce(function (acc, next) { return acc + next; }, 0))];
                }
            });
        });
    };
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
    TotalsService.prototype.calculateDiscount_ = function (lineItem, variant, variantPrice, value, discountType) {
        if (!lineItem.allow_discounts) {
            return {
                lineItem: lineItem,
                variant: variant,
                amount: 0,
            };
        }
        if (discountType === models_1.DiscountRuleType.PERCENTAGE) {
            return {
                lineItem: lineItem,
                variant: variant,
                amount: ((variantPrice * lineItem.quantity) / 100) * value,
            };
        }
        else {
            return {
                lineItem: lineItem,
                variant: variant,
                amount: value >= variantPrice * lineItem.quantity
                    ? variantPrice * lineItem.quantity
                    : value * lineItem.quantity,
            };
        }
    };
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
    TotalsService.prototype.getAllocationItemDiscounts = function (discount, cart) {
        var _this = this;
        var discounts = cart.items.map(function (item) { return ({
            lineItem: item,
            variant: item.variant.id,
            amount: _this.getLineItemDiscountAdjustment(item, discount),
        }); });
        return discounts;
    };
    TotalsService.prototype.getLineItemDiscountAdjustment = function (lineItem, discount) {
        var _a;
        var matchingDiscount = (_a = lineItem.adjustments) === null || _a === void 0 ? void 0 : _a.find(function (adjustment) { return adjustment.discount_id === discount.id; });
        if (!matchingDiscount) {
            return 0;
        }
        return matchingDiscount.amount;
    };
    TotalsService.prototype.getLineItemAdjustmentsTotal = function (cartOrOrder) {
        var _a;
        if (!((_a = cartOrOrder === null || cartOrOrder === void 0 ? void 0 : cartOrOrder.items) === null || _a === void 0 ? void 0 : _a.length)) {
            return 0;
        }
        return cartOrOrder.items.reduce(function (total, item) {
            var _a;
            return total +
                ((_a = item.adjustments) === null || _a === void 0 ? void 0 : _a.reduce(function (total, adjustment) { return total + adjustment.amount; }, 0)) || 0;
        }, 0);
    };
    /**
     * Returns the discount amount allocated to the line items of an order.
     * @param cartOrOrder - the cart or order to get line discount allocations for
     * @param discount - the discount to use as context for the calculation
     * @return the allocations that the discount has on the items in the cart or
     *   order
     */
    TotalsService.prototype.getLineDiscounts = function (cartOrOrder, discount) {
        var e_8, _a, e_9, _b;
        var _c, _d, _e;
        var merged = __spreadArray([], __read(((_c = cartOrOrder.items) !== null && _c !== void 0 ? _c : [])), false);
        // merge items from order with items from order swaps
        if ("swaps" in cartOrOrder && ((_d = cartOrOrder.swaps) === null || _d === void 0 ? void 0 : _d.length)) {
            try {
                for (var _f = __values(cartOrOrder.swaps), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var s = _g.value;
                    merged = __spreadArray(__spreadArray([], __read(merged), false), __read(s.additional_items), false);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        if ("claims" in cartOrOrder && ((_e = cartOrOrder.claims) === null || _e === void 0 ? void 0 : _e.length)) {
            try {
                for (var _h = __values(cartOrOrder.claims), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var c = _j.value;
                    merged = __spreadArray(__spreadArray([], __read(merged), false), __read(c.additional_items), false);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        return merged.map(function (item) {
            var adjustments = (item === null || item === void 0 ? void 0 : item.adjustments) || [];
            var discountAdjustments = discount
                ? adjustments.filter(function (adjustment) { return adjustment.discount_id === discount.id; })
                : [];
            var customAdjustments = adjustments.filter(function (adjustment) { return adjustment.discount_id === null; });
            var sumAdjustments = function (total, adjustment) { return total + adjustment.amount; };
            return {
                item: item,
                amount: item.allow_discounts
                    ? discountAdjustments.reduce(sumAdjustments, 0)
                    : 0,
                customAdjustmentsAmount: customAdjustments.reduce(sumAdjustments, 0),
            };
        });
    };
    /**
     * Breaks down the totals related to a line item; these are the subtotal, the
     * amount of discount applied to the line item, the amount of a gift card
     * applied to a line item and the amount of tax applied to a line item.
     * @param lineItem - the line item to calculate totals for
     * @param cartOrOrder - the cart or order to use as context for the calculation
     * @param options - the options to evaluate the line item totals for
     * @returns the breakdown of the line item totals
     */
    TotalsService.prototype.getLineItemTotals = function (lineItem, cartOrOrder, options) {
        var _a, _b;
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var calculationContext, _c, lineItemAllocation, subtotal, raw_discount_total, discount_total, lineItemTotals, taxRate, includesTax, taxIncludedInPrice, taxLines, _d, noDiscountContext, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _c = options.calculation_context;
                        if (_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getCalculationContext(cartOrOrder, {
                                exclude_shipping: true,
                                exclude_gift_cards: options.exclude_gift_cards,
                            })];
                    case 1:
                        _c = (_f.sent());
                        _f.label = 2;
                    case 2:
                        calculationContext = _c;
                        lineItemAllocation = calculationContext.allocation_map[lineItem.id] || {};
                        subtotal = lineItem.unit_price * lineItem.quantity;
                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) &&
                            lineItem.includes_tax &&
                            options.include_tax) {
                            subtotal = 0; // in that case we need to know the tax rate to compute it later
                        }
                        raw_discount_total = (_b = (_a = lineItemAllocation.discount) === null || _a === void 0 ? void 0 : _a.amount) !== null && _b !== void 0 ? _b : 0;
                        discount_total = Math.round(raw_discount_total);
                        lineItemTotals = {
                            unit_price: lineItem.unit_price,
                            quantity: lineItem.quantity,
                            subtotal: subtotal,
                            discount_total: discount_total,
                            total: subtotal - discount_total,
                            original_total: subtotal,
                            original_tax_total: 0,
                            tax_total: 0,
                            tax_lines: lineItem.tax_lines || [],
                            raw_discount_total: raw_discount_total,
                        };
                        if (!options.include_tax) return [3 /*break*/, 8];
                        if (!((0, orders_1.isOrder)(cartOrOrder) && cartOrOrder.tax_rate != null)) return [3 /*break*/, 3];
                        taxRate = cartOrOrder.tax_rate / 100;
                        includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && lineItem.includes_tax;
                        taxIncludedInPrice = !lineItem.includes_tax
                            ? 0
                            : Math.round((0, utils_2.calculatePriceTaxAmount)({
                                price: lineItem.unit_price,
                                taxRate: taxRate,
                                includesTax: includesTax,
                            }));
                        lineItemTotals.subtotal =
                            (lineItem.unit_price - taxIncludedInPrice) * lineItem.quantity;
                        lineItemTotals.total = lineItemTotals.subtotal;
                        lineItemTotals.original_tax_total = lineItemTotals.subtotal * taxRate;
                        lineItemTotals.tax_total =
                            (lineItemTotals.subtotal - discount_total) * taxRate;
                        lineItemTotals.total += lineItemTotals.tax_total;
                        lineItemTotals.original_total += lineItemTotals.original_tax_total;
                        return [3 /*break*/, 8];
                    case 3:
                        taxLines = void 0;
                        if (!(options.use_tax_lines || (0, orders_1.isOrder)(cartOrOrder))) return [3 /*break*/, 4];
                        if (!(0, utils_1.isDefined)(lineItem.tax_lines) && lineItem.variant_id) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax Lines must be joined on items to calculate taxes");
                        }
                        taxLines = lineItem.tax_lines;
                        return [3 /*break*/, 7];
                    case 4:
                        if (!lineItem.is_return) return [3 /*break*/, 5];
                        if (!(0, utils_1.isDefined)(lineItem.tax_lines) && lineItem.variant_id) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Return Line Items must join tax lines");
                        }
                        taxLines = lineItem.tax_lines;
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.taxProviderService_
                            .withTransaction(this.activeManager_)
                            .getTaxLines([lineItem], calculationContext)];
                    case 6:
                        taxLines = (_f.sent());
                        _f.label = 7;
                    case 7:
                        lineItemTotals.tax_lines = taxLines;
                        _f.label = 8;
                    case 8:
                        if (!(lineItemTotals.tax_lines.length > 0)) return [3 /*break*/, 11];
                        _d = lineItemTotals;
                        return [4 /*yield*/, this.taxCalculationStrategy_.calculate([lineItem], lineItemTotals.tax_lines, calculationContext)];
                    case 9:
                        _d.tax_total = _f.sent();
                        noDiscountContext = __assign(__assign({}, calculationContext), { allocation_map: {} });
                        _e = lineItemTotals;
                        return [4 /*yield*/, this.taxCalculationStrategy_.calculate([lineItem], lineItemTotals.tax_lines, noDiscountContext)];
                    case 10:
                        _e.original_tax_total =
                            _f.sent();
                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) &&
                            lineItem.includes_tax) {
                            lineItemTotals.subtotal +=
                                lineItem.unit_price * lineItem.quantity -
                                    lineItemTotals.original_tax_total;
                            lineItemTotals.total += lineItemTotals.subtotal;
                            lineItemTotals.original_total += lineItemTotals.subtotal;
                        }
                        lineItemTotals.total += lineItemTotals.tax_total;
                        lineItemTotals.original_total += lineItemTotals.original_tax_total;
                        _f.label = 11;
                    case 11: return [2 /*return*/, lineItemTotals];
                }
            });
        });
    };
    /**
     * Gets a total for a line item. The total can take gift cards, discounts and
     * taxes into account. This can be controlled through the options.
     * @param lineItem - the line item to calculate a total for
     * @param cartOrOrder - the cart or order to use as context for the calculation
     * @param options - the options to use for the calculation
     * @returns the line item total
     */
    TotalsService.prototype.getLineItemTotal = function (lineItem, cartOrOrder, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var lineItemTotals, toReturn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLineItemTotals(lineItem, cartOrOrder, {
                            include_tax: options.include_tax,
                        })];
                    case 1:
                        lineItemTotals = _a.sent();
                        toReturn = lineItemTotals.subtotal;
                        if (!options.exclude_discounts) {
                            toReturn += lineItemTotals.discount_total;
                        }
                        if (options.include_tax) {
                            toReturn += lineItemTotals.tax_total;
                        }
                        return [2 /*return*/, toReturn];
                }
            });
        });
    };
    /**
     * Gets the amount that can be gift carded on a cart. In regions where gift
     * cards are taxable this amount should exclude taxes.
     * @param cartOrOrder - the cart or order to get gift card amount for
     * @return the gift card amount applied to the cart or order
     */
    TotalsService.prototype.getGiftCardableAmount = function (cartOrOrder) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var subtotal, discountTotal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!((_a = cartOrOrder.region) === null || _a === void 0 ? void 0 : _a.gift_cards_taxable)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getSubtotal(cartOrOrder)];
                    case 1:
                        subtotal = _b.sent();
                        return [4 /*yield*/, this.getDiscountTotal(cartOrOrder)];
                    case 2:
                        discountTotal = _b.sent();
                        return [2 /*return*/, subtotal - discountTotal];
                    case 3: return [4 /*yield*/, this.getTotal(cartOrOrder, {
                            exclude_gift_cards: true,
                        })];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * Gets the gift card amount on a cart or order.
     * @param cartOrOrder - the cart or order to get gift card amount for
     * @return the gift card amount applied to the cart or order
     */
    TotalsService.prototype.getGiftCardTotal = function (cartOrOrder, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var giftCardable, subtotal, discountTotal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof opts.gift_cardable !== "undefined")) return [3 /*break*/, 1];
                        giftCardable = opts.gift_cardable;
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.getSubtotal(cartOrOrder)];
                    case 2:
                        subtotal = _a.sent();
                        return [4 /*yield*/, this.getDiscountTotal(cartOrOrder)];
                    case 3:
                        discountTotal = _a.sent();
                        giftCardable = subtotal - discountTotal;
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.newTotalsService_.getGiftCardTotals(giftCardable, {
                            region: cartOrOrder.region,
                            giftCards: cartOrOrder.gift_cards || [],
                            giftCardTransactions: cartOrOrder["gift_card_transactions"] || [],
                        })];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Calculates the total discount amount for each of the different supported
     * discount types. If discounts aren't present or invalid returns 0.
     * @param cartOrOrder - the cart or order to calculate discounts for
     * @return the total discounts amount
     */
    TotalsService.prototype.getDiscountTotal = function (cartOrOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var subtotal, discountTotal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSubtotal(cartOrOrder, {
                            excludeNonDiscounts: true,
                        })];
                    case 1:
                        subtotal = _a.sent();
                        discountTotal = Math.round(this.getLineItemAdjustmentsTotal(cartOrOrder));
                        if (subtotal < 0) {
                            return [2 /*return*/, this.rounded(Math.max(subtotal, discountTotal))];
                        }
                        return [2 /*return*/, this.rounded(Math.min(subtotal, discountTotal))];
                }
            });
        });
    };
    /**
     * Prepares the calculation context for a tax total calculation.
     * @param calculationContextData - the calculationContextData to get the calculation context for
     * @param options - options to gather context by
     * @return the tax calculation context
     */
    TotalsService.prototype.getCalculationContext = function (calculationContextData, options) {
        var _a;
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var allocationMap, shippingMethods;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getAllocationMap(calculationContextData, {
                            exclude_gift_cards: options.exclude_gift_cards,
                            exclude_discounts: options.exclude_discounts,
                        })];
                    case 1:
                        allocationMap = _b.sent();
                        shippingMethods = [];
                        // Default to include shipping methods
                        if (!options.exclude_shipping) {
                            shippingMethods = calculationContextData.shipping_methods || [];
                        }
                        return [2 /*return*/, {
                                shipping_address: calculationContextData.shipping_address,
                                shipping_methods: shippingMethods,
                                customer: calculationContextData.customer,
                                region: calculationContextData.region,
                                is_return: (_a = options.is_return) !== null && _a !== void 0 ? _a : false,
                                allocation_map: allocationMap,
                            }];
                }
            });
        });
    };
    /**
     * Rounds a number using Math.round.
     * @param value - the value to round
     * @return the rounded value
     */
    TotalsService.prototype.rounded = function (value) {
        return Math.round(value);
    };
    return TotalsService;
}(interfaces_1.TransactionBaseService));
exports.default = TotalsService;
//# sourceMappingURL=totals.js.map