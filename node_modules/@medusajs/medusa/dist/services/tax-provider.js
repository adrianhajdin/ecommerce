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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var cart_1 = require("../types/cart");
var utils_1 = require("@medusajs/utils");
/**
 * Finds tax providers and assists in tax related operations.
 */
var TaxProviderService = /** @class */ (function (_super) {
    __extends(TaxProviderService, _super);
    function TaxProviderService(container) {
        var _this = _super.call(this, container) || this;
        _this.container_ = container;
        _this.cacheService_ = container["cacheService"];
        _this.taxLineRepo_ = container["lineItemTaxLineRepository"];
        _this.smTaxLineRepo_ = container["shippingMethodTaxLineRepository"];
        _this.taxRateService_ = container["taxRateService"];
        _this.eventBus_ = container["eventBusService"];
        _this.taxProviderRepo_ = container["taxProviderRepository"];
        return _this;
    }
    TaxProviderService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tpRepo;
            return __generator(this, function (_a) {
                tpRepo = this.activeManager_.withRepository(this.taxProviderRepo_);
                return [2 /*return*/, tpRepo.find({})];
            });
        });
    };
    /**
     * Retrieves the relevant tax provider for the given region.
     * @param region - the region to get tax provider for.
     * @return the region specific tax provider
     */
    TaxProviderService.prototype.retrieveProvider = function (region) {
        var provider;
        if (region.tax_provider_id) {
            try {
                provider = this.container_["tp_".concat(region.tax_provider_id)];
            }
            catch (e) {
                // noop
            }
        }
        else {
            provider = this.container_["systemTaxService"];
        }
        if (!provider) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Could not find a tax provider with id: ".concat(region.tax_provider_id));
        }
        return provider;
    };
    TaxProviderService.prototype.clearLineItemsTaxLines = function (itemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxLineRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxLineRepo = transactionManager.withRepository(this.taxLineRepo_);
                                        return [4 /*yield*/, taxLineRepo.delete({ item_id: (0, typeorm_1.In)(itemIds) })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaxProviderService.prototype.clearTaxLines = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxLineRepo, shippingTaxRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        taxLineRepo = transactionManager.withRepository(this.taxLineRepo_);
                                        shippingTaxRepo = transactionManager.withRepository(this.smTaxLineRepo_);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)([
                                                taxLineRepo.deleteForCart(cartId),
                                                shippingTaxRepo.deleteForCart(cartId),
                                            ])];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Persists the tax lines relevant for an order to the database.
     * @param cartOrLineItems - the cart or line items to create tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the newly created tax lines
     */
    TaxProviderService.prototype.createTaxLines = function (cartOrLineItems, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxLines, itemTaxLineRepo, shippingTaxLineRepo, _a, shipping, lineItems;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        taxLines = [];
                                        if (!(0, cart_1.isCart)(cartOrLineItems)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.getTaxLines(cartOrLineItems.items, calculationContext)];
                                    case 1:
                                        taxLines = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.getTaxLines(cartOrLineItems, calculationContext)];
                                    case 3:
                                        taxLines = _b.sent();
                                        _b.label = 4;
                                    case 4:
                                        itemTaxLineRepo = transactionManager.withRepository(this.taxLineRepo_);
                                        shippingTaxLineRepo = transactionManager.withRepository(this.smTaxLineRepo_);
                                        _a = taxLines.reduce(function (acc, tl) {
                                            if ("item_id" in tl) {
                                                acc.lineItems.push(tl);
                                            }
                                            else {
                                                acc.shipping.push(tl);
                                            }
                                            return acc;
                                        }, { shipping: [], lineItems: [] }), shipping = _a.shipping, lineItems = _a.lineItems;
                                        return [4 /*yield*/, (0, utils_1.promiseAll)([
                                                itemTaxLineRepo.upsertLines(lineItems),
                                                shippingTaxLineRepo.upsertLines(shipping),
                                            ])];
                                    case 5: return [2 /*return*/, (_b.sent()).flat()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Persists the tax lines relevant for a shipping method to the database. Used
     * for return shipping methods.
     * @param shippingMethod - the shipping method to create tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the newly created tax lines
     */
    TaxProviderService.prototype.createShippingTaxLines = function (shippingMethod, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var taxLines;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getShippingTaxLines(shippingMethod, calculationContext)];
                                    case 1:
                                        taxLines = _a.sent();
                                        return [4 /*yield*/, transactionManager.save(taxLines)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the relevant tax lines for a shipping method. Note: this method
     * doesn't persist the tax lines. Use createShippingTaxLines if you wish to
     * persist the tax lines to the DB layer.
     * @param shippingMethod - the shipping method to get tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the computed tax lines
     */
    TaxProviderService.prototype.getShippingTaxLines = function (shippingMethod, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var calculationLines, taxProvider, providerLines, smTaxLineRepo;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {
                            shipping_method: shippingMethod
                        };
                        return [4 /*yield*/, this.getRegionRatesForShipping(shippingMethod.shipping_option_id, calculationContext.region)];
                    case 1:
                        calculationLines = [
                            (_a.rates = _b.sent(),
                                _a)
                        ];
                        taxProvider = this.retrieveProvider(calculationContext.region);
                        return [4 /*yield*/, taxProvider.getTaxLines([], calculationLines, calculationContext)];
                    case 2:
                        providerLines = _b.sent();
                        smTaxLineRepo = this.activeManager_.withRepository(this.smTaxLineRepo_);
                        // .create only creates entities nothing is persisted in DB
                        return [2 /*return*/, providerLines.map(function (pl) {
                                if (!("shipping_method_id" in pl)) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Expected only shipping method tax lines");
                                }
                                return smTaxLineRepo.create({
                                    shipping_method_id: pl.shipping_method_id,
                                    rate: pl.rate,
                                    name: pl.name,
                                    code: pl.code,
                                    metadata: pl.metadata,
                                });
                            })];
                }
            });
        });
    };
    /**
     * Gets the relevant tax lines for an order or cart. If an order is provided
     * the order's tax lines will be returned. If a cart is provided the tax lines
     * will be computed from the tax rules and potentially a 3rd party tax plugin.
     * Note: this method doesn't persist the tax lines. Use createTaxLines if you
     * wish to persist the tax lines to the DB layer.
     * @param lineItems - the cart or order to get tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the computed tax lines
     */
    TaxProviderService.prototype.getTaxLines = function (lineItems, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var productIds, productRatesMap, calculationLines, shippingCalculationLines, taxProvider, providerLines, liTaxLineRepo, smTaxLineRepo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productIds = __spreadArray([], __read(new Set(lineItems.map(function (item) { var _a; return (_a = item === null || item === void 0 ? void 0 : item.variant) === null || _a === void 0 ? void 0 : _a.product_id; }).filter(function (p) { return p; }))), false);
                        return [4 /*yield*/, this.getRegionRatesForProduct(productIds, calculationContext.region)];
                    case 1:
                        productRatesMap = _a.sent();
                        calculationLines = lineItems.map(function (item) {
                            var _a, _b, _c;
                            if (item.is_return) {
                                return null;
                            }
                            if ((_a = item.variant) === null || _a === void 0 ? void 0 : _a.product_id) {
                                return {
                                    item: item,
                                    rates: (_c = productRatesMap.get((_b = item.variant) === null || _b === void 0 ? void 0 : _b.product_id)) !== null && _c !== void 0 ? _c : [],
                                };
                            }
                            /*
                             * If the line item is custom and therefore not associated with a
                             * product we assume no taxes - we should consider adding rate overrides
                             * to custom lines at some point
                             */
                            return {
                                item: item,
                                rates: [],
                            };
                        });
                        return [4 /*yield*/, (0, utils_1.promiseAll)(calculationContext.shipping_methods.map(function (sm) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = {
                                                shipping_method: sm
                                            };
                                            return [4 /*yield*/, this.getRegionRatesForShipping(sm.shipping_option_id, calculationContext.region)];
                                        case 1: return [2 /*return*/, (_a.rates = _b.sent(),
                                                _a)];
                                    }
                                });
                            }); }))];
                    case 2:
                        shippingCalculationLines = _a.sent();
                        taxProvider = this.retrieveProvider(calculationContext.region);
                        return [4 /*yield*/, taxProvider.getTaxLines(calculationLines.filter(function (v) { return v !== null; }), shippingCalculationLines, calculationContext)];
                    case 3:
                        providerLines = _a.sent();
                        liTaxLineRepo = this.activeManager_.withRepository(this.taxLineRepo_);
                        smTaxLineRepo = this.activeManager_.withRepository(this.smTaxLineRepo_);
                        // .create only creates entities nothing is persisted in DB
                        return [2 /*return*/, providerLines.map(function (pl) {
                                if ("shipping_method_id" in pl) {
                                    return smTaxLineRepo.create({
                                        shipping_method_id: pl.shipping_method_id,
                                        rate: pl.rate,
                                        name: pl.name,
                                        code: pl.code,
                                        metadata: pl.metadata,
                                    });
                                }
                                if (!("item_id" in pl)) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax Provider returned invalid tax lines");
                                }
                                return liTaxLineRepo.create({
                                    item_id: pl.item_id,
                                    rate: pl.rate,
                                    name: pl.name,
                                    code: pl.code,
                                    metadata: pl.metadata,
                                });
                            })];
                }
            });
        });
    };
    /**
     * Return a map of tax lines for line items and shipping methods
     * @param items
     * @param calculationContext
     * @protected
     */
    TaxProviderService.prototype.getTaxLinesMap = function (items, calculationContext) {
        return __awaiter(this, void 0, void 0, function () {
            var lineItemsTaxLinesMap, shippingMethodsTaxLinesMap, taxLines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineItemsTaxLinesMap = {};
                        shippingMethodsTaxLinesMap = {};
                        return [4 /*yield*/, this.getTaxLines(items, calculationContext)];
                    case 1:
                        taxLines = _a.sent();
                        taxLines.forEach(function (taxLine) {
                            var _a, _b;
                            if ("item_id" in taxLine) {
                                var itemTaxLines = (_a = lineItemsTaxLinesMap[taxLine.item_id]) !== null && _a !== void 0 ? _a : [];
                                itemTaxLines.push(taxLine);
                                lineItemsTaxLinesMap[taxLine.item_id] = itemTaxLines;
                            }
                            if ("shipping_method_id" in taxLine) {
                                var shippingMethodTaxLines = (_b = shippingMethodsTaxLinesMap[taxLine.shipping_method_id]) !== null && _b !== void 0 ? _b : [];
                                shippingMethodTaxLines.push(taxLine);
                                shippingMethodsTaxLinesMap[taxLine.shipping_method_id] =
                                    shippingMethodTaxLines;
                            }
                        });
                        return [2 /*return*/, {
                                lineItemsTaxLines: lineItemsTaxLinesMap,
                                shippingMethodsTaxLines: shippingMethodsTaxLinesMap,
                            }];
                }
            });
        });
    };
    /**
     * Gets the tax rates configured for a shipping option. The rates are cached
     * between calls.
     * @param optionId - the option id of the shipping method.
     * @param regionDetails - the region to get configured rates for.
     * @return the tax rates configured for the shipping option.
     */
    TaxProviderService.prototype.getRegionRatesForShipping = function (optionId, regionDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, cacheHit, toReturn, optionRates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = this.getCacheKey(optionId, regionDetails.id);
                        return [4 /*yield*/, this.cacheService_.get(cacheKey)];
                    case 1:
                        cacheHit = _a.sent();
                        if (cacheHit) {
                            return [2 /*return*/, cacheHit];
                        }
                        toReturn = [];
                        return [4 /*yield*/, this.taxRateService_
                                .withTransaction(this.activeManager_)
                                .listByShippingOption(optionId)];
                    case 2:
                        optionRates = _a.sent();
                        if (optionRates.length > 0) {
                            toReturn = optionRates.map(function (pr) {
                                return {
                                    rate: pr.rate,
                                    name: pr.name,
                                    code: pr.code,
                                };
                            });
                        }
                        if (toReturn.length === 0) {
                            toReturn = [
                                {
                                    rate: regionDetails.tax_rate,
                                    name: "default",
                                    code: "default",
                                },
                            ];
                        }
                        return [4 /*yield*/, this.cacheService_.set(cacheKey, toReturn)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, toReturn];
                }
            });
        });
    };
    /**
     * Gets the tax rates configured for a product. The rates are cached between
     * calls.
     * @param productIds
     * @param region - the region to get configured rates for.
     * @return the tax rates configured for the shipping option. A map by product id
     */
    TaxProviderService.prototype.getRegionRatesForProduct = function (productIds, region) {
        return __awaiter(this, void 0, void 0, function () {
            var nonCachedProductIds, cacheKeysMap, productRatesMapResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productIds = Array.isArray(productIds) ? productIds : [productIds];
                        nonCachedProductIds = [];
                        cacheKeysMap = new Map(productIds.map(function (id) { return [id, _this.getCacheKey(id, region.id)]; }));
                        productRatesMapResult = new Map();
                        return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([], __read(cacheKeysMap), false).map(function (_a) {
                                var _b = __read(_a, 2), id = _b[0], cacheKey = _b[1];
                                return __awaiter(_this, void 0, void 0, function () {
                                    var cacheHit;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0: return [4 /*yield*/, this.cacheService_.get(cacheKey)];
                                            case 1:
                                                cacheHit = _c.sent();
                                                if (!cacheHit) {
                                                    nonCachedProductIds.push(id);
                                                    return [2 /*return*/];
                                                }
                                                productRatesMapResult.set(id, cacheHit);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }))
                            // All products rates are cached so we can return early
                        ];
                    case 1:
                        _a.sent();
                        // All products rates are cached so we can return early
                        if (!nonCachedProductIds.length) {
                            return [2 /*return*/, productRatesMapResult];
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)(nonCachedProductIds.map(function (id) { return __awaiter(_this, void 0, void 0, function () {
                                var rates, toReturn;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.taxRateService_
                                                .withTransaction(this.activeManager_)
                                                .listByProduct(id, {
                                                region_id: region.id,
                                            })];
                                        case 1:
                                            rates = _a.sent();
                                            toReturn = rates.length
                                                ? rates
                                                : [
                                                    {
                                                        rate: region.tax_rate,
                                                        name: "default",
                                                        code: "default",
                                                    },
                                                ];
                                            return [4 /*yield*/, this.cacheService_.set(cacheKeysMap.get(id), toReturn)];
                                        case 2:
                                            _a.sent();
                                            productRatesMapResult.set(id, toReturn);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, productRatesMapResult];
                }
            });
        });
    };
    /**
     * The cache key to get cache hits by.
     * @param id - the entity id to cache
     * @param regionId - the region id to cache
     * @return the cache key to use for the id set
     */
    TaxProviderService.prototype.getCacheKey = function (id, regionId) {
        return "txrtcache:".concat(id, ":").concat(regionId);
    };
    TaxProviderService.prototype.registerInstalledProviders = function (providers) {
        return __awaiter(this, void 0, void 0, function () {
            var model, providers_1, providers_1_1, p, n, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        model = this.activeManager_.withRepository(this.taxProviderRepo_);
                        return [4 /*yield*/, model.update({}, { is_installed: false })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        providers_1 = __values(providers), providers_1_1 = providers_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!providers_1_1.done) return [3 /*break*/, 6];
                        p = providers_1_1.value;
                        n = model.create({ id: p, is_installed: true });
                        return [4 /*yield*/, model.save(n)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        providers_1_1 = providers_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return TaxProviderService;
}(interfaces_1.TransactionBaseService));
exports.default = TaxProviderService;
//# sourceMappingURL=tax-provider.js.map