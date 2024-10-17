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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var utils_1 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_2 = require("../utils");
var LineItemService = /** @class */ (function (_super) {
    __extends(LineItemService, _super);
    function LineItemService(_a) {
        var lineItemRepository = _a.lineItemRepository, lineItemTaxLineRepository = _a.lineItemTaxLineRepository, productVariantService = _a.productVariantService, productService = _a.productService, pricingService = _a.pricingService, regionService = _a.regionService, cartRepository = _a.cartRepository, lineItemAdjustmentService = _a.lineItemAdjustmentService, taxProviderService = _a.taxProviderService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.lineItemRepository_ = lineItemRepository;
        _this.itemTaxLineRepo_ = lineItemTaxLineRepository;
        _this.productVariantService_ = productVariantService;
        _this.productService_ = productService;
        _this.pricingService_ = pricingService;
        _this.regionService_ = regionService;
        _this.cartRepository_ = cartRepository;
        _this.lineItemAdjustmentService_ = lineItemAdjustmentService;
        _this.taxProviderService_ = taxProviderService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    LineItemService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var lineItemRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineItemRepo = this.activeManager_.withRepository(this.lineItemRepository_);
                        query = (0, utils_2.buildQuery)(selector, config);
                        return [4 /*yield*/, lineItemRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves a line item by its id.
     * @param id - the id of the line item to retrieve
     * @param config - the config to be used at query building
     * @return the line item
     */
    LineItemService.prototype.retrieve = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var lineItemRepository, query, lineItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineItemRepository = this.activeManager_.withRepository(this.lineItemRepository_);
                        query = (0, utils_2.buildQuery)({ id: id }, config);
                        return [4 /*yield*/, lineItemRepository.findOne(query)];
                    case 1:
                        lineItem = _a.sent();
                        if (!lineItem) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Line item with ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, lineItem];
                }
            });
        });
    };
    /**
     * Creates return line items for a given cart based on the return items in a
     * return.
     * @param returnId - the id to generate return items from.
     * @param cartId - the cart to assign the return line items to.
     * @return the created line items
     */
    LineItemService.prototype.createReturnLines = function (returnId, cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemRepo, itemTaxLineRepo, returnLineItems;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineItemRepo = transactionManager.withRepository(this.lineItemRepository_);
                                        itemTaxLineRepo = transactionManager.withRepository(this.itemTaxLineRepo_);
                                        return [4 /*yield*/, lineItemRepo
                                                .findByReturn(returnId)
                                                .then(function (lineItems) {
                                                return lineItems.map(function (lineItem) {
                                                    return lineItemRepo.create({
                                                        cart_id: cartId,
                                                        thumbnail: lineItem.thumbnail,
                                                        is_return: true,
                                                        title: lineItem.title,
                                                        variant_id: lineItem.variant_id,
                                                        unit_price: -1 * lineItem.unit_price,
                                                        quantity: lineItem.return_item.quantity,
                                                        allow_discounts: lineItem.allow_discounts,
                                                        includes_tax: !!lineItem.includes_tax,
                                                        tax_lines: lineItem.tax_lines.map(function (taxLine) {
                                                            return itemTaxLineRepo.create({
                                                                name: taxLine.name,
                                                                code: taxLine.code,
                                                                rate: taxLine.rate,
                                                                metadata: taxLine.metadata,
                                                            });
                                                        }),
                                                        metadata: lineItem.metadata,
                                                        adjustments: lineItem.adjustments.map(function (adjustment) {
                                                            return {
                                                                amount: -1 * adjustment.amount,
                                                                description: adjustment.description,
                                                                discount_id: adjustment.discount_id,
                                                                metadata: adjustment.metadata,
                                                            };
                                                        }),
                                                    });
                                                });
                                            })];
                                    case 1:
                                        returnLineItems = _a.sent();
                                        return [4 /*yield*/, lineItemRepo.save(returnLineItems)];
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
     * Generate a single or multiple line item without persisting the data into the db
     * @param variantIdOrData
     * @param regionIdOrContext
     * @param quantity
     * @param context
     */
    LineItemService.prototype.generate = function (variantIdOrData, regionIdOrContext, quantity, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var data, resolvedContext, regionId, resolvedData, resolvedDataMap, variants, inputDataVariantId, foundVariants, notFoundVariants, variantsMap, variantsToCalculatePricingFor, variants_1, variants_1_1, variant, variantResolvedData, variantsPricing, generatedItems, resolvedData_1, resolvedData_1_1, variantData, variant, variantPricing, lineItem, adjustments, e_1_1;
                            var e_2, _a, e_1, _b;
                            var _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        this.validateGenerateArguments(variantIdOrData, regionIdOrContext, quantity);
                                        data = (0, utils_2.isString)(variantIdOrData)
                                            ? {
                                                variantId: variantIdOrData,
                                                quantity: quantity,
                                            }
                                            : variantIdOrData;
                                        resolvedContext = (0, utils_2.isString)(variantIdOrData)
                                            ? context
                                            : regionIdOrContext;
                                        regionId = ((0, utils_2.isString)(variantIdOrData)
                                            ? regionIdOrContext
                                            : resolvedContext.region_id);
                                        resolvedData = (Array.isArray(data) ? data : [data]);
                                        resolvedDataMap = new Map(resolvedData.map(function (d) { return [d.variantId, d]; }));
                                        return [4 /*yield*/, this.productVariantService_.list({
                                                id: resolvedData.map(function (d) { return d.variantId; }),
                                            }, {
                                                relations: ["product"],
                                            })
                                            // Validate that all variants has been found
                                        ];
                                    case 1:
                                        variants = _e.sent();
                                        inputDataVariantId = new Set(resolvedData.map(function (d) { return d.variantId; }));
                                        foundVariants = new Set(variants.map(function (v) { return v.id; }));
                                        notFoundVariants = new Set(__spreadArray([], __read(inputDataVariantId), false).filter(function (x) { return !foundVariants.has(x); }));
                                        if (notFoundVariants.size) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Unable to generate the line items, some variant has not been found: ".concat(__spreadArray([], __read(notFoundVariants), false).join(", ")));
                                        }
                                        variantsMap = new Map();
                                        variantsToCalculatePricingFor = [];
                                        try {
                                            for (variants_1 = __values(variants), variants_1_1 = variants_1.next(); !variants_1_1.done; variants_1_1 = variants_1.next()) {
                                                variant = variants_1_1.value;
                                                variantsMap.set(variant.id, variant);
                                                variantResolvedData = resolvedDataMap.get(variant.id);
                                                if (resolvedContext.unit_price == null &&
                                                    (variantResolvedData === null || variantResolvedData === void 0 ? void 0 : variantResolvedData.unit_price) == null) {
                                                    variantsToCalculatePricingFor.push({
                                                        variantId: variant.id,
                                                        quantity: variantResolvedData.quantity,
                                                    });
                                                }
                                            }
                                        }
                                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                        finally {
                                            try {
                                                if (variants_1_1 && !variants_1_1.done && (_a = variants_1.return)) _a.call(variants_1);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                        }
                                        variantsPricing = {};
                                        if (!variantsToCalculatePricingFor.length) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.pricingService_
                                                .withTransaction(transactionManager)
                                                .getProductVariantsPricing(variantsToCalculatePricingFor, {
                                                region_id: regionId,
                                                customer_id: context === null || context === void 0 ? void 0 : context.customer_id,
                                                include_discount_prices: true,
                                            })];
                                    case 2:
                                        variantsPricing = _e.sent();
                                        _e.label = 3;
                                    case 3:
                                        generatedItems = [];
                                        _e.label = 4;
                                    case 4:
                                        _e.trys.push([4, 11, 12, 13]);
                                        resolvedData_1 = __values(resolvedData), resolvedData_1_1 = resolvedData_1.next();
                                        _e.label = 5;
                                    case 5:
                                        if (!!resolvedData_1_1.done) return [3 /*break*/, 10];
                                        variantData = resolvedData_1_1.value;
                                        variant = variantsMap.get(variantData.variantId);
                                        variantPricing = variantsPricing[variantData.variantId];
                                        return [4 /*yield*/, this.generateLineItem(variant, variantData.quantity, __assign(__assign({}, resolvedContext), { unit_price: (_c = variantData.unit_price) !== null && _c !== void 0 ? _c : resolvedContext.unit_price, metadata: (_d = variantData.metadata) !== null && _d !== void 0 ? _d : resolvedContext.metadata, variantPricing: variantPricing }))];
                                    case 6:
                                        lineItem = _e.sent();
                                        if (!resolvedContext.cart) return [3 /*break*/, 8];
                                        return [4 /*yield*/, this.lineItemAdjustmentService_
                                                .withTransaction(transactionManager)
                                                .generateAdjustments(resolvedContext.cart, lineItem, { variant: variant })];
                                    case 7:
                                        adjustments = _e.sent();
                                        lineItem.adjustments =
                                            adjustments;
                                        _e.label = 8;
                                    case 8:
                                        generatedItems.push(lineItem);
                                        _e.label = 9;
                                    case 9:
                                        resolvedData_1_1 = resolvedData_1.next();
                                        return [3 /*break*/, 5];
                                    case 10: return [3 /*break*/, 13];
                                    case 11:
                                        e_1_1 = _e.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 13];
                                    case 12:
                                        try {
                                            if (resolvedData_1_1 && !resolvedData_1_1.done && (_b = resolvedData_1.return)) _b.call(resolvedData_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 13: return [2 /*return*/, (Array.isArray(data)
                                            ? generatedItems
                                            : generatedItems[0])];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LineItemService.prototype.generateLineItem = function (variant, quantity, context) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var unit_price, unitPriceIncludesTax, shouldMerge, rawLineItem, lineItemRepo, lineItem;
            return __generator(this, function (_f) {
                unit_price = Number(context.unit_price) < 0 ? 0 : context.unit_price;
                unitPriceIncludesTax = false;
                shouldMerge = false;
                if (context.unit_price == null) {
                    shouldMerge = true;
                    unitPriceIncludesTax =
                        !!((_a = context.variantPricing) === null || _a === void 0 ? void 0 : _a.calculated_price_includes_tax);
                    unit_price = (_c = (_b = context.variantPricing) === null || _b === void 0 ? void 0 : _b.calculated_price) !== null && _c !== void 0 ? _c : undefined;
                }
                if (unit_price == null) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot generate line item for variant \"".concat((_e = (_d = variant.title) !== null && _d !== void 0 ? _d : variant.product.title) !== null && _e !== void 0 ? _e : variant.id, "\" without a price"));
                }
                rawLineItem = {
                    unit_price: unit_price,
                    title: variant.product.title,
                    description: variant.title,
                    thumbnail: variant.product.thumbnail,
                    variant_id: variant.id,
                    quantity: quantity || 1,
                    allow_discounts: variant.product.discountable,
                    is_giftcard: variant.product.is_giftcard,
                    metadata: (context === null || context === void 0 ? void 0 : context.metadata) || {},
                    should_merge: shouldMerge,
                };
                if (this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
                    rawLineItem.product_id = variant.product_id;
                }
                if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                    rawLineItem.includes_tax = unitPriceIncludesTax;
                }
                rawLineItem.order_edit_id = context.order_edit_id || null;
                lineItemRepo = this.activeManager_.withRepository(this.lineItemRepository_);
                lineItem = lineItemRepo.create(rawLineItem);
                lineItem.variant = variant;
                return [2 /*return*/, lineItem];
            });
        });
    };
    /**
     * Create a line item
     * @param data - the line item object to create
     * @return the created line item
     */
    LineItemService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemRepository, data_, items, lineItems;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineItemRepository = transactionManager.withRepository(this.lineItemRepository_);
                                        data_ = (Array.isArray(data) ? data : [data]);
                                        items = lineItemRepository.create(data_);
                                        return [4 /*yield*/, lineItemRepository.save(items)];
                                    case 1:
                                        lineItems = _a.sent();
                                        return [2 /*return*/, (Array.isArray(data)
                                                ? lineItems
                                                : lineItems[0])];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a line item
     * @param idOrSelector - the id or selector of the line item(s) to update
     * @param data - the properties to update the line item(s)
     * @return the updated line item(s)
     */
    LineItemService.prototype.update = function (idOrSelector, data) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata, rest;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = data.metadata, rest = __rest(data, ["metadata"]);
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var lineItemRepository, selector, lineItems, selectorConstraints;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            lineItemRepository = transactionManager.withRepository(this.lineItemRepository_);
                                            selector = typeof idOrSelector === "string" ? { id: idOrSelector } : idOrSelector;
                                            return [4 /*yield*/, this.list(selector)];
                                        case 1:
                                            lineItems = _a.sent();
                                            if (!lineItems.length) {
                                                selectorConstraints = (0, utils_1.selectorConstraintsToString)(selector);
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Line item with ".concat(selectorConstraints, " was not found"));
                                            }
                                            lineItems = lineItems.map(function (item) {
                                                item.metadata = metadata ? (0, utils_2.setMetadata)(item, metadata) : item.metadata;
                                                return Object.assign(item, rest);
                                            });
                                            return [4 /*yield*/, lineItemRepository.save(lineItems)];
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
     * Deletes a line item.
     * @param id - the id of the line item to delete
     * @return the result of the delete operation
     */
    LineItemService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = Array.isArray(id) ? id : [id];
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var lineItemRepository, lineItems, removedItems;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            lineItemRepository = transactionManager.withRepository(this.lineItemRepository_);
                                            return [4 /*yield*/, lineItemRepository.find({
                                                    where: { id: (0, typeorm_1.In)(ids) },
                                                })];
                                        case 1:
                                            lineItems = _a.sent();
                                            if (!(lineItems === null || lineItems === void 0 ? void 0 : lineItems.length)) {
                                                return [2 /*return*/, Array.isArray(id) ? [] : void 0];
                                            }
                                            return [4 /*yield*/, lineItemRepository.remove(lineItems)];
                                        case 2:
                                            removedItems = _a.sent();
                                            return [2 /*return*/, Array.isArray(id) ? removedItems : removedItems[0]];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @deprecated no the cascade on the entity takes care of it
     * Deletes a line item with the tax lines.
     * @param id - the id of the line item to delete
     * @return the result of the delete operation
     */
    LineItemService.prototype.deleteWithTaxLines = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.taxProviderService_
                                            .withTransaction(transactionManager)
                                            .clearLineItemsTaxLines([id])];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.delete(id)];
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
     * Create a line item tax line.
     * @param args - tax line partial passed to the repo create method
     * @return a new line item tax line
     */
    LineItemService.prototype.createTaxLine = function (args) {
        var itemTaxLineRepo = this.activeManager_.withRepository(this.itemTaxLineRepo_);
        return itemTaxLineRepo.create(args);
    };
    LineItemService.prototype.cloneTo = function (ids, data, options) {
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = {
            setOriginalLineItemId: true,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = typeof ids === "string" ? [ids] : ids;
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var lineItems, lineItemRepository, order_id, swap_id, claim_order_id, cart_id, order_edit_id, lineItemData, clonedLineItemEntities;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.list({
                                                id: (0, typeorm_1.In)(ids),
                                            }, {
                                                relations: ["tax_lines", "adjustments"],
                                            })];
                                        case 1:
                                            lineItems = _a.sent();
                                            lineItemRepository = manager.withRepository(this.lineItemRepository_);
                                            order_id = data.order_id, swap_id = data.swap_id, claim_order_id = data.claim_order_id, cart_id = data.cart_id, order_edit_id = data.order_edit_id, lineItemData = __rest(data, ["order_id", "swap_id", "claim_order_id", "cart_id", "order_edit_id"]);
                                            if (!order_id &&
                                                !swap_id &&
                                                !claim_order_id &&
                                                !cart_id &&
                                                !order_edit_id) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Unable to clone a line item that is not attached to at least one of: order_edit, order, swap, claim or cart.");
                                            }
                                            lineItems = lineItems.map(function (item) {
                                                var _a, _b;
                                                return (__assign(__assign(__assign({}, item), lineItemData), { id: undefined, order_id: order_id, swap_id: swap_id, claim_order_id: claim_order_id, cart_id: cart_id, order_edit_id: order_edit_id, original_item_id: (options === null || options === void 0 ? void 0 : options.setOriginalLineItemId) ? item.id : undefined, tax_lines: (_a = item.tax_lines) === null || _a === void 0 ? void 0 : _a.map(function (tax_line) { return (__assign(__assign({}, tax_line), { id: undefined, item_id: undefined })); }), adjustments: (_b = item.adjustments) === null || _b === void 0 ? void 0 : _b.map(function (adj) { return (__assign(__assign({}, adj), { id: undefined, item_id: undefined })); }) }));
                                            });
                                            clonedLineItemEntities = lineItemRepository.create(lineItems);
                                            return [4 /*yield*/, lineItemRepository.save(clonedLineItemEntities)];
                                        case 2: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LineItemService.prototype.validateGenerateArguments = function (variantIdOrData, regionIdOrContext, quantity) {
        var errorMessage = "Unable to generate the line item because one or more required argument(s) are missing";
        if ((0, utils_2.isString)(variantIdOrData)) {
            if (!quantity || !regionIdOrContext || !(0, utils_2.isString)(regionIdOrContext)) {
                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "".concat(errorMessage, ". Ensure quantity, regionId, and variantId are passed"));
            }
            if (!variantIdOrData) {
                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "".concat(errorMessage, ". Ensure variant id is passed"));
            }
            return;
        }
        var resolvedContext = regionIdOrContext;
        if (!(resolvedContext === null || resolvedContext === void 0 ? void 0 : resolvedContext.region_id)) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "".concat(errorMessage, ". Ensure region or region_id are passed"));
        }
        var variantsData = Array.isArray(variantIdOrData)
            ? variantIdOrData
            : [variantIdOrData];
        var hasMissingVariantId = variantsData.some(function (d) { return !(d === null || d === void 0 ? void 0 : d.variantId); });
        if (hasMissingVariantId) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "".concat(errorMessage, ". Ensure a variant id is passed for each variant"));
        }
    };
    return LineItemService;
}(interfaces_1.TransactionBaseService));
exports.default = LineItemService;
//# sourceMappingURL=line-item.js.map