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
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_2 = require("../utils");
/**
 * Allows retrieval of prices.
 */
var PricingService = /** @class */ (function (_super) {
    __extends(PricingService, _super);
    function PricingService(_a) {
        var productVariantService = _a.productVariantService, taxProviderService = _a.taxProviderService, regionService = _a.regionService, priceSelectionStrategy = _a.priceSelectionStrategy, featureFlagRouter = _a.featureFlagRouter, customerService = _a.customerService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.regionService = regionService;
        _this.taxProviderService = taxProviderService;
        _this.priceSelectionStrategy = priceSelectionStrategy;
        _this.productVariantService = productVariantService;
        _this.customerService_ = customerService;
        _this.featureFlagRouter = featureFlagRouter;
        return _this;
    }
    Object.defineProperty(PricingService.prototype, "pricingModuleService", {
        get: function () {
            return this.__container__.pricingModuleService;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PricingService.prototype, "remoteQuery", {
        get: function () {
            return this.__container__.remoteQuery;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Collects additional information necessary for completing the price
     * selection.
     * @param context - the price selection context to use
     * @return The pricing context
     */
    PricingService.prototype.collectPricingContext = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var automaticTaxes, taxRate, currencyCode, region;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        automaticTaxes = false;
                        taxRate = null;
                        currencyCode = context.currency_code;
                        if (!context.region_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.regionService
                                .withTransaction(this.activeManager_)
                                .retrieve(context.region_id, {
                                select: ["id", "currency_code", "automatic_taxes", "tax_rate"],
                            })];
                    case 1:
                        region = _a.sent();
                        currencyCode = region.currency_code;
                        automaticTaxes = region.automatic_taxes;
                        taxRate = region.tax_rate;
                        _a.label = 2;
                    case 2: return [2 /*return*/, {
                            price_selection: __assign(__assign({}, context), { currency_code: currencyCode }),
                            automatic_taxes: automaticTaxes,
                            tax_rate: taxRate,
                        }];
                }
            });
        });
    };
    /**
     * Gets the prices for a product variant
     * @param variantPricing - the prices retrieved from a variant
     * @param productRates - the tax rates that the product has applied
     * @return The tax related variant prices.
     */
    PricingService.prototype.calculateTaxes = function (variantPricing, productRates) {
        var rate = productRates.reduce(function (accRate, nextTaxRate) {
            return accRate + (nextTaxRate.rate || 0) / 100;
        }, 0);
        var taxedPricing = {
            original_tax: null,
            calculated_tax: null,
            original_price_incl_tax: null,
            calculated_price_incl_tax: null,
            tax_rates: productRates,
        };
        if (variantPricing.calculated_price !== null) {
            var includesTax = !!(this.featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && variantPricing.calculated_price_includes_tax);
            taxedPricing.calculated_tax = Math.round((0, utils_2.calculatePriceTaxAmount)({
                price: variantPricing.calculated_price,
                taxRate: rate,
                includesTax: includesTax,
            }));
            taxedPricing.calculated_price_incl_tax =
                variantPricing.calculated_price_includes_tax
                    ? variantPricing.calculated_price
                    : variantPricing.calculated_price + taxedPricing.calculated_tax;
        }
        if (variantPricing.original_price !== null) {
            var includesTax = !!(this.featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && variantPricing.original_price_includes_tax);
            taxedPricing.original_tax = Math.round((0, utils_2.calculatePriceTaxAmount)({
                price: variantPricing.original_price,
                taxRate: rate,
                includesTax: includesTax,
            }));
            taxedPricing.original_price_incl_tax =
                variantPricing.original_price_includes_tax
                    ? variantPricing.original_price
                    : variantPricing.original_price + taxedPricing.original_tax;
        }
        return taxedPricing;
    };
    PricingService.prototype.getProductVariantPricing_ = function (data, context) {
        return __awaiter(this, void 0, void 0, function () {
            var variantsPricing, pricingResultMap, _a, _b, _c, variantId, pricing, pricingResult, taxRates, taxResults;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.priceSelectionStrategy
                            .withTransaction(this.activeManager_)
                            .calculateVariantPrice(data, context.price_selection)];
                    case 1:
                        variantsPricing = _e.sent();
                        pricingResultMap = new Map();
                        try {
                            for (_a = __values(variantsPricing.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), variantId = _c[0], pricing = _c[1];
                                pricingResult = {
                                    prices: pricing.prices,
                                    original_price: pricing.originalPrice,
                                    calculated_price: pricing.calculatedPrice,
                                    calculated_price_type: pricing.calculatedPriceType,
                                    original_price_includes_tax: pricing.originalPriceIncludesTax,
                                    calculated_price_includes_tax: pricing.calculatedPriceIncludesTax,
                                    original_price_incl_tax: null,
                                    calculated_price_incl_tax: null,
                                    original_tax: null,
                                    calculated_tax: null,
                                    tax_rates: null,
                                };
                                if (context.automatic_taxes && context.price_selection.region_id) {
                                    taxRates = context.price_selection.tax_rates || [];
                                    taxResults = this.calculateTaxes(pricingResult, taxRates);
                                    pricingResult.original_price_incl_tax =
                                        taxResults.original_price_incl_tax;
                                    pricingResult.calculated_price_incl_tax =
                                        taxResults.calculated_price_incl_tax;
                                    pricingResult.original_tax = taxResults.original_tax;
                                    pricingResult.calculated_tax = taxResults.calculated_tax;
                                    pricingResult.tax_rates = taxResults.tax_rates;
                                }
                                pricingResultMap.set(variantId, pricingResult);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, pricingResultMap];
                }
            });
        });
    };
    /**
     * Gets the prices for a product variant.
     * @param variant
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    PricingService.prototype.getProductVariantPricing = function (variant, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, productRates, productId, productVariantPricing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 2:
                        pricingContext = _a.sent();
                        _a.label = 3;
                    case 3:
                        productRates = new Map();
                        if (!(pricingContext.automatic_taxes &&
                            pricingContext.price_selection.region_id)) return [3 /*break*/, 5];
                        productId = variant.product_id;
                        return [4 /*yield*/, this.taxProviderService.getRegionRatesForProduct(productId, {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 4:
                        productRates = _a.sent();
                        pricingContext.price_selection.tax_rates = productRates.get(productId);
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.getProductVariantPricing_([
                            {
                                variantId: variant.id,
                                quantity: pricingContext.price_selection.quantity,
                            },
                        ], pricingContext)];
                    case 6:
                        productVariantPricing = _a.sent();
                        return [2 /*return*/, productVariantPricing.get(variant.id)];
                }
            });
        });
    };
    /**
     * Gets the prices for a product variant by a variant id.
     * @param variantId - the id of the variant to get prices for
     * @param context - the price selection context to use
     * @return The product variant prices
     * @deprecated Use {@link getProductVariantsPricing} instead.
     */
    PricingService.prototype.getProductVariantPricingById = function (variantId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, productRates, product_id, regionRatesForProduct, productVariantPricing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 2:
                        pricingContext = _a.sent();
                        _a.label = 3;
                    case 3:
                        productRates = [];
                        if (!(pricingContext.automatic_taxes &&
                            pricingContext.price_selection.region_id)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.productVariantService
                                .withTransaction(this.activeManager_)
                                .retrieve(variantId, { select: ["id", "product_id"] })];
                    case 4:
                        product_id = (_a.sent()).product_id;
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(this.activeManager_)
                                .getRegionRatesForProduct([product_id], {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 5:
                        regionRatesForProduct = _a.sent();
                        productRates = regionRatesForProduct.get(product_id);
                        _a.label = 6;
                    case 6:
                        pricingContext.price_selection.tax_rates = productRates;
                        return [4 /*yield*/, this.getProductVariantPricing_([{ variantId: variantId }], pricingContext)];
                    case 7:
                        productVariantPricing = _a.sent();
                        return [2 /*return*/, productVariantPricing.get(variantId)];
                }
            });
        });
    };
    /**
     * Gets the prices for a collection of variants.
     * @param data
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    PricingService.prototype.getProductVariantsPricing = function (data, context) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, dataMap, variants, productsRatesMap, productId, variantsPricingMap, pricingResult, data_1, data_1_1, variantId;
            var e_2, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 2:
                        pricingContext = _c.sent();
                        _c.label = 3;
                    case 3:
                        dataMap = new Map(data.map(function (d) { return [d.variantId, d]; }));
                        return [4 /*yield*/, this.productVariantService
                                .withTransaction(this.activeManager_)
                                .list({ id: data.map(function (d) { return d.variantId; }) }, { select: ["id", "product_id"] })];
                    case 4:
                        variants = _c.sent();
                        productsRatesMap = new Map();
                        if (!pricingContext.price_selection.region_id) return [3 /*break*/, 6];
                        productId = (_a = variants[0]) === null || _a === void 0 ? void 0 : _a.product_id;
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(this.activeManager_)
                                .getRegionRatesForProduct(productId, {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 5:
                        productsRatesMap = _c.sent();
                        pricingContext.price_selection.tax_rates =
                            productsRatesMap.get(productId);
                        _c.label = 6;
                    case 6: return [4 /*yield*/, this.getProductVariantPricing_(variants.map(function (v) { return ({
                            variantId: v.id,
                            quantity: dataMap.get(v.id).quantity,
                        }); }), pricingContext)];
                    case 7:
                        variantsPricingMap = _c.sent();
                        pricingResult = {};
                        try {
                            for (data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                                variantId = data_1_1.value.variantId;
                                pricingResult[variantId] = variantsPricingMap.get(variantId);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/, pricingResult];
                }
            });
        });
    };
    PricingService.prototype.getProductPricing_ = function (data, context) {
        return __awaiter(this, void 0, void 0, function () {
            var taxRatesMap, productsPricingMap;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(context.automatic_taxes && context.price_selection.region_id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(this.activeManager_)
                                .getRegionRatesForProduct(data.map(function (d) { return d.productId; }), {
                                id: context.price_selection.region_id,
                                tax_rate: context.tax_rate,
                            })];
                    case 1:
                        taxRatesMap = _a.sent();
                        _a.label = 2;
                    case 2:
                        productsPricingMap = new Map();
                        return [4 /*yield*/, (0, utils_1.promiseAll)(data.map(function (_a) {
                                var productId = _a.productId, variants = _a.variants;
                                return __awaiter(_this, void 0, void 0, function () {
                                    var pricingData, context_, variantsPricingMap, productVariantsPricing;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                pricingData = variants.map(function (variant) {
                                                    return { variantId: variant.id };
                                                });
                                                context_ = __assign({}, context);
                                                if (context_.automatic_taxes && context_.price_selection.region_id) {
                                                    context_.price_selection.tax_rates = taxRatesMap.get(productId);
                                                }
                                                return [4 /*yield*/, this.getProductVariantPricing_(pricingData, context_)];
                                            case 1:
                                                variantsPricingMap = _b.sent();
                                                productVariantsPricing = productsPricingMap.get(productId) || {};
                                                variantsPricingMap.forEach(function (variantPricing, variantId) {
                                                    productVariantsPricing[variantId] = variantPricing;
                                                });
                                                productsPricingMap.set(productId, productVariantsPricing);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, productsPricingMap];
                }
            });
        });
    };
    /**
     * Gets all the variant prices for a product. All the product's variants will
     * be fetched.
     * @param product - the product to get pricing for.
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    PricingService.prototype.getProductPricing = function (product, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, productPricing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        return [4 /*yield*/, this.getProductPricing_([{ productId: product.id, variants: product.variants }], pricingContext)];
                    case 2:
                        productPricing = _a.sent();
                        return [2 /*return*/, productPricing.get(product.id)];
                }
            });
        });
    };
    /**
     * Gets all the variant prices for a product by the product id
     * @param productId - the id of the product to get prices for
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    PricingService.prototype.getProductPricingById = function (productId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, variants, productPricing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        return [4 /*yield*/, this.productVariantService.list({ product_id: productId }, { select: ["id"] })];
                    case 2:
                        variants = _a.sent();
                        return [4 /*yield*/, this.getProductPricing_([{ productId: productId, variants: variants }], pricingContext)];
                    case 3:
                        productPricing = _a.sent();
                        return [2 /*return*/, productPricing.get(productId)];
                }
            });
        });
    };
    /**
     * Set additional prices on a list of product variants.
     * @param variants
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    PricingService.prototype.setVariantPrices = function (variants, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, variantsPricingMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        return [4 /*yield*/, this.getProductVariantsPricing(variants.map(function (v) { return ({
                                variantId: v.id,
                                quantity: context.quantity,
                            }); }), pricingContext)];
                    case 2:
                        variantsPricingMap = _a.sent();
                        return [2 /*return*/, variants.map(function (variant) {
                                var variantPricing = variantsPricingMap[variant.id];
                                Object.assign(variant, variantPricing);
                                return variant;
                            })];
                }
            });
        });
    };
    /**
     * Set additional prices on a list of products.
     * @param products - list of products on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    PricingService.prototype.setProductPrices = function (products, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, pricingData, productsVariantsPricingMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        pricingData = products
                            .filter(function (p) { return p.variants.length; })
                            .map(function (product) { return ({
                            productId: product.id,
                            variants: product.variants,
                        }); });
                        return [4 /*yield*/, this.getProductPricing_(pricingData, pricingContext)];
                    case 2:
                        productsVariantsPricingMap = _a.sent();
                        return [2 /*return*/, products.map(function (product) {
                                var _a;
                                if (!((_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.length)) {
                                    return product;
                                }
                                product.variants.map(function (productVariant) {
                                    var variantPricing = productsVariantsPricingMap.get(product.id);
                                    var pricing = variantPricing[productVariant.id];
                                    Object.assign(productVariant, pricing);
                                    return productVariant;
                                });
                                return product;
                            })];
                }
            });
        });
    };
    PricingService.prototype.setAdminVariantPricing = function (variants, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setVariantPrices(variants, context)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PricingService.prototype.setAdminProductPricing = function (products) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setProductPrices(products)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the prices for a shipping option.
     * @param shippingOption - the shipping option to get prices for
     * @param context - the price selection context to use
     * @return The shipping option prices
     */
    PricingService.prototype.getShippingOptionPricing = function (shippingOption, context) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, _b, shippingOptionRates, price, rate, includesTax, taxAmount, totalInclTax;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 5];
                    case 1:
                        if (!((_a = context) !== null && _a !== void 0)) return [3 /*break*/, 2];
                        _b = _a;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 3:
                        _b = (_c.sent());
                        _c.label = 4;
                    case 4:
                        pricingContext = _b;
                        _c.label = 5;
                    case 5:
                        shippingOptionRates = [];
                        if (!(pricingContext.automatic_taxes &&
                            pricingContext.price_selection.region_id)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(this.activeManager_)
                                .getRegionRatesForShipping(shippingOption.id, {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 6:
                        shippingOptionRates = _c.sent();
                        _c.label = 7;
                    case 7:
                        price = shippingOption.amount || 0;
                        rate = shippingOptionRates.reduce(function (accRate, nextTaxRate) {
                            return accRate + (nextTaxRate.rate || 0) / 100;
                        }, 0);
                        includesTax = this.featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && shippingOption.includes_tax;
                        taxAmount = Math.round((0, utils_2.calculatePriceTaxAmount)({
                            taxRate: rate,
                            price: price,
                            includesTax: includesTax,
                        }));
                        totalInclTax = includesTax ? price : price + taxAmount;
                        return [2 /*return*/, __assign(__assign({}, shippingOption), { price_incl_tax: totalInclTax, tax_rates: shippingOptionRates, tax_amount: taxAmount })];
                }
            });
        });
    };
    /**
     * Set additional prices on a list of shipping options.
     * @param shippingOptions - list of shipping options on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of shipping options with prices
     */
    PricingService.prototype.setShippingOptionPrices = function (shippingOptions, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var regions, shippingOptions_1, shippingOptions_1_1, shippingOption, contexts, shippingOptionPricingPromises;
            var e_3, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        regions = new Set();
                        try {
                            for (shippingOptions_1 = __values(shippingOptions), shippingOptions_1_1 = shippingOptions_1.next(); !shippingOptions_1_1.done; shippingOptions_1_1 = shippingOptions_1.next()) {
                                shippingOption = shippingOptions_1_1.value;
                                regions.add(shippingOption.region_id);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (shippingOptions_1_1 && !shippingOptions_1_1.done && (_a = shippingOptions_1.return)) _a.call(shippingOptions_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([], __read(regions), false).map(function (regionId) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = {};
                                            return [4 /*yield*/, this.collectPricingContext(__assign(__assign({}, context), { region_id: regionId }))];
                                        case 1: return [2 /*return*/, (_a.context = _b.sent(),
                                                _a.region_id = regionId,
                                                _a)];
                                    }
                                });
                            }); }))];
                    case 1:
                        contexts = _b.sent();
                        shippingOptionPricingPromises = [];
                        shippingOptions.map(function (shippingOption) { return __awaiter(_this, void 0, void 0, function () {
                            var pricingContext;
                            return __generator(this, function (_a) {
                                pricingContext = contexts.find(function (c) { return c.region_id === shippingOption.region_id; });
                                if (!pricingContext) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Could not find pricing context for shipping option");
                                }
                                shippingOptionPricingPromises.push(this.getShippingOptionPricing(shippingOption, pricingContext.context));
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, (0, utils_1.promiseAll)(shippingOptionPricingPromises)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return PricingService;
}(interfaces_1.TransactionBaseService));
exports.default = PricingService;
//# sourceMappingURL=pricing.js.map