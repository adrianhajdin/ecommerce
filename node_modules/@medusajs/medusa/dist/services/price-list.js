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
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_2 = require("../utils");
/**
 * Provides layer to manipulate product tags.
 */
var PriceListService = /** @class */ (function (_super) {
    __extends(PriceListService, _super);
    function PriceListService(_a) {
        var customerGroupService = _a.customerGroupService, regionService = _a.regionService, productService = _a.productService, productVariantService = _a.productVariantService, priceListRepository = _a.priceListRepository, moneyAmountRepository = _a.moneyAmountRepository, productVariantRepository = _a.productVariantRepository, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.customerGroupService_ = customerGroupService;
        _this.productService_ = productService;
        _this.variantService_ = productVariantService;
        _this.regionService_ = regionService;
        _this.priceListRepo_ = priceListRepository;
        _this.moneyAmountRepo_ = moneyAmountRepository;
        _this.productVariantRepo_ = productVariantRepository;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Retrieves a product tag by id.
     * @param {string} priceListId - the id of the product tag to retrieve
     * @param {Object} config - the config to retrieve the tag by
     * @return {Promise<PriceList>} the collection.
     */
    PriceListService.prototype.retrieve = function (priceListId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var priceListRepo, query, priceList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(priceListId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"priceListId\" must be defined");
                        }
                        priceListRepo = this.activeManager_.withRepository(this.priceListRepo_);
                        query = (0, utils_2.buildQuery)({ id: priceListId }, config);
                        return [4 /*yield*/, priceListRepo.findOne(query)];
                    case 1:
                        priceList = _a.sent();
                        if (!priceList) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Price list with id: ".concat(priceListId, " was not found"));
                        }
                        return [2 /*return*/, priceList];
                }
            });
        });
    };
    PriceListService.prototype.listPriceListsVariantIdsMap = function (priceListIds) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var priceListRepo, priceListsVariantIdsMap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        priceListIds = Array.isArray(priceListIds) ? priceListIds : [priceListIds];
                        if (!priceListIds.length) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"priceListIds\" must be defined");
                        }
                        priceListRepo = this.activeManager_.withRepository(this.priceListRepo_);
                        return [4 /*yield*/, priceListRepo.listPriceListsVariantIdsMap(priceListIds)];
                    case 1:
                        priceListsVariantIdsMap = _b.sent();
                        if (!((_a = Object.keys(priceListsVariantIdsMap)) === null || _a === void 0 ? void 0 : _a.length)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "No PriceLists found with ids: ".concat(priceListIds.join(", ")));
                        }
                        return [2 /*return*/, priceListsVariantIdsMap];
                }
            });
        });
    };
    /**
     * Creates a Price List
     * @param priceListObject - the Price List to create
     * @return created Price List
     */
    PriceListService.prototype.create = function (priceListObject) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var priceListRepo, moneyAmountRepo, prices, customer_groups, includes_tax, rest, rawPriceList, entity, priceList, prices_;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        priceListRepo = manager.withRepository(this.priceListRepo_);
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepo_);
                                        prices = priceListObject.prices, customer_groups = priceListObject.customer_groups, includes_tax = priceListObject.includes_tax, rest = __rest(priceListObject, ["prices", "customer_groups", "includes_tax"]);
                                        rawPriceList = __assign({}, rest);
                                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                            if (typeof includes_tax !== "undefined") {
                                                rawPriceList.includes_tax = includes_tax;
                                            }
                                        }
                                        entity = priceListRepo.create(rawPriceList);
                                        return [4 /*yield*/, priceListRepo.save(entity)];
                                    case 1:
                                        priceList = _a.sent();
                                        if (!prices) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.addCurrencyFromRegion(prices)];
                                    case 2:
                                        prices_ = _a.sent();
                                        return [4 /*yield*/, moneyAmountRepo.addPriceListPrices(priceList.id, prices_)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        if (!customer_groups) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.upsertCustomerGroups_(priceList.id, customer_groups)];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [4 /*yield*/, this.retrieve(priceList.id, {
                                            relations: ["prices", "customer_groups"],
                                        })];
                                    case 7: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a Price List
     * @param {string} id - the id of the Product List to update
     * @param {UpdatePriceListInput} update - the update to apply
     * @returns {Promise<PriceList>} updated Price List
     */
    PriceListService.prototype.update = function (id, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var priceListRepo, moneyAmountRepo, priceList, prices, customer_groups, includes_tax, rest, prices_, _a, _b, _c, key, value;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        priceListRepo = manager.withRepository(this.priceListRepo_);
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepo_);
                                        return [4 /*yield*/, this.retrieve(id, { select: ["id"] })];
                                    case 1:
                                        priceList = _e.sent();
                                        prices = update.prices, customer_groups = update.customer_groups, includes_tax = update.includes_tax, rest = __rest(update, ["prices", "customer_groups", "includes_tax"]);
                                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                            if (typeof includes_tax !== "undefined") {
                                                priceList.includes_tax = includes_tax;
                                            }
                                        }
                                        if (!prices) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.addCurrencyFromRegion(prices)];
                                    case 2:
                                        prices_ = _e.sent();
                                        return [4 /*yield*/, moneyAmountRepo.updatePriceListPrices(id, prices_)];
                                    case 3:
                                        _e.sent();
                                        _e.label = 4;
                                    case 4:
                                        if (!customer_groups) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.upsertCustomerGroups_(id, customer_groups)];
                                    case 5:
                                        _e.sent();
                                        _e.label = 6;
                                    case 6:
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                if (typeof value === "undefined") {
                                                    continue;
                                                }
                                                priceList[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, priceListRepo.save(priceList)];
                                    case 7:
                                        _e.sent();
                                        return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["prices", "customer_groups"],
                                            })];
                                    case 8: return [2 /*return*/, _e.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds prices to a price list in bulk, optionally replacing all existing prices
     * @param id - id of the price list
     * @param prices - prices to add
     * @param replace - whether to replace existing prices
     * @returns {Promise<PriceList>} updated Price List
     */
    PriceListService.prototype.addPrices = function (id, prices, replace) {
        if (replace === void 0) { replace = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, priceList, prices_;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepo_);
                                        return [4 /*yield*/, this.retrieve(id, { select: ["id"] })];
                                    case 1:
                                        priceList = _a.sent();
                                        return [4 /*yield*/, this.addCurrencyFromRegion(prices)];
                                    case 2:
                                        prices_ = _a.sent();
                                        return [4 /*yield*/, moneyAmountRepo.addPriceListPrices(priceList.id, prices_, replace)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.retrieve(priceList.id, {
                                                relations: ["prices"],
                                            })];
                                    case 4: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes prices from a price list and deletes the removed prices in bulk
     * @param id - id of the price list
     * @param priceIds - ids of the prices to delete
     * @returns {Promise<void>} updated Price List
     */
    PriceListService.prototype.deletePrices = function (id, priceIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, priceList;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepo_);
                                        return [4 /*yield*/, this.retrieve(id, { select: ["id"] })];
                                    case 1:
                                        priceList = _a.sent();
                                        return [4 /*yield*/, moneyAmountRepo.deletePriceListPrices(priceList.id, priceIds)];
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
     * Removes all prices from a price list and deletes the removed prices in bulk
     * @param id - id of the price list
     * @returns {Promise<void>} updated Price List
     */
    PriceListService.prototype.clearPrices = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, priceList;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepo_);
                                        return [4 /*yield*/, this.retrieve(id, { select: ["id"] })];
                                    case 1:
                                        priceList = _a.sent();
                                        return [4 /*yield*/, moneyAmountRepo.delete({ price_list_id: priceList.id })];
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
     * Deletes a Price List
     * Will never fail due to delete being idempotent.
     * @param id - id of the price list
     * @returns {Promise<void>} empty promise
     */
    PriceListService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var priceListRepo, priceList;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        priceListRepo = manager.withRepository(this.priceListRepo_);
                                        return [4 /*yield*/, priceListRepo.findOne({ where: { id: id } })];
                                    case 1:
                                        priceList = _a.sent();
                                        if (!priceList) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, priceListRepo.remove(priceList)];
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
     * Lists Price Lists
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise<PriceList[]>} the result of the find operation
     */
    PriceListService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, priceLists;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), priceLists = _a[0];
                        return [2 /*return*/, priceLists];
                }
            });
        });
    };
    /**
     * Lists Price Lists and adds count
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    PriceListService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = {
            skip: 0,
            take: 20,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var priceListRepo, q, priceListSelector, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        priceListRepo = this.activeManager_.withRepository(this.priceListRepo_);
                        q = selector.q, priceListSelector = __rest(selector, ["q"]);
                        query = (0, utils_2.buildQuery)(priceListSelector, config);
                        return [4 /*yield*/, priceListRepo.listAndCount(query, q)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PriceListService.prototype.upsertCustomerGroups_ = function (priceListId, customerGroups) {
        return __awaiter(this, void 0, void 0, function () {
            var priceListRepo, priceList, groups, customerGroups_1, customerGroups_1_1, cg, customerGroup, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        priceListRepo = this.activeManager_.withRepository(this.priceListRepo_);
                        return [4 /*yield*/, this.retrieve(priceListId, { select: ["id"] })];
                    case 1:
                        priceList = _b.sent();
                        groups = [];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        customerGroups_1 = __values(customerGroups), customerGroups_1_1 = customerGroups_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!customerGroups_1_1.done) return [3 /*break*/, 6];
                        cg = customerGroups_1_1.value;
                        return [4 /*yield*/, this.customerGroupService_.retrieve(cg.id)];
                    case 4:
                        customerGroup = _b.sent();
                        groups.push(customerGroup);
                        _b.label = 5;
                    case 5:
                        customerGroups_1_1 = customerGroups_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (customerGroups_1_1 && !customerGroups_1_1.done && (_a = customerGroups_1.return)) _a.call(customerGroups_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        priceList.customer_groups = groups;
                        return [4 /*yield*/, priceListRepo.save(priceList)];
                    case 10:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PriceListService.prototype.listProducts = function (priceListId, selector, config, requiresPriceList) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
        }; }
        if (requiresPriceList === void 0) { requiresPriceList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productVariantRepo, _a, products, count, moneyAmountRepo, productsWithPrices;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        productVariantRepo = manager.withRepository(this.productVariantRepo_);
                                        return [4 /*yield*/, this.productService_
                                                .withTransaction(manager)
                                                .listAndCount(selector, config)];
                                    case 1:
                                        _a = __read.apply(void 0, [_b.sent(), 2]), products = _a[0], count = _a[1];
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepo_);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(products.map(function (p) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a;
                                                var _this = this;
                                                var _b;
                                                return __generator(this, function (_c) {
                                                    switch (_c.label) {
                                                        case 0:
                                                            if (!((_b = p.variants) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 2];
                                                            _a = p;
                                                            return [4 /*yield*/, (0, utils_1.promiseAll)(p.variants.map(function (v) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var _a, prices, variant;
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0: return [4 /*yield*/, moneyAmountRepo.findManyForVariantInPriceList(v.id, priceListId, requiresPriceList)];
                                                                            case 1:
                                                                                _a = __read.apply(void 0, [_b.sent(), 1]), prices = _a[0];
                                                                                variant = productVariantRepo.create(__assign({}, v));
                                                                                variant.prices = prices;
                                                                                return [2 /*return*/, variant];
                                                                        }
                                                                    });
                                                                }); }))];
                                                        case 1:
                                                            _a.variants = _c.sent();
                                                            _c.label = 2;
                                                        case 2: return [2 /*return*/, p];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        productsWithPrices = _b.sent();
                                        return [2 /*return*/, [productsWithPrices, count]];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PriceListService.prototype.listVariants = function (priceListId, selector, config, requiresPriceList) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
        }; }
        if (requiresPriceList === void 0) { requiresPriceList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, variants, count, moneyAmountRepo, variantsWithPrices;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.variantService_
                                            .withTransaction(manager)
                                            .listAndCount(selector, config)];
                                    case 1:
                                        _a = __read.apply(void 0, [_b.sent(), 2]), variants = _a[0], count = _a[1];
                                        moneyAmountRepo = manager.withRepository(this.moneyAmountRepo_);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(variants.map(function (variant) { return __awaiter(_this, void 0, void 0, function () {
                                                var _a, prices;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0: return [4 /*yield*/, moneyAmountRepo.findManyForVariantInPriceList(variant.id, priceListId, requiresPriceList)];
                                                        case 1:
                                                            _a = __read.apply(void 0, [_b.sent(), 1]), prices = _a[0];
                                                            variant.prices = prices;
                                                            return [2 /*return*/, variant];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        variantsWithPrices = _b.sent();
                                        return [2 /*return*/, [variantsWithPrices, count]];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PriceListService.prototype.deleteProductPrices = function (priceListId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, products, count, priceIds;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.listProducts(priceListId, {
                                            id: productIds,
                                        }, {
                                            relations: ["variants"],
                                        }, true)];
                                    case 1:
                                        _a = __read.apply(void 0, [_b.sent(), 2]), products = _a[0], count = _a[1];
                                        if (count === 0) {
                                            return [2 /*return*/, [[], count]];
                                        }
                                        priceIds = products
                                            .map(function (_a) {
                                            var variants = _a.variants;
                                            return variants
                                                .map(function (variant) { return variant.prices.map(function (price) { return price.id; }); })
                                                .flat();
                                        })
                                            .flat();
                                        if (!priceIds.length) {
                                            return [2 /*return*/, [[], 0]];
                                        }
                                        return [4 /*yield*/, this.deletePrices(priceListId, priceIds)];
                                    case 2:
                                        _b.sent();
                                        return [2 /*return*/, [priceIds, priceIds.length]];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PriceListService.prototype.deleteVariantPrices = function (priceListId, variantIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, variants, count, priceIds;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.listVariants(priceListId, {
                                            id: variantIds,
                                        }, {}, true)];
                                    case 1:
                                        _a = __read.apply(void 0, [_b.sent(), 2]), variants = _a[0], count = _a[1];
                                        if (count === 0) {
                                            return [2 /*return*/, [[], count]];
                                        }
                                        priceIds = variants
                                            .map(function (variant) { return variant.prices.map(function (price) { return price.id; }); })
                                            .flat();
                                        if (!priceIds.length) {
                                            return [2 /*return*/, [[], 0]];
                                        }
                                        return [4 /*yield*/, this.deletePrices(priceListId, priceIds)];
                                    case 2:
                                        _b.sent();
                                        return [2 /*return*/, [priceIds, priceIds.length]];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Add `currency_code` to an MA record if `region_id`is passed.
     * @param prices - a list of PriceListPrice(Create/Update)Input records
     * @return {Promise} updated `prices` list
     */
    PriceListService.prototype.addCurrencyFromRegion = function (prices) {
        return __awaiter(this, void 0, void 0, function () {
            var prices_, regionServiceTx, regions, regionsMap, prices_1, prices_1_1, price, p, region;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        prices_ = [];
                        regionServiceTx = this.regionService_.withTransaction(this.activeManager_);
                        return [4 /*yield*/, regionServiceTx.list({
                                id: __spreadArray([], __read(new Set(prices
                                    .map(function (p) { return p.region_id; })
                                    .filter(function (p) { return !!p; }))), false),
                            }, {})];
                    case 1:
                        regions = _b.sent();
                        regionsMap = new Map(regions.map(function (r) { return [r.id, r]; }));
                        try {
                            for (prices_1 = __values(prices), prices_1_1 = prices_1.next(); !prices_1_1.done; prices_1_1 = prices_1.next()) {
                                price = prices_1_1.value;
                                p = __assign({}, price);
                                if (p.region_id) {
                                    region = regionsMap.get(p.region_id);
                                    p.currency_code = region.currency_code;
                                }
                                prices_.push(p);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (prices_1_1 && !prices_1_1.done && (_a = prices_1.return)) _a.call(prices_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/, prices_];
                }
            });
        });
    };
    return PriceListService;
}(interfaces_1.TransactionBaseService));
exports.default = PriceListService;
//# sourceMappingURL=price-list.js.map