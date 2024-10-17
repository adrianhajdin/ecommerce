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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
var ProductVariantService = /** @class */ (function (_super) {
    __extends(ProductVariantService, _super);
    function ProductVariantService(_a) {
        var productVariantRepository = _a.productVariantRepository, productRepository = _a.productRepository, eventBusService = _a.eventBusService, regionService = _a.regionService, moneyAmountRepository = _a.moneyAmountRepository, productOptionValueRepository = _a.productOptionValueRepository, cartRepository = _a.cartRepository, priceSelectionStrategy = _a.priceSelectionStrategy;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.productVariantRepository_ = productVariantRepository;
        _this.productRepository_ = productRepository;
        _this.eventBus_ = eventBusService;
        _this.regionService_ = regionService;
        _this.moneyAmountRepository_ = moneyAmountRepository;
        _this.productOptionValueRepository_ = productOptionValueRepository;
        _this.cartRepository_ = cartRepository;
        _this.priceSelectionStrategy_ = priceSelectionStrategy;
        return _this;
    }
    /**
     * Gets a product variant by id.
     * @param variantId - the id of the product to get.
     * @param config - query config object for variant retrieval.
     * @return the product document.
     */
    ProductVariantService.prototype.retrieve = function (variantId, config) {
        if (config === void 0) { config = {
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var variantRepo, query, variant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variantRepo = this.activeManager_.withRepository(this.productVariantRepository_);
                        query = (0, utils_1.buildQuery)({ id: variantId }, config);
                        return [4 /*yield*/, variantRepo.findOne(query)];
                    case 1:
                        variant = _a.sent();
                        if (!variant) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Variant with id: ".concat(variantId, " was not found"));
                        }
                        return [2 /*return*/, variant];
                }
            });
        });
    };
    /**
     * Gets a product variant by id.
     * @param sku - The unique stock keeping unit used to identify the product variant.
     * @param config - query config object for variant retrieval.
     * @return the product document.
     */
    ProductVariantService.prototype.retrieveBySKU = function (sku, config) {
        var _a, _b;
        if (config === void 0) { config = {
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var variantRepo, priceIndex, query, variant;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        variantRepo = this.activeManager_.withRepository(this.productVariantRepository_);
                        priceIndex = (_b = (_a = config.relations) === null || _a === void 0 ? void 0 : _a.indexOf("prices")) !== null && _b !== void 0 ? _b : -1;
                        if (priceIndex >= 0 && config.relations) {
                            config.relations = __spreadArray([], __read(config.relations), false);
                            config.relations.splice(priceIndex, 1);
                        }
                        query = (0, utils_1.buildQuery)({ sku: sku }, config);
                        return [4 /*yield*/, variantRepo.findOne(query)];
                    case 1:
                        variant = _c.sent();
                        if (!variant) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Variant with sku: ".concat(sku, " was not found"));
                        }
                        return [2 /*return*/, variant];
                }
            });
        });
    };
    /**
     * Creates an unpublished product variant. Will validate against parent product
     * to ensure that the variant can in fact be created.
     * @param productOrProductId - the product the variant will be added to
     * @param variants
     * @return resolves to the creation result.
     */
    ProductVariantService.prototype.create = function (productOrProductId, variants) {
        return __awaiter(this, void 0, void 0, function () {
            var isVariantsArray, variants_;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isVariantsArray = Array.isArray(variants);
                        variants_ = isVariantsArray ? variants : [variants];
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var productRepo, variantRepo, product, computedRank, variantPricesToUpdate, results, eventsToEmit;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            productRepo = manager.withRepository(this.productRepository_);
                                            variantRepo = manager.withRepository(this.productVariantRepository_);
                                            product = productOrProductId;
                                            if (!(0, utils_1.isString)(product)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, productRepo.findOne({
                                                    where: { id: productOrProductId },
                                                    relations: (0, utils_2.buildRelations)([
                                                        "variants",
                                                        "variants.options",
                                                        "options",
                                                    ]),
                                                })];
                                        case 1:
                                            product = (_a.sent());
                                            _a.label = 2;
                                        case 2:
                                            if (!(product === null || product === void 0 ? void 0 : product.id)) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Product id missing");
                                            }
                                            this.validateVariantsToCreate_(product, variants_);
                                            computedRank = product.variants.length;
                                            variantPricesToUpdate = [];
                                            return [4 /*yield*/, (0, utils_2.promiseAll)(variants_.map(function (variant) { return __awaiter(_this, void 0, void 0, function () {
                                                    var prices, rest, toCreate, productVariant, result;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                prices = variant.prices, rest = __rest(variant, ["prices"]);
                                                                if (!rest.variant_rank) {
                                                                    rest.variant_rank = computedRank;
                                                                }
                                                                ++computedRank;
                                                                toCreate = __assign(__assign({}, rest), { product_id: product.id });
                                                                productVariant = variantRepo.create(toCreate);
                                                                return [4 /*yield*/, variantRepo.save(productVariant)];
                                                            case 1:
                                                                result = _a.sent();
                                                                if (prices === null || prices === void 0 ? void 0 : prices.length) {
                                                                    variantPricesToUpdate.push({ id: result.id, prices: prices });
                                                                }
                                                                return [2 /*return*/, result];
                                                        }
                                                    });
                                                }); }))];
                                        case 3:
                                            results = _a.sent();
                                            if (!variantPricesToUpdate.length) return [3 /*break*/, 5];
                                            return [4 /*yield*/, this.updateVariantPrices(variantPricesToUpdate.map(function (v) { return ({
                                                    variantId: v.id,
                                                    prices: v.prices,
                                                }); }))];
                                        case 4:
                                            _a.sent();
                                            _a.label = 5;
                                        case 5:
                                            eventsToEmit = results.map(function (result) { return ({
                                                eventName: ProductVariantService.Events.CREATED,
                                                data: {
                                                    id: result.id,
                                                    product_id: result.product_id,
                                                },
                                            }); });
                                            return [4 /*yield*/, this.eventBus_.withTransaction(manager).emit(eventsToEmit)];
                                        case 6:
                                            _a.sent();
                                            return [2 /*return*/, (isVariantsArray ? results : results[0])];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductVariantService.prototype.update = function (variantOrVariantIdOrData, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = Array.isArray(variantOrVariantIdOrData)
                            ? variantOrVariantIdOrData
                            : [];
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var variantRepo, variant, result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            variantRepo = manager.withRepository(this.productVariantRepository_);
                                            if (!updateData) return [3 /*break*/, 3];
                                            variant = variantOrVariantIdOrData;
                                            if (!(0, utils_1.isString)(variantOrVariantIdOrData)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.retrieve(variantOrVariantIdOrData, {
                                                    select: variantRepo.metadata.columns.map(function (c) { return c.propertyName; }),
                                                })];
                                        case 1:
                                            variant = _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            if (!(variant === null || variant === void 0 ? void 0 : variant.id)) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Variant id missing");
                                            }
                                            data = [{ variant: variant, updateData: updateData }];
                                            _a.label = 3;
                                        case 3: return [4 /*yield*/, this.updateBatch(data)];
                                        case 4:
                                            result = _a.sent();
                                            return [2 /*return*/, (Array.isArray(variantOrVariantIdOrData)
                                                    ? result
                                                    : result[0])];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductVariantService.prototype.updateBatch = function (variantData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var variantRepo, variantPriceUpdateData, results, events;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        variantRepo = manager.withRepository(this.productVariantRepository_);
                                        variantPriceUpdateData = variantData
                                            .filter(function (data) { return (0, medusa_core_utils_1.isDefined)(data.updateData.prices); })
                                            .map(function (data) { return ({
                                            variantId: data.variant.id,
                                            prices: data.updateData.prices,
                                        }); });
                                        if (!variantPriceUpdateData.length) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.updateVariantPrices(variantPriceUpdateData)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [4 /*yield*/, (0, utils_2.promiseAll)(variantData.map(function (_a) {
                                            var variant = _a.variant, updateData = _a.updateData;
                                            return __awaiter(_this, void 0, void 0, function () {
                                                var prices, options, rest, shouldUpdate, shouldEmitUpdateEvent, _b, _c, option, e_1_1, toUpdate, _d, _e, _f, key, value, result, id, rawResult;
                                                var e_1, _g, e_2, _h;
                                                return __generator(this, function (_j) {
                                                    switch (_j.label) {
                                                        case 0:
                                                            prices = updateData.prices, options = updateData.options, rest = __rest(updateData, ["prices", "options"]);
                                                            shouldUpdate = (0, utils_1.hasChanges)(variant, rest);
                                                            shouldEmitUpdateEvent = shouldUpdate || !!(options === null || options === void 0 ? void 0 : options.length) || !!(prices === null || prices === void 0 ? void 0 : prices.length);
                                                            _j.label = 1;
                                                        case 1:
                                                            _j.trys.push([1, 6, 7, 8]);
                                                            _b = __values(options !== null && options !== void 0 ? options : []), _c = _b.next();
                                                            _j.label = 2;
                                                        case 2:
                                                            if (!!_c.done) return [3 /*break*/, 5];
                                                            option = _c.value;
                                                            return [4 /*yield*/, this.updateOptionValue(variant.id, option.option_id, option.value)];
                                                        case 3:
                                                            _j.sent();
                                                            _j.label = 4;
                                                        case 4:
                                                            _c = _b.next();
                                                            return [3 /*break*/, 2];
                                                        case 5: return [3 /*break*/, 8];
                                                        case 6:
                                                            e_1_1 = _j.sent();
                                                            e_1 = { error: e_1_1 };
                                                            return [3 /*break*/, 8];
                                                        case 7:
                                                            try {
                                                                if (_c && !_c.done && (_g = _b.return)) _g.call(_b);
                                                            }
                                                            finally { if (e_1) throw e_1.error; }
                                                            return [7 /*endfinally*/];
                                                        case 8:
                                                            toUpdate = {};
                                                            if ((0, utils_1.isObject)(rest.metadata)) {
                                                                toUpdate["metadata"] = (0, utils_1.setMetadata)(variant, rest.metadata);
                                                                delete rest.metadata;
                                                            }
                                                            if (Object.keys(rest).length) {
                                                                try {
                                                                    for (_d = __values(Object.entries(rest)), _e = _d.next(); !_e.done; _e = _d.next()) {
                                                                        _f = __read(_e.value, 2), key = _f[0], value = _f[1];
                                                                        if (variant[key] !== value) {
                                                                            toUpdate[key] = value;
                                                                        }
                                                                    }
                                                                }
                                                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                                                finally {
                                                                    try {
                                                                        if (_e && !_e.done && (_h = _d.return)) _h.call(_d);
                                                                    }
                                                                    finally { if (e_2) throw e_2.error; }
                                                                }
                                                            }
                                                            result = variant;
                                                            if (!shouldUpdate) return [3 /*break*/, 10];
                                                            id = variant.id;
                                                            return [4 /*yield*/, variantRepo.update({ id: id }, __assign({ id: id }, toUpdate))];
                                                        case 9:
                                                            rawResult = _j.sent();
                                                            result = variantRepo.create(__assign(__assign({}, variant), rawResult.generatedMaps[0]));
                                                            _j.label = 10;
                                                        case 10: return [2 /*return*/, [result, updateData, shouldEmitUpdateEvent]];
                                                    }
                                                });
                                            });
                                        }))];
                                    case 3:
                                        results = _a.sent();
                                        events = results
                                            .filter(function (_a) {
                                            var _b = __read(_a, 3), shouldEmitUpdateEvent = _b[2];
                                            return shouldEmitUpdateEvent;
                                        })
                                            .map(function (_a) {
                                            var _b = __read(_a, 2), result = _b[0], updatedData = _b[1];
                                            return {
                                                eventName: ProductVariantService.Events.UPDATED,
                                                data: {
                                                    id: result.id,
                                                    product_id: result.product_id,
                                                    fields: Object.keys(updatedData),
                                                },
                                            };
                                        });
                                        if (!events.length) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.eventBus_.withTransaction(manager).emit(events)];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5: return [2 /*return*/, results.map(function (_a) {
                                            var _b = __read(_a, 1), variant = _b[0];
                                            return variant;
                                        })];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductVariantService.prototype.updateVariantPrices = function (variantIdOrData, prices) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = !(0, utils_1.isString)(variantIdOrData)
                            ? variantIdOrData
                            : [];
                        if (prices && (0, utils_1.isString)(variantIdOrData)) {
                            data = [{ variantId: variantIdOrData, prices: prices }];
                        }
                        return [4 /*yield*/, this.updateVariantPricesBatch(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductVariantService.prototype.updateVariantPricesBatch = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, regionIdsSet, regions, regionsMap, dataRegionPrices, dataCurrencyPrices, promises;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepository_);
                                        // Delete obsolete prices
                                        return [4 /*yield*/, moneyAmountRepo.deleteVariantPricesNotIn(data)];
                                    case 1:
                                        // Delete obsolete prices
                                        _a.sent();
                                        regionIdsSet = new Set(data
                                            .map(function (data_) {
                                            return data_.prices
                                                .filter(function (price) { return price.region_id; })
                                                .map(function (price) { return price.region_id; });
                                        })
                                            .flat());
                                        return [4 /*yield*/, this.regionService_.withTransaction(manager).list({
                                                id: __spreadArray([], __read(regionIdsSet), false),
                                            }, {
                                                select: ["id", "currency_code"],
                                            })];
                                    case 2:
                                        regions = _a.sent();
                                        regionsMap = new Map(regions.map(function (r) { return [r.id, r]; }));
                                        dataRegionPrices = [];
                                        dataCurrencyPrices = [];
                                        data.forEach(function (_a) {
                                            var prices = _a.prices, variantId = _a.variantId;
                                            prices.forEach(function (price) {
                                                if (price.region_id) {
                                                    var region = regionsMap.get(price.region_id);
                                                    dataRegionPrices.push({
                                                        variantId: variantId,
                                                        price: {
                                                            currency_code: region.currency_code,
                                                            region_id: price.region_id,
                                                            amount: price.amount,
                                                        },
                                                    });
                                                }
                                                else {
                                                    dataCurrencyPrices.push({
                                                        variantId: variantId,
                                                        price: __assign(__assign({}, price), { currency_code: price.currency_code }),
                                                    });
                                                }
                                            });
                                        });
                                        promises = [];
                                        if (dataRegionPrices.length) {
                                            promises.push(this.upsertRegionPrices(dataRegionPrices));
                                        }
                                        if (dataCurrencyPrices.length) {
                                            promises.push(this.upsertCurrencyPrices(dataCurrencyPrices));
                                        }
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(promises)];
                                    case 3:
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
    ProductVariantService.prototype.upsertRegionPrices = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, productVariantRepo, where, moneyAmounts, moneyAmountsMapToVariantId, dataToCreate, dataToUpdate, promises;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepository_);
                                        productVariantRepo = this.activeManager_.withRepository(this.productVariantRepository_);
                                        where = data.map(function (data_) { return ({
                                            variant_id: data_.variantId,
                                            region_id: data_.price.region_id,
                                        }); });
                                        return [4 /*yield*/, moneyAmountRepo.findRegionMoneyAmounts(where)];
                                    case 1:
                                        moneyAmounts = _a.sent();
                                        moneyAmountsMapToVariantId = new Map();
                                        moneyAmounts.map(function (d) {
                                            var _a;
                                            var moneyAmounts = (_a = moneyAmountsMapToVariantId.get(d.variant_id)) !== null && _a !== void 0 ? _a : [];
                                            moneyAmounts.push(d);
                                            moneyAmountsMapToVariantId.set(d.variant_id, moneyAmounts);
                                        });
                                        dataToCreate = [];
                                        dataToUpdate = [];
                                        data.forEach(function (_a) {
                                            var _b;
                                            var price = _a.price, variantId = _a.variantId;
                                            var variantMoneyAmounts = (_b = moneyAmountsMapToVariantId.get(variantId)) !== null && _b !== void 0 ? _b : [];
                                            var moneyAmount = variantMoneyAmounts.find(function (ma) { return ma.region_id === price.region_id; });
                                            if (moneyAmount) {
                                                // No need to update if the amount is the same
                                                if (moneyAmount.amount !== price.amount) {
                                                    dataToUpdate.push({
                                                        id: moneyAmount.id,
                                                        amount: price.amount,
                                                    });
                                                }
                                            }
                                            else {
                                                var ma = moneyAmountRepo.create(__assign({}, price));
                                                ma.variant = { id: variantId };
                                                dataToCreate.push(ma);
                                            }
                                        });
                                        promises = [];
                                        if (dataToCreate.length) {
                                            promises.push(moneyAmountRepo.insertBulk(dataToCreate));
                                        }
                                        if (dataToUpdate.length) {
                                            dataToUpdate.forEach(function (data) {
                                                var id = data.id, rest = __rest(data, ["id"]);
                                                promises.push(moneyAmountRepo.update({ id: data.id }, rest));
                                            });
                                        }
                                        if (dataToCreate.length || dataToUpdate.length) {
                                            promises.push(this.priceSelectionStrategy_
                                                .withTransaction(manager)
                                                .onVariantsPricesUpdate(data.map(function (d) { return d.variantId; })));
                                        }
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(promises)];
                                    case 2:
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
    ProductVariantService.prototype.upsertCurrencyPrices = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, productVariantRepo, where, moneyAmounts, moneyAmountsMapToVariantId, dataToCreate, dataToUpdate, promises;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepository_);
                                        productVariantRepo = this.activeManager_.withRepository(this.productVariantRepository_);
                                        where = data.map(function (data_) { return ({
                                            variant_id: data_.variantId,
                                            currency_code: data_.price.currency_code,
                                        }); });
                                        return [4 /*yield*/, moneyAmountRepo.findCurrencyMoneyAmounts(where)];
                                    case 1:
                                        moneyAmounts = _a.sent();
                                        moneyAmountsMapToVariantId = new Map();
                                        moneyAmounts.map(function (d) {
                                            var _a;
                                            var moneyAmounts = (_a = moneyAmountsMapToVariantId.get(d.variant_id)) !== null && _a !== void 0 ? _a : [];
                                            moneyAmounts.push(d);
                                            moneyAmountsMapToVariantId.set(d.variant_id, moneyAmounts);
                                        });
                                        dataToCreate = [];
                                        dataToUpdate = [];
                                        data.forEach(function (_a) {
                                            var _b;
                                            var price = _a.price, variantId = _a.variantId;
                                            var variantMoneyAmounts = (_b = moneyAmountsMapToVariantId.get(variantId)) !== null && _b !== void 0 ? _b : [];
                                            var moneyAmount = variantMoneyAmounts.find(function (ma) { return ma.currency_code === price.currency_code; });
                                            if (moneyAmount) {
                                                // No need to update if the amount is the same
                                                if (moneyAmount.amount !== price.amount) {
                                                    dataToUpdate.push({
                                                        id: moneyAmount.id,
                                                        amount: price.amount,
                                                    });
                                                }
                                            }
                                            else {
                                                var ma = moneyAmountRepo.create(__assign(__assign({}, price), { currency_code: price.currency_code.toLowerCase() }));
                                                ma.variant = { id: variantId };
                                                dataToCreate.push(ma);
                                            }
                                        });
                                        promises = [];
                                        if (dataToCreate.length) {
                                            promises.push(moneyAmountRepo.insertBulk(dataToCreate));
                                        }
                                        if (dataToUpdate.length) {
                                            dataToUpdate.forEach(function (data) {
                                                var id = data.id, rest = __rest(data, ["id"]);
                                                promises.push(moneyAmountRepo.update({ id: data.id }, rest));
                                            });
                                        }
                                        if (dataToCreate.length || dataToUpdate.length) {
                                            promises.push(this.priceSelectionStrategy_
                                                .withTransaction(manager)
                                                .onVariantsPricesUpdate(data.map(function (d) { return d.variantId; })));
                                        }
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(promises)];
                                    case 2:
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
     * Gets the price specific to a region. If no region specific money amount
     * exists the function will try to use a currency price. If no default
     * currency price exists the function will throw an error.
     * @param variantId - the id of the variant to get price from
     * @param context - context for getting region price
     * @return the price specific to the region
     */
    ProductVariantService.prototype.getRegionPrice = function (variantId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var region, prices;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.regionService_
                                            .withTransaction(manager)
                                            .retrieve(context.regionId)];
                                    case 1:
                                        region = _a.sent();
                                        return [4 /*yield*/, this.priceSelectionStrategy_
                                                .withTransaction(manager)
                                                .calculateVariantPrice([{ variantId: variantId, quantity: context.quantity }], {
                                                region_id: context.regionId,
                                                currency_code: region.currency_code,
                                                customer_id: context.customer_id,
                                                include_discount_prices: !!context.include_discount_prices,
                                            })];
                                    case 2:
                                        prices = _a.sent();
                                        return [2 /*return*/, prices.get(variantId).calculatedPrice];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @deprecated use addOrUpdateRegionPrices instead
     * Sets the default price of a specific region
     * @param variantId - the id of the variant to update
     * @param price - the price for the variant.
     * @return the result of the update operation
     */
    ProductVariantService.prototype.setRegionPrice = function (variantId, price) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, _a, moneyAmount, created, createdAmount;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepository_);
                                        return [4 /*yield*/, moneyAmountRepo.getPricesForVariantInRegion(variantId, price.region_id)];
                                    case 1:
                                        _a = __read.apply(void 0, [_b.sent(), 1]), moneyAmount = _a[0];
                                        created = !moneyAmount;
                                        if (!moneyAmount) {
                                            moneyAmount = moneyAmountRepo.create(__assign(__assign({}, price), { variant: { id: variantId } }));
                                        }
                                        else {
                                            moneyAmount.amount = price.amount;
                                        }
                                        return [4 /*yield*/, moneyAmountRepo.save(moneyAmount)];
                                    case 2:
                                        createdAmount = _b.sent();
                                        if (!created) return [3 /*break*/, 4];
                                        return [4 /*yield*/, moneyAmountRepo.createProductVariantMoneyAmounts([
                                                {
                                                    variant_id: variantId,
                                                    money_amount_id: createdAmount.id,
                                                },
                                            ])];
                                    case 3:
                                        _b.sent();
                                        _b.label = 4;
                                    case 4: return [2 /*return*/, createdAmount];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @deprecated use addOrUpdateCurrencyPrices instead
     * Sets the default price for the given currency.
     * @param variantId - the id of the variant to set prices for
     * @param price - the price for the variant
     * @return the result of the update operation
     */
    ProductVariantService.prototype.setCurrencyPrice = function (variantId, price) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepository_);
                                        return [4 /*yield*/, moneyAmountRepo.upsertVariantCurrencyPrice(variantId, price)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates variant's option value.
     * Option value must be of type string or number.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @param optionValue - option value to add.
     * @return the result of the update operation.
     */
    ProductVariantService.prototype.updateOptionValue = function (variantId, optionId, optionValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionValueRepo, productOptionValue;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productOptionValueRepo = manager.withRepository(this.productOptionValueRepository_);
                                        return [4 /*yield*/, productOptionValueRepo.findOne({
                                                where: { variant_id: variantId, option_id: optionId },
                                            })];
                                    case 1:
                                        productOptionValue = _a.sent();
                                        if (!productOptionValue) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Product option value not found");
                                        }
                                        productOptionValue.value = optionValue;
                                        return [4 /*yield*/, productOptionValueRepo.save(productOptionValue)];
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
     * Adds option value to a variant.
     * Fails when product with variant does not exist or
     * if that product does not have an option with the given
     * option id. Fails if given variant is not found.
     * Option value must be of type string or number.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @param optionValue - option value to add.
     * @return the result of the update operation.
     */
    ProductVariantService.prototype.addOptionValue = function (variantId, optionId, optionValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionValueRepo, productOptionValue;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productOptionValueRepo = manager.withRepository(this.productOptionValueRepository_);
                                        productOptionValue = productOptionValueRepo.create({
                                            variant_id: variantId,
                                            option_id: optionId,
                                            value: optionValue,
                                        });
                                        return [4 /*yield*/, productOptionValueRepo.save(productOptionValue)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes option value from given variant.
     * Will never fail due to delete being idempotent.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @return empty promise
     */
    ProductVariantService.prototype.deleteOptionValue = function (variantId, optionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionValueRepo, productOptionValue;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productOptionValueRepo = manager.withRepository(this.productOptionValueRepository_);
                                        return [4 /*yield*/, productOptionValueRepo.findOne({
                                                where: {
                                                    variant_id: variantId,
                                                    option_id: optionId,
                                                },
                                            })];
                                    case 1:
                                        productOptionValue = _a.sent();
                                        if (!productOptionValue) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, productOptionValueRepo.softRemove(productOptionValue)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    ProductVariantService.prototype.listAndCount = function (selector, config) {
        var _a, _b, _c, _d, _e;
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var variantRepo, q, query;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        variantRepo = this.activeManager_.withRepository(this.productVariantRepository_);
                        if ((0, medusa_core_utils_1.isDefined)(selector.q)) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        query.relationLoadStrategy = "query";
                        if (q) {
                            query.relations = (_a = query.relations) !== null && _a !== void 0 ? _a : {};
                            query.relations["product"] = (_b = query.relations["product"]) !== null && _b !== void 0 ? _b : true;
                            query.where = query.where;
                            (_c = query.where) === null || _c === void 0 ? true : delete _c.title;
                            query.where = (_d = query.where) !== null && _d !== void 0 ? _d : {};
                            query.where = [
                                __assign(__assign({}, query.where), { title: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, query.where), { sku: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, query.where), { product: __assign(__assign({}, ((_e = query.where.product) !== null && _e !== void 0 ? _e : {})), { title: (0, typeorm_1.ILike)("%".concat(q, "%")) }) }),
                            ];
                        }
                        return [4 /*yield*/, variantRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _f.sent()];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    ProductVariantService.prototype.list = function (selector, config) {
        var _a, _b;
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var productVariantRepo, priceIndex, q, query, where_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        productVariantRepo = this.activeManager_.withRepository(this.productVariantRepository_);
                        priceIndex = (_b = (_a = config.relations) === null || _a === void 0 ? void 0 : _a.indexOf("prices")) !== null && _b !== void 0 ? _b : -1;
                        if (priceIndex >= 0 && config.relations) {
                            config.relations = __spreadArray([], __read(config.relations), false);
                            config.relations.splice(priceIndex, 1);
                        }
                        if ("q" in selector) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        if (q) {
                            where_1 = query.where;
                            where_1 === null || where_1 === void 0 ? true : delete where_1.sku;
                            where_1 === null || where_1 === void 0 ? true : delete where_1.title;
                            query.relations = query.relations || {};
                            query.relations["product"] = true;
                            query.where = function (qb) {
                                qb.where(where_1).andWhere([
                                    { sku: (0, typeorm_1.ILike)("%".concat(q, "%")) },
                                    { title: (0, typeorm_1.ILike)("%".concat(q, "%")) },
                                    { product: { title: (0, typeorm_1.ILike)("%".concat(q, "%")) } },
                                ]);
                            };
                        }
                        return [4 /*yield*/, productVariantRepo.find(query)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * Deletes variant or variants.
     * Will never fail due to delete being idempotent.
     * @param variantIds - the id of the variant to delete. Must be
     *   castable as an ObjectId
     * @return empty promise
     */
    ProductVariantService.prototype.delete = function (variantIds) {
        return __awaiter(this, void 0, void 0, function () {
            var variantIds_;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variantIds_ = (0, utils_1.isString)(variantIds) ? [variantIds] : variantIds;
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var variantRepo, variants, events;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            variantRepo = manager.withRepository(this.productVariantRepository_);
                                            return [4 /*yield*/, variantRepo.find({
                                                    where: { id: (0, typeorm_1.In)(variantIds_) },
                                                    relations: ["prices", "options", "inventory_items"],
                                                })];
                                        case 1:
                                            variants = _a.sent();
                                            if (!variants.length) {
                                                return [2 /*return*/, Promise.resolve()];
                                            }
                                            return [4 /*yield*/, variantRepo.softRemove(variants)];
                                        case 2:
                                            _a.sent();
                                            events = variants.map(function (variant) {
                                                return {
                                                    eventName: ProductVariantService.Events.DELETED,
                                                    data: {
                                                        id: variant.id,
                                                        product_id: variant.product_id,
                                                        metadata: variant.metadata,
                                                    },
                                                };
                                            });
                                            return [4 /*yield*/, this.eventBus_.withTransaction(manager).emit(events)];
                                        case 3:
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
     * Check if the variant is assigned to at least one of the provided sales channels.
     *
     * @param id - product variant id
     * @param salesChannelIds - an array of sales channel ids
     */
    ProductVariantService.prototype.isVariantInSalesChannels = function (id, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var variant, productsSalesChannels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve(id, {
                            relations: ["product", "product.sales_channels"],
                        })
                        // TODO: reimplement this to use db level check
                    ];
                    case 1:
                        variant = _a.sent();
                        productsSalesChannels = variant.product.sales_channels.map(function (channel) { return channel.id; });
                        return [2 /*return*/, productsSalesChannels.some(function (id) { return salesChannelIds.includes(id); })];
                }
            });
        });
    };
    /**
     * Lists variants based on the provided parameters and includes the count of
     * variants that match the query.
     * @param variantRepo - the variant repository
     * @param query - object that defines the scope for what should be returned
     * @param q - free text query
     * @return an array containing the products as the first element and the total
     *   count of products that matches the query as the second element.
     */
    ProductVariantService.prototype.getFreeTextQueryBuilder_ = function (variantRepo, query, q) {
        var _a;
        var where = query.where;
        if (typeof where === "object") {
            if ("title" in where) {
                delete where.title;
            }
        }
        var qb = variantRepo
            .createQueryBuilder("pv")
            .take(query.take)
            .skip(Math.max((_a = query.skip) !== null && _a !== void 0 ? _a : 0, 0))
            .leftJoinAndSelect("pv.product", "product")
            .select(["pv.id"])
            .where(where)
            .andWhere(new typeorm_1.Brackets(function (qb) {
            qb.where("product.title ILIKE :q", { q: "%".concat(q, "%") })
                .orWhere("pv.title ILIKE :q", { q: "%".concat(q, "%") })
                .orWhere("pv.sku ILIKE :q", { q: "%".concat(q, "%") });
        }));
        if (query.withDeleted) {
            qb = qb.withDeleted();
        }
        return qb;
    };
    ProductVariantService.prototype.validateVariantsToCreate_ = function (product, variants) {
        var e_3, _a;
        var _loop_1 = function (variant) {
            if (product.options.length !== variant.options.length) {
                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Product options length does not match variant options length. Product has ".concat(product.options.length, " and variant has ").concat(variant.options.length, "."));
            }
            product.options.forEach(function (option) {
                if (!variant.options.find(function (vo) { return option.id === vo.option_id; })) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Variant options do not contain value for ".concat(option.title));
                }
            });
            var variantExists = product.variants.find(function (v) {
                return v.options.every(function (option) {
                    var variantOption = variant.options.find(function (o) { return option.option_id === o.option_id; });
                    return option.value === (variantOption === null || variantOption === void 0 ? void 0 : variantOption.value);
                });
            });
            if (variantExists) {
                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "Variant with title ".concat(variantExists.title, " with provided options already exists"));
            }
        };
        try {
            for (var variants_1 = __values(variants), variants_1_1 = variants_1.next(); !variants_1_1.done; variants_1_1 = variants_1.next()) {
                var variant = variants_1_1.value;
                _loop_1(variant);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (variants_1_1 && !variants_1_1.done && (_a = variants_1.return)) _a.call(variants_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    ProductVariantService.Events = {
        UPDATED: "product-variant.updated",
        CREATED: "product-variant.created",
        DELETED: "product-variant.deleted",
    };
    return ProductVariantService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductVariantService;
//# sourceMappingURL=product-variant.js.map