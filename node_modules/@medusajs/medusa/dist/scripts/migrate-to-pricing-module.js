"use strict";
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
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var loaders_1 = __importDefault(require("../loaders"));
var logger_1 = __importDefault(require("../loaders/logger"));
var create_default_rule_types_1 = require("./utils/create-default-rule-types");
var migrate_money_amounts_to_pricing_module_1 = require("./utils/migrate-money-amounts-to-pricing-module");
dotenv_1.default.config();
var BATCH_SIZE = 1000;
var migratePriceLists = function (container) { return __awaiter(void 0, void 0, void 0, function () {
    var pricingModuleService, offset, priceListCoreService, remoteQuery, _a, _, totalCount, _loop_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                pricingModuleService = container.resolve("pricingModuleService");
                offset = 0;
                priceListCoreService = container.resolve("priceListService");
                remoteQuery = container.resolve("remoteQuery");
                return [4 /*yield*/, priceListCoreService.listAndCount({}, { select: ["id"] })];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 2]), _ = _a[0], totalCount = _a[1];
                _loop_1 = function () {
                    var corePriceLists, pricingModulePriceLists, priceListIdsToUpdateSet, priceListsToCreate, priceListsToUpdate, variantIds, corePriceLists_1, corePriceLists_1_1, corePriceList, corePrices, query, variantPriceSets, variantIdPriceSetIdMap, promises;
                    var e_1, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, priceListCoreService.list({}, {
                                    take: BATCH_SIZE,
                                    skip: offset,
                                    relations: ["customer_groups", "prices", "prices.variants"],
                                })];
                            case 1:
                                corePriceLists = _d.sent();
                                return [4 /*yield*/, pricingModuleService.listPriceLists({ id: corePriceLists.map(function (_a) {
                                            var id = _a.id;
                                            return id;
                                        }) }, {
                                        take: BATCH_SIZE,
                                        skip: offset,
                                        select: ["id"],
                                    })];
                            case 2:
                                pricingModulePriceLists = _d.sent();
                                priceListIdsToUpdateSet = new Set(pricingModulePriceLists.map(function (_a) {
                                    var id = _a.id;
                                    return id;
                                }));
                                priceListsToCreate = [];
                                priceListsToUpdate = [];
                                variantIds = [];
                                try {
                                    for (corePriceLists_1 = (e_1 = void 0, __values(corePriceLists)), corePriceLists_1_1 = corePriceLists_1.next(); !corePriceLists_1_1.done; corePriceLists_1_1 = corePriceLists_1.next()) {
                                        corePriceList = corePriceLists_1_1.value;
                                        if (priceListIdsToUpdateSet.has(corePriceList.id)) {
                                            priceListsToUpdate.push(corePriceList);
                                        }
                                        else {
                                            priceListsToCreate.push(corePriceList);
                                        }
                                        corePrices = corePriceList.prices || [];
                                        variantIds.push.apply(variantIds, __spreadArray([], __read(corePrices.map(function (corePrice) { var _a, _b; return (_b = (_a = corePrice.variants) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id; })), false));
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (corePriceLists_1_1 && !corePriceLists_1_1.done && (_c = corePriceLists_1.return)) _c.call(corePriceLists_1);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                                query = {
                                    product_variant_price_set: {
                                        __args: {
                                            variant_id: variantIds,
                                        },
                                        fields: ["variant_id", "price_set_id"],
                                    },
                                };
                                return [4 /*yield*/, remoteQuery(query)];
                            case 3:
                                variantPriceSets = _d.sent();
                                variantIdPriceSetIdMap = new Map(variantPriceSets.map(function (vps) { return [vps.variant_id, vps.price_set_id]; }));
                                promises = [];
                                if (!priceListsToUpdate.length) return [3 /*break*/, 5];
                                return [4 /*yield*/, pricingModuleService.updatePriceLists(priceListsToUpdate.map(function (priceList) {
                                        var _a;
                                        var updateData = {
                                            id: priceList.id,
                                        };
                                        if ((_a = priceList === null || priceList === void 0 ? void 0 : priceList.customer_groups) === null || _a === void 0 ? void 0 : _a.length) {
                                            updateData.rules = {
                                                customer_group_id: priceList.customer_groups.map(function (_a) {
                                                    var id = _a.id;
                                                    return id;
                                                }),
                                            };
                                        }
                                        return updateData;
                                    }))];
                            case 4:
                                _d.sent();
                                promises.push(pricingModuleService.addPriceListPrices(priceListsToUpdate.map(function (priceList) {
                                    return {
                                        price_list_id: priceList.id,
                                        prices: priceList.prices
                                            .filter(function (price) { var _a, _b; return variantIdPriceSetIdMap.has((_b = (_a = price.variants) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id); })
                                            .map(function (price) {
                                            var _a, _b;
                                            return {
                                                price_set_id: variantIdPriceSetIdMap.get((_b = (_a = price.variants) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id),
                                                currency_code: price.currency_code,
                                                amount: price.amount,
                                                min_quantity: price.min_quantity,
                                                max_quantity: price.max_quantity,
                                            };
                                        }),
                                    };
                                })));
                                _d.label = 5;
                            case 5:
                                if (priceListsToCreate.length) {
                                    promises.push(pricingModuleService.createPriceLists(priceListsToCreate.map(function (_a) {
                                        var title = _a.name, prices = _a.prices, customer_groups = _a.customer_groups, priceList = __rest(_a, ["name", "prices", "customer_groups"]);
                                        var createData = __assign(__assign({}, priceList), { title: title });
                                        if (customer_groups === null || customer_groups === void 0 ? void 0 : customer_groups.length) {
                                            createData.rules = {
                                                customer_group_id: customer_groups.map(function (_a) {
                                                    var id = _a.id;
                                                    return id;
                                                }),
                                            };
                                        }
                                        if (prices === null || prices === void 0 ? void 0 : prices.length) {
                                            createData.prices = prices.map(function (price) {
                                                var _a, _b;
                                                return {
                                                    price_set_id: variantIdPriceSetIdMap.get((_b = (_a = price.variants) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id),
                                                    currency_code: price.currency_code,
                                                    amount: price.amount,
                                                    min_quantity: price.min_quantity,
                                                    max_quantity: price.max_quantity,
                                                };
                                            });
                                        }
                                        return createData;
                                    })));
                                }
                                return [4 /*yield*/, (0, utils_1.promiseAll)(promises)];
                            case 6:
                                _d.sent();
                                offset += corePriceLists.length;
                                logger_1.default.info("Processed ".concat(offset, " of ").concat(totalCount));
                                return [2 /*return*/];
                        }
                    });
                };
                _b.label = 2;
            case 2:
                if (!(offset < totalCount)) return [3 /*break*/, 4];
                return [5 /*yield**/, _loop_1()];
            case 3:
                _b.sent();
                return [3 /*break*/, 2];
            case 4: return [2 /*return*/];
        }
    });
}); };
var migrate = function (_a) {
    var directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        var app, container;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    app = (0, express_1.default)();
                    return [4 /*yield*/, (0, loaders_1.default)({
                            directory: directory,
                            expressApp: app,
                            isTest: false,
                        })];
                case 1:
                    container = (_b.sent()).container;
                    logger_1.default.info("-----------------------------------------------");
                    logger_1.default.info("--------- Creating default rule types ---------");
                    logger_1.default.info("-----------------------------------------------");
                    return [4 /*yield*/, (0, create_default_rule_types_1.createDefaultRuleTypes)(container)];
                case 2:
                    _b.sent();
                    logger_1.default.info("-----------------------------------------------");
                    logger_1.default.info("---------- Migrating Variant Prices -----------");
                    logger_1.default.info("-----------------------------------------------");
                    return [4 /*yield*/, (0, migrate_money_amounts_to_pricing_module_1.migrateProductVariantPricing)(container)];
                case 3:
                    _b.sent();
                    logger_1.default.info("-----------------------------------------------");
                    logger_1.default.info("----------- Migrating Price Lists -------------");
                    logger_1.default.info("-----------------------------------------------");
                    return [4 /*yield*/, migratePriceLists(container)];
                case 4: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
migrate({ directory: process.cwd() })
    .then(function () {
    logger_1.default.info("Migrated price lists");
    process.exit(0);
})
    .catch(function (error) {
    console.warn(error);
    logger_1.default.info("Failed to migrate price lists");
    process.exit(1);
});
//# sourceMappingURL=migrate-to-pricing-module.js.map