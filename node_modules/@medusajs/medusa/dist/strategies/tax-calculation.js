"use strict";
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
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_1 = require("../utils");
var TaxCalculationStrategy = /** @class */ (function () {
    function TaxCalculationStrategy(_a) {
        var featureFlagRouter = _a.featureFlagRouter;
        this.featureFlagRouter_ = featureFlagRouter;
    }
    TaxCalculationStrategy.prototype.calculate = function (items, taxLines, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var lineItemsTaxLines, shippingMethodsTaxLines, lineItemsTax, shippingMethodsTax;
            return __generator(this, function (_a) {
                lineItemsTaxLines = taxLines.filter(function (tl) { return "item_id" in tl; });
                shippingMethodsTaxLines = taxLines.filter(function (tl) { return "shipping_method_id" in tl; });
                lineItemsTax = this.calculateLineItemsTax(items, lineItemsTaxLines, calculationContext);
                shippingMethodsTax = this.calculateShippingMethodsTax(calculationContext.shipping_methods, shippingMethodsTaxLines);
                return [2 /*return*/, Math.round(lineItemsTax + shippingMethodsTax)];
            });
        });
    };
    TaxCalculationStrategy.prototype.calculateLineItemsTax = function (items, taxLines, context) {
        var e_1, _a;
        var _b, _c;
        var taxTotal = 0;
        var _loop_1 = function (item) {
            var e_2, _d;
            var allocations = context.allocation_map[item.id] || {};
            var filteredTaxLines = taxLines.filter(function (tl) { return tl.item_id === item.id; });
            var includesTax = this_1.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && item.includes_tax;
            var taxableAmount = void 0;
            if (includesTax) {
                var taxRate = filteredTaxLines.reduce(function (accRate, nextLineItemTaxLine) {
                    return accRate + (nextLineItemTaxLine.rate || 0) / 100;
                }, 0);
                var taxIncludedInPrice = Math.round((0, utils_1.calculatePriceTaxAmount)({
                    price: item.unit_price,
                    taxRate: taxRate,
                    includesTax: includesTax,
                }));
                taxableAmount = (item.unit_price - taxIncludedInPrice) * item.quantity;
            }
            else {
                taxableAmount = item.unit_price * item.quantity;
            }
            taxableAmount -= (_c = (_b = allocations.discount) === null || _b === void 0 ? void 0 : _b.amount) !== null && _c !== void 0 ? _c : 0;
            try {
                for (var filteredTaxLines_1 = (e_2 = void 0, __values(filteredTaxLines)), filteredTaxLines_1_1 = filteredTaxLines_1.next(); !filteredTaxLines_1_1.done; filteredTaxLines_1_1 = filteredTaxLines_1.next()) {
                    var filteredTaxLine = filteredTaxLines_1_1.value;
                    taxTotal += Math.round((0, utils_1.calculatePriceTaxAmount)({
                        price: taxableAmount,
                        taxRate: filteredTaxLine.rate / 100,
                    }));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (filteredTaxLines_1_1 && !filteredTaxLines_1_1.done && (_d = filteredTaxLines_1.return)) _d.call(filteredTaxLines_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        var this_1 = this;
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                _loop_1(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return taxTotal;
    };
    TaxCalculationStrategy.prototype.calculateShippingMethodsTax = function (shipping_methods, taxLines) {
        var e_3, _a;
        var taxInclusiveEnabled = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key);
        var taxTotal = 0;
        var _loop_2 = function (sm) {
            var e_4, _b;
            var lineRates = taxLines.filter(function (tl) { return tl.shipping_method_id === sm.id; });
            try {
                for (var lineRates_1 = (e_4 = void 0, __values(lineRates)), lineRates_1_1 = lineRates_1.next(); !lineRates_1_1.done; lineRates_1_1 = lineRates_1.next()) {
                    var lineRate = lineRates_1_1.value;
                    taxTotal += (0, utils_1.calculatePriceTaxAmount)({
                        price: sm.price,
                        taxRate: lineRate.rate / 100,
                        includesTax: taxInclusiveEnabled && sm.includes_tax,
                    });
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (lineRates_1_1 && !lineRates_1_1.done && (_b = lineRates_1.return)) _b.call(lineRates_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        try {
            for (var shipping_methods_1 = __values(shipping_methods), shipping_methods_1_1 = shipping_methods_1.next(); !shipping_methods_1_1.done; shipping_methods_1_1 = shipping_methods_1.next()) {
                var sm = shipping_methods_1_1.value;
                _loop_2(sm);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (shipping_methods_1_1 && !shipping_methods_1_1.done && (_a = shipping_methods_1.return)) _a.call(shipping_methods_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return taxTotal;
    };
    return TaxCalculationStrategy;
}());
exports.default = TaxCalculationStrategy;
//# sourceMappingURL=tax-calculation.js.map