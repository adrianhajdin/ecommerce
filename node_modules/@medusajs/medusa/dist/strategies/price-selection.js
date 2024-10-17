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
var interfaces_1 = require("../interfaces");
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var PriceSelectionStrategy = /** @class */ (function (_super) {
    __extends(PriceSelectionStrategy, _super);
    function PriceSelectionStrategy(_a) {
        var manager = _a.manager, featureFlagRouter = _a.featureFlagRouter, moneyAmountRepository = _a.moneyAmountRepository, cacheService = _a.cacheService;
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.manager_ = manager;
        _this.moneyAmountRepository_ = moneyAmountRepository;
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.cacheService_ = cacheService;
        return _this;
    }
    PriceSelectionStrategy.prototype.calculateVariantPrice = function (data, context) {
        return __awaiter(this, void 0, void 0, function () {
            var dataMap, cacheKeysMap, nonCachedData, variantPricesMap, cacheHits, _a, _b, _c, index, cacheHit, variantId, results;
            var e_1, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        dataMap = new Map(data.map(function (d) { return [d.variantId, d]; }));
                        cacheKeysMap = new Map(data.map(function (_a) {
                            var variantId = _a.variantId, quantity = _a.quantity;
                            return [
                                variantId,
                                _this.getCacheKey(variantId, __assign(__assign({}, context), { quantity: quantity })),
                            ];
                        }));
                        nonCachedData = [];
                        variantPricesMap = new Map();
                        if (!!context.ignore_cache) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([], __read(cacheKeysMap), false).map(function (_a) {
                                var _b = __read(_a, 2), cacheKey = _b[1];
                                return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0: return [4 /*yield*/, this.cacheService_.get(cacheKey)];
                                            case 1: return [2 /*return*/, _c.sent()];
                                        }
                                    });
                                });
                            }))];
                    case 1:
                        cacheHits = _e.sent();
                        if (!cacheHits.length) {
                            nonCachedData.push.apply(nonCachedData, __spreadArray([], __read(dataMap.values()), false));
                        }
                        try {
                            for (_a = __values(cacheHits.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), index = _c[0], cacheHit = _c[1];
                                variantId = data[index].variantId;
                                if (cacheHit) {
                                    variantPricesMap.set(variantId, cacheHit);
                                    continue;
                                }
                                nonCachedData.push(dataMap.get(variantId));
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        nonCachedData.push.apply(nonCachedData, __spreadArray([], __read(dataMap.values()), false));
                        _e.label = 3;
                    case 3:
                        results = new Map();
                        if (!this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.calculateVariantPrice_new(nonCachedData, context)];
                    case 4:
                        results = _e.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.calculateVariantPrice_old(nonCachedData, context)];
                    case 6:
                        results = _e.sent();
                        _e.label = 7;
                    case 7: return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([], __read(results), false).map(function (_a) {
                            var _b = __read(_a, 2), variantId = _b[0], prices = _b[1];
                            return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            variantPricesMap.set(variantId, prices);
                                            if (!!context.ignore_cache) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.cacheService_.set(cacheKeysMap.get(variantId), prices)];
                                        case 1:
                                            _c.sent();
                                            _c.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            });
                        }))];
                    case 8:
                        _e.sent();
                        return [2 /*return*/, variantPricesMap];
                }
            });
        });
    };
    PriceSelectionStrategy.prototype.calculateVariantPrice_new = function (data, context) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var moneyRepo, _f, variantsPrices, variantPricesMap, _loop_1, _g, _h, _j, variantId, prices;
            var e_2, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        moneyRepo = this.activeManager_.withRepository(this.moneyAmountRepository_);
                        return [4 /*yield*/, moneyRepo.findManyForVariantsInRegion(data.map(function (d) { return d.variantId; }), context.region_id, context.currency_code, context.customer_id, context.include_discount_prices, true)];
                    case 1:
                        _f = __read.apply(void 0, [_l.sent(), 1]), variantsPrices = _f[0];
                        variantPricesMap = new Map();
                        _loop_1 = function (variantId, prices) {
                            var e_3, _m;
                            var dataItem = data.find(function (d) { return d.variantId === variantId; });
                            var result = {
                                originalPrice: null,
                                calculatedPrice: null,
                                prices: prices,
                                originalPriceIncludesTax: null,
                                calculatedPriceIncludesTax: null,
                            };
                            if (!prices.length || !context) {
                                variantPricesMap.set(variantId, result);
                            }
                            var taxRate = (_a = context.tax_rates) === null || _a === void 0 ? void 0 : _a.reduce(function (accRate, nextTaxRate) {
                                return accRate + (nextTaxRate.rate || 0) / 100;
                            }, 0);
                            try {
                                for (var prices_1 = (e_3 = void 0, __values(prices)), prices_1_1 = prices_1.next(); !prices_1_1.done; prices_1_1 = prices_1.next()) {
                                    var ma = prices_1_1.value;
                                    var isTaxInclusive = ((_b = ma.currency) === null || _b === void 0 ? void 0 : _b.includes_tax) || false;
                                    if ((_c = ma.price_list) === null || _c === void 0 ? void 0 : _c.includes_tax) {
                                        // PriceList specific price so use the PriceList tax setting
                                        isTaxInclusive = ma.price_list.includes_tax;
                                    }
                                    else if ((_d = ma.region) === null || _d === void 0 ? void 0 : _d.includes_tax) {
                                        // Region specific price so use the Region tax setting
                                        isTaxInclusive = ma.region.includes_tax;
                                    }
                                    delete ma.currency;
                                    delete ma.region;
                                    if (context.region_id &&
                                        ma.region_id === context.region_id &&
                                        ma.price_list_id === null &&
                                        ma.min_quantity === null &&
                                        ma.max_quantity === null) {
                                        result.originalPriceIncludesTax = isTaxInclusive;
                                        result.originalPrice = ma.amount;
                                    }
                                    if (context.currency_code &&
                                        ma.currency_code === context.currency_code &&
                                        ma.price_list_id === null &&
                                        ma.min_quantity === null &&
                                        ma.max_quantity === null &&
                                        result.originalPrice === null // region prices take precedence
                                    ) {
                                        result.originalPriceIncludesTax = isTaxInclusive;
                                        result.originalPrice = ma.amount;
                                    }
                                    if (isValidQuantity(ma, dataItem.quantity) &&
                                        isValidAmount(ma.amount, result, isTaxInclusive, taxRate) &&
                                        ((context.currency_code &&
                                            ma.currency_code === context.currency_code) ||
                                            (context.region_id && ma.region_id === context.region_id))) {
                                        result.calculatedPrice = ma.amount;
                                        result.calculatedPriceType = ((_e = ma.price_list) === null || _e === void 0 ? void 0 : _e.type) || interfaces_1.PriceType.DEFAULT;
                                        result.calculatedPriceIncludesTax = isTaxInclusive;
                                    }
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (prices_1_1 && !prices_1_1.done && (_m = prices_1.return)) _m.call(prices_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            variantPricesMap.set(variantId, result);
                        };
                        try {
                            for (_g = __values(Object.entries(variantsPrices)), _h = _g.next(); !_h.done; _h = _g.next()) {
                                _j = __read(_h.value, 2), variantId = _j[0], prices = _j[1];
                                _loop_1(variantId, prices);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_h && !_h.done && (_k = _g.return)) _k.call(_g);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/, variantPricesMap];
                }
            });
        });
    };
    PriceSelectionStrategy.prototype.calculateVariantPrice_old = function (data, context) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var moneyRepo, _b, variantsPrices, variantPricesMap, _loop_2, _c, _d, _e, variantId, prices;
            var e_4, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        moneyRepo = this.activeManager_.withRepository(this.moneyAmountRepository_);
                        return [4 /*yield*/, moneyRepo.findManyForVariantsInRegion(data.map(function (d) { return d.variantId; }), context.region_id, context.currency_code, context.customer_id, context.include_discount_prices)];
                    case 1:
                        _b = __read.apply(void 0, [_g.sent(), 1]), variantsPrices = _b[0];
                        variantPricesMap = new Map();
                        _loop_2 = function (variantId, prices) {
                            var e_5, _h;
                            var dataItem = data.find(function (d) { return d.variantId === variantId; });
                            var result = {
                                originalPrice: null,
                                calculatedPrice: null,
                                prices: prices,
                            };
                            if (!prices.length || !context) {
                                variantPricesMap.set(variantId, result);
                            }
                            try {
                                for (var prices_2 = (e_5 = void 0, __values(prices)), prices_2_1 = prices_2.next(); !prices_2_1.done; prices_2_1 = prices_2.next()) {
                                    var ma = prices_2_1.value;
                                    delete ma.currency;
                                    delete ma.region;
                                    if (context.region_id &&
                                        ma.region_id === context.region_id &&
                                        ma.price_list_id === null &&
                                        ma.min_quantity === null &&
                                        ma.max_quantity === null) {
                                        result.originalPrice = ma.amount;
                                    }
                                    if (context.currency_code &&
                                        ma.currency_code === context.currency_code &&
                                        ma.price_list_id === null &&
                                        ma.min_quantity === null &&
                                        ma.max_quantity === null &&
                                        result.originalPrice === null // region prices take precedence
                                    ) {
                                        result.originalPrice = ma.amount;
                                    }
                                    if (isValidQuantity(ma, dataItem.quantity) &&
                                        (result.calculatedPrice === null ||
                                            ma.amount < result.calculatedPrice) &&
                                        ((context.currency_code &&
                                            ma.currency_code === context.currency_code) ||
                                            (context.region_id && ma.region_id === context.region_id))) {
                                        result.calculatedPrice = ma.amount;
                                        result.calculatedPriceType = ((_a = ma.price_list) === null || _a === void 0 ? void 0 : _a.type) || interfaces_1.PriceType.DEFAULT;
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (prices_2_1 && !prices_2_1.done && (_h = prices_2.return)) _h.call(prices_2);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            variantPricesMap.set(variantId, result);
                        };
                        try {
                            for (_c = __values(Object.entries(variantsPrices)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                _e = __read(_d.value, 2), variantId = _e[0], prices = _e[1];
                                _loop_2(variantId, prices);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        return [2 /*return*/, variantPricesMap];
                }
            });
        });
    };
    PriceSelectionStrategy.prototype.onVariantsPricesUpdate = function (variantIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(variantIds.map(function (id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.cacheService_.invalidate("ps:".concat(id, ":*"))];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PriceSelectionStrategy.prototype.getCacheKey = function (variantId, context) {
        var _a;
        var taxRate = ((_a = context.tax_rates) === null || _a === void 0 ? void 0 : _a.reduce(function (accRate, nextTaxRate) {
            return accRate + (nextTaxRate.rate || 0) / 100;
        }, 0)) || 0;
        return "ps:".concat(variantId, ":").concat(context.region_id, ":").concat(context.currency_code, ":").concat(context.customer_id, ":").concat(context.quantity, ":").concat(context.include_discount_prices, ":").concat(taxRate);
    };
    return PriceSelectionStrategy;
}(interfaces_1.AbstractPriceSelectionStrategy));
var isValidAmount = function (amount, result, isTaxInclusive, taxRate) {
    if (result.calculatedPrice === null) {
        return true;
    }
    if (isTaxInclusive === result.calculatedPriceIncludesTax) {
        // if both or neither are tax inclusive compare equally
        return amount < result.calculatedPrice;
    }
    if (typeof taxRate !== "undefined") {
        return isTaxInclusive
            ? amount < (1 + taxRate) * result.calculatedPrice
            : (1 + taxRate) * amount < result.calculatedPrice;
    }
    // if we dont have a taxrate we can't compare mixed prices
    return false;
};
var isValidQuantity = function (price, quantity) {
    return ((0, medusa_core_utils_1.isDefined)(quantity) && isValidPriceWithQuantity(price, quantity)) ||
        (typeof quantity === "undefined" && isValidPriceWithoutQuantity(price));
};
var isValidPriceWithoutQuantity = function (price) {
    return (!price.max_quantity && !price.min_quantity) ||
        ((!price.min_quantity || price.min_quantity === 0) && price.max_quantity);
};
var isValidPriceWithQuantity = function (price, quantity) {
    return (!price.min_quantity || price.min_quantity <= quantity) &&
        (!price.max_quantity || price.max_quantity >= quantity);
};
exports.default = PriceSelectionStrategy;
//# sourceMappingURL=price-selection.js.map